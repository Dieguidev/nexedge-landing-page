import Image from "next/image";
import Link from "next/link";
import {
  contactItems,
  footerLinks,
  siteConfig,
} from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer id="contacto" className="bg-dark text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" className="mb-4" />
            <p className="mt-3 text-sm leading-relaxed text-dark-muted">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Soporte y Ayuda
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent">
            Contacto
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-start gap-3 text-sm text-dark-muted transition-colors hover:text-white"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="mt-0.5 h-6 w-6 shrink-0"
                    aria-hidden
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-center text-xs text-dark-muted">
          {siteConfig.copyright}
        </p>
      </Container>
    </footer>
  );
}
