import type { SeoPageData } from "../types";

const D = "2026-09-26";

export const COMMERCIAL_PAGES: SeoPageData[] = [
  // ── Prix IPTV ──────────────────────────────────────────────────
  {
    slug: "/prix-iptv",
    group: "commercial",
    navLabel: "Prix IPTV",
    cardText: "Combien coûte un abonnement IPTV en 2026 ?",
    title: "Prix IPTV 2026 : combien coûte un abonnement IPTV ?",
    description: "Prix d'un abonnement IPTV en 2026 : tarifs 1, 3, 6 et 12 mois, coût par écran, prix des lecteurs payants et pièges à éviter. Dès 9 € le mois, essai gratuit 24h.",
    keywords: ["prix iptv", "iptv prix", "iptv pas cher", "abonnement iptv pas cher", "iptv 1 mois", "iptv 12 mois", "abonnement iptv 12 mois smart tv", "iptv 12 mois - cdiscount", "iptv meilleur rapport qualité prix", "iptv promo", "buy iptv", "iptv abonne", "tivimate premium prix", "ibo player prix"],
    badge: "Tarifs · Prix IPTV",
    h1: "Prix IPTV 2026 : combien coûte vraiment un abonnement ?",
    intro: "Le **prix d'un abonnement IPTV** en France va d'environ 4 à 15 € par mois selon la durée choisie et le nombre d'écrans. Chez Stream Bleu, il coûte **9 € pour 1 mois**, **29 € pour 3 mois**, **39 € pour 6 mois** et **49 € pour 12 mois**, soit environ 4 € par mois sur un an. À ce prix s'ajoute parfois celui du lecteur (certaines applications Smart TV sont payantes) et, si besoin, d'un boîtier.",
    tldr: [
      "Stream Bleu : 9 € / 1 mois, 29 € / 3 mois, 39 € / 6 mois, 49 € / 12 mois (1 écran).",
      "Plus la durée est longue, plus le prix mensuel baisse : 12 mois ≈ 4,08 €/mois.",
      "Testez 24h gratuitement avant de payer, et fuyez les offres « à vie ».",
    ],
    image: { src: "/abonnement-iptv-france-3.webp", alt: "Comparatif des prix d'abonnement IPTV en France" },
    sections: [
      {
        id: "grille",
        h2: "Grille des prix IPTV Stream Bleu",
        blocks: [
          {
            type: "table",
            head: ["Durée", "1 écran", "Prix par mois", "2 écrans", "3 écrans"],
            rows: [
              ["[1 mois](/tarifs/1-mois)", "9 €", "9,00 €", "18 €", "27 €"],
              ["[3 mois](/tarifs/3-mois)", "29 €", "9,67 €", "50 €", "75 €"],
              ["[6 mois](/tarifs/6-mois)", "39 €", "6,50 €", "69 €", "105 €"],
              ["[12 mois](/tarifs/12-mois)", "49 €", "4,08 €", "89 €", "135 €"],
            ],
            caption: "Tarifs TTC en vigueur ; jusqu'à 10 écrans disponibles sur la page Tarifs.",
          },
          { type: "p", text: "Tous les forfaits donnent accès au même catalogue et aux mêmes fonctions ; seuls la durée et le nombre d'écrans simultanés changent. Détail et commande sur la page [tarifs](/tarifs)." },
        ],
      },
      {
        id: "cout-total",
        h2: "Le coût total : abonnement, lecteur et boîtier",
        blocks: [
          {
            type: "table",
            head: ["Poste", "Coût", "Obligatoire ?"],
            rows: [
              ["Abonnement IPTV", "4 à 9 €/mois selon durée", "Oui"],
              ["Lecteur gratuit (IPTV Smarters, SS IPTV, VLC)", "0 €", "Non"],
              ["Lecteur payant ([IBO Player](/ibo-player), [Smart IPTV](/smart-iptv), [TiviMate Premium](/tivimate))", "Quelques euros par an ou une fois", "Selon votre TV"],
              ["Clé HDMI / [boîtier IPTV](/boitier-iptv)", "30 à 170 €", "Seulement si la TV n'est pas compatible"],
            ],
          },
          { type: "callout", title: "💡 Bon à savoir", text: "Avec le forfait 12 mois, l'activation IBO Player est offerte : pas de coût de lecteur à prévoir sur Samsung ou LG." },
        ],
      },
      {
        id: "pas-cher",
        h2: "IPTV pas cher : où est la limite ?",
        blocks: [
          { type: "p", text: "Un prix bas n'est pas un problème en soi, mais certains signaux doivent alerter : offres « à vie », paiement uniquement en cryptomonnaie ou carte cadeau, absence d'essai ou de contact identifiable. Notre article [IPTV à vie](/blog/iptv-a-vie) explique pourquoi ces offres finissent mal, et [IPTV pas cher](/blog/iptv-pas-cher-france) comment trouver un bon prix sans mauvaise surprise." },
          { type: "p", text: "Les « IPTV 12 mois » vendus sur des marketplaces généralistes sont souvent des codes revendus sans support : en cas de panne, personne ne répond. Préférez un fournisseur qui propose un essai, un support et une [politique de remboursement](/politique-remboursement) claire." },
        ],
      },
      {
        id: "choisir",
        h2: "Quelle durée choisir ?",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Essai gratuit 24h", text: "Pour vérifier la compatibilité avec votre TV et votre connexion.", href: "/essai-gratuit" },
              { title: "1 mois – 9 €", text: "Pour un événement ou tester en conditions réelles.", href: "/tarifs/1-mois" },
              { title: "12 mois – 49 €", text: "Le meilleur prix mensuel, lecteur IBO offert.", href: "/tarifs/12-mois" },
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Combien coûte un abonnement IPTV en France ?", a: "Entre 4 et 15 € par mois en moyenne selon la durée et le nombre d'écrans. Chez Stream Bleu : 9 € pour 1 mois, 29 € pour 3 mois, 39 € pour 6 mois et 49 € pour 12 mois." },
      { q: "Quel est l'abonnement IPTV le moins cher par mois ?", a: "Le forfait 12 mois, à 49 €, soit environ 4,08 € par mois pour un écran." },
      { q: "Le prix inclut-il l'application IPTV ?", a: "L'abonnement donne accès aux chaînes. Les lecteurs gratuits (IPTV Smarters, SS IPTV) ne coûtent rien ; certains lecteurs Smart TV sont payants, mais l'activation IBO Player est offerte avec le forfait 12 mois." },
      { q: "Combien coûte un écran supplémentaire ?", a: "Par exemple, le forfait 12 mois passe de 49 € (1 écran) à 89 € (2 écrans) et 135 € (3 écrans). Tous les tarifs jusqu'à 10 écrans sont sur la page Tarifs." },
      { q: "Peut-on être remboursé ?", a: "Les conditions sont détaillées dans notre politique de remboursement. Le plus simple reste de tester 24h gratuitement avant de commander." },
    ],
    related: ["/tarifs", "/abonnement-iptv", "/comparatif-iptv", "/blog/iptv-pas-cher-france", "/blog/iptv-a-vie", "/essai-gratuit", "/iptv-premium"],
    cta: { title: "Abonnement IPTV dès 9 € — testez gratuitement 24h", text: "Sans engagement · Activation rapide · Support en français 7j/7" },
    schema: "WebPage",
    datePublished: D,
    dateModified: D,
  },

  // ── Comparatif IPTV ────────────────────────────────────────────
  {
    slug: "/comparatif-iptv",
    group: "commercial",
    navLabel: "Comparatif IPTV",
    cardText: "Comment comparer et choisir un fournisseur IPTV fiable.",
    title: "Comparatif IPTV 2026 : 8 critères pour bien choisir",
    description: "Comparatif IPTV 2026 : 8 critères pour comparer les services IPTV (stabilité, essai, support, appareils, prix), méthode de test et signaux d'alerte.",
    keywords: ["comparatif iptv", "comparatif abonnement iptv", "comparer iptv", "iptv fiable", "iptv avis", "avis iptv", "trustpilot iptv", "iptv trustpilot", "iptv streaming", "iptv com"],
    badge: "Comparatif · 2026",
    h1: "Comparatif IPTV 2026 : 8 critères pour comparer les services IPTV",
    intro: "Pour comparer des **fournisseurs IPTV**, le nombre de chaînes annoncé compte peu. Ce qui fait la différence au quotidien : la **stabilité aux heures de pointe**, la possibilité de **tester gratuitement**, un **support joignable en français**, la compatibilité avec vos appareils et des conditions de paiement et de remboursement claires. Voici notre grille de comparaison en 8 critères, applicable à n'importe quel service IPTV.",
    tldr: [
      "Testez toujours pendant un match ou un soir de semaine : c'est là que les serveurs faibles décrochent.",
      "Un fournisseur sérieux propose un essai, un support identifiable et une politique de remboursement.",
      "Fuyez les offres « à vie », les prix irréalistes et les paiements sans protection.",
    ],
    sections: [
      {
        id: "criteres",
        h2: "Les 8 critères pour comparer les services IPTV",
        blocks: [
          {
            type: "table",
            head: ["Critère", "Ce qu'il faut vérifier", "Stream Bleu"],
            rows: [
              ["Stabilité", "Pas de coupure en soirée ou pendant un grand match", "Serveurs optimisés pour la France ([IPTV stable](/blog/iptv-stable-france))"],
              ["Essai", "Test gratuit sans carte bancaire", "[Essai 24h](/essai-gratuit)"],
              ["Support", "Contact en français, réponse rapide", "WhatsApp et e-mail, 7j/7"],
              ["Appareils", "Smart TV, Fire TV, mobile, PC, MAG", "Tous ([appareils](/appareils-iptv))"],
              ["Connexions", "Choix du nombre d'écrans", "1 à 10 écrans"],
              ["Formats", "Xtream Codes, M3U, portail MAG", "Les trois"],
              ["Prix", "Tarifs affichés, sans frais cachés", "Dès 9 € ([prix IPTV](/prix-iptv))"],
              ["Conditions", "CGU, remboursement, mentions claires", "[Remboursement](/politique-remboursement)"],
            ],
          },
        ],
      },
      {
        id: "methode",
        h2: "Notre méthode de test",
        blocks: [
          {
            type: "ol",
            items: [
              "Installer le service sur trois appareils : Fire TV Stick, Smart TV Samsung ou LG, smartphone.",
              "Mesurer le temps de zapping et la stabilité un soir de semaine entre 20h et 23h.",
              "Contacter le support avec une question technique et chronométrer la réponse.",
              "Lire les conditions : remboursement, résiliation, protection des données.",
            ],
          },
          { type: "p", text: "Ces étapes prennent une soirée et vous évitent la plupart des mauvaises surprises. Pour notre propre classement, voir [meilleur IPTV France](/meilleur-iptv-france) et les [avis clients](/avis)." },
        ],
      },
      {
        id: "alerte",
        h2: "Les signaux d'alerte",
        blocks: [
          {
            type: "ul",
            items: [
              "**Offres « à vie »** : modèle économique impossible, voir [IPTV à vie](/blog/iptv-a-vie).",
              "**Aucun essai possible** : vous achetez à l'aveugle.",
              "**Paiement uniquement en crypto ou carte cadeau** : aucune protection en cas de litige.",
              "**Avis uniquement sur le site du vendeur** : croisez avec des plateformes indépendantes comme Trustpilot ou Google.",
              "**Promesses irréalistes** : « 0 coupure garantie à vie », « toutes les chaînes du monde »…",
            ],
          },
        ],
      },
      {
        id: "noms",
        h2: "Et les services que l'on voit passer (Atlas Pro, King365, etc.) ?",
        blocks: [
          { type: "p", text: "Des dizaines de noms de services IPTV circulent en France et en Europe francophone. **Nous ne les avons pas testés, ne sommes affiliés à aucun d'eux et ne publions aucun avis à leur sujet.** La grille ci-dessus s'applique à n'importe lequel : demandez un essai, testez aux heures de pointe, vérifiez le support et lisez les conditions avant de payer." },
          {
            type: "cards",
            items: [
              { title: "Alternative à Atlas Pro", text: "Atlas Pro ONTV a expiré ou ne se lance plus ? Quelle application utiliser ensuite.", href: "/alternative-atlas-pro" },
              { title: "Alternative à King365", text: "Garder sa box King365 ou passer à une clé Fire TV.", href: "/alternative-king365" },
              { title: "Alternative à Pure IPTV", text: "Légalité, confusion avec Xsarius Pure et migration.", href: "/alternative-pure-iptv" },
            ],
          },
          { type: "p", text: "Iron IPTV, Hot IPTV, Pandar TV, Mega OTT, Neo TV Pro et les autres noms les plus recherchés sont regroupés, avec la méthode pour changer de service, sur notre page [alternatives IPTV](/alternatives-iptv)." },
          { type: "p", text: "Ne confondez pas non plus les **services** (qui fournissent les chaînes) et les **applications** (qui les lisent) : IPTV Smarters, TiviMate, Flix IPTV ou IBO Player sont des lecteurs, pas des fournisseurs — voir notre [comparatif des applications IPTV](/applications-iptv) et notre page [fournisseur IPTV](/fournisseur-iptv). Et une application au nom proche d'un service ne veut pas dire qu'ils sont liés : par exemple, [IPTV Smarters Pro](/iptv-smarters-pro) et [Smart IPTV](/smart-iptv) sont deux applications distinctes, malgré la ressemblance de leurs noms." },
        ],
      },
      {
        id: "legalite",
        h2: "La question de la légalité",
        blocks: [
          { type: "p", text: "La technologie IPTV est légale ; la légalité d'un service dépend des droits de diffusion qu'il détient pour les contenus proposés. L'[Arcom](https://www.arcom.fr) peut faire bloquer les services qui diffusent sans droits. Notre analyse complète : [l'IPTV est-il légal en France ?](/blog/iptv-legal-france) et notre page [avertissement](/avertissement)." },
        ],
      },
    ],
    faq: [
      { q: "Comment choisir un fournisseur IPTV fiable ?", a: "Vérifiez la stabilité aux heures de pointe pendant un essai gratuit, la réactivité du support en français, la compatibilité avec vos appareils, et la clarté des conditions de paiement et de remboursement." },
      { q: "Quel est le meilleur service IPTV en France ?", a: "Le meilleur service est celui qui reste stable chez vous, aux heures où vous regardez. Testez plusieurs offres avec un essai gratuit et appliquez notre grille en 8 critères. Notre sélection est détaillée sur la page Meilleur IPTV France." },
      { q: "Les avis Trustpilot sur l'IPTV sont-ils fiables ?", a: "Ils sont utiles s'ils sont nombreux, récents et détaillés. Croisez plusieurs sources (Trustpilot, Google, forums) et méfiez-vous des avis tous publiés le même jour." },
      { q: "IPTV Smarters ou TiviMate sont-ils des fournisseurs IPTV ?", a: "Non, ce sont des applications de lecture. Elles ne fournissent aucune chaîne : il faut un abonnement auprès d'un fournisseur IPTV." },
      { q: "Qu'est-ce qu'une « agence IPTV » ?", a: "Le terme désigne généralement un revendeur d'abonnements IPTV. Appliquez les mêmes critères qu'à un fournisseur : essai, support identifiable, conditions claires. Le détail des rôles est sur notre page [fournisseur IPTV](/fournisseur-iptv)." },
      { q: "Atlas Pro est-il un bon service IPTV ?", a: "Nous ne connaissons pas Atlas Pro (ou Atlas Pro OnTv) de l'intérieur, n'y sommes pas affiliés et ne pouvons donc pas le recommander ni le déconseiller. Comme pour tout service, appliquez notre grille en 8 critères — essai gratuit, stabilité testée aux heures de pointe, support joignable, conditions de remboursement claires — avant de payer. Pour changer de service, voir notre guide [alternative à Atlas Pro](/alternative-atlas-pro)." },
      { q: "King365 (TV) est-il fiable ?", a: "Nous ne sommes pas affiliés à King365 et n'avons publié aucun test le concernant. Demandez systématiquement un essai avant de payer, et vérifiez la stabilité un soir de match plutôt que de vous fier uniquement aux avis affichés sur le site du vendeur. Voir aussi [alternative à King365](/alternative-king365)." },
    ],
    related: ["/meilleur-iptv-france", "/alternatives-iptv", "/fournisseur-iptv", "/prix-iptv", "/avis", "/blog/iptv-france-avis", "/blog/iptv-stable-france", "/blog/iptv-a-vie", "/applications-iptv", "/essai-gratuit"],
    cta: { title: "Comparez par vous-même : 24h d'essai gratuit", text: "Testez Stream Bleu aux heures de pointe, sur vos appareils, sans engagement." },
    schema: "WebPage",
    datePublished: D,
    dateModified: D,
  },

  // ── Fournisseur IPTV ───────────────────────────────────────────
  {
    slug: "/fournisseur-iptv",
    group: "commercial",
    navLabel: "Fournisseur IPTV",
    cardText: "Fournisseur, revendeur ou « agence » IPTV : qui fait quoi, et comment choisir.",
    title: "Fournisseur IPTV en France : comment choisir en 2026",
    description: "Fournisseur IPTV, revendeur ou agence : qui fait quoi, ce que doit inclure un bon service IPTV, et l'offre Stream Bleu dès 9 € avec essai gratuit 24h.",
    keywords: ["fournisseur iptv", "provider iptv", "service iptv", "meilleur service iptv", "meilleur site iptv", "agence iptv", "agences iptv", "fournisseur iptv france"],
    badge: "Offre · Fournisseur IPTV",
    h1: "Fournisseur IPTV en France : qui fait quoi, et comment bien choisir",
    intro: "Un **fournisseur IPTV** est le service qui exploite les serveurs de diffusion et vous donne accès aux chaînes, films et séries via vos identifiants. Il ne faut pas le confondre avec l'application qui lit ces flux, ni avec les revendeurs (parfois appelés « agences IPTV ») qui revendent les abonnements d'un fournisseur sous leur propre nom. Savoir à qui vous payez change tout le jour où quelque chose ne marche plus : c'est le fournisseur, ou un revendeur bien relié à lui, qui peut réellement corriger une panne.",
    tldr: [
      "Fournisseur = serveurs et chaînes. Application = lecture. Revendeur ou « agence » = intermédiaire commercial.",
      "Un bon fournisseur IPTV propose un essai, un support joignable, des formats standards et des prix publics.",
      "Stream Bleu : dès 9 € par mois, 1 à 10 écrans, Xtream Codes, M3U et MAG, [essai gratuit 24h](/essai-gratuit).",
    ],
    image: { src: "/abonnement-iptv-france-1.webp", alt: "Fournisseur IPTV en France : abonnement Stream Bleu sur TV, mobile et tablette" },
    sections: [
      {
        id: "roles",
        h2: "Fournisseur, revendeur, agence, application : les rôles",
        blocks: [
          {
            type: "table",
            head: ["Acteur", "Son rôle", "Exemple"],
            rows: [
              ["Fournisseur IPTV", "Exploite les serveurs, gère le catalogue, délivre les identifiants", "Stream Bleu"],
              ["Revendeur / « agence IPTV »", "Achète des crédits à un fournisseur et revend des abonnements", "Voir notre [programme revendeur](/revendeur)"],
              ["Application (lecteur)", "Affiche les flux, le guide TV et la VOD ; ne fournit aucune chaîne", "[IPTV Smarters Pro](/iptv-smarters-pro), [TiviMate](/tivimate)"],
              ["Appareil", "L'écran ou le boîtier sur lequel tourne l'application", "[Smart TV, Fire TV, mobile, PC](/appareils-iptv)"],
            ],
          },
          { type: "p", text: "Une recherche comme « meilleur site IPTV » mélange souvent ces rôles. Un site peut être celui d'un fournisseur, d'un revendeur, ou d'une application : avant de payer, vérifiez qui délivre réellement le service et qui vous répondra en cas de problème." },
        ],
      },
      {
        id: "criteres",
        h2: "Ce qu'un bon fournisseur IPTV doit proposer",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Un essai gratuit", text: "Pour vérifier la compatibilité avec votre TV et votre connexion avant tout paiement.", href: "/essai-gratuit" },
              { title: "Des formats standards", text: "Xtream Codes et M3U, pour choisir librement votre application.", href: "/blog/m3u-iptv" },
              { title: "Des prix publics", text: "Une grille claire, identique pour tous, sans « prix sur demande ».", href: "/prix-iptv" },
              { title: "Un support joignable", text: "En français, avec un vrai canal de contact et des délais de réponse raisonnables.", href: "/contact" },
              { title: "Plusieurs écrans", text: "Le choix du nombre de connexions simultanées selon votre foyer.", href: "/tarifs" },
              { title: "Des conditions écrites", text: "CGU, politique de remboursement et mentions accessibles avant l'achat.", href: "/politique-remboursement" },
            ],
          },
          { type: "p", text: "Notre [comparatif IPTV](/comparatif-iptv) détaille la méthode de test en 8 critères, et la page [meilleur IPTV France](/meilleur-iptv-france) notre sélection." },
        ],
      },
      {
        id: "offre",
        h2: "L'offre Stream Bleu, fournisseur IPTV pour la France",
        blocks: [
          {
            type: "table",
            head: ["Forfait", "1 écran", "2 écrans", "3 écrans"],
            rows: [
              ["[1 mois](/tarifs/1-mois)", "9 €", "18 €", "27 €"],
              ["[3 mois](/tarifs/3-mois)", "29 €", "50 €", "75 €"],
              ["[6 mois](/tarifs/6-mois)", "39 €", "69 €", "105 €"],
              ["[12 mois](/tarifs/12-mois)", "49 €", "89 €", "135 €"],
            ],
            caption: "Tarifs TTC. Jusqu'à 10 écrans sur la page Tarifs ; activation IBO Player offerte avec le forfait 12 mois.",
          },
          {
            type: "ul",
            items: [
              "**Formats** : identifiants Xtream Codes, lien M3U et portail pour [boîtier MAG](/iptv-mag-box-france).",
              "**Appareils** : Smart TV Samsung et LG, Android TV, Fire TV Stick, Apple TV, iPhone, Android, PC et Mac.",
              "**Support** : en français, par WhatsApp et e-mail, 7j/7.",
              "**Sans engagement** : vous choisissez la durée, résiliation à tout moment.",
            ],
          },
        ],
      },
      {
        id: "changer",
        h2: "Vous avez déjà un fournisseur ?",
        blocks: [
          { type: "p", text: "Changer de fournisseur IPTV ne demande généralement pas de nouveau matériel : on garde son application et on y ajoute de nouveaux identifiants. Si votre service actuel est l'un des noms très recherchés comme Atlas Pro ou King365, consultez nos [alternatives IPTV](/alternatives-iptv) pour la marche à suivre selon votre appareil." },
          { type: "p", text: "Vous voulez au contraire revendre des abonnements ? Notre page [revendeur IPTV](/revendeur) explique le fonctionnement par crédits." },
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce qu'un fournisseur IPTV ?", a: "C'est le service qui exploite les serveurs de diffusion et vous donne accès aux chaînes et à la VOD via des identifiants Xtream Codes, un lien M3U ou un portail MAG. L'application que vous installez sur la TV ne fait que lire ces flux." },
      { q: "Quelle différence entre un fournisseur et une agence IPTV ?", a: "Une « agence IPTV » est généralement un revendeur : elle vend les abonnements d'un fournisseur sous son propre nom. Cela peut fonctionner, mais en cas de panne c'est le fournisseur qui intervient, d'où l'intérêt de savoir qui est derrière." },
      { q: "Comment reconnaître un fournisseur IPTV fiable ?", a: "Il propose un essai gratuit, affiche des prix publics, livre des formats standards (Xtream Codes, M3U), répond en français et publie ses conditions de vente et de remboursement." },
      { q: "Combien coûte un fournisseur IPTV en France ?", a: "Comptez de 4 à 15 € par mois selon la durée et le nombre d'écrans. Chez Stream Bleu : 9 € pour 1 mois, 29 € pour 3 mois, 39 € pour 6 mois et 49 € pour 12 mois (1 écran)." },
      { q: "Le fournisseur IPTV fournit-il l'application ?", a: "Pas forcément. Stream Bleu fonctionne avec les applications standards du marché (IPTV Smarters Pro, TiviMate, IBO Player, Smart IPTV…), que vous choisissez selon votre appareil." },
    ],
    related: ["/comparatif-iptv", "/alternatives-iptv", "/meilleur-iptv-france", "/prix-iptv", "/abonnement-iptv", "/revendeur", "/applications-iptv", "/essai-gratuit"],
    cta: { title: "Testez votre futur fournisseur IPTV pendant 24h", text: "Sans engagement · Activation rapide · Support en français 7j/7" },
    schema: "WebPage",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
  },
];
