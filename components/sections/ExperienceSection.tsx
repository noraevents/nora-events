import { Button } from "@/components/ui/Button";

const preuves = [
  {
    numero: "01",
    titre: "Je relis vos devis traiteur avant que vous signiez",
    detail:
      "5 ans à travailler aux côtés des traiteurs — j'ai appris à lire ce qui se cache entre les lignes : clauses d'annulation floues, coûts de service non inclus, marges sur les boissons. Avant de signer, on regarde ensemble.",
  },
  {
    numero: "02",
    titre: "J'anticipe les imprévus avant qu'ils arrivent",
    detail:
      "En salle, les problèmes ne se gèrent pas devant les invités. Ils se règlent en coulisses, à l'avance. C'est un réflexe de terrain — pas une méthode apprise en formation.",
  },
  {
    numero: "03",
    titre: "Je parle le même langage que vos prestataires",
    detail:
      "Quand j'appelle un traiteur, un chef de rang ou un régisseur, la conversation est différente. On se comprend. Ça évite les malentendus, les retards et les oublis de dernière minute.",
  },
  {
    numero: "04",
    titre: "J'ai coordonné des centaines d'événements — en cuisine et en salle",
    detail:
      "Pas en stage. Pas sur un seul type de lieu. Dans des domaines, des châteaux, des restaurants gastronomiques, des banquets en tente. Chaque configuration que vous pouvez imaginer, je l'ai déjà gérée.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 px-6 bg-ivoire">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="font-body text-sm text-terracotta uppercase tracking-widest mb-3">
            Pourquoi Nora Events
          </p>
          <h2 className="font-display text-4xl text-anthracite leading-tight">
            Une crédibilité construite sur le terrain, pas en formation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {preuves.map((p) => (
            <div key={p.numero} className="bg-beige rounded-lg p-8 flex gap-6">
              <span className="font-display text-4xl text-terracotta/30 leading-none flex-shrink-0 select-none">
                {p.numero}
              </span>
              <div>
                <h3 className="font-body font-semibold text-anthracite mb-2 leading-snug">
                  {p.titre}
                </h3>
                <p className="font-body text-sm text-anthracite/70 leading-relaxed">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/methode" variant="secondary">
            Voir comment je travaille →
          </Button>
        </div>
      </div>
    </section>
  );
}
