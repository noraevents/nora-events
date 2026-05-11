import Link from "next/link";
import Image from "next/image";

interface PortfolioCardProps {
  mariage: {
    _id: string;
    titre: string;
    slug: { current: string };
    typeEvenement: string;
    zone: string;
    resultat: string;
    imagePrincipale?: { asset?: { url?: string } };
  };
}

export function PortfolioCard({ mariage }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${mariage.slug.current}`}
      className="group block relative overflow-hidden rounded-lg aspect-[4/3] bg-beige"
    >
      {mariage.imagePrincipale?.asset?.url ? (
        <Image
          src={mariage.imagePrincipale.asset.url}
          alt={mariage.titre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-beige">
          <span className="font-display text-5xl text-terracotta/30">NE</span>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-xs font-body text-terracotta-light font-medium mb-1">
          {mariage.typeEvenement} — {mariage.zone}
        </p>
        <h3 className="font-display text-xl text-ivoire leading-snug">{mariage.titre}</h3>
      </div>

      {/* Badge toujours visible */}
      <div className="absolute top-4 left-4">
        <span className="bg-beige/90 text-anthracite text-xs font-body px-3 py-1 rounded-full">
          {mariage.zone}
        </span>
      </div>
    </Link>
  );
}
