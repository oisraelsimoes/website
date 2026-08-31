import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Manifesto from "@/components/Manifesto";
import Palestras from "@/components/Palestras";
import ParaQuem from "@/components/ParaQuem";
import Sobre from "@/components/Sobre";
import Numeros from "@/components/Numeros";
import Depoimentos from "@/components/Depoimentos";
import Galeria from "@/components/Galeria";
import ComoFunciona from "@/components/ComoFunciona";
import Tars from "@/components/Tars";
import CtaFinal from "@/components/CtaFinal";
import Contato from "@/components/Contato";
import { SITE } from "@/lib/config";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Israel Simões",
    jobTitle: "Palestrante, Neurocientista e Consultor em Comportamento Organizacional",
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    sameAs: [SITE.linkedin, SITE.instagram],
    worksFor: {
      "@type": "Organization",
      name: "TARS Mentoring & Coaching",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal de Minas Gerais (UFMG)",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      addressCountry: "BR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Authority />
        <Manifesto />
        <Palestras />
        <ParaQuem />
        <Sobre />
        <Numeros />
        <Depoimentos />
        <Galeria />
        <ComoFunciona />
        <Tars />
        <CtaFinal />
        <Contato />
      </main>
    </>
  );
}
