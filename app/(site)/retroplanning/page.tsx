"use client";

import { useState } from "react";
import { Download, CheckCircle } from "lucide-react";

export default function RetroPlanningPage() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/retroplanning", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prenom, email }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
    } else {
      setError("Une erreur est survenue. Réessaie ou écris-moi à contact@noraevents.fr");
    }
  }

  return (
    <main className="min-h-screen bg-beige flex flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-lg">

        {/* Eyebrow */}
        <p className="font-body text-xs tracking-[0.22em] uppercase text-terracotta mb-6 text-center">
          Ressource gratuite
        </p>

        {/* Titre */}
        <h1 className="font-display text-4xl md:text-5xl text-anthracite leading-tight text-center mb-6">
          Le rétroplanning mariage<br />
          <em>J-12 mois à J-0</em>
        </h1>

        {/* Sous-titre */}
        <p className="font-body text-anthracite/60 text-center leading-relaxed mb-10 text-base">
          Le planning complet que j'utilise avec mes clientes — toutes les étapes,
          dans l'ordre, pour ne rien oublier.
        </p>

        {/* Ce que contient le PDF */}
        <ul className="space-y-3 mb-10">
          {[
            "Toutes les étapes de J-12 mois à J-0",
            "Les prestataires à réserver en priorité (et pourquoi)",
            "Les erreurs à éviter à chaque étape",
            "Une checklist Jour J détaillée",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
              <span className="font-body text-sm text-anthracite/70 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* Formulaire ou message succès */}
        {success ? (
          <div className="bg-ivoire border border-beige rounded p-8 text-center">
            <CheckCircle className="text-sauge mx-auto mb-4" size={40} />
            <h2 className="font-display text-2xl text-anthracite mb-3">
              C'est dans ta boîte mail !
            </h2>
            <p className="font-body text-sm text-anthracite/60 leading-relaxed">
              Vérifie tes spams si tu ne vois rien dans les prochaines minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-anthracite/50 block mb-2">
                Prénom
              </label>
              <input
                type="text"
                required
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Marie"
                className="w-full bg-ivoire border border-beige px-4 py-3 font-body text-sm text-anthracite placeholder:text-anthracite/30 focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>

            <div>
              <label className="font-body text-xs tracking-widest uppercase text-anthracite/50 block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="marie@email.com"
                className="w-full bg-ivoire border border-beige px-4 py-3 font-body text-sm text-anthracite placeholder:text-anthracite/30 focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>

            {error && (
              <p className="font-body text-xs text-red-500">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-terracotta text-ivoire font-body text-xs tracking-[0.18em] uppercase py-4 flex items-center justify-center gap-3 hover:bg-terracotta/90 transition-colors disabled:opacity-60"
            >
              <Download size={15} />
              {loading ? "Envoi en cours…" : "Recevoir le rétroplanning gratuit"}
            </button>

            <p className="font-body text-xs text-anthracite/40 text-center leading-relaxed">
              Pas de spam. Tu peux te désabonner à tout moment.
            </p>
          </form>
        )}

      </div>
    </main>
  );
}
