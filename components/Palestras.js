import Image from "next/image";
import Reveal from "./Reveal";

const PALESTRAS = [
  {
    tag: "Top-Booked",
    titulo: "Neurovendas",
    icon: "vendas",
    foto: "/images/corporate-training.jpg",
    frase: "Domine a mente humana para prever desejos, decisões e comportamentos.",
    problema:
      "Times comerciais que precisam vender mais, com mais inteligência e menos achismo.",
    temas: ["Gatilhos mentais", "Narrativa persuasiva", "Neurociência da decisão do consumidor"],
    publico: "Times comerciais, convenções de vendas, kickoffs",
  },
  {
    titulo: "A Mente do Cliente",
    icon: "cliente",
    foto: "/images/moody-portrait.jpg",
    frase: "Leia o padrão de estímulo-resposta de quem está do outro lado da mesa.",
    problema:
      "Times comerciais que precisam caracterizar perfis comportamentais de clientes e leads para reuniões, jantares e fechamentos.",
    temas: ["Perfis comportamentais", "Leitura de comportamento em negociação", "Comunicação adaptada ao perfil"],
    publico: "Times comerciais, key account, negociadores",
  },
  {
    titulo: "NeuroSeleção",
    icon: "selecao",
    foto: "/images/speaking-profile.jpg",
    fotoPosition: "50% 18%",
    frase: "Contratar é mais do que aplicar provas e conduzir entrevistas.",
    problema:
      "Times de RH que precisam acertar contratações e promoções internas com mais precisão.",
    temas: ["Leitura comportamental do candidato", "Processos seletivos baseados em evidência", "Redução de viés na decisão de contratar"],
    publico: "RH, Recrutamento & Seleção",
  },
  {
    titulo: "Neurogestão",
    icon: "cerebro",
    foto: "/images/neurogestao-prato.jpg",
    frase: "A ciência por trás das decisões que geram resultado.",
    problema:
      "Lideranças que precisam de mais performance, clima positivo e decisões livres de vieses.",
    temas: ["Performance com menor estresse", "Cultura, engajamento e pertencimento", "Tomada de decisão e vieses inconscientes"],
    publico: "Alta liderança, convenções, kickoffs",
  },
  {
    titulo: "Saúde 3.0",
    icon: "saude",
    foto: "/images/saude3-mecanico.jpg",
    frase: "Depois do fitness e da saúde mental, chegou a hora da saúde plena.",
    problema:
      "Organizações que querem construir negócios felizes e produtividade sustentável, não apenas ausência de doença.",
    temas: ["Saúde integral no ambiente de trabalho", "Produtividade sustentável", "Cultura de bem-estar"],
    publico: "RH, People & Culture, semanas internas / SIPAT",
  },
  {
    titulo: "Be Mindful",
    icon: "mindful",
    foto: "/images/be-mindful.jpg",
    frase: "Aterrisse a mente no presente — e entre em flow com a tarefa do dia.",
    problema:
      "Empresas que querem transformar o clima interno e a saúde da equipe através de técnicas reais de mindfulness.",
    temas: ["Técnicas de mindfulness aplicadas", "Foco e presença", "Redução de estresse e ansiedade no trabalho"],
    publico: "Equipes em geral, semanas internas, imersões",
  },
];

const EM_BREVE = [
  {
    titulo: "Inteligências",
    icon: "ia",
    foto: "/images/inteligencias-ia.jpg",
    frase:
      "Extraia o máximo de valor dos seus colaboradores e dos agentes de IA que compõem sua equipe.",
  },
  {
    titulo: "Lazarus",
    icon: "lideranca",
    foto: "/images/lazarus-panorama.jpg",
    frase:
      "Um modelo inédito de desenvolvimento de lideranças 360º, baseado em performance autosustentável.",
  },
];

function Icon({ name, className }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };
  switch (name) {
    case "vendas":
      return (
        <svg {...common}>
          <path d="M3 17l5-5 3 3 7-7" />
          <path d="M13 8h5v5" />
        </svg>
      );
    case "cliente":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case "cerebro":
      return (
        <svg {...common}>
          <path d="M9 4.5a2.5 2.5 0 0 0-2.5 2.5c0 .3 0 .5.1.8A2.5 2.5 0 0 0 5 10a2.5 2.5 0 0 0 1 2 2.5 2.5 0 0 0 2 4.4V19a2 2 0 0 0 2 2" />
          <path d="M15 4.5a2.5 2.5 0 0 1 2.5 2.5c0 .3 0 .5-.1.8A2.5 2.5 0 0 1 19 10a2.5 2.5 0 0 1-1 2 2.5 2.5 0 0 1-2 4.4V19a2 2 0 0 1-2 2" />
          <path d="M9 4.5C9.5 4 10.7 3.5 12 3.5s2.5.5 3 1" />
          <path d="M12 8v9" />
        </svg>
      );
    case "saude":
      return (
        <svg {...common}>
          <path d="M3 12h4l2-5 3 10 2-6h7" />
        </svg>
      );
    case "selecao":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.3 15.3L21 21" />
          <circle cx="10.5" cy="9" r="1.6" />
          <path d="M7.3 13.2a3.3 3.3 0 0 1 6.4 0" />
        </svg>
      );
    case "mindful":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v5l3 2" />
        </svg>
      );
    case "inclusao":
      return (
        <svg {...common}>
          <path d="M6.5 12a3.5 3.5 0 1 0 3.5 3.5c0-2-1-3-1-5.5a3.5 3.5 0 1 1 7 0c0 2.5-1 3.5-1 5.5a3.5 3.5 0 1 0 3.5-3.5" />
        </svg>
      );
    case "ia":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </svg>
      );
    case "lideranca":
      return (
        <svg {...common}>
          <path d="M12 3l2.3 5.6L20 9l-4.5 3.9L16.8 19 12 15.8 7.2 19l1.3-6.1L4 9l5.7-.4L12 3z" />
        </svg>
      );
    default:
      return null;
  }
}

function PalestraCard({ p }) {
  return (
    <div className="card group flex flex-col overflow-hidden transition-all duration-300 hover:border-accent/40 hover:bg-surface">
      {p.foto && (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={p.foto}
            alt={`Israel Simões ministrando a palestra ${p.titulo}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={p.fotoPosition ? { objectPosition: p.fotoPosition } : undefined}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
          <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-ink/70 text-accent-light backdrop-blur-sm">
            <Icon name={p.icon} className="h-5 w-5" />
          </span>
          {p.tag && (
            <span className="absolute -top-3 -right-3 flex h-[68px] w-[68px] rotate-[8deg] items-center justify-center rounded-full border border-accent bg-ink/90 shadow-lg">
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-dashed border-accent-light/50 px-1 text-center font-serif italic text-[10.5px] leading-tight text-accent-light">
                {p.tag}
              </span>
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        {!p.foto && (
          <div className="flex items-start justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent-light">
              <Icon name={p.icon} className="h-6 w-6" />
            </span>
            {p.tag && (
              <span className="inline-flex h-fit items-center rounded-full bg-accent/15 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-accent-light">
                {p.tag}
              </span>
            )}
          </div>
        )}
        <h3 className={`font-serif text-2xl text-ivory ${p.foto ? "" : "mt-5"}`}>{p.titulo}</h3>
        <p className="mt-3 font-serif italic text-ivory/70 leading-snug">
          “{p.frase}”
        </p>

        <details className="mt-5 group/details">
          <summary className="cursor-pointer list-none text-sm font-medium text-accent-light/90 flex items-center gap-2 select-none">
            Ver detalhes
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-open/details:rotate-45"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="mt-4 space-y-4 border-t border-ivory/10 pt-4 text-sm text-ivory/70 leading-relaxed">
            <p>
              <span className="text-ivory/50 font-mono uppercase text-[11px] tracking-wider block mb-1">
                Problema que resolve
              </span>
              {p.problema}
            </p>
            <div>
              <span className="text-ivory/50 font-mono uppercase text-[11px] tracking-wider block mb-2">
                Principais temas
              </span>
              <ul className="flex flex-wrap gap-2">
                {p.temas.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p>
              <span className="text-ivory/50 font-mono uppercase text-[11px] tracking-wider block mb-1">
                Público indicado
              </span>
              {p.publico}
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}

export default function Palestras() {
  return (
    <section id="palestras" className="section-pad bg-ink">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-4">Palestras & Treinamentos</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-ivory max-w-2xl text-balance">
            Experiências desenhadas para gerar mudança e tomada de decisão
            ao vivo.
          </h2>
          <p className="mt-5 max-w-xl text-ivory/65 leading-relaxed">
            Cada palestra nasce de um problema real do seu negócio e chega
            até o seu time como uma experiência de troca, evolução e
            aprendizagem prática.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PALESTRAS.map((p, i) => (
            <Reveal key={p.titulo} delay={(i % 3) * 80}>
              <PalestraCard p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-14 rounded-2xl border border-dashed border-ivory/15 p-8 sm:p-10">
            <p className="eyebrow mb-5">Lançamentos para 2027</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {EM_BREVE.map((e) => (
                <div key={e.titulo} className="flex gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden">
                    <Image
                      src={e.foto}
                      alt={`Israel Simões — palestra ${e.titulo}, em breve`}
                      fill
                      sizes="56px"
                      className="object-cover grayscale"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/40 text-ivory/70">
                      <Icon name={e.icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-ivory/80">
                      {e.titulo} <span className="text-xs font-mono uppercase tracking-wider text-accent-light/80 align-middle ml-2">Em breve</span>
                    </h4>
                    <p className="mt-2 text-sm text-ivory/55 leading-relaxed max-w-sm">
                      {e.frase}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
