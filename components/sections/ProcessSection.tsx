"use client";

import Image from "next/image";
import { processSteps } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/AnimatedSection";

function TimelineArrow({
  direction,
  className,
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block h-0 w-0 shrink-0 border-y-[7px] border-y-transparent",
        direction === "right"
          ? "border-l-[14px] border-l-accent"
          : "border-r-[14px] border-r-accent",
        className,
      )}
      aria-hidden
    />
  );
}

function ProcessStepCard({
  title,
  description,
  icon,
  iconSide,
}: {
  title: string;
  description: string;
  icon: string;
  iconSide: "left" | "right";
}) {
  return (
    <div className="w-full max-w-[26rem] rounded-2xl bg-gradient-to-br from-[#38bdf8] via-[#1e78b4] to-[#0a0e27] p-[2px] shadow-sm sm:max-w-[28rem]">
      <div className="rounded-[calc(1rem-1px)] bg-white px-5 py-5 sm:px-6 sm:py-6">
        <div
          className={cn(
            "flex items-center gap-5 sm:gap-6",
            iconSide === "right" && "flex-row-reverse",
          )}
        >
          <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center sm:h-20 sm:w-20 lg:h-[5.25rem] lg:w-[5.25rem]">
            <Image
              src={icon}
              alt=""
              width={96}
              height={96}
              className="h-full w-full object-contain"
              aria-hidden
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-bold leading-tight text-[#a67c00] sm:text-2xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a] sm:mt-2.5 sm:text-[15px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepNumber({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-[#0a0e27] md:h-12 md:w-12">
      {children}
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="metodologia"
      className="w-full bg-gradient-to-r from-[#000000] via-[#090C3B] to-[#3238DF] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <h2 className="text-center text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="mt-3 text-center text-sm text-white sm:mt-4 sm:text-base">
            6 pasos para transformar tu visión en realidad
          </p>
        </AnimatedSection>

        <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
          <div
            className="absolute bottom-4 left-1/2 top-0 hidden w-[3px] -translate-x-1/2 bg-[#38bdf8] md:block"
            aria-hidden
          />

          <AnimatedSection stagger className="flex flex-col gap-12 sm:gap-14 lg:gap-20">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const stepNumber = index + 1;

              return (
                <AnimatedItem key={step.title} className="w-full">
                  <div className="flex flex-col items-center gap-4 md:hidden">
                    <ProcessStepCard
                      title={step.title}
                      description={step.description}
                      icon={step.icon}
                      iconSide={isLeft ? "left" : "right"}
                    />
                    <StepNumber>{stepNumber}</StepNumber>
                  </div>

                  <div className="hidden items-center md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-8">
                    {isLeft ? (
                      <>
                        <div className="flex items-center justify-end gap-3">
                          <ProcessStepCard
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                            iconSide="left"
                          />
                          <TimelineArrow direction="right" />
                        </div>
                        <StepNumber>{stepNumber}</StepNumber>
                        <div aria-hidden />
                      </>
                    ) : (
                      <>
                        <div aria-hidden />
                        <StepNumber>{stepNumber}</StepNumber>
                        <div className="flex items-center justify-start gap-3">
                          <TimelineArrow direction="left" />
                          <ProcessStepCard
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                            iconSide="right"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </AnimatedItem>
              );
            })}
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-14 text-center sm:mt-16">
          <Button href="#contacto" variant="primary" className="px-8 py-3.5">
            Cotizar mi Proyecto
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
