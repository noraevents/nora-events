import type { Metadata } from "next";
import { ApercuOffres } from "@/components/sections/ApercuOffres";
import { FAQAccordeon } from "@/components/sections/FAQAccordeon";
import { CtaBandeau } from "@/components/sections/CtaBandeau";
import { faqTarifs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tarifs — Wedding Planner Normandie & IDF",
  description:
    "Prix transparents pour la coordination de mariage. De 1 800 € pour le Jour J Serein à 5 000 € pour le Clé en Main. Devis gratuit en 48h.",
  keywords: ["prix wedding planner Normandie", "tarif coordinatrice mariage IDF", "coordination jour J combien ça coûte"],
  alternates: { canonical: "https://noraevents.fr/tarifs" },
};

export default function TarifsPage() {
  return (
    <>
      <section className="bg-beige pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-5xl text-anthracite mb-4">Des offres claires, pour un budget maîtrisé.</h1>
          <p className="font-body text-lg text-anthracite/70 max-w-xl mx-auto leading-relaxed">
            Pas de prix caché. Pas de supplément surprise.
          </p>
        </div>
      </section>

      <ApercuOffres detaille={true} />

      <section className="py-20 px-6 bg-ivoire">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-anthracite mb-6 text-center">Pourquoi ces prix ?</h2>
          <div className="space-y-4 font-body text-anthracite/80 leading-relaxed">
            <p>
              À <strong>moins de 1 500 €</strong>, vous trouvez des coordinatrices en début de carrière.
              Peu d'événements au compteur, pas de réseau terrain, pas d'expérience réelle de l'imprévu.
            </p>
            <p>
              À <strong>plus de 8 000 €</strong>, vous êtes sur des planners premium qui vendent aussi
              une image de marque et des mariages éditoriaux. C'est un autre marché.
            </p>
            <p>
              À <strong>1 800 – 5 000 €</strong>, Nora Events occupe le segment du milieu : expérience
              opérationnelle réelle (200 mariages de terrain), prix accessibles, réseau construit sur le
              tas. Le bon équilibre pour un mariage réussi sans se ruiner.
            </p>
          </div>
        </div>
      </section>

      <FAQAccordeon items={faqTarifs} titre="Questions sur les tarifs" />

      <CtaBandeau
        titre="Demandez votre devis gratuit."
        texte="Réponse sous 48h. Proposition claire. Aucun engagement."
        ctaLabel="Envoyer ma demande"
        ctaHref="/contact"
      />
    </>
  );
}
