import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type PortfolioCardProps = {
  title: string;
  tag: string;
  category: string;
  description: string;
  image: string;
  cta: string;
  href: string;
  className?: string;
};

export function PortfolioCard({
  title,
  tag,
  category,
  description,
  image,
  cta,
  href,
  className,
}: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-gradient-to-br from-[#38bdf8] via-[#1e78b4] to-[#0a0e27] p-[2px] shadow-sm",
        className,
      )}
    >
      <div className="flex h-full flex-col gap-6 rounded-[calc(1.5rem-1px)] bg-[#060b27] p-6 sm:flex-row sm:items-stretch sm:gap-8 sm:p-8 lg:gap-10 lg:p-9">
        <div className="flex shrink-0 items-center justify-center rounded-2xl bg-[#e8ecf4] p-5 sm:w-[42%] sm:max-w-[17.5rem] sm:p-6 lg:p-7">
          <Image
            src={image}
            alt={title}
            width={560}
            height={360}
            className="h-auto w-full max-w-[15rem] object-contain sm:max-w-none"
            sizes="(max-width: 640px) 80vw, 280px"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between sm:py-1">
          <div>
            <h3 className="text-lg font-extrabold leading-tight text-accent sm:text-xl lg:text-2xl">
              <span className="uppercase">{title}</span>
              {" | "}
              {tag}
            </h3>

            <p className="mt-2 text-base font-bold text-[#38bdf8] sm:mt-2.5 sm:text-lg">
              {category}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white sm:mt-4 sm:text-[15px]">
              {description}
            </p>
          </div>

          <Link
            href={href}
            className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-white transition-opacity hover:opacity-80 sm:mt-8 sm:text-base"
          >
            {cta}
            <Image
              src="/icons/ui/flecha-derecha.png"
              alt=""
              width={78}
              height={24}
              className="h-4 w-auto shrink-0 object-contain sm:h-5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
