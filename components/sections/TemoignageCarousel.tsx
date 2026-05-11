"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { temoignages } from "@/lib/data";

export function TemoignageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  return (
    <section className="py-20 px-6 bg-ivoire overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-anthracite mb-3">Ce que disent mes clients</h2>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {temoignages.map((t) => (
              <div key={t.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 bg-beige rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.note)].map((_, i) => (
                    <Star key={i} size={16} className="fill-terracotta text-terracotta" />
                  ))}
                </div>
                <p className="font-body text-anthracite/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.texte}&rdquo;
                </p>
                <div>
                  <p className="font-body font-medium text-anthracite text-sm">{t.prenom}</p>
                  <p className="font-body text-xs text-sauge">{t.typeEvenement} — {t.ville}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
