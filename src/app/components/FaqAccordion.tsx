"use client";
import { useState } from "react";

const items = [
  {
    q: "Quelle résolution et quel codec utilise Stream Bleu ?",
    a: "Stream Bleu diffuse en vrai 4K Ultra HD (3840×2160) avec l'encodage H.265/HEVC — offrant deux fois la qualité d'image du H.264 au même débit. HDR10 et Dolby Vision sont pris en charge sur les chaînes compatibles, vous offrant une qualité cinématographique sur les écrans compatibles.",
  },
  {
    q: "Quelle vitesse internet faut-il pour l'IPTV 4K ?",
    a: "Une connexion stable de 25 Mbps suffit pour des streams 4K H.265 sans buffering. Les offres fibre françaises à 100 Mbps+ permettent plusieurs streams 4K simultanés sans effort. Nos serveurs utilisent des routes optimisées pour la France pour une faible latence.",
  },
  {
    q: "Stream Bleu supporte-t-il HDR10 et Dolby Vision ?",
    a: "Oui. HDR10 et Dolby Vision sont entièrement pris en charge sur les streams et lecteurs compatibles. Associez Stream Bleu à TiviMate ou IBO Player sur un Apple TV 4K, Samsung QLED ou LG OLED et les capacités HDR de votre écran s'activent automatiquement.",
  },
  {
    q: "Quel lecteur IPTV donne les meilleures performances 4K H.265 ?",
    a: "TiviMate (Android/Fire TV) est la référence pour la 4K H.265 avec accélération matérielle et un EPG propre. IBO Player est inclus gratuitement avec les forfaits 12 mois. IPTV Smarters Pro est une excellente alternative pour iOS et tvOS.",
  },
  {
    q: "Puis-je regarder la Ligue 1, la Champions League et le sport français en 4K ?",
    a: "Tout le contenu sportif est diffusé à la qualité maximale disponible — 4K là où le diffuseur le propose. beIN Sports (tous feeds), RMC Sport, Canal+ Sport, Eurosport et L'Équipe TV sont tous inclus. Chaque match de Ligue 1, Champions League, Roland-Garros, Top 14 et F1 est couvert sans blackout ni frais PPV supplémentaire.",
  },
  {
    q: "Comment la qualité d'image de Stream Bleu se compare-t-elle au câble ?",
    a: "La TV par câble compresse la plupart des contenus en 1080i ou 720p avec des codecs anciens. Stream Bleu délivre de vrais streams 4K H.265/HEVC — nettement plus nets que tout ce qu'Orange, SFR ou Free proposent aux abonnements standard. Mêmes chaînes françaises, résolution bien supérieure, pour jusqu'à 80% moins cher par mois.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-2xl border overflow-hidden transition-colors"
          style={{
            borderColor: open === i ? "rgba(99,103,255,0.38)" : "rgba(255,255,255,0.07)",
            background: open === i ? "rgba(99,103,255,0.05)" : "rgba(255,255,255,0.03)",
          }}>
          <button className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-semibold text-white text-sm md:text-base leading-snug">{item.q}</span>
            <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-300"
              style={{ background: open === i ? "#6367FF" : "rgba(255,255,255,0.08)", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
