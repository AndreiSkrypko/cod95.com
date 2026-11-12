import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches home", () => {
    expect(router.matchRoutes("/").at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches static pages like StarTruck structure", () => {
    for (const path of ["/o-nas", "/informaciya", "/kontakty", "/zapis", "/uslugi"]) {
      expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });

  it("matches service detail pages", () => {
    const m = router.matchRoutes("/uslugi/short-course");
    expect(m.at(-1)?.routeId).toContain("serviceId");
  });
});
