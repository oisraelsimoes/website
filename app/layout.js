import {
  Fraunces,
  Inter,
  IBM_Plex_Mono,
  Playfair_Display,
  Alex_Brush,
} from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const signature = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const title =
  "Israel Simões | Palestrante de Neurociência, Comportamento e Alta Performance";
const description =
  "Palestras, treinamentos e educação corporativa na interseção entre neurociência, comportamento humano e estratégia de negócios. Administrador, Mestre em Administração e Doutorando em Neurociências pela UFMG.";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: "%s | Israel Simões",
  },
  description,
  keywords: [
    "palestrante corporativo",
    "palestras para empresas",
    "neurociência nas empresas",
    "neurogestão",
    "comportamento humano",
    "liderança",
    "alta performance",
    "treinamento corporativo",
    "educação corporativa",
    "desenvolvimento de lideranças",
    "palestra de vendas",
    "neurovendas",
    "Israel Simões",
  ],
  authors: [{ name: "Israel Simões" }],
  creator: "Israel Simões",
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: "Israel Simões",
    title,
    description,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Israel Simões — Palestras, Neurociência e Alta Performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} ${playfair.variable} ${signature.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        
      </body>
    </html>
  );
}
