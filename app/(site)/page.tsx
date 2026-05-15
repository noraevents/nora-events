import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ChiffresConfiance } from "@/components/sections/ChiffresConfiance";
import { ApercuOffres } from "@/components/sections/ApercuOffres";
import { ProcessusEtapes } from "@/components/sections/ProcessusEtapes";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CtaBandeau } from "@/components/sections/CtaBandeau";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Nora Events — Coordinatrice de mariages en Normandie et IDF",
  description:
    "Le jour J, vous profitez. Nora gère tout. Coordinatrice de mariages formée par 5 ans de terrain aux côtés des traiteurs — Normandie et Île-de-France.",
  alternates: { canonical: "https://noraevents.fr" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        titre="Le jour J, vous profitez. Je gère tout."
        sousTitre="Mariages, baptêmes, anniversaires — coordinatrice d'événements en Normandie et en Île-de-France, formée par 5 ans de terrain aux côtés des traiteurs."
        ctaPrincipal={{ label: "Demander un devis gratuit", href: "/contact" }}
        ctaSecondaire={{ label: "Découvrir la méthode", href: "/methode" }}
      />

      <ChiffresConfiance />

      <section className="py-20 px-6 bg-beige text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-anthracite mb-6">
            5 ans dans les coulisses. Voilà ce que ça change.
          </h2>
          <p className="font-body text-lg text-anthracite/70 leading-relaxed">
            J'ai passé 5 ans en maître d'hôtel dans des domaines et restaurants gastronomiques normands
            et parisiens, à coordonner, anticiper, gérer les imprévus en temps réel.{" "}
            <span className="text-terracotta font-medium">
              Mariage, baptême ou anniversaire — le jour J, je ne découvre pas votre événement. Je l'ai préparé avec vous depuis des mois.
            </span>
          </p>
          <Button href="/methode" variant="ghost" className="mt-6">
            Voir ma méthode
          </Button>
        </div>
      </section>

      <ApercuOffres />

      <ProcessusEtapes />

      <ExperienceSection />


      <CtaBandeau
        titre="Votre événement mérite quelqu'un qui connaît les coulisses."
        texte="Mariage, baptême, anniversaire — un appel de 30 minutes pour voir si je peux vous aider."
        ctaLabel="Prendre rendez-vous gratuitement"
        ctaHref="/contact"
      />
    </>
  );
}
