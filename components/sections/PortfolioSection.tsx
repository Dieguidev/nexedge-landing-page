"use client";

import { portfolioProjects } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/AnimatedSection";

export function PortfolioSection() {
  return (
    <section
      id="portafolio"
      className="w-full bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,#1e2f9e_0%,#090c3b_48%,#000000_100%)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <h2 className="text-center text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
            Portafolio
          </h2>
        </AnimatedSection>

        <AnimatedSection
          stagger
          className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:gap-10"
        >
          {portfolioProjects.map((project) => (
            <AnimatedItem key={project.title} className="h-full">
              <PortfolioCard
                title={project.title}
                tag={project.tag}
                category={project.category}
                description={project.description}
                image={project.image}
                cta={project.cta}
                href={project.href}
                className="h-full"
              />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
