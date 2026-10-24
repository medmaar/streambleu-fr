import type { Metadata } from "next";
import Link from "next/link";
import type { Block, Group, SeoPageData } from "@/content/seo/types";
import { SEO_PAGES, labelFor } from "@/content/seo/registry";
import { SOURCES } from "@/content/seo/sources";
import { PRICES, DURATIONS, planHref, euros } from "@/lib/pricing";

const SITE = "https://streambleu.fr";

// Existing site images (width/height needed to avoid CLS)
const IMAGES: Record<string, [number, number]> = {
  "/abonnement-iptv-france-1.webp": [800, 450],
  "/abonnement-iptv-france-2.webp": [1280, 853],
  "/abonnement-iptv-france-3.webp": [1600, 900],
  "/abonnement-iptv-france-4.webp": [630, 420],
  "/abonnement-iptv-france-5.webp": [976, 549],
  "/abonnement-iptv-france-6.webp": [960, 642],
};

const HUB_LABEL: Record<Group, { href: string; label: string } | null> = {
  apps: { href: "/applications-iptv", label: "Applications IPTV" },
  boxes: { href: "/boitier-iptv", label: "Boîtier IPTV" },
  devices: { href: "/appareils-iptv", label: "Appareils IPTV" },
  guides: { href: "/blog", label: "Blog" },
  commercial: null,
  hubs: null,
  cities: null, // each city sets its own `parent` (its region hub)
  regions: { href: "/iptv-villes-france", label: "IPTV par ville en France" },
  competitors: { href: "/alternatives-iptv", label: "Alternatives IPTV" },
};

// ── Shared styles (same values as the existing blog + device pages) ──
const S = { fontSize: 15, lineHeight: 1.8, color: "#333", marginBottom: 16 } as const;
const H2 = { fontSize: 24, fontWeight: 800, color: "#5a5fcf", marginBottom: 16, marginTop: 48, scrollMarginTop: 90 } as const;
const H3 = { fontSize: 17, fontWeight: 700, color: "#5a5fcf", marginBottom: 10, marginTop: 24 } as const;
const CARD = { background: "#fdf5ff", borderRadius: 14, padding: "20px 22px", border: "1px solid rgba(123,135,232,0.15)" } as const;
const LINK = { color: "#5a5fcf", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 } as const;
const CHIP = { background: "rgba(90,95,207,0.07)", border: "1px solid rgba(90,95,207,0.18)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" } as const;

// ── Inline markup: [anchor](/href) and **bold** ──
const INLINE = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

export function Rich({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      out.push(
        href.startsWith("/") ? (
          <Link key={m.index} href={href} style={LINK}>{m[1]}</Link>
        ) : (
          <a key={m.index} href={href} style={LINK} target="_blank" rel="noopener">{m[1]}</a>
        ),
      );
    } else {
      out.push(<strong key={m.index} style={{ color: "#1a1a4e" }}>{m[3]}</strong>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

export function plain(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}

function HubGrid({ group, region }: { group: Group; region?: string }) {
  const pages = SEO_PAGES.filter((p) => p.group === group && (!region || p.region === region));
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 14, marginBottom: 24 }}>
      {pages.map((p) => (
        <Link key={p.slug} href={p.slug} style={{ ...CARD, display: "block", textDecoration: "none", color: "#1a1a4e" }}>
          <span style={{ display: "block", fontWeight: 800, fontSize: 15, color: "#5a5fcf", marginBottom: 6 }}>{p.navLabel} →</span>
          <span style={{ display: "block", fontSize: 13, lineHeight: 1.6, color: "#444" }}>{p.cardText}</span>
        </Link>
      ))}
    </div>
  );
}

const MONTHS = [1, 3, 6, 12];

// Official grid from src/lib/pricing.ts: prices can never drift from the order pages.
function PriceGrid({ screens, perMonth, caption }: { screens: number[]; perMonth?: boolean; caption?: string }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: 24, borderRadius: 14, border: "1px solid rgba(123,135,232,0.2)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 520 }}>
        <caption style={{ captionSide: "bottom", fontSize: 12, color: "#666", padding: 8 }}>
          {caption ?? "Prix TTC en euros, paiement unique sans renouvellement automatique. Cliquez sur un prix pour commander ce forfait."}
        </caption>
        <thead>
          <tr style={{ background: "#5a5fcf" }}>
            <th style={{ color: "#fff", textAlign: "left", padding: "12px 14px", fontWeight: 700 }}>Écrans</th>
            {DURATIONS.map((d) => <th key={d} style={{ color: "#fff", textAlign: "left", padding: "12px 14px", fontWeight: 700 }}>{d.toLowerCase()}</th>)}
          </tr>
        </thead>
        <tbody>
          {screens.map((n, i) => (
            <tr key={n} style={{ background: i % 2 ? "#fdf5ff" : "#fff" }}>
              <td style={{ padding: "11px 14px", color: "#1a1a4e", fontWeight: 700, borderTop: "1px solid rgba(123,135,232,0.12)" }}>{n} écran{n > 1 ? "s" : ""}</td>
              {DURATIONS.map((d, j) => (
                <td key={d} style={{ padding: "11px 14px", color: "#444", borderTop: "1px solid rgba(123,135,232,0.12)" }}>
                  <Link href={planHref(n, d)} style={LINK}>{euros(PRICES[n][j])}</Link>
                  {perMonth && <span style={{ display: "block", fontSize: 12, color: "#666", whiteSpace: "nowrap" }}>{euros(PRICES[n][j] / MONTHS[j], 2)}/mois</span>}
                  {perMonth && n > 1 && <span style={{ display: "block", fontSize: 12, color: "#666", whiteSpace: "nowrap" }}>soit {euros(PRICES[n][j] / MONTHS[j] / n, 2)}/écran</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RenderBlock({ b }: { b: Block }) {
  switch (b.type) {
    case "p":
      return <p style={S}><Rich text={b.text} /></p>;
    case "h3":
      return <h3 style={H3}>{b.text}</h3>;
    case "ul":
    case "ol": {
      const Tag = b.type;
      return (
        <Tag style={{ ...S, paddingLeft: 22, listStyle: b.type === "ul" ? "disc" : "decimal" }}>
          {b.items.map((it, i) => <li key={i} style={{ marginBottom: 6 }}><Rich text={it} /></li>)}
        </Tag>
      );
    }
    case "steps":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
          {b.items.map((s, i) => (
            <div key={i} style={{ ...CARD, display: "flex", gap: 16 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, background: "#5a5fcf", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#fff" }}>{i + 1}</div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 6 }}>{s.title}</h3>
                <p style={{ color: "#444", fontSize: 14, lineHeight: 1.6, margin: 0 }}><Rich text={s.text} /></p>
              </div>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <div style={{ overflowX: "auto", marginBottom: 24, borderRadius: 14, border: "1px solid rgba(123,135,232,0.2)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 520 }}>
            {b.caption && <caption style={{ captionSide: "bottom", fontSize: 12, color: "#666", padding: 8 }}>{b.caption}</caption>}
            <thead>
              <tr style={{ background: "#5a5fcf" }}>
                {b.head.map((h) => <th key={h} style={{ color: "#fff", textAlign: "left", padding: "12px 14px", fontWeight: 700 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? "#fdf5ff" : "#fff" }}>
                  {r.map((c, j) => <td key={j} style={{ padding: "11px 14px", color: j === 0 ? "#1a1a4e" : "#444", fontWeight: j === 0 ? 700 : 400, borderTop: "1px solid rgba(123,135,232,0.12)", verticalAlign: "top" }}><Rich text={c} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 14, marginBottom: 24 }}>
          {b.items.map((c) => {
            const inner = (
              <>
                <span style={{ display: "block", fontWeight: 800, fontSize: 15, color: "#5a5fcf", marginBottom: 6 }}>{c.title}{c.href ? " →" : ""}</span>
                <span style={{ display: "block", fontSize: 13, lineHeight: 1.6, color: "#444" }}><Rich text={c.text} /></span>
              </>
            );
            return c.href ? (
              <Link key={c.title} href={c.href} style={{ ...CARD, display: "block", textDecoration: "none" }}>{inner}</Link>
            ) : (
              <div key={c.title} style={CARD}>{inner}</div>
            );
          })}
        </div>
      );
    case "callout":
      return (
        <div style={{ background: "rgba(90,95,207,0.07)", border: "2px solid rgba(90,95,207,0.2)", borderRadius: 16, padding: "20px 24px", marginBottom: 24 }}>
          {b.title && <p style={{ fontWeight: 700, fontSize: 14, color: "#5a5fcf", marginBottom: 8 }}>{b.title}</p>}
          <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7, margin: 0 }}><Rich text={b.text} /></p>
        </div>
      );
    case "chips":
      return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {b.items.map((it) => (
            <span key={it} style={{ background: "#fdf5ff", border: "1px solid rgba(123,135,232,0.2)", borderRadius: 8, padding: "5px 12px", fontSize: 12.5, color: "#444", fontWeight: 500 }}>{it}</span>
          ))}
        </div>
      );
    case "hub":
      return <HubGrid group={b.group} region={b.region} />;
    case "prices":
      return <PriceGrid screens={b.screens} perMonth={b.perMonth} caption={b.caption} />;
  }
}

function crumbs(page: SeoPageData) {
  const list: { name: string; href: string }[] = [{ name: "Stream Bleu", href: "/" }];
  const parent = page.parent ?? HUB_LABEL[page.group];
  if (parent && parent.href !== page.slug) list.push({ name: parent.label, href: parent.href });
  list.push({ name: page.navLabel, href: page.slug });
  return list;
}

function frDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export function buildMetadata(page: SeoPageData): Metadata {
  const url = SITE + page.slug;
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords.join(", "),
    alternates: { canonical: url, languages: { "fr-FR": url, "x-default": url } },
    robots: page.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: page.schema === "Article" ? "article" : "website",
      siteName: "Stream Bleu",
      locale: "fr_FR",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: page.h1 }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/og-image.jpg"] },
  };
}

export default function SeoPage({ page }: { page: SeoPageData }) {
  const url = SITE + page.slug;
  const trail = crumbs(page);
  const hub = page.parent ?? HUB_LABEL[page.group];
  // Money pages lead with the order flow; the free trial stays as the secondary option.
  const money = page.group === "commercial";
  const img = page.image && IMAGES[page.image.src] ? { ...page.image, size: IMAGES[page.image.src] } : null;

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: SITE + (c.href === "/" ? "" : c.href) })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })),
    },
    page.schema === "Article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.h1.slice(0, 110),
          description: page.description,
          image: SITE + "/og-image.jpg",
          inLanguage: "fr-FR",
          datePublished: page.datePublished,
          dateModified: page.dateModified,
          author: { "@type": "Organization", name: "Équipe Stream Bleu", url: SITE },
          publisher: { "@type": "Organization", name: "Stream Bleu", url: SITE, logo: { "@type": "ImageObject", url: SITE + "/favicon.svg" } },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        }
      : {
          "@context": "https://schema.org",
          "@type": page.schema,
          name: page.h1,
          description: page.description,
          url,
          inLanguage: "fr-FR",
          dateModified: page.dateModified,
          isPartOf: { "@type": "WebSite", name: "Stream Bleu", url: SITE },
        },
  ];

  // Money pages describe the subscription itself: mark up the real price grid.
  if (page.group === "commercial") {
    const all = Object.values(PRICES).flat();
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Abonnement IPTV Stream Bleu",
      serviceType: "Abonnement IPTV",
      provider: { "@type": "Organization", name: "Stream Bleu", url: SITE },
      areaServed: { "@type": "Country", name: page.areaServed ?? "France" },
      offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: Math.min(...all), highPrice: Math.max(...all), offerCount: all.length, url: SITE + "/tarifs" },
    });
  }

  // A hub page (block type "hub") lists real child pages — derive ItemList from
  // those automatically so it can never drift from what's actually on the page.
  const hubBlock = page.sections.flatMap((s) => s.blocks).find((b): b is Extract<Block, { type: "hub" }> => b.type === "hub");
  const derivedItemList = hubBlock
    ? SEO_PAGES.filter((p) => p.group === hubBlock.group && (!hubBlock.region || p.region === hubBlock.region)).map((p) => ({ name: p.navLabel, url: SITE + p.slug }))
    : undefined;
  const itemList = page.itemList ?? derivedItemList;

  if (itemList && itemList.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: page.h1,
      numberOfItems: itemList.length,
      itemListElement: itemList.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        ...(it.url ? { url: it.url } : {}),
      })),
    });
  }

  const related = page.related.map((href) => ({ href, label: labelFor(href) }));
  const sources = SOURCES[page.slug] ?? [];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <main style={{ color: "#1a1a4e", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #5a5fcf, #7b87e8)", padding: "70px 16px 50px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <nav aria-label="Fil d'Ariane" style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
              {trail.map((c, i) => (
                <span key={c.href} style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                  {i < trail.length - 1 ? (
                    <Link href={c.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, textDecoration: "none" }}>{c.name}</Link>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.95)", fontSize: 13 }} aria-current="page">{c.name}</span>
                  )}
                  {i < trail.length - 1 && <span style={{ color: "rgba(255,255,255,0.4)" }}>→</span>}
                </span>
              ))}
            </nav>
            <div style={{ marginBottom: 16 }}>
              <span style={{ background: "rgba(255,255,255,0.18)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.06em" }}>{page.badge}</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px,4.5vw,48px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 18 }}>{page.h1}</h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 16, lineHeight: 1.7, maxWidth: 680, marginBottom: 28 }}>{plain(page.intro).split(/(?<=[.!?])\s/)[0]}</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {money ? (
                <>
                  <Link href="/tarifs" style={{ background: "#f5a623", color: "#1a1a4e", fontWeight: 800, fontSize: 15, padding: "14px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block", boxShadow: "0 6px 20px rgba(245,166,35,0.4)" }}>
                    Choisir mon abonnement →
                  </Link>
                  <Link href="/essai-gratuit" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "12px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
                    Essai Gratuit 24h
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#1a1a4e", fontWeight: 800, fontSize: 15, padding: "14px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block", boxShadow: "0 6px 20px rgba(245,166,35,0.4)" }}>
                    Essai Gratuit 24h
                  </Link>
                  <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "12px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
                    Voir les Tarifs →
                  </Link>
                </>
              )}
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 22 }}>
              Par l&apos;équipe Stream Bleu · Mis à jour le {frDate(page.dateModified)}{page.readTime ? ` · ${page.readTime} de lecture` : ""}
            </p>
          </div>
        </section>

        <article style={{ maxWidth: 820, margin: "0 auto", padding: "56px 16px 24px" }}>
          {page.tldr && (
            <div style={{ background: "rgba(90,95,207,0.07)", border: "2px solid rgba(90,95,207,0.2)", borderRadius: 16, padding: "22px 26px", marginBottom: 32 }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#5a5fcf", marginBottom: 10 }}>📋 L&apos;essentiel en bref</p>
              {page.tldr.map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < page.tldr!.length - 1 ? 10 : 0 }}>
                  <span style={{ color: "#5a5fcf", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                  <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7, margin: 0 }}><Rich text={t} /></p>
                </div>
              ))}
            </div>
          )}

          <p style={S}><Rich text={page.intro} /></p>

          {page.sections.length >= 4 && (
            <nav aria-label="Sommaire" style={{ ...CARD, marginBottom: 8, marginTop: 24 }}>
              <p style={{ fontWeight: 800, fontSize: 14, color: "#5a5fcf", marginBottom: 10 }}>Sommaire</p>
              <ol style={{ paddingLeft: 20, margin: 0, listStyle: "decimal" }}>
                {page.sections.map((s) => (
                  <li key={s.id} style={{ fontSize: 14, lineHeight: 1.9 }}>
                    <a href={`#${s.id}`} style={{ color: "#1a1a4e", textDecoration: "none" }}>{s.h2}</a>
                  </li>
                ))}
                <li style={{ fontSize: 14, lineHeight: 1.9 }}><a href="#faq" style={{ color: "#1a1a4e", textDecoration: "none" }}>Questions fréquentes</a></li>
              </ol>
            </nav>
          )}

          {page.sections.map((s, i) => (
            <section key={s.id}>
              <h2 id={s.id} style={H2}>{s.h2}</h2>
              {s.blocks.map((b, j) => <RenderBlock key={j} b={b} />)}
              {i === 0 && img && (
                <figure style={{ margin: "8px 0 24px" }}>
                  <img src={img.src} alt={img.alt} width={img.size[0]} height={img.size[1]} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }} />
                </figure>
              )}
              {i === Math.floor(page.sections.length / 2) && page.sections.length > 2 && (
                <div style={{ ...CARD, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "space-between", margin: "8px 0 8px" }}>
                  {money ? (
                    <>
                      <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1a1a4e" }}>Abonnement dès {euros(PRICES[1][0])} le mois, {euros(PRICES[1][3])} les 12 mois. Identifiants envoyés par e-mail après la commande.</p>
                      <Link href={planHref(1, "12 Mois")} style={{ background: "#5a5fcf", color: "#fff", fontWeight: 700, fontSize: 14, padding: "10px 22px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>Commander 12 mois →</Link>
                    </>
                  ) : (
                    <>
                      <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1a1a4e" }}>Testez Stream Bleu sur votre appareil pendant 24h, sans engagement.</p>
                      <Link href="/essai-gratuit" style={{ background: "#5a5fcf", color: "#fff", fontWeight: 700, fontSize: 14, padding: "10px 22px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>Essai gratuit →</Link>
                    </>
                  )}
                </div>
              )}
            </section>
          ))}

          {hub && hub.href !== page.slug && (
            <p style={{ ...S, marginTop: 32 }}>
              Pour aller plus loin, consultez notre page <Link href={hub.href} style={LINK}>{hub.label.toLowerCase().startsWith("blog") ? "blog IPTV" : hub.label}</Link>
              {page.group !== "commercial" && <> et comparez les <Link href="/tarifs" style={LINK}>tarifs de l&apos;abonnement IPTV</Link></>}.
            </p>
          )}

          {sources.length > 0 && (
            <section>
              <h2 id="sources" style={H2}>Sources et liens officiels</h2>
              <ul style={{ ...S, paddingLeft: 22, listStyle: "disc" }}>
                {sources.map((src) => (
                  <li key={src.href} style={{ marginBottom: 6 }}>
                    <a href={src.href} style={LINK} target="_blank" rel="noopener">{src.label}</a> — {src.note}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>Stream Bleu n&apos;est affilié à aucun de ces sites ; les noms cités appartiennent à leurs propriétaires respectifs.</p>
            </section>
          )}

          {/* FAQ — native <details> so answers are in the HTML without JS */}
          <section>
            <h2 id="faq" style={H2}>Questions fréquentes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {page.faq.map((f, i) => (
                <details key={i} style={{ background: "#fff", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 16, padding: "4px 20px" }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#1a1a4e", padding: "14px 0", lineHeight: 1.5 }}>{f.q}</summary>
                  <p style={{ color: "#444", fontSize: 14, lineHeight: 1.75, margin: "0 0 16px" }}><Rich text={f.a} /></p>
                </details>
              ))}
            </div>
          </section>
        </article>

        {/* Trust — facts stated in the CGU, refund policy and order flow */}
        <section aria-label="Garanties" style={{ padding: "8px 16px 0" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            {[
              { t: "Essai gratuit 24h", d: "Sans carte bancaire, pour vérifier la compatibilité de votre appareil." },
              { t: "Paiement sécurisé", d: "Carte bancaire ou PayPal, en euros, sans engagement ni renouvellement automatique." },
              { t: "Support en français", d: "WhatsApp, Telegram et e-mail, 7j/7, pour l'installation et les questions." },
            ].map((x) => (
              <div key={x.t} style={CARD}>
                <p style={{ fontWeight: 800, fontSize: 14, color: "#5a5fcf", marginBottom: 4 }}>{x.t}</p>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#444", margin: 0 }}>{x.d}</p>
              </div>
            ))}
            <Link href="/politique-remboursement" style={{ ...CARD, display: "block", textDecoration: "none" }}>
              <span style={{ display: "block", fontWeight: 800, fontSize: 14, color: "#5a5fcf", marginBottom: 4 }}>Remboursement →</span>
              <span style={{ display: "block", fontSize: 13, lineHeight: 1.6, color: "#444" }}>Identifiants jamais reçus : remboursement ou nouvel envoi. Achat en double : remboursé.</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "40px 24px", background: "transparent" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#5a5fcf", borderRadius: 24, padding: "44px 32px", textAlign: "center", boxShadow: "0 12px 40px rgba(90,95,207,0.3)" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
              {page.cta?.title ?? "Essayez Stream Bleu gratuitement pendant 24h"}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
              {page.cta?.text ?? "Sans engagement · Activation rapide · Support en français 7j/7"}
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={money ? "/tarifs" : "/essai-gratuit"} style={{ background: "#f5a623", color: "#1a1a4e", fontWeight: 800, fontSize: 15, padding: "13px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
                {money ? "Choisir mon abonnement →" : "Essai Gratuit 24h"}
              </Link>
              <Link href={money ? "/essai-gratuit" : "/tarifs"} style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.35)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
                {money ? "Essai Gratuit 24h" : "Voir les Tarifs →"}
              </Link>
            </div>
          </div>
        </section>

        {/* Related pages */}
        {related.length > 0 && (
          <section style={{ padding: "40px 16px 64px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", fontSize: "1.1rem", fontWeight: 700, color: "#5a5fcf", marginBottom: 20, letterSpacing: "0.02em" }}>
                À lire aussi
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                {related.map((r) => <Link key={r.href} href={r.href} style={CHIP}>{r.label}</Link>)}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
