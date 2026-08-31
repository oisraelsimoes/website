// Central place for contact details and editable fields.
// Replace placeholders (values wrapped like SEU_CAMPO_AQUI) with real data when available.

export const SITE = {
  name: "Israel Simões",
  tagline: "Palestras | Educação Corporativa | Neurociência | Estratégia | Alta Performance",
  parentCompany: "TARS Mentoring & Coaching",
  url: "https://israelsimoes.com.br", // SEU_DOMINIO_AQUI — atualizar após configurar domínio próprio na Vercel
  locale: "pt_BR",
  city: "Belo Horizonte, MG",
  email: "israelbs2011@gmail.com",
  linkedin: "https://www.linkedin.com/in/israel-simões-9baa1a54",
  instagram: "https://instagram.com/oisraelsimoes",
};

export const emailHref = (subject) => {
  const s = encodeURIComponent(subject || "Proposta de palestra/treinamento");
  return `mailto:${SITE.email}?subject=${s}`;
};

export const NAV_LINKS = [
  { href: "#palestras", label: "Palestras" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];
