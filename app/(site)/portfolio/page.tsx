import type { Metadata } from "next";
import { CtaBandeau } from "@/components/sections/CtaBandeau";
import { PortfolioCard } from "@/components/sections/PortfolioCard";

export const metadata: Metadata = {
  title: "Portfolio — Mariages & Événements coordonnés",
  description:
    "Découvrez les mariages et événements coordonnés par Nora Events en Normandie et IDF. Études de cas détaillées : défi, solution, résultat.",
  alternates: { canonical: "https://noraevents.fr/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-beige pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl text-anthracite mb-4">Portfolio</h1>
            <p className="font-body text-anthracite/70 max-w-xl mx-auto">
              Chaque événement a sa logistique, ses contraintes, ses imprévus. Voici comment on les a résolus.
            </p>
          </div>

          {/* État vide — portfolio en construction */}
          <div className="text-center py-24 bg-ivoire rounded-xl border border-beige">
            <p className="font-display text-3xl text-anthracite mb-4">Portfolio en cours de construction</p>
            <p className="font-body text-anthracite/60 max-w-md mx-auto leading-relaxed mb-8">
              Les premières études de cas arrivent dès les premiers événements coordonnés par Nora Events.
              En attendant, contactez-moi pour parler de votre projet.
            </p>
            <a
              href="/contact"
              className="inline-block bg-terracotta text-ivoire px-6 py-3 rounded font-body text-sm hover:bg-terracotta-light transition-colors"
            >
              Parlons de votre mariage
            </a>
          </div>
        </div>
      </section>

      <CtaBandeau
        titre="Votre mariage sera la prochaine étude de cas."
        texte="La première à faire confiance est la première à en bénéficier : tarif de lancement et attention maximale."
        ctaLabel="Contacter Nora"
        ctaHref="/contact"
        variant="anthracite"
      />
    </>
  );
}
