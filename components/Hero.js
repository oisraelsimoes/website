import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="container-x relative z-10 grid grid-cols-1 items-center gap-10 pb-16 pt-32 sm:pb-20 lg:min-h-[100svh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-28">
        <div className="relative z-20 order-2 lg:order-1 lg:pl-10 xl:pl-20">
          <h1 className="inline-block text-center tracking-tight">
            <span className="relative z-10 block font-playfair font-normal leading-[0.95] text-ivory text-[3.6rem] sm:text-8xl lg:text-[6.5rem]">
              Israel
            </span>
            <span className="relative z-0 -mt-3 block font-signature font-normal leading-none text-accent text-[4.1rem] sm:-mt-7 sm:text-[5.6rem] lg:-mt-10 lg:text-[7.8rem]">
              Simões
            </span>
          </h1>

          <div className="hairline my-7 max-w-xs" />

          <p className="font-serif text-xl leading-tight text-ivory text-balance sm:text-2xl lg:text-[1.9rem] lg:leading-[1.2] max-w-xl">
            A transformação do seu negócio começa por
            <br />
            <em className="text-accent italic">
              uma transformação de comportamento.
            </em>
          </p>
        </div>

        <div className="relative z-10 order-1 lg:order-2 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[46%] lg:max-w-[720px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[3/4] lg:h-full lg:aspect-auto lg:rounded-none">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Israel Simões, palestrante e neurocientista clínico"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
