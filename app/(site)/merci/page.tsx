import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merci — Votre demande a bien été reçue",
  robots: { index: false },
};

export default function MerciPage() {
  return (
    <section className="bg-beige min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-6xl mb-8">✉️</div>
        <h1 className="font-display text-5xl text-anthracite mb-4">C'est bien reçu.</h1>
        <p className="font-body text-lg text-anthracite/70 leading-relaxed mb-8">
          Je vous réponds dans les <strong className="text-anthracite">24 heures</strong> avec une proposition
          adaptée à votre projet. En attendant, consultez le blog pour des conseils pratiques sur l'organisation de mariage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-terracotta text-ivoire px-6 py-3 rounded font-body text-sm hover:bg-terracotta-light transition-colors"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/blog"
            className="border border-terracotta text-terracotta px-6 py-3 rounded font-body text-sm hover:bg-terracotta hover:text-ivoire transition-colors"
          >
            Lire le blog
          </Link>
        </div>
      </div>
    </section>
  );
}
