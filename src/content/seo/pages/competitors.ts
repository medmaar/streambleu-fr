import type { SeoPageData } from "../types";

const D = "2026-10-23";
const HUB = { href: "/alternatives-iptv", label: "Alternatives IPTV" };

// Competitor-name searches. Rules for these pages: nominative use of the
// name only, no logo, no rating, no claim about the other service that we
// can't verify. Everything stated as fact is about Stream Bleu or about how
// IPTV works in general; anything about the other service is phrased as
// "what to check".

export const COMPETITOR_PAGES: SeoPageData[] = [
  // ── Atlas Pro ──────────────────────────────────────────────────
  {
    slug: "/alternative-atlas-pro",
    group: "competitors",
    parent: HUB,
    navLabel: "Alternative à Atlas Pro",
    cardText: "Atlas Pro ONTV ne marche plus ou a expiré ? Comment changer de service.",
    title: "Alternative à Atlas Pro IPTV : changer en 10 minutes",
    description: "Alternative à Atlas Pro (ONTV) : ce qui change, quelle application utiliser sur Samsung, iPhone ou Fire TV, et comment tester 24h gratuitement.",
    keywords: ["atlas pro iptv", "atlas iptv", "atlaspro", "iptv atlas", "iptv atlas pro", "atlas iptv pro", "atlaspro in", "atlas pro ontv iphone", "atlas pro ontv sur tv samsung", "atlas pro ott", "alternative atlas pro"],
    badge: "Alternative · Atlas Pro",
    h1: "Alternative à Atlas Pro IPTV : passer à Stream Bleu sans perdre vos habitudes",
    intro: "**Atlas Pro** (souvent appelé Atlas Pro ONTV, du nom de son application) fait partie des noms de service IPTV les plus tapés sur Google en France, avec près de 18 500 recherches par mois toutes variantes confondues. Si vous cherchez une **alternative à Atlas Pro IPTV** parce que votre code a expiré, que l'application ne se lance plus sur votre TV ou que votre revendeur ne répond plus, la bonne nouvelle est simple : changer de service ne demande ni nouvel appareil ni compétence technique. Il suffit d'un lecteur IPTV standard et de nouveaux identifiants.",
    tldr: [
      "Stream Bleu fonctionne avec les lecteurs standards (IPTV Smarters, TiviMate, IBO Player…) : vous n'êtes pas lié à une application propriétaire.",
      "Sur Samsung ou LG, passez par [IBO Player](/ibo-player) ; sur iPhone, par [Smarters Player Lite](/smarters-player-lite).",
      "Testez 24h gratuitement aux heures de pointe avant de payer quoi que ce soit.",
    ],
    image: { src: "/abonnement-iptv-france-2.webp", alt: "Alternative à Atlas Pro IPTV : application IPTV ouverte sur une Smart TV" },
    sections: [
      {
        id: "pourquoi",
        h2: "Pourquoi chercher une alternative à Atlas Pro ?",
        blocks: [
          { type: "p", text: "Les recherches associées à Atlas Pro donnent une bonne idée des difficultés rencontrées : « atlas pro ontv sur tv samsung », « atlas pro ontv iphone », « atlas pro ott ». Autrement dit, la question n'est souvent pas le service lui-même mais **l'application** : où la trouver, comment l'installer, pourquoi elle n'apparaît plus dans la boutique de la TV." },
          { type: "p", text: "Quand un service passe par sa propre application, tout dépend d'elle. Si elle disparaît d'une boutique ou n'est plus mise à jour sur votre modèle de TV, l'abonnement devient difficile à utiliser, même s'il est encore actif. C'est la principale raison pour laquelle nous avons fait le choix inverse chez Stream Bleu : vos identifiants fonctionnent dans n'importe quel lecteur compatible Xtream Codes ou M3U." },
          { type: "callout", title: "Transparence", text: "Stream Bleu n'est ni affilié à Atlas Pro ni revendeur d'Atlas Pro. Nous n'avons pas testé ce service et ne publions aucun avis à son sujet : cette page explique uniquement comment passer à une autre offre si c'est ce que vous cherchez." },
        ],
      },
      {
        id: "comparer",
        h2: "Atlas Pro ou Stream Bleu : les points à comparer",
        blocks: [
          { type: "p", text: "Avant de changer, comparez sur des éléments vérifiables. La colonne du milieu liste ce qu'il faut demander à votre fournisseur actuel ; la dernière, ce que propose Stream Bleu." },
          {
            type: "table",
            head: ["Point à comparer", "À vérifier chez votre fournisseur actuel", "Stream Bleu"],
            rows: [
              ["Application", "Application propriétaire obligatoire ou lecteur au choix ?", "Lecteur au choix : [IPTV Smarters Pro](/iptv-smarters-pro), [TiviMate](/tivimate), [IBO Player](/ibo-player)…"],
              ["Formats", "Code d'activation seul, ou aussi Xtream Codes / M3U ?", "Xtream Codes, M3U et portail MAG"],
              ["Essai", "Essai gratuit possible ?", "[Essai gratuit 24h](/essai-gratuit)"],
              ["Écrans", "Combien d'appareils en même temps ?", "1 à 10 écrans selon le forfait"],
              ["Prix affiché", "Tarif public, ou prix variable selon le revendeur ?", "9 € / 1 mois · 29 € / 3 mois · 39 € / 6 mois · 49 € / 12 mois"],
              ["Support", "Qui répond en cas de panne : l'éditeur ou un revendeur ?", "Support en français par WhatsApp et e-mail, 7j/7"],
            ],
            caption: "Tarifs Stream Bleu pour 1 écran, TTC. Grille complète sur la page Tarifs.",
          },
        ],
      },
      {
        id: "appareils",
        h2: "Quelle application utiliser après Atlas Pro, selon votre appareil",
        blocks: [
          { type: "p", text: "C'est souvent l'étape qui bloque. Voici le lecteur conseillé pour chaque appareil une fois que vous quittez l'application Atlas Pro ONTV :" },
          {
            type: "table",
            head: ["Appareil", "Lecteur conseillé", "Guide"],
            rows: [
              ["TV Samsung (Tizen)", "IBO Player ou Smart IPTV", "[IPTV sur Samsung](/iptv-samsung-tv-france)"],
              ["TV LG (webOS)", "IBO Player ou Smart IPTV", "[IPTV sur LG](/iptv-lg-tv-france)"],
              ["iPhone / iPad", "Smarters Player Lite", "[IPTV sur iPhone](/iptv-ios-france)"],
              ["Apple TV", "Smarters Player Lite ou IPTVX", "[IPTV Apple TV](/iptv-apple-tv-france)"],
              ["Fire TV Stick", "TiviMate ou IPTV Smarters Pro", "[IPTV Fire TV Stick](/iptv-firestick-france)"],
              ["Box Android / Android TV", "TiviMate", "[IPTV Android TV](/iptv-android-tv-france)"],
            ],
          },
          { type: "p", text: "Sur Samsung et LG, les lecteurs IBO Player et Smart IPTV s'activent avec l'adresse MAC de la TV. Avec le forfait 12 mois Stream Bleu, l'activation IBO Player est offerte." },
        ],
      },
      {
        id: "migrer",
        h2: "Passer d'Atlas Pro à Stream Bleu en 4 étapes",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Demandez un essai gratuit", text: "Remplissez le formulaire [essai gratuit](/essai-gratuit) : vous recevez des identifiants de test par e-mail." },
              { title: "Installez un lecteur standard", text: "Choisissez l'application qui correspond à votre appareil dans le tableau ci-dessus. Vous pouvez garder Atlas Pro installé en parallèle pendant le test." },
              { title: "Testez aux heures de pointe", text: "Regardez un soir de semaine entre 20h et 23h, ou pendant un match : c'est là que les différences de stabilité se voient." },
              { title: "Choisissez votre forfait", text: "Si le test vous convient, commandez depuis la page [tarifs](/tarifs). Vos identifiants définitifs remplacent ceux du test dans la même application." },
            ],
          },
        ],
      },
      {
        id: "legalite",
        h2: "Atlas Pro est-il légal ?",
        blocks: [
          { type: "p", text: "La technologie IPTV est légale ; la légalité d'un service dépend des droits de diffusion qu'il détient pour les contenus proposés, et cela vaut pour Atlas Pro comme pour tout autre fournisseur. Nous ne pouvons pas nous prononcer sur les droits d'un service tiers. Pour comprendre le cadre français et le rôle de l'Arcom, lisez [l'IPTV est-il légal en France ?](/blog/iptv-legal-france)." },
        ],
      },
    ],
    faq: [
      { q: "Quelle est la meilleure alternative à Atlas Pro ?", a: "Celle qui reste stable chez vous aux heures où vous regardez. Testez au moins une offre pendant 24h, un soir de semaine, sur votre appareil principal. Stream Bleu propose cet essai gratuitement et fonctionne avec les lecteurs IPTV standards." },
      { q: "Peut-on utiliser l'application Atlas Pro ONTV avec un autre abonnement ?", a: "En général non : une application propriétaire est conçue pour son propre service. Pour un autre abonnement, utilisez un lecteur standard comme IPTV Smarters Pro, TiviMate ou IBO Player." },
      { q: "Atlas Pro ONTV ne fonctionne plus sur ma TV Samsung, que faire ?", a: "Si l'application n'est plus disponible ou ne se lance plus, installez un lecteur standard comme IBO Player ou Smart IPTV depuis la boutique Samsung, ou branchez un Fire TV Stick. Notre guide IPTV sur Samsung détaille chaque méthode." },
      { q: "Stream Bleu est-il lié à Atlas Pro ?", a: "Non. Stream Bleu est un service indépendant, sans lien avec Atlas Pro ni avec ses revendeurs." },
      { q: "Combien coûte Stream Bleu par rapport à Atlas Pro ?", a: "Les prix d'Atlas Pro varient selon les revendeurs, nous ne les publions donc pas. Stream Bleu affiche un tarif unique : 9 € pour 1 mois, 29 € pour 3 mois, 39 € pour 6 mois et 49 € pour 12 mois (1 écran)." },
    ],
    related: ["/alternatives-iptv", "/alternative-king365", "/alternative-pure-iptv", "/comparatif-iptv", "/ibo-player", "/iptv-samsung-tv-france", "/essai-gratuit", "/tarifs"],
    cta: { title: "Quittez Atlas Pro en douceur : 24h d'essai gratuit", text: "Gardez votre appareil, changez seulement de service. Sans engagement." },
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "5 min",
  },

  // ── King365 ────────────────────────────────────────────────────
  {
    slug: "/alternative-king365",
    group: "competitors",
    parent: HUB,
    navLabel: "Alternative à King365",
    cardText: "King365 TV ou box King365 : comment passer à un autre service.",
    title: "Alternative à King365 TV : changer de service IPTV",
    description: "Alternative à King365 TV : garder votre box Android ou passer à une clé Fire TV, quelle application installer et comment tester Stream Bleu 24h gratuitement.",
    keywords: ["king365", "king365 tv", "king365tv", "king365 iptv", "kingiptv", "kingtv365", "king365tv box v3", "alternative king365"],
    badge: "Alternative · King365",
    h1: "Alternative à King365 TV : garder votre box et changer de service",
    intro: "**King365** (ou King365 TV) est l'un des noms de service IPTV les plus recherchés en France, avec environ 21 500 recherches par mois cumulées, souvent associé à un boîtier vendu sous le même nom (« King365 TV box »). Si vous cherchez une **alternative à King365**, la question clé est de savoir si votre boîtier est une box Android ouverte, sur laquelle on peut installer n'importe quel lecteur IPTV, ou un appareil limité à une seule application. Cette page vous aide à trancher et à changer de service sans racheter de matériel inutilement.",
    tldr: [
      "Box Android ouverte : installez [TiviMate](/tivimate) ou [IPTV Smarters Pro](/iptv-smarters-pro) et utilisez de nouveaux identifiants.",
      "Box verrouillée : une [clé Fire TV Stick](/iptv-firestick-france) à une trentaine d'euros suffit.",
      "Testez Stream Bleu 24h gratuitement avant de résilier quoi que ce soit.",
    ],
    image: { src: "/abonnement-iptv-france-4.webp", alt: "Alternative à King365 : boîtier IPTV Android branché sur une TV" },
    sections: [
      {
        id: "box",
        h2: "Votre box King365 peut-elle lire un autre abonnement ?",
        blocks: [
          { type: "p", text: "Les boîtiers vendus avec un service IPTV sont le plus souvent des box Android génériques, parfois personnalisées. Pour savoir si la vôtre accepte d'autres applications, trois vérifications suffisent :" },
          {
            type: "ol",
            items: [
              "**Le Google Play Store est-il présent** sur l'écran d'accueil ? Si oui, installez TiviMate ou Smarters Player Lite directement.",
              "**Sinon, pouvez-vous installer un APK ?** Dans Paramètres → Sécurité, cherchez « Sources inconnues ». Si l'option existe, l'application [Downloader](/downloader-iptv) permet d'installer IPTV Smarters Pro.",
              "**Aucune des deux ?** La box est verrouillée sur son application d'origine : gardez-la pour ce qu'elle fait et branchez une clé HDMI sur une autre entrée de la TV.",
            ],
          },
          { type: "callout", title: "Transparence", text: "Stream Bleu n'est ni affilié à King365 ni revendeur de ses boîtiers. Nous n'avons pas testé ce service et ne publions aucun avis à son sujet : cette page explique uniquement comment passer à une autre offre." },
        ],
      },
      {
        id: "materiel",
        h2: "Quel matériel pour remplacer une box King365 ?",
        blocks: [
          {
            type: "table",
            head: ["Option", "Pour qui", "Lecteur conseillé", "Guide"],
            rows: [
              ["Garder la box (si Android ouverte)", "Box récente avec Play Store ou APK possible", "TiviMate", "[Box Android IPTV](/iptv-x96-mini)"],
              ["Clé Fire TV Stick 4K", "Solution la plus simple et la moins chère", "TiviMate ou IPTV Smarters Pro", "[IPTV Fire TV Stick](/iptv-firestick-france)"],
              ["Xiaomi Mi Box / TV Stick", "Android TV officiel, Play Store complet", "TiviMate", "[IPTV Xiaomi Mi Box](/iptv-xiaomi-mi-box)"],
              ["Boîtier Formuler", "Zapping rapide, port Ethernet, usage intensif", "MyTVOnline 3", "[Boîtier Formuler](/boitier-formuler)"],
              ["Aucun boîtier", "TV Samsung ou LG récente", "IBO Player", "[IPTV Smart TV](/iptv-smart-tv-france)"],
            ],
          },
          { type: "p", text: "Pas sûr de votre choix ? Notre guide [boîtier IPTV](/boitier-iptv) compare toutes les options, du simple stick au boîtier haut de gamme." },
        ],
      },
      {
        id: "comparer",
        h2: "King365 ou Stream Bleu : ce qu'il faut comparer",
        blocks: [
          {
            type: "table",
            head: ["Point à comparer", "À vérifier chez votre fournisseur actuel", "Stream Bleu"],
            rows: [
              ["Matériel", "Le service impose-t-il son boîtier ?", "Aucun boîtier imposé : TV, stick, box, mobile, PC"],
              ["Lecteur", "Application unique ou lecteur au choix ?", "Lecteur au choix, identifiants Xtream Codes ou M3U"],
              ["Essai", "Test gratuit possible ?", "[Essai gratuit 24h](/essai-gratuit)"],
              ["Écrans", "Un seul appareil ou plusieurs ?", "1 à 10 écrans simultanés"],
              ["Prix", "Prix public ou variable selon le vendeur ?", "Dès 9 € par mois, 49 € les 12 mois ([prix IPTV](/prix-iptv))"],
              ["Support", "Qui contacter en cas de panne ?", "WhatsApp et e-mail en français, 7j/7"],
            ],
          },
        ],
      },
      {
        id: "migrer",
        h2: "Passer de King365 à Stream Bleu",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Vérifiez votre box", text: "Appliquez les trois vérifications ci-dessus pour savoir si vous pouvez la garder." },
              { title: "Demandez votre essai gratuit", text: "Sur la page [essai gratuit](/essai-gratuit), indiquez l'appareil que vous utiliserez." },
              { title: "Installez le lecteur", text: "TiviMate ou IPTV Smarters Pro sur box Android et Fire TV ; IBO Player sur Samsung et LG." },
              { title: "Comparez un soir de match", text: "Gardez King365 actif le temps du test et comparez la stabilité aux mêmes heures. Puis choisissez votre [forfait](/tarifs)." },
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Peut-on mettre un autre abonnement IPTV sur une box King365 ?", a: "Oui si la box est une box Android ouverte (Play Store présent ou installation d'APK possible) : installez TiviMate ou IPTV Smarters Pro et saisissez vos nouveaux identifiants. Si la box est verrouillée, branchez plutôt une clé Fire TV Stick." },
      { q: "Quelle est la meilleure alternative à King365 TV ?", a: "Celle qui reste stable sur votre connexion aux heures où vous regardez. Faites un essai gratuit de 24h pendant un match ou un soir de semaine avant de vous engager." },
      { q: "Faut-il racheter un boîtier pour quitter King365 ?", a: "Pas forcément. Une box Android ouverte suffit, et une TV Samsung ou LG récente peut lire l'IPTV sans boîtier via IBO Player. Sinon, une clé Fire TV Stick reste l'option la moins chère." },
      { q: "Stream Bleu est-il lié à King365 ?", a: "Non. Stream Bleu est un service indépendant, sans lien avec King365, ses boîtiers ou ses revendeurs." },
      { q: "Stream Bleu fonctionne-t-il sur un « King365 TV box v3 » ?", a: "S'il s'agit d'une box Android sur laquelle on peut installer des applications, oui, avec TiviMate ou IPTV Smarters Pro. Le plus sûr est de le vérifier pendant l'essai gratuit." },
    ],
    related: ["/alternatives-iptv", "/alternative-atlas-pro", "/alternative-pure-iptv", "/boitier-iptv", "/iptv-firestick-france", "/tivimate", "/essai-gratuit", "/tarifs"],
    cta: { title: "Changez de service, pas forcément de box", text: "24h d'essai gratuit sur votre appareil actuel. Sans engagement." },
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "5 min",
  },

  // ── Pure IPTV ──────────────────────────────────────────────────
  {
    slug: "/alternative-pure-iptv",
    group: "competitors",
    parent: HUB,
    navLabel: "Alternative à Pure IPTV",
    cardText: "Pure IPTV : légalité, confusion avec Xsarius Pure et alternative.",
    title: "Pure IPTV est-il légal ? Réponse et alternative (2026)",
    description: "Pure IPTV est-il légal ? Ce qu'il faut vérifier, la différence avec le récepteur Xsarius Pure, et comment tester une alternative 24h gratuitement.",
    keywords: ["pure iptv", "pureiptv", "iptv pure", "pure iptv légal", "alternative pure iptv"],
    badge: "Alternative · Pure IPTV",
    h1: "Pure IPTV : légalité, confusion fréquente et alternative",
    intro: "**Pure IPTV** est un nom très recherché en France (environ 10 500 recherches par mois avec « pureiptv » et « iptv pure »), et une question revient particulièrement : « **Pure IPTV est-il légal ?** ». Cette page y répond honnêtement, lève une confusion fréquente avec le récepteur **Xsarius Pure**, et explique comment tester une alternative si votre service actuel ne vous satisfait plus.",
    tldr: [
      "La légalité dépend des droits de diffusion du service, pas de la technologie IPTV ni du nom.",
      "Xsarius Pure et Pure 2 sont des récepteurs (du matériel), pas un service IPTV.",
      "Changer de service se fait dans la même application, avec de nouveaux identifiants.",
    ],
    sections: [
      {
        id: "legal",
        h2: "Pure IPTV est-il légal ?",
        blocks: [
          { type: "p", text: "La technologie IPTV, qui consiste à diffuser la télévision par internet, est parfaitement légale : c'est elle qu'utilisent les box d'Orange, SFR, Free ou Bouygues. Ce qui rend un service légal ou non, ce sont **les droits de diffusion** qu'il détient pour les chaînes et programmes qu'il propose." },
          { type: "p", text: "Nous ne connaissons pas les accords de Pure IPTV et ne pouvons donc pas répondre à sa place. Pour n'importe quel service, vous pouvez en revanche vérifier ces points :" },
          {
            type: "ul",
            items: [
              "Une **entité identifiable** (mentions légales, conditions d'utilisation, contact).",
              "Des **conditions de vente et de remboursement** écrites, que vous pouvez lire avant de payer.",
              "Des **moyens de paiement** offrant un recours en cas de litige.",
              "L'absence de promesses irréalistes (« toutes les chaînes du monde », « abonnement à vie »).",
            ],
          },
          { type: "p", text: "Le cadre français, le rôle de l'Arcom et les risques pour l'utilisateur sont détaillés dans notre article [l'IPTV est-il légal en France ?](/blog/iptv-legal-france). Voir aussi notre page [avertissement](/avertissement)." },
          { type: "callout", title: "Transparence", text: "Stream Bleu n'est ni affilié à Pure IPTV ni revendeur de ce service. Nous ne l'avons pas testé et ne publions aucun avis à son sujet." },
        ],
      },
      {
        id: "xsarius",
        h2: "Pure IPTV ou Xsarius Pure : ne pas confondre",
        blocks: [
          { type: "p", text: "Une partie des recherches « pure iptv » vient en réalité de propriétaires de récepteurs **Xsarius Pure** ou **Pure 2**, des décodeurs hybrides vendus en Europe. Ce sont des appareils, pas des abonnements :" },
          {
            type: "table",
            head: ["", "Pure IPTV", "Xsarius Pure / Pure 2"],
            rows: [
              ["Nature", "Nom de service IPTV", "Récepteur / décodeur (matériel)"],
              ["Ce qu'on achète", "Un abonnement", "Un boîtier"],
              ["Chaînes incluses", "Selon le service", "Aucune sans abonnement ou source satellite"],
              ["Lecture IPTV", "—", "Possible via un plugin ou une liste M3U selon le modèle"],
            ],
          },
          { type: "p", text: "Si vous avez un Xsarius ou un autre récepteur sous Enigma2, consultez notre guide [IPTV sur Enigma2](/iptv-enigma2) pour y charger un abonnement IPTV." },
        ],
      },
      {
        id: "alternative",
        h2: "Tester une alternative à Pure IPTV",
        blocks: [
          { type: "p", text: "Si vous utilisez déjà une application comme IPTV Smarters, TiviMate ou IBO Player, vous n'avez rien à réinstaller : il suffit d'ajouter un nouveau profil avec les identifiants de test." },
          {
            type: "steps",
            items: [
              { title: "Demandez l'essai gratuit", text: "Formulaire [essai gratuit 24h](/essai-gratuit), réponse par e-mail." },
              { title: "Ajoutez un profil dans votre lecteur", text: "« Ajouter un utilisateur » dans [IPTV Smarters Pro](/iptv-smarters-pro), « Ajouter une playlist » dans [TiviMate](/tivimate)." },
              { title: "Comparez aux mêmes heures", text: "Basculez d'un profil à l'autre un soir de semaine pour comparer stabilité et temps de zapping." },
              { title: "Gardez le meilleur", text: "Si Stream Bleu vous convient, choisissez votre [forfait](/tarifs) : 9 € pour 1 mois, 49 € pour 12 mois." },
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Pure IPTV est-il légal en France ?", a: "La légalité d'un service IPTV dépend des droits de diffusion qu'il détient pour ses contenus. Nous ne connaissons pas les accords de Pure IPTV et ne pouvons pas répondre à sa place ; vérifiez ses mentions légales, ses conditions de vente et ses moyens de paiement." },
      { q: "Pure IPTV et Xsarius Pure, c'est la même chose ?", a: "Non. Xsarius Pure et Pure 2 sont des récepteurs (du matériel), alors que Pure IPTV est un nom de service. Un Xsarius peut lire un abonnement IPTV selon le modèle, via Enigma2 ou une liste M3U." },
      { q: "Comment passer de Pure IPTV à un autre service ?", a: "Gardez votre application de lecture et ajoutez un nouveau profil avec les identifiants de votre nouveau service. Avec l'essai gratuit Stream Bleu, vous pouvez comparer les deux pendant 24h." },
      { q: "Stream Bleu est-il lié à Pure IPTV ?", a: "Non. Stream Bleu est un service indépendant, sans lien avec Pure IPTV ni avec ses revendeurs." },
    ],
    related: ["/alternatives-iptv", "/alternative-atlas-pro", "/alternative-king365", "/blog/iptv-legal-france", "/iptv-enigma2", "/comparatif-iptv", "/essai-gratuit"],
    cta: { title: "Comparez par vous-même pendant 24h", text: "Ajoutez Stream Bleu dans votre application actuelle. Sans engagement." },
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "4 min",
  },
];
