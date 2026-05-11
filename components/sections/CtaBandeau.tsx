import { Button } from "@/components/ui/Button";

interface CtaBandeauProps {
  titre?: string;
  texte?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "sauge" | "terracotta" | "anthracite";
}

export function CtaBandeau({
  titre = "Votre mariage mérite quelqu'un qui connaît les coulisses.",
  texte,
  ctaLabel = "Prendre rendez-vous gratuitement",
  ctaHref = "/contact",
  variant = "sauge",
}: CtaBandeauProps) {
  const backgrounds = {
    sauge: "bg-sauge",
    terracotta: "bg-terracotta",
    anthracite: "bg-anthracite",
  };

  return (
    <section className={`${backgrounds[variant]} py-20 px-6`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl text-ivoire mb-4">{titre}</h2>
        {texte && (
          <p className="font-body text-ivoire/80 mb-8 max-w-xl mx-auto leading-relaxed">{texte}</p>
        )}
        <Button href={ctaHref} variant="white" size="lg">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
