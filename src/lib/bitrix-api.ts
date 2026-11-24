import type { BitrixFormKey, LeadPayload } from "@/lib/bitrix";
import { postBitrixLeadToCrm, type BitrixLeadRequest } from "@/lib/bitrix-submit-core";

const CLIENT_TIMEOUT_MS = 8_000;

const FORM_KEYS = new Set<BitrixFormKey>([
  "consult",
  "cost",
  "promo",
  "course",
  "delivery",
  "application",
  "pricing",
  "employment",
  "otherA",
  "otherB",
]);

function isLeadPayload(v: unknown): v is LeadPayload {
  if (!v || typeof v !== "object") return false;
  const p = v as LeadPayload;
  return (
    typeof p.name === "string" &&
    p.name.length >= 2 &&
    typeof p.phone === "string" &&
    p.phone.length >= 8 &&
    typeof p.serviceLabel === "string" &&
    typeof p.pageUrl === "string"
  );
}

export function parseBitrixLeadRequest(body: unknown): BitrixLeadRequest | null {
  if (!body || typeof body !== "object") return null;
  const { formKey, payload } = body as BitrixLeadRequest;
  if (!FORM_KEYS.has(formKey) || !isLeadPayload(payload)) return null;
  const comment = payload.comment;
  if (comment !== undefined && (typeof comment !== "string" || comment.length > 1000)) {
    return null;
  }
  return { formKey, payload };
}

async function submitViaApiProxy(
  formKey: BitrixFormKey,
  payload: LeadPayload,
): Promise<{ ok: true; resultId?: number } | { ok: false; error: string } | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CLIENT_TIMEOUT_MS);

  try {
    const res = await fetch("/api/bitrix-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formKey, payload } satisfies BitrixLeadRequest),
      signal: controller.signal,
    });

    const data = (await res.json().catch(() => null)) as {
      ok?: boolean;
      resultId?: number;
      error?: string;
    } | null;

    if (res.ok && data?.ok) return { ok: true, resultId: data.resultId };
    if (res.status === 400 || res.status === 502) {
      return { ok: false, error: data?.error ?? "submit_rejected" };
    }
    return null;
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      return { ok: false, error: "timeout" };
    }
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/** Browser → Bitrix (как embed на taxocard). Прокси только на проде, если CRM недоступна с клиента. */
export async function submitBitrixLead(
  formKey: BitrixFormKey,
  payload: LeadPayload,
): Promise<{ ok: true; resultId?: number } | { ok: false; error: string }> {
  const direct = await postBitrixLeadToCrm(
    formKey,
    payload,
    AbortSignal.timeout(CLIENT_TIMEOUT_MS),
  );
  if (direct.ok) return direct;

  if (
    import.meta.env.PROD &&
    (direct.error === "network" || direct.error === "timeout")
  ) {
    const proxied = await submitViaApiProxy(formKey, payload);
    if (proxied?.ok) return proxied;
    if (proxied && !proxied.ok) return proxied;
  }

  return direct;
}