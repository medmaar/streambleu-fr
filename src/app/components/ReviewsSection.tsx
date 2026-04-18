"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const trustpilotReviews = [
  { name: "Thomas R.", flag: "🇫🇷", rating: 5, title: "Meilleur IPTV que j'ai testé — enfin sans coupure", text: "J'ai essayé au moins quatre fournisseurs IPTV différents ces deux dernières années, et aucun n'approchait Stream Bleu. L'activation était rapide, le support a répondu vite, et le sport en direct est enfin fluide." },
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
];


function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: s <= rating ? "#F96E5B" : "rgba(0,0,0,0.15)", fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

interface Props { showHeader?: boolean; }

export default function ReviewsSection({ showHeader = true }: Props) {
  const [tab, setTab] = useState<"trustpilot" | "whatsapp" | "google">("trustpilot");
  const [visible, setVisible] = useState(6);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const checkInView = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) setInView(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkInView, { passive: true });
    checkInView();
    return () => window.removeEventListener("scroll", checkInView);
  }, [checkInView]);

  const reviews = tab === "trustpilot" ? trustpilotReviews : tab === "whatsapp" ? whatsappReviews : googleReviews;

  const tabStyle = (t: string): React.CSSProperties => ({
    padding: "8px 20px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: 13,
    cursor: "pointer",
    border: "none",
    background: tab === t ? "#F96E5B" : "rgba(63,154,174,0.12)",
    color: tab === t ? "#fff" : "#1A3D45",
    transition: "all 0.2s",
  });

  return (
    <div ref={sectionRef}>
      {showHeader && (
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{ color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Avis Vérifiés</p>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, color: "#1A3D45", marginBottom: 8 }}>
            Ce que disent nos clients
          </h2>
          <p style={{ color: "#555", fontSize: 14 }}>Avis réels de Trustpilot, WhatsApp &amp; Google — 50 000+ clients satisfaits en France et dans le monde.</p>
        </div>
      )}

      {/* Onglets */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 32, flexWrap: "wrap" }}>
        {(["trustpilot", "whatsapp", "google"] as const).map((t) => (
          <button key={t} style={tabStyle(t)} onClick={() => { setTab(t); setVisible(6); }}>
            {t === "trustpilot" ? "⭐ Trustpilot" : t === "whatsapp" ? "💬 WhatsApp" : "🔍 Google"}
          </button>
        ))}
      </div>

      {/* Grille d'avis */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
        {reviews.slice(0, visible).map((r, i) => (
          <div
            key={i}
            className={inView ? "ma-visible" : "ma-init"}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: "22px 22px",
              border: "1px solid rgba(63,154,174,0.15)",
              boxShadow: "0 4px 16px rgba(26,61,69,0.06)",
              transitionDelay: `${(i % 6) * 0.07}s`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#1A3D45" }}>{"flag" in r ? (r as { flag: string }).flag : ""} {r.name}</div>
                {"title" in r && <div style={{ fontSize: 13, fontWeight: 600, color: "#333", marginTop: 4 }}>{(r as { title: string }).title}</div>}
              </div>
              {"rating" in r && <StarRating rating={(r as { rating: number }).rating} />}
            </div>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65 }}>{r.text}</p>
          </div>
        ))}
      </div>

      {visible < reviews.length && (
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <button
            onClick={() => setVisible((v) => v + 6)}
            style={{ background: "#1A3D45", color: "#fff", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 12, border: "none", cursor: "pointer" }}
          >
            Voir plus d&apos;avis
          </button>
        </div>
      )}
    </div>
  );
}
