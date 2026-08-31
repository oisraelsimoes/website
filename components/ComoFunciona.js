import Reveal from "./Reveal";

const PASSOS = [
  {
    numero: "01",
    titulo: "Conte sobre o seu evento",
    texto:
      "Entendo o público, o contexto e o desafio real da sua organização antes de propor qualquer conteúdo.",
  },
  {
    numero: "02",
    titulo: "Definimos a experiência",
    texto:
      "Escolhemos ou personalizamos a palestra, o treinamento ou o workshop ideal para o seu momento.",
  },
  {
    numero: "03",
    titulo: "Levamos a experiência ao seu time",
    texto:
      "Conteúdo conectado ao contexto real da empresa, entregue com ciência, presença de palco e clareza prática.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="section-pad bg-ink">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-4">Como funciona</p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ivory max-w-xl text-balance">
            Um processo simples, sem burocracia.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {PASSOS.map((p, i) => (
            <Reveal key={p.numero} delay={i * 100}>
              <div className="relative h-full">
                <div className="card relative z-10 flex h-full flex-col p-7 sm:p-8 transition-colors hover:border-accent/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-sm font-medium text-accent-light">
                    {p.numero}
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-ivory">{p.titulo}</h3>
                  <p className="mt-3 text-sm text-ivory/65 leading-relaxed">
                    {p.texto}
                  </p>
                </div>
                {i < PASSOS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -right-[27px] z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center font-serif text-lg text-accent/60 sm:flex"
                  >
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
