import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface Article {
  _id: string;
  titre: string;
  slug: { current: string };
  categorie: string;
  datePublication: string;
  extrait: string;
  imageCouverture?: { asset?: { url?: string } };
}

interface ArticleCardProps {
  article: Article;
}

const categorieColors: Record<string, string> = {
  Organisation: "bg-terracotta text-ivoire",
  Budget: "bg-sauge text-ivoire",
  Inspiration: "bg-terracotta/20 text-terracotta",
  Normandie: "bg-sauge/20 text-sauge",
  IDF: "bg-anthracite/10 text-anthracite",
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${article.slug.current}`}
      className="group block bg-ivoire rounded-lg overflow-hidden border border-beige hover:shadow-lg transition-shadow"
    >
      {article.imageCouverture?.asset?.url && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.imageCouverture.asset.url}
            alt={article.titre}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {!article.imageCouverture?.asset?.url && (
        <div className="h-48 bg-beige flex items-center justify-center">
          <span className="font-display text-4xl text-terracotta/30">NE</span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {article.categorie && (
            <span className={`text-xs font-body font-medium px-2 py-0.5 rounded-full ${categorieColors[article.categorie] ?? "bg-beige text-anthracite"}`}>
              {article.categorie}
            </span>
          )}
          <span className="text-xs text-anthracite/40 font-body">
            {formatDate(article.datePublication)}
          </span>
        </div>

        <h3 className="font-display text-xl text-anthracite mb-2 group-hover:text-terracotta transition-colors leading-snug">
          {article.titre}
        </h3>

        {article.extrait && (
          <p className="font-body text-sm text-anthracite/70 leading-relaxed line-clamp-2">
            {article.extrait}
          </p>
        )}

        <p className="mt-4 text-sm text-terracotta font-medium font-body">Lire l'article →</p>
      </div>
    </Link>
  );
}
