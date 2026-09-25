import type { SeoPageData } from "../types";

const D = "2026-09-26";

export const GUIDE_PAGES: SeoPageData[] = [
  // ── Qu'est-ce que l'IPTV ───────────────────────────────────────
  {
    slug: "/blog/qu-est-ce-que-l-iptv",
    group: "guides",
    navLabel: "Qu'est-ce que l'IPTV ?",
    cardText: "Définition, fonctionnement, IPTV vs OTT, matériel nécessaire.",
    title: "IPTV : qu'est-ce que c'est ? Définition et fonctionnement",
    description: "Qu'est-ce que l'IPTV (télévision sur IP) ? Définition simple, fonctionnement, différence IPTV / OTT / TNT, matériel nécessaire et débit conseillé. Guide 2026.",
    keywords: ["iptv", "ip television", "iptv tv", "iptv television", "tv ip", "ip tele", "tele iptv", "iptv internet", "iptv isp", "ott and iptv", "iptv ott service", "iptv digital", "iptv live", "live iptv", "iptv live tv", "iptv vod", "iptv c'est quoi", "télévision sur ip"],
    badge: "Guide · Débutant",
    h1: "Qu'est-ce que l'IPTV ? La télévision par internet expliquée simplement",
    intro: "L'**IPTV** (Internet Protocol Television, ou télévision sur IP) est la diffusion de chaînes de télévision et de vidéos à la demande par internet plutôt que par l'antenne, le satellite ou le câble. Concrètement, une application sur votre TV, box ou smartphone reçoit les flux vidéo via votre connexion et les affiche comme une TV classique, avec guide des programmes, replay et VOD. Les box TV d'Orange, SFR, Free et Bouygues utilisent elles-mêmes cette technologie.",
    tldr: [
      "IPTV = télévision transmise par le protocole internet (IP), sur TV, box, mobile ou PC.",
      "Il faut une connexion d'au moins 10 Mbit/s en HD, 25 Mbit/s en 4K, et un lecteur IPTV.",
      "La technologie est légale ; la légalité d'une offre dépend des droits de diffusion détenus.",
    ],
    image: { src: "/abonnement-iptv-france-2.webp", alt: "Schéma de la télévision IPTV diffusée par internet vers une TV" },
    sections: [
      {
        id: "definition",
        h2: "IPTV : la définition",
        blocks: [
          { type: "p", text: "Dans la télévision classique, les chaînes sont diffusées en même temps à tout le monde par ondes hertziennes (TNT), par satellite ou par câble. Avec l'IPTV, le signal est découpé en paquets de données et envoyé sur un réseau IP, comme n'importe quel contenu internet. Cela permet d'ajouter des fonctions impossibles en diffusion classique : replay, reprise du direct, catalogue de films à la demande." },
          { type: "p", text: "Pour une définition encyclopédique, voir l'article [Télévision sur IP sur Wikipédia](https://fr.wikipedia.org/wiki/T%C3%A9l%C3%A9vision_sur_IP)." },
        ],
      },
      {
        id: "fonctionnement",
        h2: "Comment fonctionne l'IPTV ?",
        blocks: [
          {
            type: "ol",
            items: [
              "Le fournisseur reçoit les chaînes et les encode (H.264 ou H.265/HEVC) sur ses serveurs.",
              "Les flux sont envoyés par internet jusqu'à votre domicile.",
              "Une [application IPTV](/applications-iptv) sur votre appareil se connecte au serveur avec vos identifiants (Xtream Codes, [liste M3U](/blog/m3u-iptv) ou portail MAG).",
              "L'application affiche la liste des chaînes, le guide TV et la VOD, et lit le flux choisi.",
            ],
          },
        ],
      },
      {
        id: "ott",
        h2: "IPTV, OTT, TNT : quelles différences ?",
        blocks: [
          {
            type: "table",
            head: ["Mode", "Transport", "Exemple", "Qualité de service"],
            rows: [
              ["TNT", "Ondes hertziennes", "Antenne râteau", "Garantie, chaînes gratuites"],
              ["IPTV opérateur", "Réseau géré du FAI", "Box Orange, Free, SFR", "Garantie par le FAI"],
              ["OTT", "Internet ouvert", "Netflix, Molotov, abonnements IPTV", "Dépend de votre connexion"],
            ],
          },
          { type: "p", text: "Au sens strict, les abonnements IPTV indépendants sont de l'**OTT** (over-the-top) : ils passent par l'internet public, quel que soit votre fournisseur d'accès. Dans le langage courant, on les appelle tout de même « IPTV »." },
        ],
      },
      {
        id: "materiel",
        h2: "De quoi a-t-on besoin pour regarder l'IPTV ?",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Une connexion internet", text: "10 Mbit/s en HD, 25 Mbit/s en 4K, idéalement en Ethernet.", href: "/blog/iptv-wifi-ou-ethernet" },
              { title: "Un appareil", text: "Smart TV, clé HDMI, box Android, smartphone ou PC.", href: "/appareils-iptv" },
              { title: "Un lecteur IPTV", text: "TiviMate, IPTV Smarters Pro, IBO Player…", href: "/applications-iptv" },
              { title: "Un abonnement", text: "Les identifiants qui donnent accès aux chaînes.", href: "/abonnement-iptv" },
            ],
          },
        ],
      },
      {
        id: "avantages",
        h2: "Avantages et limites de l'IPTV",
        blocks: [
          {
            type: "ul",
            items: [
              "**Avantages** : fonctionne sur tous les écrans, sans antenne ni parabole ; replay et VOD ; plusieurs écrans avec un seul abonnement ; pas de décodeur imposé.",
              "**Limites** : dépend de la qualité de votre connexion ; les offres sans garanties peuvent disparaître du jour au lendemain ; la légalité dépend des droits détenus par le fournisseur (voir [IPTV légal en France](/blog/iptv-legal-france)).",
            ],
          },
          { type: "p", text: "Pour choisir une offre sérieuse, lisez notre [comparatif IPTV](/comparatif-iptv) et nos conseils sur le [prix d'un abonnement IPTV](/prix-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce que l'IPTV en termes simples ?", a: "L'IPTV, c'est la télévision reçue par internet. Au lieu d'une antenne ou d'une parabole, une application lit les chaînes via votre connexion, sur une TV, une box, un téléphone ou un ordinateur." },
      { q: "L'IPTV est-il légal en France ?", a: "La technologie est légale : c'est celle des box opérateurs. Une offre IPTV est légale si le fournisseur détient les droits de diffusion des contenus proposés. Voir notre analyse [IPTV légal](/blog/iptv-legal-france)." },
      { q: "Quel débit faut-il pour l'IPTV ?", a: "Environ 10 Mbit/s stables pour la HD et 25 Mbit/s pour la 4K, par écran. La fibre est idéale, mais une bonne ADSL/VDSL suffit pour la HD." },
      { q: "Faut-il une box spéciale pour l'IPTV ?", a: "Non. Une Smart TV avec une application IPTV suffit. Sinon, une clé HDMI comme le Fire TV Stick ou un boîtier IPTV fait l'affaire." },
      { q: "Quelle différence entre IPTV et OTT ?", a: "L'IPTV opérateur passe par le réseau géré de votre fournisseur d'accès ; l'OTT passe par l'internet ouvert (Netflix, abonnements IPTV indépendants). Dans l'usage courant, les deux sont appelés IPTV." },
    ],
    related: ["/applications-iptv", "/appareils-iptv", "/blog/m3u-iptv", "/blog/iptv-legal-france", "/abonnement-iptv", "/comparatif-iptv", "/iptv-france"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "8 min",
  },

  // ── M3U ────────────────────────────────────────────────────────
  {
    slug: "/blog/m3u-iptv",
    group: "guides",
    navLabel: "Liste M3U IPTV",
    cardText: "Format M3U, M3U8, Xtream Codes, EPG et lecteurs M3U.",
    title: "M3U IPTV : liste M3U, format et lecteurs (guide 2026)",
    description: "Liste M3U IPTV : qu'est-ce qu'un fichier M3U ou M3U8, comment le lire (VLC, TiviMate, Kodi), différence avec Xtream Codes, EPG et vérification d'une liste.",
    keywords: ["m3u", "m3u iptv", "iptv m3u", "liste m3u", "liste m3u iptv", "m3u list", "iptv m3u list", "iptv list", "iptv liste", "play list iptv", "player m3u", "iptv player m3u", "m3u8 iptv", "m3u checker", "iptv checker", "iptv checker online", "m3u vod", "vod m3u", "m3u lista", "iptv listas m3u", "m3u online", "m3u downloader online", "m3u premium", "liste m3u molotov", "m3u iptv france github", "iptv source", "iptv site", "iptv sharing"],
    badge: "Guide · M3U",
    h1: "Liste M3U IPTV : le guide complet du format M3U",
    intro: "Une **liste M3U IPTV** est un simple fichier texte (ou un lien) qui contient l'adresse de chaque chaîne d'un abonnement, avec son nom, son logo et sa catégorie. Les lecteurs IPTV comme [VLC](/iptv-vlc), [TiviMate](/tivimate) ou [Smart IPTV](/smart-iptv) lisent ce fichier pour afficher vos chaînes. Le **M3U8** est la même chose encodée en UTF-8, souvent utilisée pour les flux HLS.",
    tldr: [
      "M3U = liste de lecture texte ; chaque chaîne = une ligne #EXTINF + une URL.",
      "Xtream Codes (serveur + identifiant + mot de passe) est plus complet : VOD, séries et EPG automatiques.",
      "Méfiez-vous des « listes M3U gratuites » : instables, souvent illicites, parfois dangereuses.",
    ],
    sections: [
      {
        id: "format",
        h2: "À quoi ressemble un fichier M3U ?",
        blocks: [
          { type: "p", text: "Un fichier M3U commence par la ligne **#EXTM3U**, puis alterne une ligne de description **#EXTINF** et l'adresse du flux :" },
          {
            type: "table",
            head: ["Élément", "Rôle", "Exemple"],
            rows: [
              ["#EXTM3U", "En-tête obligatoire", "#EXTM3U x-tvg-url=\"…\""],
              ["#EXTINF", "Durée (-1 pour du direct) + attributs", "#EXTINF:-1 tvg-id=\"…\" group-title=\"Info\",Nom de la chaîne"],
              ["tvg-id", "Lien avec le guide TV (EPG)", "Identifiant de la chaîne dans le XMLTV"],
              ["tvg-logo", "Logo affiché", "URL d'une image"],
              ["group-title", "Catégorie", "Sport, Films, Info…"],
              ["URL", "Adresse du flux", "http://serveur/…/12345.ts"],
            ],
          },
          { type: "p", text: "Référence technique : [M3U sur Wikipédia](https://fr.wikipedia.org/wiki/M3U)." },
        ],
      },
      {
        id: "xtream",
        h2: "M3U ou Xtream Codes : que choisir ?",
        blocks: [
          {
            type: "table",
            head: ["", "Liste M3U", "Xtream Codes API"],
            rows: [
              ["Ce que vous recevez", "Un lien (URL) ou un fichier", "URL du serveur + identifiant + mot de passe"],
              ["VOD et séries", "Mélangées, parfois absentes", "Rangées par catégorie, avec affiches"],
              ["Guide TV", "URL XMLTV à ajouter", "Automatique"],
              ["Compatibilité", "Tous les lecteurs", "La plupart des lecteurs modernes"],
            ],
          },
          { type: "p", text: "Avec un [abonnement IPTV Stream Bleu](/abonnement-iptv), vous recevez les deux : utilisez Xtream Codes dès que votre lecteur le permet, et le lien M3U pour [Smart IPTV](/smart-iptv), [SS IPTV](/ss-iptv) ou [VLC](/iptv-vlc)." },
        ],
      },
      {
        id: "lecteurs",
        h2: "Quel lecteur M3U utiliser ?",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "VLC", text: "Sur PC, Mac, mobile : tester une liste en 30 secondes.", href: "/iptv-vlc" },
              { title: "TiviMate", text: "Sur Android TV : la liste devient une vraie TV.", href: "/tivimate" },
              { title: "Kodi", text: "PVR IPTV Simple Client, avec guide XMLTV.", href: "/iptv-kodi-france" },
              { title: "Smart IPTV", text: "Sur TV LG et Samsung, via l'adresse MAC.", href: "/smart-iptv" },
            ],
          },
          { type: "p", text: "Un lecteur M3U en ligne (dans le navigateur) peut dépanner, mais évitez d'y coller vos liens sur un site inconnu : voir [IPTV sur PC et Mac](/iptv-pc-mac)." },
        ],
      },
      {
        id: "verifier",
        h2: "Vérifier une liste M3U (IPTV checker)",
        blocks: [
          {
            type: "ol",
            items: [
              "Ouvrez la liste dans VLC : si les chaînes démarrent, le lien fonctionne.",
              "Un outil « M3U checker » teste automatiquement chaque URL et signale les liens morts. Préférez un outil installé localement : les sites en ligne récupèrent votre lien.",
              "Si toute la liste échoue, l'abonnement a peut-être expiré ou l'URL contient une erreur (espace, http/https).",
            ],
          },
        ],
      },
      {
        id: "gratuit",
        h2: "Listes M3U gratuites, GitHub, Molotov : ce qu'il faut savoir",
        blocks: [
          { type: "p", text: "Des dépôts publics sur GitHub (comme le projet iptv-org) recensent des flux de chaînes **gratuites et diffusées librement** par leurs éditeurs. Ils sont légaux mais limités, et les liens changent souvent. Les « listes M3U premium gratuites » partagées sur des forums, elles, retransmettent généralement des chaînes payantes sans droits : elles cessent de fonctionner rapidement et exposent à des risques (logiciels malveillants, blocages)." },
          { type: "p", text: "Molotov, TF1+ ou france.tv ne fournissent pas de liste M3U : pour les chaînes gratuites françaises, utilisez leurs applications officielles. Pour un service stable avec support, comparez les offres sur notre page [prix IPTV](/prix-iptv) et testez avant d'acheter avec l'[essai gratuit](/essai-gratuit)." },
        ],
      },
    ],
    faq: [
      { q: "Qu'est-ce qu'une liste M3U IPTV ?", a: "C'est un fichier texte ou un lien qui liste les adresses des chaînes d'un abonnement IPTV, avec leur nom, logo et catégorie. Un lecteur IPTV le lit pour afficher les chaînes." },
      { q: "Quelle différence entre M3U et M3U8 ?", a: "Le M3U8 est un fichier M3U encodé en UTF-8. Il est utilisé notamment pour les flux HLS. Pour un utilisateur, les deux se lisent de la même façon dans un lecteur IPTV." },
      { q: "Comment lire une liste M3U ?", a: "Avec VLC (Média → Ouvrir un flux réseau), ou en l'ajoutant dans un lecteur IPTV comme TiviMate, IPTV Smarters, Kodi ou Smart IPTV." },
      { q: "Les listes M3U gratuites sont-elles légales ?", a: "Les listes de chaînes gratuites diffusées librement (comme celles recensées par iptv-org) sont légales. Les listes qui retransmettent des chaînes payantes sans droits ne le sont pas et sont souvent instables." },
      { q: "Comment ajouter le guide TV à une liste M3U ?", a: "Ajoutez l'URL XMLTV (EPG) dans les réglages de votre lecteur. Les identifiants tvg-id de la liste font le lien avec la grille des programmes." },
    ],
    related: ["/iptv-vlc", "/tivimate", "/smart-iptv", "/iptv-kodi-france", "/applications-iptv", "/blog/qu-est-ce-que-l-iptv", "/abonnement-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "9 min",
  },

  // ── IPTV ne fonctionne plus ────────────────────────────────────
  {
    slug: "/blog/iptv-ne-fonctionne-plus",
    group: "guides",
    navLabel: "IPTV ne fonctionne plus",
    cardText: "Écran noir, chargement infini, bloqué : les solutions.",
    title: "IPTV ne fonctionne plus ou bloqué : 10 solutions",
    description: "Votre IPTV ne fonctionne plus, reste bloqué au chargement ou coupe ? 10 solutions testées : identifiants, DNS, cache, lecteur, Wi-Fi, abonnement expiré.",
    keywords: ["iptv ne fonctionne plus", "iptv bloqué", "iptv smarter pro bloqué", "smart iptv bloqué au chargement", "iptv smasters pro introuvable google play", "orange bloque iptv 2021", "iptv isp", "iptv coupure"],
    badge: "Guide · Dépannage",
    h1: "IPTV qui ne fonctionne plus ou bloqué : les solutions",
    intro: "Quand l'**IPTV ne fonctionne plus**, la cause est dans 90 % des cas l'une de ces quatre : identifiants mal saisis ou expirés, application qui a besoin d'être vidée ou mise à jour, réseau domestique instable, ou service du fournisseur indisponible. Suivez les étapes ci-dessous dans l'ordre : la plupart des pannes se règlent en moins de 5 minutes.",
    tldr: [
      "Redémarrez l'appareil ET la box internet (débranchez 30 secondes).",
      "Vérifiez la date d'expiration et ressaisissez les identifiants sans espace.",
      "Changez de lecteur interne dans l'application et videz le cache.",
    ],
    sections: [
      {
        id: "diagnostic",
        h2: "Diagnostic rapide selon le symptôme",
        blocks: [
          {
            type: "table",
            head: ["Symptôme", "Cause probable", "Solution"],
            rows: [
              ["Rien ne charge, aucune chaîne", "Identifiants ou abonnement expiré", "Vérifiez l'e-mail d'activation et la date de fin"],
              ["Bloqué au chargement de la playlist", "Liste trop lourde, cache plein", "Videz le cache, masquez des catégories"],
              ["Une seule chaîne ne marche pas", "Flux momentanément indisponible", "Essayez la version HD/SD ou attendez quelques minutes"],
              ["Coupures régulières, buffering", "Wi-Fi saturé, débit insuffisant", "Ethernet ou Wi-Fi 5 GHz ; voir notre guide réseau"],
              ["Écran noir avec son", "Décodeur vidéo", "Changez de lecteur (matériel ↔ logiciel)"],
              ["Application introuvable dans le store", "App retirée ou renommée", "Voir les alternatives ci-dessous"],
            ],
          },
        ],
      },
      {
        id: "solutions",
        h2: "Les 10 solutions, étape par étape",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Redémarrez tout", text: "TV/boîtier et box internet, débranchés 30 secondes. Cela règle une grande partie des blocages." },
              { title: "Vérifiez l'abonnement", text: "Date d'expiration et nombre d'écrans : si un autre appareil utilise déjà votre connexion, le flux se coupe." },
              { title: "Ressaisissez les identifiants", text: "URL avec http:// et le port éventuel, sans espace final. Un copier-coller depuis l'e-mail évite les erreurs." },
              { title: "Videz le cache de l'application", text: "Android/Fire TV : Paramètres → Applications → votre lecteur → Vider le cache." },
              { title: "Changez de lecteur interne", text: "Dans IPTV Smarters : Paramètres → Player Selection. Dans TiviMate : décodeur matériel ou logiciel." },
              { title: "Mettez à jour l'application", text: "Ou réinstallez-la depuis sa source officielle." },
              { title: "Testez le réseau", text: "Un test de débit sur l'appareil lui-même : 10 Mbit/s mini en HD, 25 en 4K. Voir [IPTV Wi-Fi ou Ethernet](/blog/iptv-wifi-ou-ethernet)." },
              { title: "Changez de DNS", text: "Des DNS publics (Cloudflare 1.1.1.1, Google 8.8.8.8) résolvent parfois des problèmes de résolution d'adresse côté box." },
              { title: "Testez un autre lecteur", text: "Ouvrez votre lien M3U dans [VLC](/iptv-vlc) : si VLC lit, le problème vient de l'application." },
              { title: "Contactez le support", text: "Chez Stream Bleu, le support répond en français 7j/7 par WhatsApp et e-mail via la page [contact](/contact)." },
            ],
          },
        ],
      },
      {
        id: "applications",
        h2: "Application IPTV bloquée ou introuvable",
        blocks: [
          {
            type: "ul",
            items: [
              "**IPTV Smarters Pro introuvable sur Google Play** : installez [Smarters Player Lite](/smarters-player-lite) ou l'APK officiel ([guide Smarters](/iptv-smarters-pro)).",
              "**Smart IPTV bloqué au chargement** : vérifiez l'adresse MAC et la case « Save online » ([guide Smart IPTV](/smart-iptv)).",
              "**IPTV Smarters absent sur Samsung** : passez à [IBO Player](/ibo-player) ([guide Samsung](/iptv-samsung-tv-france)).",
            ],
          },
        ],
      },
      {
        id: "blocages",
        h2: "Blocages par les fournisseurs d'accès : ce qu'il faut savoir",
        blocks: [
          { type: "p", text: "Depuis la création de l'[Arcom](https://www.arcom.fr) en 2022, les fournisseurs d'accès français (Orange, SFR, Free, Bouygues) peuvent être contraints par décision de justice de bloquer des services qui diffusent des contenus sans droits. Si un service cesse soudainement de fonctionner pour tous ses clients, c'est souvent le signe d'un service non autorisé. Plus d'informations dans notre article [IPTV légal en France](/blog/iptv-legal-france)." },
        ],
      },
    ],
    faq: [
      { q: "Pourquoi mon IPTV ne fonctionne plus ?", a: "Les causes les plus fréquentes sont un abonnement expiré, des identifiants mal saisis, un cache d'application saturé ou un réseau Wi-Fi instable. Redémarrez l'appareil et la box, puis vérifiez vos identifiants." },
      { q: "Que faire si l'IPTV reste bloqué au chargement ?", a: "Videz le cache de l'application, vérifiez vos identifiants, réduisez la taille de la liste en masquant des catégories, et testez le lien M3U dans VLC pour isoler le problème." },
      { q: "Pourquoi l'IPTV coupe toutes les 5 minutes ?", a: "Souvent un Wi-Fi saturé ou un deuxième appareil qui utilise la même connexion. Passez en Ethernet ou Wi-Fi 5 GHz et vérifiez le nombre d'écrans de votre forfait." },
      { q: "Mon fournisseur d'accès bloque-t-il l'IPTV ?", a: "Les FAI ne bloquent pas la technologie IPTV. Ils peuvent en revanche être contraints de bloquer des services précis qui diffusent des contenus sans droits, sur décision de justice ou de l'Arcom." },
    ],
    related: ["/blog/iptv-wifi-ou-ethernet", "/blog/iptv-sans-coupure", "/iptv-smarters-pro", "/smart-iptv", "/iptv-vlc", "/blog/iptv-stable-france"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "7 min",
  },

  // ── IPTV à vie ─────────────────────────────────────────────────
  {
    slug: "/blog/iptv-a-vie",
    group: "guides",
    navLabel: "IPTV à vie",
    cardText: "Pourquoi les offres IPTV « à vie » sont un piège.",
    title: "IPTV à vie : arnaque ou bonne affaire ? (2026)",
    description: "IPTV à vie, box IPTV lifetime, abonnement illimité : pourquoi ces offres ne tiennent jamais, comment repérer les arnaques et quelle durée d'abonnement choisir.",
    keywords: ["iptv a vie", "iptv lifetime", "iptv illimité", "box iptv a vie", "abonnement iptv a vie"],
    badge: "Guide · Arnaques",
    h1: "IPTV à vie : pourquoi il faut s'en méfier",
    intro: "Une offre **IPTV « à vie »** promet des chaînes pour un paiement unique. En pratique, aucune offre IPTV à vie ne tient dans la durée : faire fonctionner des serveurs coûte de l'argent chaque mois, et un paiement unique ne peut pas le financer. Ces offres disparaissent généralement au bout de quelques semaines ou mois, sans remboursement. Mieux vaut un abonnement de 12 mois, résiliable et remboursable.",
    sections: [
      {
        id: "pourquoi",
        h2: "Pourquoi l'IPTV à vie ne peut pas fonctionner",
        blocks: [
          {
            type: "ul",
            items: [
              "**Coûts permanents** : serveurs, bande passante et support sont facturés chaque mois au fournisseur.",
              "**Pas d'engagement réel** : « à vie » signifie en réalité « à vie du service », qui peut fermer à tout moment.",
              "**Aucun recours** : ces offres sont souvent vendues sans société identifiable ni politique de remboursement.",
            ],
          },
        ],
      },
      {
        id: "signaux",
        h2: "Les signaux d'alerte d'une offre IPTV douteuse",
        blocks: [
          {
            type: "table",
            head: ["Signal", "Pourquoi c'est suspect"],
            rows: [
              ["« À vie » ou « lifetime »", "Modèle économique impossible"],
              ["Box vendue « avec toutes les chaînes » sur une marketplace", "L'abonnement caché expire vite"],
              ["Paiement uniquement en cryptomonnaie ou carte cadeau", "Aucune protection acheteur"],
              ["Pas d'essai, pas de support identifiable", "Impossible de tester ou de réclamer"],
              ["Prix anormalement bas", "Souvent le signe d'un service sans droits"],
            ],
          },
        ],
      },
      {
        id: "alternative",
        h2: "Quelle durée d'abonnement choisir plutôt ?",
        blocks: [
          { type: "p", text: "Le meilleur compromis est de **tester 24h**, puis de prendre 1 ou 3 mois, et seulement ensuite 12 mois pour réduire le prix mensuel. Chez Stream Bleu, le forfait 12 mois revient à environ 4 € par mois et inclut l'activation [IBO Player](/ibo-player). Voir tous les [tarifs](/tarifs), notre guide [prix IPTV](/prix-iptv) et le [comparatif IPTV](/comparatif-iptv)." },
        ],
      },
    ],
    faq: [
      { q: "L'IPTV à vie existe-t-il vraiment ?", a: "Des offres « à vie » sont vendues, mais aucune ne dure réellement : un service IPTV a des coûts mensuels qu'un paiement unique ne couvre pas. Elles s'arrêtent généralement au bout de quelques semaines ou mois." },
      { q: "Les box IPTV « avec chaînes à vie » sont-elles fiables ?", a: "Le boîtier est un produit normal, mais l'abonnement préinstallé est en général sans garantie et expire rapidement. Achetez le boîtier seul et un abonnement séparé." },
      { q: "Quelle est la durée d'abonnement IPTV la plus rentable ?", a: "Le 12 mois offre le meilleur prix mensuel, à condition d'avoir testé le service avant. Commencez par un essai gratuit, puis 1 mois." },
    ],
    related: ["/prix-iptv", "/comparatif-iptv", "/tarifs", "/essai-gratuit", "/blog/iptv-pas-cher-france", "/boitier-iptv"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "4 min",
  },

  // ── Wi-Fi ou Ethernet ──────────────────────────────────────────
  {
    slug: "/blog/iptv-wifi-ou-ethernet",
    group: "guides",
    navLabel: "IPTV Wi-Fi ou Ethernet",
    cardText: "Débit, Wi-Fi 5 GHz, CPL, Ethernet : le guide réseau IPTV.",
    title: "IPTV en Wi-Fi ou Ethernet ? Débit et conseils (2026)",
    description: "IPTV en Wi-Fi ou en Ethernet : débit nécessaire en HD et 4K, Wi-Fi 5 GHz, CPL, nombre de connexions simultanées. Le guide réseau pour éviter les coupures.",
    keywords: ["iptv wifi", "iptv wifi ou ethernet", "iptv combien de connexion", "iptv internet", "debit iptv"],
    badge: "Guide · Réseau",
    h1: "IPTV en Wi-Fi ou en Ethernet : que choisir ?",
    intro: "Pour l'IPTV, l'**Ethernet (câble RJ45) est toujours plus stable que le Wi-Fi** : pas d'interférences, débit constant, latence faible. Le Wi-Fi convient si vous êtes en **5 GHz** près de la box, avec au moins 10 Mbit/s réels en HD et 25 Mbit/s en 4K par écran. Entre les deux, les adaptateurs CPL ou un système Wi-Fi maillé sont d'excellents compromis.",
    sections: [
      {
        id: "debit",
        h2: "Quel débit pour l'IPTV ?",
        blocks: [
          {
            type: "table",
            head: ["Qualité", "Débit minimum stable", "Conseillé"],
            rows: [
              ["SD", "4 Mbit/s", "6 Mbit/s"],
              ["HD 1080p", "8 Mbit/s", "15 Mbit/s"],
              ["4K UHD", "20 Mbit/s", "25–30 Mbit/s"],
            ],
            caption: "Débit par écran. Multipliez par le nombre d'écrans utilisés en même temps.",
          },
          { type: "p", text: "Mesurez le débit **sur l'appareil qui lit l'IPTV** (application de test de débit sur la TV ou le boîtier), pas sur votre téléphone à côté de la box." },
        ],
      },
      {
        id: "comparatif",
        h2: "Wi-Fi, Ethernet, CPL : comparatif",
        blocks: [
          {
            type: "table",
            head: ["Connexion", "Stabilité", "Coût", "Quand l'utiliser"],
            rows: [
              ["Ethernet", "Excellente", "Câble de quelques euros", "TV proche de la box ou câblage possible"],
              ["Wi-Fi 5 GHz / Wi-Fi 6", "Bonne", "Inclus", "Même pièce ou pièce voisine"],
              ["Wi-Fi 2,4 GHz", "Moyenne", "Inclus", "À éviter pour la 4K"],
              ["CPL", "Bonne (selon installation électrique)", "40–100 €", "TV éloignée, pas de câble"],
              ["Wi-Fi maillé (mesh)", "Bonne", "100–300 €", "Grande maison"],
            ],
          },
        ],
      },
      {
        id: "connexions",
        h2: "Combien de connexions IPTV faut-il ?",
        blocks: [
          { type: "p", text: "Une connexion = un écran qui regarde en même temps. Un couple qui regarde la TV au salon pendant qu'un enfant regarde sur tablette a besoin de **2 connexions**. Stream Bleu propose de 1 à 10 connexions : voir les [tarifs multi-écrans](/tarifs). Vérifiez aussi que votre débit total suit : 3 écrans en HD = environ 45 Mbit/s conseillés." },
        ],
      },
      {
        id: "astuces",
        h2: "5 astuces pour une IPTV sans coupure",
        blocks: [
          {
            type: "ol",
            items: [
              "Branchez la TV ou le boîtier en Ethernet dès que possible.",
              "En Wi-Fi, forcez le réseau 5 GHz et éloignez la box des murs épais et de l'électroménager.",
              "Évitez les gros téléchargements pendant un match.",
              "Utilisez l'alimentation secteur d'origine des clés HDMI.",
              "Choisissez un lecteur performant : [TiviMate](/tivimate) sur Android TV.",
            ],
          },
          { type: "p", text: "Toujours des coupures ? Lisez [IPTV ne fonctionne plus](/blog/iptv-ne-fonctionne-plus) et [IPTV sans coupure](/blog/iptv-sans-coupure)." },
        ],
      },
    ],
    faq: [
      { q: "L'IPTV fonctionne-t-il en Wi-Fi ?", a: "Oui, à condition d'avoir un Wi-Fi 5 GHz stable avec au moins 10 Mbit/s en HD et 25 Mbit/s en 4K par écran. L'Ethernet reste plus fiable." },
      { q: "Quel débit faut-il pour l'IPTV 4K ?", a: "Environ 25 Mbit/s stables par écran en 4K. La fibre permet plusieurs flux 4K simultanés sans difficulté." },
      { q: "Le CPL est-il bien pour l'IPTV ?", a: "Oui, le CPL est une bonne solution si la TV est loin de la box, à condition que les prises soient sur le même circuit électrique et sans multiprise." },
      { q: "Combien de connexions IPTV me faut-il ?", a: "Autant que d'écrans utilisés en même temps. Une seule connexion suffit si une seule personne regarde à la fois." },
    ],
    related: ["/blog/iptv-ne-fonctionne-plus", "/blog/iptv-sans-coupure", "/blog/iptv-4k-france", "/boitier-iptv", "/tarifs"],
    schema: "Article",
    datePublished: D,
    dateModified: D,
    readTime: "5 min",
  },
];
