"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/site-data";
import { cardHover } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/AnimatedSection";

export function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="metodologia" className="py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Nuestro Proceso de Trabajo"
            subtitle="6 pasos para transformar tu visión en realidad"
          />
        </AnimatedSection>

        <AnimatedSection
          stagger
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {processSteps.map((step, index) => (
            <AnimatedItem key={step.title}>
              <motion.div
                whileHover={prefersReducedMotion ? undefined : cardHover}
              >
                <Card className="relative h-full">
                  <span className="absolute right-4 top-4 text-4xl font-bold text-accent/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    <Image
                      src={step.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <div className="mt-12 text-center">
          <Button href="#contacto" variant="primary">
            Cotizar mi Proyecto
          </Button>
        </div>
      </Container>
    </section>
  );
}
