import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactsPageContent } from "@/components/pages/ContactsPageContent";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

export const Route = createFileRoute("/kontakty")({
  head: () => ({
    meta: [
      { title: "Контакты — BAZA" },
      {
        name: "description",
        content:
          "Связь с учебным центром BAZA: телефон, график работы, заявка на консультацию и официальная информация об операторе в Польше.",
      },
    ],
  }),
  component: ContactsRoute,
});

function ContactsRoute() {
  return (
    <SiteLayout>
      <ContactsPage />
    </SiteLayout>
  );
}

function ContactsPage() {
  const { locale } = useLocale();
  const copy = PAGES[locale];
  useDocumentMeta(copy.meta.contactsTitle, copy.meta.contactsDescription);
  return <ContactsPageContent />;
}