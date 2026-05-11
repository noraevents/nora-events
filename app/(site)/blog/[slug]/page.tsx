import { notFound } from "next/navigation";
import { articlesAVenir } from "@/lib/data";
import { CtaBandeau } from "@/components/sections/CtaBandeau";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articlesAVenir.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articlesAVenir.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-beige pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-body font-medium text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
            {article.categorie}
          </span>
          <h1 className="font-display text-4xl lg:text-5xl text-anthracite mt-6 leading-tight">
            {article.titre}
          </h1>
          <p className="font-body text-anthracite/60 mt-6">Cet article arrive très bientôt.</p>
        </div>
      </section>

      <CtaBandeau
        titre="En attendant, parlons de votre mariage."
        ctaLabel="Demander un devis gratuit"
        ctaHref="/contact"
      />
    </>
  );
}
