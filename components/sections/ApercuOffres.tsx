import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { offres as offresData } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ApercuOffresProps {
  detaille?: boolean;
}

export function ApercuOffres({ detaille = false }: ApercuOffresProps) {
  return (
    <section className="py-20 px-6 bg-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-anthracite mb-3">Trois offres, une seule promesse</h2>
          <p className="font-body text-anthracite/70 max-w-xl mx-auto">
            Chaque offre inclut la même rigueur. Ce qui change : le niveau d'implication en amont.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offresData.map((offre) => (
            <div
              key={offre.id}
              className={cn(
                "relative bg-ivoire rounded-lg p-8 border transition-shadow hover:shadow-lg",
                offre.miseEnAvant ? "border-terracotta shadow-md" : "border-beige"
              )}
            >
              {offre.miseEnAvant && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>La plus choisie</Badge>
                </div>
              )}

              <p className="font-display text-2xl text-anthracite mb-1">{offre.nom}</p>
              <p className="font-body text-terracotta font-medium mb-3">{offre.prix}</p>
              <p className="font-body text-sm text-anthracite/70 mb-6 leading-relaxed">{offre.description}</p>

              <ul className="space-y-2 mb-8">
                {(detaille ? offre.inclusions : offre.inclusions.slice(0, 3)).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-body">
                    <Check size={15} className="text-sauge mt-0.5 flex-shrink-0" />
                    <span className="text-anthracite/80">{item}</span>
                  </li>
                ))}
                {!detaille && offre.inclusions.length > 3 && (
                  <li className="text-xs text-terracotta font-medium pl-5">
                    + {offre.inclusions.length - 3} autres inclusions
                  </li>
                )}
              </ul>

              <Button
                href={`/contact?offre=${encodeURIComponent(offre.nom)}`}
                variant={offre.miseEnAvant ? "primary" : "secondary"}
                size="sm"
                className="w-full justify-center"
              >
                Demander un devis
              </Button>
            </div>
          ))}
        </div>

        {!detaille && (
          <div className="text-center mt-8">
            <Button href="/tarifs" variant="ghost">
              Voir le détail des offres
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
