const chiffres = [
  { valeur: "~200", label: "mariages vécus de l'intérieur", detail: "5 ans en maître d'hôtel" },
  { valeur: "5 ans", label: "de terrain traiteur", detail: "de l'arrière-cuisine à la salle" },
  { valeur: "2 régions", label: "Normandie & IDF", detail: "Le Havre, Rouen, Caen, Paris..." },
];

export function ChiffresConfiance() {
  return (
    <section className="bg-ivoire py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {chiffres.map((c) => (
            <div key={c.label} className="space-y-1">
              <p className="font-display text-5xl text-terracotta">{c.valeur}</p>
              <p className="font-body font-medium text-anthracite">{c.label}</p>
              <p className="font-body text-sm text-sauge">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
