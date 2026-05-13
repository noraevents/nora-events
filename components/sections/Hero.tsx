import { Button } from "@/components/ui/Button";

interface HeroProps {
  titre: string;
  sousTitre: string;
  ctaPrincipal: { label: string; href: string };
  ctaSecondaire?: { label: string; href: string };
}

export function Hero({
  titre,
  sousTitre,
  ctaPrincipal,
  ctaSecondaire,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo de fond */}
      <div className="absolute inset-0">
        <video
          src="/images/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-125 origin-top-left"
        />
        <div className="absolute inset-0 bg-anthracite/40" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-anthracite/60 to-transparent" />
        <div
          className="absolute inset-0 bg-anthracite pointer-events-none z-10"
          style={{ animation: "fadeOut 1.5s ease-in-out 0.1s forwards" }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
        <h1 className="font-display text-ivoire text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
          {titre}
        </h1>
        <p className="font-body text-ivoire/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {sousTitre}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={ctaPrincipal.href} size="lg">
            {ctaPrincipal.label}
          </Button>
          {ctaSecondaire && (
            <Button href={ctaSecondaire.href} size="lg" variant="secondary"
              className="border-ivoire text-ivoire hover:bg-ivoire hover:text-anthracite">
              {ctaSecondaire.label}
            </Button>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-ivoire/40 mx-auto" />
      </div>
    </section>
  );
}
