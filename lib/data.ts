// Données du site Nora Events — éditées par Claude Code sur demande

export const offres = [
  {
    id: "jour-j-serein",
    nom: "Le Jour J Serein",
    prix: "À partir de 1 800 €",
    description: "Vous avez tout organisé — je prends les commandes le jour J.",
    inclusions: [
      "2 réunions de préparation (J-30 et J-14)",
      "Reprise et vérification de votre rétroplanning",
      "Présence complète le Jour J (préparatifs → fin du dîner)",
      "Coordination de tous vos prestataires",
      "Gestion de l'imprévu en temps réel",
    ],
    miseEnAvant: false,
  },
  {
    id: "essentiel",
    nom: "L'Essentiel",
    prix: "À partir de 2 800 €",
    description: "Les 4 derniers mois avec quelqu'un qui sait ce que ça devrait coûter.",
    inclusions: [
      "Tout ce qui est dans Le Jour J Serein",
      "Accompagnement sur les 4 derniers mois",
      "Relecture et négociation des devis prestataires",
      "Rétroplanning complet J-120 à J-0",
      "Recommandations réseau terrain",
      "1 visite du lieu de réception avec Nora",
    ],
    miseEnAvant: true,
  },
  {
    id: "cle-en-main",
    nom: "Clé en Main",
    prix: "À partir de 4 000 €",
    description: "De J-12 mois au Jour J — vous n'avez qu'à choisir.",
    inclusions: [
      "Tout ce qui est dans L'Essentiel",
      "Accompagnement de J-12 mois à J-0",
      "Recherche et sélection des prestataires",
      "Suivi de tous les contrats et relances",
      "Book d'inspiration et concept global",
      "Présence aux RDV prestataires clés",
    ],
    miseEnAvant: false,
  },
];

export const faqMariage = [
  {
    id: "1",
    question: "Intervenez-vous partout en Normandie ?",
    reponse:
      "Oui — Le Havre, Rouen, Caen, Honfleur, Deauville et leurs environs. Je me déplace également sur l'ensemble de la Normandie pour les projets qui me correspondent.",
  },
  {
    id: "2",
    question: "Et en Île-de-France ?",
    reponse:
      "Oui — Paris, les Yvelines, les Hauts-de-Seine et la petite couronne. Contactez-moi pour les projets en grande couronne.",
  },
  {
    id: "3",
    question: "Vous travaillez avec quels types de lieux ?",
    reponse:
      "Domaines, châteaux, salles de réception, lieux atypiques, chez les particuliers. Ma formation terrain m'a amenée à coordonner dans des dizaines de contextes différents.",
  },
  {
    id: "4",
    question: "Mon mariage a lieu dans 3 mois. Est-ce trop tard ?",
    reponse:
      "Non. La coordination Jour J peut s'organiser en 4 semaines si la date est disponible. Contactez-moi rapidement pour vérifier.",
  },
  {
    id: "5",
    question: "Vous travaillez avec nos prestataires déjà choisis ?",
    reponse:
      "Toujours. Je m'adapte à votre équipe existante — photographe, traiteur, fleuriste, DJ. Mon rôle est de les coordonner, pas de les remplacer.",
  },
  {
    id: "6",
    question: "Le devis est-il gratuit ?",
    reponse:
      "Oui, le devis est toujours gratuit et sans engagement. Je vous envoie une proposition sous 48h après notre premier échange.",
  },
];

export const faqTarifs = [
  {
    id: "t1",
    question: "Le devis est-il gratuit ?",
    reponse:
      "Oui, toujours. Vous m'envoyez votre demande, je vous réponds dans les 48h avec une proposition adaptée à votre situation. Pas d'engagement, pas de relance agressive.",
  },
  {
    id: "t2",
    question: "Peut-on adapter une offre à notre situation ?",
    reponse:
      "Oui. Chaque prestation est discutée lors de l'appel découverte. Si votre mariage a des spécificités, on ajuste. Je ne vends pas des forfaits rigides.",
  },
  {
    id: "t3",
    question: "Quand est-ce qu'on règle ?",
    reponse:
      "Acompte de 30% à la signature du contrat. Solde 30 jours avant l'événement. Paiement par virement ou chèque.",
  },
  {
    id: "t4",
    question: "Et si on annule ?",
    reponse:
      "Les conditions d'annulation sont précisées dans le contrat. Annulation à plus de 90 jours : remboursement de l'acompte hors frais de dossier (150 €). À moins de 90 jours : acompte conservé.",
  },
  {
    id: "t5",
    question: "Ces prix incluent-ils les prestataires ?",
    reponse:
      "Non. Mon honoraire couvre ma prestation de coordination. Les prestataires (traiteur, photographe, lieu…) sont réglés directement par vous.",
  },
];

export const temoignages = [
  {
    id: "1",
    prenom: "Sophie & Maxime",
    ville: "Rouen",
    typeEvenement: "Mariage",
    note: 5,
    texte:
      "Nora a géré l'intégralité de notre Jour J avec un calme impressionnant. On a profité de chaque instant sans penser une seule seconde à la logistique. Exactement ce qu'on voulait.",
    afficherSurHomepage: true,
  },
  {
    id: "2",
    prenom: "Camille",
    ville: "Le Havre",
    typeEvenement: "Mariage",
    note: 5,
    texte:
      "Elle a repéré une erreur dans le devis de notre traiteur avant qu'on signe. Résultat : 700 € économisés. Son expérience terrain, ça se sent à chaque échange.",
    afficherSurHomepage: true,
  },
  {
    id: "3",
    prenom: "Marie & Thomas",
    ville: "Paris 16e",
    typeEvenement: "Baptême",
    note: 5,
    texte:
      "Même niveau d'exigence pour notre baptême que pour un mariage. Les invités ont tous demandé le contact de Nora à la fin de la soirée.",
    afficherSurHomepage: true,
  },
];

export const articlesAVenir = [
  { slug: "retroplanning-mariage-guide-complet", titre: "Rétroplanning mariage : le guide complet J-12 mois à J-0", categorie: "Organisation" },
  { slug: "wedding-planner-normandie-comment-choisir", titre: "Wedding planner Normandie : comment choisir (et éviter les pièges)", categorie: "Organisation" },
  { slug: "budget-mariage-france-2026", titre: "Budget mariage moyen en France en 2026 : les vrais chiffres", categorie: "Budget" },
  { slug: "coordination-jour-j-a-quoi-ca-sert", titre: "Coordination Jour J : à quoi ça sert vraiment ?", categorie: "Organisation" },
  { slug: "erreurs-devis-traiteur-mariage", titre: "5 erreurs sur les devis traiteur (et comment les éviter)", categorie: "Budget" },
  { slug: "domaines-chateaux-mariage-normandie", titre: "Mariage en Normandie : les plus beaux domaines et châteaux", categorie: "Normandie" },
];
