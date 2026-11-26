import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Полный знак с подписью — для футера; в шапке только BAZA. */
  showTagline?: boolean;
  /** Белая версия букв — поверх тёмного hero в шапке. */
  onDark?: boolean;
};

/** Оригинальный логотип клиента (PNG без белого фона). */
export function BazaMark({ className, showTagline = false, onDark = false }: Props) {
  return (
    <img
      src={
        showTagline
          ? onDark
            ? "/brand/logo-baza-lockup-white.png"
            : "/brand/logo-baza-lockup.png"
          : onDark
            ? "/brand/logo-baza-mark-white.png"
            : "/brand/logo-baza-mark.png"
      }
      alt=""
      aria-hidden
      width={showTagline ? 721 : 706}
      height={showTagline ? 221 : 172}
      decoding="async"
      className={cn("block w-auto max-w-none object-contain object-left", className)}
    />
  );
}
