import Reveal from "./Reveal";

const NUMEROS = [
  { valor: "10+", label: "anos dedicados à pesquisa e atuação gerencial sobre pessoas" },
  { valor: "2x", label: "premiado na Semana Nacional de Ciência e Tecnologia" },
  { valor: "1x", label: "premiado no Prêmio Excelência em Saúde da Rede Vitória" },
  { valor: "100%", label: "de satisfação na palestra Neurovendas, líder de contratação" },
];

export default function Numeros() {
  return (
    <section className="section-pad bg-graphite/60 border-y border-ivory/10">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-4">Resultados verificáveis</p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ivory max-w-xl text-balance">
            Números construídos em operações reais, não em promessas.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {NUMEROS.map((n, i) => (
            <Reveal key={n.label} delay={(i % 4) * 80}>
              <div>
                <p className="font-serif text-4xl sm:text-5xl text-accent">{n.valor}</p>
                <p className="mt-3 text-sm text-ivory/65 leading-snug">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
