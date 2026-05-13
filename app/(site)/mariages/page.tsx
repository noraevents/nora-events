import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ApercuOffres } from "@/components/sections/ApercuOffres";
import { ProcessusEtapes } from "@/components/sections/ProcessusEtapes";
import { FAQAccordeon } from "@/components/sections/FAQAccordeon";
import { CtaBandeau } from "@/components/sections/CtaBandeau";
import { faqMariage } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Wedding Planner Mariage Normandie & IDF",
  description:
    "Coordination de mariages en Normandie et Île-de-France. 3 offres adaptées — du Jour J Serein au Clé en Main. Formée par 5 ans de terrain traiteur.",
  keywords: ["wedding planner mariage Normandie", "coordinatrice mariage Paris", "organisation mariage château Normandie"],
  alternates: { canonical: "https://noraevents.fr/mariages" },
};

const differentiateurs = [
  {
    titre: "Je connais les devis traiteur de l'intérieur",
    texte: "Je sais ce qui est justifié et ce qui ne l'est pas, parce que j'ai travaillé avec ces prestataires.",
  },
  {
    titre: "J'ai géré des imprévus réels le Jour J",
    texte: "Pas en théorie. En cuisine, en salle, en direct. Je sais comment les résoudre sans que vous le voyiez.",
  },
  {
    titre: "Mon réseau, je l'ai construit sur le terrain",
    texte: "Photographes, traiteurs, lieux en Normandie et en IDF : je les connais professionnellement.",
  },
  {
    titre: "Vous ne gérez rien le Jour J. Littéralement rien.",
    texte: "Pas un coup de fil, pas une décision, pas un stress. Juste votre mariage.",
  },
];

export default function MariagesPage() {
  return (
    <>
      <section className="bg-beige pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl lg:text-6xl text-anthracite mb-6 leading-tight">
            Votre mariage en Normandie ou en IDF, coordonné par quelqu'un qui connaît le terrain.
          </h1>
          <p className="font-body text-lg text-anthracite/70 max-w-2xl mb-10 leading-relaxed">
            De la coordination Jour J au planning intégral, je m'adapte à votre avancement et à
            votre budget. Sans jargon. Sans surprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#offres" size="lg">Voir les offres</Button>
            <Button href="/contact" size="lg" variant="secondary">Demander un devis</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ivoire">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl text-anthracite text-center mb-12">
            Pourquoi Nora plutôt qu'une autre
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiateurs.map((d) => (
              <div key={d.titre} className="flex gap-4 p-6 bg-beige rounded-lg">
                <CheckCircle size={22} className="text-sauge flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body font-medium text-anthracite mb-1">{d.titre}</p>
                  <p className="font-body text-sm text-anthracite/70 leading-relaxed">{d.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="offres">
        <ApercuOffres detaille={true} />
      </div>

      <ProcessusEtapes />

      <FAQAccordeon items={faqMariage} titre="Vos questions sur la coordination de mariage" />

      <CtaBandeau
        titre="Parlons de votre mariage."
        texte="Un appel découverte de 30 minutes, gratuit, sans engagement."
        ctaLabel="Réserver un appel gratuit"
        ctaHref="/contact"
        variant="terracotta"
      />
    </>
  );
}
