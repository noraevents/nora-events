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
        titre="Le jour J, vous profitez. Nora gère tout."
        sousTitre="Coordinatrice de mariages en Normandie et en Île-de-France — formée par 5 ans de terrain aux côtés des traiteurs."
        ctaPrincipal={{ label: "Demander un devis gratuit", href: "/contact" }}
        ctaSecondaire={{ label: "Découvrir la méthode", href: "/methode" }}
      />

      <ChiffresConfiance />

      <section className="py-20 px-6 bg-beige text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-anthracite mb-6">
            Ce que vous ne trouverez nulle part ailleurs
          </h2>
          <p className="font-body text-lg text-anthracite/70 leading-relaxed">
            La plupart des wedding planners ont appris leur métier en formation. Moi, j'ai passé 5 ans
            dans les cuisines et les salles des plus grands traiteurs normands et parisiens — à
            coordonner, anticiper, gérer les imprévus en temps réel.{" "}
            <span className="text-terracotta font-medium">
              Je ne découvre pas votre mariage le jour J. Je l'anticipe depuis des mois.
            </span>
          </p>
          <Button href="/methode" variant="ghost" className="mt-6">
            Voir ma méthode →
          </Button>
        </div>
      </section>

      <ApercuOffres />

      <ProcessusEtapes />

      <ExperienceSection />


      <CtaBandeau
        titre="Votre mariage mérite quelqu'un qui connaît les coulisses."
        ctaLabel="Prendre rendez-vous gratuitement"
        ctaHref="/contact"
      />
    </>
  );
}
