import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className, variant = "light" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="#inicio" className={cn("flex items-center gap-3", className)}>
      <Image
        src="/brand/logo.png"
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-lg"
        priority
        aria-hidden
      />
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-base font-bold tracking-wide sm:text-lg",
            isLight ? "text-white" : "text-primary",
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
          "text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px]",
          isLight ? "text-[#5ec8e8]" : "text-secondary",
        )}
        >
          {siteConfig.tagline}
        </span>
      </div>
    </Link>
  );
}
