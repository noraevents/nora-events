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
                href="https://instagram.com/noraevents"
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
              {/* Pinterest */}
              <a
                href="https://pinterest.fr/noraevents"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest Nora Events"
                className="p-2 border border-ivoire/20 rounded hover:border-terracotta hover:text-terracotta transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
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
          <p>© {currentYear} Nora Events — SIRET à compléter</p>
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
