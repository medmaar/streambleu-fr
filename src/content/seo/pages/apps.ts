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
    keywords: ["iptv smarters pro", "ip tv smarters pro", "smarters pro", "smarterspro", "iptv smarters", "smarters iptv", "smarters iptv pro", "smarter pro", "ip smarter pro", "iptv smarters com", "iptv smarters player", "smarters player pro", "abonnement iptv smarters pro", "iptv smasters pro", "i. p. t. v. smarter pro", "tv smarters pro", "smarters pro iptv", "ip tv smarter pro", "ip tv smart pro", "iptv smasters pro apple", "iptv smasters pro premium", "iptv smasters pro tv", "iptv smasters pro com", "iptv smasters pro lite", "iptv smasters pro apkpure", "iptv smasters pro google play", "iptv smasters pro fire stick", "iptv smasters pro sur pc", "iptv smasters reddit", "iptv smasters lite", "iptv smasters m3u", "iptv smasters pc", "iptv smasters free", "iptv smasters google play", "iptv smasters tv", "tv smarters", "smarters iptv player", "smarter player pro", "smarters ip tv", "iptv smasters pro m3u"],
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
        ],
      },
      {
        id: "smarters-vs",
        h2: "IPTV Smarters Pro, Lite ou TiviMate ?",
        blocks: [
          { type: "p", text: "**IPTV Smarters Pro** est le plus polyvalent : multi-écran, contrôle parental, lecteur externe, et il existe sur PC. **Smarters Player Lite** en est la déclinaison allégée pour Apple et Google Play. **TiviMate** est plus agréable pour zapper sur une TV Android grâce à sa grille EPG, mais il n'existe pas sur iPhone ni sur PC. Le comparatif complet est sur notre page [applications IPTV](/applications-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "IPTV Smarters Pro est-il gratuit ?", a: "Oui, IPTV Smarters Pro est gratuit à télécharger et à utiliser. En revanche, il ne fournit aucune chaîne : il faut un abonnement IPTV compatible Xtream Codes ou M3U pour regarder la TV." },
      { q: "Pourquoi IPTV Smarters Pro est introuvable sur Google Play ?", a: "L'application a été retirée ou renommée à plusieurs reprises sur Google Play. Vous pouvez installer l'APK depuis le site officiel ou utiliser Smarters Player Lite, qui fonctionne avec les mêmes identifiants." },
      { q: "Quels identifiants entrer dans IPTV Smarters Pro ?", a: "Un nom d'utilisateur, un mot de passe et l'URL du serveur (mode Xtream Codes), ou un lien M3U. Stream Bleu vous envoie les deux par e-mail dès l'activation." },
      { q: "IPTV Smarters Pro fonctionne-t-il sur Samsung TV ?", a: "Cela dépend du modèle et de l'année. Si l'application n'apparaît pas dans la boutique Samsung, installez IBO Player ou Flix IPTV, ou branchez un Fire TV Stick. Voir notre guide [IPTV Samsung](/iptv-samsung-tv-france)." },
      { q: "IPTV Smarters Pro existe-t-il sur PC et Mac ?", a: "Oui, une version Windows et une version macOS sont proposées sur le site officiel. Sur Mac, vous pouvez aussi utiliser Smarters Player Lite depuis le Mac App Store." },
    ],
    related: ["/smarters-player-lite", "/tivimate", "/downloader-iptv", "/iptv-firestick-france", "/iptv-pc-mac", "/applications-iptv", "/abonnement-iptv", "/essai-gratuit"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
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
    ],
    faq: [
      { q: "Smarters Player Lite est-il gratuit ?", a: "Oui, Smarters Player Lite est gratuit sur l'App Store et Google Play. Il nécessite un abonnement IPTV séparé pour afficher des chaînes." },
      { q: "Smarters Player Lite fonctionne-t-il sur Android TV ?", a: "Oui, il est disponible sur Google Play pour Android TV et Google TV. Sur Fire TV Stick, installez l'APK via l'application Downloader." },
      { q: "Peut-on installer Smarters Player Lite sur une TV Samsung ?", a: "En général non : l'application n'est pas proposée sur le store Samsung Tizen. Utilisez IBO Player, Flix IPTV ou un Fire TV Stick branché en HDMI." },
      { q: "Quelle différence entre Smarters Player Lite et IPTV Smarters Pro ?", a: "Même éditeur et mêmes identifiants. La version Lite est distribuée dans les boutiques officielles avec moins d'options ; la version Pro offre le multi-écran et plus de réglages, surtout sur Android et PC." },
    ],
    related: ["/iptv-smarters-pro", "/iptv-apple-tv-france", "/iptv-ios-france", "/tivimate", "/applications-iptv", "/essai-gratuit"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
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
    ],
    faq: [
      { q: "TiviMate est-il gratuit ?", a: "TiviMate est gratuit avec une seule playlist et des fonctions de base. TiviMate Premium, payant, ajoute plusieurs playlists, le replay, l'enregistrement et les rappels." },
      { q: "Comment activer TiviMate Premium ?", a: "Installez TiviMate Companion sur un smartphone Android, créez un compte, achetez Premium, puis connectez-vous avec ce compte dans TiviMate sur votre TV (Paramètres → Compte)." },
      { q: "TiviMate fonctionne-t-il sur Samsung ou LG ?", a: "Non, TiviMate n'existe que sur Android. Branchez un Fire TV Stick ou une box Android TV sur votre téléviseur Samsung ou LG pour l'utiliser." },
      { q: "Comment ajouter une liste M3U dans TiviMate ?", a: "Ajouter une playlist → Entrer l'URL → collez votre lien M3U → Suivant. Ajoutez ensuite l'URL de l'EPG si elle n'est pas détectée. Le mode Xtream Codes est plus simple car tout est automatique." },
      { q: "TiviMate est-il meilleur qu'IPTV Smarters Pro ?", a: "Sur TV Android, TiviMate offre un meilleur guide TV et un zapping plus fluide. IPTV Smarters Pro est plus polyvalent (PC, mobile) et entièrement gratuit." },
    ],
    related: ["/iptv-smarters-pro", "/downloader-iptv", "/iptv-firestick-france", "/iptv-android-tv-france", "/iptv-xiaomi-mi-box", "/applications-iptv", "/tarifs"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
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
    ],
    faq: [
      { q: "Smart IPTV est-il gratuit ?", a: "Smart IPTV est gratuit pendant 7 jours, puis demande une activation unique payante par téléviseur, à régler sur le site officiel. Le montant est indiqué sur la page d'activation." },
      { q: "Qu'est-ce que « My SIPTV » ou siptv.app/mylist ?", a: "C'est la page du site officiel de Smart IPTV où l'on envoie sa playlist M3U en indiquant l'adresse MAC de la TV. L'application télécharge ensuite automatiquement la liste." },
      { q: "Pourquoi Smart IPTV n'est plus sur Samsung ?", a: "L'éditeur a retiré l'application du store Samsung sur de nombreux modèles. Selon l'année de votre TV, une installation par clé USB peut rester possible ; sinon, utilisez IBO Player ou Flix IPTV." },
      { q: "Smart IPTV accepte-t-il les codes Xtream ?", a: "Non, Smart IPTV fonctionne avec une URL M3U (ou un fichier). Stream Bleu fournit ce lien M3U en plus des identifiants Xtream Codes." },
      { q: "Mon abonnement Stream Bleu fonctionne-t-il avec Smart IPTV ?", a: "Oui. Utilisez le lien M3U reçu par e-mail. Vous pouvez tester gratuitement pendant 24h avec notre [essai gratuit](/essai-gratuit)." },
    ],
    related: ["/ss-iptv", "/ibo-player", "/flix-iptv", "/iptv-lg-tv-france", "/iptv-samsung-tv-france", "/blog/m3u-iptv", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
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
    description: "IBO Player : prix de la licence, activation avec adresse MAC et device key, ajout de playlist sur Samsung, LG, Android et Fire TV. Offert avec le forfait 12 mois.",
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
    ],
    related: ["/ibo-player", "/smart-iptv", "/iptv-samsung-tv-france", "/iptv-lg-tv-france", "/applications-iptv", "/essai-gratuit"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
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
    ],
    related: ["/iptv-smarters-pro", "/tivimate", "/iptv-vlc", "/applications-iptv", "/iptv-android-france"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
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
    ],
    related: ["/boitier-iptv", "/tivimate", "/stbemu", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
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
    ],
    related: ["/iptv-mag-box-france", "/tivimate", "/lxtream", "/boitier-iptv", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "4 min",
  },

  // ── VLC ────────────────────────────────────────────────────────
  {
    slug: "/iptv-vlc",
    group: "apps",
    navLabel: "IPTV sur VLC",
    cardText: "Lire une liste M3U IPTV avec VLC sur PC, Mac et mobile.",
    title: "IPTV sur VLC : lire une liste M3U sur PC, Mac, mobile",
    description: "Regarder l'IPTV avec VLC : ouvrir une URL M3U sur Windows, Mac, Android et iPhone, afficher la liste des chaînes, régler la mise en cache et limiter les coupures.",
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
    ],
    related: ["/iptv-pc-mac", "/blog/m3u-iptv", "/iptv-smarters-pro", "/iptv-windows-france", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "5 min",
  },

  // ── Downloader ─────────────────────────────────────────────────
  {
    slug: "/downloader-iptv",
    group: "apps",
    navLabel: "Downloader IPTV",
    cardText: "Utiliser Downloader pour installer un lecteur IPTV sur Fire TV.",
    title: "Downloader IPTV : installer une app sur Fire TV Stick",
    description: "Downloader sur Fire TV Stick : activer les applications inconnues, télécharger IPTV Smarters Pro, TiviMate ou Smart IPTV en APK, et éviter les fichiers dangereux.",
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
    ],
    related: ["/iptv-firestick-france", "/tivimate", "/iptv-smarters-pro", "/stbemu", "/applications-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "4 min",
  },
];
