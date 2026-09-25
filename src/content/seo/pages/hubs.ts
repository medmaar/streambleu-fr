import type { SeoPageData } from "../types";

const D = "2026-09-26";

export const HUB_PAGES: SeoPageData[] = [
  {
    slug: "/applications-iptv",
    group: "hubs",
    navLabel: "Applications IPTV",
    cardText: "Toutes les applications et lecteurs IPTV comparés.",
    title: "Application IPTV : les meilleurs lecteurs IPTV en 2026",
    description: "Quelle application IPTV choisir ? Comparatif des meilleurs lecteurs IPTV 2026 : IPTV Smarters Pro, TiviMate, Smart IPTV, IBO Player, VLC. Guide par appareil.",
    keywords: ["application iptv", "applications iptv", "meilleure application iptv", "meilleur appli iptv", "meilleure app iptv", "iptv player", "lecteur iptv", "iptv media player", "iptv online player", "android iptv player"],
    badge: "Hub · Applications IPTV",
    h1: "Application IPTV : quel lecteur IPTV choisir en 2026 ?",
    intro: "Une **application IPTV** (ou lecteur IPTV) est le logiciel qui lit votre abonnement sur l'écran : elle ne fournit aucune chaîne, elle affiche les flux, le guide TV et la VOD à partir de vos identifiants Xtream Codes ou d'une liste M3U. En 2026, la meilleure application IPTV dépend surtout de votre appareil : [TiviMate](/tivimate) sur Android TV et Fire TV, [IPTV Smarters Pro](/iptv-smarters-pro) sur mobile et PC, [IBO Player](/ibo-player) ou [Smart IPTV](/smart-iptv) sur Smart TV Samsung et LG.",
    tldr: [
      "Le lecteur IPTV est séparé de l'abonnement : vous pouvez changer d'application sans changer de fournisseur.",
      "Android TV / Fire TV : TiviMate reste la référence. iPhone, iPad, Apple TV : Smarters Player Lite ou IPTVX.",
      "Samsung et LG : IBO Player, Flix IPTV ou Smart IPTV, avec activation par adresse MAC.",
    ],
    image: { src: "/abonnement-iptv-france-2.webp", alt: "Application IPTV ouverte sur une Smart TV avec guide des programmes" },
    sections: [
      {
        id: "comparatif",
        h2: "Comparatif des meilleures applications IPTV",
        blocks: [
          { type: "p", text: "Voici les lecteurs IPTV les plus utilisés en France, avec les appareils sur lesquels ils existent, leur mode de connexion et leur modèle de prix." },
          {
            type: "table",
            head: ["Application", "Appareils", "Connexion", "Prix", "Idéal pour"],
            rows: [
              ["[TiviMate](/tivimate)", "Android TV, Fire TV, Google TV", "Xtream, M3U", "Gratuit + Premium", "Guide TV, enregistrement"],
              ["[IPTV Smarters Pro](/iptv-smarters-pro)", "Android, Fire TV, Windows, macOS", "Xtream, M3U", "Gratuit", "Polyvalence, multi-écran"],
              ["[Smarters Player Lite](/smarters-player-lite)", "iPhone, iPad, Apple TV, Android", "Xtream, M3U", "Gratuit", "Écosystème Apple"],
              ["[IBO Player](/ibo-player)", "Samsung, LG, Android, Fire TV", "M3U, Xtream (via site)", "Essai puis licence", "Smart TV récentes"],
              ["[Smart IPTV](/smart-iptv)", "Samsung, LG, Android", "M3U (via siptv.app)", "Activation unique", "TV LG et anciens Samsung"],
              ["[Flix IPTV](/flix-iptv)", "Samsung, LG, Android, Fire TV", "M3U, Xtream (via site)", "Essai puis licence", "Interface moderne"],
              ["[SS IPTV](/ss-iptv)", "LG, Samsung, Android", "M3U (code de connexion)", "Gratuit", "Budget zéro"],
              ["[VLC](/iptv-vlc)", "PC, Mac, Android, iOS", "M3U", "Gratuit", "Tester une liste"],
            ],
            caption: "Prix des licences : vérifiez le tarif actuel sur le site de chaque éditeur, il évolue régulièrement.",
          },
        ],
      },
      {
        id: "tous-les-lecteurs",
        h2: "Tous nos guides d'applications IPTV",
        blocks: [
          { type: "p", text: "Chaque guide détaille l'installation, la connexion avec vos identifiants et les réglages qui évitent le buffering." },
          { type: "hub", group: "apps" },
        ],
      },
      {
        id: "choisir",
        h2: "Comment choisir sa meilleure application IPTV",
        blocks: [
          { type: "p", text: "Le bon lecteur IPTV est d'abord celui qui existe sur votre appareil. Ensuite, quatre critères font la différence au quotidien :" },
          {
            type: "ul",
            items: [
              "**Le mode de connexion** : l'API Xtream Codes (URL + identifiant + mot de passe) charge automatiquement chaînes, VOD et guide TV. Une [liste M3U](/blog/m3u-iptv) fonctionne partout mais demande souvent d'ajouter l'EPG à la main.",
              "**Le guide des programmes (EPG)** : TiviMate et IBO Player affichent une grille claire sur plusieurs jours, idéale pour le replay.",
              "**Le décodage 4K / HEVC** : sur un petit boîtier, un lecteur qui exploite l'accélération matérielle évite les saccades. Lisez notre dossier [IPTV 4K](/blog/iptv-4k-france).",
              "**Le coût réel** : plusieurs lecteurs Smart TV sont payants après 7 jours d'essai. Avec un forfait 12 mois Stream Bleu, l'activation IBO Player est offerte.",
            ],
          },
          { type: "p", text: "Pour un classement détaillé et nos tests de performance, consultez aussi notre article [meilleur lecteur IPTV](/blog/meilleur-lecteur-iptv-france)." },
        ],
      },
      {
        id: "par-appareil",
        h2: "Quel lecteur IPTV pour chaque appareil ?",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Fire TV Stick", text: "TiviMate ou IPTV Smarters Pro, installés via l'app Downloader.", href: "/iptv-firestick-france" },
              { title: "Samsung TV", text: "IBO Player, Flix IPTV ou Smart IPTV selon l'année du téléviseur.", href: "/iptv-samsung-tv-france" },
              { title: "LG TV", text: "Smart IPTV, SS IPTV ou IBO Player depuis le LG Content Store.", href: "/iptv-lg-tv-france" },
              { title: "Apple TV / iPhone", text: "Smarters Player Lite, IPTVX ou iPlayTV.", href: "/iptv-apple-tv-france" },
              { title: "PC & Mac", text: "IPTV Smarters, VLC ou MyIPTV Player.", href: "/iptv-pc-mac" },
              { title: "Boîtier Android / MAG", text: "TiviMate, MyTVOnline 3 ou le portail Stalker.", href: "/boitier-iptv" },
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Quelle est la meilleure application IPTV en 2026 ?", a: "Sur Android TV, Google TV et Fire TV, TiviMate est la meilleure application IPTV grâce à son guide TV et à l'enregistrement. Sur iPhone et Apple TV, Smarters Player Lite ou IPTVX. Sur Smart TV Samsung et LG, IBO Player et Flix IPTV offrent la meilleure expérience." },
      { q: "Une application IPTV donne-t-elle accès aux chaînes ?", a: "Non. Une application IPTV est un simple lecteur. Elle a besoin d'un abonnement IPTV (identifiants Xtream Codes ou lien M3U) pour afficher des chaînes. Sans abonnement, elle reste vide." },
      { q: "Existe-t-il une application IPTV gratuite ?", a: "Oui : IPTV Smarters Pro, Smarters Player Lite, SS IPTV et VLC sont gratuits. TiviMate propose une version gratuite limitée, et IBO Player, Flix IPTV ou Smart IPTV deviennent payants après une période d'essai." },
      { q: "Peut-on utiliser le même abonnement sur plusieurs applications ?", a: "Oui, vos identifiants fonctionnent sur n'importe quel lecteur compatible Xtream Codes ou M3U. Le nombre d'écrans simultanés dépend en revanche de votre forfait : 1 connexion = 1 écran à la fois. Voir les [tarifs multi-connexions](/tarifs)." },
      { q: "Quel lecteur IPTV choisir pour une TV non connectée ?", a: "Une TV non connectée n'installe aucune application. Branchez un [boîtier IPTV](/boitier-iptv) ou une clé comme le Fire TV Stick sur le port HDMI, puis installez TiviMate ou IPTV Smarters Pro dessus." },
    ],
    related: ["/iptv-smarters-pro", "/tivimate", "/ibo-player", "/boitier-iptv", "/appareils-iptv", "/blog/m3u-iptv", "/blog/meilleur-lecteur-iptv-france", "/abonnement-iptv"],
    schema: "CollectionPage",
    datePublished: D,
    dateModified: D,
  },
  {
    slug: "/boitier-iptv",
    group: "hubs",
    navLabel: "Boîtier IPTV",
    cardText: "Box Android, MAG, Formuler, Fire TV : quel boîtier IPTV acheter.",
    title: "Boîtier IPTV : quelle box IPTV acheter en 2026 ?",
    description: "Boîtier IPTV : comparatif des meilleures box IPTV 2026 (Fire TV Stick, Formuler, MAG, Xiaomi Mi Box, Nvidia Shield). Prix, 4K, applications et conseils d'achat.",
    keywords: ["iptv boitier", "boitier iptv", "box iptv", "iptv box", "boîtier iptv", "decodeur iptv", "boitier ip tv", "meilleur box iptv", "box android iptv", "iptv box android", "boitier iptv amazon", "boitier iptv boulanger", "telecommande iptv", "iptv sur tv non connectée", "iptv nvidia shield", "ugoos am7"],
    badge: "Hub · Boîtier IPTV",
    h1: "Boîtier IPTV : le guide pour choisir la bonne box en 2026",
    intro: "Un **boîtier IPTV** est un petit décodeur que l'on branche en HDMI sur n'importe quel téléviseur pour lire un abonnement IPTV, même sur une TV non connectée. En 2026, trois familles dominent : les clés type [Fire TV Stick](/iptv-firestick-france) (dès 30 €), les box Android TV comme la [Xiaomi Mi Box](/iptv-xiaomi-mi-box) ou la Nvidia Shield, et les boîtiers IPTV dédiés comme [Formuler](/boitier-formuler) et [MAG](/iptv-mag-box-france).",
    tldr: [
      "Petit budget : Fire TV Stick 4K ou Chromecast avec Google TV, avec TiviMate ou IPTV Smarters Pro.",
      "Meilleure image et fluidité : Nvidia Shield TV, Formuler Z11 Pro Max ou Ugoos AM7.",
      "Plug-and-play pour un proche : un boîtier MAG, configuré avec une simple adresse de portail.",
    ],
    image: { src: "/abonnement-iptv-france-5.webp", alt: "Boîtier IPTV branché à un téléviseur avec télécommande" },
    sections: [
      {
        id: "types",
        h2: "Les 3 types de box IPTV",
        blocks: [
          { type: "h3", text: "1. Les clés HDMI (Fire TV Stick, Chromecast)" },
          { type: "p", text: "La solution la plus vendue en France. Une clé HDMI coûte entre 30 et 70 €, se glisse derrière la TV et fait tourner toutes les applications IPTV Android. C'est ce que la plupart des gens appellent « clé Amazon IPTV ». Limite : moins de mémoire qu'une vraie box, donc un peu moins fluide sur les grosses listes." },
          { type: "h3", text: "2. Les box Android TV / Google TV" },
          { type: "p", text: "Xiaomi Mi Box S, Nvidia Shield TV, Ugoos AM7 ou [X96 Mini](/iptv-x96-mini) : ce sont des boîtiers IPTV Android plus puissants, avec port Ethernet sur la plupart des modèles. Ils accueillent [TiviMate](/tivimate), Kodi et toutes les applications du Play Store. Préférez un modèle certifié Google (Mi Box, Shield, Chromecast) à une box générique non certifiée." },
          { type: "h3", text: "3. Les boîtiers IPTV dédiés (MAG, Formuler, Enigma2)" },
          { type: "p", text: "Les box [MAG d'Infomir](/iptv-mag-box-france) se configurent avec une adresse de portail et l'adresse MAC du boîtier : idéal pour un parent qui veut une télécommande simple. Les [Formuler](/boitier-formuler) combinent Android et l'application MyTVOnline 3, pensée pour l'IPTV. Les récepteurs [Enigma2](/iptv-enigma2) (Dreambox, Amiko, Xsarius) visent les passionnés de satellite." },
        ],
      },
      {
        id: "comparatif",
        h2: "Comparatif des meilleurs boîtiers IPTV",
        blocks: [
          {
            type: "table",
            head: ["Boîtier", "Système", "4K / HEVC", "Ethernet", "Prix indicatif"],
            rows: [
              ["[Fire TV Stick 4K](/iptv-firestick-france)", "Fire OS", "Oui", "Adaptateur", "30–70 €"],
              ["[Chromecast / Google TV Streamer](/iptv-chromecast-france)", "Google TV", "Oui", "Adaptateur / Oui", "40–120 €"],
              ["[Xiaomi Mi Box S](/iptv-xiaomi-mi-box)", "Google TV", "Oui", "Non", "60–80 €"],
              ["Nvidia Shield TV", "Android TV", "Oui", "Oui", "150–230 €"],
              ["[Formuler Z11 Pro Max](/boitier-formuler)", "Android TV + MyTVOnline 3", "Oui", "Oui", "130–170 €"],
              ["[MAG 520 / 524](/iptv-mag-box-france)", "Linux (Stalker)", "Oui", "Oui", "70–100 €"],
              ["[X96 Mini](/iptv-x96-mini)", "Android (non certifié)", "Oui", "Oui", "25–40 €"],
            ],
            caption: "Prix indicatifs en France, variables selon le revendeur et les promotions.",
          },
        ],
      },
      {
        id: "guides-boitiers",
        h2: "Nos guides boîtier par boîtier",
        blocks: [{ type: "hub", group: "boxes" }],
      },
      {
        id: "acheter",
        h2: "Où acheter un boîtier IPTV (Amazon, Boulanger…) ?",
        blocks: [
          { type: "p", text: "Les boîtiers Fire TV, Chromecast, Xiaomi et Nvidia se trouvent chez Amazon, Boulanger, Fnac ou Darty. Les Formuler et MAG sont vendus par des revendeurs spécialisés. Méfiez-vous des « box IPTV avec chaînes à vie » vendues sur les marketplaces : le boîtier est légal, mais l'abonnement préinstallé est généralement une offre sans garantie. Notre article [IPTV à vie](/blog/iptv-a-vie) explique pourquoi." },
          { type: "p", text: "Un boîtier IPTV n'inclut jamais de chaînes : il vous faut en plus un [abonnement IPTV](/abonnement-iptv). Si votre télécommande IPTV ne répond plus, vérifiez d'abord les piles puis réappairez-la (appui long sur Home sur Fire TV, Home + Retour sur Google TV)." },
        ],
      },
    ],
    faq: [
      { q: "Quel est le meilleur boîtier IPTV en 2026 ?", a: "Pour la majorité des foyers, le Fire TV Stick 4K Max ou le Chromecast avec Google TV offrent le meilleur rapport qualité-prix. Pour la fluidité maximale et la 4K HDR, la Nvidia Shield TV et le Formuler Z11 Pro Max restent au-dessus." },
      { q: "Peut-on regarder l'IPTV sur une TV non connectée ?", a: "Oui. Il suffit de brancher un boîtier IPTV ou une clé HDMI sur la TV : c'est le boîtier qui se connecte à internet et lit l'abonnement. Une TV avec un port HDMI suffit." },
      { q: "Un décodeur IPTV fonctionne-t-il sans abonnement ?", a: "Non. Le décodeur IPTV lit le flux mais ne fournit pas les chaînes. Il faut un abonnement IPTV avec des identifiants Xtream Codes, un lien M3U ou un portail MAG." },
      { q: "Box Android ou boîtier MAG : que choisir ?", a: "Une box Android accepte toutes les applications (TiviMate, Kodi, YouTube, Netflix selon certification). Un boîtier MAG est plus simple et stable mais limité à l'IPTV. Pour un usage familial polyvalent, choisissez Android ; pour un proche peu technophile, un MAG." },
      { q: "Faut-il un boîtier en Ethernet ou en Wi-Fi ?", a: "L'Ethernet est plus stable, surtout en 4K. En Wi-Fi 5 GHz, un débit réel de 25 Mbit/s suffit généralement. Voir notre guide [IPTV Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet)." },
    ],
    related: ["/iptv-firestick-france", "/boitier-formuler", "/iptv-mag-box-france", "/iptv-xiaomi-mi-box", "/applications-iptv", "/appareils-iptv", "/blog/iptv-wifi-ou-ethernet", "/abonnement-iptv"],
    schema: "CollectionPage",
    datePublished: D,
    dateModified: D,
  },
  {
    slug: "/appareils-iptv",
    group: "hubs",
    navLabel: "Appareils IPTV",
    cardText: "Smart TV, mobile, PC, console : l'IPTV sur tous vos écrans.",
    title: "IPTV sur tous vos appareils : Smart TV, PC, mobile",
    description: "Installer l'IPTV sur Smart TV Samsung, LG, Android TV, Apple TV, iPhone, PC, Mac ou PS5 : tous nos guides d'installation IPTV par appareil, étape par étape.",
    keywords: ["iptv sur smart tv", "iptv appareil", "iptv tv", "ip tv smart tv", "iptv mobile", "iptv telephone"],
    badge: "Hub · Appareils",
    h1: "IPTV sur tous vos appareils : les guides d'installation",
    intro: "L'**IPTV fonctionne sur presque tous les écrans** : Smart TV Samsung et LG, Android TV, Apple TV, iPhone, smartphone Android, PC, Mac, et même via un boîtier sur une TV non connectée. Il suffit d'installer une [application IPTV](/applications-iptv) compatible puis d'y saisir vos identifiants. Choisissez votre appareil ci-dessous : chaque guide prend moins de 10 minutes.",
    tldr: [
      "Smart TV : installez un lecteur depuis la boutique de la TV (IBO Player, Smart IPTV, Flix IPTV).",
      "Mobile et tablette : IPTV Smarters Pro sur Android, Smarters Player Lite sur iPhone et iPad.",
      "Ancienne TV ou TV non connectée : ajoutez un Fire TV Stick ou un boîtier IPTV en HDMI.",
    ],
    sections: [
      {
        id: "tv-et-mobiles",
        h2: "Smart TV, mobiles et ordinateurs",
        blocks: [{ type: "hub", group: "devices" }],
      },
      {
        id: "boitiers",
        h2: "Clés HDMI et boîtiers IPTV",
        blocks: [
          { type: "p", text: "Pas de Smart TV ou une TV trop ancienne ? Ces boîtiers transforment n'importe quel écran HDMI en TV IPTV. Comparatif complet sur notre page [boîtier IPTV](/boitier-iptv)." },
          { type: "hub", group: "boxes" },
        ],
      },
      {
        id: "tableau",
        h2: "Quelle application installer sur quel appareil ?",
        blocks: [
          {
            type: "table",
            head: ["Appareil", "Application conseillée", "Alternative"],
            rows: [
              ["Samsung (Tizen)", "[IBO Player](/ibo-player)", "[Flix IPTV](/flix-iptv)"],
              ["LG (webOS)", "[Smart IPTV](/smart-iptv)", "[SS IPTV](/ss-iptv)"],
              ["Android TV / Google TV", "[TiviMate](/tivimate)", "[IPTV Smarters Pro](/iptv-smarters-pro)"],
              ["Fire TV Stick", "[TiviMate](/tivimate)", "[IPTV Smarters Pro](/iptv-smarters-pro)"],
              ["iPhone / iPad / Apple TV", "[Smarters Player Lite](/smarters-player-lite)", "IPTVX, iPlayTV"],
              ["PC / Mac", "[IPTV Smarters](/iptv-pc-mac)", "[VLC](/iptv-vlc)"],
              ["Boîtier MAG", "Portail intégré", "[STBEmu](/stbemu) (sur Android)"],
            ],
          },
          { type: "p", text: "Tous ces lecteurs fonctionnent avec un [abonnement IPTV Stream Bleu](/abonnement-iptv) : vous recevez à la fois vos identifiants Xtream Codes et votre lien M3U." },
        ],
      },
    ],
    faq: [
      { q: "Sur quels appareils fonctionne l'IPTV ?", a: "L'IPTV fonctionne sur Smart TV Samsung, LG, Sony, Philips, TCL et Hisense, sur Android TV, Google TV, Fire TV Stick, Apple TV, iPhone, iPad, smartphones Android, PC Windows, Mac, boîtiers MAG et Formuler, et via Kodi ou VLC." },
      { q: "Peut-on regarder l'IPTV sur plusieurs appareils ?", a: "Oui. Vous pouvez installer l'application sur autant d'appareils que vous voulez, mais le nombre d'écrans utilisés en même temps dépend du nombre de connexions de votre forfait." },
      { q: "Faut-il une Smart TV pour l'IPTV ?", a: "Non. Toute TV avec un port HDMI suffit si vous ajoutez un Fire TV Stick, un Chromecast ou un boîtier IPTV. C'est souvent plus fluide que l'application intégrée d'une Smart TV d'entrée de gamme." },
      { q: "Peut-on regarder l'IPTV sur son téléphone ?", a: "Oui, avec IPTV Smarters Pro sur Android ou Smarters Player Lite sur iPhone. En 4G/5G, prévoyez environ 3 à 5 Go de données par heure en HD." },
    ],
    related: ["/applications-iptv", "/boitier-iptv", "/iptv-samsung-tv-france", "/iptv-lg-tv-france", "/iptv-firestick-france", "/iptv-pc-mac", "/essai-gratuit", "/tarifs"],
    schema: "CollectionPage",
    datePublished: D,
    dateModified: D,
  },
];
