"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/mariages", label: "Mariages" },
  { href: "/evenements", label: "Événements" },
  { href: "/methode", label: "La méthode" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-beige/95 backdrop-blur-sm shadow-sm"
            : "bg-anthracite/30 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-baseline gap-1.5 transition-colors leading-none"
            aria-label="Nora Events — Accueil"
          >
            <span
              className="font-display font-500 tracking-[0.18em] uppercase text-xl"
              style={{ color: scrolled ? "#2C2C2C" : "#FAF7F4" }}
            >
              Nora
            </span>
            <span
              className="text-3xl leading-none"
              style={{
                fontFamily: "var(--font-script)",
                color: scrolled ? "#C4714A" : "#FAF7F4",
              }}
            >
              Events
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm transition-colors"
                style={{ color: scrolled ? "#2C2C2C" : "#FAF7F4" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Demander un devis
            </Button>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden p-2 text-anthracite"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-beige pt-16 px-6 flex flex-col">
          <nav className="flex flex-col gap-6 mt-8" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-3xl text-anthracite hover:text-terracotta transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto mb-12">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-terracotta text-ivoire py-4 px-6 rounded text-lg font-body font-medium hover:bg-terracotta-light transition-colors"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/a-propos"
              className="block text-center mt-4 text-sm text-anthracite/60 hover:text-terracotta"
              onClick={() => setMenuOpen(false)}
            >
              À propos de Nora
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
