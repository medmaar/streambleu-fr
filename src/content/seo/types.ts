// Content model for the keyword-cluster pages rendered by <SeoPage />.
// Inline text supports [anchor](/href) links and **bold**.

export type Group = "apps" | "boxes" | "devices" | "guides" | "commercial" | "hubs" | "cities" | "regions";

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "cards"; items: { title: string; text: string; href?: string }[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "chips"; items: string[] }
  | { type: "hub"; group: Group; region?: string };

export type Section = { id: string; h2: string; blocks: Block[] };

export type FaqItem = { q: string; a: string };

export type SeoPageData = {
  slug: string; // "/tivimate"
  group: Group;
  navLabel: string; // short label used in hubs, chips and breadcrumbs
  cardText: string; // one-line summary used on hub cards
  title: string; // <title>, 50–60 chars
  description: string; // meta description, 120–160 chars
  keywords: string[];
  badge: string;
  h1: string;
  intro: string; // answer-first paragraph containing the primary keyword
  tldr?: string[];
  image?: { src: string; alt: string };
  parent?: { href: string; label: string }; // pillar / hub this page belongs to
  region?: string; // region slug (for city pages) — used to filter a region's "hub" block
  sections: Section[];
  faq: FaqItem[];
  related: string[]; // slugs of other SEO pages or existing routes
  cta?: { title: string; text: string };
  schema: "Article" | "WebPage" | "CollectionPage";
  // Optional ItemList schema — named entities this page discusses (hub's child
  // pages, or a neutral glossary of third-party names). No ratings/reviews implied.
  itemList?: { name: string; url?: string }[];
  datePublished: string;
  dateModified: string;
  readTime?: string;
};
