"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const trustpilotReviews = [
  { name: "Thomas R.", flag: "🇫🇷", rating: 5, title: "Meilleur IPTV testé — enfin sans coupure", text: "J'ai essayé au moins quatre fournisseurs IPTV différents ces deux dernières années, et aucun n'approchait Stream Bleu. L'activation était rapide, le support a répondu vite, et le sport en direct est enfin fluide." },
  { name: "Julien M.", flag: "🇫🇷", rating: 5, title: "Un support qui aide vraiment", text: "Le service client est ce qui m'a fait rester avec Stream Bleu. Je venais d'un autre prestataire qui promettait des serveurs premium mais disparaissait dès qu'il y avait un problème. Ici, le support écoute et répond rapidement." },
  { name: "Antoine B.", flag: "🇫🇷", rating: 5, title: "Stable depuis le premier jour", text: "J'étais sceptique car j'ai déjà été déçu par des services IPTV qui fonctionnent bien une semaine puis deviennent inutilisables. Stream Bleu est stable depuis le premier jour. Testé pendant des matchs en direct — aucun problème." },
  { name: "Pierre L.", flag: "🇫🇷", rating: 5, title: "Qualité et sérieux bien au-dessus des autres", text: "Après avoir comparé Stream Bleu avec deux autres fournisseurs, la différence était évidente. Les autres étaient moins chers mais peu fiables avec un mauvais support. Stream Bleu m'a aidé à tout configurer et a fait un suivi." },
  { name: "Nicolas D.", flag: "🇧🇪", rating: 5, title: "Ce n'était jamais ma connexion le problème", text: "Mon ancien fournisseur IPTV accusait toujours ma connexion quand les chaînes se figeaient. Avec Stream Bleu, j'ai compris que le problème ne venait jamais de ma connexion. Streams stables, qualité HD constante." },
  { name: "Romain C.", flag: "🇫🇷", rating: 5, title: "Transparent — livre exactement ce qu'il promet", text: "Ce qui m'a le plus impressionné c'est la transparence. Avant de m'abonner, j'ai posé beaucoup de questions. Le support a donné des réponses honnêtes sans survendre. Après l'abonnement, tout correspondait." },
  { name: "Maxime P.", flag: "🇫🇷", rating: 5, title: "Activation rapide et support réel", text: "Je suis passé à Stream Bleu après que mon ancien service ait planté pendant un match important sans jamais répondre. Stream Bleu a activé vite, et quand j'ai eu besoin d'aide sur ma Smart TV, le support m'a guidé patiemment." },
  { name: "Lucas F.", flag: "🇨🇭", rating: 5, title: "Meilleure stabilité et bien meilleur support", text: "Stream Bleu offre une meilleure stabilité et un bien meilleur support que les autres fournisseurs. Chez les autres, les réponses étaient lentes ou génériques. Ici, le support lit vraiment votre message et donne une aide adaptée." },
  { name: "Sébastien K.", flag: "🇫🇷", rating: 5, title: "Optimisé et fiable", text: "Je n'écris pas souvent des avis, mais Stream Bleu le mérite. Je venais d'un fournisseur qui surchargeait ses serveurs. Stream Bleu semble vraiment optimisé. Le support a donné des conseils utiles au lieu de réponses copiées-collées." },
  { name: "Mathieu C.", flag: "🇫🇷", rating: 5, title: "Une constance que les autres ne peuvent pas égaler", text: "La plus grande différence entre Stream Bleu et les autres services IPTV, c'est la constance. Mes anciens fournisseurs étaient imprévisibles. Stream Bleu est stable depuis le premier jour. Le service a même repris contact après l'activation." },
  { name: "Guillaume J.", flag: "🇫🇷", rating: 5, title: "La comparaison n'était même pas proche", text: "J'ai testé Stream Bleu en parallèle avec mon ancien fournisseur pendant une semaine, et la comparaison n'était même pas proche. Meilleure qualité d'image, changement de chaîne plus rapide, aucune déconnexion aléatoire." },
  { name: "Florian D.", flag: "🇫🇷", rating: 5, title: "Le support ne disparaît pas après le paiement", text: "Ce que j'apprécie chez Stream Bleu, c'est que le support ne disparaît pas après le paiement. J'avais des questions sur la TV de rattrapage — tout m'a été expliqué clairement. Mon ancien fournisseur ignorait les messages une fois payé." },
  { name: "Vincent L.", flag: "🇲🇦", rating: 5, title: "Service IPTV le plus stable que j'ai eu", text: "J'utilise Stream Bleu depuis plusieurs mois, et c'est le service IPTV le plus stable que j'ai eu. Le sport en direct fonctionne parfaitement, la VOD charge vite, et le support est réactif et poli." },
  { name: "Alexandre R.", flag: "🇫🇷", rating: 5, title: "Performances solides et vrai support", text: "Je suis passé à Stream Bleu après l'avoir comparé à des alternatives moins chères. Ces services avaient toujours des compromis. Stream Bleu délivre de bonnes performances et un vrai support client." },
  { name: "Christophe A.", flag: "🇫🇷", rating: 5, title: "Stream Bleu m'a redonné confiance en l'IPTV", text: "Stream Bleu m'a redonné confiance dans les services IPTV. Après plusieurs mauvaises expériences, j'étais prêt à abandonner l'IPTV complètement. Stream Bleu a prouvé qu'un service peut être stable, honnête et soutenu par de vraies personnes." },
  { name: "Patrick O.", flag: "🇧🇪", rating: 5, title: "Premium et fiable", text: "La qualité de service avec Stream Bleu est clairement supérieure aux autres fournisseurs. Les chaînes sont stables, la sélection VOD est excellente, et le support explique les choses correctement. C'est premium et fiable." },
  { name: "Stéphane M.", flag: "🇨🇭", rating: 5, title: "Livre exactement ce qu'il annonce", text: "J'apprécie à quel point le support de Stream Bleu est compétent. Ils ont expliqué les différences entre les applications et les appareils au lieu de donner des réponses vagues. Mon ancien fournisseur sur-vendait des fonctions qui ne marchaient pas." },
  { name: "David F.", flag: "🇫🇷", rating: 5, title: "Fiable aux heures de pointe", text: "Ce qui distingue Stream Bleu c'est la fiabilité aux heures de pointe. Mon ancien fournisseur tombait toujours pendant les grands événements. Stream Bleu a tout géré sans problème." },
  { name: "Damien N.", flag: "🇫🇷", rating: 5, title: "Plus rapide, plus net, meilleur support", text: "Après être passé à Stream Bleu, j'ai réalisé à quel point mon ancien service IPTV était mauvais. Chargement plus rapide, meilleure qualité d'image, et un vrai support font toute la différence." },
  { name: "Arnaud G.", flag: "🇫🇷", rating: 5, title: "IPTV premium fait correctement", text: "Stream Bleu ressemble à un service IPTV premium fait correctement. J'ai testé de nombreux fournisseurs au fil des années, et aucun n'a atteint ce niveau de stabilité et de service client." },
];

const whatsappReviews = [
  { name: "Thomas W.", flag: "🇫🇷", text: "Bonjour, je voulais juste dire que le service fonctionne super bien 👍 Le sport est fluide et pas de coupure pour l'instant. Merci pour l'aide rapide hier." },
  { name: "Julien C.", flag: "🇫🇷", text: "Merci pour le support. L'installation était facile avec votre aide. Bien mieux que mon ancien IPTV qui gelait tout le temps." },
  { name: "Pierre F.", flag: "🇧🇪", text: "Tout va bien de mon côté. Les streams sont stables même pendant les matchs. Grande différence avec mon ancien fournisseur." },
  { name: "Romain M.", flag: "🇫🇷", text: "Ça fonctionne parfaitement maintenant. Le service client était très patient, merci pour ça. La qualité est au rendez-vous." },
  { name: "Nicolas T.", flag: "🇨🇭", text: "Juste pour confirmer que tout tourne bien. Les chaînes en direct sont fluides et la VOD charge vite. Satisfait pour l'instant." },
  { name: "Maxime A.", flag: "🇫🇷", text: "Merci pour la réponse rapide. Je ne m'attendais pas à ce que le support réponde aussi vite 😅 Le service est top." },
  { name: "Lucas R.", flag: "🇫🇷", text: "Merci encore pour l'aide de tout à l'heure. C'est bien plus stable que l'IPTV que j'utilisais avant." },
  { name: "Antoine W.", flag: "🇫🇷", text: "C'est bon maintenant 👍 Testé pendant le match, aucun buffering du tout. Vraiment impressionné." },
  { name: "Sébastien B.", flag: "🇲🇦", text: "Le service tourne bien. J'avais des problèmes avec mon ancien fournisseur mais rien ici pour l'instant." },
  { name: "Mathieu M.", flag: "🇫🇷", text: "Installation faite et tout fonctionne. Merci de m'avoir guidé étape par étape, très apprécié." },
  { name: "Guillaume H.", flag: "🇫🇷", text: "Je voulais vous faire savoir que ça fonctionne parfaitement. Les chaînes chargent vite et la qualité est bonne." },
  { name: "Florian P.", flag: "🇫🇷", text: "Bien mieux qu'avant. Le support répond vraiment et aide, c'est rare en IPTV." },
  { name: "Vincent C.", flag: "🇧🇪", text: "Aucun problème de mon côté aujourd'hui. Regardé le sport et des films sans soucis. Bon service." },
  { name: "Alexandre G.", flag: "🇫🇷", text: "Merci de vérifier. Tout tourne toujours bien. Content de l'abonnement." },
  { name: "Christophe S.", flag: "🇫🇷", text: "Testé hier soir aux heures de pointe. Aucun lag du tout. Grande amélioration par rapport à mon ancien IPTV." },
  { name: "Jonathan P.", flag: "🇨🇭", text: "Le service est solide. J'avais une question et vous avez répondu rapidement. Merci." },
  { name: "Benjamin H.", flag: "🇫🇷", text: "C'est bon maintenant 👍 Les streams sont clairs et stables. L'installation était plus facile que prévu." },
  { name: "Paul E.", flag: "🇫🇷", text: "Juste pour confirmer que ça fonctionne super bien. Cette stabilité je n'avais pas ça avant." },
  { name: "David M.", flag: "🇫🇷", text: "Merci pour le support. Tout fonctionne comme promis. Aucune plainte pour l'instant." },
  { name: "Damien F.", flag: "🇫🇷", text: "Très content du service. C'est honnêtement le support client qui a fait la différence." },
];

const googleReviews = [
  { name: "Mathieu C.", rating: 5, text: "J'ai utilisé plusieurs services IPTV au fil des ans et Stream Bleu est le premier qui ne m'a pas déçu après la première semaine. Les chaînes chargent vite, le sport est fluide et la qualité reste constante." },
  { name: "Julien T.", rating: 5, text: "Passé d'un autre fournisseur qui buffering sans cesse pendant les matchs en direct. Stream Bleu est bien meilleur. Les streams sont stables et le service client répond vraiment quand vous les contactez." },
  { name: "Antoine M.", rating: 5, text: "L'activation était rapide et tout a fonctionné comme prévu. Je l'utilise principalement pour le sport et les films — aucun problème majeur. Contacté le support une fois — poli et serviable." },
  { name: "Romain W.", rating: 5, text: "J'étais hésitant après de mauvaises expériences, mais Stream Bleu m'a surpris. La qualité d'image est bonne, les chaînes ne gèlent pas de façon aléatoire, et le support est resté disponible jusqu'à ce que tout fonctionne." },
  { name: "Nicolas P.", rating: 5, text: "Stream Bleu a été fiable jusqu'à présent. Testé pendant les heures chargées et tout a bien tourné. Avec mon ancien fournisseur, les week-ends étaient toujours un problème. Le support est organisé et réactif." },
  { name: "Maxime J.", rating: 5, text: "Ce que j'apprécie le plus c'est la constance. Avec d'autres services, la qualité changeait d'un jour à l'autre. Stream Bleu est resté stable depuis mon abonnement. Le support a répondu clairement à mes questions." },
  { name: "Pierre O.", rating: 5, text: "Je regarde principalement le foot et les PPV, et Stream Bleu les gère bien. Pas de buffering majeur. J'ai demandé au support des infos sur les catégories de chaînes et ils ont tout expliqué clairement." },
  { name: "Sébastien H.", rating: 5, text: "L'installation était simple. J'ai contacté le support juste pour confirmer quelques points et ils ont répondu plus vite que prévu. Les streams sont propres et la VOD fonctionne bien. Plus professionnel que la plupart des services." },
  { name: "Lucas C.", rating: 5, text: "Essayé Stream Bleu sur recommandation d'un ami. Comparé à mon ancien service, c'est plus stable et plus facile à utiliser. Le service client n'a pas disparu après le paiement, ce que j'avais vécu avant." },
  { name: "Guillaume R.", rating: 5, text: "Les chaînes changent vite et la qualité est constante. J'ai eu un petit problème d'installation et le support m'a aidé à le résoudre en quelques minutes. Dans l'ensemble très satisfait." },
  { name: "Florian A.", rating: 5, text: "Utilisé Stream Bleu pendant quelques mois. Le sport en direct est fiable et les films chargent sans longue attente. Le support a été réactif à chaque fois. Bien mieux que le service IPTV que j'utilisais l'an dernier." },
  { name: "Vincent T.", rating: 5, text: "Stream Bleu fait ce qu'il promet. Pas de déclarations exagérées, juste un service stable. J'avais des problèmes de buffering avec mon ancien fournisseur presque tous les jours. Avec Stream Bleu, ça ne s'est pas produit." },
  { name: "Alexandre M.", rating: 5, text: "Bonne qualité de streams et activation rapide. Le service client a été utile quand j'avais besoin de conseils. Comparé aux autres services que j'ai essayés, Stream Bleu semble plus organisé et fiable." },
  { name: "Christophe B.", rating: 5, text: "Je ne laisse pas souvent des avis, mais Stream Bleu a été solide. Les chaînes sportives fonctionnent bien, la sélection VOD est bonne, et le support répond vite au lieu d'envoyer des messages génériques." },
  { name: "Jonathan L.", rating: 5, text: "Passé à Stream Bleu après des problèmes constants avec un autre fournisseur. La différence est notable. Meilleure stabilité des streams, bien meilleur support. Tout fonctionne bien sur mes appareils." },
  { name: "Stéphane L.", rating: 5, text: "L'activation a été rapide et le support était disponible quand j'avais des questions. Je regarde principalement des séries et des films et tout se passe sans problème. Bon service fiable dans l'ensemble." },
  { name: "David M.", rating: 5, text: "Stream Bleu a été stable aux heures de pointe, ce qui était mon plus grand problème avec les services précédents. Le service client est réactif et professionnel. Content de mon abonnement." },
  { name: "Damien P.", rating: 5, text: "Les chaînes chargent vite et la qualité reste constante. Contacté le support une fois et ils ont géré ça poliment. Comparé aux autres services que j'ai utilisés, celui-ci semble plus digne de confiance." },
  { name: "Arnaud W.", rating: 5, text: "Testé Stream Bleu en parallèle avec un autre fournisseur et Stream Bleu a clairement mieux performé. Moins de buffering, changement de chaîne plus rapide. Le support m'a aidé à tout configurer correctement dès le départ." },
  { name: "Benoît T.", rating: 5, text: "Service fiable avec une bonne qualité d'image. Le support client était utile et facile à joindre quand j'avais une question d'installation. Bien plus fluide que mon dernier fournisseur IPTV." },
];

const WA_ICON = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FLAG_MAP: Record<string, string> = {
  "🇫🇷": "fr", "🇧🇪": "be", "🇨🇭": "ch", "🇲🇦": "ma",
  "🇺🇸": "us", "🇨🇦": "ca",
};

const FlagImg = ({ flag }: { flag: string }) => {
  const code = FLAG_MAP[flag];
  if (!code) return <span>{flag}</span>;
  return (
    <img src={`https://flagcdn.com/20x15/${code}.png`} alt={code.toUpperCase()} width={20} height={15}
      style={{ borderRadius: 2, display: "inline-block", verticalAlign: "middle", marginLeft: 4 }} />
  );
};

const TrustpilotLogo = () => (
  <svg viewBox="0 0 260 62" width="180" height="44" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 0l5.5 17H52L37.5 27.5l5.5 17L28 34 13 44.5l5.5-17L4 17h18.5z" fill="#00b67a"/>
    <path d="M28 0l5.5 17H52L37.5 27.5 28 34V0z" fill="#005128"/>
    <text x="60" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="#191919">Trustpilot</text>
    <g transform="translate(60,32)">
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={i*24} y={0} width={20} height={20} rx="2" fill="#00b67a"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <text key={`s${i}`} x={i*24+10} y={10} textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="white">★</text>
      ))}
    </g>
  </svg>
);

const GoogleReviewsLogo = () => (
  <svg viewBox="0 0 260 56" width="220" height="50" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10C15.4 10 10 15.4 10 22s5.4 12 12 12c5.6 0 10.3-3.8 11.6-9H22v-4h16.2c.2 1 .3 2 .3 3 0 8.8-5.9 15-16.5 15C10.5 39 4 32.5 4 22S10.5 5 22 5c5.6 0 10.2 2.1 13.8 5.4l-3.6 3.6C29.8 11.6 26.2 10 22 10z" fill="#4285F4"/>
    <text x="50" y="26" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="24" dominantBaseline="middle">
      <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
    </text>
    <text x="50" y="48" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="15" fill="#5F6368">Avis</text>
    <text x="90" y="48" fontFamily="Arial,sans-serif" fontSize="15" fill="#FBBC04">★★★★★</text>
  </svg>
);

function useAutoSlide(total: number, interval: number) {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const pausedUntil = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      setSliding(true);
      setTimeout(() => { setCurrent(c => (c + 1) % total); setSliding(false); }, 420);
    }, interval);
    return () => clearInterval(timer);
  }, [total, interval]);

  const go = useCallback((n: number) => {
    pausedUntil.current = Date.now() + 9000;
    setSliding(true);
    setTimeout(() => { setCurrent(n); setSliding(false); }, 420);
  }, []);

  return { current, go, sliding };
}

const slideStyle = (sliding: boolean): React.CSSProperties => ({
  transition: "opacity 0.42s ease, transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)",
  opacity: sliding ? 0 : 1,
  transform: sliding ? "translateX(32px)" : "translateX(0)",
});

const ProgressDots = ({ total, current, go }: { total: number; current: number; go: (n: number) => void }) => (
  <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 22 }}>
    {Array.from({ length: total }).map((_, i) => (
      <button key={i} onClick={() => go(i)} style={{
        width: i === current ? 26 : 10, height: 10, borderRadius: 99,
        border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit",
        background: i === current ? "#5a5fcf" : "rgba(90,95,207,0.25)",
        transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
      }} />
    ))}
  </div>
);

const TP_STARS = () => (
  <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
    {[0,1,2,3,4].map(i => (
      <div key={i} style={{ width: 30, height: 30, background: "#00b67a", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#fff", fontSize: 17, lineHeight: 1 }}>★</span>
      </div>
    ))}
  </div>
);

export default function ReviewsSection({ showHeader = true }: { showHeader?: boolean }) {
  const tp = useAutoSlide(trustpilotReviews.length, 5200);
  const wa = useAutoSlide(Math.ceil(whatsappReviews.length / 2), 5700);
  const g  = useAutoSlide(Math.ceil(googleReviews.length / 3), 6100);

  const waVisible = whatsappReviews.slice(wa.current * 2, wa.current * 2 + 2);
  const gVisible  = googleReviews.slice(g.current * 3, g.current * 3 + 3);
  const tpReview  = trustpilotReviews[tp.current];

  return (
    <div>
      {showHeader && (
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ color: "#5a5fcf", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Avis Vérifiés</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 12 }}>
            Ce que disent nos clients sur <span style={{ color: "#5a5fcf" }}>Stream Bleu</span>
          </h2>
          <p style={{ color: "#444", fontSize: 15, marginBottom: 28 }}>Avis réels de Trustpilot, WhatsApp &amp; Google</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            {[
              { val: "5.0", label: "Trustpilot",  color: "#00b67a" },
              { val: "50 000+", label: "Clients", color: "#5a5fcf" },
              { val: "4.9★",  label: "Google",    color: "#FBBC04" },
              { val: "24/7",  label: "Support",   color: "#f5a623" },
            ].map(s => (
              <div key={s.val} style={{ background: "#4a4fc0", borderRadius: 12, padding: "12px 20px", textAlign: "center", minWidth: 90 }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TRUSTPILOT ── */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <TrustpilotLogo />
        </div>
        <div style={{ maxWidth: 780, margin: "0 auto", overflow: "hidden" }}>
          <div style={slideStyle(tp.sliding)}>
            <div style={{ background: "#fff", borderRadius: 20, padding: "32px 36px", boxShadow: "0 4px 28px rgba(90,95,207,0.12)", border: "1px solid rgba(90,95,207,0.12)" }}>
              <TP_STARS />
              <h4 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12, color: "#1a1a4e" }}>{tpReview.title}</h4>
              <p style={{ color: "#333", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{tpReview.text}</p>
              <p style={{ color: "#5a5fcf", fontWeight: 600, fontSize: 13 }}>— {tpReview.name} <FlagImg flag={tpReview.flag} /></p>
            </div>
          </div>
          <ProgressDots total={trustpilotReviews.length} current={tp.current} go={tp.go} />
        </div>
      </div>

      {/* ── WHATSAPP ── */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ background: "#25D366", borderRadius: 10, width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <WA_ICON />
          </div>
          <span style={{ fontWeight: 800, fontSize: 22, color: "#25D366" }}>WhatsApp</span>
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", overflow: "hidden" }}>
          <div style={slideStyle(wa.sliding)}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {waVisible.map((r, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "24px", boxShadow: "0 4px 20px rgba(90,95,207,0.09)", border: "1px solid rgba(90,95,207,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <WA_ICON />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "#1a1a4e" }}>WhatsApp</span>
                  </div>
                  <p style={{ color: "#333", lineHeight: 1.75, fontSize: 14, marginBottom: 14 }}>{r.text}</p>
                  <p style={{ color: "#5a5fcf", fontWeight: 600, fontSize: 13 }}>— {r.name} <FlagImg flag={r.flag} /></p>
                </div>
              ))}
            </div>
          </div>
          <ProgressDots total={Math.ceil(whatsappReviews.length / 2)} current={wa.current} go={wa.go} />
        </div>
      </div>

      {/* ── GOOGLE ── */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <GoogleReviewsLogo />
        </div>
        <div style={{ overflow: "hidden" }}>
          <div style={slideStyle(g.sliding)}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {gVisible.map((r, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "24px", boxShadow: "0 4px 20px rgba(90,95,207,0.09)", border: "1px solid rgba(90,95,207,0.1)" }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                    {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: "#FBBC04", fontSize: 20 }}>★</span>)}
                  </div>
                  <p style={{ fontWeight: 700, fontSize: 15, color: "#1a1a4e", marginBottom: 10 }}>{r.name}</p>
                  <p style={{ color: "#333", lineHeight: 1.75, fontSize: 14 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
          <ProgressDots total={Math.ceil(googleReviews.length / 3)} current={g.current} go={g.go} />
        </div>
      </div>
    </div>
  );
}
