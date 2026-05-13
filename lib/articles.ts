export type ArticleSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  titre: string;
  metaDescription: string;
  categorie: string;
  datePublication: string;
  tempsLecture: string;
  extrait: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "retroplanning-mariage-guide-complet",
    titre: "Rétroplanning mariage : le guide complet J-12 mois à J-0",
    metaDescription:
      "Tout ce qu'il faut faire et quand — de la date à cocher à J-12 mois jusqu'aux dernières confirmations à J-7 jours. Le rétroplanning mariage que personne ne vous donne.",
    categorie: "Organisation",
    datePublication: "2026-05-11",
    tempsLecture: "8 min",
    extrait:
      "De J-12 mois à J-0, chaque étape dans l'ordre. Ce que vous devez faire, ce que vous pouvez reporter, et ce que personne ne vous dit.",
    sections: [
      {
        type: "p",
        text: "Organiser un mariage sans rétroplanning, c'est conduire sans GPS sur un trajet que vous n'avez jamais fait. Ça peut fonctionner. Mais vous allez vous perdre, stresser, et arriver en retard. Ce guide vous donne la carte complète — mois par mois, de la décision à la dernière dance.",
      },
      {
        type: "callout",
        text: "Ce rétroplanning est calibré pour un mariage de 80 à 150 invités en France, avec traiteur externe et lieu de réception loué. Ajustez les délais selon la taille de votre événement.",
      },
      {
        type: "h2",
        text: "J-12 mois : poser les fondamentaux",
      },
      {
        type: "p",
        text: "La première décision conditionne toutes les autres : la date. Avant de contacter le moindre prestataire, alignez-vous sur une date (ou deux options) avec votre famille proche. Les weekends de mai à septembre sont les plus demandés — certains lieux sont complets 18 mois à l'avance.",
      },
      {
        type: "ul",
        items: [
          "Fixer la date et valider la disponibilité des proches incontournables",
          "Définir un budget global et la répartition entre familles (si applicable)",
          "Établir une liste d'invités indicative (fourchette haute et fourchette basse)",
          "Définir le style du mariage : intime ou festif, champêtre ou élégant, religieux ou civil",
          "Commencer la visite de lieux de réception — c'est le premier prestataire à bloquer",
        ],
      },
      {
        type: "h2",
        text: "J-10 mois : réserver les prestataires sous tension",
      },
      {
        type: "p",
        text: "Certains prestataires n'ont qu'une ou deux dates disponibles le weekend à la saison haute. Photographe, traiteur et DJ font partie de cette catégorie. Si vous attendez J-6 mois pour les contacter, vous serez en concurrence directe avec toutes les mariées de votre région qui ont eu la même idée.",
      },
      {
        type: "ul",
        items: [
          "Signer le contrat du lieu de réception (verser l'acompte)",
          "Sélectionner et réserver le photographe",
          "Contacter 3 traiteurs pour des premières propositions",
          "Réserver le DJ ou le groupe de musique",
          "Prendre un premier rendez-vous en mairie pour la publication des bans (si mariage civil)",
        ],
      },
      {
        type: "callout",
        text: "Sur les devis traiteur : ne signez rien avant d'avoir lu les clauses d'annulation, les conditions de service et ce qui est réellement inclus. C'est là que se cachent la majorité des mauvaises surprises.",
      },
      {
        type: "h2",
        text: "J-8 mois : les détails qui prennent du temps",
      },
      {
        type: "p",
        text: "Les tenues de mariage demandent plusieurs essayages et des délais de confection qui surprennent toujours les mariées. Certaines robes nécessitent 6 à 8 mois de fabrication. Ne remettez pas cette étape à plus tard.",
      },
      {
        type: "ul",
        items: [
          "Commencer les visites en boutiques de robes et prendre les premières commandes",
          "Décider du concept de décoration et contacter les fleuristes",
          "Choisir le modèle d'alliance et passer commande (délai : 4 à 12 semaines selon le bijoutier)",
          "Définir le style de la papeterie : faire-part, menus, plan de table",
          "Réserver la lune de miel (les meilleures disponibilités partent tôt)",
        ],
      },
      {
        type: "h2",
        text: "J-6 mois : finaliser les contrats et le menu",
      },
      {
        type: "p",
        text: "C'est le moment de transformer les discussions en contrats signés. Si vous hésitez encore sur un prestataire, demandez-vous pourquoi — et tranchez. Un contrat non signé à J-6 mois est une disponibilité que vous perdrez.",
      },
      {
        type: "ul",
        items: [
          "Signer les contrats traiteur, fleuriste, photographe, DJ",
          "Dégustation avec le traiteur et validation du menu",
          "Envoyer les faire-part (les invités ont besoin de 4 à 6 mois pour organiser leur venue)",
          "Ouvrir la liste de mariage",
          "Réserver l'hébergement pour les invités qui viennent de loin",
        ],
      },
      {
        type: "h2",
        text: "J-4 mois : affiner et confirmer",
      },
      {
        type: "ul",
        items: [
          "Collecter les confirmations de présence (date limite de réponse à préciser sur les faire-part)",
          "Établir un premier plan de table",
          "Dernier essayage de la robe (et prévoir l'avant-dernier aussi)",
          "Confirmer les arrhes restants aux prestataires selon leurs échéances",
          "Préparer la liste des morceaux clés pour le DJ : entrée des mariés, premier dance, fin de soirée",
        ],
      },
      {
        type: "h2",
        text: "J-2 mois : les finitions",
      },
      {
        type: "ul",
        items: [
          "Finaliser le plan de table avec les confirmations définitives",
          "Préparer les discours (ou briefer les témoins qui en font un)",
          "Commander les cadeaux pour les invités si vous en prévoyez",
          "Organiser les transports (navettes hôtel ↔ lieu)",
          "Prévoir un plan B météo si le cocktail est prévu en extérieur",
        ],
      },
      {
        type: "h2",
        text: "J-1 mois : tout mettre par écrit",
      },
      {
        type: "p",
        text: "C'est le moment de produire le rétroplanning détaillé du Jour J — heure par heure. Ce document est votre outil de coordination : il doit être envoyé à tous les prestataires avant le Jour J.",
      },
      {
        type: "ul",
        items: [
          "Écrire le déroulé du Jour J heure par heure (préparatifs → cérémonie → cocktail → dîner → soirée)",
          "Envoyer ce déroulé à tous les prestataires",
          "Confirmer les horaires d'arrivée et de montage avec le lieu et le traiteur",
          "Préparer les enveloppes de règlement pour les prestataires payés le Jour J",
          "Constituer un kit d'urgence : épingles, colle, anti-tache, analgésique, chargeur, bas de rechange",
        ],
      },
      {
        type: "h2",
        text: "J-15 jours : les confirmations finales",
      },
      {
        type: "ul",
        items: [
          "Appeler chaque prestataire pour reconfirmer les horaires",
          "Vérifier que le solde de chaque contrat est bien réglé ou planifié",
          "Remettre le plan de table final au traiteur",
          "Briefer les témoins sur leur rôle logistique le Jour J",
        ],
      },
      {
        type: "h2",
        text: "J-7 jours : la semaine d'avant",
      },
      {
        type: "ul",
        items: [
          "Dernière visite du lieu avec la coordinatrice si vous avez un prestataire",
          "Préparer et remettre les tenues et accessoires au lieu si stockage prévu",
          "Vérifier la météo et activer le plan B si besoin",
          "Se reposer. Sérieusement.",
        ],
      },
      {
        type: "h2",
        text: "J-0 : vous n'avez plus qu'à profiter",
      },
      {
        type: "p",
        text: "Si tout le travail des 12 mois précédents a été fait, le Jour J ne demande qu'une seule chose de votre part : être présent. La logistique doit être invisible pour vous. C'est exactement ce qu'une coordinatrice Jour J garantit.",
      },
      {
        type: "callout",
        text: "Vous avez tout organisé mais vous ne voulez pas gérer la logistique le Jour J ? C'est exactement le périmètre de la prestation Coordination Jour J. On reprend votre rétroplanning, on vérifie chaque point avec les prestataires, et on est là de la première heure à la dernière.",
      },
    ],
  },

];