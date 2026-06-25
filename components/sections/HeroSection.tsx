import Image from "next/image";
import { heroContent } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <Image
        src={heroContent.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-[center_30%] brightness-105 saturate-110"
        sizes="100vw"
      />

      {/* Overlay ligero: legibilidad a la izquierda sin opacar el mapa */}
      <div className="absolute inset-0 bg-gradient-to-r from-header/80 via-header/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-header/20 via-transparent to-header/50" />

      <Container className="relative z-10 flex min-h-screen items-center pt-[68px] pb-16 lg:pt-[72px]">
        <div className="max-w-2xl">
          <h1 className="text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            {heroContent.brandName}
          </h1>

          <p className="mt-2 text-2xl font-bold leading-tight text-white sm:mt-3 sm:text-3xl lg:text-[2.5rem]">
            {heroContent.title}
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            {heroContent.ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant}
                className="min-w-[160px]"
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
