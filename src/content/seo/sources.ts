// Outbound reference links shown under « Sources et liens officiels » on SeoPage
// pages. Only official sites of the app, device or regulator the page talks
// about, or a neutral reference (Wikipedia). Stream Bleu is not affiliated
// with any of them.

export type Source = { label: string; href: string; note: string };

const ARCOM: Source = { label: "Arcom", href: "https://www.arcom.fr", note: "régulateur français de l'audiovisuel et du numérique" };
const ARCEP: Source = { label: "Arcep", href: "https://www.arcep.fr", note: "régulateur des télécoms : déploiement de la fibre, qualité des réseaux" };
const WIKI_IPTV: Source = { label: "Télévision sur IP (Wikipédia)", href: "https://fr.wikipedia.org/wiki/T%C3%A9l%C3%A9vision_sur_IP", note: "définition et historique de l'IPTV" };
const WIKI_M3U: Source = { label: "Format M3U (Wikipédia)", href: "https://fr.wikipedia.org/wiki/M3U", note: "description technique des listes de lecture M3U" };
const SPEEDTEST: Source = { label: "Speedtest", href: "https://www.speedtest.net", note: "mesurer le débit réel de votre connexion" };
const VLC: Source = { label: "VLC (VideoLAN)", href: "https://www.videolan.org/vlc/", note: "site officiel du lecteur VLC" };
const KODI: Source = { label: "Kodi", href: "https://kodi.tv", note: "site officiel du media center Kodi" };
const SMARTERS: Source = { label: "IPTV Smarters", href: "https://www.iptvsmarters.com", note: "site officiel de l'éditeur de l'application" };
const TIVIMATE: Source = { label: "TiviMate", href: "https://tivimate.com", note: "site officiel de l'application TiviMate" };
const SIPTV: Source = { label: "Smart IPTV (SIPTV)", href: "https://siptv.app", note: "site officiel de l'application Smart IPTV" };
const SSIPTV: Source = { label: "SS IPTV", href: "https://ss-iptv.com", note: "site officiel de l'application SS IPTV" };
const INFOMIR: Source = { label: "Infomir (MAG)", href: "https://www.infomir.eu", note: "fabricant des boîtiers MAG" };
const FORMULER: Source = { label: "Formuler", href: "https://formuler.tv", note: "fabricant des boîtiers Formuler et de MyTVOnline" };
const JELLYFIN: Source = { label: "Jellyfin", href: "https://jellyfin.org", note: "serveur multimédia libre et gratuit" };
const PLEX: Source = { label: "Plex", href: "https://www.plex.tv", note: "site officiel de Plex" };
const OPENPLI: Source = { label: "OpenPLi", href: "https://www.openpli.org", note: "image Enigma2 open source pour décodeurs Linux" };
const APPLE_TV: Source = { label: "Apple TV 4K", href: "https://www.apple.com/fr/apple-tv-4k/", note: "page officielle Apple" };
const ANDROID_TV: Source = { label: "Android TV / Google TV", href: "https://www.android.com/tv/", note: "page officielle Google" };
const SAMSUNG: Source = { label: "Samsung France", href: "https://www.samsung.com/fr/", note: "site officiel du fabricant" };
const LG: Source = { label: "LG France", href: "https://www.lg.com/fr/", note: "site officiel du fabricant" };
const CHROMECAST: Source = { label: "Aide Chromecast", href: "https://support.google.com/chromecast", note: "documentation officielle Google" };
const ROKU: Source = { label: "Roku", href: "https://www.roku.com", note: "site officiel Roku" };
const PS5: Source = { label: "PlayStation 5", href: "https://www.playstation.com/fr-fr/ps5/", note: "page officielle Sony" };
const VIDAA: Source = { label: "VIDAA", href: "https://www.vidaa.com", note: "système des téléviseurs Hisense" };
const XIAOMI: Source = { label: "Xiaomi France", href: "https://www.mi.com/fr/", note: "site officiel du fabricant" };
const WINDOWS: Source = { label: "Windows", href: "https://www.microsoft.com/fr-fr/windows", note: "page officielle Microsoft" };
const FREE: Source = { label: "Free", href: "https://www.free.fr", note: "site officiel de l'opérateur (Freebox)" };
const AFTV: Source = { label: "AFTVnews", href: "https://www.aftvnews.com", note: "éditeur de l'application Downloader" };

export const SOURCES: Record<string, Source[]> = {
  "/iptv-smarters-pro": [SMARTERS, WIKI_IPTV],
  "/smarters-player-lite": [SMARTERS],
  "/iptv-smarters-pro-ne-fonctionne-pas": [SMARTERS, SPEEDTEST],
  "/tivimate": [TIVIMATE, ANDROID_TV],
  "/smart-iptv": [SIPTV, WIKI_M3U],
  "/ss-iptv": [SSIPTV, WIKI_M3U],
  "/iptv-vlc": [VLC, WIKI_M3U],
  "/downloader-iptv": [AFTV],
  "/mytvonline": [FORMULER],
  "/lecteur-iptv-en-ligne": [WIKI_M3U, WIKI_IPTV],
  "/iptv-jellyfin-plex": [JELLYFIN, PLEX],
  "/iptv-mag-box-france": [INFOMIR],
  "/boitier-formuler": [FORMULER],
  "/iptv-xiaomi-mi-box": [XIAOMI, ANDROID_TV],
  "/iptv-x96-mini": [ANDROID_TV],
  "/iptv-enigma2": [OPENPLI],
  "/iptv-freebox": [FREE, ARCEP],
  "/iptv-orange-sfr-bouygues": [ARCEP, ARCOM],
  "/iptv-samsung-tv-france": [SAMSUNG],
  "/iptv-lg-tv-france": [LG],
  "/iptv-smart-tv-france": [SAMSUNG, LG, ANDROID_TV],
  "/iptv-android-tv-france": [ANDROID_TV],
  "/iptv-apple-tv-france": [APPLE_TV],
  "/iptv-windows-france": [WINDOWS, VLC],
  "/iptv-pc-mac": [VLC, WINDOWS],
  "/iptv-kodi-france": [KODI],
  "/iptv-chromecast-france": [CHROMECAST],
  "/iptv-roku-france": [ROKU],
  "/iptv-ps5": [PS5],
  "/iptv-hisense-vidaa": [VIDAA],
  "/blog/qu-est-ce-que-l-iptv": [WIKI_IPTV, ARCOM],
  "/blog/m3u-iptv": [WIKI_M3U, VLC],
  "/blog/iptv-ne-fonctionne-plus": [SPEEDTEST, ARCOM],
  "/blog/iptv-wifi-ou-ethernet": [SPEEDTEST, ARCEP],
  "/blog/ott-iptv": [WIKI_IPTV, ARCOM],
  "/fournisseur-iptv": [ARCOM],
  "/meilleur-iptv-france": [ARCOM, SPEEDTEST],
  "/comparatif-iptv": [ARCOM],
};
