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

  {
    slug: "wedding-planner-normandie-comment-choisir",
    titre: "Wedding planner Normandie : comment choisir (et éviter les pièges)",
    metaDescription:
      "Comment choisir sa wedding planner en Normandie ? Les bonnes questions à poser, les signaux d'alarme à repérer, et pourquoi l'expérience terrain compte plus que les certifications.",
    categorie: "Organisation",
    datePublication: "2026-05-11",
    tempsLecture: "6 min",
    extrait:
      "Le marché normand compte des dizaines de wedding planners. Voici comment faire la différence entre une vraie professionnelle et quelqu'un qui a suivi une formation de 3 jours.",
    sections: [
      {
        type: "p",
        text: "Choisir sa wedding planner en Normandie, c'est d'abord comprendre ce qu'on achète. Le titre n'est pas réglementé. N'importe qui peut se déclarer wedding planner après une formation en ligne de quelques heures. Ce qui compte, c'est ce que la personne en face de vous a réellement fait — et combien de fois.",
      },
      {
        type: "h2",
        text: "Wedding planner ou coordinatrice Jour J : ce n'est pas la même chose",
      },
      {
        type: "p",
        text: "Une wedding planner full-service vous accompagne de A à Z : concept, recherche des prestataires, suivi des contrats, rétroplanning, présence le Jour J. C'est la prestation la plus complète, et la plus chère.",
      },
      {
        type: "p",
        text: "Une coordinatrice Jour J intervient sur les 4 à 8 dernières semaines. Vous avez tout organisé — elle reprend le fil, vérifie chaque détail avec les prestataires et gère la logistique le grand jour.",
      },
      {
        type: "p",
        text: "Les deux sont utiles selon votre situation. Si vous avez du temps et aimez organiser, la coordination suffit. Si vous manquez de temps ou d'appétit pour les détails logistiques, optez pour un accompagnement plus complet.",
      },
      {
        type: "h2",
        text: "Les 5 questions à poser lors du premier appel",
      },
      {
        type: "ol",
        items: [
          "Combien de mariages avez-vous gérés en Normandie spécifiquement ? (La connaissance du tissu local de prestataires est déterminante.)",
          "Quelle est votre méthode de gestion des imprévus le Jour J ? (Une vraie professionnelle a une réponse précise, pas du générique.)",
          "Comment gérez-vous les relations avec les traiteurs et les lieux ? (La qualité de ces relations influe directement sur la qualité de votre journée.)",
          "Quel est votre périmètre exact ? Qu'est-ce qui n'est PAS inclus dans votre prestation ?",
          "Pouvez-vous me mettre en contact avec deux mariées que vous avez accompagnées ?",
        ],
      },
      {
        type: "h2",
        text: "Les signaux d'alarme",
      },
      {
        type: "ul",
        items: [
          "Elle ne peut pas vous donner de références vérifiables",
          "Elle ne connaît pas les prestataires locaux de Normandie par leur nom",
          "Son devis est vague sur ce qui est inclus",
          "Elle promet un résultat sans avoir vu votre lieu ou entendu vos contraintes",
          "Elle gère plus de 15-20 mariages par an seule — la qualité de suivi est mathématiquement impossible",
        ],
      },
      {
        type: "h2",
        text: "Certification vs expérience terrain",
      },
      {
        type: "p",
        text: "De nombreuses wedding planners affichent des certifications. C'est un signal positif — ça montre une démarche professionnelle. Mais une certification ne remplace pas l'expérience. Une coordinatrice qui a passé 5 ans dans les coulisses d'événements, aux côtés des traiteurs et des équipes de salle, a une compréhension de la logistique qu'aucune formation ne peut transmettre.",
      },
      {
        type: "p",
        text: "Posez la question directement : quelle était votre activité avant le wedding planning ? La réponse vous dira si la personne comprend vraiment les rouages d'un événement de l'intérieur.",
      },
      {
        type: "h2",
        text: "La question du réseau local",
      },
      {
        type: "p",
        text: "En Normandie, le réseau de prestataires est un vrai atout. Une coordinatrice qui travaille régulièrement avec les mêmes photographes, fleuristes et traiteurs obtient de meilleurs tarifs, une meilleure réactivité, et une communication fluide le Jour J. Demandez-lui quels prestataires elle recommande sur vos zones cibles — Le Havre, Rouen, Caen, Honfleur, Deauville — et pourquoi.",
      },
      {
        type: "callout",
        text: "Lors de votre premier échange, observez la qualité des questions qu'elle vous pose. Une bonne coordinatrice cherche à comprendre ce qui vous stresse, ce qui vous importe, ce que vous ne voulez surtout pas. Pas seulement votre date et votre budget.",
      },
    ],
  },

  {
    slug: "budget-mariage-france-2026",
    titre: "Budget mariage moyen en France en 2026 : les vrais chiffres",
    metaDescription:
      "Combien coûte un mariage en France en 2026 ? Les vrais chiffres poste par poste, ce qu'on sous-estime toujours, et comment tenir son budget.",
    categorie: "Budget",
    datePublication: "2026-05-11",
    tempsLecture: "7 min",
    extrait:
      "Le budget moyen d'un mariage en France tourne autour de 12 000 à 20 000 €. Voici comment c'est réparti — et où les couples se font systématiquement surprendre.",
    sections: [
      {
        type: "p",
        text: "La première question que posent presque tous les futurs mariés : combien ça va coûter ? La réponse honnête : ça dépend. Mais les ordres de grandeur ci-dessous sont ancrés dans la réalité du marché français en 2026, pas dans des moyennes lissées qui ne correspondent à aucun couple réel.",
      },
      {
        type: "h2",
        text: "Le budget global : les fourchettes réelles",
      },
      {
        type: "p",
        text: "Pour un mariage de 80 invités en France en 2026, comptez entre 12 000 et 25 000 €. Pour 50 invités, vous descendez à 8 000 – 15 000 €. Pour 150 invités et un lieu premium, vous dépassez les 30 000 €.",
      },
      {
        type: "p",
        text: "Ces chiffres incluent tous les postes — lieu, traiteur, tenue, photo, musique, fleurs, papeterie — mais excluent la lune de miel et la bague de fiançailles.",
      },
      {
        type: "h2",
        text: "La répartition typique par poste",
      },
      {
        type: "ul",
        items: [
          "Traiteur (repas + boissons + service) : 35 à 45 % du budget total",
          "Lieu de réception : 10 à 20 %",
          "Photographie (et vidéo éventuelle) : 8 à 12 %",
          "Tenues (robe, costume, accessoires) : 8 à 15 %",
          "Musique (DJ ou groupe) : 5 à 8 %",
          "Fleurs et décoration : 5 à 10 %",
          "Papeterie, cadeaux invités, misc : 3 à 5 %",
          "Coordination / wedding planning : 2 à 5 %",
        ],
      },
      {
        type: "callout",
        text: "Le traiteur représente à lui seul près de la moitié du budget. C'est le poste sur lequel il y a le plus à gagner — et le plus à perdre. Chaque ligne de son devis mérite d'être lue.",
      },
      {
        type: "h2",
        text: "Les postes systématiquement sous-estimés",
      },
      {
        type: "h3",
        text: "Les frais annexes du lieu",
      },
      {
        type: "p",
        text: "Le prix de location affiché ne comprend souvent pas : le ménage final, l'électricité, les frais de gardiennage, la location de mobilier si non inclus, et parfois une \"taxe de réception\" locale. Lisez le contrat ligne par ligne et demandez le coût total toutes charges comprises.",
      },
      {
        type: "h3",
        text: "Le personnel de service du traiteur",
      },
      {
        type: "p",
        text: "Beaucoup de devis traiteur proposent un prix par repas sans détailler les heures de service. Si votre mariage dure 12 heures et que le traiteur facture les heures supplémentaires, la surprise peut être salée. Demandez le nombre de serveurs prévus, leurs horaires, et le coût des heures au-delà du forfait.",
      },
      {
        type: "h3",
        text: "Les extras photo et vidéo",
      },
      {
        type: "p",
        text: "Le drone, les photos des préparatifs du matin, le film montage, le deuxième photographe — chacun de ces éléments est souvent vendu en supplément du forfait de base. Chiffrez le package complet dès le départ.",
      },
      {
        type: "h3",
        text: "Les transports",
      },
      {
        type: "p",
        text: "Navettes entre l'hôtel et le lieu, voiture pour les mariés, covoiturage organisé pour les invités sans voiture — ça s'additionne vite et c'est rarement prévu en amont.",
      },
      {
        type: "h2",
        text: "Où négocier, où ne pas rogner",
      },
      {
        type: "p",
        text: "On peut négocier sur le traiteur (quantités, vins, heures de service), sur le lieu (tarif hors-saison ou en semaine), sur la papeterie (digital vs imprimé).",
      },
      {
        type: "p",
        text: "On ne rogne pas sur : le photographe (les photos durent toute une vie), la coordinatrice Jour J (le stress que vous évitez vaut largement son coût), et la qualité du traiteur (c'est ce dont vos invités vont parler pendant des années).",
      },
      {
        type: "h2",
        text: "Comment tenir son budget",
      },
      {
        type: "ol",
        items: [
          "Fixer un budget plafond avant de visiter le moindre lieu ou prestataire",
          "Répartir ce budget par poste dès le départ — et respecter les enveloppes",
          "Prévoir 10 % de marge pour les imprévus (ça arrive toujours)",
          "Faire relire les devis traiteur avant de signer — c'est là que les économies sont les plus grandes",
          "Ne pas comparer des prestations incomparables : deux devis traiteur à 80 €/pers peuvent inclure des services très différents",
        ],
      },
      {
        type: "callout",
        text: "Une coordinatrice qui connaît bien le marché local peut vous faire économiser plus que le coût de sa prestation, rien qu'en relisant vos devis traiteur. C'est le retour sur investissement le plus rapide de votre budget mariage.",
      },
    ],
  },

  {
    slug: "coordination-jour-j-a-quoi-ca-sert",
    titre: "Coordination Jour J : à quoi ça sert vraiment ?",
    metaDescription:
      "La coordination Jour J, c'est quoi concrètement ? Ce que fait la coordinatrice avant votre arrivée, les imprévus qu'elle gère, et pourquoi déléguer ça à un proche est une mauvaise idée.",
    categorie: "Organisation",
    datePublication: "2026-05-11",
    tempsLecture: "6 min",
    extrait:
      "La plupart des couples ne savent pas ce qu'une coordinatrice fait vraiment le Jour J. Voici la réalité, depuis les coulisses.",
    sections: [
      {
        type: "p",
        text: "La coordination Jour J est la prestation la plus mal comprise du wedding planning. Beaucoup de couples pensent que c'est un luxe — quelqu'un pour \"superviser\" que tout se passe bien. C'est en réalité un rôle opérationnel intense, qui commence bien avant votre arrivée sur le lieu.",
      },
      {
        type: "h2",
        text: "Ce qui se passe avant que vous arriviez",
      },
      {
        type: "p",
        text: "Le Jour J, la coordinatrice est sur place une à deux heures avant les mariés. Voici ce qu'elle fait pendant ce temps :",
      },
      {
        type: "ul",
        items: [
          "Vérifier que le lieu est ouvert et accessible pour tous les prestataires",
          "Accueillir et briefer le traiteur sur le déroulé et les horaires",
          "S'assurer que la décoration est installée selon le plan validé",
          "Vérifier les tables : couverts, noms, placement, objets de décoration",
          "Contrôler la sonorisation avec le DJ",
          "Identifier les issues de secours, l'emplacement des toilettes, le vestiaire",
          "Préparer un espace pour les imprévus (trousse de secours, affaires des mariés)",
        ],
      },
      {
        type: "p",
        text: "Ce travail préparatoire est invisible pour vous — et c'est exactement l'objectif.",
      },
      {
        type: "h2",
        text: "La gestion de la logistique invisible",
      },
      {
        type: "p",
        text: "Pendant votre journée, des dizaines de micro-décisions se prennent en coulisses. Le photographe demande où faire les portraits de famille. Le traiteur veut savoir si on peut commencer le service. Un invité est allergique et l'information n'a pas été transmise. Le DJ n'a pas reçu la liste des morceaux.",
      },
      {
        type: "p",
        text: "Sans coordinatrice, ces questions remontent aux mariés. Avec une coordinatrice, elles n'arrivent jamais jusqu'à vous.",
      },
      {
        type: "h2",
        text: "Les imprévus les plus fréquents — et comment ils se gèrent",
      },
      {
        type: "ul",
        items: [
          "Un prestataire arrive en retard : la coordinatrice le rappelle, réorganise le planning si besoin, gère l'attente des invités",
          "Un convive fait un malaise : elle connaît l'emplacement du défibrillateur et les accès pour les secours",
          "La pluie s'invite au cocktail prévu dehors : le plan B est activé sans que les mariés aient à décider quoi que ce soit",
          "Un enfant renverse du vin sur la robe : kit d'urgence sorti immédiatement",
          "Le traiteur n'a pas prévu de menu végétarien pour un convive : elle négocie directement avec la cuisine",
        ],
      },
      {
        type: "callout",
        text: "En 5 ans de terrain aux côtés des équipes traiteur, j'en ai vu des imprévus. Ils ne font jamais les mêmes manchettes deux fois. Ce qui change selon l'expérience, c'est la vitesse à laquelle on les règle — et si les mariés les voient ou non.",
      },
      {
        type: "h2",
        text: "Pourquoi demander à un proche de gérer, c'est une mauvaise idée",
      },
      {
        type: "p",
        text: "C'est la solution la plus courante et la plus sous-estimée en termes de coût réel. Votre témoin, aussi organisé soit-il, va passer sa journée à répondre à des questions logistiques au lieu de profiter. Il n'a pas les réflexes pour gérer un traiteur, il ne connaît pas les prestataires, et il n'a pas de kit d'urgence.",
      },
      {
        type: "p",
        text: "Résultat : les problèmes remontent quand même jusqu'à vous, mais en filtrant d'abord par quelqu'un de stressé. C'est souvent pire que sans rien.",
      },
      {
        type: "h2",
        text: "Ce que la coordination Jour J n'est PAS",
      },
      {
        type: "ul",
        items: [
          "Ce n'est pas trouver vos prestataires à votre place (c'est la prestation de planning intégral)",
          "Ce n'est pas refaire votre rétroplanning from scratch (on prend le vôtre, on le vérifie, on l'optimise)",
          "Ce n'est pas être présente aux essayages ou aux visites de lieu (sauf si inclus dans l'offre)",
          "Ce n'est pas de la décoration — la coordinatrice ne crée pas l'ambiance, elle s'assure que ce que vous avez choisi est exécuté correctement",
        ],
      },
      {
        type: "callout",
        text: "La prestation Coordination Jour J de Nora Events inclut 2 réunions de préparation (J-30 et J-14), la reprise complète de votre rétroplanning, et une présence de vos préparatifs jusqu'à la fin du dîner. Devis gratuit sous 48h.",
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

  {
    slug: "domaines-chateaux-mariage-normandie",
    titre: "Mariage en Normandie : les plus beaux domaines et châteaux",
    metaDescription:
      "Domaines, châteaux et lieux de mariage en Normandie : ce qu'il faut vérifier avant de réserver, les zones à explorer, et les questions à poser au gestionnaire du lieu.",
    categorie: "Normandie",
    datePublication: "2026-05-11",
    tempsLecture: "6 min",
    extrait:
      "La Normandie compte parmi les régions françaises les plus riches en lieux de mariage d'exception. Voici comment chercher, quoi vérifier, et les erreurs à éviter avant de signer.",
    sections: [
      {
        type: "p",
        text: "La Normandie est une des régions les plus recherchées pour les mariages en France — et pour de bonnes raisons. Campagne vallonnée, architecture en pierre, domaines agricoles reconvertis, châteaux du XVIIIe, maisons de maître avec jardins à la française. Le choix est large. Le piège aussi.",
      },
      {
        type: "h2",
        text: "Les types de lieux disponibles en Normandie",
      },
      {
        type: "h3",
        text: "Les châteaux et manoirs",
      },
      {
        type: "p",
        text: "Les plus beaux sont concentrés dans le Calvados, l'Eure et la Seine-Maritime. Ils offrent un cadre élégant, souvent des chambres d'hôtes pour accueillir les proches sur place, et des jardins pour le cocktail. Attention : beaucoup sont classés ou inscrits aux monuments historiques, ce qui impose des contraintes sur la décoration, la sono et les feux d'artifice.",
      },
      {
        type: "h3",
        text: "Les domaines agricoles",
      },
      {
        type: "p",
        text: "Granges normandes rénovées, corps de ferme avec grange en pierre, vergers — ces lieux offrent une authenticité et une capacité d'accueil souvent supérieure aux châteaux. Le style est champêtre-élégant. La gestion logistique est plus complexe car le traiteur arrive souvent dans une cuisine de fortune.",
      },
      {
        type: "h3",
        text: "Les salles de réception dédiées",
      },
      {
        type: "p",
        text: "Plus fonctionnelles, moins photographiques, mais souvent mieux équipées. Cuisine professionnelle pour le traiteur, sonorisation intégrée, parking. Idéal si vous privilégiez la logistique à l'esthétique brute.",
      },
      {
        type: "h3",
        text: "Les hôtels et restaurants avec espaces événementiels",
      },
      {
        type: "p",
        text: "Le Havre, Rouen, Caen, Honfleur et Deauville proposent des établissements hôteliers avec salles de réception intégrées. Solution pratique pour les mariages avec beaucoup d'invités venant de loin, qui ont besoin de dormir sur place.",
      },
      {
        type: "h2",
        text: "Les zones géographiques à explorer",
      },
      {
        type: "ul",
        items: [
          "Pays de Caux (Seine-Maritime) : clos-masures, grandes fermes normandes, proxixité Le Havre et Rouen",
          "Pays d'Auge (Calvados) : colombages, vergers, pommiers — quintessence de la Normandie. Lisieux, Deauville, Honfleur",
          "Vallée de l'Eure : châteaux et manoirs, accessible depuis Paris en 1h30",
          "Plaine de Caen : lieux plus modernes, bon réseau de prestataires, accès facile depuis Paris",
          "Côte normande : Étretat, Fécamp, Étretat — lieux spectaculaires mais logistique complexe (vent, météo, accès)",
        ],
      },
      {
        type: "h2",
        text: "Ce qu'il faut vérifier avant de signer",
      },
      {
        type: "p",
        text: "La visite d'un lieu est souvent émotionnelle — et c'est normal. Mais les questions pratiques doivent être posées avant la signature, pas après.",
      },
      {
        type: "ul",
        items: [
          "Capacité réelle en configuration repas assis (pas seulement la capacité cocktail debout)",
          "Cuisine disponible pour le traiteur ou obligation d'utiliser un traiteur agréé",
          "Contraintes sonores : heure limite, décibels autorisés, voisinage",
          "Possibilité d'hébergement sur place ou à proximité immédiate",
          "Accès PMR (personnes à mobilité réduite)",
          "Parkings : combien de places, éclairés, sécurisés ?",
          "Présence d'un responsable du lieu le Jour J ou remise des clés sans suivi ?",
          "Conditions d'annulation et de report",
        ],
      },
      {
        type: "h2",
        text: "La question du traiteur libre ou imposé",
      },
      {
        type: "p",
        text: "Certains lieux imposent leur traiteur exclusif ou une liste de traiteurs agréés. C'est souvent présenté comme un service — c'est aussi une contrainte sur votre liberté de choix et votre budget. Si le lieu impose un traiteur, comparez son devis à ce que vous obtiendriez en traiteur libre. L'écart peut être significatif.",
      },
      {
        type: "callout",
        text: "Je connais les lieux de réception normands et j'accompagne la visite dans le cadre de la prestation L'Essentiel. Avant de réserver un lieu, posons ensemble les bonnes questions — ça vous évitera des surprises à J-15.",
      },
    ],
  },
];
