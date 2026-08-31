import Image from "next/image";
import Reveal from "./Reveal";

const MARCOS = [
  {
    ano: "2015 – 2020",
    texto:
      "Gerente Administrativo do Centro de Treinamento Esportivo (COB/UFMG): liderei o training camp da delegação olímpica e paralímpica britânicas (Team GB), alcançado o recorde histórico de medalhas para o país.",
  },
  {
    ano: "2020 – 2022",
    texto:
      "Mestrado em Administração, formação como Instrutor de Meditação Guiada e integração de equipes multiprofissionais em saúde como Neurocientista Clínico e Performance Coach.",
  },
  {
    ano: "2025",
    texto:
      "Professor convidado no MBA em Gestão e Inteligência Comercial da PUC Minas. Palestras para mais de 50 lideranças da Patrus Transportes e mais de 100 lideranças da líder mundial Sandvik.",
  },
  {
    ano: "2026",
    texto:
      "Gestão Estratégica de Pessoas em startup de tecnologia, coordenando o processo de construção do Accountability da empresa e gerindo a performance individual por meio da abordagem de mentoring individual.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="section-pad bg-ink">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden lg:mx-0 lg:sticky lg:top-28">
            <Image
              src="/images/about-portrait.jpg"
              alt="Retrato profissional de Israel Simões, neurocientista, administrador e palestrante corporativo"
              fill
              sizes="(max-width: 1024px) 80vw, 32vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">Sobre</p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ivory max-w-xl text-balance">
              Da administração à neurociência: uma trajetória construída na
              prática da gestão.
            </h2>
            <div className="mt-6 space-y-5 text-ivory/70 leading-relaxed max-w-xl">
              <p>
                Comecei minha trajetória com consultoria em Gestão de
                Pessoas, desenvolvendo projetos de Clima para a América
                Latina Logística e uma iniciativa de inovação em Segurança
                do Trabalho para a Ambev. Por quase cinco anos, ocupei uma
                posição de liderança em um complexo esportivo com atletas
                olímpicos brasileiros, britânicos e poloneses. Dessa
                experiência nasceu a pergunta que eu passei a responder com
                estudo e pesquisa científica: o que leva as pessoas a se
                comportarem de diferentes maneiras?
              </p>
              <p>
                A pergunta me levou a um laboratório de pesquisa sobre
                meditação e somatic experiencing. Depois de algumas
                formações em saúde e psicoterapia, fui convidado para ser
                membro de uma equipe multiprofissional que promovia alta
                performance em executivos, atletas, pais e mães recuperando
                a boa forma física, crianças em desenvolvimento atípico. Foi
                uma experiência que levou minha atuação como gestor e
                consultor no mundo corporativo para outro patamar: da
                performance individual às equipes ágeis e de produtividade
                exponencial.
              </p>
              <p>
                Essa combinação de gestão de projetos organizacionais
                complexos e atuação focada na complexidade dos padrões
                emocionais de um indivíduo produziu um olhar original e
                enormemente rico que sustenta cada palestra, treinamento e
                mentoria que entrego: ciência que vira competência,
                competência que vira resultado.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 space-y-6 border-l border-ivory/15 pl-6 sm:pl-8">
            {MARCOS.map((m, i) => (
              <Reveal key={m.ano} delay={i * 90}>
                <div className="relative">
                  <span className="absolute -left-[29px] sm:-left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-xs font-mono uppercase tracking-wider text-accent-light/90">
                    {m.ano}
                  </p>
                  <p className="mt-1.5 text-ivory/75 leading-relaxed max-w-xl">
                    {m.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
