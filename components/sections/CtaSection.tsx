import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="bg-primary py-20">
      <Container className="text-center">
        <SectionHeading
          title="¿Listo para transformar tu futuro digital?"
          dark
          className="mb-8"
        />
        <Button href="#contacto" variant="primary">
          Contáctanos
        </Button>
      </Container>
    </section>
  );
}
