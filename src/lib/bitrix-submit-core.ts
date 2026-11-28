import type { BitrixFormKey } from "@/lib/bitrix";
import { BITRIX_DOMAIN, BITRIX_FORMS } from "@/lib/bitrix";
import type { LeadPayload } from "@/lib/bitrix";

export type BitrixLeadRequest = {
  formKey: BitrixFormKey;
  payload: LeadPayload;
};

function buildFormValues(payload: LeadPayload, formKey: BitrixFormKey): Record<string, string> {
  const meta = [
    "Источник: cod95.com",
    payload.serviceLabel ? `Услуга: ${payload.serviceLabel}` : "",
    payload.comment ? `Комментарий: ${payload.comment}` : "",
    `Страница: ${payload.pageUrl}`,
  ]
    .filter(Boolean)
    .join("\n");

  const values: Record<string, string> = {
    LEAD_NAME: payload.name,
    LEAD_PHONE: payload.phone,
    AGREEMENT_1: "Y",
  };

  if (formKey === "employment" && payload.serviceLabel) {
    values.LEAD_COMPANY_TITLE = payload.serviceLabel;
  }

  if (meta) values.LEAD_COMMENTS = meta;

  return values;
}

export async function postBitrixLeadToCrm(
  formKey: BitrixFormKey,
  payload: LeadPayload,
  signal?: AbortSignal,
): Promise<{ ok: true; resultId?: number } | { ok: false; error: string }> {
  const form = BITRIX_FORMS[formKey];
  const values = buildFormValues(payload, formKey);

  const fromUrl =
    payload.pageUrl && !payload.pageUrl.includes("localhost")
      ? payload.pageUrl
      : "https://cod95.com";

  const body = new URLSearchParams({
    id: String(form.id),
    sec: form.sec,
    values: JSON.stringify(values),
    from: fromUrl,
  });

  const timeout = signal ?? AbortSignal.timeout(8_000);

  try {
    const res = await fetch(
      `https://${BITRIX_DOMAIN}/bitrix/services/main/ajax.php?action=crm.site.form.fill`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        signal: timeout,
      },
    );

    const text = await res.text();
    let json: { result?: { resultId?: number | null; message?: string } } | null = null;
    try {
      json = JSON.parse(text) as typeof json;
    } catch {
      return { ok: false, error: "invalid_response" };
    }

    const resultId = json?.result?.resultId;
    if (resultId && Number(resultId) > 0) {
      return { ok: true, resultId: Number(resultId) };
    }
    return { ok: false, error: "submit_rejected" };
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      return { ok: false, error: "timeout" };
    }
    return { ok: false, error: "network" };
  }
}
