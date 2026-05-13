import type { Metadata } from "next";
import { Star } from "lucide-react";
import { CtaBandeau } from "@/components/sections/CtaBandeau";

export const metadata: Metadata = {
  title: "Témoignages — Ce que disent les clients de Nora Events",
  description:
    "Avis et témoignages de mariés et clients Nora Events. Coordination de mariage en Normandie et IDF.",
  alternates: { canonical: "https://noraevents.fr/temoignages" },
};

export default function TemoignagesPage() {
  return (
    <>
      <section className="bg-beige pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl text-anthracite mb-4">Ce que disent mes clients</h1>
            <p className="font-body text-anthracite/70 max-w-xl mx-auto">
              Les mots des mariés valent mieux que les miens.
            </p>
          </div>

          {/* État vide */}
          <div className="text-center py-24 bg-ivoire rounded-xl border border-beige">
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-terracotta/30 text-terracotta/30" />
              ))}
            </div>
            <p className="font-display text-3xl text-anthracite mb-4">
              Les premiers témoignages arrivent bientôt
            </p>
            <p className="font-body text-anthracite/60 max-w-md mx-auto mb-8 leading-relaxed">
              Nora Events se lance. Soyez parmi les premiers clients et bénéficiez d'une attention
              maximale et d'un tarif de lancement.
            </p>
            <a
              href="/contact"
              className="inline-block bg-terracotta text-ivoire px-6 py-3 rounded font-body text-sm hover:bg-terracotta-light transition-colors"
            >
              Devenir client fondateur
            </a>
          </div>
        </div>
      </section>

      <CtaBandeau
        titre="Rejoindre les clients Nora Events."
        ctaLabel="Demander un devis"
        ctaHref="/contact"
      />
    </>
  );
}
