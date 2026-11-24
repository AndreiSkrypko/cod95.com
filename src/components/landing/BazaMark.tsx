import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Полный знак с подписью — для футера; в шапке только BAZA. */
  showTagline?: boolean;
};

/** Оригинальный логотип клиента (PNG без белого фона). */
export function BazaMark({ className, showTagline = false }: Props) {
  return (
    <img
      src={showTagline ? "/brand/logo-baza-lockup.png" : "/brand/logo-baza-mark.png"}
      alt=""
      aria-hidden
      width={showTagline ? 721 : 706}
      height={showTagline ? 221 : 172}
      decoding="async"
      className={cn("block w-auto max-w-none object-contain object-left", className)}
    />
  );
}