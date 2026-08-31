import Image from "next/image";
import Reveal from "./Reveal";

const PUBLICOS = [
  "Lideranças ampliando seu repertório de gestão de pessoas",
  "Elevação do nível de RH e People & Culture",
  "Encontros breves e eventos imersivos",
  "Encontros executivos e/ou abordagens de público ampliado",
  "Treinamentos focados em rapport comercial",
  "Consultoria interna e mentoring individualizado contínuo",
  "Parceria com universidades e MBAs",
  "Democratização de conhecimento em mídias e podcasts",
];

export default function ParaQuem() {
  return (
    <section className="section-pad bg-ink-alt">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden translate-y-6">
              <Image
                src="/images/colorful-brain-talk.jpg"
                alt="Israel Simões palestrando sobre neurociência aplicada para plateia corporativa"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/ufmg-lecture-v2.jpg"
                alt="Israel Simões ministrando palestra em auditório universitário da UFMG"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow mb-4">Para quem é</p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ivory text-balance">
            Uma experiência pensada para cada contexto de negócio.
          </h2>
          <p className="mt-5 text-ivory/65 leading-relaxed max-w-lg">
            Do auditório de uma convenção anual à sala de reunião de um
            comitê de liderança, o formato se adapta, enquanto a abordagem
            permanece.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PUBLICOS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm text-ivory/75"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
