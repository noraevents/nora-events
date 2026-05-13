import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Nora Events",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="bg-beige pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-5xl text-anthracite mb-10">Politique de confidentialité</h1>
        <p className="font-body text-sm text-anthracite/50 mb-10">Dernière mise à jour : 2026</p>

        <div className="space-y-8 font-body text-anthracite/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">1. Responsable du traitement</h2>
            <p>
              Nora Events, contact@noraevents.fr. Toute demande relative à vos données peut être
              adressée à cette adresse.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">2. Données collectées</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Formulaire de contact / devis :</strong> nom, email, téléphone, informations sur votre événement. Finalité : traitement de votre demande. Durée : 3 ans.</li>
              <li><strong>Newsletter (si abonnement) :</strong> email uniquement. Finalité : envoi d'informations sur les mariages et l'organisation d'événements. Durée : jusqu'à désinscription.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">3. Partage des données</h2>
            <p>
              Vos données ne sont jamais vendues ni transmises à des tiers à des fins commerciales.
              Elles peuvent être partagées avec des sous-traitants techniques (Brevo pour l'envoi
              d'emails, Vercel pour l'hébergement) dans la limite strictement nécessaire à
              l'exécution du service.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">4. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits : <a href="mailto:contact@noraevents.fr" className="text-terracotta hover:underline">contact@noraevents.fr</a>.
              Réponse sous 30 jours.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">5. Cookies</h2>
            <p>
              Ce site ne dépose aucun cookie. Aucun outil de tracking n'est utilisé.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">6. Contact RGPD</h2>
            <p>
              Pour toute question ou réclamation relative à vos données personnelles :
              <a href="mailto:contact@noraevents.fr" className="text-terracotta hover:underline ml-1">
                contact@noraevents.fr
              </a>
            </p>
            <p className="mt-2">
              Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">
                www.cnil.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
