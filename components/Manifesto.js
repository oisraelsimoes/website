import Image from "next/image";
import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section className="section-pad bg-[#e9d7be] text-ink">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <Reveal>
          <div>
            <p className="eyebrow mb-6 text-accent-dark">Missão</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-balance">
              Estratégia é desenhada em slides.
              <br /> Resultado depende de engajamento.
            </h2>
            <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/75 max-w-xl">
              <p>
                Toda empresa quer um time que performa, bate meta, que
                produz resultados contínuos. Isso exige uma cultura
                motivadora, melhores decisões estratégicas e lideranças mais
                preparadas para inspirar e guiar pessoas. Mas a alta
                performance vai mais além: ela é o resultado de como cada
                indivíduo pensa, sente, decide, aprende e se relaciona, todos
                os dias, dentro da organização.
              </p>
              <p>
                Há mais de dez anos, minha experiência profissional e
                pesquisa científica seguem um único fio condutor: entender o
                cérebro que comanda as ações. Eu agreguei experiência em
                gestão pública, privada e atendimento clínico individual
                para compreender o desafio do engajamento em diferentes
                contextos de trabalho. Liderei operações complexas, de
                projetos esportivos internacionais a projetos de People em
                larga escala, para transformar a ciência do comportamento e
                desenvolvimento humano em estratégia de negócio.
              </p>
              <p className="font-serif text-xl text-ink italic">
                Não trago fórmulas prontas, nem jargão motivacional. O que eu
                proponho é Neurogestão: o conhecimento valioso das
                neurociências somado à experiência do esporte de alto
                rendimento para elevar o patamar cognitivo e emocional do seu
                time de líderes, colaboradores e parceiros.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:mx-0 lg:ml-auto lg:aspect-auto lg:h-full lg:max-w-none">
            <div className="grid h-full grid-cols-[1.3fr_1fr] grid-rows-2 gap-3">
              <div className="relative row-span-2 overflow-hidden">
                <Image
                  src="/images/missao-palco-cerebro.jpg"
                  alt="Israel Simões palestrando no palco, com ilustração de um cérebro ao fundo"
                  fill
                  sizes="(max-width: 1024px) 55vw, 24vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/missao-extra-stadium.jpg"
                  alt="Israel Simões em ambiente esportivo"
                  fill
                  sizes="(max-width: 1024px) 35vw, 16vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/speaking-profile.jpg"
                    alt="Israel Simões palestrando ao microfone"
                    fill
                    sizes="(max-width: 1024px) 17vw, 8vw"
                    style={{ objectPosition: "50% 18%" }}
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/missao-extra-patrus.jpg"
                    alt="Israel Simões em gravação do Patrus Talks"
                    fill
                    sizes="(max-width: 1024px) 17vw, 8vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
