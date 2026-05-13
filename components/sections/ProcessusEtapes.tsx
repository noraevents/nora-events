const etapes = [
  {
    num: "01",
    titre: "Appel découverte gratuit",
    texte: "30 minutes pour se parler. Je comprends votre projet, vous évaluez si on se correspond. Pas d'engagement.",
  },
  {
    num: "02",
    titre: "Devis sur mesure",
    texte: "Je vous envoie une proposition claire et détaillée sous 48h, adaptée à votre date et à votre situation.",
  },
  {
    num: "03",
    titre: "On travaille ensemble",
    texte: "Selon l'offre choisie, je prends en main la coordination jour J ou le planning complet. Vous avancez sereinement.",
  },
  {
    num: "04",
    titre: "Le Jour J",
    texte: "Vous profitez. Je gère tout le reste — prestataires, timing, imprévus. Vous n'avez rien à faire.",
  },
];

export function ProcessusEtapes() {
  return (
    <section className="py-20 px-6 bg-ivoire">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-anthracite mb-3">Comment ça se passe</h2>
          <p className="font-body text-anthracite/70 text-center">Simple. Clair. Sans surprise.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {etapes.map((etape, i) => (
            <div
              key={etape.num}
              className="relative p-8 border-b lg:border-b-0 lg:border-r border-beige last:border-0"
            >
              {/* Numéro */}
              <p className="font-display text-6xl text-terracotta/20 mb-4 leading-none">{etape.num}</p>

              {/* Connecteur */}
              {i < etapes.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-4 h-px bg-terracotta/30" />
              )}

              <h3 className="font-display text-xl text-anthracite mb-2">{etape.titre}</h3>
              <p className="font-body text-sm text-anthracite/70 leading-relaxed">{etape.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
