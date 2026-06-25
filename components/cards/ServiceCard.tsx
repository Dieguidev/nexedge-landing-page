import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  icon,
  href,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "flex h-full min-h-[23rem] w-full flex-col overflow-hidden rounded-2xl border border-[#1e4a6e]/60 bg-white shadow-[0_0_24px_rgba(30,120,180,0.15)] sm:min-h-[24rem]",
        className,
      )}
    >
      <div className="flex h-[8.5rem] shrink-0 items-center justify-center overflow-hidden bg-accent sm:h-[9.5rem]">
        <Image
          src={icon}
          alt=""
          width={320}
          height={320}
          className="h-[92%] w-[92%] scale-[1.35] object-contain"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-5 text-center sm:px-6 sm:pb-7 sm:pt-6">
        <h3 className="whitespace-pre-line text-lg font-bold leading-snug text-[#0a0e27] sm:text-xl">
          {title}
        </h3>

        <div
          className="my-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#0c1f3f] via-[#0eabb8] to-[#38bdf8] sm:my-3.5 sm:w-24"
          aria-hidden
        />

        <p className="flex-1 text-sm leading-relaxed text-[#1e293b] sm:text-base">
          {description}
        </p>

        <Link
          href={href}
          className="mt-4 text-sm font-bold text-[#0a0e27] transition-colors hover:text-accent sm:mt-5 sm:text-base"
        >
          Ver más
        </Link>
      </div>
    </article>
  );
}
