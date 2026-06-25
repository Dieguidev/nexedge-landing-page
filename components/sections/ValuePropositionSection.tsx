"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { valuePropositions, valueSideBenefits } from "@/lib/site-data";
import { cardHover } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/AnimatedSection";

export function ValuePropositionSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading title="Nuestra Propuesta de Valor" />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-3">
          <AnimatedSection
            stagger
            className="grid gap-6 sm:grid-cols-2 lg:col-span-2"
          >
            {valuePropositions.map((item) => (
              <AnimatedItem key={item.title}>
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : cardHover}
                >
                  <Card className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <Image
                        src={item.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                        aria-hidden
                      />
                    </div>
                    <h3 className="font-bold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>

          <AnimatedSection className="flex flex-col justify-center">
            <blockquote className="mb-8 border-l-4 border-accent pl-6">
              <p className="text-xl font-semibold leading-relaxed text-primary italic">
                En Nexedge no solo entregamos tecnología, iluminamos tu camino
                digital.
              </p>
            </blockquote>

            <ul className="space-y-4">
              {valueSideBenefits.map((benefit) => (
                <li
                  key={benefit.label}
                  className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3"
                >
                  <Image
                    src={benefit.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 shrink-0 object-contain"
                    aria-hidden
                  />
                  <span className="text-sm font-medium text-primary">
                    {benefit.label}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
