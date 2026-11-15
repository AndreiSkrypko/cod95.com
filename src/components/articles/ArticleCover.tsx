import type { ArticleImage } from "@/content/articles";
import { cn } from "@/lib/utils";

export function ArticleCover({
  image,
  className,
  imgClassName,
}: {
  image: ArticleImage;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span className={cn("relative block overflow-hidden bg-background-deep", className)}>
      <img
        src={image.src}
        alt={image.alt}
        className={cn("h-full w-full object-cover", imgClassName)}
        style={{ objectPosition: image.objectPosition ?? "center" }}
      />
      <span
        className={cn("pointer-events-none absolute inset-0", image.overlayClass)}
        aria-hidden="true"
      />
    </span>
  );
}