import manifestoBg from '../assets/manifesto-bg.png'
import Reveal from './Reveal'

function Manifesto() {
  return (
    <section id="manifesto" className="relative min-h-[88vh] overflow-hidden bg-black">
      <div className="relative z-3 mx-auto grid w-full max-w-[1560px] grid-cols-1 items-center gap-10 px-6 pt-18 pb-0 md:grid-cols-[58fr_42fr] md:gap-14 md:px-10 md:py-24 lg:px-16 lg:pt-[152px] lg:pb-32">
        <div className="flex max-w-[620px] flex-col items-start">
          <Reveal className="mb-7 inline-flex items-center gap-3 font-manrope text-xs font-medium tracking-[0.4em] text-teal-neon uppercase">
            <span className="block h-px w-7 bg-teal-neon" />
            Manifesto
          </Reveal>

          <Reveal
            as="h2"
            delay={1}
            className="m-0 font-anton text-[44px] leading-[1.05] tracking-[0.01em] text-white uppercase text-balance md:text-[48px] lg:text-[60px]"
          >
            STRYVE NÃO É
            <br />
            SÓ UM NOME
          </Reveal>

          <Reveal
            as="p"
            delay={2}
            className="mt-6 font-manrope text-xl leading-[1.5] font-bold text-teal-neon"
            style={{ textShadow: '0 0 26px rgba(46,230,184,0.35)' }}
          >
            significa: <span className="font-playfair font-normal text-teal-neon italic">buscar, evoluir, ir além</span>
          </Reveal>

          <div className="mt-7 flex flex-col gap-1.5">
            <Reveal as="span" className="font-manrope text-lg leading-[1.8] text-white">
              Mas pra gente, vai além da tradução.
            </Reveal>
            <Reveal as="span" delay={1} className="font-manrope text-lg leading-[1.8] text-white">
              Stryve é sobre não aceitar o básico.
            </Reveal>
            <Reveal as="span" delay={2} className="font-manrope text-lg leading-[1.8] text-white">
              É sobre crescer com estratégia.
            </Reveal>
            <Reveal as="span" delay={3} className="font-manrope text-lg leading-[1.8] text-gray-light">
              E é assim que trabalhamos.
            </Reveal>
          </div>

          <Reveal
            className="mt-12 mb-10 h-px w-full max-w-[520px]"
            style={{
              background:
                'linear-gradient(to right, rgba(46,230,184,0.55), rgba(46,230,184,0.05) 70%, transparent)',
            }}
          />

          <Reveal as="p" className="mb-7 font-playfair text-[26px] leading-[1.3] text-white italic">
            “O que a gente faz na prática?”
          </Reveal>

          <Reveal
            as="span"
            className="mb-5 font-manrope text-xs font-bold tracking-[0.4em] text-teal-neon uppercase"
          >
            Estrutura
          </Reveal>

          <div className="flex flex-col gap-3.5">
            <Reveal className="flex items-baseline gap-4">
              <span className="font-anton text-[15px] tracking-[0.08em] text-teal-neon/70">01</span>
              <span className="font-manrope text-lg leading-[1.5] text-white">
                Atraímos <span className="text-gray-light">atenção</span>
              </span>
            </Reveal>
            <Reveal delay={1} className="flex items-baseline gap-4">
              <span className="font-anton text-[15px] tracking-[0.08em] text-teal-neon/70">02</span>
              <span className="font-manrope text-lg leading-[1.5] text-white">
                Transformamos em <span className="text-gray-light">interesse</span>
              </span>
            </Reveal>
            <Reveal delay={2} className="flex items-baseline gap-4">
              <span className="font-anton text-[15px] tracking-[0.08em] text-teal-neon/70">03</span>
              <span className="font-manrope text-lg leading-[1.5] text-white">
                Levamos <strong className="font-extrabold text-teal-neon">cliente</strong> até o negócio
              </span>
            </Reveal>
          </div>
        </div>

        <div />
      </div>

      <Reveal
        className="pointer-events-none absolute inset-y-0 right-0 z-2 hidden w-[46%] md:block"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0, #000 34%, #000 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 34%, #000 100%)',
        }}
      >
        <div
          className="h-full w-full"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0, #000 14%, #000 84%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0, #000 14%, #000 84%, transparent 100%)',
          }}
        >
          <img
            src={manifestoBg}
            alt=""
            aria-hidden="true"
            className="block h-full w-full object-cover opacity-[0.62]"
            style={{ objectPosition: '62% 32%' }}
          />
        </div>
      </Reveal>
    </section>
  )
}

export default Manifesto
