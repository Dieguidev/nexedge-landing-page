"use client";

import Link from "next/link";
import { navLinks } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#090C3B] to-[#3238DF]"
        aria-hidden
      />

      <Container className="relative">
        <div className="flex h-[68px] items-center lg:h-[72px]">
          <Logo />

          <div className="ml-auto hidden items-center gap-8 lg:flex xl:gap-10">
            <nav className="flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-bold text-white transition-colors hover:text-accent xl:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button
              href="#contacto"
              variant="primary"
              className="px-6 py-2.5 text-sm font-bold"
            >
              Contáctanos
            </Button>
          </div>

          <div className="ml-auto lg:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
