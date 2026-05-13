import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Nora Events",
  robots: { index: false },
};

export default function CGVPage() {
  return (
    <section className="bg-beige pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-5xl text-anthracite mb-10">Conditions Générales de Vente</h1>
        <p className="font-body text-sm text-anthracite/50 mb-10">Dernière mise à jour : 2026</p>

        <div className="space-y-8 font-body text-anthracite/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Article 1 : Objet</h2>
            <p>
              Les présentes conditions générales de vente régissent les relations contractuelles entre
              Nora Events (ci-après "le Prestataire") et toute personne physique ou morale (ci-après
              "le Client") souhaitant bénéficier de prestations de coordination et/ou de planification
              événementielle.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Article 2 : Prestations</h2>
            <p>Les prestations proposées comprennent :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Coordination Jour J ("Le Jour J Serein") : 1 800 à 2 500 €</li>
              <li>Accompagnement 4 derniers mois ("L'Essentiel") : 2 800 à 3 800 €</li>
              <li>Planning intégral ("Clé en Main") : 4 000 à 5 000 €</li>
              <li>Prestations sur devis pour baptêmes, anniversaires et événements privés</li>
            </ul>
            <p className="mt-3">
              Chaque prestation fait l'objet d'un devis personnalisé et d'un contrat signé avant
              le début de la mission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Article 3 : Modalités de commande</h2>
            <p>
              Toute commande est formalisée par la signature d'un contrat de prestation et le versement
              d'un acompte. Le devis est valable 30 jours à compter de sa date d'émission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Article 4 : Conditions de paiement</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Acompte de 30% dû à la signature du contrat</li>
              <li>Solde de 70% dû 30 jours avant la date de l'événement</li>
              <li>Paiement par virement bancaire ou chèque</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Article 5 : Annulation</h2>
            <p><strong>Annulation par le Client :</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Plus de 90 jours avant l'événement : remboursement de l'acompte hors frais de dossier (150 €)</li>
              <li>Entre 60 et 90 jours : conservation de 50% de l'acompte</li>
              <li>Moins de 60 jours : conservation de l'acompte intégral</li>
            </ul>
            <p className="mt-3"><strong>Annulation par le Prestataire :</strong></p>
            <p>En cas de force majeure ou d'impossibilité de Nora Events, le Client sera remboursé
            intégralement et une solution de remplacement sera proposée dans la mesure du possible.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Article 6 : Responsabilité</h2>
            <p>
              Nora Events s'engage à mettre tout en œuvre pour assurer la bonne coordination de
              l'événement. Sa responsabilité ne saurait être engagée pour les défaillances des
              prestataires tiers (traiteurs, photographes, lieux, etc.) avec lesquels le Client a
              contracté directement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-anthracite mb-3">Article 7 : Droit applicable</h2>
            <p>
              Les présentes CGV sont régies par le droit français. Tout litige relève de la compétence
              des tribunaux français compétents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
