import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Nora Events — Coordinatrice de mariages en Normandie et IDF",
    template: "%s | Nora Events",
  },
  description:
    "Coordinatrice de mariages en Normandie et Île-de-France. 5 ans de terrain aux côtés des traiteurs. Le jour J, vous profitez — Nora gère tout.",
  keywords: [
    "wedding planner Normandie",
    "coordinatrice mariage IDF",
    "organisation mariage Normandie",
    "coordination jour J Paris",
    "wedding planner Le Havre",
    "wedding planner Rouen",
  ],
  authors: [{ name: "Nora Events" }],
  creator: "Nora Events",
  metadataBase: new URL("https://noraevents.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://noraevents.fr",
    siteName: "Nora Events",
    title: "Nora Events — Coordinatrice de mariages en Normandie et IDF",
    description:
      "Le jour J, vous profitez. Nora gère tout. Formée par 5 ans de terrain aux côtés des traiteurs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nora Events — Coordinatrice de mariages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nora Events — Coordinatrice de mariages en Normandie et IDF",
    description: "Le jour J, vous profitez. Nora gère tout.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://noraevents.fr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${lato.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
