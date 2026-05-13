import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Nora Events",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-beige pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-5xl text-anthracite mb-10">Mentions légales</h1>

        <div className="space-y-8 font-body text-anthracite/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Éditeur du site</h2>
            <p>Nom : Nora [Nom de famille à compléter]</p>
            <p>Forme juridique : Auto-entreprise</p>
            <p>Adresse : Sur rendez-vous, Normandie et Île-de-France</p>
            <p>Email : <a href="mailto:contact@noraevents.fr" className="text-terracotta hover:underline">contact@noraevents.fr</a></p>
            <p>Directeur de publication : Nora [Nom]</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Hébergement</h2>
            <p>Vercel Inc.</p>
            <p>340 Pine Street, Suite 701</p>
            <p>San Francisco, CA 94104, États-Unis</p>
            <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">vercel.com</a></p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, structure) est la propriété de Nora Events.
              Toute reproduction sans autorisation écrite préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Limitation de responsabilité</h2>
            <p>
              Nora Events s'efforce de maintenir les informations de ce site à jour et exactes. Cependant,
              aucune garantie n'est donnée quant à l'exactitude, la complétude ou l'actualité des informations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
