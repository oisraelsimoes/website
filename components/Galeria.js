import Image from "next/image";
import Reveal from "./Reveal";

const FOTOS = [
  { src: "/images/speaking-front.jpg", alt: "Israel Simões palestrando para plateia corporativa", span: "sm:row-span-2" },
  { src: "/images/podcast.jpg", alt: "Israel Simões em gravação do podcast inthegrAção" },
  { src: "/images/community-talk.jpg", alt: "Israel Simões palestrando sobre saúde mental e comportamento" },
  { src: "/images/patrus-talks.jpg", alt: "Israel Simões em gravação do Patrus Talks" },
  { src: "/images/warehouse.jpg", alt: "Israel Simões em imersão operacional na Patrus Transportes", span: "sm:row-span-2" },
  { src: "/images/event-7th.jpg", alt: "Israel Simões no 7th Experience Executive Club", span: "sm:row-span-2" },
  { src: "/images/gala-award.jpg", alt: "Israel Simões no Prêmio Excelência em Saúde", span: "sm:row-span-2" },
  { src: "/images/studio-production.jpg", alt: "Bastidores de produção de conteúdo com Israel Simões" },
];

export default function Galeria() {
  return (
    <section className="section-pad bg-ink-alt">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-4">Experiência ao vivo</p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ivory max-w-xl text-balance">
            É assim que a experiência acontece.
          </h2>
          <p className="mt-5 max-w-xl text-ivory/65 leading-relaxed">
            Entre o palco e os bastidores, a troca de experiências eleva o
            repertório gerencial dos nossos parceiros.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 auto-rows-[160px] gap-4 sm:grid-cols-4 sm:auto-rows-[200px] sm:grid-flow-dense">
          {FOTOS.map((f, i) => (
            <Reveal key={f.src} delay={(i % 4) * 70} className={f.span || ""}>
              <div className="group relative h-full w-full overflow-hidden">
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  style={f.pos ? { objectPosition: f.pos } : undefined}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
