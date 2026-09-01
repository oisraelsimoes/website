import Image from "next/image";
import Reveal from "./Reveal";
import { SITE, emailHref } from "@/lib/config";

function IconEmail({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 6.5l8 6.2 8-6.2" />
    </svg>
  );
}

function IconLinkedin({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <circle cx="7.8" cy="8.2" r="0.9" fill="currentColor" stroke="none" />
      <path d="M7.8 11v6" />
      <path d="M12 17v-3.7c0-1.4 1-2.4 2.2-2.4s2 .9 2 2.3V17" />
    </svg>
  );
}

function IconInstagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const CANAIS = [
  {
    label: "E-mail",
    valor: SITE.email,
    href: emailHref(),
    Icon: IconEmail,
  },
  {
    label: "LinkedIn",
    valor: "/israel-simões",
    href: SITE.linkedin,
    Icon: IconLinkedin,
  },
  {
    label: "Instagram",
    valor: "@oisraelsimoes",
    href: SITE.instagram,
    Icon: IconInstagram,
  },
];

export default function Contato() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-ink border-t border-ivory/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] max-w-[560px] sm:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to left, black 55%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, black 55%, transparent 100%)",
        }}
      >
        <Image
          src="/images/contato-watermark.png"
          alt=""
          fill
          sizes="560px"
          className="object-contain object-bottom opacity-50 grayscale"
        />
      </div>

      <div className="container-x section-pad relative z-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="eyebrow mb-4">Contato</p>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ivory text-balance">
                Leve esta experiência para a sua empresa.
              </h2>
              <p className="mt-5 text-ivory/65 leading-relaxed max-w-md">
                Atuação com palestras, treinamentos e mentorias em todo o
                Brasil, nas modalidades presencial e online.
              </p>
              <a href={emailHref()} className="btn-primary mt-8">
                Enviar um e-mail
              </a>
            </div>

            <div className="flex flex-col gap-8 sm:pt-2 lg:items-start">
              {CANAIS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-light shrink-0">
                    <c.Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-ivory/45">
                      {c.label}
                    </span>
                    <span className="block font-serif text-base text-ivory transition-colors group-hover:text-accent-light">
                      {c.valor}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 hairline" />

        <div className="mt-8 flex flex-col gap-4 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Israel Simões — Uma iniciativa{" "}
            {SITE.parentCompany}. Todos os direitos reservados.
          </p>
          <a href="#inicio" className="hover:text-ivory/70">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
