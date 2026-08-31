import Image from "next/image";
import Reveal from "./Reveal";

const PARTNERS = [
  { name: "Ambev", src: "/images/partners/ambev.png", w: 1240, h: 360 },
  { name: "Comitê Olímpico Brasileiro", src: "/images/partners/cob.png", w: 1092, h: 840 },
  { name: "Team GB (Grã-Bretanha Olímpica)", src: "/images/partners/teamgb.png", w: 596, h: 822 },
  { name: "UFMG", src: "/images/partners/ufmg.png", w: 335, h: 104 },
  { name: "PUC Minas", src: "/images/partners/pucminas.png", w: 1199, h: 1018 },
  { name: "Sandvik", src: "/images/partners/sandvik.png", w: 872, h: 160 },
  { name: "Patrus Transportes", src: "/images/partners/patrus.png", w: 406, h: 102 },
  { name: "Vallourec", src: "/images/partners/vallourec.png", w: 856, h: 208 },
  { name: "América Latina Logística (ALL)", src: "/images/partners/all.png", w: 960, h: 275 },
  { name: "Stellantis", src: "/images/partners/stellantis.png", w: 1081, h: 240 },
  { name: "Instituto Plenitud", src: "/images/partners/plenitud.png", w: 367, h: 255 },
  { name: "Clínica Pranna", src: "/images/partners/pranna.png", w: 636, h: 634 },
  { name: "Legado Escola Cristã Clássica", src: "/images/partners/legado.png", w: 548, h: 735 },
];

export default function Authority() {
  return (
    <section className="border-y border-ivory/10 bg-ink py-12 sm:py-16">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs sm:text-sm font-mono uppercase tracking-widest2 text-ivory/45">
            Experiências compartilhadas entre empresas, universidades e consultórios
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-12">
            {PARTNERS.map((p) =>
              p.src ? (
                <div
                  key={p.name}
                  className="relative h-10 w-24 opacity-90 transition-opacity duration-300 hover:opacity-100 sm:h-12 sm:w-28"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span
                  key={p.name}
                  className="font-serif text-sm sm:text-base text-ivory/55 hover:text-ivory/90 transition-colors"
                >
                  {p.name}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
