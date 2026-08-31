import Image from "next/image";
import Reveal from "./Reveal";
import { emailHref } from "@/lib/config";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/bw-rock.jpg"
          alt="Israel Simões — próximo nível de performance e transformação"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
      </div>

      <div className="container-x relative z-10 text-center">
        <Reveal>
          <p className="eyebrow mb-6 justify-center flex">Vamos conversar</p>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl sm:text-5xl leading-tight text-ivory text-balance">
            Que comportamento a sua empresa precisa transformar para
            alcançar o próximo resultado?
          </h2>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={emailHref()} className="btn-primary">
              Conversar sobre um evento
            </a>
            <a href="#contato" className="btn-outline">
              Ver outros canais de contato
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
