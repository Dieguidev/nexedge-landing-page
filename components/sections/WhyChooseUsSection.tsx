"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { whyChooseUs } from "@/lib/site-data";
import { cardHover } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/AnimatedSection";

export function WhyChooseUsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="sobre-nosotros" className="bg-muted py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/sections/about-team-meeting.png"
              alt="Equipo de Nexedge en reunión estratégica"
              width={640}
              height={480}
              className="h-56 w-full object-cover sm:h-72 lg:h-full lg:min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>

          <div>
            <AnimatedSection>
              <SectionHeading
                title="¿Por Qué Elegirnos?"
                subtitle="Somos tu aliado tecnológico de confianza"
                align="left"
                className="mb-10"
              />
            </AnimatedSection>

            <AnimatedSection stagger className="grid gap-6 sm:grid-cols-1">
              {whyChooseUs.map((item) => (
                <AnimatedItem key={item.title}>
                  <motion.div
                    whileHover={prefersReducedMotion ? undefined : cardHover}
                  >
                    <Card className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">
                        <Image
                          src={item.icon}
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10 object-contain"
                          aria-hidden
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
