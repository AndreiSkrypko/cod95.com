import { useEffect } from "react";
import { BITRIX_CALL_TRACKER } from "@/lib/bitrix";

/** Call tracker (taxocard.by). CRM-попап подключается в LeadForm при отправке. */
export function BitrixIntegration() {
  useEffect(() => {
    if (document.querySelector('script[data-b24-call-tracker="1"]')) return;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.b24CallTracker = "1";
    script.src = `${BITRIX_CALL_TRACKER}?${Math.floor(Date.now() / 60000)}`;
    document.head.appendChild(script);
  }, []);

  return null;
}