"use client";

import Image from "next/image";
import { useRef } from "react";
import { services } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { StatsBar } from "@/components/sections/StatsBar";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/AnimatedSection";

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Anterior" : "Siguiente"}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#38bdf8]/50 bg-[#0a0e27] shadow-[0_0_16px_rgba(56,189,248,0.35)] transition-transform hover:scale-105 sm:h-12 sm:w-12"
    >
      <Image
        src={
          direction === "left"
            ? "/icons/ui/flecha-izquierda.png"
            : "/icons/ui/flecha-derecha.png"
        }
        alt=""
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
        aria-hidden
      />
    </button>
  );
}

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -el.clientWidth * 0.85 : el.clientWidth * 0.85;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="servicios"
      className="w-full bg-gradient-to-r from-[#000000] via-[#090C3B] to-[#3238DF] pb-20 sm:pb-24"
    >
      <StatsBar />

      <Container>
        <AnimatedSection>
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:mb-12 sm:text-3xl lg:text-4xl">
            Nuestros Servicios
          </h2>
        </AnimatedSection>

        <AnimatedSection stagger className="flex flex-1 items-center gap-4 sm:gap-6">
          <CarouselArrow direction="left" onClick={() => scroll("left")} />

          <div
            ref={scrollRef}
            className="flex flex-1 snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-8 lg:mx-auto lg:grid lg:max-w-4xl lg:grid-cols-3 lg:justify-items-center lg:gap-10 lg:overflow-visible xl:gap-12 [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => (
              <AnimatedItem
                key={service.title}
                className="w-[min(100%,248px)] shrink-0 snap-center sm:w-[min(100%,255px)] lg:w-full lg:max-w-[255px]"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                />
              </AnimatedItem>
            ))}
          </div>

          <CarouselArrow direction="right" onClick={() => scroll("right")} />
        </AnimatedSection>
      </Container>
    </section>
  );
}
