import type { SeoPageData } from "../types";

const D = "2026-09-26";
const OLD = "2026-05-23";

export const BOX_PAGES: SeoPageData[] = [
  // ── Fire TV Stick (existing URL, revamped) ─────────────────────
  {
    slug: "/iptv-firestick-france",
    group: "boxes",
    navLabel: "IPTV Fire TV Stick",
    cardText: "La clé Amazon IPTV la plus vendue : installation complète.",
    title: "IPTV Fire Stick : installer l'IPTV sur la clé Amazon",
    description: "IPTV sur Amazon Fire TV Stick : quel modèle choisir, installer TiviMate ou IPTV Smarters avec Downloader, configurer vos identifiants et éviter le buffering.",
    keywords: ["iptv firestick", "cle amazon iptv", "cle iptv amazon", "cle iptv", "boitier iptv amazon", "ip tv amazon", "iptv amazon", "iptv amazon stick", "iptv stick amazon", "iptv stick", "amazon fire stick iptv", "amazon fire tv stick iptv", "fire tv iptv", "fire tv stick iptv", "iptv fire stick", "iptv sur amazon stick", "iptv sur fire stick"],
    badge: "Boîtier · Fire TV Stick",
    h1: "IPTV sur Fire TV Stick : le guide de la clé Amazon IPTV",
    intro: "Le **Fire TV Stick d'Amazon** est la clé IPTV la plus utilisée en France : branchée en HDMI, elle transforme n'importe quelle TV en TV IPTV pour 30 à 70 €. Pour regarder l'IPTV dessus, on installe un lecteur comme [TiviMate](/tivimate) ou [IPTV Smarters Pro](/iptv-smarters-pro) via l'application [Downloader](/downloader-iptv), puis on saisit ses identifiants. Comptez 10 minutes au total.",
    tldr: [
      "Choisissez un Fire TV Stick 4K ou 4K Max : plus de mémoire, décodage HEVC, Wi-Fi 6.",
      "Installez Downloader, autorisez les applications inconnues, puis TiviMate ou Smarters.",
      "Ajoutez vos identifiants Xtream Codes : chaînes, VOD et guide TV se chargent seuls.",
    ],
    image: { src: "/abonnement-iptv-france-1.webp", alt: "Clé Amazon Fire TV Stick IPTV branchée sur un téléviseur" },
    sections: [
      {
        id: "modeles",
        h2: "Quel Fire TV Stick choisir pour l'IPTV ?",
        blocks: [
          {
            type: "table",
            head: ["Modèle", "Résolution", "Points forts IPTV", "Pour qui"],
            rows: [
              ["Fire TV Stick (HD)", "1080p", "Prix bas", "TV HD, chambre"],
              ["Fire TV Stick 4K", "4K HDR", "HEVC, Dolby Vision", "La plupart des salons"],
              ["Fire TV Stick 4K Max", "4K HDR", "Plus de RAM, Wi-Fi 6/6E", "Grosses listes, 4K"],
              ["Fire TV Cube", "4K HDR", "Port Ethernet, puissance", "Utilisation intensive"],
            ],
            caption: "Gammes Amazon disponibles en France ; les générations évoluent régulièrement.",
          },
          { type: "p", text: "Si vous hésitez avec un autre boîtier, notre [comparatif des boîtiers IPTV](/boitier-iptv) compare la clé Amazon au Chromecast, à la Xiaomi Mi Box et aux box Formuler." },
        ],
      },
      {
        id: "installation",
        h2: "Installer l'IPTV sur Fire Stick en 5 étapes",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Installez Downloader", text: "Accueil → Rechercher → « Downloader » → Télécharger." },
              { title: "Autorisez les applications inconnues", text: "Paramètres → Ma Fire TV → Options pour les développeurs → Installer des applications inconnues → Downloader : Activé. Menu absent ? Cliquez 7 fois sur le nom de l'appareil dans « À propos »." },
              { title: "Installez votre lecteur IPTV", text: "Dans Downloader, saisissez l'adresse officielle de TiviMate ou d'IPTV Smarters Pro. Détails dans notre guide [Downloader IPTV](/downloader-iptv)." },
              { title: "Entrez vos identifiants", text: "Choisissez « Xtream Codes » et collez serveur, identifiant et mot de passe reçus par e-mail." },
              { title: "Regardez", text: "Les catégories s'affichent en quelques secondes. Ajoutez vos favoris et chargez le guide TV." },
            ],
          },
        ],
      },
      {
        id: "apps",
        h2: "Meilleures applications IPTV pour Fire TV",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "TiviMate", text: "Le meilleur guide TV et le zapping le plus rapide.", href: "/tivimate" },
              { title: "IPTV Smarters Pro", text: "Gratuit et complet, VOD et séries bien rangées.", href: "/iptv-smarters-pro" },
              { title: "IBO Player", text: "Activation offerte avec le forfait 12 mois.", href: "/ibo-player" },
              { title: "STBEmu", text: "Si vous avez un abonnement type portail MAG.", href: "/stbemu" },
            ],
          },
        ],
      },
      {
        id: "optimiser",
        h2: "Éviter le buffering sur la clé Amazon",
        blocks: [
          {
            type: "ul",
            items: [
              "Connectez la clé au Wi-Fi **5 GHz** ou ajoutez l'adaptateur Ethernet Amazon (environ 15–20 €).",
              "Utilisez l'**alimentation secteur fournie**, pas le port USB de la TV : une alimentation faible provoque des ralentissements.",
              "Videz le cache du lecteur de temps en temps : Paramètres → Applications → Gérer → Vider le cache.",
              "Désactivez la collecte de données et les aperçus vidéo automatiques de l'accueil pour libérer de la mémoire.",
            ],
          },
          { type: "p", text: "Encore des coupures ? Voir [IPTV Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet) et notre article [IPTV sans coupure](/blog/iptv-sans-coupure)." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on regarder l'IPTV sur un Fire TV Stick ?", a: "Oui. Il suffit d'installer un lecteur IPTV (TiviMate, IPTV Smarters Pro, IBO Player) avec l'application Downloader, puis d'ajouter les identifiants de votre abonnement IPTV." },
      { q: "Qu'est-ce qu'une « clé Amazon IPTV » ?", a: "C'est un Fire TV Stick sur lequel on a installé une application IPTV. La clé elle-même est un produit Amazon standard ; les chaînes viennent de votre abonnement IPTV." },
      { q: "Quel Fire TV Stick choisir pour l'IPTV 4K ?", a: "Le Fire TV Stick 4K Max : plus de mémoire vive et un meilleur Wi-Fi, ce qui rend le zapping plus fluide sur les grosses listes." },
      { q: "Faut-il un VPN sur Fire Stick pour l'IPTV ?", a: "Non, un VPN n'est pas nécessaire pour faire fonctionner l'IPTV. Il ne rend pas légal un contenu qui ne l'est pas et peut ajouter de la latence." },
      { q: "Pourquoi mon Fire Stick IPTV rame ?", a: "Le plus souvent : Wi-Fi 2,4 GHz saturé, alimentation insuffisante ou mémoire pleine. Passez en 5 GHz ou Ethernet, utilisez le bloc secteur d'origine et videz le cache." },
    ],
    related: ["/downloader-iptv", "/tivimate", "/iptv-smarters-pro", "/boitier-iptv", "/iptv-chromecast-france", "/blog/iptv-firestick-france", "/abonnement-iptv", "/essai-gratuit"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "7 min",
  },

  // ── MAG (existing URL, revamped) ───────────────────────────────
  {
    slug: "/iptv-mag-box-france",
    group: "boxes",
    navLabel: "Boîtier MAG",
    cardText: "MAG 322, 520, 524 : configuration du portail IPTV.",
    title: "Boîtier MAG IPTV : configuration MAG 322, 520, 524",
    description: "Configurer l'IPTV sur un boîtier MAG Infomir (MAG 254, 322, 424, 520, 524) : adresse du portail, adresse MAC, choix du modèle et solutions aux erreurs.",
    keywords: ["iptv mag", "mag box iptv", "infomir mag", "mag 254", "mag 256", "mag 322", "mag 410", "mag 420w1", "mag 424", "mag 424w3", "mag 425a", "mag 520w3", "infomir mag 254", "infomir mag 322", "infomir mag 520", "tv box mag", "mag420w1", "mag425a"],
    badge: "Boîtier · MAG Infomir",
    h1: "Boîtier MAG IPTV : configurer votre MAG en 5 minutes",
    intro: "Les **boîtiers MAG d'Infomir** sont des décodeurs IPTV conçus pour une seule chose : lire un abonnement via un **portail** (une adresse web) associé à l'**adresse MAC** du boîtier. Pas d'application à installer : on saisit l'URL du portail dans les réglages système et les chaînes s'affichent avec le guide TV. C'est la solution la plus simple pour un proche peu à l'aise avec la technique.",
    tldr: [
      "Transmettez l'adresse MAC (étiquette sous le boîtier) à Stream Bleu lors de la commande.",
      "Saisissez l'URL du portail dans Réglages système → Serveurs → Portails.",
      "Pour la 4K, choisissez un MAG 520/524 ; les MAG 254/256 ne décodent pas le HEVC.",
    ],
    sections: [
      {
        id: "modeles",
        h2: "Quel modèle de MAG choisir ?",
        blocks: [
          {
            type: "table",
            head: ["Modèle", "Système", "Résolution / codec", "Avis"],
            rows: [
              ["MAG 254 / 256", "Linux", "Full HD, H.264", "Ancien : pas de HEVC"],
              ["MAG 322 / 324", "Linux", "Full HD, H.265", "Bon choix HD"],
              ["MAG 410 / 420 / 424", "Linux ou Android selon version", "4K, H.265", "4K abordable"],
              ["MAG 425A", "Android TV", "4K, H.265", "Mix portail + applis"],
              ["MAG 520 / 524", "Linux", "4K HDR, H.265", "Référence actuelle"],
            ],
            caption: "Les suffixes « w1 », « w3 » désignent les variantes avec Wi-Fi intégré.",
          },
        ],
      },
      {
        id: "configuration",
        h2: "Configurer le portail sur un boîtier MAG",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Notez l'adresse MAC", text: "Elle figure sous le boîtier et dans Réglages → Informations. Format 00:1A:79:xx:xx:xx." },
              { title: "Transmettez-la à Stream Bleu", text: "Lors de votre commande ou de votre [essai gratuit](/essai-gratuit), indiquez l'adresse MAC. Nous activons la ligne et vous envoyons l'URL du portail." },
              { title: "Ouvrez les réglages système", text: "Au démarrage ou via la touche Setup de la télécommande : Réglages système → Serveurs → Portails." },
              { title: "Saisissez l'URL du portail", text: "Portail 1 nom : Stream Bleu. Portail 1 URL : l'adresse reçue par e-mail. Sauvegardez (OK)." },
              { title: "Redémarrez le portail", text: "Revenez en arrière et choisissez « Redémarrer le portail ». Les chaînes se chargent." },
            ],
          },
        ],
      },
      {
        id: "erreurs",
        h2: "Erreurs fréquentes sur MAG",
        blocks: [
          {
            type: "table",
            head: ["Message", "Solution"],
            rows: [
              ["« STB blocked »", "MAC non activée ou abonnement expiré : contactez le support"],
              ["« Authentication failed »", "Adresse MAC mal transmise : vérifiez chaque caractère"],
              ["Bloqué sur « Loading portal »", "URL erronée ou réseau : vérifiez l'URL et le câble Ethernet"],
              ["Image saccadée en 4K", "MAG 254/256 non compatible HEVC : passez à un MAG 520"],
            ],
          },
          { type: "p", text: "Pas de boîtier MAG mais un abonnement portail ? L'application [STBEmu](/stbemu) émule un MAG sur Android TV ou Fire TV. Comparez aussi avec les autres modèles de notre guide [boîtier IPTV](/boitier-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Comment configurer l'IPTV sur un boîtier MAG ?", a: "Transmettez l'adresse MAC du boîtier à votre fournisseur, puis saisissez l'URL du portail dans Réglages système → Serveurs → Portails et redémarrez le portail." },
      { q: "Quel est le meilleur boîtier MAG en 2026 ?", a: "Le MAG 520 ou 524 pour la 4K HDR et le HEVC. Pour une TV Full HD, un MAG 322 reste suffisant et moins cher." },
      { q: "Le MAG 254 fonctionne-t-il encore ?", a: "Oui pour les chaînes en H.264, mais il ne décode pas le H.265/HEVC utilisé par de nombreuses chaînes HD et 4K. C'est un modèle à remplacer." },
      { q: "Peut-on installer TiviMate sur un MAG ?", a: "Non sur les MAG Linux. Seuls les modèles Android (comme le MAG 425A) acceptent des applications Android comme TiviMate." },
    ],
    related: ["/stbemu", "/boitier-iptv", "/boitier-formuler", "/iptv-enigma2", "/tarifs", "/essai-gratuit"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "5 min",
  },

  // ── Formuler ───────────────────────────────────────────────────
  {
    slug: "/boitier-formuler",
    group: "boxes",
    navLabel: "Boîtier Formuler",
    cardText: "Formuler Z11 Pro Max, Z10, Z8 et MyTVOnline 3.",
    title: "Formuler Z11 Pro Max : boîtier IPTV et MyTVOnline 3",
    description: "Boîtier Formuler IPTV : Z11 Pro Max, Z11 Pro, Z10 Pro Max, Z8, Z7+ et Z Nano comparés. Configurer MyTVOnline 3 avec Xtream Codes ou portail. Guide 2026.",
    keywords: ["formuler z11 pro max", "box formuler", "formuler box", "formuler iptv box", "formuler tv box", "formuler z11", "formuler z11 pro", "formuler z10 pro max 4k", "formuler z10 pro max iptv", "formuler z10 se", "formuler z8", "formuler z8 pro", "formuler z8 iptv", "formuler z7", "formuler z7+", "formuler z nano", "formuler z neo", "formuler zx", "formuler z+", "iptv formuler", "mytvonline", "mytvonline 3"],
    badge: "Boîtier · Formuler",
    h1: "Boîtier Formuler : Z11 Pro Max, MyTVOnline 3 et configuration IPTV",
    intro: "Les **boîtiers Formuler** sont des box Android conçues pour l'IPTV, livrées avec **MyTVOnline** (MyTVOnline 3 sur les modèles récents), une application qui gère à la fois les comptes Xtream Codes, les listes M3U et les portails type MAG. Le **Formuler Z11 Pro Max** est le modèle phare en 2026 : Android TV, 4K HDR, 4 Go de RAM et port Ethernet gigabit, pour un zapping très rapide même sur de grosses listes.",
    tldr: [
      "Modèle conseillé : Z11 Pro Max (ou Z11 Pro si budget serré).",
      "MyTVOnline 3 accepte Xtream Codes, M3U et portail : configuration en 3 minutes.",
      "Anciens Z7/Z8 : fonctionnent encore mais montrent leurs limites en 4K.",
    ],
    sections: [
      {
        id: "modeles",
        h2: "Comparatif des boîtiers Formuler",
        blocks: [
          {
            type: "table",
            head: ["Modèle", "Android", "4K", "Application IPTV", "Verdict"],
            rows: [
              ["Z11 Pro Max", "Android TV 11", "Oui, HDR", "MyTVOnline 3", "Le meilleur Formuler actuel"],
              ["Z11 Pro", "Android TV 11", "Oui", "MyTVOnline 3", "Bon rapport qualité-prix"],
              ["Z10 Pro Max / Z10 SE", "Android 10", "Oui", "MyTVOnline 2/3", "Encore très correct"],
              ["Z8 / Z8 Pro", "Android 7", "Oui (limité)", "MyTVOnline 2", "Vieillissant"],
              ["Z7+ / Z+ / ZX", "Android 5–7", "Non ou limité", "MyTVOnline", "À remplacer"],
              ["Z Nano / Z Neo", "Android", "Selon modèle", "MyTVOnline", "Petit format d'appoint"],
            ],
            caption: "Caractéristiques indicatives ; vérifiez la fiche du revendeur selon la révision du boîtier.",
          },
        ],
      },
      {
        id: "mytvonline",
        h2: "Configurer MyTVOnline 3 avec votre abonnement",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez MyTVOnline 3", text: "Depuis l'accueil du Formuler. Acceptez les conditions au premier lancement." },
              { title: "Ajoutez un portail", text: "Choisissez « Add Portal » puis le type : Xtream Codes (recommandé), M3U ou portail Stalker." },
              { title: "Saisissez vos informations", text: "Pour Xtream Codes : URL du serveur, identifiant, mot de passe fournis par Stream Bleu. Pour un portail : URL + la MAC du Formuler communiquée à la commande." },
              { title: "Chargez chaînes et guide", text: "MyTVOnline télécharge les catégories et l'EPG. Organisez vos favoris avec le bouton de la télécommande." },
            ],
          },
          { type: "p", text: "Le Formuler étant une box Android, vous pouvez aussi y installer [TiviMate](/tivimate) ou [IPTV Smarters Pro](/iptv-smarters-pro) si vous préférez leur interface." },
        ],
      },
      {
        id: "pourquoi",
        h2: "Formuler, MAG ou Fire TV Stick ?",
        blocks: [
          { type: "p", text: "Un Formuler coûte plus cher qu'une [clé Fire TV](/iptv-firestick-france) mais offre un vrai port Ethernet, une télécommande pensée pour la TV en direct et une application IPTV intégrée. Face à un [boîtier MAG](/iptv-mag-box-france), il ajoute toutes les applications Android (YouTube, Kodi, etc.). Vue d'ensemble dans notre guide [boîtier IPTV](/boitier-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Quel est le meilleur boîtier Formuler ?", a: "Le Formuler Z11 Pro Max est le plus performant en 2026 : Android TV 11, 4K HDR, 4 Go de RAM et MyTVOnline 3. Le Z11 Pro est une alternative moins chère." },
      { q: "Qu'est-ce que MyTVOnline ?", a: "MyTVOnline est l'application IPTV développée par Formuler pour ses boîtiers. La version 3 gère les comptes Xtream Codes, les listes M3U et les portails Stalker avec guide TV et replay." },
      { q: "Un boîtier Formuler inclut-il des chaînes ?", a: "Non. Le Formuler est un lecteur ; il faut un abonnement IPTV pour avoir des chaînes. Stream Bleu fonctionne avec MyTVOnline en Xtream Codes ou en portail." },
      { q: "Peut-on installer TiviMate sur Formuler ?", a: "Oui, les Formuler récents sont des box Android TV avec accès au Play Store : TiviMate et IPTV Smarters s'y installent normalement." },
    ],
    related: ["/iptv-mag-box-france", "/boitier-iptv", "/tivimate", "/iptv-xiaomi-mi-box", "/abonnement-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "5 min",
  },

  // ── Xiaomi Mi Box ──────────────────────────────────────────────
  {
    slug: "/iptv-xiaomi-mi-box",
    group: "boxes",
    navLabel: "IPTV Xiaomi Mi Box",
    cardText: "Mi Box S et Mi TV Stick : installer l'IPTV.",
    title: "IPTV Xiaomi Mi Box S et Mi TV Stick : installation",
    description: "Installer l'IPTV sur Xiaomi Mi Box S (Google TV) et Mi TV Stick : applications conseillées, installation de TiviMate, réglages 4K et astuces anti-coupure.",
    keywords: ["xiaomi iptv", "xiaomi iptv box", "mi box iptv", "xiaomi mi box iptv", "xiaomi mi box s iptv", "xiaomi mi tv stick iptv", "iptv xiaomi mi box", "mi iptv"],
    badge: "Boîtier · Xiaomi",
    h1: "IPTV sur Xiaomi Mi Box S et Mi TV Stick",
    intro: "La **Xiaomi Mi Box S** (2e génération, sous Google TV) est l'une des box Android les plus abordables pour l'IPTV en 4K : elle accède directement au Google Play Store, où l'on installe [TiviMate](/tivimate) ou [Smarters Player Lite](/smarters-player-lite) en un clic. Le **Mi TV Stick**, plus petit et limité au Full HD (ou 4K selon version), convient à une TV secondaire.",
    sections: [
      {
        id: "installer",
        h2: "Installer un lecteur IPTV sur la Mi Box",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez le Play Store", text: "Depuis l'accueil Google TV, onglet Applications → Rechercher." },
              { title: "Installez TiviMate ou Smarters Player Lite", text: "Les deux sont disponibles officiellement ; aucune manipulation d'APK nécessaire." },
              { title: "Ajoutez votre abonnement", text: "Mode Xtream Codes : URL du serveur, identifiant et mot de passe reçus par e-mail." },
              { title: "Réglez l'affichage", text: "Paramètres → Affichage : laissez la résolution en automatique et activez la correspondance de fréquence si disponible." },
            ],
          },
        ],
      },
      {
        id: "wifi",
        h2: "Mi Box et Wi-Fi : attention au débit",
        blocks: [
          { type: "p", text: "La Mi Box S n'a pas de port Ethernet. Placez-la près de la box internet ou ajoutez un adaptateur USB-Ethernet compatible. Pour la 4K, un Wi-Fi 5 GHz stable de 25 Mbit/s est recommandé : voir [IPTV Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet)." },
        ],
      },
      {
        id: "comparaison",
        h2: "Mi Box, Fire TV Stick ou Chromecast ?",
        blocks: [
          {
            type: "table",
            head: ["Critère", "Xiaomi Mi Box S", "Fire TV Stick 4K", "Chromecast Google TV"],
            rows: [
              ["Play Store", "Oui", "Non (Downloader)", "Oui"],
              ["Format", "Petit boîtier", "Clé HDMI", "Clé HDMI"],
              ["Ethernet", "Adaptateur", "Adaptateur", "Adaptateur"],
              ["Installation IPTV", "Très simple", "Simple", "Très simple"],
            ],
          },
          { type: "p", text: "Guides associés : [IPTV sur Fire TV Stick](/iptv-firestick-france), [IPTV sur Chromecast](/iptv-chromecast-france), [IPTV sur Android TV](/iptv-android-tv-france)." },
        ],
      },
    ],
    faq: [
      { q: "La Xiaomi Mi Box S est-elle bonne pour l'IPTV ?", a: "Oui : elle est certifiée Google, lit la 4K HDR et donne accès à TiviMate et Smarters Player Lite directement depuis le Play Store, pour un prix contenu." },
      { q: "Quelle application IPTV installer sur Mi Box ?", a: "TiviMate pour le meilleur guide TV, ou Smarters Player Lite pour une solution gratuite. Les deux fonctionnent avec les identifiants Xtream Codes de Stream Bleu." },
      { q: "Le Mi TV Stick suffit-il pour l'IPTV ?", a: "Pour une TV Full HD, oui. Pour la 4K et les grosses listes, la Mi Box S ou un Fire TV Stick 4K Max sont plus confortables." },
    ],
    related: ["/tivimate", "/iptv-android-tv-france", "/iptv-firestick-france", "/boitier-iptv", "/iptv-x96-mini"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "4 min",
  },

  // ── X96 Mini ───────────────────────────────────────────────────
  {
    slug: "/iptv-x96-mini",
    group: "boxes",
    navLabel: "IPTV X96 Mini",
    cardText: "Box Android X96 Mini et X96Q : ce qu'il faut savoir.",
    title: "IPTV X96 Mini : configurer la box Android pas chère",
    description: "Box X96 Mini et X96Q pour l'IPTV : installer TiviMate ou IPTV Smarters, limites des box Android non certifiées, réglages et alternatives plus fiables.",
    keywords: ["iptv x96", "x96 mini iptv", "iptv x96 mini", "x96q iptv", "box android iptv", "iptv box android"],
    badge: "Boîtier · X96 Mini",
    h1: "IPTV sur X96 Mini : configurer une box Android à petit prix",
    intro: "La **X96 Mini** (et sa cousine la **X96Q**) est une box Android générique vendue entre 25 et 40 €. Elle fait tourner les lecteurs IPTV Android comme [IPTV Smarters Pro](/iptv-smarters-pro) ou [TiviMate](/tivimate), avec un port Ethernet bienvenu. Mais ce n'est pas une box certifiée Google : pas de mises à jour de sécurité régulières, et des applications comme Netflix limitées en qualité.",
    sections: [
      {
        id: "configuration",
        h2: "Installer l'IPTV sur la X96 Mini",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Mettez à jour et branchez en Ethernet", text: "Le port RJ45 est plus stable que le Wi-Fi 2,4 GHz de ces box." },
              { title: "Installez un lecteur", text: "Via le Play Store s'il est présent, sinon via l'APK officiel de l'éditeur." },
              { title: "Ajoutez vos identifiants", text: "Xtream Codes ou M3U, fournis par Stream Bleu." },
              { title: "Allégez la liste", text: "Masquez les catégories inutiles pour préserver la mémoire limitée (souvent 1–2 Go)." },
            ],
          },
        ],
      },
      {
        id: "limites",
        h2: "Les limites d'une box Android non certifiée",
        blocks: [
          {
            type: "ul",
            items: [
              "Firmware rarement mis à jour : risques de sécurité sur la durée.",
              "Décodage 4K parfois instable, surtout en HEVC 10 bits.",
              "Méfiez-vous des box vendues « avec IPTV préinstallée » : lisez notre article [IPTV à vie](/blog/iptv-a-vie).",
            ],
          },
          { type: "p", text: "Pour quelques dizaines d'euros de plus, une [Xiaomi Mi Box S](/iptv-xiaomi-mi-box) ou un [Fire TV Stick 4K](/iptv-firestick-france) offrent une expérience plus fiable. Comparatif complet : [boîtier IPTV](/boitier-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "La X96 Mini est-elle bien pour l'IPTV ?", a: "Elle fonctionne pour un usage HD avec un budget minimal, surtout en Ethernet. Pour la 4K et une utilisation quotidienne, une box certifiée Google est plus fiable." },
      { q: "Quelle application IPTV sur X96 Mini ?", a: "IPTV Smarters Pro (gratuit et léger) ou TiviMate. Évitez de charger toute la VOD si la box n'a qu'1 Go de RAM." },
      { q: "X96 Mini ou X96Q : quelle différence ?", a: "Ce sont deux box Android génériques proches ; les caractéristiques varient selon les lots. Vérifiez la RAM (2 Go minimum conseillés) et la version d'Android avant d'acheter." },
    ],
    related: ["/iptv-xiaomi-mi-box", "/boitier-iptv", "/iptv-smarters-pro", "/iptv-android-tv-france"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "4 min",
  },

  // ── Enigma2 ────────────────────────────────────────────────────
  {
    slug: "/iptv-enigma2",
    group: "boxes",
    navLabel: "IPTV Enigma2",
    cardText: "Dreambox, Amiko, Xsarius : l'IPTV sur récepteur Enigma2.",
    title: "IPTV Enigma2 : Dreambox, Amiko, Xsarius (guide 2026)",
    description: "Regarder l'IPTV sur un récepteur Enigma2 (Dreambox, Amiko, Xsarius, Vu+) : bouquets M3U, plugins Xtream, EPG et conseils de configuration pas à pas.",
    keywords: ["iptv enigma2", "iptv dreambox", "enigma2 iptv", "amiko a6n", "amiko a9 green", "amiko a9z pro", "xsarius iptv", "xsarius pure", "xsarius pure 2", "xsarius sniper", "xsarius sniper 4k", "xsarius q3", "xsarius avant 2", "dreamtv mini ultra hd", "iptv satellite", "sansat iptv", "prosat iptv"],
    badge: "Boîtier · Enigma2",
    h1: "IPTV sur Enigma2 : Dreambox, Amiko, Xsarius et Vu+",
    intro: "**Enigma2** est le système Linux des récepteurs satellite comme Dreambox, Vu+, Amiko et de nombreux décodeurs hybrides (Xsarius, etc.). Il peut lire l'IPTV de deux façons : en convertissant votre liste M3U en **bouquets** Enigma2, ou via un **plugin Xtream** qui affiche chaînes, VOD et guide TV. C'est la solution des amateurs de satellite qui veulent tout regrouper dans une seule télécommande.",
    sections: [
      {
        id: "methodes",
        h2: "Les deux méthodes pour l'IPTV sur Enigma2",
        blocks: [
          {
            type: "table",
            head: ["Méthode", "Principe", "Avantages", "Inconvénients"],
            rows: [
              ["Bouquet M3U", "Liste convertie en bouquet (fichier userbouquet)", "Chaînes mêlées au satellite, zapping natif", "EPG à associer, mise à jour manuelle"],
              ["Plugin Xtream", "Plugin dédié qui se connecte avec vos identifiants", "VOD, séries, catch-up, EPG", "Interface séparée"],
            ],
          },
        ],
      },
      {
        id: "bouquet",
        h2: "Ajouter l'IPTV en bouquet",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Installez un plugin de conversion", text: "Depuis le gestionnaire de plugins de votre image (OpenATV, OpenPLi…), cherchez un outil de conversion M3U vers bouquet." },
              { title: "Renseignez votre lien M3U", text: "Collez l'URL M3U fournie par Stream Bleu et choisissez les catégories à importer." },
              { title: "Générez les bouquets", text: "Le plugin crée les bouquets et, selon l'outil, associe l'EPG." },
              { title: "Rechargez la liste des chaînes", text: "Les nouveaux bouquets apparaissent à côté de vos chaînes satellite." },
            ],
          },
        ],
      },
      {
        id: "materiel",
        h2: "Amiko, Xsarius, Dreambox : quel matériel ?",
        blocks: [
          { type: "p", text: "Les récepteurs récents (processeurs ARM, décodage HEVC) gèrent bien l'IPTV HD et 4K. Les anciens modèles MIPS peuvent saturer avec de grosses listes : limitez-vous aux catégories utiles. Si vous n'avez pas besoin du satellite, un [boîtier Formuler](/boitier-formuler) ou un [MAG](/iptv-mag-box-france) est plus simple. Tous les modèles sont comparés sur notre page [boîtier IPTV](/boitier-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on regarder l'IPTV sur un récepteur Enigma2 ?", a: "Oui, via une liste M3U convertie en bouquets ou via un plugin Xtream Codes. Les deux méthodes fonctionnent avec un abonnement Stream Bleu." },
      { q: "Mon Amiko ou Xsarius est-il compatible IPTV ?", a: "La plupart des modèles Linux récents le sont. Vérifiez que votre image propose des plugins IPTV et que le processeur décode le HEVC pour la HD et la 4K." },
      { q: "Faut-il un plugin payant pour l'IPTV sur Enigma2 ?", a: "Non, plusieurs plugins gratuits existent dans les gestionnaires de paquets des images Enigma2 courantes." },
    ],
    related: ["/boitier-iptv", "/iptv-mag-box-france", "/boitier-formuler", "/blog/m3u-iptv", "/iptv-kodi-france"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "5 min",
  },

  // ── Freebox ────────────────────────────────────────────────────
  {
    slug: "/iptv-freebox",
    group: "boxes",
    navLabel: "IPTV Freebox",
    cardText: "Pop, Ultra, Révolution : l'IPTV sur le player Freebox.",
    title: "IPTV sur Freebox : Pop, Ultra, Delta et Révolution",
    description: "Installer une application IPTV sur Freebox Pop, Ultra, Delta ou Révolution : quels players acceptent les apps Android, lire une liste M3U et alternatives.",
    keywords: ["iptv freebox", "télécharger iptv sur freebox révolution", "iptv freebox pop", "iptv freebox ultra", "iptv free", "iptv orange", "iptv isp"],
    badge: "Boîtier · Freebox",
    h1: "IPTV sur Freebox : quel player accepte une application IPTV ?",
    intro: "Sur **Freebox**, tout dépend du player TV. Les players sous **Android TV** (Freebox Pop, Player Devialet de la Delta selon version, Freebox Ultra et Mini 4K) donnent accès au Google Play Store : on y installe [TiviMate](/tivimate) ou [Smarters Player Lite](/smarters-player-lite) comme sur n'importe quelle box Android. Le player de la **Freebox Révolution**, lui, n'accepte pas d'applications tierces.",
    sections: [
      {
        id: "players",
        h2: "Compatibilité des players Freebox",
        blocks: [
          {
            type: "table",
            head: ["Player", "Système", "Applications IPTV", "Méthode"],
            rows: [
              ["Freebox Pop", "Android TV", "Oui", "Play Store"],
              ["Freebox Ultra", "Android TV", "Oui", "Play Store"],
              ["Freebox Mini 4K", "Android TV", "Oui", "Play Store"],
              ["Freebox Delta (Player Devialet)", "Selon version", "Limité", "Ajoutez une clé HDMI"],
              ["Freebox Révolution", "Système Free", "Non", "Fire TV Stick ou boîtier"],
            ],
            caption: "Disponibilité susceptible d'évoluer selon les mises à jour de Free.",
          },
        ],
      },
      {
        id: "installer",
        h2: "Installer l'IPTV sur un player Freebox Android TV",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez le Google Play Store", text: "Depuis l'accueil Android TV du player." },
              { title: "Installez un lecteur IPTV", text: "TiviMate ou Smarters Player Lite." },
              { title: "Saisissez vos identifiants", text: "Mode Xtream Codes avec les informations reçues par e-mail." },
            ],
          },
        ],
      },
      {
        id: "revolution",
        h2: "Freebox Révolution : la solution",
        blocks: [
          { type: "p", text: "Impossible d'installer une application IPTV sur le player Révolution. La solution la plus simple : brancher un [Fire TV Stick](/iptv-firestick-france) ou un Chromecast sur une autre entrée HDMI de la TV. Même logique chez Orange, SFR ou Bouygues : les décodeurs opérateurs n'acceptent généralement pas de lecteur IPTV tiers, sauf les modèles Android TV. Voir aussi [boîtier IPTV](/boitier-iptv)." },
          { type: "p", text: "Rappel : votre abonnement IPTV passe par internet, il fonctionne quel que soit votre fournisseur d'accès (Free, Orange, SFR, Bouygues). Il ne remplace pas la TV de votre box opérateur, il s'y ajoute." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on installer une application IPTV sur la Freebox ?", a: "Oui sur les players Android TV (Pop, Ultra, Mini 4K) via le Play Store. Non sur le player de la Freebox Révolution, qui n'accepte pas d'applications tierces." },
      { q: "Comment regarder l'IPTV avec une Freebox Révolution ?", a: "Branchez un Fire TV Stick, un Chromecast avec Google TV ou un boîtier IPTV sur la TV, et installez-y TiviMate ou IPTV Smarters." },
      { q: "L'IPTV fonctionne-t-il avec Orange, SFR ou Bouygues ?", a: "Oui. Un abonnement IPTV passe par votre connexion internet et fonctionne avec tous les fournisseurs d'accès, à condition d'avoir un débit suffisant." },
    ],
    related: ["/iptv-android-tv-france", "/tivimate", "/iptv-firestick-france", "/boitier-iptv", "/blog/qu-est-ce-que-l-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "4 min",
  },
];
