import Image from "next/image";
import Reveal from "./Reveal";

const DEPOIMENTOS = [
  {
    texto:
      "A palestra do Israel foi bastante enriquecedora para o evento de fim de ano da nossa empresa. Ele fez uma excelente exposição sobre o tema de perfis comportamentais. Nosso time saiu da palestra motivado e com uma ferramenta prática para gestão de pessoas.",
    nome: "Lucas Santos",
    cargo: "Diretor da Tecplaner",
    empresa: "Tecplaner",
    logo: "/images/tecplaner-logo.jpg",
  },
  {
    texto:
      "Seu conhecimento e experiências na área da Administração contribuíram de maneira fundamental para a alta qualidade de nosso trabalho. Ele fez um importante trabalho de coordenação das atividades ligadas às Olimpíadas 2016. Recomendo, de forma enfática, o profissional em questão.",
    nome: "Luciano Sales",
    cargo: "Diretor do Centro de Treinamento Esportivo",
    empresa: "CTE UFMG",
    logo: "/images/cte-ufmg-logo.jpg",
  },
  {
    texto:
      "A palestra do Israel Simões aqui na Patrus Transportes sobre o tema de Neurovendas foi sensacional! A equipe gostou bastante. Os feedbacks foram muito positivos.",
    nome: "Luiza Brescia",
    cargo: "Gerente de Comunicação na Patrus Transportes",
    empresa: "Patrus Transportes",
    logo: "/images/patrus-logo.jpg",
  },
  {
    texto:
      "O Israel tem um conhecimento único sobre ser humano. É nosso parceiro nos processos seletivos desde o início da nossa empresa e sempre nos traz um olhar mais profundo sobre as competências e as lacunas de desenvolvimento dos nossos colaboradores. Recomendo seu trabalho.",
    nome: "Marina Cappai",
    cargo: "Diretora da Escola Veritas",
    empresa: "Escola Veritas",
    logo: "/images/escola-veritas-logo.png",
  },
  {
    texto:
      "A palestra sobre Neurovendas do Israel Simões cumpriu um propósito em nosso evento de lideranças da Sandvik: despertar abertura, atenção e curiosidade sobre o outro, seja ele nosso cliente ou colega de trabalho. Foi um tempo rico de aprendizado e troca para o nosso time.",
    nome: "Joana Moreira",
    cargo: "HR Manager na Sandvik",
    empresa: "Sandvik",
    logo: "/images/sandvik-logo.jpg",
  },
  {
    texto:
      "Parabéns pelo seu trabalho. O olhar clínico supera qualquer conduta e, muitas vezes, os profissionais de saúde mental não estão aptos e nem dispostos a olhar o paciente com o olhar clínico, para entender o cerne do seu adoecimento. E você faz isso muito bem.",
    nome: "Dra. Mariana Liparizi",
    cargo: "CEO do Instituto Plenitud",
    empresa: "Instituto Plenitud",
    logo: "/images/plenitud-logo.jpg",
  },
];

const BARRAS = ["bg-accent", "bg-ink", "bg-accent-dark"];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="section-pad bg-[#e9d7be] text-ink">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-4 text-accent-dark">Depoimentos</p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight max-w-xl text-balance">
            Quem já viveu a experiência.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.nome} delay={(i % 2) * 100}>
              <figure className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-[0_4px_26px_-10px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(0,0,0,0.22)]">
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-[5px] ${BARRAS[i % BARRAS.length]}`}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-3 right-6 select-none font-serif text-[6rem] leading-none text-accent-dark/[0.08]"
                >
                  “
                </span>
                <p className="eyebrow relative text-accent-dark">{d.empresa}</p>
                <blockquote className="relative mt-3 text-[1.05rem] leading-relaxed text-ink/80">
                  {d.texto}
                </blockquote>
                <figcaption className="relative mt-6 flex items-center gap-4 border-t border-ink/10 pt-4">
                  {d.logo && (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-white">
                      <Image
                        src={d.logo}
                        alt={`Logomarca de ${d.empresa}`}
                        width={44}
                        height={44}
                        className="h-full w-full object-cover"
                      />
                    </span>
                  )}
                  <div className="leading-tight">
                    <p className="font-serif text-lg leading-tight text-ink">{d.nome}</p>
                    <p className="text-sm leading-snug text-ink/55">{d.cargo}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
