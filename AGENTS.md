## Project rules
- Landing is a single page at `/` composed of section components in `src/components/landing/`; copy shared across sections lives in `src/content/landing.ts` — keeps future pages reusing the same visual language and copy source.
- All styling goes through tokens/utilities in `src/styles.css` and Button/Badge variants; no raw color classes in components — the landing defines the design system for later pages.
- CTA wording convention (all locales follow the same pattern): «Подобрать курс» on the first screen; «Узнать стоимость» on training-course cards; «Задать вопрос» in the header and for contacting managers. New CTAs should reuse these labels instead of inventing «Записаться»-style variants.
