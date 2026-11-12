import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { PRIMARY_PHONE } from "@/content/landing";
import { PAGE_VISUALS } from "@/content/serviceVisuals";

export const Route = createFileRoute("/spasibo")({
  head: () => ({
    meta: [
      { title: "Спасибо за заявку — DrivePrime" },
      { name: "description", content: "Заявка принята. Мы перезвоним в рабочее время." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThanksRoute,
});

function ThanksRoute() {
  return (
    <SiteLayout>
      <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-28 pb-20">
        <img
          src={PAGE_VISUALS.thanks.src}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.985_0.012_80)_0%,oklch(0.985_0.012_80/92%)_36%,oklch(0.985_0.012_80/35%)_58%,transparent_78%)]"
          aria-hidden="true"
        />
        <div className="container-page max-w-2xl">
          <span className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-8" aria-hidden="true" />
          </span>
          <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
            Спасибо, заявка принята
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Менеджер перезвонит в рабочее время и подберёт курс под вашу ситуацию. Если вопрос срочный —
            позвоните сами.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href={PRIMARY_PHONE.href}>{PRIMARY_PHONE.display}</a>
            </Button>
            <Button asChild variant="subtle" size="xl">
              <Link to="/">
                На главную
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
