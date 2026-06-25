"use client";

import Image from "next/image";
import { whyChooseUs } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/AnimatedSection";

export function WhyChooseUsSection() {
  return (
    <section
      id="sobre-nosotros"
      className="w-full bg-gradient-to-r from-[#000000] via-[#090C3B] to-[#3238DF] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <h2 className="mb-14 text-center text-2xl font-bold text-white sm:mb-16 sm:text-3xl lg:mb-20 lg:text-4xl">
            ¿Por Qué Elegirnos?
          </h2>
        </AnimatedSection>

        <AnimatedSection
          stagger
          className="grid gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12 xl:gap-16"
        >
          {whyChooseUs.map((item) => (
            <AnimatedItem key={item.title}>
              <article className="flex h-full flex-col items-center text-center sm:items-start sm:text-left">
                <div className="relative mb-6 size-40 shrink-0 overflow-hidden rounded-full sm:mb-7 sm:size-44 lg:size-48">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-cover"
                    style={{ objectPosition: item.imagePosition }}
                  />
                </div>

                <h3 className="text-lg font-bold text-accent sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white sm:mt-4 sm:max-w-none sm:text-base">
                  {item.description}
                </p>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
