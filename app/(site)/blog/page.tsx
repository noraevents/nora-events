import type { Metadata } from "next";
import { articlesAVenir } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — Conseils organisation mariage & événements",
  description:
    "Conseils pratiques et guides pour votre mariage en Normandie et IDF. Par Nora, coordinatrice formée par 5 ans de terrain traiteur.",
  alternates: { canonical: "https://noraevents.fr/blog" },
};

const categorieColors: Record<string, string> = {
  Organisation: "bg-terracotta/10 text-terracotta",
  Budget: "bg-sauge/10 text-sauge",
  Inspiration: "bg-terracotta/10 text-terracotta",
  Normandie: "bg-sauge/10 text-sauge",
  IDF: "bg-anthracite/10 text-anthracite",
};

export default function BlogPage() {
  return (
    <section className="bg-beige pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl text-anthracite mb-4">Conseils & Inspirations</h1>
          <p className="font-body text-anthracite/70 max-w-xl mx-auto">
            Ce que j'aurais voulu savoir avant mes premières années de terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesAVenir.map((article) => (
            <div key={article.slug} className="bg-ivoire rounded-lg p-8 border border-beige">
              <span className={`text-xs font-body font-medium px-2 py-0.5 rounded-full ${categorieColors[article.categorie] ?? "bg-beige text-anthracite"}`}>
                {article.categorie}
              </span>
              <p className="font-display text-xl text-anthracite mt-4 leading-snug">{article.titre}</p>
              <p className="font-body text-xs text-anthracite/40 mt-4">Bientôt disponible</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
