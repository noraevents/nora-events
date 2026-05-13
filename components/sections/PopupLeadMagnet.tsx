"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "nora_leadmagnet_seen";

export function PopupLeadMagnet() {
  const [visible, setVisible] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setVisible(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  function fermer() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }

  async function soumettre(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/retroplanning", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prenom, email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      setStatus("error");
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-anthracite/50"
        onClick={fermer}
      />
      <div className="relative bg-ivoire rounded-lg shadow-xl max-w-md w-full p-8 z-10">
        <button
          onClick={fermer}
          className="absolute top-4 right-4 text-anthracite/40 hover:text-anthracite transition-colors"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <p className="font-display text-3xl text-anthracite mb-3">
              C'est dans ta boite mail.
            </p>
            <p className="font-body text-anthracite/60 text-sm leading-relaxed">
              Vérifie tes spams si tu ne le vois pas dans les 2 minutes.
            </p>
            <button
              onClick={fermer}
              className="mt-6 font-body text-xs text-anthracite/40 hover:text-anthracite underline"
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            <p className="font-body text-xs tracking-widest uppercase text-terracotta mb-4">
              Offert
            </p>
            <h2 className="font-display text-3xl text-anthracite leading-tight mb-2">
              Le rétroplanning mariage complet.
            </h2>
            <p className="font-body text-sm text-anthracite/60 leading-relaxed mb-6">
              De J-12 mois au Jour J. Toutes les étapes dans le bon ordre, avec les erreurs à éviter.
              Gratuit.
            </p>

            <form onSubmit={soumettre} className="space-y-3">
              <input
                type="text"
                placeholder="Ton prénom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
                className="w-full border border-beige bg-white rounded px-4 py-3 font-body text-sm text-anthracite placeholder:text-anthracite/30 focus:outline-none focus:border-terracotta"
              />
              <input
                type="email"
                placeholder="Ton adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-beige bg-white rounded px-4 py-3 font-body text-sm text-anthracite placeholder:text-anthracite/30 focus:outline-none focus:border-terracotta"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-terracotta text-ivoire py-3 px-6 rounded font-body text-sm font-medium hover:bg-terracotta-light transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Envoi en cours..." : "Recevoir le rétroplanning"}
              </button>
            </form>

            {status === "error" && (
              <p className="mt-3 text-xs text-red-500 font-body text-center">
                Une erreur s'est produite. Essaie depuis la page contact.
              </p>
            )}

            <p className="mt-4 text-xs text-anthracite/30 font-body text-center">
              Aucun spam. Tu peux te désabonner à tout moment.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
