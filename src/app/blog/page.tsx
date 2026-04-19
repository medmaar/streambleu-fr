import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Stream Bleu | Guides IPTV, Avis & Actualités France",
  description:
    "Lisez le blog Stream Bleu. Guides d'installation, légalité, comparatifs de prix, avis sur les lecteurs IPTV et les meilleurs services 4K en France pour 2026.",
  keywords: "blog iptv france, guide iptv 2026, meilleur iptv france avis",
  alternates: { canonical: "https://streambleu.fr/blog" },
  openGraph: {
    title: "Blog Stream Bleu | Guides IPTV, Avis & Actualités France",
    description: "Guides d'installation IPTV, comparatifs, légalité et avis pour la France 2026.",
    url: "https://streambleu.fr/blog",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Blog Stream Bleu IPTV France" }],
  },
  twitter: { card: "summary_large_image" },
};

const posts = [
  {
    slug: "iptv-sans-coupure",
    title: "IPTV Sans Coupure en France 2026 — Fini le Buffering",
    excerpt: "Comment avoir un IPTV sans coupure en France ? Guide complet sur les serveurs stables et pourquoi Stream Bleu garantit zéro buffering.",
    date: "15 mar. 2026",
    readTime: "8 min",
    tag: "Guide",
  },
  {
    slug: "iptv-pas-cher-france",
    title: "IPTV Pas Cher France 2026 — À partir de 4€/mois",
    excerpt: "Comment trouver un IPTV pas cher en France sans sacrifier la qualité ? Comparatif des prix et guide pour éviter les arnaques.",
    date: "20 mar. 2026",
    readTime: "7 min",
    tag: "Comparatif",
  },
  {
    slug: "meilleur-abonnement-iptv-france",
    title: "Meilleur Abonnement IPTV France 2026 — Guide Complet",
    excerpt: "Quel est le meilleur abonnement IPTV en France ? Critères de choix, comparatif et pourquoi Stream Bleu arrive en tête.",
    date: "1 avr. 2026",
    readTime: "9 min",
    tag: "Avis",
  },
  {
    slug: "iptv-stable-france",
    title: "IPTV Stable France 2026 — Les Critères d'un Service Fiable",
    excerpt: "Pourquoi la stabilité est le critère n°1 pour un IPTV en France. Infrastructure, uptime et comment Stream Bleu garantit 99,9% de disponibilité.",
    date: "5 avr. 2026",
    readTime: "7 min",
    tag: "Guide",
  },
  {
    slug: "iptv-france-avis",
    title: "IPTV France Avis 2026 — Ce que Disent les Vrais Clients",
    excerpt: "Avis vérifiés de 50 000+ clients sur Stream Bleu. Trustpilot, Google et WhatsApp — ce que disent vraiment les utilisateurs.",
    date: "8 avr. 2026",
    readTime: "6 min",
    tag: "Avis",
  },
  {
    slug: "iptv-test-gratuit",
    title: "IPTV Test Gratuit France 2026 — Essai 24h Sans CB",
    excerpt: "Comment tester un service IPTV gratuitement en France ? Guide de l'essai gratuit Stream Bleu : 24h d'accès complet sans carte bancaire.",
    date: "10 avr. 2026",
    readTime: "5 min",
    tag: "Guide",
  },
  {
    slug: "iptv-rapide-france",
    title: "IPTV Rapide France 2026 — Zap Instantané & Chargement Ultra-Rapide",
    excerpt: "IPTV rapide en France : zapping instantané, chargement en moins d'une seconde. Pourquoi Stream Bleu est l'IPTV le plus réactif du marché.",
    date: "12 avr. 2026",
    readTime: "6 min",
    tag: "Guide",
  },
  {
    slug: "meilleur-iptv-france-2026",
    title: "Meilleur IPTV France 2026 : Top Services Testés & Classés",
    excerpt: "Nous avons testé et classé les meilleurs services IPTV disponibles en France pour 2026. Stream Bleu prend la première place — découvrez pourquoi.",
    date: "10 jan. 2026",
    readTime: "8 min",
    tag: "Avis",
  },
  {
    slug: "iptv-legal-france",
    title: "L'IPTV est-il légal en France en 2026 ? (Réponse honnête)",
    excerpt: "Une analyse claire de la législation française sur l'IPTV, les réglementations Arcom et ce que cela signifie pour les consommateurs.",
    date: "5 fév. 2026",
    readTime: "5 min",
    tag: "Légal",
  },
  {
    slug: "iptv-vs-cable-france",
    title: "IPTV vs Câble/ADSL en France 2026 : Quel est le Meilleur ?",
    excerpt: "Comparatif complet entre l'IPTV et les offres câble/ADSL françaises. Prix, qualité, chaînes et flexibilité — tout est comparé.",
    date: "20 fév. 2026",
    readTime: "6 min",
    tag: "Comparatif",
  },
  {
    slug: "iptv-firestick-france",
    title: "Comment Installer l'IPTV sur Fire Stick en France (2026)",
    excerpt: "Guide étape par étape pour configurer Stream Bleu sur votre Amazon Fire Stick en France.",
    date: "1 mar. 2026",
    readTime: "7 min",
    tag: "Guide",
  },
  {
    slug: "meilleur-lecteur-iptv-france",
    title: "Meilleur Lecteur IPTV pour la France 2026 : TiviMate, Smarters & Plus",
    excerpt: "Comparatif des meilleurs lecteurs IPTV : TiviMate, IPTV Smarters Pro, IBO Player — testés et évalués pour la France.",
    date: "15 mar. 2026",
    readTime: "6 min",
    tag: "Guide",
  },
];

const tagColors: Record<string, string> = {
  Avis: "#5a5fcf",
  Légal: "#7b87e8",
  Comparatif: "#8b92ec",
  Guide: "#5a5fcf",
  SEO: "#e03e3e",
};

export default function BlogPage() {
  return (
    <main style={{ background: "#fdf5ff", minHeight: "100vh" }}>
      <section style={{ padding: "80px 16px 60px", background: "linear-gradient(135deg, #5a5fcf, #7b87e8)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#c5bcf5", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Blog</p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#fff", marginBottom: 16 }}>
            Guides & Actualités IPTV France
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.6 }}>
            Tout ce que vous devez savoir sur l&apos;IPTV en France — légalité, configuration, comparatifs et bien plus.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 16px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article style={{
                background: "#fff",
                borderRadius: 18,
                padding: "32px 36px",
                border: "1px solid rgba(123,135,232,0.15)",
                boxShadow: "0 4px 20px rgba(90,95,207,0.06)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
                  <span style={{
                    background: tagColors[post.tag] ?? "#5a5fcf",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 12px",
                    borderRadius: 999,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>{post.tag}</span>
                  <span style={{ color: "#888", fontSize: 13 }}>{post.date}</span>
                  <span style={{ color: "#888", fontSize: 13 }}>· {post.readTime} de lecture</span>
                </div>
                <h2 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 800, color: "#5a5fcf", marginBottom: 10, lineHeight: 1.3 }}>
                  {post.title}
                </h2>
                <p style={{ color: "#444", fontSize: 15, lineHeight: 1.65, marginBottom: 16 }}>{post.excerpt}</p>
                <span style={{ color: "#5a5fcf", fontWeight: 700, fontSize: 14 }}>Lire l&apos;article →</span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
