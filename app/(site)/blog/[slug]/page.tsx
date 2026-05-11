import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, type ArticleSection } from "@/lib/articles";
import { CtaBandeau } from "@/components/sections/CtaBandeau";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.titre} — Nora Events`,
    description: article.metaDescription,
    alternates: { canonical: `https://noraevents.fr/blog/${slug}` },
  };
}

function RenderSection({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "h2":
      return (
        <h2 className="font-display text-2xl text-anthracite mt-10 mb-3">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-body font-semibold text-anthracite mt-6 mb-2">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p className="font-body text-anthracite/80 leading-relaxed mb-4">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul className="list-none space-y-2 mb-4 pl-0">
          {section.items.map((item, i) => (
            <li key={i} className="font-body text-anthracite/80 flex gap-3 leading-relaxed">
              <span className="text-terracotta mt-1 flex-shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2 mb-4 pl-0">
          {section.items.map((item, i) => (
            <li key={i} className="font-body text-anthracite/80 flex gap-3 leading-relaxed">
              <span className="font-display text-terracotta flex-shrink-0 w-5">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div className="bg-terracotta/8 border-l-2 border-terracotta rounded-r-lg px-6 py-4 my-6">
          <p className="font-body text-anthracite/90 leading-relaxed text-sm italic">
            {section.text}
          </p>
        </div>
      );
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-beige pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-body font-medium text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
              {article.categorie}
            </span>
            <span className="text-xs font-body text-anthracite/40">{article.tempsLecture} de lecture</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl text-anthracite leading-tight mb-6">
            {article.titre}
          </h1>
          <p className="font-body text-lg text-anthracite/60 leading-relaxed">
            {article.extrait}
          </p>
        </div>
      </section>

      <section className="bg-ivoire py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {article.sections.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}
        </div>
      </section>

      <CtaBandeau
        titre="Une question sur votre mariage ? Parlons-en."
        ctaLabel="Demander un devis gratuit"
        ctaHref="/contact"
      />
    </>
  );
}
