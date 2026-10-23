import type { SeoPageData } from "../types";

const D = "2026-09-26";

export const APP_PAGES: SeoPageData[] = [
  // ── IPTV Smarters Pro ──────────────────────────────────────────
  {
    slug: "/iptv-smarters-pro",
    group: "apps",
    navLabel: "IPTV Smarters Pro",
    cardText: "Installer et configurer IPTV Smarters Pro sur TV, Fire Stick, PC.",
    title: "IPTV Smarters Pro : installation et guide complet 2026",
    description: "IPTV Smarters Pro : télécharger l'application, se connecter en Xtream Codes ou M3U, l'installer sur Fire Stick, Samsung, PC et corriger les bugs. Guide 2026.",
    keywords: ["iptv smarters pro", "ip tv smarters pro", "smarters pro", "smarterspro", "iptv smarters", "smarters iptv", "smarters iptv pro", "smarter pro", "ip smarter pro", "iptv smarters com", "iptv smarters player", "smarters player pro", "abonnement iptv smarters pro", "iptv smasters pro", "i. p. t. v. smarter pro", "tv smarters pro", "smarters pro iptv", "ip tv smarter pro", "ip tv smart pro", "iptv smasters pro apple", "iptv smasters pro premium", "iptv smasters pro tv", "iptv smasters pro com", "iptv smasters pro lite", "iptv smasters pro apkpure", "iptv smasters pro google play", "iptv smasters pro fire stick", "iptv smasters pro sur pc", "iptv smasters reddit", "iptv smasters lite", "iptv smasters m3u", "iptv smasters pc", "iptv smasters free", "iptv smasters google play", "iptv smasters tv", "tv smarters", "smarters iptv player", "smarter player pro", "smarters ip tv", "iptv smasters pro m3u", "iptv smarters pro gratuit", "iptv smarters pro premium"],
    badge: "Application · IPTV Smarters Pro",
    h1: "IPTV Smarters Pro : le guide complet pour l'installer et le configurer",
    intro: "**IPTV Smarters Pro** est un lecteur IPTV gratuit qui lit votre abonnement via l'API Xtream Codes ou une liste M3U, avec chaînes en direct, films, séries et guide TV. Il fonctionne sur Android, Fire TV Stick, Android TV, Windows et macOS, tandis que sa version Apple s'appelle [Smarters Player Lite](/smarters-player-lite). L'application ne contient aucune chaîne : il faut y ajouter un [abonnement IPTV](/abonnement-iptv).",
    tldr: [
      "Gratuit, compatible Xtream Codes et M3U, disponible sur la plupart des appareils.",
      "Si l'app est introuvable sur Google Play, téléchargez l'APK officiel ou utilisez Smarters Player Lite.",
      "Connexion recommandée : « Login with Xtream Codes API » pour avoir la VOD et l'EPG automatiquement.",
    ],
    image: { src: "/abonnement-iptv-france-3.webp", alt: "IPTV Smarters Pro ouvert sur une TV avec les catégories Live TV, Films et Séries" },
    sections: [
      {
        id: "telecharger",
        h2: "Télécharger IPTV Smarters Pro selon votre appareil",
        blocks: [
          { type: "p", text: "L'éditeur (WHMCS Smarters) diffuse l'application sur plusieurs plateformes. Sa disponibilité dans les boutiques change régulièrement, d'où les recherches « IPTV Smarters Pro introuvable Google Play ». Voici où la trouver en 2026 :" },
          {
            type: "table",
            head: ["Appareil", "Où trouver IPTV Smarters", "Remarque"],
            rows: [
              ["Android / Android TV", "APK sur le site officiel ou « Smarters Player Lite » sur Google Play", "Autoriser les sources inconnues pour l'APK"],
              ["[Fire TV Stick](/iptv-firestick-france)", "APK via l'application [Downloader](/downloader-iptv)", "Voir la procédure ci-dessous"],
              ["iPhone, iPad, Apple TV", "« Smarters Player Lite » sur l'App Store", "Même interface, même identifiants"],
              ["Windows / macOS", "Installateur sur le site officiel", "Détails sur notre page [IPTV sur PC et Mac](/iptv-pc-mac)"],
              ["Samsung / LG", "Selon modèle et région", "Sinon : [IBO Player](/ibo-player) ou [Smart IPTV](/smart-iptv)"],
            ],
          },
          { type: "callout", title: "⚠️ Attention aux fausses versions", text: "Téléchargez uniquement depuis le site officiel ou une boutique officielle. Les APK « Smarters Premium » ou « Pro débloqué » trouvés sur des sites tiers peuvent contenir des logiciels malveillants." },
        ],
      },
      {
        id: "configurer",
        h2: "Configurer IPTV Smarters Pro avec vos identifiants",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez l'application et acceptez les conditions", text: "Au premier lancement, choisissez la mise en page (Mobile ou TV). Sur une TV, préférez le mode TV." },
              { title: "Choisissez « Login with Xtream Codes API »", text: "C'est le mode le plus complet : chaînes, VOD, séries et guide TV sont chargés automatiquement." },
              { title: "Saisissez vos identifiants", text: "Nom de la liste (au choix), nom d'utilisateur, mot de passe et URL du serveur reçus par e-mail après votre commande ou votre [essai gratuit](/essai-gratuit)." },
              { title: "Chargez le guide TV", text: "Dans Live TV, ouvrez le menu puis « Install EPG » pour récupérer la grille des programmes." },
            ],
          },
          { type: "p", text: "Vous préférez une liste M3U ? Choisissez « Load your playlist or file/URL » et collez votre lien. Pour comprendre la différence entre les deux modes, lisez notre guide [M3U IPTV](/blog/m3u-iptv)." },
        ],
      },
      {
        id: "fire-stick",
        h2: "Installer IPTV Smarters Pro sur Fire TV Stick",
        blocks: [
          {
            type: "ol",
            items: [
              "Sur la Fire TV, installez l'application **Downloader** depuis l'Amazon Appstore.",
              "Paramètres → Ma Fire TV → Options pour les développeurs → Installer des applications inconnues → activez Downloader.",
              "Ouvrez Downloader, saisissez l'adresse de téléchargement officielle de l'APK Smarters, puis installez.",
              "Supprimez le fichier APK après l'installation pour libérer de l'espace.",
            ],
          },
          { type: "p", text: "Sur Fire TV, beaucoup d'utilisateurs finissent par préférer [TiviMate](/tivimate), plus rapide sur les grosses listes. Les deux s'utilisent avec les mêmes identifiants." },
        ],
      },
      {
        id: "problemes",
        h2: "IPTV Smarters Pro ne fonctionne pas : les solutions",
        blocks: [
          {
            type: "table",
            head: ["Problème", "Cause probable", "Solution"],
            rows: [
              ["« Invalid credentials »", "Faute de frappe, espace en trop", "Recopiez l'URL avec http:// et le port éventuel"],
              ["Chaînes qui tournent sans fin", "Cache plein ou lecteur interne", "Paramètres → Player → essayez « VLC Player » ou « Native »"],
              ["Pas de guide TV", "EPG non installé", "Live TV → menu → Install EPG"],
              ["Ne fonctionne pas sur TV Samsung", "Version non disponible sur ce modèle", "Utilisez [IBO Player](/ibo-player) ou un Fire TV Stick"],
              ["Bloqué au chargement", "Réseau ou DNS", "Redémarrez la box internet ; voir notre guide [IPTV ne fonctionne plus](/blog/iptv-ne-fonctionne-plus)"],
            ],
          },
          { type: "p", text: "Toutes les pannes, symptôme par symptôme, sont détaillées dans notre guide de dépannage [IPTV Smarters Pro ne fonctionne pas](/iptv-smarters-pro-ne-fonctionne-pas)." },
        ],
      },
      {
        id: "smarters-vs",
        h2: "IPTV Smarters Pro, Lite ou TiviMate ?",
        blocks: [
          { type: "p", text: "**IPTV Smarters Pro** est le plus polyvalent : multi-écran, contrôle parental, lecteur externe, et il existe sur PC. **Smarters Player Lite** en est la déclinaison allégée pour Apple et Google Play. **TiviMate** est plus agréable pour zapper sur une TV Android grâce à sa grille EPG, mais il n'existe pas sur iPhone ni sur PC. Le comparatif complet est sur notre page [applications IPTV](/applications-iptv)." },
        ],
      },
      {
        id: "abonnement",
        h2: "Abonnement IPTV Smarters Pro : application gratuite, chaînes payantes",
        blocks: [
          { type: "p", text: "On lit souvent « abonnement IPTV Smarters Pro » ou « IPTV Smarters Pro premium ». En réalité, IPTV Smarters Pro n'a pas d'abonnement à souscrire pour regarder la TV : l'application est un lecteur gratuit, et ce sont les chaînes qui viennent d'un abonnement chez un fournisseur. Le site officiel de l'éditeur, iptvsmarters.com, ne vend aucun bouquet de chaînes." },
          {
            type: "table",
            head: ["Ce que vous cherchez", "Ce que c'est vraiment", "Où aller"],
            rows: [
              ["« IPTV Smarters Pro gratuit »", "L'application est gratuite ; il manque juste un abonnement", "[Essai gratuit 24h](/essai-gratuit)"],
              ["« Abonnement IPTV Smarters Pro »", "Un abonnement IPTV compatible Xtream Codes", "[Abonnement IPTV](/abonnement-iptv) dès 9 €"],
              ["« IPTV Smarters Pro premium »", "Aucune version premium officielle ne débloque de chaînes", "Méfiez-vous des APK « premium »"],
              ["« IPTV Smarters Pro APKPure »", "Site miroir non officiel", "Préférez le site officiel ou la boutique de votre appareil"],
            ],
          },
          { type: "p", text: "Vous trouverez aussi l'application sous les orthographes « IP TV Smarters Pro », « Smarters IPTV », « Smarters Pro » ou « IPTV Smasters » : il s'agit toujours du même lecteur. Sur iPhone et Apple TV, il s'appelle [Smarters Player Lite](/smarters-player-lite)." },
        ],
      },
      {
        id: "par-appareil",
        h2: "IPTV Smarters Pro sur PC, Mac, Samsung, LG et Apple : récapitulatif",
        blocks: [
          {
            type: "table",
            head: ["Appareil", "IPTV Smarters disponible ?", "Guide détaillé"],
            rows: [
              ["PC Windows", "Oui, application de bureau", "[IPTV Smarters sur PC](/iptv-windows-france)"],
              ["Mac / MacBook", "Oui, ou Smarters Player Lite sur le Mac App Store", "[IPTV sur Mac](/iptv-pc-mac)"],
              ["Navigateur web", "Pas de version publique officielle", "[Lecteur IPTV en ligne](/lecteur-iptv-en-ligne)"],
              ["Fire TV Stick", "Oui, via Downloader", "[Downloader](/downloader-iptv)"],
              ["TV Samsung", "Selon modèle", "[IPTV Smarters Pro ne fonctionne pas sur Samsung](/iptv-smarters-pro-ne-fonctionne-pas)"],
              ["TV LG", "Selon modèle", "[IPTV sur LG](/iptv-lg-tv-france)"],
              ["iPhone, iPad, Apple TV", "Sous le nom Smarters Player Lite", "[IPTV sur Apple TV](/iptv-apple-tv-france)"],
              ["Chromecast avec Google TV", "Oui (Android TV)", "[IPTV Chromecast](/iptv-chromecast-france)"],
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "IPTV Smarters Pro est-il gratuit ?", a: "Oui, IPTV Smarters Pro est gratuit à télécharger et à utiliser. En revanche, il ne fournit aucune chaîne : il faut un abonnement IPTV compatible Xtream Codes ou M3U pour regarder la TV." },
      { q: "Pourquoi IPTV Smarters Pro est introuvable sur Google Play ?", a: "L'application a été retirée ou renommée à plusieurs reprises sur Google Play. Vous pouvez installer l'APK depuis le site officiel ou utiliser Smarters Player Lite, qui fonctionne avec les mêmes identifiants." },
      { q: "Quels identifiants entrer dans IPTV Smarters Pro ?", a: "Un nom d'utilisateur, un mot de passe et l'URL du serveur (mode Xtream Codes), ou un lien M3U. Stream Bleu vous envoie les deux par e-mail dès l'activation." },
      { q: "IPTV Smarters Pro fonctionne-t-il sur Samsung TV ?", a: "Cela dépend du modèle et de l'année. Si l'application n'apparaît pas dans la boutique Samsung, installez IBO Player ou Flix IPTV, ou branchez un Fire TV Stick. Voir notre guide [IPTV Samsung](/iptv-samsung-tv-france)." },
      { q: "IPTV Smarters Pro existe-t-il sur PC et Mac ?", a: "Oui, une version Windows et une version macOS sont proposées sur le site officiel. Sur Mac, vous pouvez aussi utiliser Smarters Player Lite depuis le Mac App Store." },
      { q: "Faut-il un abonnement IPTV Smarters Pro ?", a: "Non pour l'application, qui est gratuite. Oui pour les chaînes : IPTV Smarters Pro est un lecteur, il faut y ajouter un abonnement IPTV compatible Xtream Codes ou M3U, comme Stream Bleu à partir de 9 € pour 1 mois." },
      { q: "IPTV Smarters et IPTV Smarters Pro, c'est la même chose ?", a: "Oui. « IPTV Smarters », « Smarters Pro », « Smarters IPTV » ou « IPTV Smasters » désignent le même lecteur de l'éditeur WHMCS Smarters. Sur les appareils Apple, il est publié sous le nom Smarters Player Lite." },
    ],
    related: ["/iptv-smarters-pro-ne-fonctionne-pas", "/smarters-player-lite", "/tivimate", "/downloader-iptv", "/iptv-firestick-france", "/iptv-pc-mac", "/applications-iptv", "/abonnement-iptv", "/essai-gratuit", "/lecteur-iptv-en-ligne"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "8 min",
  },

  // ── Smarters Player Lite ───────────────────────────────────────
  {
    slug: "/smarters-player-lite",
    group: "apps",
    navLabel: "Smarters Player Lite",
    cardText: "La version Apple et Google Play d'IPTV Smarters.",
    title: "Smarters Player Lite : installation sur iPhone, TV, Mac",
    description: "Smarters Player Lite : l'application IPTV gratuite pour iPhone, iPad, Apple TV, Mac et Android TV. Installation, connexion Xtream Codes et solutions aux bugs.",
    keywords: ["smarters players lite", "smarters player lite", "smart player lite", "iptv smarters lite", "smarters iptv lite", "iptv smasters player lite", "smarters player lite android tv", "smarters player lite sur tv", "smasters player lite samsung tv", "smasters player lite firestick", "smasters player lite télécharger", "iptv smarters player lite", "smarters player", "iptv smasters player samsung", "smasters player lite sur android tv", "smasters player lite sur tv samsung", "smasters player lite tv", "smasters player tv", "smasters pro lite", "smasters pro tv", "smasters tv", "smasters tv pro"],
    badge: "Application · Smarters Player Lite",
    h1: "Smarters Player Lite : le lecteur IPTV gratuit pour Apple et Android TV",
    intro: "**Smarters Player Lite** est la version officielle d'IPTV Smarters publiée sur l'App Store (iPhone, iPad, Apple TV, Mac) et sur Google Play. Gratuite, elle lit un abonnement IPTV via Xtream Codes ou M3U, avec direct, films, séries et guide TV. C'est l'application la plus simple pour regarder l'IPTV sur un appareil Apple sans rien télécharger en dehors de la boutique officielle.",
    tldr: [
      "Disponible sur l'App Store et Google Play : aucune installation manuelle d'APK.",
      "Même compte, même interface qu'[IPTV Smarters Pro](/iptv-smarters-pro).",
      "Sur TV Samsung, préférez [IBO Player](/ibo-player) : Smarters Player Lite n'y est généralement pas proposé.",
    ],
    sections: [
      {
        id: "appareils",
        h2: "Sur quels appareils installer Smarters Player Lite ?",
        blocks: [
          {
            type: "table",
            head: ["Appareil", "Boutique", "Compatible"],
            rows: [
              ["iPhone / iPad", "App Store", "Oui"],
              ["[Apple TV](/iptv-apple-tv-france) (tvOS)", "App Store", "Oui"],
              ["Mac (puce Apple)", "Mac App Store", "Oui"],
              ["[Android TV / Google TV](/iptv-android-tv-france)", "Google Play", "Oui"],
              ["[Fire TV Stick](/iptv-firestick-france)", "Via [Downloader](/downloader-iptv)", "Oui (APK)"],
              ["[Samsung TV](/iptv-samsung-tv-france)", "—", "Non, utilisez IBO Player"],
            ],
          },
        ],
      },
      {
        id: "installation",
        h2: "Installer Smarters Player Lite en 4 étapes",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Téléchargez l'application", text: "Cherchez « Smarters Player Lite » dans l'App Store ou Google Play. Vérifiez que l'éditeur est bien WHMCS Smarters." },
              { title: "Ajoutez un utilisateur", text: "Choisissez « Login with Xtream Codes API » (recommandé) ou « M3U URL »." },
              { title: "Collez vos identifiants", text: "Utilisateur, mot de passe et URL du serveur fournis par Stream Bleu. Astuce iPhone : copiez-les depuis l'e-mail pour éviter les fautes." },
              { title: "Lancez la TV en direct", text: "Les catégories se chargent en quelques secondes. Ajoutez vos chaînes favorites avec un appui long." },
            ],
          },
        ],
      },
      {
        id: "lite-vs-pro",
        h2: "Smarters Player Lite ou IPTV Smarters Pro ?",
        blocks: [
          { type: "p", text: "Les deux applications partagent le même moteur. La version Pro (APK Android et PC) propose quelques options supplémentaires comme le multi-écran et le choix du lecteur externe. La version Lite est celle des boutiques officielles : plus simple, mises à jour automatiques, et seule option sur iOS. Pour un Fire TV ou une Android TV, [TiviMate](/tivimate) reste une alternative plus confortable pour le zapping." },
        ],
      },
      {
        id: "bugs",
        h2: "Smarters Player Lite ne marche pas : que faire ?",
        blocks: [
          {
            type: "ul",
            items: [
              "**Écran noir sur une chaîne** : dans Paramètres → Player Selection, changez de lecteur (Native / VLC).",
              "**« Server not responding »** : vérifiez que l'URL commence par http:// et ne contient pas d'espace final.",
              "**Guide TV vide** : Paramètres → EPG → mettez à jour, puis relancez l'app.",
              "**Coupures en Wi-Fi** : passez en 5 GHz ou en Ethernet, voir [IPTV Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet).",
            ],
          },
        ],
      },
      {
        id: "samsung-firestick",
        h2: "Smarters Player Lite sur TV Samsung, Fire Stick et Android TV",
        blocks: [
          { type: "p", text: "Les recherches « Smarters Player Lite Samsung TV », « Smarters Player Lite Firestick » ou « Smarters Player Lite sur Android TV » reviennent souvent. Voici la situation appareil par appareil :" },
          {
            type: "table",
            head: ["Appareil", "Smarters Player Lite", "Quoi faire"],
            rows: [
              ["Android TV / Google TV", "Oui, sur Google Play", "Installez-le depuis le Play Store de la TV ou de la box"],
              ["Fire TV Stick", "Rarement dans l'Appstore Amazon", "Installez [IPTV Smarters Pro via Downloader](/downloader-iptv) ou [TiviMate](/tivimate)"],
              ["TV Samsung (Tizen)", "Non proposé en général", "[IBO Player](/ibo-player) ou [Smart IPTV](/smart-iptv)"],
              ["TV LG (webOS)", "Non proposé en général", "IBO Player ou [SS IPTV](/ss-iptv)"],
              ["iPhone, iPad, Apple TV, Mac", "Oui, App Store", "Installation directe"],
            ],
            caption: "Disponibilité dans les boutiques au moment de la rédaction ; elle peut changer.",
          },
          { type: "p", text: "Pour télécharger Smarters Player Lite, passez toujours par la boutique officielle de votre appareil. On le trouve aussi écrit « Smart Player Lite », « Smarters Players Lite » ou « IPTV Smarters Lite » : c'est la même application." },
        ],
      },
    ],
    faq: [
      { q: "Smarters Player Lite est-il gratuit ?", a: "Oui, Smarters Player Lite est gratuit sur l'App Store et Google Play. Il nécessite un abonnement IPTV séparé pour afficher des chaînes." },
      { q: "Smarters Player Lite fonctionne-t-il sur Android TV ?", a: "Oui, il est disponible sur Google Play pour Android TV et Google TV. Sur Fire TV Stick, installez l'APK via l'application Downloader." },
      { q: "Peut-on installer Smarters Player Lite sur une TV Samsung ?", a: "En général non : l'application n'est pas proposée sur le store Samsung Tizen. Utilisez IBO Player, Flix IPTV ou un Fire TV Stick branché en HDMI." },
      { q: "Quelle différence entre Smarters Player Lite et IPTV Smarters Pro ?", a: "Même éditeur et mêmes identifiants. La version Lite est distribuée dans les boutiques officielles avec moins d'options ; la version Pro offre le multi-écran et plus de réglages, surtout sur Android et PC." },
      { q: "Smarters Player Lite fonctionne-t-il sur TV Samsung ?", a: "En général non : l'application n'est pas proposée dans la boutique Samsung. Utilisez IBO Player ou Smart IPTV sur la TV, ou branchez une clé Fire TV Stick." },
      { q: "Où télécharger Smarters Player Lite ?", a: "Sur l'App Store pour iPhone, iPad, Apple TV et Mac, et sur Google Play pour Android et Android TV. Évitez les sites de téléchargement tiers." },
    ],
    related: ["/iptv-smarters-pro", "/iptv-apple-tv-france", "/iptv-ios-france", "/tivimate", "/applications-iptv", "/essai-gratuit"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "5 min",
  },

  // ── TiviMate ───────────────────────────────────────────────────
  {
    slug: "/tivimate",
    group: "apps",
    navLabel: "TiviMate",
    cardText: "Le meilleur lecteur IPTV pour Android TV et Fire TV.",
    title: "TiviMate : installation, Premium et configuration 2026",
    description: "TiviMate IPTV Player : installation sur Fire TV et Android TV, version Premium, ajout d'une playlist Xtream ou M3U, EPG et enregistrement. Guide complet 2026.",
    keywords: ["tivi mate", "tivimate", "tivimate iptv player", "tivimate premium", "tivimate pro", "tivimate iptv", "iptv tivimate", "tivimate premium prix", "tivimate player", "tivimate iptv player premium", "tivimate pc", "tivimate samsung", "tivimate lg", "tivimate lg tv", "tivimate apple", "tivimate mac", "tivimate m3u"],
    badge: "Application · TiviMate",
    h1: "TiviMate : le guide du meilleur lecteur IPTV pour Android TV",
    intro: "**TiviMate** (TiviMate IPTV Player) est un lecteur IPTV pour Android TV, Google TV et Fire TV Stick, réputé pour son guide TV façon box opérateur, son zapping rapide et l'enregistrement des programmes. La version gratuite permet d'ajouter une playlist ; **TiviMate Premium** débloque plusieurs playlists, le replay, l'enregistrement et les favoris avancés. TiviMate n'existe pas sur iPhone, Samsung, LG ni PC.",
    tldr: [
      "Compatible uniquement Android TV, Google TV et Fire TV (et box Android).",
      "Premium s'achète via l'application « TiviMate Companion » sur un smartphone Android.",
      "Ajoutez votre abonnement en mode Xtream Codes pour obtenir chaînes, VOD et EPG en une fois.",
    ],
    image: { src: "/abonnement-iptv-france-6.webp", alt: "Interface TiviMate avec le guide des programmes IPTV sur un téléviseur" },
    sections: [
      {
        id: "installer",
        h2: "Installer TiviMate sur Fire TV Stick et Android TV",
        blocks: [
          { type: "h3", text: "Sur Android TV / Google TV (Chromecast, Mi Box, Shield)" },
          { type: "p", text: "Ouvrez le Google Play Store, cherchez « TiviMate IPTV Player », installez. C'est tout." },
          { type: "h3", text: "Sur Fire TV Stick" },
          {
            type: "steps",
            items: [
              { title: "Installez Downloader", text: "Depuis l'Amazon Appstore. Voir notre guide [Downloader IPTV](/downloader-iptv)." },
              { title: "Autorisez l'installation", text: "Paramètres → Ma Fire TV → Options pour les développeurs → Installer des applications inconnues → Downloader : activé." },
              { title: "Téléchargez l'APK officiel de TiviMate", text: "Saisissez l'adresse de téléchargement officielle dans Downloader puis lancez l'installation." },
              { title: "Ajoutez votre playlist", text: "Au premier lancement : « Ajouter une playlist » → « Code Xtream » → URL du serveur, identifiant, mot de passe." },
            ],
          },
        ],
      },
      {
        id: "premium",
        h2: "TiviMate Premium : prix et fonctions",
        blocks: [
          { type: "p", text: "TiviMate Premium se souscrit dans l'application **TiviMate Companion** (sur un smartphone Android), sous forme d'abonnement annuel ou de licence à vie. Un compte Premium peut être activé sur plusieurs appareils (5 selon les conditions de l'éditeur). Le prix évolue : vérifiez le tarif affiché dans Companion avant d'acheter." },
          {
            type: "table",
            head: ["Fonction", "Gratuit", "Premium"],
            rows: [
              ["Nombre de playlists", "1", "Plusieurs"],
              ["Guide TV (EPG)", "Oui", "Oui"],
              ["Replay / catch-up", "Non", "Oui"],
              ["Enregistrement", "Non", "Oui (clé USB ou stockage)"],
              ["Favoris personnalisés", "Limité", "Oui"],
              ["Rappels de programmes", "Non", "Oui"],
            ],
          },
          { type: "callout", title: "Méfiez-vous des « TiviMate Premium gratuit »", text: "Les APK modifiés qui promettent Premium gratuit sont illégaux et souvent piégés. Si le prix vous freine, IPTV Smarters Pro est une alternative gratuite." },
        ],
      },
      {
        id: "reglages",
        h2: "Les réglages TiviMate qui changent tout",
        blocks: [
          {
            type: "ul",
            items: [
              "**Paramètres → Lecture → Décodeur** : laissez « Matériel » pour la 4K HEVC ; passez en « Logiciel » si une chaîne reste noire.",
              "**Paramètres → Playlists → Mise à jour au démarrage** : activé, pour récupérer les nouvelles chaînes.",
              "**Paramètres → EPG → Mise à jour** toutes les 12 h pour un guide toujours à jour.",
              "**Masquer les groupes** inutiles pour une liste plus légère et un zapping plus rapide.",
            ],
          },
        ],
      },
      {
        id: "autres-appareils",
        h2: "TiviMate sur Samsung, LG, iPhone ou PC ?",
        blocks: [
          { type: "p", text: "TiviMate est une application Android uniquement. Sur une [TV Samsung](/iptv-samsung-tv-france) ou [LG](/iptv-lg-tv-france), le plus simple est de brancher un Fire TV Stick ou une box Android pour profiter de TiviMate. Sur PC, il faut passer par un émulateur Android : une solution bricolée, et [IPTV Smarters sur PC et Mac](/iptv-pc-mac) est bien plus pratique. Sur iPhone et Apple TV, l'équivalent le plus proche est IPTVX ou [Smarters Player Lite](/smarters-player-lite)." },
        ],
      },
      {
        id: "tivi-mate-pro",
        h2: "« TiviMate Pro », « TiviMate Premium » : qu'est-ce qui existe vraiment ?",
        blocks: [
          { type: "p", text: "TiviMate (parfois écrit « Tivi Mate ») n'existe qu'en deux versions officielles : gratuite et Premium. Il n'y a pas de « TiviMate Pro » officiel : ce nom circule surtout pour des APK modifiés, à éviter. Le TiviMate IPTV Player Premium s'achète uniquement via l'application TiviMate Companion." },
          { type: "p", text: "Pour ajouter une liste M3U dans TiviMate, choisissez « Ajouter une playlist » puis « Code Xtream » (recommandé) ou « Lien M3U ». Le guide de notre page [M3U IPTV](/blog/m3u-iptv) explique la différence." },
        ],
      },
    ],
    faq: [
      { q: "TiviMate est-il gratuit ?", a: "TiviMate est gratuit avec une seule playlist et des fonctions de base. TiviMate Premium, payant, ajoute plusieurs playlists, le replay, l'enregistrement et les rappels." },
      { q: "Comment activer TiviMate Premium ?", a: "Installez TiviMate Companion sur un smartphone Android, créez un compte, achetez Premium, puis connectez-vous avec ce compte dans TiviMate sur votre TV (Paramètres → Compte)." },
      { q: "TiviMate fonctionne-t-il sur Samsung ou LG ?", a: "Non, TiviMate n'existe que sur Android. Branchez un Fire TV Stick ou une box Android TV sur votre téléviseur Samsung ou LG pour l'utiliser." },
      { q: "Comment ajouter une liste M3U dans TiviMate ?", a: "Ajouter une playlist → Entrer l'URL → collez votre lien M3U → Suivant. Ajoutez ensuite l'URL de l'EPG si elle n'est pas détectée. Le mode Xtream Codes est plus simple car tout est automatique." },
      { q: "TiviMate est-il meilleur qu'IPTV Smarters Pro ?", a: "Sur TV Android, TiviMate offre un meilleur guide TV et un zapping plus fluide. IPTV Smarters Pro est plus polyvalent (PC, mobile) et entièrement gratuit." },
      { q: "TiviMate existe-t-il sur PC, Mac, Samsung ou LG ?", a: "Non, TiviMate est réservé à Android TV, Google TV, Fire TV et aux box Android. Sur PC ou Mac, utilisez IPTV Smarters Pro ou VLC ; sur TV Samsung ou LG, IBO Player ou Smart IPTV ; sur Apple TV, Smarters Player Lite ou IPTVX." },
      { q: "TiviMate Pro existe-t-il ?", a: "Non, il n'existe que TiviMate gratuit et TiviMate Premium. Les fichiers « TiviMate Pro » proposés en téléchargement sont des versions modifiées non officielles, souvent piégées." },
    ],
    related: ["/iptv-smarters-pro", "/downloader-iptv", "/iptv-firestick-france", "/iptv-android-tv-france", "/iptv-xiaomi-mi-box", "/applications-iptv", "/tarifs"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "7 min",
  },

  // ── Smart IPTV (SIPTV) ─────────────────────────────────────────
  {
    slug: "/smart-iptv",
    group: "apps",
    navLabel: "Smart IPTV",
    cardText: "Smart IPTV (SIPTV) sur LG et Samsung : activation et playlist.",
    title: "Smart IPTV : activation, playlist et bugs (Samsung, LG)",
    description: "Smart IPTV (SIPTV) : installer l'app sur TV LG et Samsung, envoyer sa playlist sur siptv.app/mylist avec l'adresse MAC, activer la licence et corriger les bugs.",
    keywords: ["smart iptv", "iptv smart", "ip tv smart", "smart iptv ip", "smart iptv samsung", "smart iptv com", "my sip tv", "my siptv", "sip tv", "siptv list", "siptv my list", "smart iptv list", "smart iptv liste", "smart iptv bloqué au chargement", "smart iptv lite", "smart iptv philips", "smart iptv sony", "smart iptv tizen", "smart iptv android tv", "smart iptv ou iptv smasters pro", "smart box tivi", "smart iptv player", "smart plus iptv", "smart pro iptv", "smart pro tv", "smart x2 iptv", "smartgo iptv", "smartgo tv", "sip iptv", "smarterstv"],
    badge: "Application · Smart IPTV",
    h1: "Smart IPTV (SIPTV) : installation et activation sur Smart TV",
    intro: "**Smart IPTV** (souvent appelée SIPTV) est une application de lecture IPTV pour TV LG, Samsung et Android. On ne saisit pas ses identifiants sur la TV : on envoie sa playlist M3U sur le site de l'éditeur (page « My List » de siptv.app) en indiquant l'**adresse MAC** du téléviseur. Après 7 jours d'essai, l'application demande une activation unique payante par appareil.",
    tldr: [
      "Récupérez l'adresse MAC affichée au lancement de l'app, puis chargez votre lien M3U sur siptv.app/mylist.",
      "Activation payante unique par TV après l'essai de 7 jours (tarif affiché sur le site officiel).",
      "Sur Samsung récents, l'app n'est souvent plus proposée : utilisez [IBO Player](/ibo-player).",
    ],
    sections: [
      {
        id: "installer",
        h2: "Installer Smart IPTV sur votre téléviseur",
        blocks: [
          {
            type: "table",
            head: ["Téléviseur", "Disponibilité de Smart IPTV"],
            rows: [
              ["[LG webOS](/iptv-lg-tv-france)", "LG Content Store : recherchez « Smart IPTV »"],
              ["[Samsung Tizen](/iptv-samsung-tv-france)", "Retirée du store sur beaucoup de modèles ; installation par clé USB possible selon l'année"],
              ["[Android TV](/iptv-android-tv-france) (Sony, Philips, TCL)", "APK sur le site officiel"],
              ["[Hisense VIDAA](/iptv-hisense-vidaa)", "Non : voir les alternatives VIDAA"],
            ],
          },
        ],
      },
      {
        id: "playlist",
        h2: "Envoyer sa playlist sur siptv.app (My List)",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Notez l'adresse MAC", text: "Lancez Smart IPTV : l'adresse MAC (format 00:aa:bb:cc:dd:ee) s'affiche à l'écran." },
              { title: "Ouvrez la page My List", text: "Sur un téléphone ou un PC, allez sur siptv.app/mylist (le site officiel de l'application)." },
              { title: "Collez votre lien M3U", text: "Saisissez l'adresse MAC, collez l'URL M3U fournie par Stream Bleu, cochez « Save online », puis « Send »." },
              { title: "Redémarrez l'application", text: "Fermez et relancez Smart IPTV : vos chaînes apparaissent, classées par catégories." },
            ],
          },
          { type: "p", text: "Vous ne savez pas ce qu'est un lien M3U ? Notre guide [M3U IPTV](/blog/m3u-iptv) l'explique en 3 minutes." },
        ],
      },
      {
        id: "bloque",
        h2: "Smart IPTV bloqué au chargement : les causes",
        blocks: [
          {
            type: "ul",
            items: [
              "**Playlist trop lourde** : une liste avec VOD complète peut dépasser la mémoire de la TV. Demandez-nous une liste « live only ».",
              "**Adresse MAC erronée** : un seul caractère faux et la liste n'arrive jamais. Vérifiez les 0 et les O.",
              "**« Save online » non coché** : la playlist disparaît au redémarrage.",
              "**Période d'essai terminée** : l'application reste sur l'écran d'activation.",
            ],
          },
          { type: "p", text: "Plus de solutions dans notre guide [IPTV bloqué ou qui ne fonctionne plus](/blog/iptv-ne-fonctionne-plus)." },
        ],
      },
      {
        id: "alternatives",
        h2: "Smart IPTV ou IPTV Smarters Pro ?",
        blocks: [
          { type: "p", text: "Smart IPTV ne gère que les listes M3U et son interface est basique, mais elle est légère et très stable sur les TV LG. [IPTV Smarters Pro](/iptv-smarters-pro) accepte Xtream Codes (VOD et séries mieux organisées) mais n'est pas disponible sur toutes les TV. Sur Samsung et LG récents, [IBO Player](/ibo-player), [Flix IPTV](/flix-iptv) et [SS IPTV](/ss-iptv) sont les alternatives les plus courantes." },
        ],
      },
      {
        id: "ne-pas-confondre",
        h2: "Smart IPTV, SIPTV, Smart Box Tivi, Smart Pro TV : ne pas confondre",
        blocks: [
          { type: "p", text: "Beaucoup d'applications et de services ont « smart » dans leur nom, d'où des recherches comme « IP TV smart », « Smart IPTV player » ou « Smart IPTV IP ». Voici comment s'y retrouver :" },
          {
            type: "table",
            head: ["Nom recherché", "De quoi il s'agit", "Ce qu'il faut faire"],
            rows: [
              ["Smart IPTV, SIPTV, My SIP TV", "La même application, éditée par SIPTV ; « My List » est la page d'envoi de la playlist", "Suivez la procédure ci-dessus"],
              ["Smart IPTV Lite", "Pas de version « Lite » officielle connue de Smart IPTV", "Vérifiez l'éditeur avant d'installer"],
              ["Smart IPTV sur Philips, Sony, TCL", "TV sous Android TV : version APK de Smart IPTV ou lecteur Android", "[IPTV Android TV](/iptv-android-tv-france)"],
              ["Smart IPTV sur Tizen", "TV Samsung : application souvent retirée de la boutique", "[IPTV Samsung](/iptv-samsung-tv-france)"],
              ["Smart Box Tivi, Smart Pro TV, Smart Plus IPTV, Smart X2 IPTV, SmartGo TV", "Noms de boîtiers, d'applications ou de services distincts, sans lien avec Smart IPTV", "Voir [boîtier IPTV](/boitier-iptv) ou [alternatives IPTV](/alternatives-iptv)"],
              ["SmartersTV", "Confusion fréquente avec IPTV Smarters", "[IPTV Smarters Pro](/iptv-smarters-pro)"],
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Smart IPTV est-il gratuit ?", a: "Smart IPTV est gratuit pendant 7 jours, puis demande une activation unique payante par téléviseur, à régler sur le site officiel. Le montant est indiqué sur la page d'activation." },
      { q: "Qu'est-ce que « My SIPTV » ou siptv.app/mylist ?", a: "C'est la page du site officiel de Smart IPTV où l'on envoie sa playlist M3U en indiquant l'adresse MAC de la TV. L'application télécharge ensuite automatiquement la liste." },
      { q: "Pourquoi Smart IPTV n'est plus sur Samsung ?", a: "L'éditeur a retiré l'application du store Samsung sur de nombreux modèles. Selon l'année de votre TV, une installation par clé USB peut rester possible ; sinon, utilisez IBO Player ou Flix IPTV." },
      { q: "Smart IPTV accepte-t-il les codes Xtream ?", a: "Non, Smart IPTV fonctionne avec une URL M3U (ou un fichier). Stream Bleu fournit ce lien M3U en plus des identifiants Xtream Codes." },
      { q: "Mon abonnement Stream Bleu fonctionne-t-il avec Smart IPTV ?", a: "Oui. Utilisez le lien M3U reçu par e-mail. Vous pouvez tester gratuitement pendant 24h avec notre [essai gratuit](/essai-gratuit)." },
      { q: "Smart IPTV ou IPTV Smarters Pro : lequel choisir ?", a: "Sur une TV LG ou une TV Android, Smart IPTV est léger et fiable avec une liste M3U. IPTV Smarters Pro gère mieux la VOD et les séries grâce à Xtream Codes, mais n'est pas proposé sur toutes les TV. Sur Samsung récent, IBO Player est souvent le plus simple." },
    ],
    related: ["/ss-iptv", "/ibo-player", "/flix-iptv", "/iptv-lg-tv-france", "/iptv-samsung-tv-france", "/blog/m3u-iptv", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "6 min",
  },

  // ── SS IPTV ────────────────────────────────────────────────────
  {
    slug: "/ss-iptv",
    group: "apps",
    navLabel: "SS IPTV",
    cardText: "Simple Smart IPTV : le lecteur gratuit pour LG et Samsung.",
    title: "SS IPTV : installer et charger sa playlist (LG, Samsung)",
    description: "SS IPTV (Simple Smart IPTV) : application IPTV gratuite pour TV LG et Samsung. Installation, code de connexion, ajout de playlist M3U et problèmes fréquents.",
    keywords: ["ss iptv", "simple smart iptv", "ss iptv lg", "ss iptv samsung", "ss iptv playlist"],
    badge: "Application · SS IPTV",
    h1: "SS IPTV : le lecteur IPTV gratuit pour TV LG et Samsung",
    intro: "**SS IPTV** (Simple Smart IPTV) est une application IPTV gratuite, disponible principalement sur les TV LG et sur certains modèles Samsung. Elle lit une playlist M3U que l'on charge soit par un lien direct, soit via l'éditeur en ligne du site ss-iptv.com grâce à un **code de connexion** temporaire affiché sur la TV.",
    sections: [
      {
        id: "installation",
        h2: "Installer SS IPTV",
        blocks: [
          { type: "p", text: "Sur une [TV LG](/iptv-lg-tv-france), ouvrez le LG Content Store et cherchez « SS IPTV ». Sur Samsung, la disponibilité varie selon le modèle ; si elle est absente, passez à [IBO Player](/ibo-player). L'application est aussi proposée sur Android." },
        ],
      },
      {
        id: "playlist",
        h2: "Ajouter sa playlist M3U dans SS IPTV",
        blocks: [
          { type: "h3", text: "Méthode 1 : lien externe (le plus simple)" },
          {
            type: "steps",
            items: [
              { title: "Ouvrez les paramètres", text: "Icône engrenage → Contenu → Listes de lecture externes → Ajouter." },
              { title: "Collez l'URL M3U", text: "Donnez un nom à la liste (ex. « Stream Bleu ») et saisissez le lien M3U reçu par e-mail." },
              { title: "Enregistrez", text: "La nouvelle tuile apparaît sur l'écran d'accueil : ouvrez-la pour charger les chaînes." },
            ],
          },
          { type: "h3", text: "Méthode 2 : code de connexion" },
          { type: "p", text: "Dans Paramètres → Général, cliquez « Obtenir le code ». Sur ss-iptv.com, ouvrez l'éditeur de playlist, saisissez ce code, puis envoyez votre fichier ou votre lien. Le code expire après quelques minutes." },
        ],
      },
      {
        id: "limites",
        h2: "Limites de SS IPTV",
        blocks: [
          {
            type: "ul",
            items: [
              "Pas de connexion Xtream Codes : la VOD est moins bien classée qu'avec [IPTV Smarters Pro](/iptv-smarters-pro).",
              "Guide TV parfois incomplet selon la source EPG.",
              "Les très grosses listes peuvent ralentir les TV d'entrée de gamme.",
            ],
          },
          { type: "p", text: "Pour une expérience plus riche sur TV connectée, comparez avec [Smart IPTV](/smart-iptv) ou [Flix IPTV](/flix-iptv), ou regardez notre [comparatif des applications IPTV](/applications-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "SS IPTV est-il gratuit ?", a: "Oui, SS IPTV est gratuit. Il affiche parfois des publicités dans l'interface, mais aucune activation payante n'est demandée pour lire une playlist." },
      { q: "SS IPTV fonctionne-t-il sur Samsung ?", a: "Sur certains modèles Samsung seulement. Si l'application n'apparaît pas dans le store de votre TV, utilisez IBO Player ou Flix IPTV." },
      { q: "Pourquoi ma playlist SS IPTV ne se charge pas ?", a: "Vérifiez que l'URL M3U est complète (http://…), que le code de connexion n'a pas expiré, puis redémarrez la TV. Une liste trop volumineuse peut aussi saturer la mémoire." },
      { q: "SS IPTV ou Smart IPTV ?", a: "SS IPTV est gratuit ; Smart IPTV demande une activation payante mais est souvent plus stable sur LG. Les deux utilisent des listes M3U." },
    ],
    related: ["/smart-iptv", "/ibo-player", "/iptv-lg-tv-france", "/blog/m3u-iptv", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "4 min",
  },

  // ── IBO Player ─────────────────────────────────────────────────
  {
    slug: "/ibo-player",
    group: "apps",
    navLabel: "IBO Player",
    cardText: "IBO Player : prix, activation MAC et configuration.",
    title: "IBO Player : prix, activation et configuration (2026)",
    description: "IBO Player : prix de la licence, activation par adresse MAC et device key, playlist sur Samsung, LG, Android et Fire TV. Offert avec le forfait 12 mois.",
    keywords: ["ibo player", "ibo player prix", "ibo player pro", "ibo player activation", "ibo player samsung", "ibo player lg"],
    badge: "Application · IBO Player",
    h1: "IBO Player : prix, activation et configuration pas à pas",
    intro: "**IBO Player** est un lecteur IPTV pour Smart TV Samsung et LG, Android TV, Fire TV et mobiles. Comme Smart IPTV, il se configure à distance : on ajoute sa playlist sur le site officiel avec l'**adresse MAC** et la **device key** affichées par l'application. Après une période d'essai, une licence payante (annuelle ou à vie) est nécessaire. Chez Stream Bleu, l'activation IBO Player est offerte avec le forfait 12 mois.",
    tldr: [
      "Récupérez MAC + device key dans l'app, puis ajoutez votre playlist sur le site d'IBO Player.",
      "Licence payante après l'essai ; le tarif est affiché sur la page d'activation officielle.",
      "Offerte avec l'[abonnement IPTV 12 mois](/tarifs/12-mois) Stream Bleu.",
    ],
    sections: [
      {
        id: "prix",
        h2: "IBO Player : quel prix ?",
        blocks: [
          { type: "p", text: "IBO Player propose une période d'essai gratuite, puis une licence à acheter par appareil : soit pour un an, soit à vie. Les tarifs changent selon les périodes et les versions (IBO Player, IBO Player Pro) ; consultez toujours la page d'activation officielle avant de payer, et méfiez-vous des revendeurs qui facturent l'activation plus cher." },
          { type: "callout", title: "💡 Astuce Stream Bleu", text: "Avec le forfait [12 mois](/tarifs/12-mois), nous activons IBO Player pour vous : vous n'avez rien à payer en plus pour le lecteur." },
        ],
      },
      {
        id: "configuration",
        h2: "Configurer IBO Player en 4 étapes",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Installez IBO Player", text: "Depuis le store de votre TV Samsung ou LG, Google Play, ou via [Downloader](/downloader-iptv) sur Fire TV." },
              { title: "Notez la MAC et la device key", text: "Elles s'affichent sur l'écran d'accueil de l'application." },
              { title: "Ajoutez votre playlist en ligne", text: "Sur le site officiel d'IBO Player, section « Manage playlists » : saisissez MAC + device key, puis collez votre lien M3U ou vos identifiants Xtream." },
              { title: "Rechargez l'application", text: "Sur la TV, choisissez « Reload » ou relancez l'app : vos chaînes, films et séries apparaissent." },
            ],
          },
        ],
      },
      {
        id: "appareils",
        h2: "IBO Player sur Samsung, LG et autres TV",
        blocks: [
          { type: "p", text: "IBO Player est l'un des rares lecteurs IPTV bien maintenus sur Samsung Tizen et LG webOS, ce qui en fait notre premier conseil pour ces TV. Guides détaillés : [IPTV sur Samsung TV](/iptv-samsung-tv-france), [IPTV sur LG TV](/iptv-lg-tv-france), et pour les téléviseurs Hisense, [IPTV sur VIDAA](/iptv-hisense-vidaa)." },
        ],
      },
    ],
    faq: [
      { q: "Combien coûte IBO Player ?", a: "IBO Player est gratuit pendant la période d'essai, puis nécessite une licence annuelle ou à vie par appareil, au tarif affiché sur le site officiel. Avec le forfait 12 mois Stream Bleu, l'activation est offerte." },
      { q: "Où trouver l'adresse MAC dans IBO Player ?", a: "Elle s'affiche sur l'écran principal de l'application, avec la device key. Ces deux informations sont nécessaires pour ajouter une playlist sur le site d'IBO Player." },
      { q: "IBO Player fonctionne-t-il avec Xtream Codes ?", a: "Oui, la page de gestion des playlists accepte une URL M3U ou des identifiants Xtream Codes (serveur, utilisateur, mot de passe)." },
      { q: "Ma playlist n'apparaît pas dans IBO Player, que faire ?", a: "Vérifiez la MAC et la device key, puis utilisez « Reload » dans l'application. Si la licence a expiré, l'app peut refuser de charger la liste." },
    ],
    related: ["/iptv-samsung-tv-france", "/iptv-lg-tv-france", "/smart-iptv", "/flix-iptv", "/tarifs/12-mois", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "4 min",
  },

  // ── Flix IPTV ──────────────────────────────────────────────────
  {
    slug: "/flix-iptv",
    group: "apps",
    navLabel: "Flix IPTV",
    cardText: "Flix IPTV : lecteur moderne pour Smart TV, activation MAC.",
    title: "Flix IPTV : installation et activation sur Smart TV",
    description: "Flix IPTV : lecteur IPTV pour Samsung, LG, Android et Fire TV. Installation, envoi de la playlist avec l'adresse MAC, activation et différences avec IBO Player.",
    keywords: ["flixiptv", "flix ip tv", "flix iptv", "flix iptv samsung", "flix iptv lg", "flix iptv activation"],
    badge: "Application · Flix IPTV",
    h1: "Flix IPTV : installer et activer le lecteur sur votre Smart TV",
    intro: "**Flix IPTV** est un lecteur IPTV (et non un fournisseur de chaînes) disponible sur TV Samsung, LG, Android TV, Fire TV et mobiles. Son interface rappelle celle des plateformes de streaming. Comme [IBO Player](/ibo-player), il se configure avec l'**adresse MAC** de l'appareil : vous ajoutez votre playlist sur le site officiel de Flix IPTV, puis l'application la télécharge. Une activation payante est requise après l'essai.",
    sections: [
      {
        id: "installer",
        h2: "Installer Flix IPTV",
        blocks: [
          {
            type: "table",
            head: ["Appareil", "Installation"],
            rows: [
              ["[Samsung](/iptv-samsung-tv-france)", "Smart Hub → Applications → recherche « Flix IPTV »"],
              ["[LG](/iptv-lg-tv-france)", "LG Content Store → « Flix IPTV »"],
              ["[Android TV](/iptv-android-tv-france)", "Google Play"],
              ["[Fire TV Stick](/iptv-firestick-france)", "Amazon Appstore ou [Downloader](/downloader-iptv)"],
            ],
          },
        ],
      },
      {
        id: "playlist",
        h2: "Ajouter sa playlist dans Flix IPTV",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Lancez l'application", text: "Allez dans Paramètres → User Account pour voir l'adresse MAC." },
              { title: "Ouvrez la page d'upload officielle", text: "Sur le site de Flix IPTV, rubrique « Upload playlist », saisissez la MAC." },
              { title: "Collez votre lien M3U", text: "Utilisez le lien fourni par Stream Bleu, validez." },
              { title: "Redémarrez l'app", text: "Les chaînes se chargent. Activez la licence depuis la même page lorsque l'essai prend fin." },
            ],
          },
        ],
      },
      {
        id: "comparaison",
        h2: "Flix IPTV, IBO Player ou Smart IPTV ?",
        blocks: [
          { type: "p", text: "Les trois fonctionnent sur le même principe (MAC + upload web). Flix IPTV se distingue par son interface soignée et ses sous-titres, IBO Player par sa stabilité sur Samsung récents, et [Smart IPTV](/smart-iptv) par sa légèreté sur LG. Si vous voulez tester avant d'acheter une licence, commencez par l'[essai gratuit Stream Bleu](/essai-gratuit) avec la période d'essai du lecteur." },
        ],
      },
    ],
    faq: [
      { q: "Flix IPTV fournit-il des chaînes ?", a: "Non. Flix IPTV est uniquement un lecteur. Il faut y ajouter la playlist d'un abonnement IPTV pour regarder la TV." },
      { q: "Flix IPTV est-il gratuit ?", a: "Flix IPTV propose une période d'essai, puis une activation payante par appareil, au tarif indiqué sur son site officiel." },
      { q: "Où trouver l'adresse MAC dans Flix IPTV ?", a: "Dans l'application, menu Paramètres → User Account. Notez-la exactement pour l'envoi de la playlist." },
      { q: "Flix IPTV fonctionne-t-il avec Stream Bleu ?", a: "Oui, avec le lien M3U ou les identifiants Xtream Codes fournis lors de votre commande." },
      { q: "Flix IPTV et FlixIPTV, c'est la même application ?", a: "Oui, « Flix IPTV », « FlixIPTV » et « Flix IP TV » désignent le même lecteur pour Smart TV, activé avec l'adresse MAC du téléviseur. Comme tout lecteur, il n'inclut aucune chaîne." },
    ],
    related: ["/ibo-player", "/smart-iptv", "/iptv-samsung-tv-france", "/iptv-lg-tv-france", "/applications-iptv", "/essai-gratuit"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "4 min",
  },

  // ── IPTV Stream Player ─────────────────────────────────────────
  {
    slug: "/iptv-stream-player",
    group: "apps",
    navLabel: "IPTV Stream Player",
    cardText: "IPTV Stream Player sur Android, Smart TV et PC.",
    title: "IPTV Stream Player : installation et alternatives 2026",
    description: "IPTV Stream Player : installer ce lecteur IPTV sur Android, Smart TV et PC, ajouter sa liste M3U ou Xtream, et quelles alternatives choisir selon l'appareil.",
    keywords: ["iptv stream player", "ip tv stream player", "stream player iptv", "iptv stream player smart tv", "iptv stream player pc", "iptv stream player pro", "iptv stream pro", "stream iptv", "iptv stream"],
    badge: "Application · Stream Player",
    h1: "IPTV Stream Player : installation, configuration et alternatives",
    intro: "**IPTV Stream Player** désigne un lecteur IPTV pour Android (téléphones, tablettes et TV) qui lit les listes M3U et les comptes Xtream Codes. Il est apprécié pour sa simplicité, mais son interface reste basique. Cette page explique comment l'installer, le configurer et quel autre lecteur choisir sur Smart TV ou PC, où il n'est pas toujours disponible.",
    sections: [
      {
        id: "installer",
        h2: "Installer IPTV Stream Player",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Téléchargez l'application", text: "Sur Google Play, recherchez « IPTV Stream Player » et vérifiez l'éditeur et les avis avant d'installer." },
              { title: "Ajoutez votre liste", text: "Choisissez « Xtream Codes » (serveur, identifiant, mot de passe) ou « M3U URL »." },
              { title: "Chargez l'EPG", text: "Si le guide n'apparaît pas, ajoutez l'URL EPG (XMLTV) fournie avec votre abonnement." },
            ],
          },
        ],
      },
      {
        id: "smart-tv-pc",
        h2: "IPTV Stream Player sur Smart TV et PC",
        blocks: [
          { type: "p", text: "Sur les TV Samsung et LG, les versions « Stream Player » ne sont pas toujours présentes dans les stores. Utilisez plutôt [IBO Player](/ibo-player) ou [Smart IPTV](/smart-iptv). Sur PC, [IPTV Smarters](/iptv-pc-mac) ou [VLC](/iptv-vlc) font le même travail gratuitement." },
          {
            type: "table",
            head: ["Besoin", "Meilleur choix"],
            rows: [
              ["Zapping façon box sur Android TV", "[TiviMate](/tivimate)"],
              ["Un lecteur gratuit multi-appareils", "[IPTV Smarters Pro](/iptv-smarters-pro)"],
              ["Smart TV Samsung ou LG", "[IBO Player](/ibo-player)"],
              ["Tester rapidement une liste", "[VLC](/iptv-vlc)"],
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "IPTV Stream Player est-il gratuit ?", a: "La version de base est gratuite, avec publicité dans certaines versions. Une option payante peut retirer les publicités selon l'éditeur." },
      { q: "IPTV Stream Player fonctionne-t-il sur Smart TV ?", a: "Oui sur Android TV. Sur Samsung et LG, il est rarement disponible ; IBO Player ou Smart IPTV sont de meilleures options." },
      { q: "Quelle est la différence entre IPTV Stream Player et IPTV Smarters ?", a: "Les deux lisent Xtream et M3U. IPTV Smarters Pro est plus complet (VOD, séries, multi-écran) et existe sur plus d'appareils, dont PC et Mac." },
      { q: "Mon abonnement fonctionne-t-il avec IPTV Stream Player ?", a: "Oui, tout abonnement Stream Bleu fonctionne avec les lecteurs compatibles Xtream Codes ou M3U." },
      { q: "IPTV Stream Player fonctionne-t-il sur Smart TV et PC ?", a: "IPTV Stream Player est surtout proposé sur mobile et sur certaines Smart TV selon les boutiques. Sur PC, VLC ou IPTV Smarters Pro sont plus simples ; sur Smart TV, IBO Player ou Smart IPTV sont les plus répandus." },
      { q: "Existe-t-il un IPTV Stream Player Pro ?", a: "Méfiez-vous des versions « Pro » trouvées hors des boutiques officielles. Installez le lecteur depuis la boutique de votre appareil et ajoutez-y vos identifiants Xtream Codes ou votre lien M3U." },
    ],
    related: ["/iptv-smarters-pro", "/tivimate", "/iptv-vlc", "/applications-iptv", "/iptv-android-france"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "4 min",
  },

  // ── Lxtream ────────────────────────────────────────────────────
  {
    slug: "/lxtream",
    group: "apps",
    navLabel: "Lxtream",
    cardText: "Lxtream Player : configuration sur box Linux et Android TV.",
    title: "Lxtream Player : configuration IPTV pas à pas (2026)",
    description: "Lxtream : le lecteur IPTV des boîtiers Leadcool et d'Android TV. Ajouter son compte Xtream Codes, régler le guide TV et corriger les erreurs de connexion.",
    keywords: ["lxtream", "lxtream player", "leadcool lxtream", "lxtream android tv", "lxtream télécharger"],
    badge: "Application · Lxtream",
    h1: "Lxtream : configurer le lecteur IPTV sur votre boîtier",
    intro: "**Lxtream** est un lecteur IPTV que l'on retrouve préinstallé sur plusieurs boîtiers Linux (notamment de la marque Leadcool) et proposé en application sur Android TV. Il se connecte à un abonnement via les identifiants **Xtream Codes** (serveur, nom d'utilisateur, mot de passe) et affiche les chaînes, la VOD et le guide TV.",
    sections: [
      {
        id: "configurer",
        h2: "Configurer Lxtream avec vos identifiants",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez Lxtream", text: "Sur un boîtier Leadcool, l'application se trouve dans le menu principal. Sur Android TV, installez-la depuis la boutique ou le site de l'éditeur." },
              { title: "Ajoutez un compte", text: "Choisissez « Ajouter un utilisateur » ou « Xtream Codes »." },
              { title: "Entrez serveur, identifiant, mot de passe", text: "Utilisez exactement les informations envoyées par Stream Bleu (URL avec http:// et le port s'il y en a un)." },
              { title: "Actualisez", text: "Lancez une mise à jour des chaînes puis de l'EPG depuis les paramètres." },
            ],
          },
        ],
      },
      {
        id: "erreurs",
        h2: "Erreurs fréquentes sur Lxtream",
        blocks: [
          {
            type: "ul",
            items: [
              "**Erreur de connexion** : vérifiez l'URL du serveur et la date/heure du boîtier (une date erronée bloque certaines connexions).",
              "**Liste vide** : l'abonnement a peut-être expiré ; vérifiez-le dans votre e-mail de confirmation.",
              "**Image qui saccade** : les boîtiers Linux d'entrée de gamme décodent mal certaines chaînes 4K ; choisissez la version HD.",
            ],
          },
          { type: "p", text: "Si votre boîtier montre ses limites, comparez les modèles plus récents dans notre guide [boîtier IPTV](/boitier-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Lxtream est-il compatible avec Stream Bleu ?", a: "Oui. Lxtream fonctionne avec les identifiants Xtream Codes que nous envoyons à l'activation." },
      { q: "Où télécharger Lxtream ?", a: "Sur les boîtiers Leadcool, il est préinstallé. Sur Android TV, passez par la boutique d'applications ou le site officiel de l'éditeur, jamais par un lien inconnu." },
      { q: "Lxtream accepte-t-il les listes M3U ?", a: "Lxtream est pensé pour les comptes Xtream Codes. Pour une simple liste M3U, un lecteur comme VLC ou TiviMate est plus adapté." },
      { q: "Où télécharger Lxtream ?", a: "Lxtream est généralement préinstallé sur certains boîtiers, notamment ceux de la marque Leadcool, ou disponible dans la boutique de la box. Sur Android TV, si vous ne le trouvez pas, TiviMate ou IPTV Smarters Pro font le même travail avec vos identifiants Xtream Codes." },
      { q: "Lxtream fonctionne-t-il sur Android TV ?", a: "Oui si la version est proposée pour votre box. Sinon, utilisez TiviMate ou Smarters Player Lite depuis Google Play : vos identifiants Stream Bleu y fonctionnent de la même manière." },
    ],
    related: ["/boitier-iptv", "/tivimate", "/stbemu", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "3 min",
  },

  // ── STBEmu ─────────────────────────────────────────────────────
  {
    slug: "/stbemu",
    group: "apps",
    navLabel: "STBEmu",
    cardText: "STBEmu : émulateur MAG sur Android avec portail et MAC.",
    title: "STBEmu Pro : émuler un boîtier MAG sur Android (2026)",
    description: "STBEmu et STBEmu Pro : émulez un boîtier MAG sur Android TV ou Fire TV. Configuration du portail, de l'adresse MAC et du modèle, différences gratuit / Pro.",
    keywords: ["stb emu pro", "stbemu", "stbemu pro", "iptv stbemu", "stbemu iptv", "stbemu 4k"],
    badge: "Application · STBEmu",
    h1: "STBEmu : transformer un appareil Android en boîtier MAG",
    intro: "**STBEmu** est une application Android qui imite un boîtier IPTV MAG d'Infomir. Elle permet d'utiliser un abonnement de type « portail » (adresse du portail + adresse MAC) sur une Android TV, un Fire TV Stick ou une tablette. La version gratuite suffit pour démarrer ; **STBEmu Pro** (payante) retire les publicités et ajoute plusieurs profils.",
    sections: [
      {
        id: "configurer",
        h2: "Configurer STBEmu avec un portail",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Installez STBEmu", text: "Depuis Google Play sur Android TV ; sur Fire TV, via [Downloader](/downloader-iptv)." },
              { title: "Créez un profil", text: "Paramètres → Profils → Nouveau profil." },
              { title: "Renseignez l'URL du portail", text: "Paramètres du portail → URL : saisissez l'adresse transmise par votre fournisseur." },
              { title: "Choisissez le modèle et la MAC", text: "Paramètres STB → Modèle (ex. MAG 250 ou MAG 322) ; l'adresse MAC doit être celle enregistrée chez le fournisseur. Redémarrez le portail." },
            ],
          },
        ],
      },
      {
        id: "gratuit-pro",
        h2: "STBEmu gratuit ou STBEmu Pro ?",
        blocks: [
          {
            type: "table",
            head: ["", "STBEmu (gratuit)", "STBEmu Pro"],
            rows: [
              ["Publicités", "Oui", "Non"],
              ["Profils multiples", "Limité", "Oui"],
              ["Mises à jour", "Oui", "Oui"],
            ],
          },
          { type: "p", text: "STBEmu a du sens si votre abonnement ne fournit qu'un portail. Avec un abonnement Stream Bleu, vous recevez aussi des identifiants Xtream Codes : [TiviMate](/tivimate) ou [IPTV Smarters Pro](/iptv-smarters-pro) offrent alors une interface plus moderne. Pour un vrai boîtier, voir [IPTV sur box MAG](/iptv-mag-box-france)." },
        ],
      },
    ],
    faq: [
      { q: "À quoi sert STBEmu ?", a: "STBEmu émule un boîtier MAG sur un appareil Android. Il permet d'utiliser un abonnement IPTV basé sur un portail Stalker (URL + adresse MAC) sans acheter de boîtier MAG." },
      { q: "STBEmu fonctionne-t-il sur Fire TV Stick ?", a: "Oui, en l'installant avec l'application Downloader. La télécommande Fire TV fonctionne pour naviguer dans le portail." },
      { q: "Pourquoi STBEmu affiche « Authentication failed » ?", a: "L'adresse MAC saisie ne correspond pas à celle enregistrée chez le fournisseur, ou le portail est mal saisi. Vérifiez les deux et redémarrez le portail." },
      { q: "STBEmu fonctionne-t-il en 4K ?", a: "STBEmu peut lire des chaînes 4K si l'appareil Android et la connexion le permettent (environ 25 Mbit/s par écran). Le décodage dépend surtout de la puissance de la box ou de la TV." },
    ],
    related: ["/iptv-mag-box-france", "/tivimate", "/lxtream", "/boitier-iptv", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "4 min",
  },

  // ── VLC ────────────────────────────────────────────────────────
  {
    slug: "/iptv-vlc",
    group: "apps",
    navLabel: "IPTV sur VLC",
    cardText: "Lire une liste M3U IPTV avec VLC sur PC, Mac et mobile.",
    title: "IPTV sur VLC : lire une liste M3U sur PC, Mac, mobile",
    description: "Regarder l'IPTV avec VLC : ouvrir une URL M3U sur Windows, Mac, Android et iPhone, afficher les chaînes, régler la mise en cache et limiter les coupures.",
    keywords: ["iptv vlc", "vlc ip tv", "iptv sur vlc", "iptv vlc media player", "iptv vlc player", "ip tv vlc", "vlc iptv m3u"],
    badge: "Guide · VLC",
    h1: "IPTV sur VLC : lire une liste M3U en 2 minutes",
    intro: "**VLC media player** lit les listes IPTV M3U gratuitement sur Windows, Mac, Linux, Android et iPhone. Il suffit d'ouvrir l'URL de votre playlist via « Ouvrir un flux réseau ». VLC n'a pas de vrai guide TV ni de rubriques VOD, mais c'est l'outil idéal pour **tester une liste IPTV** ou regarder une chaîne sur un ordinateur sans rien installer d'autre.",
    sections: [
      {
        id: "pc-mac",
        h2: "Ouvrir une playlist IPTV dans VLC (Windows et Mac)",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Installez VLC", text: "Téléchargez-le uniquement depuis le site officiel [videolan.org](https://www.videolan.org/vlc/)." },
              { title: "Ouvrez un flux réseau", text: "Windows : Média → Ouvrir un flux réseau (Ctrl+N). Mac : Fichier → Ouvrir le réseau." },
              { title: "Collez votre URL M3U", text: "Collez le lien M3U fourni avec votre abonnement et cliquez sur Lire." },
              { title: "Affichez la liste des chaînes", text: "Vue → Liste de lecture (Ctrl+L) pour naviguer et rechercher une chaîne." },
            ],
          },
        ],
      },
      {
        id: "mobile",
        h2: "VLC sur Android et iPhone",
        blocks: [
          { type: "p", text: "Dans VLC mobile, ouvrez l'onglet « Réseau » puis « Flux réseau » et collez l'URL M3U. Pour une vraie expérience TV sur téléphone, avec catégories et guide, préférez [IPTV Smarters Pro](/iptv-smarters-pro) sur Android ou [Smarters Player Lite](/smarters-player-lite) sur iPhone." },
        ],
      },
      {
        id: "coupures",
        h2: "Réduire les coupures IPTV dans VLC",
        blocks: [
          {
            type: "ul",
            items: [
              "Outils → Préférences → Afficher tous les paramètres → Entrée/Codecs → **Mise en cache réseau** : passez de 1000 à 3000 ms.",
              "Activez le décodage matériel (Entrée/Codecs → Décodage matériel) pour la 4K HEVC.",
              "Branchez le PC en Ethernet si possible : voir [IPTV Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet).",
            ],
          },
        ],
      },
      {
        id: "limites",
        h2: "VLC ou un vrai lecteur IPTV ?",
        blocks: [
          { type: "p", text: "VLC charge toute la liste d'un coup, ce qui peut être long avec des dizaines de milliers d'entrées, et il n'affiche pas le programme en cours. Pour un usage quotidien sur ordinateur, suivez notre guide [IPTV sur PC et Mac](/iptv-pc-mac). Pour comprendre le format des listes, lisez [M3U IPTV : le guide](/blog/m3u-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on regarder l'IPTV avec VLC ?", a: "Oui. VLC lit les listes M3U et les flux IPTV via Média → Ouvrir un flux réseau. Il suffit de coller l'URL de la playlist." },
      { q: "VLC affiche-t-il le guide TV (EPG) ?", a: "Non, pas de véritable grille EPG dans VLC. Pour le guide des programmes, utilisez IPTV Smarters, TiviMate ou Kodi." },
      { q: "Pourquoi VLC coupe-t-il pendant la lecture IPTV ?", a: "Le plus souvent, la mise en cache réseau est trop faible ou le Wi-Fi instable. Augmentez la mise en cache à 3000 ms et privilégiez l'Ethernet." },
      { q: "VLC fonctionne-t-il sur Smart TV ?", a: "VLC existe sur Android TV et Apple TV. Sur Samsung et LG, il n'est pas disponible ; utilisez IBO Player ou Smart IPTV." },
      { q: "Comment regarder l'IPTV avec VLC media player ?", a: "Dans VLC media player, ouvrez Média → Ouvrir un flux réseau, collez votre lien M3U et validez. La liste des chaînes apparaît dans la playlist (Ctrl+L). C'est la méthode la plus rapide pour tester un abonnement IPTV sur PC ou Mac." },
    ],
    related: ["/iptv-pc-mac", "/blog/m3u-iptv", "/iptv-smarters-pro", "/iptv-windows-france", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "5 min",
  },

  // ── Downloader ─────────────────────────────────────────────────
  {
    slug: "/downloader-iptv",
    group: "apps",
    navLabel: "Downloader IPTV",
    cardText: "Utiliser Downloader pour installer un lecteur IPTV sur Fire TV.",
    title: "Downloader IPTV : installer une app sur Fire TV Stick",
    description: "Downloader sur Fire TV Stick : activer les sources inconnues, installer IPTV Smarters Pro, TiviMate ou Smart IPTV en APK et éviter les fichiers dangereux.",
    keywords: ["downloader iptv", "iptv smarters downloader", "iptv smarter pro downloader", "smart iptv downloader", "iptv smasters pro downloader", "smart iptv fire stick", "smarters iptv fire stick", "iptv sur fire stick"],
    badge: "Guide · Downloader",
    h1: "Downloader : installer un lecteur IPTV sur Fire TV Stick",
    intro: "**Downloader** est une application gratuite de l'Amazon Appstore qui permet de télécharger un fichier APK par son adresse et de l'installer sur un Fire TV Stick. C'est la méthode standard pour installer un lecteur IPTV comme [IPTV Smarters Pro](/iptv-smarters-pro) ou [TiviMate](/tivimate) lorsqu'il n'est pas proposé dans la boutique Amazon.",
    sections: [
      {
        id: "activer",
        h2: "Préparer le Fire TV Stick",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Installez Downloader", text: "Accueil → Rechercher → « Downloader » (éditeur AFTVnews) → Télécharger." },
              { title: "Activez les options pour les développeurs", text: "Paramètres → Ma Fire TV → À propos → cliquez 7 fois sur le nom de l'appareil si le menu développeur n'apparaît pas." },
              { title: "Autorisez Downloader", text: "Paramètres → Ma Fire TV → Options pour les développeurs → Installer des applications inconnues → Downloader : Activé." },
            ],
          },
        ],
      },
      {
        id: "installer-apk",
        h2: "Télécharger un lecteur IPTV avec Downloader",
        blocks: [
          {
            type: "ol",
            items: [
              "Ouvrez Downloader et placez-vous dans le champ d'adresse.",
              "Saisissez l'adresse de téléchargement **officielle** de l'application (site de l'éditeur) ou son code court Downloader publié par l'éditeur.",
              "Validez, attendez la fin du téléchargement, puis choisissez « Installer ».",
              "À la fin, sélectionnez « Supprimer » pour effacer l'APK et récupérer de l'espace.",
            ],
          },
          { type: "callout", title: "🔒 Sécurité", text: "N'installez jamais un APK « premium débloqué » ou venant d'un code partagé sur un forum. Un lecteur IPTV légitime n'a pas besoin de version piratée : les versions officielles gratuites suffisent." },
        ],
      },
      {
        id: "apres",
        h2: "Après l'installation",
        blocks: [
          { type: "p", text: "Ouvrez le lecteur, ajoutez vos identifiants Xtream Codes, et c'est prêt. Le guide complet Fire TV est sur notre page [IPTV sur Fire TV Stick](/iptv-firestick-france), et la configuration détaillée des lecteurs sur [TiviMate](/tivimate) et [IPTV Smarters Pro](/iptv-smarters-pro)." },
        ],
      },
    ],
    faq: [
      { q: "Downloader est-il légal ?", a: "Oui. Downloader est une application officielle de l'Amazon Appstore qui sert à télécharger des fichiers. La légalité dépend de ce que vous téléchargez : installez uniquement des applications officielles." },
      { q: "Pourquoi « Installer des applications inconnues » n'apparaît pas ?", a: "Le menu Options pour les développeurs est masqué sur les Fire TV récents. Allez dans Ma Fire TV → À propos et cliquez 7 fois sur le nom de l'appareil pour l'afficher." },
      { q: "Quel lecteur IPTV installer avec Downloader ?", a: "TiviMate pour la meilleure expérience TV, ou IPTV Smarters Pro pour une option entièrement gratuite. Les deux fonctionnent avec un abonnement Stream Bleu." },
      { q: "Downloader fonctionne-t-il sur Android TV ?", a: "Oui, Downloader existe aussi sur Google Play pour Android TV, mais la plupart des lecteurs IPTV y sont directement disponibles dans le Play Store." },
      { q: "Comment installer IPTV Smarters Pro avec Downloader ?", a: "Installez Downloader depuis l'Appstore Amazon, autorisez-le dans Options pour les développeurs → Installer des applications inconnues, puis saisissez l'adresse officielle de l'APK IPTV Smarters Pro dans Downloader. La même méthode fonctionne pour d'autres lecteurs comme Smart IPTV sur Fire Stick." },
    ],
    related: ["/iptv-firestick-france", "/tivimate", "/iptv-smarters-pro", "/stbemu", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: "2026-10-23",
    readTime: "4 min",
  },

  // ── IPTV Smarters Pro ne fonctionne pas ────────────────────────
  {
    slug: "/iptv-smarters-pro-ne-fonctionne-pas",
    group: "apps",
    parent: { href: "/iptv-smarters-pro", label: "IPTV Smarters Pro" },
    navLabel: "Smarters Pro ne fonctionne pas",
    cardText: "Bloqué au chargement, absent sur Samsung, introuvable sur Google Play : les solutions.",
    title: "IPTV Smarters Pro ne fonctionne pas : 9 solutions (2026)",
    description: "IPTV Smarters Pro bloqué au chargement, absent sur TV Samsung ou introuvable sur Google Play ? Les solutions, de la plus rapide à la plus complète.",
    keywords: ["iptv smarters pro ne fonctionne pas", "iptv smasters pro ne fonctionne pas sur tv samsung", "iptv smarter pro bloqué", "iptv smasters pro introuvable google play", "iptv smarters bloqué au chargement", "smarters pro ne marche plus"],
    badge: "Dépannage · IPTV Smarters Pro",
    h1: "IPTV Smarters Pro ne fonctionne pas : les solutions, de la plus rapide à la plus complète",
    intro: "Quand **IPTV Smarters Pro ne fonctionne pas**, la cause tient presque toujours en trois familles : des identifiants mal saisis, un problème de réseau ou de cache, ou une application absente ou obsolète sur votre appareil (cas typique des TV Samsung et de Google Play). Suivez la liste ci-dessous dans l'ordre : les cinq premières vérifications règlent la grande majorité des pannes en moins de cinq minutes.",
    tldr: [
      "Redémarrez la box internet et l'appareil, puis vérifiez l'URL du serveur (avec http:// et le port).",
      "Écran noir ou chargement infini : changez de lecteur dans Paramètres → Player.",
      "Sur TV Samsung, Smarters est souvent indisponible : utilisez [IBO Player](/ibo-player) ou un [Fire TV Stick](/iptv-firestick-france).",
    ],
    sections: [
      {
        id: "rapide",
        h2: "Les 9 vérifications, dans l'ordre",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Redémarrez box internet et appareil", text: "Débranchez la box 30 secondes, puis éteignez complètement la TV ou la clé (pas seulement la veille). C'est la solution la plus souvent efficace." },
              { title: "Testez une autre chaîne et la VOD", text: "Si une seule chaîne ne marche pas, le problème vient du flux, pas de l'application : signalez-le au support." },
              { title: "Vérifiez l'URL du serveur", text: "Elle doit commencer par http:// et inclure le port s'il vous a été communiqué. Une espace en trop suffit à provoquer « Invalid credentials »." },
              { title: "Vérifiez la date d'expiration", text: "Dans l'application, menu Compte (« Account info ») : un abonnement expiré affiche des chaînes qui ne chargent plus." },
              { title: "Changez de lecteur interne", text: "Paramètres → Player → choisissez un autre moteur de lecture (lecteur natif, VLC ou lecteur externe) : cela règle la plupart des écrans noirs." },
              { title: "Videz le cache", text: "Sur Android et Fire TV : Paramètres de l'appareil → Applications → IPTV Smarters → Vider le cache. Puis relancez." },
              { title: "Passez en Ethernet ou rapprochez le Wi-Fi", text: "Les coupures aux heures de pointe viennent souvent du Wi-Fi. Voir [IPTV Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet)." },
              { title: "Mettez à jour ou réinstallez l'application", text: "Depuis une source officielle uniquement. Les versions modifiées trouvées sur des sites tiers sont une cause fréquente de plantages." },
              { title: "Contactez le support", text: "Si rien ne change, notez le message d'erreur exact et l'appareil utilisé, puis [contactez-nous](/contact) : nous vérifions votre ligne côté serveur." },
            ],
          },
        ],
      },
      {
        id: "symptomes",
        h2: "Diagnostic par symptôme",
        blocks: [
          {
            type: "table",
            head: ["Symptôme", "Cause la plus probable", "Solution"],
            rows: [
              ["« Invalid credentials » / « Authorization failed »", "Faute dans l'identifiant, le mot de passe ou l'URL", "Recopiez les identifiants depuis l'e-mail, sans espace"],
              ["Bloqué sur l'écran de chargement", "Liste volumineuse, réseau lent ou cache plein", "Videz le cache, redémarrez la box, réessayez en Ethernet"],
              ["Chaînes qui tournent sans fin", "Lecteur interne inadapté", "Paramètres → Player : changez de moteur de lecture"],
              ["Son sans image (ou l'inverse)", "Codec non pris en charge par l'appareil", "Essayez VLC comme lecteur externe ou un autre appareil"],
              ["Pas de guide TV", "EPG non installé ou trop ancien", "Live TV → menu → Install EPG, puis rafraîchir"],
              ["Coupures le soir uniquement", "Wi-Fi saturé ou ralentissement réseau", "Ethernet ; voir [IPTV ne fonctionne plus](/blog/iptv-ne-fonctionne-plus)"],
              ["« Expired » ou chaînes vides", "Abonnement arrivé à échéance", "Renouvelez depuis la page [tarifs](/tarifs)"],
            ],
          },
        ],
      },
      {
        id: "samsung",
        h2: "IPTV Smarters Pro ne fonctionne pas sur TV Samsung",
        blocks: [
          { type: "p", text: "C'est la recherche la plus fréquente sur le sujet. Sur la plupart des TV Samsung (système Tizen), IPTV Smarters Pro n'est pas ou plus proposé dans le Smart Hub, ou seulement dans une version ancienne qui n'est plus mise à jour. Ce n'est pas une panne de votre abonnement : c'est la disponibilité de l'application qui pose problème." },
          {
            type: "cards",
            items: [
              { title: "IBO Player", text: "Disponible sur Samsung, activation par adresse MAC, offert avec le forfait 12 mois.", href: "/ibo-player" },
              { title: "Flix IPTV", text: "Autre lecteur fiable sur Tizen, même principe d'activation.", href: "/flix-iptv" },
              { title: "Fire TV Stick", text: "Branché en HDMI, il permet d'installer IPTV Smarters Pro ou TiviMate.", href: "/iptv-firestick-france" },
            ],
          },
          { type: "p", text: "Guide complet : [IPTV sur TV Samsung](/iptv-samsung-tv-france). Même logique sur LG : [IPTV sur LG](/iptv-lg-tv-france)." },
        ],
      },
      {
        id: "google-play",
        h2: "IPTV Smarters Pro introuvable sur Google Play",
        blocks: [
          { type: "p", text: "L'application a été retirée, renommée ou restreinte à plusieurs reprises sur Google Play, si bien qu'on ne la trouve pas toujours en la cherchant par son nom. Deux solutions sûres :" },
          {
            type: "ol",
            items: [
              "Installer **Smarters Player Lite**, la version publiée par le même éditeur sur Google Play et l'App Store, avec les mêmes identifiants. Voir [Smarters Player Lite](/smarters-player-lite).",
              "Télécharger l'**APK depuis le site officiel** de l'éditeur. Sur Fire TV, passez par l'application [Downloader](/downloader-iptv).",
            ],
          },
          { type: "callout", title: "⚠️ À éviter", text: "Les APK « Smarters Premium », « Pro débloqué » ou « mod » proposés sur des sites tiers. Ils sont souvent instables et peuvent contenir des logiciels malveillants." },
        ],
      },
      {
        id: "alternatives",
        h2: "Si Smarters ne vous convient décidément pas",
        blocks: [
          { type: "p", text: "Vos identifiants Stream Bleu fonctionnent dans n'importe quel lecteur compatible Xtream Codes ou M3U. Sur Android TV et Fire TV, [TiviMate](/tivimate) est souvent plus rapide sur les grosses listes ; sur Samsung et LG, [IBO Player](/ibo-player) ; sur PC, [VLC](/iptv-vlc). Le comparatif complet est sur notre page [applications IPTV](/applications-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Pourquoi IPTV Smarters Pro ne fonctionne plus ?", a: "Le plus souvent à cause d'un réseau instable, d'un cache plein, d'identifiants mal saisis ou d'un abonnement expiré. Redémarrez la box et l'appareil, vérifiez l'URL du serveur et la date d'expiration, puis changez de lecteur interne dans les paramètres." },
      { q: "Pourquoi IPTV Smarters Pro ne fonctionne pas sur ma TV Samsung ?", a: "Parce que l'application n'est généralement pas, ou plus, disponible et mise à jour sur le système Tizen de Samsung. Utilisez IBO Player ou Flix IPTV depuis le Smart Hub, ou branchez un Fire TV Stick." },
      { q: "IPTV Smarters Pro est bloqué au chargement, que faire ?", a: "Videz le cache de l'application, redémarrez la box internet et réessayez, idéalement en Ethernet. Si le blocage persiste, réinstallez l'application depuis une source officielle." },
      { q: "IPTV Smarters Pro est introuvable sur Google Play, est-ce normal ?", a: "Oui, l'application a été retirée ou renommée plusieurs fois. Installez Smarters Player Lite depuis Google Play, ou l'APK depuis le site officiel de l'éditeur." },
      { q: "Mon abonnement est-il en cause si Smarters ne marche pas ?", a: "Pas forcément. Si plusieurs chaînes et la VOD fonctionnent dans un autre lecteur comme VLC, c'est l'application qui est en cause. Sinon, contactez le support avec le message d'erreur exact." },
      { q: "IPTV Smarters Pro est bloqué au chargement, que faire ?", a: "Vérifiez d'abord votre connexion et l'URL du serveur, puis videz le cache de l'application et changez de lecteur interne dans les paramètres. Si l'application reste bloquée sur toutes les chaînes, testez le même compte dans VLC pour savoir si le problème vient de l'application ou du service." },
    ],
    related: ["/iptv-smarters-pro", "/smarters-player-lite", "/blog/iptv-ne-fonctionne-plus", "/iptv-samsung-tv-france", "/ibo-player", "/downloader-iptv", "/tivimate", "/contact"],
    cta: { title: "Une application qui marche, un service qui suit", text: "Testez Stream Bleu 24h gratuitement dans le lecteur de votre choix." },
    schema: "Article",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readTime: "6 min",
  },

  // ── MyTVOnline ─────────────────────────────────────────────────
  {
    slug: "/mytvonline",
    group: "apps",
    navLabel: "MyTVOnline 3",
    cardText: "L'application IPTV des boîtiers Formuler : configuration et réglages.",
    title: "MyTVOnline 3 : configurer l'IPTV sur Formuler (2026)",
    description: "MyTVOnline 3 sur boîtier Formuler : ajouter un portail Xtream Codes, M3U ou Stalker, régler le guide TV et le replay, et corriger les erreurs courantes.",
    keywords: ["mytvonline", "mytvonline 3", "mytvonline 2", "my tv online", "mytvonline formuler", "mytvonline xtream"],
    badge: "Application · MyTVOnline",
    h1: "MyTVOnline 3 : configurer votre abonnement IPTV sur Formuler",
    intro: "**MyTVOnline** est l'application IPTV développée par Formuler et préinstallée sur ses boîtiers ; **MyTVOnline 3** équipe les modèles récents comme le Formuler Z11 Pro Max. Elle accepte trois types de connexion (Xtream Codes, liste M3U et portail Stalker) et offre un guide TV, le replay quand le service le permet et une gestion fine des favoris. Voici comment y ajouter votre abonnement et la régler pour un zapping rapide.",
    tldr: [
      "MyTVOnline n'existe que sur les boîtiers Formuler : ce n'est pas une application à télécharger ailleurs.",
      "Connexion recommandée : Xtream Codes (chaînes, VOD et guide TV chargés d'un coup).",
      "Le Formuler restant une box Android, vous pouvez aussi y installer [TiviMate](/tivimate).",
    ],
    image: { src: "/abonnement-iptv-france-5.webp", alt: "MyTVOnline 3 sur boîtier Formuler : guide des programmes IPTV" },
    sections: [
      {
        id: "versions",
        h2: "MyTVOnline 2 ou MyTVOnline 3 : quelle version sur quel Formuler ?",
        blocks: [
          {
            type: "table",
            head: ["Boîtier Formuler", "Version MyTVOnline", "Remarque"],
            rows: [
              ["Z11 Pro Max, Z11 Pro", "MyTVOnline 3", "Interface la plus récente et la plus rapide"],
              ["Z10 Pro Max, Z10 SE", "MyTVOnline 2 ou 3 selon mise à jour", "Vérifiez les mises à jour système"],
              ["Z8, Z8 Pro", "MyTVOnline 2", "Fonctionne encore, plus lent sur les grosses listes"],
              ["Z7+, Z+, ZX", "MyTVOnline (1re génération)", "Matériel ancien, à remplacer pour la 4K"],
            ],
            caption: "Version indicative ; elle dépend du firmware installé sur votre boîtier.",
          },
          { type: "p", text: "Comparatif détaillé des modèles sur notre page [boîtier Formuler](/boitier-formuler)." },
        ],
      },
      {
        id: "configurer",
        h2: "Ajouter votre abonnement dans MyTVOnline 3",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Ouvrez MyTVOnline 3", text: "Depuis l'écran d'accueil du Formuler. Au premier lancement, acceptez les conditions et choisissez la langue." },
              { title: "Ajoutez un portail", text: "Sélectionnez « Add Portal » (ou « Ajouter un portail »), puis le type de connexion : Xtream Codes, M3U ou Stalker." },
              { title: "Xtream Codes (recommandé)", text: "Donnez un nom au portail, puis saisissez l'URL du serveur, l'identifiant et le mot de passe reçus par e-mail après votre [essai gratuit](/essai-gratuit) ou votre commande." },
              { title: "Ou M3U / Stalker", text: "En M3U, collez votre lien de liste. En Stalker (portail MAG), indiquez l'URL du portail : l'adresse MAC du Formuler doit avoir été communiquée au fournisseur." },
              { title: "Chargez chaînes et guide TV", text: "MyTVOnline télécharge les catégories, la VOD et l'EPG. Laissez-le terminer avant de zapper la première fois." },
            ],
          },
        ],
      },
      {
        id: "reglages",
        h2: "Les réglages qui changent tout",
        blocks: [
          {
            type: "ul",
            items: [
              "**Mise à jour de l'EPG** : programmez un rafraîchissement automatique quotidien pour garder un guide TV à jour.",
              "**Favoris** : regroupez vos chaînes dans une liste dédiée pour éviter de parcourir des milliers d'entrées.",
              "**Masquer des catégories** : cachez les bouquets que vous ne regardez jamais ; le chargement devient nettement plus rapide.",
              "**Contrôle parental** : protégez certaines catégories par un code.",
              "**Connexion filaire** : branchez le Formuler en Ethernet, c'est l'un de ses principaux atouts face à une clé HDMI.",
            ],
          },
        ],
      },
      {
        id: "erreurs",
        h2: "MyTVOnline ne fonctionne pas : erreurs courantes",
        blocks: [
          {
            type: "table",
            head: ["Problème", "Cause probable", "Solution"],
            rows: [
              ["Échec de connexion au portail", "URL, identifiant ou mot de passe incorrect", "Recopiez les informations, avec http:// et le port"],
              ["Portail Stalker refusé", "Adresse MAC non enregistrée chez le fournisseur", "Communiquez la MAC exacte (étiquette sous le boîtier)"],
              ["Guide TV vide", "EPG pas encore téléchargé", "Forcez la mise à jour de l'EPG dans les paramètres du portail"],
              ["Zapping lent", "Liste trop volumineuse, Wi-Fi", "Masquez des catégories, passez en Ethernet"],
              ["Coupures le soir", "Réseau saturé", "Voir [IPTV ne fonctionne plus](/blog/iptv-ne-fonctionne-plus)"],
            ],
          },
        ],
      },
      {
        id: "alternatives",
        h2: "MyTVOnline, TiviMate ou IPTV Smarters sur Formuler ?",
        blocks: [
          { type: "p", text: "MyTVOnline est pensé pour la télécommande Formuler et gère nativement les portails Stalker, ce que la plupart des lecteurs Android ne font pas. Si vous préférez l'interface de [TiviMate](/tivimate) ou d'[IPTV Smarters Pro](/iptv-smarters-pro), installez-les depuis le Play Store des modèles Android TV : vos identifiants Stream Bleu fonctionnent dans les trois. Les boîtiers [MAG](/iptv-mag-box-france) restent l'autre option pour une utilisation en portail pur." },
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce que MyTVOnline ?", a: "MyTVOnline est l'application IPTV développée par Formuler pour ses boîtiers. Elle lit les abonnements en Xtream Codes, en liste M3U ou en portail Stalker, avec guide TV, favoris et contrôle parental." },
      { q: "Peut-on installer MyTVOnline sur une autre box ou une Smart TV ?", a: "Non, MyTVOnline est réservée aux boîtiers Formuler. Sur un autre appareil, utilisez TiviMate, IPTV Smarters Pro ou IBO Player selon le modèle." },
      { q: "MyTVOnline inclut-il des chaînes ?", a: "Non. C'est un lecteur : il faut y ajouter un abonnement IPTV. Stream Bleu fonctionne avec MyTVOnline en Xtream Codes, en M3U ou en portail." },
      { q: "Quelle différence entre MyTVOnline 2 et MyTVOnline 3 ?", a: "MyTVOnline 3 est la version la plus récente, livrée sur les Formuler Z11. Son interface est plus rapide et mieux adaptée aux grosses listes ; MyTVOnline 2 équipe les modèles plus anciens comme le Z8." },
      { q: "Faut-il choisir Xtream Codes ou portail dans MyTVOnline ?", a: "Xtream Codes est le plus simple : il charge chaînes, VOD et guide TV sans enregistrement d'adresse MAC. Le portail Stalker est utile si vous utilisez aussi un boîtier MAG avec le même compte." },
    ],
    related: ["/boitier-formuler", "/iptv-mag-box-france", "/tivimate", "/boitier-iptv", "/applications-iptv", "/abonnement-iptv", "/essai-gratuit"],
    schema: "Article",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readTime: "5 min",
  },

  // ── Lecteur IPTV en ligne (navigateur) ─────────────────────────
  {
    slug: "/lecteur-iptv-en-ligne",
    group: "apps",
    navLabel: "Lecteur IPTV en ligne",
    cardText: "Regarder l'IPTV dans un navigateur : lecteurs M3U en ligne, limites et alternatives.",
    title: "Lecteur IPTV en ligne : lire une liste M3U sur le web",
    description: "Lecteur IPTV en ligne et lecteur M3U web : ce qui marche dans Chrome ou Safari, pourquoi certaines chaînes ne se lancent pas et quelle appli installer.",
    keywords: ["lecteur iptv en ligne", "lecteur m3u en ligne", "iptv web", "iptv online player", "m3u player online", "m3u online", "iptv browser", "iptv chrome", "iptv smarters web", "iptv smarters online", "web iptv smarters", "iptv smarters pro web", "iptv web player"],
    badge: "Application · Lecteur web",
    h1: "Lecteur IPTV en ligne : regarder une liste M3U dans le navigateur",
    intro: "Un **lecteur IPTV en ligne** (ou **lecteur M3U en ligne**) est une page web dans laquelle on colle un lien M3U ou des identifiants Xtream Codes pour regarder la TV sans rien installer. C'est pratique sur un ordinateur de bureau ou un Chromebook, mais les navigateurs imposent des limites techniques qui font que **certaines chaînes ne se lancent jamais** dans un « IPTV web player ». Cette page explique ce qui fonctionne dans Chrome, Edge, Firefox ou Safari, les risques à connaître avant de coller vos identifiants sur un site inconnu, et les alternatives installables qui marchent à tous les coups.",
    tldr: [
      "Un lecteur web lit bien les flux HLS (.m3u8) servis en HTTPS ; les flux MPEG-TS ou en HTTP simple sont souvent bloqués par le navigateur.",
      "Ne collez jamais vos identifiants dans un site dont vous ne connaissez pas l'éditeur.",
      "Sur PC ou Mac, [VLC](/iptv-vlc) ou une application de bureau reste plus fiable : voir [IPTV sur PC et Mac](/iptv-pc-mac).",
    ],
    sections: [
      {
        id: "fonctionnement",
        h2: "Comment fonctionne un lecteur IPTV web ?",
        blocks: [
          { type: "p", text: "Un lecteur IPTV en ligne fait la même chose qu'une application : il télécharge votre [liste M3U](/blog/m3u-iptv) (ou interroge le serveur Xtream Codes), affiche les catégories de chaînes, puis ouvre le flux vidéo choisi. La différence, c'est que la lecture se fait **dans le moteur vidéo du navigateur**, qui n'accepte que certains formats et certaines connexions." },
          {
            type: "table",
            head: ["Élément", "Dans une application (Smarters, TiviMate, VLC)", "Dans un navigateur"],
            rows: [
              ["Flux HLS (.m3u8)", "Oui", "Oui dans Safari ; dans Chrome, Edge et Firefox via un lecteur JavaScript intégré à la page"],
              ["Flux MPEG-TS (.ts)", "Oui", "Rarement : il faut un module de conversion dans la page"],
              ["Flux en http:// sur une page en https://", "Oui", "Bloqué (« contenu mixte »)"],
              ["Serveur qui n'autorise pas les requêtes d'un autre site", "Sans effet", "Bloqué (règle CORS)"],
              ["Guide TV (EPG XMLTV)", "Oui", "Selon le lecteur"],
            ],
            caption: "Les navigateurs appliquent ces règles de sécurité à tous les sites ; ce n'est pas propre à l'IPTV.",
          },
          { type: "p", text: "C'est pour cela qu'une même liste peut fonctionner parfaitement dans [VLC](/iptv-vlc) et rester sur un écran noir dans un lecteur M3U en ligne : le problème vient du navigateur, pas de l'abonnement." },
        ],
      },
      {
        id: "smarters-web",
        h2: "IPTV Smarters en version web : ce qu'il faut savoir",
        blocks: [
          { type: "p", text: "Les recherches « IPTV Smarters web », « IPTV Smarters online » ou « web IPTV Smarters » reviennent souvent. IPTV Smarters propose bien une déclinaison web (« WebTV »), mais elle est destinée aux fournisseurs, qui l'hébergent sur leur propre adresse : il n'existe pas de site public officiel où chacun pourrait se connecter. Méfiez-vous des pages qui reprennent le nom et le logo d'IPTV Smarters pour vous demander vos identifiants." },
          { type: "p", text: "Sur ordinateur, l'application [IPTV Smarters Pro](/iptv-smarters-pro) existe en version Windows et macOS : c'est elle qu'il faut privilégier si vous aimez son interface." },
        ],
      },
      {
        id: "securite",
        h2: "Les 4 précautions avant d'utiliser un lecteur M3U en ligne",
        blocks: [
          {
            type: "ol",
            items: [
              "**Identifiez l'éditeur du site** : mentions légales, contact, ancienneté. Un lien M3U contient votre identifiant et votre mot de passe en clair.",
              "**Préférez un lecteur qui fonctionne en local** : certains lecteurs web traitent la liste dans votre navigateur sans l'envoyer à leur serveur ; c'est généralement indiqué sur la page.",
              "**Ne partagez pas votre lien** dans un « IPTV checker » ou un « M3U checker » en ligne inconnu : vos accès pourraient être réutilisés par d'autres, et votre compte bloqué pour connexions multiples.",
              "**Changez votre mot de passe** auprès de votre fournisseur si vous avez un doute. Chez Stream Bleu, écrivez au [support](/contact).",
            ],
          },
        ],
      },
      {
        id: "alternatives",
        h2: "Les alternatives installables, par appareil",
        blocks: [
          { type: "p", text: "Si le lecteur IPTV web ne lance pas vos chaînes, une application gratuite règle le problème en quelques minutes :" },
          {
            type: "table",
            head: ["Appareil", "Alternative conseillée", "Guide"],
            rows: [
              ["PC Windows", "VLC, IPTV Smarters Pro, MyIPTV Player", "[IPTV sur Windows](/iptv-windows-france)"],
              ["Mac / MacBook", "VLC, IPTV Smarters Pro, IPTVX", "[IPTV sur PC et Mac](/iptv-pc-mac)"],
              ["Chromebook", "Application Android depuis le Play Store (si activé)", "[IPTV sur Android](/iptv-android-france)"],
              ["Linux", "VLC ou Kodi", "[IPTV sur Kodi](/iptv-kodi-france)"],
              ["Smart TV", "IBO Player, Smart IPTV, SS IPTV", "[IPTV Smart TV](/iptv-smart-tv-france)"],
            ],
          },
          { type: "p", text: "Comparatif complet des lecteurs, gratuits et payants : [applications IPTV](/applications-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Peut-on regarder l'IPTV en ligne sans application ?", a: "Oui, avec un lecteur IPTV en ligne qui lit les listes M3U dans le navigateur. Cela fonctionne surtout avec les flux HLS (.m3u8) en HTTPS ; les autres formats sont souvent bloqués par le navigateur. Une application comme VLC reste plus fiable." },
      { q: "Pourquoi mes chaînes ne se lancent pas dans un lecteur M3U en ligne ?", a: "Le plus souvent, le navigateur bloque le flux : flux en http:// sur une page https:// (contenu mixte), format MPEG-TS non pris en charge, ou serveur qui refuse les requêtes venant d'un autre site (CORS). Testez la même liste dans VLC : si elle fonctionne, le problème vient du navigateur." },
      { q: "Existe-t-il un site officiel IPTV Smarters web ?", a: "Non, pas pour le grand public. La version web d'IPTV Smarters est hébergée par certains fournisseurs pour leurs propres clients. Sur ordinateur, utilisez plutôt l'application IPTV Smarters Pro pour Windows ou macOS." },
      { q: "Est-il risqué de coller son lien M3U dans un site web ?", a: "Ce lien contient votre identifiant et votre mot de passe. Ne l'utilisez que sur un lecteur dont vous connaissez l'éditeur, idéalement un lecteur qui traite la liste localement dans votre navigateur, et changez votre mot de passe en cas de doute." },
      { q: "Quel est le meilleur lecteur IPTV en ligne pour Chrome ?", a: "Un lecteur qui prend en charge le HLS et traite la liste en local. Mais si vous êtes sur un ordinateur, installer VLC ou IPTV Smarters Pro vous évitera la plupart des blocages propres au navigateur." },
    ],
    related: ["/iptv-pc-mac", "/iptv-windows-france", "/iptv-vlc", "/blog/m3u-iptv", "/applications-iptv", "/iptv-smarters-pro", "/essai-gratuit"],
    cta: { title: "Testez votre lecteur avec un essai gratuit 24h", text: "Identifiants Xtream Codes et lien M3U fournis. Sans engagement." },
    schema: "Article",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readTime: "5 min",
  },

  // ── Jellyfin, Plex, Emby, Stremio ──────────────────────────────
  {
    slug: "/iptv-jellyfin-plex",
    group: "apps",
    navLabel: "IPTV sur Jellyfin et Plex",
    cardText: "Ajouter une liste M3U et un guide XMLTV à Jellyfin, Plex ou Emby.",
    title: "IPTV sur Jellyfin et Plex : ajouter une liste M3U",
    description: "Jellyfin IPTV : ajouter un tuner M3U et un guide XMLTV pas à pas. Ce que permettent Plex et Emby, et pourquoi Stremio n'est pas fait pour un abonnement IPTV.",
    keywords: ["jellyfin iptv", "iptv jellyfin", "plex iptv", "emby iptv", "stremio iptv", "jellyfin m3u", "jellyfin live tv"],
    badge: "Application · Serveur multimédia",
    h1: "IPTV sur Jellyfin et Plex : la TV en direct dans votre serveur multimédia",
    intro: "Si vous avez déjà un serveur multimédia à la maison, vous pouvez y ajouter votre abonnement : **Jellyfin IPTV** fonctionne nativement avec une liste M3U et un guide TV au format XMLTV, sans plugin. Plex et Emby proposent aussi une rubrique TV en direct, avec des conditions différentes. L'intérêt : retrouver vos chaînes dans la même interface que vos films, sur toutes les applications Jellyfin ou Plex de la maison. Voici comment faire, et quand un simple lecteur comme [TiviMate](/tivimate) reste plus adapté.",
    tldr: [
      "Jellyfin : Tableau de bord → TV en direct → ajouter un tuner « M3U » puis un guide « XMLTV ». Gratuit.",
      "Plex : la TV en direct passe par un tuner compatible ; une liste M3U demande un logiciel passerelle tiers.",
      "Stremio n'est pas conçu pour les abonnements IPTV : préférez un vrai lecteur IPTV.",
    ],
    sections: [
      {
        id: "jellyfin",
        h2: "Configurer l'IPTV dans Jellyfin",
        blocks: [
          { type: "p", text: "Jellyfin est un serveur multimédia libre et gratuit. Sa section « TV en direct » accepte directement une liste M3U comme source de chaînes." },
          {
            type: "steps",
            items: [
              { title: "Récupérez vos liens", text: "Votre lien M3U et le lien du guide TV (EPG) au format XMLTV. Avec Stream Bleu, le lien M3U est envoyé après l'[essai gratuit](/essai-gratuit) ou la commande ; demandez le lien XMLTV au support si vous ne l'avez pas." },
              { title: "Ajoutez un tuner M3U", text: "Tableau de bord → TV en direct → Appareils tuner → « + » → type « M3U Tuner ». Collez le lien M3U et enregistrez." },
              { title: "Ajoutez le guide TV", text: "Toujours dans TV en direct → Fournisseurs de guide TV → « + » → « XMLTV ». Collez le lien de l'EPG puis lancez l'actualisation du guide." },
              { title: "Associez les chaînes", text: "Si certaines chaînes n'ont pas de programme, utilisez « Associer les chaînes » pour les relier à leur entrée du guide." },
              { title: "Regardez sur tous vos écrans", text: "Les chaînes apparaissent dans l'onglet TV en direct de toutes les applications Jellyfin : TV, mobile, navigateur." },
            ],
          },
          { type: "callout", title: "Nombre d'écrans", text: "Chaque appareil qui regarde une chaîne en même temps compte comme une connexion. Si plusieurs personnes regardent la TV en direct via Jellyfin, prévoyez un forfait multi-écrans : par exemple 89 € les 12 mois pour 2 écrans ([tarifs](/tarifs))." },
        ],
      },
      {
        id: "plex-emby",
        h2: "Plex et Emby : ce qui change",
        blocks: [
          {
            type: "table",
            head: ["Serveur", "Liste M3U acceptée ?", "Guide TV", "À savoir"],
            rows: [
              ["Jellyfin", "Oui, nativement", "XMLTV", "Gratuit et open source"],
              ["Plex", "Pas directement : Plex attend un tuner compatible", "Guide Plex ou XMLTV", "La TV en direct et le DVR sont réservés à l'abonnement Plex Pass ; une liste M3U passe par un logiciel passerelle tiers"],
              ["Emby", "Oui (tuner M3U)", "XMLTV", "Certaines fonctions TV en direct demandent Emby Premiere"],
            ],
            caption: "Fonctions susceptibles d'évoluer selon les versions ; vérifiez la documentation de chaque logiciel.",
          },
          { type: "p", text: "Pour Plex, la solution la plus simple reste souvent de ne pas passer par le serveur : installez un lecteur IPTV sur la TV ou la box ([IPTV Smarters Pro](/iptv-smarters-pro), [TiviMate](/tivimate)) et gardez Plex pour vos films." },
        ],
      },
      {
        id: "stremio",
        h2: "Stremio et IPTV : pourquoi ce n'est pas le bon outil",
        blocks: [
          { type: "p", text: "Les recherches « stremio iptv » sont nombreuses, mais Stremio est d'abord un catalogue de films et séries qui s'appuie sur des extensions (add-ons). Il n'a pas de fonction officielle pour ajouter un abonnement IPTV, et beaucoup d'extensions disponibles diffusent des contenus sans en détenir les droits. Pour un abonnement IPTV, utilisez un lecteur prévu pour ça, qui gère le guide TV, les favoris et le zapping : voir notre comparatif des [applications IPTV](/applications-iptv) ou notre page [Kodi](/iptv-kodi-france) si vous aimez les centres multimédias." },
        ],
      },
      {
        id: "quand",
        h2: "Serveur multimédia ou lecteur IPTV : que choisir ?",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Jellyfin / Emby", text: "Vous avez déjà un serveur et voulez tout centraliser : films, séries et TV en direct au même endroit." },
              { title: "TiviMate", text: "Vous voulez le zapping le plus rapide et un vrai guide TV sur Android TV ou Fire TV.", href: "/tivimate" },
              { title: "IPTV Smarters Pro", text: "Vous voulez une seule application sur tous vos appareils, sans serveur.", href: "/iptv-smarters-pro" },
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Jellyfin peut-il lire une liste IPTV M3U ?", a: "Oui. Dans le tableau de bord de Jellyfin, section TV en direct, ajoutez un tuner de type M3U avec votre lien de liste, puis un guide TV au format XMLTV. Aucun plugin n'est nécessaire." },
      { q: "Peut-on ajouter un abonnement IPTV à Plex ?", a: "Pas directement : la TV en direct de Plex est prévue pour un tuner compatible et demande un Plex Pass. Une liste M3U nécessite un logiciel passerelle tiers ; un lecteur IPTV installé sur la TV est souvent plus simple." },
      { q: "Stremio fonctionne-t-il avec l'IPTV ?", a: "Stremio n'a pas de fonction officielle pour les abonnements IPTV et repose sur des extensions, dont beaucoup diffusent des contenus sans droits. Pour un abonnement, utilisez un lecteur IPTV comme TiviMate ou IPTV Smarters Pro." },
      { q: "Le guide TV fonctionne-t-il dans Jellyfin ?", a: "Oui, si votre fournisseur fournit un lien EPG au format XMLTV. Ajoutez-le comme fournisseur de guide TV, puis associez les chaînes qui n'ont pas été reconnues automatiquement." },
      { q: "Combien de connexions consomme Jellyfin ?", a: "Chaque chaîne regardée en même temps ouvre une connexion à votre abonnement. Deux personnes qui regardent deux chaînes différentes via Jellyfin utilisent deux écrans." },
    ],
    related: ["/iptv-kodi-france", "/blog/m3u-iptv", "/applications-iptv", "/tivimate", "/iptv-smarters-pro", "/iptv-pc-mac", "/tarifs"],
    cta: { title: "Ajoutez Stream Bleu à votre serveur Jellyfin", text: "Lien M3U fourni avec l'essai gratuit 24h. Sans engagement." },
    schema: "Article",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readTime: "5 min",
  },
];
