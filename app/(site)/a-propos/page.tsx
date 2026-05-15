import type { Metadata } from "next";
import Image from "next/image";
import { CtaBandeau } from "@/components/sections/CtaBandeau";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "À propos — Nora, coordinatrice de mariages terrain",
  description:
    "5 ans de terrain comme Maître d'Hôtel aux côtés des traiteurs, 200 mariages coordonnés depuis les coulisses. L'histoire de Nora et pourquoi elle se lance.",
  keywords: ["wedding planner expérience terrain Normandie"],
  alternates: { canonical: "https://noraevents.fr/a-propos" },
};

const valeurs = [
  {
    titre: "Fiabilité terrain",
    texte: "Ce qui est promis est tenu. Pas de surprise le Jour J parce que tout a été anticipé la semaine d'avant.",
  },
  {
    titre: "Honnêteté sur les coûts",
    texte: "Je connais les prix réels des traiteurs de l'intérieur. Je ne laisse pas un prestataire surfacturer mes clients.",
  },
  {
    titre: "Chaleur humaine",
    texte: "Un mariage c'est une émotion, pas un projet. Je ne perds jamais ça de vue, même quand je gère la logistique.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-beige pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-display text-5xl lg:text-6xl text-anthracite mb-6 leading-tight">
                5 ans dans les coulisses. Maintenant à votre service.
              </h1>
              <p className="font-body text-lg text-anthracite/70 leading-relaxed mb-8">
                Je m'appelle Nora. Avant de me lancer comme coordinatrice d'événements, j'ai passé
                cinq ans en tant que Maître d'Hôtel dans des hôtels, des châteaux et des traiteurs
                événementiels en Normandie et en Île-de-France.
              </p>
              <Button href="/contact" size="lg">Discutons de votre projet</Button>
            </div>

            {/* Photo */}
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
              <Image
                src="/images/nora-coordination.jpg"
                alt="Nora en situation de coordination, vérifiant le dressage d'une table de mariage"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 px-6 bg-ivoire">
        <div className="max-w-3xl mx-auto font-body text-lg text-anthracite/80 leading-relaxed space-y-6">
          <p>
            En cinq ans, j'ai coordonné et assisté plus de 200 événements depuis les coulisses :
            des mariages en château normand aux réceptions d'entreprise parisiennes, en passant par
            des baptêmes et des anniversaires. J'ai vu des dizaines de wedding planners travailler.
            J'ai vu ce qui fonctionnait et ce qui ratait.
          </p>
          <p>
            Ce que j'ai compris au fil des années : <strong className="text-anthracite">la
            coordination d'un mariage ne s'apprend pas dans un manuel</strong>. Elle s'apprend en
            gérant un retard de traiteur à 5 minutes du début du service. En négociant un remplacement
            de prestataire en urgence. En désamorçant un conflit entre la famille de la mariée et le
            responsable de salle à 22h un samedi soir.
          </p>
          <p>
            C'est ce bagage que j'apporte à chacun de mes clients. Pas une certification, pas un
            diplôme de wedding planner. Une expérience réelle, répétée, éprouvée.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-6 bg-beige">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl text-anthracite text-center mb-12">Ce en quoi je crois</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((v) => (
              <div key={v.titre} className="bg-ivoire p-8 rounded-lg">
                <h3 className="font-display text-2xl text-terracotta mb-3">{v.titre}</h3>
                <p className="font-body text-anthracite/70 leading-relaxed">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBandeau
        titre="Envie de voir si on se correspond ?"
        texte="Un appel de 30 minutes, sans engagement. Je vous dis franchement si je peux vous aider."
        ctaLabel="Réserver un appel découverte"
        ctaHref="/contact"
        variant="anthracite"
      />
    </>
  );
}
