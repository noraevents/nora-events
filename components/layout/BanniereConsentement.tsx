"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { X } from "lucide-react";

const STORAGE_KEY = "nora-events-cookies-consent";

export function BanniereConsentement() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === "accepted") {
      setAccepted(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setAccepted(true);
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setVisible(false);
  };

  return (
    <>
      {/* Plausible Analytics — chargé uniquement si accepté */}
      {accepted && (
        <Script
          defer
          data-domain="noraevents.fr"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}

      {visible && (
        <div
          role="dialog"
          aria-label="Gestion des cookies"
          aria-modal="true"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 bg-anthracite text-ivoire p-6 rounded-lg shadow-xl"
        >
          <button
            onClick={refuse}
            className="absolute top-3 right-3 text-ivoire/60 hover:text-ivoire"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>

          <p className="text-sm leading-relaxed mb-4 text-ivoire/80">
            Ce site utilise <strong className="text-ivoire">Plausible Analytics</strong> — un outil
            respectueux de votre vie privée (aucune donnée personnelle, aucun cookie tiers).
          </p>

          <div className="flex gap-3">
            <button
              onClick={accept}
              className="flex-1 bg-terracotta text-ivoire py-2 px-4 text-sm rounded hover:bg-terracotta-light transition-colors"
            >
              Accepter
            </button>
            <button
              onClick={refuse}
              className="flex-1 border border-ivoire/30 text-ivoire/80 py-2 px-4 text-sm rounded hover:border-ivoire/60 transition-colors"
            >
              Refuser
            </button>
          </div>

          <p className="text-xs text-ivoire/40 mt-3">
            <a href="/politique-confidentialite" className="underline hover:text-ivoire/60">
              Politique de confidentialité
            </a>
          </p>
        </div>
      )}
    </>
  );
}
