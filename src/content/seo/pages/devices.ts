import type { SeoPageData } from "../types";

const D = "2026-09-26";
const OLD = "2026-05-23";

export const DEVICE_PAGES: SeoPageData[] = [
  // ── Samsung ────────────────────────────────────────────────────
  {
    slug: "/iptv-samsung-tv-france",
    group: "devices",
    navLabel: "IPTV Samsung TV",
    cardText: "Tizen : IBO Player, Flix IPTV, Smart IPTV et solutions.",
    title: "IPTV Samsung TV : installer l'IPTV sur Smart TV Tizen",
    description: "IPTV sur Samsung Smart TV (Tizen) : meilleures applications (IBO Player, Flix IPTV, Smart IPTV), installation pas à pas, IPTV Smarters absent et solutions.",
    keywords: ["iptv samsung", "iptv samsung tv", "ip tv samsung", "iptv sur samsung", "iptv sur tv samsung", "smart iptv samsung", "iptv samsung smart tv", "iptv samsung tizen", "iptv tizen", "smart iptv tizen", "iptv smasters pro samsung tv", "iptv smasters pro ne fonctionne pas sur tv samsung", "iptv smasters samsung", "iptv smasters samsung tv", "iptv smasters tv samsung", "smasters iptv samsung", "smasters pro samsung", "smasters player samsung", "xciptv samsung", "xciptv samsung tv", "tivimate samsung"],
    badge: "Appareil · Samsung Tizen",
    h1: "IPTV sur Samsung TV : les applications qui fonctionnent en 2026",
    intro: "Pour regarder l'**IPTV sur une TV Samsung**, installez un lecteur depuis le Smart Hub (système Tizen) : **IBO Player** et **Flix IPTV** sont les plus fiables en 2026, Smart IPTV reste possible sur certains modèles. IPTV Smarters Pro et TiviMate, eux, sont souvent absents de la boutique Samsung : c'est pourquoi tant d'utilisateurs voient « IPTV Smarters ne fonctionne pas sur TV Samsung ». Dans ce cas, un Fire TV Stick règle tout.",
    tldr: [
      "Meilleur choix sur Samsung : [IBO Player](/ibo-player) (offert avec le forfait 12 mois).",
      "Alternatives : [Flix IPTV](/flix-iptv), [Smart IPTV](/smart-iptv) selon l'année du téléviseur.",
      "Besoin de TiviMate ou Smarters ? Branchez un [Fire TV Stick](/iptv-firestick-france).",
    ],
    image: { src: "/abonnement-iptv-france-4.webp", alt: "Application IPTV installée sur une Smart TV Samsung" },
    sections: [
      {
        id: "applications",
        h2: "Quelle application IPTV sur Samsung TV ?",
        blocks: [
          {
            type: "table",
            head: ["Application", "Dispo. Samsung", "Connexion", "Coût"],
            rows: [
              ["[IBO Player](/ibo-player)", "Oui (Smart Hub)", "M3U / Xtream via site", "Licence après essai"],
              ["[Flix IPTV](/flix-iptv)", "Oui", "M3U via site", "Licence après essai"],
              ["[Smart IPTV](/smart-iptv)", "Selon modèle / USB", "M3U via siptv.app", "Activation unique"],
              ["[IPTV Smarters Pro](/iptv-smarters-pro)", "Rarement", "Xtream / M3U", "Gratuit"],
              ["[TiviMate](/tivimate)", "Non", "—", "—"],
            ],
          },
        ],
      },
      {
        id: "installation",
        h2: "Installer l'IPTV sur Samsung TV en 4 étapes",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez le Smart Hub", text: "Touche Home → Applications → loupe de recherche." },
              { title: "Installez IBO Player", text: "Tapez « IBO Player », installez, puis ouvrez l'application." },
              { title: "Relevez MAC et device key", text: "Elles s'affichent à l'écran d'accueil de l'app." },
              { title: "Ajoutez votre playlist en ligne", text: "Sur le site d'IBO Player, saisissez MAC + key et votre lien M3U ou vos identifiants Xtream Stream Bleu, puis rechargez l'app." },
            ],
          },
        ],
      },
      {
        id: "smarters-samsung",
        h2: "IPTV Smarters Pro ne fonctionne pas sur TV Samsung ?",
        blocks: [
          { type: "p", text: "C'est la question la plus fréquente. La version Samsung d'IPTV Smarters n'est pas proposée sur la majorité des modèles récents, et les tutoriels qui la montrent datent souvent. Trois solutions :" },
          {
            type: "ol",
            items: [
              "Utiliser [IBO Player](/ibo-player) ou [Flix IPTV](/flix-iptv), qui offrent une interface équivalente.",
              "Brancher un [Fire TV Stick](/iptv-firestick-france) ou un [Chromecast avec Google TV](/iptv-chromecast-france) et y installer IPTV Smarters ou TiviMate.",
              "Sur un modèle ancien, installer [Smart IPTV](/smart-iptv) par clé USB si votre année de TV le permet.",
            ],
          },
        ],
      },
      {
        id: "reglages",
        h2: "Réglages Samsung pour une image IPTV parfaite",
        blocks: [
          {
            type: "ul",
            items: [
              "Branchez la TV en **Ethernet** si possible, sinon Wi-Fi 5 GHz.",
              "Désactivez l'« Auto Motion Plus » sur le sport si vous voyez un effet de flou artificiel.",
              "Mettez à jour le logiciel de la TV (Paramètres → Assistance → Mise à jour du logiciel).",
            ],
          },
          { type: "p", text: "Même méthode sur les autres Smart TV : voir [IPTV sur Smart TV](/iptv-smart-tv-france) et [IPTV sur LG](/iptv-lg-tv-france)." },
        ],
      },
    ],
    faq: [
      { q: "Quelle est la meilleure application IPTV pour Samsung ?", a: "IBO Player est le choix le plus fiable sur Samsung Tizen en 2026. Flix IPTV est une bonne alternative, et Smart IPTV reste utilisable sur certains modèles plus anciens." },
      { q: "Pourquoi IPTV Smarters Pro n'est pas sur ma TV Samsung ?", a: "L'application n'est pas proposée dans le Smart Hub de la plupart des Samsung récents. Utilisez IBO Player ou Flix IPTV, ou branchez un Fire TV Stick pour installer Smarters." },
      { q: "Peut-on installer TiviMate sur une TV Samsung ?", a: "Non, TiviMate n'existe que sur Android. Sur Samsung, passez par un Fire TV Stick ou une box Android TV branchée en HDMI." },
      { q: "L'IPTV fonctionne-t-il sur les anciennes Samsung (avant 2017) ?", a: "Les modèles anciens ont un store limité. La solution la plus simple est un Fire TV Stick ou un Chromecast branché en HDMI." },
      { q: "Faut-il payer pour regarder l'IPTV sur Samsung ?", a: "Il faut un abonnement IPTV, et la plupart des lecteurs Samsung demandent une licence après l'essai. Avec le forfait 12 mois Stream Bleu, l'activation IBO Player est offerte." },
    ],
    related: ["/ibo-player", "/flix-iptv", "/smart-iptv", "/iptv-lg-tv-france", "/iptv-smart-tv-france", "/iptv-firestick-france", "/appareils-iptv", "/tarifs"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "6 min",
  },

  // ── LG ─────────────────────────────────────────────────────────
  {
    slug: "/iptv-lg-tv-france",
    group: "devices",
    navLabel: "IPTV LG TV",
    cardText: "webOS : Smart IPTV, SS IPTV, IBO Player sur TV LG.",
    title: "IPTV LG TV : installer l'IPTV sur Smart TV webOS",
    description: "IPTV sur TV LG webOS : Smart IPTV, SS IPTV, IBO Player et Flix IPTV. Installation depuis le LG Content Store, ajout de la playlist et solutions aux problèmes.",
    keywords: ["iptv lg", "ip tv lg", "iptv tv lg", "iptv lg smart", "iptv lg webos", "iptv smasters lg", "iptv smasters lg tv", "iptv smasters pro lg", "iptv smasters pro lg tv", "iptv smasters player lg", "tivimate lg", "tivimate lg tv"],
    badge: "Appareil · LG webOS",
    h1: "IPTV sur TV LG : installation sur webOS pas à pas",
    intro: "Les **TV LG sous webOS** figurent parmi les meilleurs téléviseurs pour l'IPTV : le **LG Content Store** propose plusieurs lecteurs fiables, dont [Smart IPTV](/smart-iptv), [SS IPTV](/ss-iptv), [IBO Player](/ibo-player) et [Flix IPTV](/flix-iptv). On installe l'application, on relève l'adresse MAC, puis on envoie sa playlist depuis un téléphone. TiviMate, lui, n'existe pas sur LG.",
    sections: [
      {
        id: "applications",
        h2: "Les meilleures applications IPTV pour LG",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Smart IPTV", text: "Léger et très stable sur webOS. Activation unique.", href: "/smart-iptv" },
              { title: "IBO Player", text: "Interface moderne, VOD et séries bien classées.", href: "/ibo-player" },
              { title: "SS IPTV", text: "Gratuit, playlist par lien ou code.", href: "/ss-iptv" },
              { title: "Flix IPTV", text: "Look « plateforme de streaming », sous-titres.", href: "/flix-iptv" },
            ],
          },
        ],
      },
      {
        id: "installation",
        h2: "Installer l'IPTV sur une TV LG",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez le LG Content Store", text: "Touche Home → LG Content Store (ou « Applications »)." },
              { title: "Recherchez et installez le lecteur", text: "Par exemple « Smart IPTV » ou « IBO Player »." },
              { title: "Relevez l'adresse MAC", text: "Elle s'affiche au lancement de l'application." },
              { title: "Envoyez votre playlist", text: "Depuis votre téléphone, sur le site officiel du lecteur : MAC + lien M3U Stream Bleu. Relancez l'application." },
            ],
          },
        ],
      },
      {
        id: "problemes",
        h2: "Problèmes courants sur LG",
        blocks: [
          {
            type: "ul",
            items: [
              "**L'app n'apparaît pas dans le store** : votre version de webOS est trop ancienne ; mettez la TV à jour ou utilisez un boîtier.",
              "**Chaînes qui coupent** : désactivez le « Quick Start+ » puis redémarrez complètement la TV (débrancher 30 s).",
              "**Pas de TiviMate ni d'IPTV Smarters** : branchez un [Fire TV Stick](/iptv-firestick-france).",
            ],
          },
          { type: "p", text: "Guides associés : [IPTV sur Samsung TV](/iptv-samsung-tv-france), [IPTV sur Smart TV](/iptv-smart-tv-france)." },
        ],
      },
    ],
    faq: [
      { q: "Quelle application IPTV installer sur une TV LG ?", a: "Smart IPTV et IBO Player sont les plus fiables sur webOS. SS IPTV est une option gratuite, Flix IPTV une alternative moderne." },
      { q: "IPTV Smarters Pro fonctionne-t-il sur LG ?", a: "Sa disponibilité sur le LG Content Store varie selon les modèles et les pays. Si vous ne le trouvez pas, IBO Player offre une interface très proche." },
      { q: "TiviMate existe-t-il sur LG ?", a: "Non. TiviMate est réservé à Android. Utilisez un Fire TV Stick ou une box Android TV branchée à la TV LG." },
      { q: "Comment trouver l'adresse MAC de ma TV LG ?", a: "Le lecteur IPTV l'affiche au démarrage. Vous la trouvez aussi dans Paramètres → Général → À propos de ce téléviseur → Réseau." },
    ],
    related: ["/smart-iptv", "/ibo-player", "/ss-iptv", "/flix-iptv", "/iptv-samsung-tv-france", "/iptv-smart-tv-france", "/appareils-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "5 min",
  },

  // ── Smart TV (generic) ─────────────────────────────────────────
  {
    slug: "/iptv-smart-tv-france",
    group: "devices",
    navLabel: "IPTV Smart TV",
    cardText: "Sony, Philips, TCL, Panasonic… l'IPTV sur toutes les Smart TV.",
    title: "IPTV Smart TV : installer l'IPTV sur toutes les marques",
    description: "IPTV sur Smart TV : Samsung, LG, Sony, Philips, TCL, Panasonic, Hisense. Quelle application installer selon le système (Tizen, webOS, Android TV, VIDAA).",
    keywords: ["iptv sur smart tv", "ip tv smart tv", "iptv smart tv", "iptv philips", "iptv sony", "iptv tcl", "iptv panasonic", "smart iptv philips", "smart iptv sony", "iptv smasters smart tv", "iptv smasters pro smart tv", "iptv stream player smart tv"],
    badge: "Appareil · Smart TV",
    h1: "IPTV sur Smart TV : la bonne application selon votre marque",
    intro: "Pour installer l'**IPTV sur une Smart TV**, il faut d'abord connaître son système : **Tizen** (Samsung), **webOS** (LG), **Android TV / Google TV** (Sony, Philips, TCL, Xiaomi), **VIDAA** (Hisense) ou un système maison (Panasonic My Home Screen). Chaque système a ses lecteurs IPTV. Le tableau ci-dessous vous dit quoi installer en 30 secondes.",
    sections: [
      {
        id: "marques",
        h2: "Quelle application IPTV pour votre Smart TV ?",
        blocks: [
          {
            type: "table",
            head: ["Marque", "Système", "Application conseillée", "Guide"],
            rows: [
              ["Samsung", "Tizen", "IBO Player, Flix IPTV", "[IPTV Samsung](/iptv-samsung-tv-france)"],
              ["LG", "webOS", "Smart IPTV, IBO Player", "[IPTV LG](/iptv-lg-tv-france)"],
              ["Sony, Philips, TCL", "Android TV / Google TV", "TiviMate, Smarters Player Lite", "[IPTV Android TV](/iptv-android-tv-france)"],
              ["Hisense", "VIDAA", "Lecteurs du store VIDAA", "[IPTV VIDAA](/iptv-hisense-vidaa)"],
              ["Panasonic", "My Home Screen", "Choix limité", "Clé HDMI conseillée"],
              ["Philips (anciens)", "Saphi", "Choix limité", "Clé HDMI conseillée"],
            ],
          },
        ],
      },
      {
        id: "etapes",
        h2: "La méthode universelle en 4 étapes",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Identifiez le système de la TV", text: "Paramètres → À propos, ou le nom de la boutique d'applications." },
              { title: "Installez le lecteur conseillé", text: "Depuis la boutique officielle de la TV." },
              { title: "Ajoutez votre abonnement", text: "Identifiants Xtream Codes (Android TV) ou lien M3U + adresse MAC (Samsung, LG, VIDAA)." },
              { title: "Testez avant d'acheter", text: "Profitez de notre [essai gratuit 24h](/essai-gratuit) pendant l'essai gratuit du lecteur." },
            ],
          },
          { type: "p", text: "Guide pas à pas avec captures : [installer l'IPTV sur Smart TV](/blog/comment-installer-iptv-smart-tv)." },
        ],
      },
      {
        id: "cle",
        h2: "Pourquoi une clé HDMI est parfois meilleure",
        blocks: [
          { type: "p", text: "Sur les Smart TV d'entrée de gamme, le processeur et la mémoire sont limités : le zapping peut être lent. Un [Fire TV Stick](/iptv-firestick-france) ou un [Chromecast](/iptv-chromecast-france) à 40 € donne accès à [TiviMate](/tivimate) et rend souvent l'expérience plus fluide qu'une application intégrée. Toutes les options : [boîtier IPTV](/boitier-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Toutes les Smart TV peuvent-elles lire l'IPTV ?", a: "Presque toutes, à condition qu'un lecteur IPTV existe dans leur boutique. Sinon, une clé HDMI (Fire TV Stick, Chromecast) résout le problème pour quelques dizaines d'euros." },
      { q: "Quelle application IPTV sur TV Sony ou Philips ?", a: "Les Sony et Philips récentes sont sous Android TV ou Google TV : installez TiviMate ou Smarters Player Lite depuis le Play Store." },
      { q: "Quelle application IPTV sur TV TCL ?", a: "Les TCL sous Google TV ou Android TV acceptent TiviMate et Smarters Player Lite. Les modèles Roku TV ou autres systèmes sont plus limités." },
      { q: "Faut-il une TV 4K pour l'IPTV ?", a: "Non. L'IPTV fonctionne en HD sur n'importe quelle TV. Une TV 4K permet simplement de profiter des chaînes et films en Ultra HD." },
    ],
    related: ["/iptv-samsung-tv-france", "/iptv-lg-tv-france", "/iptv-android-tv-france", "/iptv-hisense-vidaa", "/blog/comment-installer-iptv-smart-tv", "/appareils-iptv", "/applications-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "5 min",
  },

  // ── Android TV ─────────────────────────────────────────────────
  {
    slug: "/iptv-android-tv-france",
    group: "devices",
    navLabel: "IPTV Android TV",
    cardText: "Google TV, Sony, Philips, Shield : TiviMate en 2 minutes.",
    title: "IPTV Android TV et Google TV : installation complète",
    description: "IPTV sur Android TV et Google TV (Sony, Philips, TCL, Nvidia Shield, Chromecast) : installer TiviMate ou Smarters Player Lite, réglages et astuces 4K.",
    keywords: ["iptv android tv", "iptv google tv", "smart iptv android tv", "iptv smarters android tv", "iptv smasters pro android tv", "smarters player lite android tv", "lxtream android tv", "iptv nvidia shield", "iptvx android", "nokia streaming box 8000 iptv"],
    badge: "Appareil · Android TV",
    h1: "IPTV sur Android TV et Google TV : le guide complet",
    intro: "**Android TV et Google TV** sont les systèmes les plus simples pour l'IPTV : le Google Play Store y propose directement [TiviMate](/tivimate), [Smarters Player Lite](/smarters-player-lite) et d'autres lecteurs, sans manipulation technique. Cela concerne les TV Sony, Philips, TCL, Xiaomi, ainsi que les boîtiers Nvidia Shield, Chromecast avec Google TV et Xiaomi Mi Box.",
    sections: [
      {
        id: "installation",
        h2: "Installer l'IPTV sur Android TV",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez le Play Store", text: "Onglet Applications → Rechercher." },
              { title: "Installez TiviMate", text: "Ou Smarters Player Lite si vous voulez une application 100 % gratuite." },
              { title: "Ajoutez la playlist", text: "« Ajouter une playlist » → Xtream Codes → URL, identifiant, mot de passe Stream Bleu." },
              { title: "Activez le guide TV", text: "L'EPG se charge automatiquement en mode Xtream ; patientez une minute au premier lancement." },
            ],
          },
        ],
      },
      {
        id: "appareils",
        h2: "Les meilleurs appareils Android TV pour l'IPTV",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Chromecast avec Google TV", text: "Clé abordable, Play Store complet.", href: "/iptv-chromecast-france" },
              { title: "Xiaomi Mi Box S", text: "Petit prix, 4K HDR.", href: "/iptv-xiaomi-mi-box" },
              { title: "Formuler Z11 Pro Max", text: "Boîtier IPTV dédié avec Ethernet.", href: "/boitier-formuler" },
              { title: "Freebox Pop / Ultra", text: "Player Android TV de Free.", href: "/iptv-freebox" },
            ],
          },
          { type: "p", text: "La Nvidia Shield TV reste la plus puissante (décodage et upscaling IA), idéale si vous visez la 4K sur grand écran. Distribué par certains opérateurs télécoms européens, le Nokia Streaming Box 8000 est un autre boîtier Android TV certifié Google, avec les mêmes applications IPTV disponibles sur le Play Store. Comparatif : [boîtier IPTV](/boitier-iptv)." },
        ],
      },
      {
        id: "astuces",
        h2: "Astuces pour une IPTV fluide sur Android TV",
        blocks: [
          {
            type: "ul",
            items: [
              "Dans TiviMate, laissez le **décodeur matériel** pour la 4K HEVC.",
              "Désactivez les applications qui démarrent en arrière-plan (Paramètres → Applications).",
              "Préférez l'Ethernet ou le Wi-Fi 5 GHz : voir [IPTV Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet).",
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Quelle est la meilleure application IPTV pour Android TV ?", a: "TiviMate est la meilleure application IPTV sur Android TV et Google TV. Smarters Player Lite est l'alternative gratuite." },
      { q: "Ma TV Sony ou Philips est-elle compatible ?", a: "Oui si elle fonctionne sous Android TV ou Google TV : le Play Store donne accès à TiviMate et aux autres lecteurs." },
      { q: "Google TV et Android TV, c'est pareil pour l'IPTV ?", a: "Oui. Google TV est une interface au-dessus d'Android TV : les mêmes applications IPTV s'installent depuis le Play Store." },
    ],
    related: ["/tivimate", "/smarters-player-lite", "/iptv-chromecast-france", "/iptv-xiaomi-mi-box", "/iptv-smart-tv-france", "/appareils-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "4 min",
  },

  // ── Apple TV ───────────────────────────────────────────────────
  {
    slug: "/iptv-apple-tv-france",
    group: "devices",
    navLabel: "IPTV Apple TV",
    cardText: "IPTVX, iPlayTV, Smarters Player Lite sur Apple TV 4K.",
    title: "IPTV Apple TV : meilleures apps sur Apple TV 4K (2026)",
    description: "IPTV sur Apple TV 4K : IPTVX, iPlayTV, Smarters Player Lite et GSE comparés. Installation depuis l'App Store, ajout des identifiants et réglages image.",
    keywords: ["iptv apple tv", "iptv sur apple tv", "iptv apple tv 4k", "iplaytv", "iplaytv apple tv", "iptvx apple tv", "iptvx", "iptv smasters apple tv", "iptv apple", "tivimate apple"],
    badge: "Appareil · Apple TV",
    h1: "IPTV sur Apple TV : les meilleures applications tvOS",
    intro: "Sur **Apple TV**, les lecteurs IPTV s'installent directement depuis l'App Store, sans bidouille. Les meilleurs en 2026 : **IPTVX** (interface soignée, très fluide), **iPlayTV** (payant, excellent guide TV) et **[Smarters Player Lite](/smarters-player-lite)** (gratuit). L'Apple TV 4K décode parfaitement la 4K HDR, ce qui en fait l'un des meilleurs boîtiers IPTV du marché.",
    sections: [
      {
        id: "applications",
        h2: "Comparatif des applications IPTV pour Apple TV",
        blocks: [
          {
            type: "table",
            head: ["Application", "Prix", "Xtream / M3U", "Point fort"],
            rows: [
              ["IPTVX", "Gratuit + achats intégrés", "Oui / Oui", "Interface premium, iCloud"],
              ["iPlayTV", "Payant", "Oui / Oui", "Guide TV très lisible"],
              ["[Smarters Player Lite](/smarters-player-lite)", "Gratuit", "Oui / Oui", "Même app sur iPhone"],
              ["GSE Smart IPTV", "Gratuit + options", "Oui / Oui", "Très configurable"],
            ],
          },
        ],
      },
      {
        id: "installation",
        h2: "Installer l'IPTV sur Apple TV",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez l'App Store de l'Apple TV", text: "Recherchez « IPTVX », « iPlayTV » ou « Smarters Player Lite »." },
              { title: "Installez et ouvrez l'application", text: "Choisissez l'ajout d'une playlist." },
              { title: "Saisissez vos identifiants", text: "Mode Xtream Codes de préférence. Astuce : avec IPTVX, vous pouvez saisir les identifiants sur iPhone et les synchroniser." },
              { title: "Réglez l'image", text: "Réglages → Vidéo et audio → Ajuster la plage dynamique et la fréquence : Activé." },
            ],
          },
        ],
      },
      {
        id: "tivimate",
        h2: "TiviMate sur Apple TV ?",
        blocks: [
          { type: "p", text: "TiviMate n'existe pas sur tvOS. IPTVX et iPlayTV sont les équivalents les plus proches, avec grille EPG et favoris. Pour iPhone et iPad, voir notre guide [IPTV sur iPhone](/iptv-ios-france)." },
        ],
      },
    ],
    faq: [
      { q: "Quelle est la meilleure application IPTV pour Apple TV ?", a: "IPTVX pour son interface et sa fluidité, iPlayTV pour son guide TV. Smarters Player Lite est la meilleure option gratuite." },
      { q: "iPlayTV est-il gratuit ?", a: "Non, iPlayTV est une application payante sur l'App Store. Son prix est indiqué sur sa fiche." },
      { q: "L'Apple TV lit-elle l'IPTV en 4K ?", a: "Oui, l'Apple TV 4K décode la 4K HDR (HEVC). Il faut une chaîne ou un film disponible en 4K et un débit d'environ 25 Mbit/s." },
      { q: "Peut-on utiliser le même abonnement sur Apple TV et iPhone ?", a: "Oui, avec les mêmes identifiants. Le nombre d'écrans simultanés dépend de votre forfait." },
    ],
    related: ["/smarters-player-lite", "/iptv-ios-france", "/iptv-pc-mac", "/appareils-iptv", "/blog/iptv-4k-france"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "5 min",
  },

  // ── iOS ────────────────────────────────────────────────────────
  {
    slug: "/iptv-ios-france",
    group: "devices",
    navLabel: "IPTV iPhone & iPad",
    cardText: "Smarters Player Lite, IPTVX, GSE sur iPhone et iPad.",
    title: "IPTV iPhone et iPad : meilleures applications (2026)",
    description: "IPTV sur iPhone et iPad : installer Smarters Player Lite, IPTVX ou GSE Smart IPTV, ajouter ses identifiants, caster sur la TV avec AirPlay et économiser la 4G.",
    keywords: ["iptv iphone", "iptv sur iphone", "iptv ipad", "iptv smasters iphone", "iptv smasters pro iphone", "iplaytv", "iptv telephone", "iptv mobile"],
    badge: "Appareil · iPhone & iPad",
    h1: "IPTV sur iPhone et iPad : installation et meilleures apps",
    intro: "Sur **iPhone et iPad**, l'IPTV se regarde avec une application de l'App Store : **[Smarters Player Lite](/smarters-player-lite)** (gratuit), **IPTVX** ou **GSE Smart IPTV**. On ajoute ses identifiants Xtream Codes et les chaînes apparaissent en quelques secondes. Avec **AirPlay**, vous pouvez ensuite envoyer l'image sur une Apple TV ou une TV compatible.",
    sections: [
      {
        id: "installer",
        h2: "Installer l'IPTV sur iPhone",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Téléchargez Smarters Player Lite", text: "Dans l'App Store, vérifiez l'éditeur (WHMCS Smarters)." },
              { title: "Choisissez « Login with Xtream Codes API »", text: "C'est la méthode la plus complète." },
              { title: "Copiez-collez vos identifiants", text: "Depuis l'e-mail Stream Bleu : utilisateur, mot de passe, URL." },
              { title: "Regardez ou diffusez", text: "Touchez l'icône AirPlay pour envoyer sur l'Apple TV." },
            ],
          },
        ],
      },
      {
        id: "data",
        h2: "IPTV en 4G/5G : combien de données ?",
        blocks: [
          {
            type: "table",
            head: ["Qualité", "Débit approximatif", "Données par heure"],
            rows: [
              ["SD", "2–3 Mbit/s", "≈ 1 Go"],
              ["HD 1080p", "5–8 Mbit/s", "≈ 3 Go"],
              ["4K", "15–25 Mbit/s", "≈ 7–10 Go"],
            ],
            caption: "Ordres de grandeur ; la consommation réelle dépend de la chaîne et du codec.",
          },
          { type: "p", text: "Sur mobile, choisissez la version SD ou HD des chaînes pour préserver votre forfait." },
        ],
      },
      {
        id: "autres",
        h2: "Autres appareils Apple",
        blocks: [
          { type: "p", text: "Sur la TV du salon, l'[Apple TV](/iptv-apple-tv-france) offre une meilleure expérience que le partage d'écran. Sur Mac, suivez notre guide [IPTV sur PC et Mac](/iptv-pc-mac). Et pour Android : [IPTV sur Android](/iptv-android-france)." },
        ],
      },
    ],
    faq: [
      { q: "Quelle application IPTV sur iPhone ?", a: "Smarters Player Lite (gratuit), IPTVX et GSE Smart IPTV sont les plus utilisées. Toutes fonctionnent avec un abonnement Xtream Codes ou M3U." },
      { q: "IPTV Smarters Pro existe-t-il sur iPhone ?", a: "Sur iPhone, l'application officielle s'appelle Smarters Player Lite. Elle utilise les mêmes identifiants qu'IPTV Smarters Pro." },
      { q: "Peut-on regarder l'IPTV sur iPad ?", a: "Oui, les mêmes applications fonctionnent sur iPad avec une interface adaptée au grand écran." },
      { q: "Comment mettre l'IPTV de l'iPhone sur la TV ?", a: "Avec AirPlay vers une Apple TV ou une TV compatible AirPlay 2, ou en installant directement le lecteur sur l'Apple TV pour une meilleure qualité." },
    ],
    related: ["/smarters-player-lite", "/iptv-apple-tv-france", "/iptv-android-france", "/appareils-iptv", "/essai-gratuit"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "4 min",
  },

  // ── Android phone ──────────────────────────────────────────────
  {
    slug: "/iptv-android-france",
    group: "devices",
    navLabel: "IPTV Android",
    cardText: "Smartphones et tablettes Android : les meilleurs lecteurs.",
    title: "IPTV Android : meilleur lecteur IPTV pour smartphone",
    description: "IPTV sur smartphone et tablette Android : meilleur lecteur IPTV Android (Smarters, Smarters Player Lite, VLC), installation, Chromecast et astuces batterie.",
    keywords: ["android iptv player", "iptv android", "iptv smasters pro android", "iptv smasters player android", "meilleur lecteur iptv android", "iptv telephone", "iptv mobile", "iplaytv android"],
    badge: "Appareil · Android",
    h1: "IPTV sur Android : le meilleur lecteur IPTV pour smartphone",
    intro: "Sur **smartphone et tablette Android**, le meilleur lecteur IPTV est **[IPTV Smarters Pro](/iptv-smarters-pro)** (APK officiel) ou sa version Play Store **[Smarters Player Lite](/smarters-player-lite)** : gratuits, compatibles Xtream Codes et M3U, avec VOD et guide TV. Vous pouvez ensuite diffuser l'image sur votre TV via Chromecast.",
    sections: [
      {
        id: "lecteurs",
        h2: "Les meilleurs lecteurs IPTV Android",
        blocks: [
          {
            type: "table",
            head: ["Lecteur", "Prix", "Idéal pour"],
            rows: [
              ["[IPTV Smarters Pro](/iptv-smarters-pro)", "Gratuit", "Usage complet, multi-écran"],
              ["[Smarters Player Lite](/smarters-player-lite)", "Gratuit", "Installation depuis le Play Store"],
              ["[VLC](/iptv-vlc)", "Gratuit", "Tester une liste M3U"],
              ["[IPTV Stream Player](/iptv-stream-player)", "Gratuit", "Interface minimaliste"],
            ],
          },
          { type: "p", text: "TiviMate existe sur Android mais est pensé pour la TV (télécommande) : sur téléphone, Smarters est plus pratique." },
        ],
      },
      {
        id: "installation",
        h2: "Installer l'IPTV sur un téléphone Android",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Installez Smarters Player Lite", text: "Depuis le Google Play Store." },
              { title: "Ajoutez un utilisateur", text: "Xtream Codes API : collez vos identifiants Stream Bleu." },
              { title: "Castez vers la TV (option)", text: "Icône Cast dans le lecteur, ou partage d'écran vers un [Chromecast](/iptv-chromecast-france)." },
            ],
          },
        ],
      },
      {
        id: "batterie",
        h2: "Économiser batterie et données",
        blocks: [
          {
            type: "ul",
            items: [
              "Choisissez les versions SD ou HD des chaînes en 4G/5G.",
              "Activez le décodage matériel dans les réglages du lecteur.",
              "Téléchargez l'EPG en Wi-Fi uniquement.",
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Quel est le meilleur lecteur IPTV Android ?", a: "IPTV Smarters Pro ou Smarters Player Lite pour smartphone et tablette. Sur une TV Android, TiviMate est préférable." },
      { q: "Peut-on regarder l'IPTV sur tablette Android ?", a: "Oui, avec les mêmes applications. L'interface s'adapte au grand écran." },
      { q: "L'IPTV consomme-t-il beaucoup de données mobiles ?", a: "Environ 3 Go par heure en HD et jusqu'à 7–10 Go en 4K. Privilégiez le Wi-Fi ou la qualité SD en mobilité." },
    ],
    related: ["/iptv-smarters-pro", "/smarters-player-lite", "/iptv-vlc", "/iptv-ios-france", "/appareils-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "4 min",
  },

  // ── Windows ────────────────────────────────────────────────────
  {
    slug: "/iptv-windows-france",
    group: "devices",
    navLabel: "IPTV Windows",
    cardText: "Application IPTV pour Windows 10 et 11.",
    title: "Application IPTV Windows : regarder l'IPTV sur PC",
    description: "Application IPTV pour Windows 10 et 11 : IPTV Smarters, MyIPTV Player, VLC, Kodi. Installation, ajout de la playlist, lecture 4K et solutions aux coupures.",
    keywords: ["application iptv windows", "iptv windows", "iptv player pc", "myiptv player", "perfect player pc", "iptv smarters pc", "iptv smasters pro pc", "iptv smasters pour pc", "smasters pro pc", "smasters player pro pc", "iptv stream player pc"],
    badge: "Appareil · Windows",
    h1: "Application IPTV Windows : les meilleurs lecteurs pour PC",
    intro: "Pour regarder l'**IPTV sur Windows 10 ou 11**, installez une application IPTV pour PC : **IPTV Smarters** (version Windows officielle), **MyIPTV Player** (Microsoft Store), **VLC** ou **Kodi**. Toutes lisent un abonnement Xtream Codes ou une liste M3U. Pour une vue d'ensemble PC et Mac, lisez notre guide [IPTV sur PC et Mac](/iptv-pc-mac).",
    sections: [
      {
        id: "applications",
        h2: "Les meilleures applications IPTV pour Windows",
        blocks: [
          {
            type: "table",
            head: ["Application", "Source", "Connexion", "Point fort"],
            rows: [
              ["IPTV Smarters (Windows)", "Site officiel", "Xtream / M3U", "Interface identique à la TV"],
              ["MyIPTV Player", "Microsoft Store", "M3U + EPG", "Léger, intégré à Windows"],
              ["[VLC](/iptv-vlc)", "videolan.org", "M3U", "Tester une liste"],
              ["[Kodi](/iptv-kodi-france)", "kodi.tv / Microsoft Store", "M3U via PVR", "Media center complet"],
              ["Perfect Player", "Site éditeur", "M3U + EPG", "Look décodeur TV"],
            ],
          },
        ],
      },
      {
        id: "installation",
        h2: "Installer IPTV Smarters sur Windows",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Téléchargez l'installateur officiel", text: "Sur le site de l'éditeur, section Downloads → Windows." },
              { title: "Installez", text: "Si Windows SmartScreen s'affiche, vérifiez l'éditeur avant de confirmer." },
              { title: "Ajoutez vos identifiants", text: "Login with Xtream Codes API → utilisateur, mot de passe, URL Stream Bleu." },
            ],
          },
        ],
      },
      {
        id: "tv",
        h2: "Du PC vers la TV",
        blocks: [
          { type: "p", text: "Un câble HDMI entre le PC et la TV suffit pour profiter de l'IPTV sur grand écran. Pour un usage quotidien au salon, un [boîtier IPTV](/boitier-iptv) reste plus pratique qu'un ordinateur allumé." },
        ],
      },
    ],
    faq: [
      { q: "Quelle est la meilleure application IPTV pour Windows ?", a: "IPTV Smarters pour Windows pour une interface complète, MyIPTV Player pour une app légère du Microsoft Store, et VLC pour tester une liste." },
      { q: "Peut-on installer TiviMate sur PC ?", a: "Pas officiellement : TiviMate est une application Android. Il faudrait un émulateur, ce qui est peu pratique. Préférez IPTV Smarters pour Windows." },
      { q: "L'IPTV fonctionne-t-il sur Windows 11 ?", a: "Oui, toutes les applications citées fonctionnent sur Windows 10 et Windows 11." },
    ],
    related: ["/iptv-pc-mac", "/iptv-vlc", "/iptv-kodi-france", "/iptv-smarters-pro", "/appareils-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "4 min",
  },

  // ── PC & Mac (new) ─────────────────────────────────────────────
  {
    slug: "/iptv-pc-mac",
    group: "devices",
    navLabel: "IPTV PC & Mac",
    cardText: "Regarder l'IPTV sur ordinateur, Mac et navigateur web.",
    title: "IPTV sur PC et Mac : lecteurs, web player et guide",
    description: "Regarder l'IPTV sur PC, Mac, MacBook ou navigateur : IPTV Smarters pour PC et Mac, VLC, lecteur M3U en ligne, Chrome. Installation et comparatif 2026.",
    keywords: ["iptv pc", "iptv sur pc", "iptv pour pc", "iptv player pc", "iptv sur mac", "iptv macbook", "mac iptv", "iptv laptop", "iptv smarters pc", "iptv smasters pro mac", "iptv smasters mac", "iptv smasters mac os", "iptv smasters player mac", "iptv smasters pro macbook", "iptv smasters linux", "smart iptv pc", "smart iptv mac", "tivimate pc", "tivimate mac", "iptv web", "iptv browser", "iptv chrome", "iptv smasters web", "iptv smasters pro web", "web iptv smasters", "iptv smasters online", "m3u player pc", "lecteur m3u en ligne", "m3u player online", "iptv online player", "smasters iptv pc"],
    badge: "Appareil · PC & Mac",
    h1: "IPTV sur PC et Mac : toutes les façons de regarder",
    intro: "Pour regarder l'**IPTV sur PC ou Mac**, trois options : une application à installer (**IPTV Smarters** pour Windows et macOS, **Smarters Player Lite** sur Mac App Store), un lecteur universel comme **[VLC](/iptv-vlc)**, ou un **lecteur IPTV web** dans le navigateur. L'application reste la meilleure solution : guide TV, VOD rangée et reprise de lecture.",
    tldr: [
      "Windows : IPTV Smarters (site officiel) ou MyIPTV Player (Microsoft Store).",
      "Mac : Smarters Player Lite (Mac App Store) ou IPTV Smarters pour macOS.",
      "Navigateur : pratique en dépannage, mais évitez de saisir vos identifiants sur des sites inconnus.",
    ],
    sections: [
      {
        id: "comparatif",
        h2: "Application, VLC ou lecteur web ?",
        blocks: [
          {
            type: "table",
            head: ["Solution", "Windows", "Mac", "Linux", "Guide TV"],
            rows: [
              ["IPTV Smarters", "Oui", "Oui", "Non officiel", "Oui"],
              ["[Smarters Player Lite](/smarters-player-lite)", "Non", "Oui (App Store)", "Non", "Oui"],
              ["[VLC](/iptv-vlc)", "Oui", "Oui", "Oui", "Non"],
              ["[Kodi](/iptv-kodi-france)", "Oui", "Oui", "Oui", "Oui"],
              ["Lecteur web", "Navigateur", "Navigateur", "Navigateur", "Variable"],
            ],
          },
        ],
      },
      {
        id: "mac",
        h2: "IPTV sur Mac et MacBook",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez le Mac App Store", text: "Recherchez « Smarters Player Lite » (Mac à puce Apple) ou téléchargez IPTV Smarters pour macOS sur le site officiel." },
              { title: "Ajoutez vos identifiants", text: "Xtream Codes API avec les informations Stream Bleu." },
              { title: "Plein écran et AirPlay", text: "Passez en plein écran ou envoyez l'image vers une Apple TV via AirPlay." },
            ],
          },
        ],
      },
      {
        id: "windows",
        h2: "IPTV sur PC Windows",
        blocks: [
          { type: "p", text: "Téléchargez IPTV Smarters pour Windows depuis le site de l'éditeur ou MyIPTV Player depuis le Microsoft Store. Tous les détails sont sur notre page [application IPTV Windows](/iptv-windows-france)." },
        ],
      },
      {
        id: "web",
        h2: "Lecteur IPTV web et lecteur M3U en ligne",
        blocks: [
          { type: "p", text: "Certains lecteurs IPTV fonctionnent directement dans Chrome, Edge ou Safari : on colle un lien M3U ou des identifiants Xtream et la lecture démarre. Pratique sur un ordinateur de travail, mais deux précautions :" },
          {
            type: "ul",
            items: [
              "Utilisez uniquement le lecteur web officiel d'un éditeur connu : vos identifiants transitent par le site.",
              "Beaucoup de lecteurs web ne lisent pas certains formats (flux .ts) ou les flux non sécurisés (http) à cause des restrictions du navigateur.",
            ],
          },
          { type: "p", text: "Pour comprendre les formats de liste, lisez notre guide [M3U IPTV](/blog/m3u-iptv)." },
        ],
      },
      {
        id: "tivimate-pc",
        h2: "TiviMate sur PC ou Mac ?",
        blocks: [
          { type: "p", text: "[TiviMate](/tivimate) n'existe que sur Android. Le faire tourner sur PC via un émulateur Android est possible mais lourd et instable. Sur ordinateur, IPTV Smarters offre une expérience plus proche et plus fiable." },
        ],
      },
    ],
    faq: [
      { q: "Comment regarder l'IPTV sur PC ?", a: "Installez IPTV Smarters pour Windows ou MyIPTV Player, ajoutez vos identifiants Xtream Codes ou votre lien M3U, et les chaînes s'affichent. VLC permet aussi de lire une liste M3U rapidement." },
      { q: "Quelle application IPTV pour Mac ?", a: "Smarters Player Lite (Mac App Store) ou IPTV Smarters pour macOS. VLC fonctionne aussi pour lire une liste M3U." },
      { q: "Existe-t-il un lecteur IPTV en ligne ?", a: "Oui, certains éditeurs proposent un lecteur web. Utilisez uniquement un lecteur officiel et sachez que certains flux ne sont pas lisibles dans un navigateur." },
      { q: "Peut-on regarder l'IPTV sur Linux ?", a: "Oui avec VLC ou Kodi, qui disposent de versions Linux officielles." },
    ],
    related: ["/iptv-windows-france", "/iptv-vlc", "/iptv-kodi-france", "/iptv-smarters-pro", "/smarters-player-lite", "/blog/m3u-iptv", "/appareils-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "6 min",
  },

  // ── Kodi ───────────────────────────────────────────────────────
  {
    slug: "/iptv-kodi-france",
    group: "devices",
    navLabel: "IPTV Kodi",
    cardText: "PVR IPTV Simple Client : l'IPTV dans Kodi.",
    title: "IPTV Kodi : configurer PVR IPTV Simple Client (2026)",
    description: "Configurer l'IPTV sur Kodi avec PVR IPTV Simple Client : ajouter une liste M3U, le guide TV XMLTV, régler la mise en cache. Guide pas à pas Kodi 21.",
    keywords: ["kodi iptv", "iptv kodi", "ip tv kodi", "kodi ip tv", "iptv sur kodi", "m3u kodi", "pvr iptv simple client", "jellyfin iptv", "stremio iptv"],
    badge: "Appareil · Kodi",
    h1: "IPTV sur Kodi : configurer PVR IPTV Simple Client",
    intro: "**Kodi** lit l'IPTV grâce à l'extension officielle **PVR IPTV Simple Client**. On y renseigne l'URL M3U de son abonnement et, si besoin, l'URL du guide TV (XMLTV) : les chaînes apparaissent ensuite dans le menu TV de Kodi avec une grille des programmes. Kodi fonctionne sur Windows, Mac, Linux, Android TV et Fire TV.",
    sections: [
      {
        id: "installer",
        h2: "Configurer PVR IPTV Simple Client",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Installez Kodi", text: "Depuis [kodi.tv](https://kodi.tv/download), le Play Store ou le Microsoft Store." },
              { title: "Ajoutez l'extension", text: "Extensions → Mes extensions → Clients PVR → PVR IPTV Simple Client → Installer (ou Activer)." },
              { title: "Renseignez la playlist", text: "Configurer → Général → Emplacement : Chemin distant (URL) → collez votre lien M3U Stream Bleu." },
              { title: "Ajoutez le guide TV", text: "Onglet EPG → URL XMLTV fournie avec votre abonnement." },
              { title: "Redémarrez Kodi", text: "Le menu « TV » apparaît sur l'accueil avec toutes les chaînes." },
            ],
          },
        ],
      },
      {
        id: "optimiser",
        h2: "Optimiser Kodi pour l'IPTV",
        blocks: [
          {
            type: "ul",
            items: [
              "Paramètres → Lecteur → Vidéos : activez l'accélération matérielle.",
              "Désactivez « Mettre à jour les chaînes au démarrage » si votre liste est volumineuse, et actualisez manuellement.",
              "Évitez les dépôts d'extensions non officiels : ils sont une source fréquente de logiciels malveillants et de contenus illicites.",
            ],
          },
        ],
      },
      {
        id: "alternatives",
        h2: "Kodi, Jellyfin ou un lecteur dédié ?",
        blocks: [
          { type: "p", text: "Kodi est parfait si vous l'utilisez déjà pour vos films. **Jellyfin** peut aussi intégrer une liste M3U et un guide XMLTV dans sa section TV en direct, pour un serveur multimédia familial. Pour une TV en direct pure et simple, [TiviMate](/tivimate) ou [IPTV Smarters Pro](/iptv-smarters-pro) sont plus rapides à configurer. Tous les lecteurs : [applications IPTV](/applications-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Comment ajouter l'IPTV sur Kodi ?", a: "Installez l'extension PVR IPTV Simple Client, collez votre URL M3U dans ses réglages et ajoutez l'URL du guide XMLTV. Redémarrez Kodi : le menu TV apparaît." },
      { q: "Kodi est-il légal ?", a: "Oui, Kodi est un logiciel libre et légal. Ce sont certaines extensions non officielles qui donnent accès à des contenus sans droits ; utilisez uniquement le dépôt officiel." },
      { q: "Kodi fonctionne-t-il sur Fire TV Stick ?", a: "Oui, Kodi peut s'installer sur Fire TV via Downloader. Sur Fire TV, TiviMate reste toutefois plus simple pour la TV en direct." },
      { q: "Pourquoi Kodi n'affiche pas le guide TV ?", a: "L'URL XMLTV est absente ou erronée, ou les identifiants de chaînes ne correspondent pas. Vérifiez l'onglet EPG de PVR IPTV Simple Client et relancez Kodi." },
    ],
    related: ["/iptv-vlc", "/iptv-pc-mac", "/blog/m3u-iptv", "/tivimate", "/applications-iptv", "/appareils-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "5 min",
  },

  // ── Chromecast ─────────────────────────────────────────────────
  {
    slug: "/iptv-chromecast-france",
    group: "devices",
    navLabel: "IPTV Chromecast",
    cardText: "Chromecast avec Google TV et Google TV Streamer.",
    title: "IPTV Chromecast : Google TV, installation et cast",
    description: "IPTV sur Chromecast avec Google TV et Google TV Streamer : installer TiviMate ou Smarters Player Lite, caster depuis un smartphone, réglages et astuces.",
    keywords: ["chromecast iptv", "iptv google chromecast", "iptv sur chromecast", "iptv smasters chromecast", "iptv smasters pro chromecast", "iptv google tv"],
    badge: "Appareil · Chromecast",
    h1: "IPTV sur Chromecast : Google TV et diffusion depuis le téléphone",
    intro: "Le **Chromecast avec Google TV** (et son successeur le **Google TV Streamer**) est un excellent boîtier IPTV : il donne accès au Play Store, où l'on installe [TiviMate](/tivimate) ou [Smarters Player Lite](/smarters-player-lite) directement. Les anciens Chromecast sans télécommande, eux, ne peuvent que recevoir un flux « casté » depuis un smartphone.",
    sections: [
      {
        id: "modeles",
        h2: "Quel Chromecast pour l'IPTV ?",
        blocks: [
          {
            type: "table",
            head: ["Modèle", "Applications IPTV", "Méthode"],
            rows: [
              ["Chromecast avec Google TV (HD / 4K)", "Oui", "Play Store"],
              ["Google TV Streamer", "Oui", "Play Store, port Ethernet"],
              ["Chromecast (anciennes générations)", "Non", "Cast depuis le téléphone"],
            ],
          },
        ],
      },
      {
        id: "installation",
        h2: "Installer l'IPTV sur Chromecast avec Google TV",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez « Applications » puis la recherche", text: "Tapez « TiviMate » ou « Smarters Player Lite »." },
              { title: "Installez et lancez", text: "Aucun APK à télécharger manuellement." },
              { title: "Ajoutez vos identifiants", text: "Mode Xtream Codes avec vos informations Stream Bleu." },
            ],
          },
        ],
      },
      {
        id: "cast",
        h2: "Caster l'IPTV depuis un smartphone",
        blocks: [
          { type: "p", text: "Avec un ancien Chromecast, lancez la chaîne dans [IPTV Smarters Pro](/iptv-smarters-pro) sur Android et touchez l'icône Cast. Le téléphone doit rester sur le même Wi-Fi. La qualité dépend du Wi-Fi et de l'application ; pour un usage quotidien, un Chromecast avec Google TV ou un [Fire TV Stick](/iptv-firestick-france) est plus confortable." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on installer une application IPTV sur Chromecast ?", a: "Oui sur le Chromecast avec Google TV et le Google TV Streamer, via le Play Store. Les anciens Chromecast ne font que recevoir un flux depuis un téléphone." },
      { q: "Quelle application IPTV pour Chromecast avec Google TV ?", a: "TiviMate pour la meilleure expérience TV, Smarters Player Lite pour une solution gratuite." },
      { q: "Chromecast ou Fire TV Stick pour l'IPTV ?", a: "Les deux conviennent. Le Chromecast avec Google TV a le Play Store ; le Fire TV Stick demande Downloader pour certains lecteurs mais est souvent en promotion." },
    ],
    related: ["/iptv-android-tv-france", "/iptv-firestick-france", "/tivimate", "/boitier-iptv", "/appareils-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "4 min",
  },

  // ── Roku ───────────────────────────────────────────────────────
  {
    slug: "/iptv-roku-france",
    group: "devices",
    navLabel: "IPTV Roku",
    cardText: "Roku : limites et solutions pour l'IPTV.",
    title: "IPTV Roku : peut-on regarder l'IPTV sur Roku ?",
    description: "IPTV sur Roku en France : pourquoi les lecteurs IPTV sont rares sur Roku, les solutions (lecteur M3U, recopie d'écran) et les alternatives plus simples.",
    keywords: ["iptv roku", "roku iptv", "iptv sur roku", "roku m3u"],
    badge: "Appareil · Roku",
    h1: "IPTV sur Roku : ce qui fonctionne et ce qui ne fonctionne pas",
    intro: "Regarder l'**IPTV sur Roku** est possible mais limité : la boutique Roku accepte peu de lecteurs IPTV, et il n'est pas possible d'installer d'APK comme sur Android. Les solutions : un lecteur M3U disponible dans la boutique Roku (selon les périodes), ou la recopie d'écran depuis un smartphone. Pour une vraie expérience TV, un [Fire TV Stick](/iptv-firestick-france) ou un [Chromecast](/iptv-chromecast-france) reste préférable.",
    sections: [
      {
        id: "solutions",
        h2: "Les solutions IPTV sur Roku",
        blocks: [
          {
            type: "table",
            head: ["Solution", "Qualité", "Simplicité"],
            rows: [
              ["Lecteur M3U de la boutique Roku", "Correcte", "Moyenne (disponibilité variable)"],
              ["Recopie d'écran (Android / Windows)", "Moyenne", "Simple"],
              ["Clé HDMI Android à côté du Roku", "Excellente", "Très simple"],
            ],
          },
        ],
      },
      {
        id: "recommandation",
        h2: "Notre recommandation",
        blocks: [
          { type: "p", text: "Roku est peu diffusé en France et son écosystème IPTV est pauvre. Si vous achetez un appareil pour l'IPTV, choisissez un appareil Android TV ou Fire TV : vous aurez accès à [TiviMate](/tivimate) et [IPTV Smarters Pro](/iptv-smarters-pro). Tous les choix sont comparés sur notre page [boîtier IPTV](/boitier-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on installer IPTV Smarters sur Roku ?", a: "Non, IPTV Smarters n'est pas disponible sur Roku et Roku n'accepte pas l'installation d'APK. Utilisez un Fire TV Stick ou un Chromecast avec Google TV." },
      { q: "Peut-on lire une liste M3U sur Roku ?", a: "Parfois, via un lecteur M3U de la boutique Roku, dont la disponibilité change. La recopie d'écran depuis un smartphone est une solution de secours." },
      { q: "Quel appareil acheter à la place d'un Roku ?", a: "Un Fire TV Stick 4K, un Chromecast avec Google TV ou une Xiaomi Mi Box S, tous compatibles avec les meilleurs lecteurs IPTV." },
    ],
    related: ["/iptv-firestick-france", "/iptv-chromecast-france", "/boitier-iptv", "/appareils-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: D,
    readTime: "3 min",
  },

  // ── PS5 (new) ──────────────────────────────────────────────────
  {
    slug: "/iptv-ps5",
    group: "devices",
    navLabel: "IPTV PS5",
    cardText: "PlayStation 5 et PS3 : ce qui est possible.",
    title: "IPTV sur PS5 : est-ce possible ? Solutions 2026",
    description: "IPTV sur PS5 (et PS3) : pourquoi il n'existe pas d'application IPTV sur PlayStation, les solutions de contournement possibles et la meilleure alternative simple.",
    keywords: ["iptv ps5", "iptv sur ps5", "iptv ps3", "iptv playstation"],
    badge: "Appareil · PS5",
    h1: "IPTV sur PS5 : les vraies options en 2026",
    intro: "Il n'existe **pas d'application IPTV officielle sur PS5** : le PlayStation Store ne propose ni IPTV Smarters, ni TiviMate, ni lecteur M3U. Les solutions de contournement (navigateur caché, serveur multimédia sur le réseau local) sont peu pratiques. La solution la plus simple reste de brancher un [Fire TV Stick](/iptv-firestick-france) ou un Chromecast sur la TV, à côté de la console.",
    sections: [
      {
        id: "options",
        h2: "Les options pour l'IPTV sur PlayStation",
        blocks: [
          {
            type: "table",
            head: ["Option", "Faisable ?", "Notre avis"],
            rows: [
              ["Application IPTV sur le PS Store", "Non", "N'existe pas en 2026"],
              ["Lecteur web via le navigateur caché de la PS5", "Partiellement", "Instable, pas de télécommande pratique"],
              ["Serveur multimédia (Plex/Jellyfin) sur le réseau", "Possible", "Réservé aux utilisateurs avancés"],
              ["Clé HDMI Android / Fire TV à côté", "Oui", "La solution la plus simple"],
            ],
          },
        ],
      },
      {
        id: "ps3",
        h2: "Et la PS3 ?",
        blocks: [
          { type: "p", text: "La PS3 est trop ancienne pour les flux IPTV modernes (HEVC) et son navigateur n'est plus maintenu. Une clé HDMI à 30–40 € fera bien mieux. Consultez notre [comparatif des boîtiers IPTV](/boitier-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on installer une application IPTV sur PS5 ?", a: "Non, aucune application IPTV n'est proposée sur le PlayStation Store. Il faut passer par un autre appareil, comme un Fire TV Stick branché sur la TV." },
      { q: "Peut-on regarder l'IPTV sur PS5 via le navigateur ?", a: "La PS5 a un navigateur caché accessible par des détours, mais il est peu pratique et de nombreux flux ne s'y lisent pas. Ce n'est pas une solution fiable." },
      { q: "Quelle est la meilleure alternative à la PS5 pour l'IPTV ?", a: "Un Fire TV Stick 4K ou un Chromecast avec Google TV, avec TiviMate ou IPTV Smarters Pro." },
    ],
    related: ["/iptv-firestick-france", "/iptv-chromecast-france", "/boitier-iptv", "/appareils-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "3 min",
  },

  // ── Hisense VIDAA (new) ────────────────────────────────────────
  {
    slug: "/iptv-hisense-vidaa",
    group: "devices",
    navLabel: "IPTV Hisense VIDAA",
    cardText: "TV Hisense sous VIDAA : lecteurs IPTV disponibles.",
    title: "IPTV Hisense VIDAA : installer l'IPTV sur TV Hisense",
    description: "IPTV sur TV Hisense VIDAA : quels lecteurs IPTV existent dans la boutique VIDAA, comment ajouter sa playlist et que faire si aucune application ne convient.",
    keywords: ["iptv hisense vidaa", "vidaa iptv", "iptv vidaa", "smart iptv hisense vidaa", "iptv hisense"],
    badge: "Appareil · Hisense VIDAA",
    h1: "IPTV sur Hisense VIDAA : les solutions qui marchent",
    intro: "Les **TV Hisense sous VIDAA** disposent d'une boutique d'applications plus restreinte que Samsung ou LG. Quelques lecteurs IPTV y sont proposés (la liste varie selon le modèle et le pays) : cherchez « IPTV » dans l'**App Store VIDAA**. Si aucun ne vous convient, un [Fire TV Stick](/iptv-firestick-france) branché en HDMI donne accès à [TiviMate](/tivimate) et IPTV Smarters en quelques minutes.",
    sections: [
      {
        id: "methode",
        h2: "Installer un lecteur IPTV sur VIDAA",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez l'App Store VIDAA", text: "Touche Home → App Store." },
              { title: "Recherchez « IPTV »", text: "Installez un lecteur reconnu, par exemple IBO Player s'il est proposé sur votre modèle." },
              { title: "Ajoutez votre playlist", text: "Le plus souvent via l'adresse MAC affichée par l'app et le site de l'éditeur, comme pour [IBO Player](/ibo-player)." },
            ],
          },
          { type: "p", text: "Les Hisense sous Google TV (certains modèles récents) fonctionnent comme une [Android TV](/iptv-android-tv-france) : Play Store et TiviMate disponibles." },
        ],
      },
      {
        id: "alternative",
        h2: "Aucune app ne fonctionne ? La solution",
        blocks: [
          { type: "p", text: "Une clé HDMI à moins de 50 € transforme la TV Hisense en TV IPTV complète. Voir notre [comparatif des boîtiers IPTV](/boitier-iptv) et le guide [IPTV sur Smart TV](/iptv-smart-tv-france)." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on installer l'IPTV sur une TV Hisense VIDAA ?", a: "Oui, si un lecteur IPTV est disponible dans l'App Store VIDAA de votre modèle. Sinon, branchez un Fire TV Stick ou un Chromecast avec Google TV." },
      { q: "Smart IPTV fonctionne-t-il sur Hisense VIDAA ?", a: "Smart IPTV n'est généralement pas proposé sur VIDAA. Cherchez les lecteurs disponibles dans la boutique ou utilisez une clé HDMI." },
      { q: "Comment savoir si ma TV Hisense est sous VIDAA ou Google TV ?", a: "Regardez l'écran d'accueil : un store « Google Play » indique Google TV, un « App Store » VIDAA indique VIDAA OS. La fiche technique du modèle le précise aussi." },
    ],
    related: ["/iptv-smart-tv-france", "/ibo-player", "/iptv-firestick-france", "/iptv-android-tv-france", "/appareils-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "3 min",
  },
];
