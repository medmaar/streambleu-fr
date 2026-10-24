import type { SeoPageData } from "../types";

// Purchase-intent pages (group "commercial"): each answers one buying question
// the existing pages don't (how many screens, which plan for a Smart TV, how
// the order and renewal work, buying from Belgium or Switzerland). Prices come
// from src/lib/pricing.ts through the "prices" block; figures written in the
// copy are checked against the same grid.

const D = "2026-10-24";

export const MONEY_PAGES: SeoPageData[] = [
  // ── Multi-écrans ───────────────────────────────────────────────
  {
    slug: "/abonnement-iptv-multi-ecrans",
    group: "commercial",
    navLabel: "Abonnement IPTV multi-écrans",
    cardText: "2 à 10 écrans en même temps : prix, prix par écran et débit nécessaire.",
    title: "Abonnement IPTV multi-écrans : 2 à 10 écrans, prix 2026",
    description: "Abonnement IPTV pour plusieurs écrans : grille de prix de 1 à 10 écrans, prix par écran, débit nécessaire et nombre d'écrans à choisir selon votre foyer.",
    keywords: ["abonnement iptv multi écrans", "abonnement iptv plusieurs écrans", "iptv 2 écrans", "abonnement iptv 2 écrans", "iptv multi connexion", "iptv famille", "iptv combien de connexion", "iptv connexions simultanées"],
    badge: "Offre · Multi-écrans",
    h1: "Abonnement IPTV multi-écrans : regarder sur 2 à 10 écrans en même temps",
    intro: "Un **abonnement IPTV multi-écrans** permet de regarder sur plusieurs appareils **en même temps** avec un seul compte : le match au salon, une série dans la chambre, un dessin animé sur la tablette. Chez Stream Bleu, chaque forfait existe de **1 à 10 écrans simultanés** ; sur 12 mois, il coûte **89 € pour 2 écrans** et **135 € pour 3 écrans**, contre 49 € pour un seul. Voici la grille complète, ce que coûte réellement chaque écran et comment choisir le bon nombre pour votre foyer.",
    tldr: [
      "Le nombre d'écrans = le nombre d'appareils qui peuvent lire une chaîne **au même moment**.",
      "Vous pouvez installer vos identifiants sur plus d'appareils que d'écrans prévus ; seule la lecture simultanée est limitée.",
      "Un forfait 2 écrans revient moins cher que deux abonnements séparés (sauf sur 1 mois) : 89 € au lieu de 98 € sur 12 mois.",
    ],
    image: { src: "/abonnement-iptv-france-2.webp", alt: "Abonnement IPTV multi-écrans regardé sur TV, tablette et smartphone" },
    sections: [
      {
        id: "grille",
        h2: "Grille des prix IPTV de 1 à 10 écrans",
        blocks: [
          { type: "p", text: "Tous les forfaits donnent accès au même catalogue et aux mêmes fonctions ; seuls la durée et le nombre d'écrans simultanés changent. Cliquez sur un prix pour ouvrir la page de commande du forfait correspondant." },
          { type: "prices", screens: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], perMonth: true },
        ],
      },
      {
        id: "fonctionnement",
        h2: "Comment fonctionnent les écrans simultanés",
        blocks: [
          { type: "p", text: "Vous recevez **un seul jeu d'identifiants** (Xtream Codes, lien M3U ou portail MAG). Vous l'ajoutez dans l'application IPTV de chaque appareil : TV du salon, [Fire TV Stick](/iptv-firestick-france) de la chambre, smartphone, PC. Le serveur compte combien de flux sont lus **au même instant**." },
          {
            type: "table",
            head: ["Situation", "Forfait 1 écran", "Forfait 3 écrans"],
            rows: [
              ["Identifiants installés sur la TV, le mobile et la tablette, un seul appareil regarde", "Fonctionne", "Fonctionne"],
              ["Deux personnes regardent en même temps", "Le second flux est refusé ou coupe le premier", "Fonctionne"],
              ["Trois personnes regardent en même temps", "Non", "Fonctionne"],
              ["Un quatrième appareil se lance en plus", "Non", "Refusé tant qu'un des trois n'est pas arrêté"],
            ],
            caption: "Le comportement exact au-delà de la limite dépend de l'application ; le plus fréquent est un message d'erreur ou un flux qui ne démarre pas.",
          },
          { type: "callout", title: "💡 Pensez à fermer l'application", text: "Une application laissée ouverte sur une chaîne, par exemple sur une TV en veille, peut continuer à occuper un écran. Si un membre du foyer n'arrive plus à lancer une chaîne, vérifiez d'abord qu'aucun autre appareil ne lit un flux." },
        ],
      },
      {
        id: "combien",
        h2: "Combien d'écrans choisir pour votre foyer ?",
        blocks: [
          { type: "p", text: "Comptez le nombre de personnes qui regardent **en même temps** aux heures chargées (le soir, le week-end, pendant un match), pas le nombre d'appareils de la maison." },
          {
            type: "table",
            head: ["Votre foyer", "Écrans conseillés", "12 mois", "Lien"],
            rows: [
              ["Personne seule, ou couple qui regarde ensemble", "1", "49 €", "[Commander 1 écran](/tarifs/12-mois)"],
              ["Couple aux goûts différents, ou salon + chambre", "2", "89 €", "[Commander 2 écrans](/tarifs/12-mois-2-connexions)"],
              ["Famille avec un ou deux enfants", "3", "135 €", "[Commander 3 écrans](/tarifs/12-mois-3-connexions)"],
              ["Grande famille, ados avec leur propre écran", "4 à 5", "180 à 225 €", "[Commander 4 écrans](/tarifs/12-mois-4-connexions)"],
            ],
          },
          { type: "p", text: "Au-delà de 5 écrans, les forfaits vont jusqu'à 10 écrans (450 € sur 12 mois). Les conditions d'utilisation réservent l'abonnement à **un usage personnel, au sein de votre foyer** : partager vos identifiants avec d'autres foyers ou revendre l'accès n'est pas autorisé. Pour revendre, il existe un [programme revendeur](/revendeur)." },
        ],
      },
      {
        id: "prix-ecran",
        h2: "Ce que coûte vraiment chaque écran supplémentaire",
        blocks: [
          { type: "p", text: "Sur 3, 6 et 12 mois, un forfait multi-écrans coûte moins cher que plusieurs abonnements 1 écran pris séparément. Sur 1 mois, le prix est simplement multiplié par le nombre d'écrans (9 € par écran)." },
          {
            type: "table",
            head: ["Écrans", "Forfait multi-écrans 12 mois", "Abonnements 1 écran séparés", "Économie"],
            rows: [
              ["2", "89 €", "2 × 49 € = 98 €", "9 €"],
              ["3", "135 €", "3 × 49 € = 147 €", "12 €"],
              ["4", "180 €", "4 × 49 € = 196 €", "16 €"],
              ["5", "225 €", "5 × 49 € = 245 €", "20 €"],
            ],
          },
          { type: "p", text: "Un forfait multi-écrans a aussi un avantage pratique : une seule date d'expiration et un seul renouvellement à gérer. Les étapes de commande et de renouvellement sont détaillées sur [acheter un abonnement IPTV](/acheter-abonnement-iptv)." },
        ],
      },
      {
        id: "debit",
        h2: "Quel débit pour plusieurs écrans en même temps ?",
        blocks: [
          { type: "p", text: "Chaque écran consomme son propre flux : les besoins s'additionnent. Comptez environ **10 Mbps par écran en HD** et **25 Mbps par écran en 4K**, stables." },
          {
            type: "table",
            head: ["Usage simultané", "Débit à prévoir", "Connexion adaptée"],
            rows: [
              ["2 écrans en HD", "≈ 20 Mbps", "VDSL correct ou fibre"],
              ["3 écrans en HD", "≈ 30 Mbps", "Fibre ou très bon VDSL"],
              ["2 écrans en HD + 1 en 4K", "≈ 45 Mbps", "Fibre"],
              ["4 écrans dont 2 en 4K", "≈ 70 Mbps", "Fibre"],
            ],
          },
          { type: "p", text: "Le Wi-Fi est souvent le vrai goulot d'étranglement : branchez la TV principale en Ethernet ou en CPL et gardez le Wi-Fi pour les mobiles. Notre guide [Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet) explique comment mesurer votre débit réel et quoi changer s'il est trop juste. Si vous êtes chez Orange, SFR, Bouygues ou Free, voir aussi [IPTV et box opérateur](/iptv-orange-sfr-bouygues)." },
        ],
      },
    ],
    faq: [
      { q: "Combien de connexions comprend un abonnement IPTV ?", a: "Cela dépend du forfait choisi. Chez Stream Bleu, chaque durée existe de 1 à 10 connexions (écrans) simultanées : 1 écran pour 49 € sur 12 mois, 2 écrans pour 89 €, 3 écrans pour 135 €." },
      { q: "Peut-on installer l'abonnement IPTV sur plusieurs appareils ?", a: "Oui. Vous pouvez ajouter vos identifiants sur autant d'appareils que vous voulez dans votre foyer. La limite porte sur le nombre d'appareils qui regardent en même temps, qui correspond au nombre d'écrans de votre forfait." },
      { q: "Que se passe-t-il si on dépasse le nombre d'écrans ?", a: "Le flux supplémentaire ne démarre pas ou interrompt un autre flux, selon l'application. Il suffit d'arrêter la lecture sur un autre appareil, ou de passer à un forfait avec plus d'écrans." },
      { q: "Un forfait 2 écrans est-il moins cher que deux abonnements ?", a: "Oui sur 3, 6 et 12 mois : par exemple 89 € pour 2 écrans sur 12 mois, au lieu de 98 € pour deux abonnements 1 écran. Sur 1 mois, le prix est identique (18 €)." },
      { q: "Peut-on passer de 1 à 2 écrans en cours d'abonnement ?", a: "Contactez le support avec votre nom d'utilisateur : l'équipe vous indique les possibilités pour votre compte. Le plus simple reste de choisir le bon nombre d'écrans au moment du renouvellement." },
      { q: "Peut-on partager un abonnement multi-écrans avec un autre foyer ?", a: "Non. Les conditions d'utilisation réservent l'abonnement à un usage personnel au sein de votre foyer. Pour revendre des abonnements, voir le programme revendeur." },
    ],
    related: ["/tarifs", "/prix-iptv", "/abonnement-iptv", "/acheter-abonnement-iptv", "/abonnement-iptv-smart-tv", "/blog/iptv-wifi-ou-ethernet", "/appareils-iptv", "/revendeur"],
    cta: { title: "Un abonnement pour toute la maison, dès 89 € les 12 mois en 2 écrans", text: "Paiement unique · Sans renouvellement automatique · Support en français 7j/7" },
    schema: "WebPage",
    datePublished: D,
    dateModified: D,
  },

  // ── Abonnement IPTV Smart TV ───────────────────────────────────
  {
    slug: "/abonnement-iptv-smart-tv",
    group: "commercial",
    navLabel: "Abonnement IPTV Smart TV",
    cardText: "Quel forfait pour votre Smart TV, et le coût total avec le lecteur.",
    title: "Abonnement IPTV Smart TV : quel forfait et quel coût total ?",
    description: "Abonnement IPTV pour Smart TV Samsung, LG, Android TV ou Hisense : coût total sur 12 mois avec le lecteur, forfait conseillé et points à vérifier avant achat.",
    keywords: ["abonnement iptv smart tv", "abonnement iptv 12 mois smart tv", "iptv smart tv abonnement", "abonnement iptv samsung", "abonnement iptv lg", "abonnement iptv tv"],
    badge: "Offre · Smart TV",
    h1: "Abonnement IPTV pour Smart TV : quel forfait et combien ça coûte vraiment",
    intro: "Un **abonnement IPTV pour Smart TV** se compose de deux éléments : l'abonnement lui-même (les chaînes) et l'application qui le lit sur votre téléviseur. Sur une TV Android, l'application est gratuite ; sur une Samsung ou une LG, les lecteurs les plus utilisés sont payants après leur période d'essai. C'est pourquoi le forfait **12 mois à 49 €**, avec lequel l'**activation IBO Player est offerte**, est le choix le plus économique pour la plupart des Smart TV. Voici le coût total selon votre marque, et ce qu'il faut vérifier avant de commander.",
    tldr: [
      "TV Samsung ou LG : forfait 12 mois (49 €) avec activation IBO Player offerte, pas de lecteur à payer en plus.",
      "TV Android (Sony, Philips, TCL, Xiaomi) : lecteurs gratuits, toutes les durées conviennent.",
      "TV ancienne ou sans lecteur disponible : ajoutez une clé HDMI type Fire TV Stick (environ 40 €).",
    ],
    image: { src: "/abonnement-iptv-france-4.webp", alt: "Abonnement IPTV sur Smart TV Samsung, LG et Android TV" },
    sections: [
      {
        id: "cout-total",
        h2: "Le coût total sur 12 mois selon votre Smart TV",
        blocks: [
          {
            type: "table",
            head: ["Votre TV", "Lecteur conseillé", "Coût du lecteur", "Total la 1re année (1 écran)"],
            rows: [
              ["Samsung (Tizen)", "[IBO Player](/ibo-player)", "Activation offerte avec le forfait 12 mois", "49 €"],
              ["LG (webOS)", "IBO Player ou [Smart IPTV](/smart-iptv)", "IBO offert avec 12 mois ; Smart IPTV payant (tarif de l'éditeur)", "49 € avec IBO Player"],
              ["Sony, Philips, TCL, Xiaomi (Android TV / Google TV)", "[TiviMate](/tivimate), [Smarters Player Lite](/smarters-player-lite)", "Gratuit (TiviMate Premium en option)", "49 €"],
              ["Hisense (VIDAA)", "Lecteurs du store VIDAA", "Selon l'application", "49 € + lecteur éventuel"],
              ["TV sans lecteur compatible", "Clé [Fire TV Stick](/iptv-firestick-france) + TiviMate", "≈ 40 € pour la clé, une fois", "≈ 89 €"],
            ],
            caption: "Abonnement Stream Bleu 12 mois 1 écran : 49 €. Le prix des lecteurs tiers est fixé par leurs éditeurs et peut changer.",
          },
          { type: "p", text: "Sur 1, 3 ou 6 mois, l'abonnement fonctionne exactement de la même façon sur Smart TV ; seule l'activation IBO Player offerte est réservée au forfait 12 mois. Si votre TV est sous Android TV, cette différence ne compte pas : choisissez simplement la durée qui vous convient." },
        ],
      },
      {
        id: "forfait",
        h2: "Quel forfait choisir pour une Smart TV ?",
        blocks: [
          { type: "prices", screens: [1, 2, 3], perMonth: true, caption: "Prix TTC, paiement unique sans renouvellement automatique. Cliquez sur un prix pour commander. Jusqu'à 10 écrans sur la page Tarifs." },
          {
            type: "cards",
            items: [
              { title: "Une seule TV Samsung ou LG", text: "12 mois, 1 écran : 49 €, soit environ 4,08 € par mois, lecteur IBO inclus.", href: "/tarifs/12-mois" },
              { title: "TV du salon + TV de la chambre", text: "12 mois, 2 écrans : 89 €. Les deux TV peuvent regarder en même temps.", href: "/tarifs/12-mois-2-connexions" },
              { title: "Vous voulez d'abord un mois", text: "1 mois, 1 écran : 9 €. Idéal sur une TV Android, où le lecteur est gratuit.", href: "/tarifs/1-mois" },
            ],
          },
          { type: "p", text: "Plusieurs TV dans la maison ? Le détail des forfaits de 2 à 10 écrans et du débit à prévoir est sur [abonnement IPTV multi-écrans](/abonnement-iptv-multi-ecrans)." },
        ],
      },
      {
        id: "verifier",
        h2: "4 points à vérifier sur votre TV avant de commander",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Le système de la TV", text: "Paramètres → Assistance ou À propos. Tizen (Samsung), webOS (LG), Android TV / Google TV ou VIDAA : c'est ce qui décide du lecteur. Le tableau par marque est sur [IPTV Smart TV](/iptv-smart-tv-france)." },
              { title: "La présence du lecteur dans la boutique", text: "Cherchez IBO Player ou Smart IPTV dans la boutique de la TV. Sur certains modèles anciens, ils ne sont plus proposés : prévoyez alors une clé HDMI." },
              { title: "L'adresse MAC de la TV", text: "IBO Player et Smart IPTV affichent une adresse MAC à l'ouverture. Notez-la : c'est elle qui permet d'activer le lecteur et d'y associer votre abonnement." },
              { title: "La connexion de la TV", text: "Une TV branchée en câble Ethernet est nettement plus stable qu'en Wi-Fi, surtout en 4K. Voir [Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet)." },
            ],
          },
          { type: "p", text: "Au moment de la commande, le formulaire vous demande le type d'appareil (Smart TV Samsung, LG, Philips, Fire TV Stick, box Android…) : l'équipe vous envoie ainsi, avec vos identifiants, les instructions qui correspondent à votre TV." },
        ],
      },
      {
        id: "marques",
        h2: "Samsung, LG, Android TV : ce qui change à l'achat",
        blocks: [
          { type: "h3", text: "Samsung" },
          { type: "p", text: "IPTV Smarters et Smarters Player Lite sont rarement proposés dans la boutique Samsung. IBO Player est la solution la plus simple ; Flix IPTV est une alternative. Guide complet : [IPTV sur Samsung TV](/iptv-samsung-tv-france)." },
          { type: "h3", text: "LG" },
          { type: "p", text: "Smart IPTV est léger et stable sur webOS mais ne lit que les listes M3U ; IBO Player gère aussi la VOD et les séries. Guide complet : [IPTV sur LG TV](/iptv-lg-tv-france)." },
          { type: "h3", text: "Android TV et Google TV" },
          { type: "p", text: "Sony, Philips, TCL, Xiaomi : le Play Store donne accès à TiviMate et Smarters Player Lite, gratuits, avec les identifiants Xtream Codes. Aucun surcoût, quelle que soit la durée de l'abonnement. Guide : [IPTV Android TV](/iptv-android-tv-france)." },
          { type: "h3", text: "Hisense VIDAA et autres systèmes" },
          { type: "p", text: "Le choix de lecteurs est plus restreint : voir [IPTV Hisense VIDAA](/iptv-hisense-vidaa). Sur Panasonic ou les anciennes Philips (Saphi), une clé HDMI est souvent la solution la plus fiable." },
        ],
      },
    ],
    faq: [
      { q: "Quel abonnement IPTV pour une Smart TV ?", a: "N'importe quel forfait fonctionne sur Smart TV. Sur Samsung et LG, le forfait 12 mois à 49 € est le plus économique car l'activation IBO Player est offerte. Sur TV Android, les lecteurs sont gratuits et toutes les durées conviennent." },
      { q: "Faut-il payer une application en plus de l'abonnement IPTV sur Smart TV ?", a: "Sur TV Android, non. Sur Samsung et LG, les lecteurs courants (IBO Player, Smart IPTV) sont payants après leur essai, sauf avec le forfait 12 mois de Stream Bleu, qui inclut l'activation IBO Player." },
      { q: "L'abonnement IPTV 12 mois fonctionne-t-il sur toutes les Smart TV ?", a: "Il fonctionne sur toute TV où un lecteur IPTV est disponible : Samsung, LG, Android TV, Google TV, Hisense VIDAA. Si votre TV n'en propose aucun, une clé HDMI comme le Fire TV Stick règle le problème." },
      { q: "Peut-on utiliser le même abonnement sur deux Smart TV ?", a: "Vous pouvez installer les identifiants sur les deux TV. Pour qu'elles regardent en même temps, prenez un forfait 2 écrans : 89 € sur 12 mois." },
      { q: "Comment l'abonnement est-il activé sur la TV ?", a: "Après la commande, vous recevez vos identifiants par e-mail avec les instructions pour votre type de TV. Sur Samsung ou LG, vous transmettez l'adresse MAC affichée par IBO Player ou Smart IPTV ; sur TV Android, vous saisissez directement les identifiants Xtream Codes." },
      { q: "Mon ancienne Smart TV peut-elle recevoir l'IPTV ?", a: "Si aucun lecteur IPTV n'est disponible dans sa boutique, branchez une clé Fire TV Stick ou un Chromecast avec Google TV sur un port HDMI : la TV devient compatible pour environ 40 €." },
    ],
    related: ["/iptv-smart-tv-france", "/iptv-samsung-tv-france", "/iptv-lg-tv-france", "/ibo-player", "/tarifs/12-mois", "/abonnement-iptv-multi-ecrans", "/prix-iptv", "/acheter-abonnement-iptv"],
    cta: { title: "Abonnement IPTV Smart TV : 49 € les 12 mois, IBO Player offert", text: "Paiement unique · Sans renouvellement automatique · Instructions pour votre TV" },
    schema: "WebPage",
    datePublished: D,
    dateModified: D,
  },

  // ── Acheter / renouveler ───────────────────────────────────────
  {
    slug: "/acheter-abonnement-iptv",
    group: "commercial",
    navLabel: "Acheter un abonnement IPTV",
    cardText: "Commande, paiement, activation et renouvellement, étape par étape.",
    title: "Acheter un abonnement IPTV : commande, paiement, activation",
    description: "Acheter un abonnement IPTV Stream Bleu : choix du forfait, commande, paiement, identifiants par e-mail et renouvellement. Conditions de remboursement en clair.",
    keywords: ["acheter abonnement iptv", "acheter iptv", "buy iptv", "commander abonnement iptv", "renouveler abonnement iptv", "renouvellement iptv", "paiement iptv", "souscrire abonnement iptv"],
    badge: "Commande · Mode d'emploi",
    h1: "Acheter un abonnement IPTV : de la commande au premier match",
    intro: "Pour **acheter un abonnement IPTV** chez Stream Bleu, vous choisissez un forfait (durée et nombre d'écrans), vous remplissez le formulaire de commande, l'équipe vous envoie les instructions de paiement, puis vos **identifiants arrivent par e-mail** une fois le paiement vérifié, en général en quelques minutes. Le paiement est **unique et prépayé, en euros, sans renouvellement automatique**. Cette page détaille chaque étape, ce que vous recevez, les conditions de remboursement et la façon de renouveler.",
    tldr: [
      "4 étapes : choisir le forfait, remplir le formulaire, payer selon les instructions reçues, recevoir les identifiants par e-mail.",
      "Pas d'abonnement reconductible : à l'échéance, vous renouvelez seulement si vous le souhaitez.",
      "Pas de remboursement après activation (service numérique), sauf exceptions écrites : identifiants jamais reçus, achat en double, panne de plus de 72h.",
    ],
    image: { src: "/abonnement-iptv-france-5.webp", alt: "Acheter un abonnement IPTV en ligne et recevoir ses identifiants" },
    sections: [
      {
        id: "etapes",
        h2: "Les 4 étapes pour acheter votre abonnement IPTV",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Choisissez votre forfait", text: "Durée (1, 3, 6 ou 12 mois) et nombre d'écrans simultanés (1 à 10). La grille complète est sur la page [tarifs](/tarifs) et juste en dessous." },
              { title: "Remplissez le formulaire de commande", text: "Nom, e-mail, pays, numéro WhatsApp (facultatif) et type d'appareil. Le type d'appareil permet à l'équipe de vous envoyer les bonnes instructions d'installation." },
              { title: "Payez selon les instructions reçues", text: "L'équipe vous contacte avec les instructions de paiement pour le forfait choisi. Le prix est celui de la grille officielle, en euros, sans frais ajoutés." },
              { title: "Recevez vos identifiants par e-mail", text: "Une fois le paiement vérifié, vos identifiants vous sont envoyés, en général en quelques minutes. Pensez à regarder dans les courriers indésirables." },
            ],
          },
          { type: "prices", screens: [1, 2, 3], caption: "Prix TTC en euros. Cliquez sur un prix pour ouvrir le formulaire de commande de ce forfait ; jusqu'à 10 écrans sur la page Tarifs." },
        ],
      },
      {
        id: "recu",
        h2: "Ce que vous recevez après l'achat",
        blocks: [
          {
            type: "table",
            head: ["Élément", "À quoi il sert", "Où l'utiliser"],
            rows: [
              ["URL du serveur + nom d'utilisateur + mot de passe (Xtream Codes)", "Connexion complète : chaînes, guide TV, films et séries", "[IPTV Smarters Pro](/iptv-smarters-pro), [TiviMate](/tivimate), IBO Player…"],
              ["Lien M3U", "Liste de lecture des chaînes", "[Smart IPTV](/smart-iptv), [VLC](/iptv-vlc), [lecteurs M3U](/blog/m3u-iptv)"],
              ["Portail MAG", "Connexion des boîtiers MAG et des émulateurs", "[Boîtier MAG](/iptv-mag-box-france), [STBEmu](/stbemu)"],
              ["Instructions pour votre appareil", "Installer le bon lecteur en quelques minutes", "Selon l'appareil indiqué à la commande"],
            ],
          },
          { type: "p", text: "Gardez cet e-mail : il contient tout ce qu'il faut pour réinstaller l'abonnement sur un nouvel appareil, et la date d'expiration de votre forfait. Vos identifiants sont personnels : les conditions d'utilisation interdisent de les partager en dehors de votre foyer." },
        ],
      },
      {
        id: "conditions",
        h2: "Paiement, remboursement : les conditions, en clair",
        blocks: [
          {
            type: "table",
            head: ["Question", "Réponse", "Source"],
            rows: [
              ["Paiement unique ou abonnement reconductible ?", "Paiement unique, prépayé, sans renouvellement automatique", "[Conditions d'utilisation](/conditions-utilisation), art. 5"],
              ["Devise", "Euros (EUR), prix de la grille officielle", "[Tarifs](/tarifs)"],
              ["Remboursement après activation", "Non : service numérique livré immédiatement", "[Politique de remboursement](/politique-remboursement)"],
              ["Identifiants jamais reçus (erreur de notre part)", "Remboursement complet ou nouvelle livraison", "Politique de remboursement, exceptions"],
              ["Achat du même forfait en double", "Le doublon est remboursé", "Politique de remboursement, exceptions"],
              ["Panne vérifiée de plus de 72h consécutives", "Prolongation de l'abonnement au prorata", "Politique de remboursement, exceptions"],
            ],
            caption: "Les demandes d'exception se font dans les 7 jours suivant le problème, auprès du support.",
          },
          { type: "callout", title: "Avant de payer", text: "Comme il n'y a pas de remboursement après activation, vérifiez d'abord que votre appareil est compatible : le tableau par appareil est sur [appareils IPTV](/appareils-iptv). En cas de souci après l'achat, contactez le support avant toute contestation bancaire : la politique de remboursement prévoit la résiliation du compte en cas de rétrofacturation sans contact préalable." },
        ],
      },
      {
        id: "renouveler",
        h2: "Renouveler votre abonnement IPTV",
        blocks: [
          { type: "p", text: "Comme rien n'est prélevé automatiquement, l'abonnement s'arrête simplement à sa date d'expiration si vous ne faites rien. Pour continuer sans coupure :" },
          {
            type: "ol",
            items: [
              "Repérez la date d'expiration (dans l'e-mail d'activation, et dans la plupart des applications : rubrique compte ou paramètres).",
              "Quelques jours avant, passez une nouvelle commande depuis la page [tarifs](/tarifs), en précisant dans votre message qu'il s'agit d'un **renouvellement** et en indiquant votre nom d'utilisateur actuel.",
              "L'équipe vous confirme comment le renouvellement s'applique à votre compte et si vos identifiants changent.",
            ],
          },
          { type: "p", text: "Le renouvellement est aussi le bon moment pour ajuster votre forfait : passer de 1 mois à 12 mois (9 € par mois contre environ 4,08 € par mois), ou ajouter des écrans pour la famille (voir [multi-écrans](/abonnement-iptv-multi-ecrans)). Et si un proche s'abonne grâce à vous, le [programme de parrainage](/parrainage) vous offre 6 mois une fois son paiement vérifié." },
        ],
      },
      {
        id: "precautions",
        h2: "Acheter un abonnement IPTV sans mauvaise surprise",
        blocks: [
          {
            type: "ul",
            items: [
              "**Prix affiché = prix payé** : méfiez-vous des sites dont le prix final n'apparaît qu'au dernier moment.",
              "**Conditions écrites** : un vendeur sérieux publie ses conditions de vente et de remboursement avant l'achat.",
              "**Contact identifiable** : vous devez savoir qui vous répondra si les identifiants n'arrivent pas.",
              "**Pas d'offre « à vie »** : aucun service ne peut tenir cette promesse, voir [IPTV à vie](/blog/iptv-a-vie).",
              "**Codes revendus sur des marketplaces** : souvent sans support ni recours en cas de panne, voir [prix IPTV](/prix-iptv).",
            ],
          },
          { type: "p", text: "Pour comparer plusieurs vendeurs avec une grille objective, voir notre [comparatif IPTV](/comparatif-iptv). La technologie IPTV est légale ; un service l'est s'il détient les droits des contenus qu'il diffuse : voir [IPTV légal en France ?](/blog/iptv-legal-france)." },
        ],
      },
    ],
    faq: [
      { q: "Comment acheter un abonnement IPTV ?", a: "Choisissez votre forfait sur la page Tarifs, remplissez le formulaire de commande (nom, e-mail, pays, type d'appareil), payez selon les instructions envoyées par l'équipe, puis recevez vos identifiants par e-mail une fois le paiement vérifié." },
      { q: "Combien de temps pour recevoir mes identifiants IPTV ?", a: "En général quelques minutes après la vérification du paiement. Si rien n'arrive, vérifiez vos courriers indésirables puis contactez le support : en cas d'erreur de notre part, vous avez droit à une nouvelle livraison ou à un remboursement complet." },
      { q: "L'abonnement IPTV se renouvelle-t-il automatiquement ?", a: "Non. Tous les forfaits sont prépayés, sans renouvellement automatique : rien n'est prélevé à l'échéance. Vous repassez commande seulement si vous souhaitez continuer." },
      { q: "Comment renouveler mon abonnement IPTV ?", a: "Passez une nouvelle commande quelques jours avant l'expiration en précisant qu'il s'agit d'un renouvellement et en indiquant votre nom d'utilisateur. L'équipe vous confirme comment il s'applique à votre compte." },
      { q: "Peut-on être remboursé après l'achat ?", a: "Pas après l'activation, car le service est livré immédiatement. Exceptions : identifiants jamais reçus par erreur de notre part, achat en double, ou panne vérifiée de plus de 72 heures (prolongation au prorata). La demande se fait dans les 7 jours." },
      { q: "Le prix payé est-il celui affiché ?", a: "Oui. Le prix est celui de la grille officielle, en euros : par exemple 49 € pour 12 mois sur 1 écran, 89 € pour 2 écrans. Aucun frais n'est ajouté par Stream Bleu." },
      { q: "Puis-je acheter un abonnement IPTV depuis la Belgique ou la Suisse ?", a: "Oui, le formulaire de commande accepte ces pays et les prix sont les mêmes, en euros. Voir nos pages IPTV Belgique et IPTV Suisse." },
    ],
    related: ["/tarifs", "/abonnement-iptv", "/prix-iptv", "/abonnement-iptv-multi-ecrans", "/politique-remboursement", "/comment-ca-marche", "/parrainage", "/comparatif-iptv"],
    cta: { title: "Prêt à commander ? Abonnement IPTV dès 9 €", text: "Paiement unique · Sans renouvellement automatique · Identifiants par e-mail" },
    schema: "WebPage",
    datePublished: D,
    dateModified: D,
  },

  // ── Belgique ───────────────────────────────────────────────────
  {
    slug: "/iptv-belgique",
    group: "commercial",
    areaServed: "Belgique",
    navLabel: "IPTV Belgique",
    cardText: "Abonnement IPTV en Belgique : prix en euros, réseaux Proximus, VOO, Telenet.",
    title: "IPTV Belgique : abonnement IPTV en euros, dès 9 €",
    description: "Abonnement IPTV en Belgique : mêmes prix qu'en France, en euros. Conseils réseau Proximus, VOO, Telenet, appareils compatibles et commande depuis la Belgique.",
    keywords: ["iptv belgique", "abonnement iptv belgique", "iptv belge", "iptv bruxelles", "iptv wallonie", "meilleur iptv belgique"],
    badge: "Offre · Belgique",
    h1: "IPTV en Belgique : votre abonnement Stream Bleu depuis Bruxelles ou la Wallonie",
    intro: "Un **abonnement IPTV en Belgique** chez Stream Bleu coûte exactement le même prix qu'en France, en euros : **9 € pour 1 mois, 29 € pour 3 mois, 39 € pour 6 mois et 49 € pour 12 mois**, de 1 à 10 écrans. Le formulaire de commande accepte la Belgique, le support répond en français et le guide TV est à l'heure belge, identique à celle de Paris. Cette page rassemble ce qui change vraiment quand on regarde l'IPTV en Belgique : le réseau, le matériel et la commande.",
    tldr: [
      "Prix identiques à la France, en euros, sans conversion : 49 € les 12 mois pour 1 écran.",
      "Le décodeur Proximus, VOO ou Telenet ne lit pas l'IPTV : utilisez une Smart TV, une clé Fire TV Stick ou une box Android.",
      "Câble coaxial ou VDSL : vérifiez le débit réel le soir et branchez la TV en Ethernet si possible.",
    ],
    image: { src: "/abonnement-iptv-france-6.webp", alt: "Abonnement IPTV en Belgique sur Smart TV" },
    sections: [
      {
        id: "prix",
        h2: "Prix de l'abonnement IPTV en Belgique",
        blocks: [
          { type: "p", text: "Pas de grille spéciale ni de frais de pays : la Belgique est dans la zone euro, vous payez le prix affiché." },
          { type: "prices", screens: [1, 2, 3, 4, 5], perMonth: true, caption: "Prix TTC en euros, identiques en France et en Belgique. Paiement unique, sans renouvellement automatique. Jusqu'à 10 écrans sur la page Tarifs." },
          { type: "p", text: "Le forfait 12 mois reste le plus avantageux (environ 4,08 € par mois) et inclut l'activation IBO Player, utile sur les TV Samsung et LG très répandues en Belgique. Le détail des étapes de commande et des conditions est sur [acheter un abonnement IPTV](/acheter-abonnement-iptv)." },
        ],
      },
      {
        id: "reseau",
        h2: "Réseau belge : Proximus, VOO, Telenet, Orange",
        blocks: [
          { type: "p", text: "La fibre progresse en Belgique, mais une grande partie des foyers reste raccordée par le **câble coaxial** (VOO en Wallonie, Telenet en Flandre, l'un ou l'autre selon la commune à Bruxelles) ou en **VDSL** sur le réseau cuivre de Proximus, que partagent aussi des opérateurs comme Orange Belgium ou Scarlet. Ces connexions suffisent largement pour l'IPTV, à condition de vérifier quelques points." },
          {
            type: "table",
            head: ["Type de connexion", "Point d'attention", "Conseil"],
            rows: [
              ["Câble coaxial (VOO, Telenet)", "Débit partagé dans le quartier, parfois plus faible en soirée", "Mesurez le débit vers 21h, pas l'après-midi"],
              ["VDSL (Proximus et réseau cuivre)", "Le débit baisse avec la distance au répartiteur", "Visez au moins 10 Mbps stables par écran HD"],
              ["Fibre", "Débit confortable, même pour la 4K sur plusieurs écrans", "Le Wi-Fi devient le seul point faible"],
              ["Internet mobile 4G/5G en box", "Débit variable et volume parfois limité", "Vérifiez le volume de données inclus avant de regarder en 4K"],
            ],
          },
          { type: "p", text: "Dans tous les cas, la box fournie par l'opérateur fait office de routeur Wi-Fi : une TV posée loin de la box décroche plus souvent qu'une TV branchée en câble Ethernet ou en CPL. Notre guide [Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet) explique comment tester et améliorer votre installation. Le régulateur belge des télécoms, l'IBPT, publie des outils pour comparer la couverture des opérateurs." },
        ],
      },
      {
        id: "appareils",
        h2: "Sur quel appareil regarder l'IPTV en Belgique ?",
        blocks: [
          { type: "p", text: "Les décodeurs des opérateurs belges sont fermés : on ne peut pas y installer d'application IPTV. Votre abonnement se regarde sur un autre appareil, branché sur la même TV si besoin." },
          {
            type: "cards",
            items: [
              { title: "Smart TV Samsung ou LG", text: "IBO Player ou Smart IPTV, sans matériel supplémentaire.", href: "/abonnement-iptv-smart-tv" },
              { title: "Clé Fire TV Stick", text: "La solution la plus simple sur une TV ancienne, avec TiviMate.", href: "/iptv-firestick-france" },
              { title: "Box Android, Formuler, MAG", text: "Pour un usage intensif ou un boîtier dédié.", href: "/boitier-iptv" },
              { title: "Smartphone, tablette, PC", text: "IPTV Smarters Pro ou VLC, pour regarder partout dans la maison.", href: "/appareils-iptv" },
            ],
          },
          { type: "p", text: "Vous gardez votre abonnement internet et, si vous le souhaitez, votre offre TV d'opérateur : l'IPTV utilise simplement votre connexion. Plusieurs TV dans la maison ? Voir [abonnement IPTV multi-écrans](/abonnement-iptv-multi-ecrans)." },
        ],
      },
      {
        id: "chaines",
        h2: "Chaînes, guide TV et heure belge",
        blocks: [
          { type: "p", text: "Le catalogue est le même pour tous les clients. La [liste des chaînes](/liste-chaines) comporte une section Belgique en plus des chaînes françaises : vérifiez-y les chaînes que vous regardez au quotidien avant de choisir votre forfait. La Belgique et la France sont sur le même fuseau horaire, les horaires du guide TV (EPG) correspondent donc à l'heure locale." },
          { type: "p", text: "Pour les frontaliers et les familles réparties des deux côtés de la frontière, le même abonnement fonctionne en France et en Belgique ; voir aussi notre page [IPTV Hauts-de-France](/iptv-hauts-de-france)." },
        ],
      },
      {
        id: "legal",
        h2: "IPTV en Belgique : ce qu'il faut savoir",
        blocks: [
          { type: "p", text: "La technologie IPTV est légale en Belgique comme en France ; la légalité d'un service dépend des droits de diffusion qu'il détient pour les contenus proposés, et le droit d'auteur belge s'applique aux utilisateurs résidant en Belgique. Notre analyse côté français : [l'IPTV est-il légal en France ?](/blog/iptv-legal-france), et notre page [avertissement](/avertissement)." },
          { type: "p", text: "Côté redevance, il n'existe plus de redevance radio-télévision en Belgique : elle a été supprimée en Flandre et à Bruxelles en 2002, puis en Wallonie en 2018." },
        ],
      },
    ],
    faq: [
      { q: "Combien coûte un abonnement IPTV en Belgique ?", a: "Chez Stream Bleu, le même prix qu'en France, en euros : 9 € pour 1 mois, 29 € pour 3 mois, 39 € pour 6 mois et 49 € pour 12 mois pour 1 écran. Les forfaits vont jusqu'à 10 écrans." },
      { q: "Peut-on commander depuis la Belgique ?", a: "Oui. Le formulaire de commande propose la Belgique dans la liste des pays, et les identifiants sont envoyés par e-mail comme pour un client en France." },
      { q: "L'IPTV fonctionne-t-il avec Proximus, VOO ou Telenet ?", a: "Oui, l'IPTV utilise votre connexion internet, quel que soit l'opérateur. Comptez environ 10 Mbps stables par écran en HD et 25 Mbps en 4K, et privilégiez un câble Ethernet pour la TV principale." },
      { q: "Peut-on installer l'IPTV sur le décodeur Proximus ou VOO ?", a: "Non, ces décodeurs n'acceptent pas d'applications tierces. Utilisez une Smart TV, une clé Fire TV Stick ou une box Android branchée sur la même TV." },
      { q: "Le guide TV est-il à l'heure belge ?", a: "Oui : la Belgique et la France partagent le même fuseau horaire, les horaires du guide des programmes correspondent à l'heure locale." },
      { q: "Le support répond-il aux clients belges ?", a: "Oui, en français, par WhatsApp, Telegram et e-mail, 7j/7, aux mêmes conditions que pour la France." },
    ],
    related: ["/tarifs", "/acheter-abonnement-iptv", "/abonnement-iptv-smart-tv", "/abonnement-iptv-multi-ecrans", "/iptv-suisse", "/iptv-hauts-de-france", "/liste-chaines", "/blog/iptv-wifi-ou-ethernet"],
    cta: { title: "Abonnement IPTV en Belgique dès 9 €", text: "Prix en euros · Paiement unique · Support en français 7j/7" },
    schema: "WebPage",
    datePublished: D,
    dateModified: D,
  },

  // ── Suisse ─────────────────────────────────────────────────────
  {
    slug: "/iptv-suisse",
    group: "commercial",
    areaServed: "Suisse",
    navLabel: "IPTV Suisse",
    cardText: "Abonnement IPTV en Suisse romande : prix en euros, Swisscom, Sunrise, Salt.",
    title: "IPTV Suisse : abonnement IPTV en Suisse romande, prix en €",
    description: "Abonnement IPTV en Suisse romande : prix en euros payables depuis un compte en CHF, conseils réseau Swisscom, Sunrise, Salt, appareils et redevance Serafe.",
    keywords: ["iptv suisse", "abonnement iptv suisse", "iptv suisse romande", "iptv geneve", "iptv lausanne", "meilleur iptv suisse"],
    badge: "Offre · Suisse",
    h1: "IPTV en Suisse : votre abonnement Stream Bleu en Suisse romande",
    intro: "Un **abonnement IPTV en Suisse** chez Stream Bleu se commande et se regarde comme en France : **9 € pour 1 mois, 29 € pour 3 mois, 39 € pour 6 mois et 49 € pour 12 mois**, de 1 à 10 écrans. Les prix sont **fixés en euros** ; si vous payez depuis un compte en francs suisses, la conversion est faite par votre banque ou votre moyen de paiement. Le support répond en français et le guide TV est à l'heure suisse, identique à celle de Paris. Voici ce qui compte en Suisse : le prix réel, le réseau et le matériel.",
    tldr: [
      "Prix en euros, identiques à la France ; la conversion en CHF dépend de votre banque.",
      "Le réseau suisse (fibre et câble) suffit largement, même pour la 4K sur plusieurs écrans.",
      "L'abonnement IPTV ne remplace pas la redevance Serafe, due par chaque ménage.",
    ],
    image: { src: "/abonnement-iptv-france-3.webp", alt: "Abonnement IPTV en Suisse romande sur TV et tablette" },
    sections: [
      {
        id: "prix",
        h2: "Prix de l'abonnement IPTV en Suisse",
        blocks: [
          { type: "prices", screens: [1, 2, 3, 4, 5], perMonth: true, caption: "Prix TTC en euros. Paiement unique, sans renouvellement automatique. Jusqu'à 10 écrans sur la page Tarifs." },
          { type: "p", text: "Payer en euros depuis la Suisse est courant : la plupart des cartes et comptes convertissent automatiquement au cours du jour. Certaines banques ajoutent des frais de change ; vérifiez les conditions de votre carte si vous voulez connaître le montant exact débité en francs." },
          { type: "p", text: "Le forfait 12 mois (49 €, environ 4,08 € par mois) est le plus avantageux et inclut l'activation IBO Player pour les TV Samsung et LG. Étapes de commande et conditions : [acheter un abonnement IPTV](/acheter-abonnement-iptv)." },
        ],
      },
      {
        id: "reseau",
        h2: "Réseau suisse : Swisscom, Sunrise, Salt et opérateurs locaux",
        blocks: [
          { type: "p", text: "La Suisse dispose d'une très bonne couverture haut débit : fibre de Swisscom et des services industriels de nombreuses villes, câble de Sunrise et des téléréseaux régionaux (Quickline, Net+ en Romandie), fibre d'opérateurs comme Salt ou Init7. Le débit n'est presque jamais le problème ; l'installation dans le logement l'est plus souvent." },
          {
            type: "table",
            head: ["Situation", "Ce qui peut gêner", "Conseil"],
            rows: [
              ["Appartement, box au fond du couloir", "Wi-Fi faible dans le salon", "Câble Ethernet, CPL ou répéteur maillé"],
              ["Câble (téléréseau)", "Légère baisse de débit en soirée dans certains immeubles", "Mesurez vers 21h"],
              ["Fibre", "Aucune pour l'IPTV, même en 4K sur plusieurs écrans", "Privilégiez quand même l'Ethernet pour la TV principale"],
              ["Chalet ou zone de montagne en 4G/5G", "Débit variable selon la couverture et l'affluence", "Testez en HD avant de passer en 4K"],
            ],
          },
          { type: "p", text: "Comptez environ 10 Mbps stables par écran en HD et 25 Mbps en 4K. Pour tester et améliorer votre installation : [Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet). L'Office fédéral de la communication (OFCOM) publie les informations officielles sur la couverture et les opérateurs." },
        ],
      },
      {
        id: "appareils",
        h2: "Sur quel appareil regarder l'IPTV en Suisse ?",
        blocks: [
          { type: "p", text: "Les décodeurs des offres TV des opérateurs (blue TV, Sunrise TV, etc.) sont réservés à leur propre service : l'abonnement IPTV se regarde sur un autre appareil." },
          {
            type: "cards",
            items: [
              { title: "Smart TV Samsung ou LG", text: "IBO Player ou Smart IPTV, sans matériel supplémentaire.", href: "/abonnement-iptv-smart-tv" },
              { title: "Android TV / Google TV", text: "Sony, Philips, TCL : TiviMate ou Smarters Player Lite, gratuits.", href: "/iptv-android-tv-france" },
              { title: "Clé Fire TV Stick", text: "Pour rendre compatible une TV ancienne en quelques minutes.", href: "/iptv-firestick-france" },
              { title: "Apple TV, iPhone, iPad", text: "Très répandus en Suisse : Smarters Player Lite ou IPTVX.", href: "/iptv-apple-tv-france" },
            ],
          },
          { type: "p", text: "Toute la famille regarde en même temps ? Voir [abonnement IPTV multi-écrans](/abonnement-iptv-multi-ecrans)." },
        ],
      },
      {
        id: "chaines",
        h2: "Chaînes, guide TV et frontaliers",
        blocks: [
          { type: "p", text: "Le catalogue est identique pour tous les clients. La [liste des chaînes](/liste-chaines) comporte une section Suisse en plus des chaînes françaises : vérifiez-y vos chaînes habituelles avant de commander. La Suisse et la France partagent le même fuseau horaire, le guide TV (EPG) est donc à l'heure locale." },
          { type: "p", text: "Pour les frontaliers du Genevois, du Chablais ou de l'Arc jurassien, le même abonnement fonctionne des deux côtés de la frontière ; voir aussi nos pages [IPTV Auvergne-Rhône-Alpes](/iptv-auvergne-rhone-alpes) et [IPTV Bourgogne-Franche-Comté](/iptv-bourgogne-franche-comte)." },
        ],
      },
      {
        id: "serafe",
        h2: "Redevance Serafe et cadre légal",
        blocks: [
          { type: "p", text: "En Suisse, la redevance radio-télévision est perçue par **Serafe** auprès de chaque ménage, indépendamment des appareils possédés ou du mode de réception. Un abonnement IPTV ne la remplace pas et n'en dispense pas." },
          { type: "p", text: "La technologie IPTV est légale ; la légalité d'un service dépend des droits de diffusion qu'il détient pour les contenus proposés, et le droit suisse s'applique aux utilisateurs résidant en Suisse. Voir notre page [avertissement](/avertissement) et notre analyse [IPTV légal en France ?](/blog/iptv-legal-france)." },
        ],
      },
    ],
    faq: [
      { q: "Combien coûte un abonnement IPTV en Suisse ?", a: "Chez Stream Bleu, 9 € pour 1 mois, 29 € pour 3 mois, 39 € pour 6 mois et 49 € pour 12 mois pour 1 écran. Les prix sont en euros ; le montant en francs dépend du cours et des frais de votre banque." },
      { q: "Peut-on payer en francs suisses ?", a: "Les prix sont fixés en euros. Si vous payez depuis un compte en CHF, la conversion est faite automatiquement par votre banque ou votre moyen de paiement, éventuellement avec des frais de change." },
      { q: "L'IPTV fonctionne-t-il avec Swisscom, Sunrise ou Salt ?", a: "Oui, avec tout opérateur : l'IPTV utilise votre connexion internet. Comptez environ 10 Mbps stables par écran en HD et 25 Mbps en 4K." },
      { q: "Un abonnement IPTV dispense-t-il de la redevance Serafe ?", a: "Non. La redevance Serafe est due par chaque ménage en Suisse, quel que soit le mode de réception de la télévision." },
      { q: "Le guide TV est-il à l'heure suisse ?", a: "Oui : la Suisse et la France sont sur le même fuseau horaire, les horaires du guide des programmes correspondent à l'heure locale." },
      { q: "Peut-on commander depuis la Suisse ?", a: "Oui. Le formulaire de commande propose la Suisse dans la liste des pays ; les identifiants sont envoyés par e-mail et le support répond en français, 7j/7." },
    ],
    related: ["/tarifs", "/acheter-abonnement-iptv", "/abonnement-iptv-smart-tv", "/abonnement-iptv-multi-ecrans", "/iptv-belgique", "/iptv-auvergne-rhone-alpes", "/liste-chaines", "/blog/iptv-wifi-ou-ethernet"],
    cta: { title: "Abonnement IPTV en Suisse dès 9 €", text: "Prix en euros · Paiement unique · Support en français 7j/7" },
    schema: "WebPage",
    datePublished: D,
    dateModified: D,
  },
];
