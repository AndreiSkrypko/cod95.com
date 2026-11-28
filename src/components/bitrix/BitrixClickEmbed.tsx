import { useEffect, useRef } from "react";
import type { BitrixFormKey } from "@/lib/bitrix";
import { BITRIX_FORMS } from "@/lib/bitrix";

type Props = {
  formKey: BitrixFormKey;
  /** DOM id of the trigger anchor (taxocard uses b24-trigger-17 for proxy clicks). */
  triggerId: string;
  className?: string;
};

/**
 * Same pattern as taxocard.by: <script data-b24-form="click/{id}/{sec}"> + <a href="#">.
 * Bitrix binds the anchor to the CRM popup / submit pipeline.
 */
export function BitrixClickEmbed({ formKey, triggerId, className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const form = BITRIX_FORMS[formKey];
  const clickAttr = `click/${form.id}/${form.sec}`;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || wrap.querySelector(`script[data-b24-form="${clickAttr}"]`)) return;

    const script = document.createElement("script");
    script.setAttribute("data-b24-form", clickAttr);
    script.setAttribute("data-skip-moving", "true");
    script.textContent = `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'${form.loader}');`;
    wrap.insertBefore(script, wrap.firstChild);
  }, [clickAttr, form.loader]);

  return (
    <div ref={wrapRef} className={className ?? "b24 sr-only"} aria-hidden>
      <a id={triggerId} href="#" tabIndex={-1}>
        Bitrix
      </a>
    </div>
  );
}

type B24Window = Window & { b24form?: { App?: unknown } };

function waitForBitrixApp(maxMs: number): Promise<boolean> {
  return new Promise((resolve) => {
    const started = Date.now();
    const step = () => {
      const w = window as B24Window;
      if (w.b24form?.App) {
        resolve(true);
        return;
      }
      if (Date.now() - started >= maxMs) {
        resolve(false);
        return;
      }
      window.setTimeout(step, 120);
    };
    step();
  });
}

/** Ждёт загрузки Bitrix App и открывает CRM-попап, как клик по кнопке на taxocard. */
export async function openBitrixClickForm(triggerId: string): Promise<boolean> {
  const el = document.getElementById(triggerId);
  if (!el) return false;

  const ready = await waitForBitrixApp(10_000);
  if (!ready) return false;

  el.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
    },
    { once: true, capture: true },
  );

  el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
  return true;
}
