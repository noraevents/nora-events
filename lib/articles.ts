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
    slug: "wedding-planner-ou-coordination-jour-j",
    titre: "Wedding planner ou coordination jour J : quelle différence ?",
    metaDescription:
      "Vous hésitez entre un wedding planner intégral et une coordination jour J ? Voici les différences concrètes, ce que chaque prestation comprend vraiment, et comment choisir selon votre situation.",
    categorie: "Organisation",
    datePublication: "2026-05-15",
    tempsLecture: "6 min",
    extrait:
      "C'est la question que posent presque toutes les futures mariées. La réponse dépend d'où vous en êtes dans votre organisation — et de ce que vous voulez vraiment déléguer.",
    sections: [
      {
        type: "p",
        text: "Quand on commence à chercher de l'aide pour organiser son mariage, on tombe vite sur deux termes qui semblent interchangeables : wedding planner et coordinatrice jour J. Ils ne le sont pas. Ce sont deux prestations très différentes, avec des niveaux d'implication opposés et des prix qui ne se comparent pas. Voici comment choisir.",
      },
      {
        type: "h2",
        text: "Ce que fait une coordinatrice jour J",
      },
      {
        type: "p",
        text: "La coordination jour J part du principe que vous avez déjà tout organisé : le lieu est réservé, les prestataires sont signés, le menu est choisi. Vous avez fait le travail. Ce que vous déléguez, c'est l'exécution.",
      },
      {
        type: "p",
        text: "Concrètement, une coordinatrice jour J prend le relais quelques semaines avant l'événement — souvent entre J-30 et J-14. Elle reprend votre rétroplanning, vérifie les confirmations auprès de chaque prestataire, s'assure que tout le monde a la même version du programme. Le jour de votre mariage, elle est sur place de 7h du matin à la fin du dîner. Elle gère les retards, les imprévus, les conflits de timing. Vous n'avez rien à faire.",
      },
      {
        type: "callout",
        text: "Ce n'est pas une prestation au rabais. C'est une prestation adaptée à des couples organisés qui ont simplement besoin que quelqu'un d'expérimenté prenne les commandes le jour J.",
      },
      {
        type: "h2",
        text: "Ce que fait un wedding planner intégral",
      },
      {
        type: "p",
        text: "Un wedding planner intégral intervient dès le début — souvent dès les fiançailles, parfois à J-12 mois. Il vous accompagne sur toutes les décisions : le choix du lieu, la sélection des prestataires, la négociation des contrats, le concept visuel, le budget global. Il est présent à vos côtés tout au long du processus, pas uniquement le jour J.",
      },
      {
        type: "p",
        text: "Ce niveau d'accompagnement est utile si vous partez de zéro, si vous n'avez pas le temps de vous occuper de l'organisation, ou si vous voulez que quelqu'un d'autre porte la charge mentale de la préparation.",
      },
      {
        type: "h2",
        text: "La différence en pratique : un tableau clair",
      },
      {
        type: "ul",
        items: [
          "Coordination jour J — vous avez tout organisé, elle exécute. Intervention à J-30 / J-14 puis le jour J complet.",
          "Planning partiel (4 derniers mois) — elle reprend le dossier à mi-chemin, relecture des devis, coordination prestataires, rétroplanning. Intervention de J-120 à J-0.",
          "Planning intégral — elle part avec vous de zéro. De J-12 mois à J-0, toutes les décisions sont prises ensemble.",
        ],
      },
      {
        type: "h2",
        text: "Comment choisir selon votre situation",
      },
      {
        type: "h3",
        text: "Choisissez la coordination jour J si :",
      },
      {
        type: "ul",
        items: [
          "Vous avez déjà réservé le lieu et signé vos prestataires principaux",
          "Vous aimez organiser et avez suivi de près chaque détail",
          "Vous voulez pouvoir profiter de votre jour sans gérer les imprévus",
          "Votre budget est plus serré",
        ],
      },
      {
        type: "h3",
        text: "Choisissez un planning partiel ou intégral si :",
      },
      {
        type: "ul",
        items: [
          "Vous n'avez pas encore de lieu ni de prestataires",
          "Vous manquez de temps pour vous en occuper",
          "Vous voulez un regard extérieur sur les devis avant de signer",
          "L'organisation vous génère du stress plutôt que du plaisir",
        ],
      },
      {
        type: "h2",
        text: "Un point sur les prix",
      },
      {
        type: "p",
        text: "En France, une coordination jour J de qualité se situe généralement entre 1 500 et 2 500 euros selon la région et le niveau d'expérience. Un planning intégral se situe plutôt entre 3 500 et 8 000 euros. Ce n'est pas le même budget, ni le même besoin.",
      },
      {
        type: "p",
        text: "Ce qui compte, c'est de ne pas choisir en fonction du prix uniquement. Une coordination jour J peu chère confiée à quelqu'un qui manque d'expérience terrain peut coûter très cher le jour J — en stress, en imprévus mal gérés, en prestataires qui se retrouvent sans interlocuteur.",
      },
      {
        type: "callout",
        text: "Chez Nora Events, je propose les deux niveaux d'accompagnement — du Jour J Serein (à partir de 1 800 €) au Clé en Main (à partir de 4 000 €). Si vous ne savez pas où vous en êtes, un appel de 30 minutes suffit à clarifier ce dont vous avez vraiment besoin.",
      },
      {
        type: "h2",
        text: "La question que peu de gens posent",
      },
      {
        type: "p",
        text: "Au-delà du niveau d'implication, ce qui fait la différence, c'est l'expérience terrain de la personne que vous choisissez. Quelqu'un qui a passé 5 ans en maître d'hôtel à travailler aux côtés des traiteurs, des chefs de rang et des régisseurs ne gère pas une journée de la même façon qu'une personne formée uniquement en théorie.",
      },
      {
        type: "p",
        text: "Le jour J, les imprévus ne préviennent pas. Ce qui compte, c'est de savoir les résoudre en 30 secondes sans que vous le voyiez. Ça s'apprend sur le terrain, pas dans un manuel.",
      },
    ],
  },
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
