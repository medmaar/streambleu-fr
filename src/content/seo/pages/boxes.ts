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
      {
        id: "cle-amazon",
        h2: "Clé Amazon IPTV ou boîtier IPTV Amazon : que choisir ?",
        blocks: [
          { type: "p", text: "Quand on cherche « clé Amazon IPTV », « IP TV Amazon » ou « boîtier IPTV Amazon », on parle des appareils **Fire TV** d'Amazon. Il n'existe pas d'« IPTV Amazon » à proprement parler : Amazon vend le matériel, et vous y installez un lecteur IPTV puis votre abonnement." },
          {
            type: "cards",
            items: [
              { title: "Clé (Fire TV Stick)", text: "Se branche directement sur un port HDMI, alimentée par USB. La solution la plus discrète et la moins chère." },
              { title: "Boîtier (Fire TV Cube)", text: "Plus puissant, avec un port Ethernet intégré : utile si votre TV est loin de la box ou si le Wi-Fi est saturé." },
              { title: "Adaptateur Ethernet", text: "Sur un Fire TV Stick, un adaptateur Ethernet Amazon stabilise la connexion pour les soirs de match." },
            ],
          },
          { type: "p", text: "Une fois l'appareil branché, la marche à suivre est la même : [Downloader](/downloader-iptv), puis TiviMate ou IPTV Smarters Pro, puis vos identifiants. La télécommande ne répond plus ? Voir [télécommande IPTV](/telecommande-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on regarder l'IPTV sur un Fire TV Stick ?", a: "Oui. Il suffit d'installer un lecteur IPTV (TiviMate, IPTV Smarters Pro, IBO Player) avec l'application Downloader, puis d'ajouter les identifiants de votre abonnement IPTV." },
      { q: "Qu'est-ce qu'une « clé Amazon IPTV » ?", a: "C'est un Fire TV Stick sur lequel on a installé une application IPTV. La clé elle-même est un produit Amazon standard ; les chaînes viennent de votre abonnement IPTV." },
      { q: "Quel Fire TV Stick choisir pour l'IPTV 4K ?", a: "Le Fire TV Stick 4K Max : plus de mémoire vive et un meilleur Wi-Fi, ce qui rend le zapping plus fluide sur les grosses listes." },
      { q: "Faut-il un VPN sur Fire Stick pour l'IPTV ?", a: "Non, un VPN n'est pas nécessaire pour faire fonctionner l'IPTV. Il ne rend pas légal un contenu qui ne l'est pas et peut ajouter de la latence." },
      { q: "Pourquoi mon Fire Stick IPTV rame ?", a: "Le plus souvent : Wi-Fi 2,4 GHz saturé, alimentation insuffisante ou mémoire pleine. Passez en 5 GHz ou Ethernet, utilisez le bloc secteur d'origine et videz le cache." },
      { q: "Qu'est-ce qu'une clé IPTV Amazon ?", a: "C'est un Fire TV Stick d'Amazon sur lequel on installe un lecteur IPTV comme TiviMate ou IPTV Smarters Pro. La clé ne contient aucune chaîne : elle lit votre abonnement IPTV." },
      { q: "Fire TV Stick ou Fire TV Cube pour l'IPTV ?", a: "Le Fire TV Stick 4K suffit dans la plupart des salons. Le Fire TV Cube, plus puissant et équipé d'un port Ethernet, est préférable si votre Wi-Fi est faible ou si vous regardez beaucoup de 4K." },
    ],
    related: ["/downloader-iptv", "/tivimate", "/iptv-smarters-pro", "/boitier-iptv", "/iptv-chromecast-france", "/blog/iptv-firestick-france", "/abonnement-iptv", "/essai-gratuit", "/telecommande-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: "2026-10-23",
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
    keywords: ["iptv mag", "mag box iptv", "infomir mag", "mag 254", "mag 256", "mag 322", "mag 410", "mag 420w1", "mag 424", "mag 424w3", "mag 425a", "mag 520w3", "infomir mag 254", "infomir mag 322", "infomir mag 520", "tv box mag", "mag420w1", "mag425a", "tvip s box"],
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
              ["TVIP S-Box (S605/S706)", "Linux (portail Stalker)", "4K, H.265", "Alternative à MAG, même principe"],
            ],
            caption: "Les suffixes « w1 », « w3 » désignent les variantes avec Wi-Fi intégré. Les boîtiers TVIP fonctionnent sur le même principe de portail que les MAG.",
          },
          { type: "p", text: "**TVIP S-Box** est une autre marque de boîtier à portail, très proche des MAG dans son fonctionnement : adresse MAC + URL de portail, sans application à installer. La procédure ci-dessous s'applique de la même façon." },
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
      {
        id: "references",
        h2: "Infomir MAG 254, 256, 322, 420w1, 424w3, 425A, 520w3 : s'y retrouver",
        blocks: [
          { type: "p", text: "Les boîtiers MAG sont fabriqués par **Infomir**. Le chiffre indique la génération, le suffixe la variante : « w1 » ou « w3 » pour un Wi-Fi intégré, « A » pour une version Android. Un MAG 424w3 est donc un MAG 424 avec Wi-Fi, et un MAG 425A un modèle sous Android TV." },
          {
            type: "table",
            head: ["Référence recherchée", "Famille", "Pour l'IPTV en 2026"],
            rows: [
              ["MAG 254, MAG 256", "Ancienne génération Full HD", "Encore utilisable en HD H.264, pas de HEVC"],
              ["MAG 322, MAG 324", "Full HD H.265", "Bon pour la HD"],
              ["MAG 410, MAG 420, MAG 420w1, MAG 424, MAG 424w3", "4K H.265", "Bon choix 4K, Wi-Fi intégré sur les « w »"],
              ["MAG 425A", "4K sous Android TV", "Portail + applications Android"],
              ["MAG 520, MAG 520w3, MAG 524", "4K HDR", "Modèles les plus récents de la gamme"],
            ],
          },
          { type: "p", text: "Quelle que soit la référence, la configuration reste la même : URL du portail et adresse MAC du boîtier. Une télécommande de MAG perdue se remplace facilement : voir [télécommande IPTV](/telecommande-iptv). Sur Android, l'application [STBEmu](/stbemu) imite un MAG." },
        ],
      },
    ],
    faq: [
      { q: "Comment configurer l'IPTV sur un boîtier MAG ?", a: "Transmettez l'adresse MAC du boîtier à votre fournisseur, puis saisissez l'URL du portail dans Réglages système → Serveurs → Portails et redémarrez le portail." },
      { q: "Quel est le meilleur boîtier MAG en 2026 ?", a: "Le MAG 520 ou 524 pour la 4K HDR et le HEVC. Pour une TV Full HD, un MAG 322 reste suffisant et moins cher." },
      { q: "Le MAG 254 fonctionne-t-il encore ?", a: "Oui pour les chaînes en H.264, mais il ne décode pas le H.265/HEVC utilisé par de nombreuses chaînes HD et 4K. C'est un modèle à remplacer." },
      { q: "Peut-on installer TiviMate sur un MAG ?", a: "Non sur les MAG Linux. Seuls les modèles Android (comme le MAG 425A) acceptent des applications Android comme TiviMate." },
    ],
    related: ["/stbemu", "/boitier-iptv", "/boitier-formuler", "/iptv-enigma2", "/tarifs", "/essai-gratuit", "/telecommande-iptv"],
    schema: "Article",
    datePublished: OLD,
    dateModified: "2026-10-23",
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
    keywords: ["formuler z11 pro max", "box formuler", "formuler box", "formuler iptv box", "formuler tv box", "formuler z11", "formuler z11 pro", "formuler z10 pro max 4k", "formuler z10 pro max iptv", "formuler z10 se", "formuler z8", "formuler z8 pro", "formuler z8 iptv", "formuler z7", "formuler z7+", "formuler z nano", "formuler z neo", "formuler zx", "formuler z+", "iptv formuler", "formuler z8 pro 4k"],
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
          { type: "p", text: "Réglages avancés, versions et erreurs courantes : voir notre guide complet [MyTVOnline 3](/mytvonline). Le Formuler étant une box Android, vous pouvez aussi y installer [TiviMate](/tivimate) ou [IPTV Smarters Pro](/iptv-smarters-pro) si vous préférez leur interface." },
        ],
      },
      {
        id: "pourquoi",
        h2: "Formuler, MAG ou Fire TV Stick ?",
        blocks: [
          { type: "p", text: "Un Formuler coûte plus cher qu'une [clé Fire TV](/iptv-firestick-france) mais offre un vrai port Ethernet, une télécommande pensée pour la TV en direct et une application IPTV intégrée. Face à un [boîtier MAG](/iptv-mag-box-france), il ajoute toutes les applications Android (YouTube, Kodi, etc.). Vue d'ensemble dans notre guide [boîtier IPTV](/boitier-iptv)." },
        ],
      },
      {
        id: "z11-pro-max",
        h2: "Formuler Z11 Pro Max : pour qui, et que vérifier avant d'acheter ?",
        blocks: [
          { type: "p", text: "Le **Formuler Z11 Pro Max** est le modèle le plus recherché de la marque. Il vise les utilisateurs qui regardent beaucoup la TV en direct : télécommande pensée pour le zapping, port Ethernet gigabit et MyTVOnline 3 préinstallé. Avant d'acheter, vérifiez trois points sur la fiche du vendeur :" },
          {
            type: "ol",
            items: [
              "**La révision exacte** : plusieurs éditions du Z11 Pro Max existent ; la mémoire, le Wi-Fi et la version d'Android peuvent varier.",
              "**Le vendeur** : achetez chez un revendeur qui assure la garantie en France ou en Europe.",
              "**Le besoin réel** : si vous regardez surtout en HD sur une seule TV, un [Fire TV Stick 4K](/iptv-firestick-france) coûte bien moins cher.",
            ],
          },
          {
            type: "table",
            head: ["Modèle recherché", "Génération", "Conseil"],
            rows: [
              ["Formuler Z11 Pro Max, Z11 Pro, Z11", "Actuelle", "Le choix pour un usage intensif en 4K"],
              ["Formuler Z10 Pro Max 4K, Z10 SE", "Précédente", "Encore à jour pour la plupart des usages"],
              ["Formuler Z8, Z8 Pro, Z8 Pro 4K", "Ancienne", "Utilisable en HD, lent sur les grosses listes"],
              ["Formuler Z7, Z7+, Z+, ZX", "Très ancienne", "À remplacer"],
              ["Formuler Z Nano, Z Neo", "Compacts", "Appoint, chambre ou résidence secondaire"],
            ],
          },
          { type: "p", text: "Box Formuler, Formuler TV box ou Formuler IPTV box : tous ces termes désignent les mêmes boîtiers Android. Aucun n'inclut de chaînes : il faut y ajouter un abonnement IPTV, par exemple dans [MyTVOnline 3](/mytvonline)." },
        ],
      },
    ],
    faq: [
      { q: "Quel est le meilleur boîtier Formuler ?", a: "Le Formuler Z11 Pro Max est le plus performant en 2026 : Android TV 11, 4K HDR, 4 Go de RAM et MyTVOnline 3. Le Z11 Pro est une alternative moins chère." },
      { q: "Qu'est-ce que MyTVOnline ?", a: "MyTVOnline est l'application IPTV développée par Formuler pour ses boîtiers. La version 3 gère les comptes Xtream Codes, les listes M3U et les portails Stalker avec guide TV et replay." },
      { q: "Un boîtier Formuler inclut-il des chaînes ?", a: "Non. Le Formuler est un lecteur ; il faut un abonnement IPTV pour avoir des chaînes. Stream Bleu fonctionne avec MyTVOnline en Xtream Codes ou en portail." },
      { q: "Peut-on installer TiviMate sur Formuler ?", a: "Oui, les Formuler récents sont des box Android TV avec accès au Play Store : TiviMate et IPTV Smarters s'y installent normalement." },
    ],
    related: ["/mytvonline", "/iptv-mag-box-france", "/boitier-iptv", "/tivimate", "/iptv-xiaomi-mi-box", "/abonnement-iptv", "/telecommande-iptv", "/essai-gratuit"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
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
      { q: "Quelle box Xiaomi choisir pour l'IPTV ?", a: "La Xiaomi Mi Box S (et ses générations suivantes) est une box Android TV avec Play Store, idéale pour TiviMate. Le Xiaomi Mi TV Stick est moins cher mais plus limité en mémoire et en 4K selon la version." },
    ],
    related: ["/tivimate", "/iptv-android-tv-france", "/iptv-firestick-france", "/boitier-iptv", "/iptv-x96-mini"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
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
      {"id": "alternatives", "h2": "X96 Mini ou box certifiée ?", "blocks": [{"type": "table", "head": ["Critère", "X96 Mini", "Box Android TV certifiée / Fire TV"], "rows": [["Prix", "Bas", "Plus élevé"], ["Play Store officiel", "Souvent absent ou modifié", "Oui"], ["Mises à jour de sécurité", "Rares", "Régulières"], ["4K fluide", "Variable selon le modèle", "Oui sur les modèles 4K"], ["Netflix et applications de streaming en HD", "Souvent limitées", "Oui"]]}, {"type": "p", "text": "Pour l'IPTV seule, une X96 Mini peut suffire en HD. Si vous voulez aussi les applications de streaming officielles ou la 4K stable, comparez avec les [boîtiers IPTV](/boitier-iptv) et le [Fire TV Stick](/iptv-firestick-france)."}]},
    ],
    faq: [
      { q: "La X96 Mini est-elle bien pour l'IPTV ?", a: "Elle fonctionne pour un usage HD avec un budget minimal, surtout en Ethernet. Pour la 4K et une utilisation quotidienne, une box certifiée Google est plus fiable." },
      { q: "Quelle application IPTV sur X96 Mini ?", a: "IPTV Smarters Pro (gratuit et léger) ou TiviMate. Évitez de charger toute la VOD si la box n'a qu'1 Go de RAM." },
      { q: "X96 Mini ou X96Q : quelle différence ?", a: "Ce sont deux box Android génériques proches ; les caractéristiques varient selon les lots. Vérifiez la RAM (2 Go minimum conseillés) et la version d'Android avant d'acheter." },
      { q: "Une box Android IPTV pas chère suffit-elle ?", a: "Une box Android comme la X96 Mini ou la X96Q suffit pour la HD sur une liste de taille raisonnable. Pour la 4K, un Play Store officiel et des mises à jour régulières, une box certifiée Android TV ou un Fire TV Stick 4K sont plus fiables." },
    ],
    related: ["/iptv-xiaomi-mi-box", "/boitier-iptv", "/iptv-smarters-pro", "/iptv-android-tv-france"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
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
    keywords: ["iptv enigma2", "iptv dreambox", "enigma2 iptv", "amiko a6n", "amiko a9 green", "amiko a9z pro", "xsarius iptv", "xsarius pure", "xsarius pure 2", "xsarius sniper", "xsarius sniper 4k", "xsarius q3", "xsarius avant 2", "dreamtv mini ultra hd", "iptv satellite", "sansat iptv", "prosat iptv", "xsarius sniper x"],
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
      {
        id: "satellite",
        h2: "IPTV et satellite : récepteurs hybrides Xsarius, Amiko, Prosat, Sansat",
        blocks: [
          { type: "p", text: "Beaucoup de recherches « IPTV satellite » viennent de propriétaires de récepteurs satellite qui veulent ajouter l'IPTV sans changer d'appareil. C'est possible si le récepteur sait lire une liste M3U ou accepte un plugin IPTV. Selon la marque et le modèle, le système peut être Enigma2, un Linux propre au fabricant ou Android : c'est lui qui détermine la méthode." },
          {
            type: "table",
            head: ["Marque / modèles recherchés", "Ce qu'il faut vérifier", "Méthode probable"],
            rows: [
              ["Xsarius Pure, Pure 2, Sniper, Sniper 4K, Sniper X, Q3, Avant 2", "Menu IPTV ou plugin M3U dans le récepteur", "Liste M3U ou plugin selon le firmware"],
              ["Amiko A6N, A9 Green, A9Z Pro", "Système (Enigma2, Linux ou Android) indiqué dans le menu « À propos »", "Bouquet M3U, plugin ou application Android"],
              ["Prosat, Sansat", "Présence d'une rubrique IPTV ou d'une boutique d'applications", "Liste M3U ou application"],
              ["Dreambox, Vu+, DreamTV Mini Ultra HD", "Image Enigma2 installée (OpenATV, OpenPLi…)", "Bouquet M3U ou plugin Xtream (voir ci-dessus)"],
            ],
            caption: "Les possibilités varient selon le firmware : consultez la documentation de votre modèle.",
          },
          { type: "p", text: "Satellite et IPTV ne s'excluent pas : le satellite apporte les chaînes en clair sans dépendre d'internet, l'IPTV ajoute le replay, la VOD et la mobilité. Si votre récepteur ne lit pas l'IPTV, une [clé Fire TV](/iptv-firestick-france) sur une autre entrée HDMI fait l'affaire. Pour la différence entre les modes de diffusion, voir [IPTV ou câble](/blog/iptv-vs-cable-france)." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on regarder l'IPTV sur un récepteur Enigma2 ?", a: "Oui, via une liste M3U convertie en bouquets ou via un plugin Xtream Codes. Les deux méthodes fonctionnent avec un abonnement Stream Bleu." },
      { q: "Mon Amiko ou Xsarius est-il compatible IPTV ?", a: "La plupart des modèles Linux récents le sont. Vérifiez que votre image propose des plugins IPTV et que le processeur décode le HEVC pour la HD et la 4K." },
      { q: "Faut-il un plugin payant pour l'IPTV sur Enigma2 ?", a: "Non, plusieurs plugins gratuits existent dans les gestionnaires de paquets des images Enigma2 courantes." },
      { q: "Peut-on avoir l'IPTV sur un récepteur satellite ?", a: "Oui si le récepteur lit les listes M3U ou accepte un plugin IPTV, ce qui est le cas des récepteurs Enigma2 et de nombreux modèles hybrides. Sinon, ajoutez une clé HDMI sur une autre entrée de la TV." },
    ],
    related: ["/boitier-iptv", "/iptv-mag-box-france", "/boitier-formuler", "/blog/m3u-iptv", "/iptv-kodi-france"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
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
    keywords: ["iptv freebox", "télécharger iptv sur freebox révolution", "iptv freebox pop", "iptv freebox ultra", "iptv free"],
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
          { type: "p", text: "Impossible d'installer une application IPTV sur le player Révolution. La solution la plus simple : brancher un [Fire TV Stick](/iptv-firestick-france) ou un Chromecast sur une autre entrée HDMI de la TV. Même logique chez Orange, SFR ou Bouygues : les décodeurs opérateurs n'acceptent généralement pas de lecteur IPTV tiers, sauf les modèles Android TV. Détails opérateur par opérateur dans [IPTV avec Orange, SFR ou Bouygues](/iptv-orange-sfr-bouygues)." },
          { type: "p", text: "Rappel : votre abonnement IPTV passe par internet, il fonctionne quel que soit votre fournisseur d'accès (Free, Orange, SFR, Bouygues). Il ne remplace pas la TV de votre box opérateur, il s'y ajoute." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on installer une application IPTV sur la Freebox ?", a: "Oui sur les players Android TV (Pop, Ultra, Mini 4K) via le Play Store. Non sur le player de la Freebox Révolution, qui n'accepte pas d'applications tierces." },
      { q: "Comment regarder l'IPTV avec une Freebox Révolution ?", a: "Branchez un Fire TV Stick, un Chromecast avec Google TV ou un boîtier IPTV sur la TV, et installez-y TiviMate ou IPTV Smarters." },
      { q: "L'IPTV fonctionne-t-il avec Orange, SFR ou Bouygues ?", a: "Oui. Un abonnement IPTV passe par votre connexion internet et fonctionne avec tous les fournisseurs d'accès, à condition d'avoir un débit suffisant." },
      { q: "Comment télécharger une application IPTV sur Freebox Révolution ?", a: "Ce n'est pas possible : le player Révolution n'accepte pas d'applications tierces. Branchez une clé Fire TV Stick ou un Chromecast avec Google TV sur la TV et installez-y le lecteur." },
    ],
    related: ["/iptv-android-tv-france", "/tivimate", "/iptv-firestick-france", "/boitier-iptv", "/blog/qu-est-ce-que-l-iptv", "/iptv-orange-sfr-bouygues"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "4 min",
  },

  // ── Télécommande IPTV ──────────────────────────────────────────
  {
    slug: "/telecommande-iptv",
    group: "boxes",
    navLabel: "Télécommande IPTV",
    cardText: "Télécommande d'origine, universelle, air mouse ou smartphone : piloter sa box IPTV.",
    title: "Télécommande IPTV : laquelle choisir pour votre box ?",
    description: "Télécommande IPTV : remplacer celle d'une box MAG, Formuler ou Fire TV, choisir une télécommande universelle ou air mouse, utiliser son smartphone et HDMI-CEC.",
    keywords: ["telecommande iptv", "télécommande iptv", "telecommande box iptv", "telecommande mag", "telecommande fire tv", "air mouse iptv", "telecommande universelle iptv"],
    badge: "Boîtier · Télécommande",
    h1: "Télécommande IPTV : remplacer, appairer ou se passer de la télécommande",
    intro: "Une **télécommande IPTV** n'a rien de spécial : c'est celle de l'appareil qui fait tourner votre application (box Android, boîtier MAG, Formuler, Fire TV Stick ou Smart TV). Quand elle est perdue, cassée ou mal adaptée au zapping, vous avez quatre solutions : racheter le modèle d'origine, prendre une télécommande universelle ou une « air mouse », piloter la box avec la télécommande de la TV grâce au HDMI-CEC, ou utiliser votre smartphone. Ce guide vous aide à choisir selon votre appareil.",
    tldr: [
      "Fire TV Stick, Android TV, Google TV : l'application mobile officielle sert de télécommande en dépannage.",
      "Box Android sans Play Store : une air mouse (gyroscopique, avec dongle USB) est la plus pratique.",
      "Boîtier MAG ou Formuler : le modèle d'origine reste le plus sûr pour garder toutes les touches IPTV.",
    ],
    sections: [
      {
        id: "par-appareil",
        h2: "Quelle télécommande pour quel appareil IPTV ?",
        blocks: [
          {
            type: "table",
            head: ["Appareil", "Télécommande d'origine", "Alternative", "Guide"],
            rows: [
              ["Fire TV Stick", "Télécommande vocale Alexa (Bluetooth)", "Application Amazon Fire TV sur smartphone", "[IPTV Fire TV Stick](/iptv-firestick-france)"],
              ["Box Android TV / Google TV", "Télécommande Bluetooth fournie", "Application Google TV, air mouse", "[IPTV Android TV](/iptv-android-tv-france)"],
              ["Box Android générique (X96…)", "Télécommande infrarouge", "Air mouse avec dongle USB", "[Box Android IPTV](/iptv-x96-mini)"],
              ["Boîtier MAG", "Télécommande infrarouge MAG", "Télécommande de remplacement compatible MAG", "[IPTV MAG Box](/iptv-mag-box-france)"],
              ["Boîtier Formuler", "Télécommande Formuler", "Air mouse (fonctions MyTVOnline limitées)", "[Boîtier Formuler](/boitier-formuler)"],
              ["Smart TV Samsung / LG", "Télécommande de la TV", "Application officielle de la marque", "[IPTV Smart TV](/iptv-smart-tv-france)"],
            ],
            caption: "Une télécommande infrarouge doit « voir » la box : évitez de cacher le boîtier derrière la TV.",
          },
        ],
      },
      {
        id: "types",
        h2: "Universelle, air mouse ou d'origine : les différences",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "D'origine", text: "Toutes les touches fonctionnent (guide TV, favoris, touches couleur des portails MAG). La plus sûre, mais pas toujours facile à trouver pour les anciens boîtiers." },
              { title: "Universelle à apprentissage", text: "Elle copie les codes infrarouges de l'ancienne télécommande. Utile pour regrouper TV + box sur une seule télécommande, à condition d'avoir encore l'originale pour l'apprentissage." },
              { title: "Air mouse", text: "Télécommande gyroscopique avec dongle USB 2,4 GHz et souvent un clavier au dos. Idéale sur box Android pour saisir les identifiants Xtream Codes et naviguer dans les menus." },
              { title: "Smartphone", text: "Les applications officielles Amazon Fire TV et Google TV transforment le téléphone en télécommande avec clavier. Parfait en dépannage." },
            ],
          },
        ],
      },
      {
        id: "cec",
        h2: "Piloter la box avec la télécommande de la TV (HDMI-CEC)",
        blocks: [
          { type: "p", text: "La plupart des TV et des box récentes gèrent le **HDMI-CEC** : la télécommande de la TV envoie ses commandes à la box à travers le câble HDMI. Le nom change selon la marque : Anynet+ chez Samsung, SimpLink chez LG, Bravia Sync chez Sony, EasyLink chez Philips. Activez-le dans les réglages de la TV et dans ceux de la box (Fire TV : Paramètres → Affichage et sons → Contrôle des appareils HDMI CEC)." },
          { type: "p", text: "Limite : les touches spécifiques à l'IPTV (guide TV, touches couleur) ne passent pas toujours. Pour zapper vite dans [TiviMate](/tivimate) ou [IPTV Smarters Pro](/iptv-smarters-pro), les flèches et la touche OK suffisent en général." },
        ],
      },
      {
        id: "depannage",
        h2: "Télécommande IPTV qui ne répond plus : les solutions",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Changez les piles", text: "C'est la cause la plus fréquente, surtout sur les télécommandes Bluetooth dont le voyant s'allume encore." },
              { title: "Vérifiez la ligne de vue", text: "Une télécommande infrarouge (MAG, box Android d'entrée de gamme) ne traverse pas les meubles. Testez à un mètre, face à la box." },
              { title: "Ré-appairez une télécommande Bluetooth", text: "Sur Fire TV, maintenez la touche Accueil une dizaine de secondes près du Stick. Sur Android TV, passez par Paramètres → Télécommandes et accessoires." },
              { title: "Redémarrez la box", text: "Débranchez l'alimentation 30 secondes. Si la télécommande ne fonctionne toujours pas, utilisez l'application smartphone le temps d'en racheter une." },
            ],
          },
          { type: "p", text: "Si c'est l'application qui ne répond plus (écran figé, chaînes qui ne chargent pas), le problème ne vient pas de la télécommande : voir [IPTV ne fonctionne plus](/blog/iptv-ne-fonctionne-plus)." },
        ],
      },
      {
        id: "zapping",
        h2: "Bien régler les touches pour zapper",
        blocks: [
          {
            type: "ul",
            items: [
              "**TiviMate** permet d'affecter des actions aux touches (ouvrir le guide, les favoris, revenir à la chaîne précédente) dans Paramètres → Télécommande.",
              "**Haut/Bas pour changer de chaîne** : réglage disponible dans la plupart des lecteurs, pratique avec une télécommande minimaliste.",
              "**Favoris** : regroupez vos chaînes pour éviter de faire défiler des milliers d'entrées avec les flèches.",
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Quelle télécommande acheter pour une box IPTV ?", a: "Le modèle d'origine si vous avez un boîtier MAG ou Formuler, pour garder toutes les touches IPTV. Pour une box Android, une air mouse avec clavier est souvent plus pratique, surtout pour saisir les identifiants." },
      { q: "Peut-on utiliser son téléphone comme télécommande IPTV ?", a: "Oui sur Fire TV Stick (application Amazon Fire TV) et sur Android TV ou Google TV (application Google TV). Le téléphone et la box doivent être sur le même réseau Wi-Fi." },
      { q: "Une télécommande universelle fonctionne-t-elle avec une box IPTV ?", a: "Oui si la box utilise l'infrarouge et que la télécommande universelle peut apprendre ses codes. Pour une box pilotée en Bluetooth, comme le Fire TV Stick, une télécommande universelle infrarouge ne suffit pas." },
      { q: "Comment piloter la box IPTV avec la télécommande de la TV ?", a: "Activez le HDMI-CEC sur la TV (Anynet+, SimpLink, Bravia Sync ou EasyLink selon la marque) et sur la box. Les flèches et la touche OK passent alors par le câble HDMI." },
      { q: "Ma télécommande Fire TV ne répond plus, que faire ?", a: "Changez les piles, puis maintenez la touche Accueil une dizaine de secondes près du Stick pour la ré-appairer. En attendant, l'application Amazon Fire TV sur smartphone sert de télécommande." },
    ],
    related: ["/boitier-iptv", "/iptv-firestick-france", "/iptv-mag-box-france", "/boitier-formuler", "/iptv-x96-mini", "/tivimate", "/essai-gratuit"],
    schema: "Article",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readTime: "5 min",
  },

  // ── Orange, SFR, Bouygues ──────────────────────────────────────
  {
    slug: "/iptv-orange-sfr-bouygues",
    group: "boxes",
    navLabel: "IPTV Orange, SFR, Bouygues",
    cardText: "Livebox, box SFR, Bbox : installer un lecteur IPTV et comprendre les blocages.",
    title: "IPTV Orange, SFR, Bouygues : box et décodeurs compatibles",
    description: "IPTV avec Orange, SFR ou Bouygues : la TV de votre box est déjà de l'IPTV, quels décodeurs acceptent un lecteur et que signifient les blocages des FAI.",
    keywords: ["iptv orange", "iptv isp", "orange bloque iptv 2021", "iptv sfr", "iptv bouygues", "iptv livebox", "iptv bbox", "iptv fournisseur d'accès"],
    badge: "Boîtier · Box opérateur",
    h1: "IPTV avec Orange, SFR ou Bouygues : ce qui marche sur votre box",
    intro: "Bonne nouvelle pour commencer : la télévision de votre box Orange, SFR ou Bouygues est déjà de l'**IPTV**. Le décodeur reçoit les chaînes par votre ligne internet, sur un réseau géré par l'opérateur. Quand on cherche « **iptv orange** » ou « iptv isp », on veut en général savoir autre chose : peut-on ajouter un abonnement IPTV indépendant sur le décodeur de l'opérateur, et l'opérateur peut-il le bloquer ? Cette page répond aux deux questions, opérateur par opérateur. Pour Free, voir notre guide dédié [IPTV Freebox](/iptv-freebox).",
    tldr: [
      "Un abonnement IPTV passe par internet : il fonctionne avec toutes les box, quel que soit l'opérateur.",
      "Le décodeur TV de l'opérateur n'accepte un lecteur IPTV que s'il tourne sous Android TV avec le Play Store.",
      "Sinon, une [clé Fire TV](/iptv-firestick-france) ou une Smart TV compatible fait le travail.",
    ],
    sections: [
      {
        id: "isp",
        h2: "IPTV opérateur et abonnement IPTV : la différence",
        blocks: [
          {
            type: "table",
            head: ["", "TV de la box (IPTV opérateur)", "Abonnement IPTV indépendant"],
            rows: [
              ["Réseau", "Réseau géré par l'opérateur, débit réservé", "Internet ouvert (on parle aussi d'OTT)"],
              ["Appareil", "Décodeur fourni par l'opérateur", "TV, box Android, clé HDMI, mobile, PC"],
              ["Où regarder", "Uniquement à la maison, sur le décodeur (et l'appli de l'opérateur)", "Partout où il y a internet"],
              ["Chaînes", "Bouquet de l'opérateur et options payantes", "Selon le fournisseur"],
            ],
          },
          { type: "p", text: "Les deux ne s'excluent pas : beaucoup de foyers gardent la TV de leur box et ajoutent un lecteur IPTV sur une autre entrée HDMI. Pour la différence technique entre les deux modes de diffusion, lisez [OTT ou IPTV : quelle différence ?](/blog/ott-iptv)." },
        ],
      },
      {
        id: "decodeurs",
        h2: "Votre décodeur accepte-t-il un lecteur IPTV ?",
        blocks: [
          { type: "p", text: "Tout dépend du système du décodeur, pas de l'opérateur. Le test est simple : allez dans le menu des applications et cherchez le **Google Play Store**." },
          {
            type: "table",
            head: ["Situation", "Ce que vous pouvez faire", "Lecteur conseillé"],
            rows: [
              ["Décodeur sous Android TV avec Play Store (certains modèles récents chez SFR et Bouygues)", "Installer un lecteur IPTV comme sur une box Android", "[TiviMate](/tivimate), [Smarters Player Lite](/smarters-player-lite)"],
              ["Décodeur avec système propre à l'opérateur (cas courant chez Orange)", "Pas d'application tierce : utiliser un autre appareil", "Clé HDMI ou Smart TV"],
              ["Smart TV récente branchée à la box en Wi-Fi ou Ethernet", "Lecteur installé directement sur la TV", "[IBO Player](/ibo-player), [Smart IPTV](/smart-iptv)"],
            ],
            caption: "Les gammes de décodeurs changent régulièrement : vérifiez sur le vôtre la présence du Play Store.",
          },
          { type: "p", text: "Pas de Play Store ? La solution la moins chère est une [clé Fire TV Stick](/iptv-firestick-france) branchée sur la TV, avec TiviMate ou IPTV Smarters Pro. Les autres options sont comparées dans notre guide [boîtier IPTV](/boitier-iptv)." },
        ],
      },
      {
        id: "par-operateur",
        h2: "Orange, SFR, Bouygues : les points pratiques",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Orange (Livebox)", text: "Le décodeur TV Orange n'accepte généralement pas de lecteur IPTV tiers. Branchez une clé HDMI ou utilisez une Smart TV. Le Wi-Fi de la Livebox suffit, l'Ethernet est encore mieux." },
              { title: "SFR (box SFR)", text: "Selon le décodeur fourni, l'interface peut être Android TV avec Play Store : dans ce cas, installez TiviMate ou Smarters Player Lite directement." },
              { title: "Bouygues (Bbox)", text: "Même logique : si le décodeur Bbox donne accès au Play Store, un lecteur IPTV s'y installe ; sinon, passez par un autre appareil." },
              { title: "Free (Freebox)", text: "Les players Pop et Ultra sont sous Android TV, le player Révolution non.", href: "/iptv-freebox" },
            ],
          },
          { type: "p", text: "Quel que soit l'opérateur, la qualité dépend surtout de votre connexion : comptez environ 10 Mbit/s stables par écran en HD et 25 Mbit/s en 4K. Conseils de branchement dans [IPTV : Wi-Fi ou Ethernet ?](/blog/iptv-wifi-ou-ethernet)." },
        ],
      },
      {
        id: "blocage",
        h2: "« Orange bloque l'IPTV » : de quoi parle-t-on ?",
        blocks: [
          { type: "p", text: "Depuis la loi du 25 octobre 2021, qui a créé l'Arcom, les ayants droit peuvent obtenir rapidement le blocage de sites et de services qui diffusent illégalement des compétitions sportives. Les fournisseurs d'accès (Orange, SFR, Bouygues, Free) appliquent ces décisions, le plus souvent par un blocage au niveau du DNS. C'est l'origine des recherches du type « orange bloque iptv 2021 »." },
          { type: "p", text: "Ces mesures visent des services précis, désignés par une décision, et non la technologie IPTV ni les lecteurs comme IPTV Smarters ou TiviMate. Si un service cesse de fonctionner du jour au lendemain chez un seul opérateur, c'est un signal à prendre au sérieux sur la nature de ce service. Le cadre est expliqué dans [l'IPTV est-il légal en France ?](/blog/iptv-legal-france) et notre [avertissement](/avertissement)." },
          { type: "callout", title: "Panne ou blocage ?", text: "Une panne touche tous les opérateurs à la fois et revient en quelques minutes ou heures. Avant de conclure, suivez notre diagnostic [IPTV ne fonctionne plus](/blog/iptv-ne-fonctionne-plus)." },
        ],
      },
    ],
    faq: [
      { q: "La TV d'Orange, c'est de l'IPTV ?", a: "Oui. Le décodeur Orange reçoit les chaînes par votre ligne internet, sur un réseau géré par l'opérateur : c'est de l'IPTV au sens technique. Un abonnement IPTV indépendant, lui, passe par l'internet ouvert." },
      { q: "Peut-on installer un lecteur IPTV sur le décodeur Orange ?", a: "En général non, le décodeur TV Orange n'accepte pas d'applications tierces. Utilisez une Smart TV compatible, une clé Fire TV Stick ou une box Android branchée sur la TV." },
      { q: "Un abonnement IPTV fonctionne-t-il avec SFR ou Bouygues ?", a: "Oui. Il passe par votre connexion internet et fonctionne avec tous les fournisseurs d'accès. Si votre décodeur SFR ou Bbox donne accès au Play Store, vous pouvez même y installer le lecteur directement." },
      { q: "Orange bloque-t-il l'IPTV ?", a: "Orange, comme les autres opérateurs, applique les décisions de blocage visant des services qui diffusent illégalement des contenus, notamment sportifs. Ces mesures visent des services désignés, pas la technologie IPTV ni les lecteurs." },
      { q: "Faut-il un débit particulier ?", a: "Environ 10 Mbit/s stables pour la HD et 25 Mbit/s pour la 4K, par écran. L'Ethernet ou le CPL est plus stable que le Wi-Fi si la box est loin de la TV." },
    ],
    related: ["/iptv-freebox", "/boitier-iptv", "/iptv-firestick-france", "/blog/ott-iptv", "/blog/iptv-legal-france", "/blog/iptv-ne-fonctionne-plus", "/iptv-smart-tv-france", "/essai-gratuit"],
    cta: { title: "Testez Stream Bleu sur votre box et votre TV", text: "Essai gratuit 24h, quel que soit votre opérateur. Sans engagement." },
    schema: "Article",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readTime: "5 min",
  },
];
