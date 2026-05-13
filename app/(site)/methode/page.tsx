import type { Metadata } from "next";
import { CtaBandeau } from "@/components/sections/CtaBandeau";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "La méthode Nora — Coordination de mariage vue de l'intérieur",
  description:
    "Découvrez comment se déroule une journée de coordination de mariage — de 7h du matin à la fin du dîner. La méthode Nora Events, née de 5 ans de terrain.",
  keywords: ["comment choisir wedding planner", "coordination mariage jour J comment ça marche"],
  alternates: { canonical: "https://noraevents.fr/methode" },
};

const checklistTraiteur = [
  "Les prix par personne sont-ils cohérents avec le marché local ?",
  "Le cocktail est-il inclus dans le forfait ou facturé en supplément ?",
  "Qu'est-ce qui est inclus dans les 'frais de service' ?",
  "La prestation inclut-elle le débarrassage et le nettoyage ?",
  "Les prix sont-ils garantis jusqu'à la date de l'événement ?",
];


export default function MethodePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-beige pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl lg:text-6xl text-anthracite mb-6 leading-tight">
            Ce qui se passe vraiment le jour de votre mariage, vu de l'intérieur.
          </h1>
        </div>
      </section>

      {/* Texte narratif */}
      <section className="py-16 px-6 bg-ivoire">
        <div className="max-w-3xl mx-auto font-body text-lg text-anthracite/80 leading-relaxed space-y-6">
          <p>
            <strong className="text-anthracite">7h du matin.</strong> J'arrive sur le lieu de réception
            avant tout le monde. Je vérifie que la salle est bien préparée selon le plan qu'on a établi
            ensemble. Je rencontre le responsable de salle, le chef traiteur, le régisseur lumière. Je
            m'assure que tout le monde a le même rétroplanning.
          </p>
          <p>
            <strong className="text-anthracite">9h.</strong> Le fleuriste arrive. Je vérifie que les
            arrangements correspondent exactement à ce qui a été commandé. Si quelque chose ne va pas,
            je le règle. Vous n'en saurez rien.
          </p>
          <p>
            <strong className="text-anthracite">11h.</strong> Vous commencez vos préparatifs. Mon téléphone
            sonne. Le photographe est bloqué dans les embouteillages, 25 minutes de retard. Je décale
            le timing du début de cérémonie de 10 minutes, je préviens le maître de cérémonie, je
            recale le traiteur. Vous êtes en train de vous coiffer. Vous ne savez pas.
          </p>
          <p>
            <strong className="text-anthracite">17h, fin de cérémonie.</strong> Le cocktail démarre.
            Je suis entre la cuisine et les invités, je m'assure que les pass d'amuse-bouches sont
            bien réguliers, que le bar est approvisionné, que le timing tient.
          </p>
          <p>
            <strong className="text-anthracite">22h, milieu du dîner.</strong> Vous dansez. Moi je
            coordonne les discours, je gère le timing du gâteau, je préviens le traiteur pour le
            service du fromage. Je serai là jusqu'à la fin.
          </p>
          <p className="text-terracotta font-medium">
            C'est ça, une vraie coordination. Pas de l'organisation sur papier. De la gestion en temps
            réel, formée par des centaines de Jours J depuis les coulisses.
          </p>
        </div>
      </section>

      {/* Lead magnet CTA */}
      <section className="py-16 px-6 bg-ivoire border-y border-beige">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-3xl text-anthracite mb-4">
            Téléchargez le rétroplanning complet
          </p>
          <p className="font-body text-anthracite/70 mb-6">
            PDF gratuit. Le rétroplanning mariage semaine par semaine de J-12 mois à J-0.
            Ce que vous devez faire, dans quel ordre, et pourquoi.
          </p>
          <a
            href="/contact"
            className="inline-block bg-terracotta text-ivoire px-8 py-4 rounded font-body font-medium hover:bg-terracotta-light transition-colors"
          >
            Recevoir le PDF gratuit
          </a>
        </div>
      </section>

      {/* Ce que je vérifie sur les devis */}
      <section className="py-20 px-6 bg-beige">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-anthracite mb-4">
            Ce que je vérifie sur chaque devis traiteur
          </h2>
          <p className="font-body text-anthracite/70 mb-8 leading-relaxed">
            Après 5 ans de terrain, je sais exactement ce que les traiteurs peuvent faire passer
            dans un devis sans que les mariés le remarquent.
          </p>

          <ul className="space-y-3">
            {checklistTraiteur.map((point, i) => (
              <li key={point} className="flex items-start gap-3 p-4 bg-ivoire rounded-lg">
                <CheckCircle size={20} className="text-sauge flex-shrink-0 mt-0.5" />
                <p className="font-body text-anthracite/80">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CtaBandeau
        titre="Travailler avec moi, c'est travailler avec quelqu'un qui sait."
        ctaLabel="Commençons par un appel"
        ctaHref="/contact"
      />
    </>
  );
}
