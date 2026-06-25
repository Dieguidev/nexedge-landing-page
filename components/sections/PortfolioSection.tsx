"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioProjects } from "@/lib/site-data";
import { cardHover } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/AnimatedSection";

export function PortfolioSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="portafolio" className="bg-muted py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading title="Portafolio" />
        </AnimatedSection>

        <AnimatedSection
          stagger
          className="grid gap-8 sm:grid-cols-2"
        >
          {portfolioProjects.map((project) => (
            <AnimatedItem key={project.title}>
              <motion.div
                whileHover={prefersReducedMotion ? undefined : cardHover}
              >
                <Card hoverable className="overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                      {project.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                    <div className="mt-5">
                      <Button
                        href={project.href}
                        variant="outline"
                        className="text-sm"
                      >
                        {project.cta}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
