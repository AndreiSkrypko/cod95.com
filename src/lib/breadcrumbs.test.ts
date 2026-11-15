import { describe, expect, it } from "vitest";
import { getBreadcrumbItems } from "./breadcrumbs";

describe("getBreadcrumbItems", () => {
  it("returns empty on home", () => {
    expect(getBreadcrumbItems("/")).toEqual([]);
  });

  it("builds static section trail", () => {
    expect(getBreadcrumbItems("/kontakty")).toEqual([
      { label: "Главная", to: "/" },
      { label: "Контакты", to: "/kontakty" },
    ]);
  });

  it("builds service trail", () => {
    const items = getBreadcrumbItems("/uslugi/short-course");
    expect(items[0]?.label).toBe("Главная");
    expect(items[1]).toEqual({ label: "Наши услуги", to: "/uslugi" });
    expect(items[2]?.label).toContain("Короткий курс");
    expect(items[2]?.to).toBeUndefined();
  });

  it("builds article trail", () => {
    const items = getBreadcrumbItems("/statyi/korotkiy-ili-dlinnyy-kurs");
    expect(items[1]).toEqual({ label: "Статьи", to: "/statyi" });
    expect(items[2]?.label).toContain("Короткий или длинный");
  });
});