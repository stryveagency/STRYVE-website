import { Fragment } from 'react'
import Reveal from './Reveal'

const flow = [
  { code: '01 · HOOK', desc: '3 primeiros segundos capturam a atenção' },
  { code: '02 · DOR/DESEJO', desc: 'Nomeia o problema real do dono de negócio local' },
  { code: '03 · SOLUÇÃO', desc: 'Motor de Crescimento STRYVE, de forma clara' },
  { code: '04 · CTA', desc: 'Uma ação só: agendar diagnóstico gratuito' },
]

const variations = [
  {
    title: 'Produto',
    desc: 'Destaque direto do que a STRYVE oferece',
    icon: (
      <>
        <path d="M22 6 L36 13 V30 L22 37 L8 30 V13 Z" />
        <path d="M8 13 L22 20 L36 13" />
        <path d="M22 20 V37" />
      </>
    ),
  },
  {
    title: 'Experiência',
    desc: 'Depoimento / jornada de um cliente real',
    icon: (
      <>
        <path d="M7 11 H37 V29 H20 L11 36 V29 H7 Z" />
        <path d="M14 17 H30" />
        <path d="M14 23 H25" />
      </>
    ),
  },
  {
    title: 'História',
    desc: 'Transformação de um cliente, antes/depois',
    icon: (
      <>
        <path d="M7 28 H17 V37 H7 Z" />
        <path d="M27 12 H37 V37 H27 Z" />
        <path d="M19 20 H31" />
        <path d="M27 15 L32 20 L27 25" />
      </>
    ),
  },
]

const metrics = [
  {
    label: 'Alcance',
    icon: (
      <>
        <path d="M3 20 H21" />
        <rect x="5" y="12" width="3.5" height="6" />
        <rect x="10.2" y="8" width="3.5" height="10" />
        <rect x="15.5" y="4" width="3.5" height="14" />
      </>
    ),
  },
  {
    label: 'CTR',
    icon: <path d="M5 3 L19 12 L12.5 13.2 L15.5 20 L12.8 21 L9.8 14.4 L5 18.6 Z" />,
  },
  {
    label: 'Custo por resultado',
    icon: (
      <>
        <path d="M12 3 V21" />
        <path d="M16 7.5 C16 5.6 14.2 4.5 12 4.5 C9.8 4.5 8 5.6 8 7.5 C8 12 16 10.5 16 15.5 C16 17.6 14.2 19 12 19 C9.8 19 8 17.6 8 15.5" />
      </>
    ),
  },
  {
    label: 'Retenção de vídeo',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8.5 L16 12 L10 15.5 Z" />
      </>
    ),
  },
]

function TrafegoPago() {
  return (
    <section id="trafego" className="relative overflow-hidden bg-black">
      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-15 pb-20 sm:px-10 sm:pt-15 sm:pb-22 lg:px-20 lg:pt-15 lg:pb-25">
        <Reveal
          as="span"
          className="inline-flex items-center gap-3 font-manrope text-sm font-medium tracking-[0.4em] text-teal-neon uppercase"
        >
          <span className="block h-px w-7 bg-teal-neon" />
          Metodologia
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-4 font-anton text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase lg:text-[54px]"
        >
          TRÁFEGO PAGO NÃO É PALPITE
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mb-15 max-w-[700px] font-manrope text-lg leading-[1.6] text-gray-light text-pretty"
        >
          1 campanha por objetivo, com 3 criativos em teste A/B simultâneo. Estrutura testada, não achismo.
        </Reveal>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
          {flow.map((step, i) => (
            <Fragment key={step.code}>
              <Reveal
                anim="pop"
                delay={i}
                className="flex flex-1 flex-col gap-3 rounded-lg border border-teal-neon/18 bg-white/3 p-6"
              >
                <span className="font-anton text-xl tracking-[0.08em] text-teal-neon">{step.code}</span>
                <p className="m-0 font-manrope text-base leading-[1.6] text-gray-light text-pretty">
                  {step.desc}
                </p>
              </Reveal>
              {i < flow.length - 1 && (
                <span aria-hidden="true" className="self-center font-manrope text-2xl leading-none text-teal-neon">
                  →
                </span>
              )}
            </Fragment>
          ))}
        </div>

        <Reveal
          as="h3"
          className="mt-15 mb-8 font-manrope text-2xl font-extrabold tracking-[0.02em] text-white uppercase lg:text-[26px]"
        >
          3 variações por campanha
        </Reveal>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
          {variations.map((v, i) => (
            <Reveal
              key={v.title}
              anim="pop"
              delay={i}
              className="flex flex-col gap-4.5 rounded-lg border border-teal-neon/15 bg-[#0A0A0A] p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-teal-neon hover:bg-[#0C110F] hover:shadow-[0_12px_44px_rgba(46,230,184,0.16)]"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                stroke="#2EE6B8"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {v.icon}
              </svg>
              <h4 className="m-0 font-manrope text-xl font-extrabold tracking-[0.04em] text-white uppercase">
                {v.title}
              </h4>
              <p className="m-0 font-manrope text-base leading-[1.6] text-gray-light text-pretty">{v.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          anim="fade"
          className="mt-15 rounded-xl border border-teal-neon/20 p-8 sm:p-10"
          style={{
            background:
              'linear-gradient(150deg, rgba(46,230,184,0.09), rgba(46,230,184,0.03) 60%, rgba(10,10,10,1))',
          }}
        >
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <span
                key={m.label}
                className={`flex flex-col items-center gap-3 text-center ${i > 0 ? 'border-l border-white/10' : ''}`}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2EE6B8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ animation: `stryve-icon-glow 3s ease-in-out ${i * 0.4}s infinite` }}
                >
                  {m.icon}
                </svg>
                <span className="font-manrope text-[15px] font-bold tracking-[0.12em] text-white uppercase sm:text-base">
                  {m.label}
                </span>
              </span>
            ))}
          </div>

          <p className="mt-6 text-center font-playfair text-lg leading-[1.5] text-teal-neon italic text-pretty">
            Decisão baseada em dado: criativo fraco pausa, criativo forte escala.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default TrafegoPago
