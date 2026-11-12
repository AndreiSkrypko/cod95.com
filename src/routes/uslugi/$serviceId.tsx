import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import type { ServiceId } from "@/content/landing";
import { getServiceById, isServiceId } from "@/content/servicePages";

export const Route = createFileRoute("/uslugi/$serviceId")({
  beforeLoad: ({ params }) => {
    if (!isServiceId(params.serviceId)) throw notFound();
  },
  head: ({ params }) => {
    const service = isServiceId(params.serviceId)
      ? getServiceById(params.serviceId)
      : undefined;
    const title = service ? `${service.title} — DrivePrime` : "Услуга — DrivePrime";
    const description = service?.text ?? "";
    return { meta: [{ title }, { name: "description", content: description }] };
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { serviceId } = Route.useParams();
  const service = getServiceById(serviceId as ServiceId);
  if (!service) throw notFound();
  return (
    <SiteLayout>
      <ServiceDetailPage service={service} />
    </SiteLayout>
  );
}
