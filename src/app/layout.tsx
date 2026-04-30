import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400','500','600','700'], display: 'swap', variable: '--font-quicksand' });
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import Animations from "./components/Animations";

export const metadata: Metadata = {
    metadataBase: new URL("https://streambleu.fr"),
    alternates: { canonical: "https://streambleu.fr", languages: { "fr-FR": "https://streambleu.fr", "fr-BE": "https://streambleu.fr", "fr-CH": "https://streambleu.fr", "x-default": "https://streambleu.fr" } },
    icons: { icon: "/favicon.svg" },
    title: {
        default: "Abonnement IPTV France 2026 — IPTV Premium 4K | Stream Bleu",
        template: "%s | Stream Bleu — Abonnement IPTV France",
    },
    description:
        "Abonnement IPTV France 2026 — Service IPTV premium 4K. 25 000+ chaînes, beIN Sports, Canal+, RMC Sport. Sans coupure. À partir de 9€/mois. Essai gratuit 24h.",
    keywords:
        "abonnement iptv, iptv abonnement, iptv france, iptv premium, meilleur iptv france, abonnement iptv france, iptv sans coupure, french iptv",
    openGraph: {
        siteName: "Stream Bleu",
        locale: "fr_FR",
        type: "website",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Stream Bleu – Meilleur IPTV France 2026 — IPTV Premium 4K" }],
    },
    twitter: { card: "summary_large_image" },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr" className="h-full">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta name="google-site-verification" content="buTcDxfOZCLSPQIna8VsozPLyV-CPlCyqpUqPDmaPYc" />
                <link rel="preload" as="image" href="/abonnement-iptv-france-1.jpg" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-KTDG47S721"></script>
                <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KTDG47S721');` }}></script>
                            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stream Bleu",
  url: "https://streambleu.fr",
  email: "help@streambleu.fr",
  description: "Abonnement IPTV France 2026 — Meilleur service IPTV premium 4K. 25 000+ chaînes, beIN Sports, Canal+, RMC Sport. Sans coupure. À partir de 9€/mois.",
  address: { "@type": "PostalAddress", streetAddress: "1 Rue Volant", addressLocality: "Nanterre", postalCode: "92000", addressCountry: "FR" },
  areaServed: [{ "@type": "Country", name: "France" }, { "@type": "Country", name: "Belgique" }, { "@type": "Country", name: "Suisse" }],
  priceRange: "€9-€100",
  image: "https://streambleu.fr/abonnement-iptv-france-1.jpg",
  sameAs: ["https://t.me/+z1lV-u1HmIA2YTQ0"],
}) }} />
            </head>
            <body
                className="min-h-full flex flex-col"
                style={{ fontFamily: "'Quicksand', sans-serif", overflowX: "hidden" }}
            >
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
                <FloatingContact />
                <Animations />
            </body>
        </html>
    );
}
