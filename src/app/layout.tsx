import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import Animations from "./components/Animations";

export const metadata: Metadata = {
    metadataBase: new URL("https://streambleu.fr"),
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
        images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Stream Bleu – Meilleur IPTV France" }],
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
                {/* TODO: Replace G-PLACEHOLDER with your new GA4 property ID for streambleu.fr */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"></script>
                <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-PLACEHOLDER');` }}></script>
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
