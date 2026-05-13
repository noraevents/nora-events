import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-ivoire/80 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display text-3xl text-ivoire mb-3">Nora Events</p>
            <p className="text-sm leading-relaxed text-ivoire/60 max-w-xs">
              Coordinatrice de mariages en Normandie et Île-de-France. Formée par 5 ans de terrain
              aux côtés des traiteurs.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/nora_events_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Nora Events"
                className="p-2 border border-ivoire/20 rounded hover:border-terracotta hover:text-terracotta transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body font-medium text-ivoire text-sm uppercase tracking-wider mb-4">Navigation</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/mariages", label: "Mariages" },
                { href: "/evenements", label: "Événements" },
                { href: "/methode", label: "La méthode" },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/blog", label: "Blog" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-terracotta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-medium text-ivoire text-sm uppercase tracking-wider mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@noraevents.fr" className="hover:text-terracotta transition-colors">
                  contact@noraevents.fr
                </a>
              </li>
              <li className="text-ivoire/60">Normandie & Île-de-France</li>
              <li className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-terracotta text-ivoire px-4 py-2 text-sm rounded hover:bg-terracotta-light transition-colors"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-ivoire/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivoire/40">
          <p>© {currentYear} Nora Events</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-ivoire transition-colors">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-ivoire transition-colors">CGV</Link>
            <Link href="/politique-confidentialite" className="hover:text-ivoire transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
