import type { Metadata } from "next";
import { FormulaireDevis } from "@/components/sections/FormulaireDevis";
import { CalendlyWidget } from "@/components/sections/CalendlyWidget";
import { Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Demander un devis gratuit",
  description:
    "Demandez un devis gratuit à Nora Events. Réponse sous 24h. Aucun engagement. Coordinatrice de mariages en Normandie et IDF.",
  alternates: { canonical: "https://noraevents.fr/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-beige pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-5xl text-anthracite mb-6 leading-tight">Parlons de votre projet.</h1>
              <p className="font-body text-anthracite/70 leading-relaxed mb-10">
                Répondez à ces quelques questions. Je vous réponds sous 24h avec une proposition
                adaptée à votre situation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-terracotta/10 rounded">
                    <Clock size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-anthracite text-sm">Réponse sous 24h</p>
                    <p className="font-body text-xs text-anthracite/60">Du lundi au samedi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-terracotta/10 rounded">
                    <Mail size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-anthracite text-sm">contact@noraevents.fr</p>
                    <p className="font-body text-xs text-anthracite/60">Pour les demandes urgentes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-terracotta/10 rounded">
                    <MapPin size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-anthracite text-sm">Normandie & Île-de-France</p>
                    <p className="font-body text-xs text-anthracite/60">Le Havre, Rouen, Caen, Paris et environs</p>
                  </div>
                </div>
              </div>


              <p className="mt-8 text-xs text-anthracite/50 font-body leading-relaxed">
                Pas d'engagement. Pas de relance commerciale agressive. Juste une conversation pour
                voir si on peut travailler ensemble.
              </p>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-3 bg-ivoire rounded-xl p-8 lg:p-10 border border-beige">
              <FormulaireDevis />
            </div>
          </div>
        </div>
      </section>

      {/* Appel découverte */}
      <section className="bg-ivoire py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-anthracite mb-4">Vous préférez échanger de vive voix ?</h2>
            <p className="font-body text-anthracite/70 max-w-xl mx-auto">
              Réservez un appel découverte de 30 minutes, gratuit et sans engagement. On fait connaissance, vous me parlez de votre projet, je vous explique comment je travaille.
            </p>
          </div>
          <CalendlyWidget />
        </div>
      </section>
    </>
  );
}
