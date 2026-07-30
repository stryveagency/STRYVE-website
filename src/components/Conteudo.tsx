import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const week = [
  {
    day: 'Segunda',
    desc: 'Planejamento da pauta',
    icon: (
      <>
        <rect x="5" y="7" width="24" height="22" rx="3" />
        <path d="M5 14 H29" />
        <path d="M11 4 V9" />
        <path d="M23 4 V9" />
        <path d="M11 20 H17" />
      </>
    ),
  },
  {
    day: 'Terça',
    desc: 'Produção / roteiro',
    icon: (
      <>
        <path d="M8 4 H21 L26 9 V30 H8 Z" />
        <path d="M21 4 V9 H26" />
        <path d="M12 15 H22" />
        <path d="M12 20 H22" />
        <path d="M12 25 H18" />
      </>
    ),
  },
  {
    day: 'Quarta',
    desc: 'Edição',
    icon: (
      <>
        <circle cx="9" cy="25" r="4" />
        <circle cx="25" cy="25" r="4" />
        <path d="M12 22 L26 6" />
        <path d="M22 22 L8 6" />
      </>
    ),
  },
  {
    day: 'Quinta',
    desc: 'Publicação',
    icon: (
      <>
        <circle cx="17" cy="17" r="12" />
        <path d="M14 11.5 L24 17 L14 22.5 Z" />
      </>
    ),
  },
  {
    day: 'Sexta',
    desc: 'Análise e ajuste',
    icon: (
      <>
        <circle cx="15" cy="15" r="9" />
        <path d="M21.5 21.5 L29 29" />
        <path d="M11 17 L14 13 L17 15.5 L20 10" />
      </>
    ),
  },
]

const pillars = [
  {
    pct: 35,
    title: 'Autoridade / Educação',
    desc: 'Dicas práticas pro dono de negócio local',
  },
  {
    pct: 25,
    title: 'Prova social / Resultados',
    desc: 'Cases reais de clientes, com números',
  },
  {
    pct: 20,
    title: 'Bastidores',
    desc: 'Time trabalhando, processo, rotina',
  },
  {
    pct: 20,
    title: 'Conversão',
    desc: 'Oferta direta, CTA pra agendar diagnóstico',
  },
]

const identity = [
  'Busto de mármore clássico em pose contextual',
  'Fundo escuro com textura de grade',
  'Gradiente mint #00819D → #00FFD1',
  'Títulos em Bebas Neue',
]

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, inView }
}

function WeekRail() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className="relative">
      <div aria-hidden="true" className="absolute inset-x-0 top-[42px] h-0.5 bg-teal-neon/16" />
      <div
        aria-hidden="true"
        className="absolute top-[42px] left-0 h-0.5 shadow-[0_0_12px_rgba(46,230,184,0.6)] transition-[width] duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
        style={{
          width: inView ? '100%' : '0%',
          background: 'linear-gradient(to right, #2EE6B8, rgba(46,230,184,0.6))',
        }}
      />
      <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {week.map((d, i) => (
          <Reveal
            key={d.day}
            delay={i}
            className="flex flex-col gap-3.5 rounded-lg border border-teal-neon/18 bg-white/3 p-6"
          >
            <span className="font-manrope text-[17px] font-extrabold tracking-[0.18em] text-teal-neon uppercase">
              {d.day}
            </span>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              stroke="#2EE6B8"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {d.icon}
            </svg>
            <p className="m-0 font-manrope text-base leading-[1.5] text-gray-light">{d.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function PillarBar({ pct }: { pct: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>()

  return (
    <span ref={ref} aria-hidden="true" className="block h-2 overflow-hidden rounded-full bg-white/8">
      <span
        className="block h-full rounded-full bg-teal-neon shadow-[0_0_14px_rgba(46,230,184,0.5)] transition-[width] duration-[1300ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
        style={{ width: inView ? `${pct}%` : '0%' }}
      />
    </span>
  )
}

function Conteudo() {
  return (
    <section id="conteudo" className="relative overflow-hidden bg-black">
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
          CONTEÚDO NÃO É IMPROVISO
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mb-15 max-w-[700px] font-manrope text-lg leading-[1.6] text-gray-light text-pretty"
        >
          3 publicações por semana — consistência importa mais que volume.
        </Reveal>

        <WeekRail />

        <Reveal
          as="h3"
          className="mt-15 mb-8 font-manrope text-2xl font-extrabold tracking-[0.02em] text-white uppercase lg:text-[26px]"
        >
          4 pilares de conteúdo
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i} className="flex flex-col gap-2.5">
              <span
                className="font-anton text-4xl leading-none text-teal-neon"
                style={{ textShadow: '0 0 26px rgba(46,230,184,0.3)' }}
              >
                {p.pct}%
              </span>
              <span className="font-manrope text-[17px] font-extrabold tracking-[0.1em] text-white uppercase">
                {p.title}
              </span>
              <PillarBar pct={p.pct} />
              <p className="m-0 mt-1 font-manrope text-base leading-[1.6] text-gray-light">{p.desc}</p>
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
          <span className="inline-flex items-center gap-3 font-manrope text-sm font-medium tracking-[0.4em] text-teal-neon uppercase">
            <span className="block h-px w-7 bg-teal-neon" />
            Identidade obrigatória em todo post
          </span>
          <div className="mt-5.5 flex flex-wrap gap-x-7 gap-y-3">
            {identity.map((item) => (
              <span key={item} className="inline-flex items-center gap-2.5 font-manrope text-base text-white">
                <span className="text-teal-neon">✓</span>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Conteudo
