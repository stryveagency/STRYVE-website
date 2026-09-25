import manifestoBg from '../assets/manifesto-bg.png'
import Reveal from './Reveal'

function Manifesto() {
  return (
    <section id="manifesto" className="relative min-h-[88vh] overflow-hidden bg-black">
      <div className="relative z-3 mx-auto grid w-full max-w-[1560px] grid-cols-1 items-center gap-10 px-6 pt-18 pb-0 md:grid-cols-[58fr_42fr] md:gap-14 md:px-10 md:py-24 lg:px-16 lg:pt-[152px] lg:pb-32">
        <div className="flex max-w-[620px] flex-col items-start">
          <Reveal className="mb-7 inline-flex items-center gap-3 font-body text-xs font-medium tracking-[0.4em] text-mint uppercase">
            <span className="block h-px w-7 bg-mint" />
            Manifesto
          </Reveal>

          <Reveal
            as="h2"
            delay={1}
            className="m-0 font-display text-[44px] leading-[1.05] tracking-[0.01em] text-white uppercase text-balance md:text-[48px] lg:text-[60px]"
          >
            STRYVE NÃO É
            <br />
            SÓ UM NOME
          </Reveal>

          <Reveal
            as="p"
            delay={2}
            className="mt-6 font-body text-xl leading-[1.5] font-bold text-mint"
            style={{ textShadow: '0 0 26px rgba(0, 255, 209,0.35)' }}
          >
            significa: <span className="font-accent font-normal text-mint italic">buscar, evoluir, ir além</span>
          </Reveal>

          <div className="mt-7 flex flex-col gap-1.5">
            <Reveal as="span" className="font-body text-lg leading-[1.8] text-white">
              Mas pra gente, vai além da tradução.
            </Reveal>
            <Reveal as="span" delay={1} className="font-body text-lg leading-[1.8] text-white">
              Stryve é sobre não aceitar o básico.
            </Reveal>
            <Reveal as="span" delay={2} className="font-body text-lg leading-[1.8] text-white">
              É sobre crescer com estratégia.
            </Reveal>
            <Reveal as="span" delay={3} className="font-body text-lg leading-[1.8] text-gray-light">
              E é assim que trabalhamos.
            </Reveal>
          </div>

          <Reveal
            className="mt-12 mb-10 h-px w-full max-w-[520px]"
            style={{
              background:
                'linear-gradient(to right, rgba(0, 255, 209,0.55), rgba(0, 255, 209,0.05) 70%, transparent)',
            }}
          />

          <Reveal as="p" className="mb-7 font-display text-[32px] leading-[1.1] tracking-[0.01em] text-white uppercase">
            “O que a gente faz na prática?”
          </Reveal>

          <Reveal
            as="span"
            className="mb-5 font-body text-xs font-bold tracking-[0.4em] text-mint uppercase"
          >
            Estrutura
          </Reveal>

          <div className="flex flex-col gap-3.5">
            <Reveal className="flex items-baseline gap-4">
              <span className="font-display uppercase text-[15px] tracking-[0.08em] text-mint/70">01</span>
              <span className="font-body text-lg leading-[1.5] text-white">
                Atraímos <span className="text-gray-light">atenção</span>
              </span>
            </Reveal>
            <Reveal delay={1} className="flex items-baseline gap-4">
              <span className="font-display uppercase text-[15px] tracking-[0.08em] text-mint/70">02</span>
              <span className="font-body text-lg leading-[1.5] text-white">
                Transformamos em <span className="text-gray-light">interesse</span>
              </span>
            </Reveal>
            <Reveal delay={2} className="flex items-baseline gap-4">
              <span className="font-display uppercase text-[15px] tracking-[0.08em] text-mint/70">03</span>
              <span className="font-body text-lg leading-[1.5] text-white">
                Levamos <strong className="font-extrabold text-mint">cliente</strong> até o negócio
              </span>
            </Reveal>
          </div>
        </div>

        <div />
      </div>

      <Reveal
        className="pointer-events-none absolute inset-y-0 right-0 z-2 hidden w-[46%] md:block"
        style={{
          backgroundImage: `url(${manifestoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          opacity: 0.62,
          maskImage: 'linear-gradient(to right, transparent 0, #000 34%, #000 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 34%, #000 100%)',
        }}
      />
    </section>
  )
}

export default Manifesto
