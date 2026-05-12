import type { Metadata } from "next";
import { ProcessusEtapes } from "@/components/sections/ProcessusEtapes";
import { CtaBandeau } from "@/components/sections/CtaBandeau";

export const metadata: Metadata = {
  title: "Baptêmes, Anniversaires & Événements Privés — Nora Events",
  description:
    "Coordinatrice d'événements privés en Normandie et IDF — baptêmes, anniversaires, dîners familiaux. Le même niveau d'exigence qu'un mariage. À partir de 800 €.",
  keywords: ["coordinatrice baptême Normandie", "organisation anniversaire privé IDF"],
  alternates: { canonical: "https://noraevents.fr/evenements" },
};

const evenements = [
  {
    type: "Baptême",
    emoji: "",
    description:
      "De la réservation du lieu à la coordination le Jour J. Je m'occupe de tout pour que vous soyez avec votre bébé, pas avec les prestataires.",
    inclus: ["Sélection et coordination des prestataires", "Présence le Jour J", "Coordination repas et animations"],
    prix: "À partir de 800 €",
  },
  {
    type: "Anniversaire",
    emoji: "",
    description:
      "Anniversaire marquant (30, 40, 50 ans…) ou simple fête en famille. J'adapte mon niveau d'implication à l'ampleur de votre projet.",
    inclus: ["Coordination prestataires", "Rétroplanning sur mesure", "Présence le Jour J selon formule"],
    prix: "À partir de 1 000 €",
  },
  {
    type: "Événement familial",
    emoji: "",
    description:
      "Dîner de famille, réunion de 100 personnes, fête de retraite. Tout ce qui compte et mérite d'être bien organisé.",
    inclus: ["Conseil et structuration", "Coordination prestataires", "Présence partielle ou totale"],
    prix: "Tarif sur devis",
  },
];

export default function EvenementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-beige pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-6xl text-anthracite mb-6 leading-tight">
            Baptêmes, anniversaires, dîners privés. Le même niveau d'exigence.
          </h1>
          <p className="font-body text-lg text-anthracite/70 max-w-2xl mx-auto leading-relaxed">
            Pas besoin que ce soit un mariage pour mériter une vraie organisation. Chaque événement
            compte. Je le coordonne avec la même rigueur.
          </p>
        </div>
      </section>

      {/* Les 3 types */}
      <section className="py-20 px-6 bg-ivoire">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {evenements.map((e) => (
            <div key={e.type} className="bg-beige rounded-lg p-8">
              {e.emoji && <div className="text-3xl mb-4">{e.emoji}</div>}
              <h2 className="font-display text-2xl text-anthracite mb-2">{e.type}</h2>
              <p className="font-body text-sm text-anthracite/70 leading-relaxed mb-4">{e.description}</p>
              <ul className="space-y-1.5 mb-6">
                {e.inclus.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-body text-anthracite/70">
                    <span className="text-sauge">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-body font-medium text-terracotta text-sm">{e.prix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Processus */}
      <ProcessusEtapes />

      {/* CTA */}
      <CtaBandeau
        titre="Décrivez-moi votre événement."
        texte="Que ce soit une table de 12 ou une fête de 150 personnes, prenons 30 minutes pour en parler."
        ctaLabel="Décrire mon événement"
        ctaHref="/contact"
        variant="terracotta"
      />
    </>
  );
}
