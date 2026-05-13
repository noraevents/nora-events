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
    slug: "erreurs-devis-traiteur-mariage",
    titre: "5 erreurs sur les devis traiteur (et comment les éviter)",
    metaDescription:
      "5 erreurs classiques sur les devis traiteur de mariage, vues de l'intérieur après 5 ans en maître d'hôtel. Comment les repérer et les éviter avant de signer.",
    categorie: "Budget",
    datePublication: "2026-05-11",
    tempsLecture: "5 min",
    extrait:
      "Après 5 ans à travailler aux côtés des traiteurs, voici les 5 erreurs que je vois systématiquement sur les devis — et comment les éviter avant de signer.",
    sections: [
      {
        type: "p",
        text: "Le devis traiteur est le document sur lequel la plupart des couples passent le moins de temps — alors que c'est celui qui représente jusqu'à 45 % de leur budget. Après 5 ans en maître d'hôtel à coordonner des dizaines de mariages aux côtés des équipes traiteur, voici les cinq erreurs que je vois répétées presque à chaque fois.",
      },
      {
        type: "h2",
        text: "Erreur n°1 : signer sans lire les clauses d'annulation",
      },
      {
        type: "p",
        text: "Les clauses d'annulation varient énormément d'un traiteur à l'autre. Certains remboursent l'intégralité de l'acompte jusqu'à 6 mois avant l'événement. D'autres retiennent 50 % dès la signature. Quelques-uns réclament la totalité si vous annulez à moins de 3 mois.",
      },
      {
        type: "p",
        text: "Lisez cette clause avant de comparer les prix. Un traiteur moins cher avec des conditions d'annulation sévères peut vous coûter plus cher qu'un traiteur un peu plus cher mais plus souple — si votre situation change.",
      },
      {
        type: "h2",
        text: "Erreur n°2 : comparer les prix au lieu de comparer les prestations",
      },
      {
        type: "p",
        text: "Deux devis à 90 €/pers n'incluent pas forcément la même chose. L'un comprend les apéritifs, les vins à table et le champagne pour le toast. L'autre propose des vins de table basiques et facture le champagne en supplément.",
      },
      {
        type: "p",
        text: "Pour comparer vraiment, créez un tableau avec les mêmes lignes pour chaque devis : apéritif (quantité et qualité), entrée, plat, dessert, café, vins (AOC ou basique ?), champagne, service (combien de serveurs, combien d'heures), matériel inclus ou loué en supplément.",
      },
      {
        type: "callout",
        text: "Demandez toujours : « Qu'est-ce qui n'est PAS inclus dans ce devis ? » La réponse à cette question est plus utile que le devis lui-même.",
      },
      {
        type: "h2",
        text: "Erreur n°3 : ne pas vérifier le ratio serveurs/invités",
      },
      {
        type: "p",
        text: "Le standard pour un mariage avec service à table, c'est un serveur pour 8 à 12 invités. En dessous, le service est lent, les verres restent vides, l'atmosphère se tend. Certains traiteurs proposent un prix très bas parce qu'ils prévoient 1 serveur pour 15 ou 20 invités.",
      },
      {
        type: "p",
        text: "Posez la question directement : combien de serveurs seront présents pendant le dîner ? Pour combien d'heures ? Qui gère le bar ? Si la réponse est vague, insistez.",
      },
      {
        type: "h2",
        text: "Erreur n°4 : ne pas demander de dégustation",
      },
      {
        type: "p",
        text: "La majorité des traiteurs proposent une dégustation — parfois incluse dans le contrat, parfois facturée. Certains couples l'évitent pour gagner du temps ou par gêne de sembler exigeants. C'est une erreur.",
      },
      {
        type: "p",
        text: "La dégustation est le seul moment où vous pouvez vérifier la qualité réelle de ce que vos invités mangeront. C'est aussi le moment d'ajuster les quantités, les intolérances alimentaires, et de confirmer les détails du service.",
      },
      {
        type: "h2",
        text: "Erreur n°5 : oublier de chiffrer les extras",
      },
      {
        type: "p",
        text: "Certains postes n'apparaissent pas dans le devis initial mais se retrouvent sur la facture finale :",
      },
      {
        type: "ul",
        items: [
          "Heures supplémentaires si la soirée se prolonge au-delà du forfait",
          "Location de matériel (tables, chaises, vaisselle) si le lieu ne les fournit pas",
          "Frais de déplacement si le traiteur est loin du lieu",
          "Repas du personnel (coordinatrice, photographe, DJ — souvent demandés par les prestataires)",
          "Pièce montée ou gâteau de mariage, parfois non inclus dans le menu",
        ],
      },
      {
        type: "p",
        text: "Avant de signer, demandez un devis « tout compris » sur la base de votre nombre d'invités confirmé, avec les extras listés séparément. Vous aurez une vision juste du coût réel.",
      },
      {
        type: "callout",
        text: "Je relis les devis traiteur avec vous dans le cadre des prestations L'Essentiel et Clé en Main. Si vous êtes en prestation Jour J uniquement et voulez un second regard avant de signer, contactez-moi — j'offre une relecture ponctuelle sur devis.",
      },
    ],
  },
];
