import Image from "next/image";
import Reveal from "./Reveal";

export default function Tars() {
  return (
    <section className="border-y border-ivory/10 bg-ink-alt py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-6">A estrutura por trás do trabalho</p>
            <Image
              src="/images/tars-logo-white.png"
              alt="TARS Mentoring & Coaching"
              width={535}
              height={743}
              className="mx-auto h-32 w-auto sm:h-36"
            />
            <p className="mt-6 text-ivory/65 leading-relaxed">
              A TARS é a estrutura por meio da qual são desenvolvidos
              projetos de Educação Corporativa, Desenvolvimento Humano e
              Estratégias de Pessoas em negócios parceiros.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
