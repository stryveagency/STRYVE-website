import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

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

function PillarBar({ pct }: { pct: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>()

  return (
    <span ref={ref} aria-hidden="true" className="block h-2 overflow-hidden rounded-full bg-white/8">
      <span
        className="block h-full rounded-full bg-mint shadow-[0_0_14px_rgba(0, 255, 209,0.5)] transition-[width] duration-[1300ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
        style={{ width: inView ? `${pct}%` : '0%' }}
      />
    </span>
  )
}

function Conteudo() {
  return (
    <section id="conteudo" className="relative overflow-hidden bg-black">
      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-[130px] pb-20 sm:px-10 sm:pt-[140px] sm:pb-22 lg:px-20 lg:pt-[160px] lg:pb-25">
        <Reveal
          as="span"
          className="inline-flex items-center gap-3 font-body text-sm font-medium tracking-[0.4em] text-mint uppercase"
        >
          <span className="block h-px w-7 bg-mint" />
          Metodologia
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-4 font-display text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase lg:text-[54px]"
        >
          CONTEÚDO NÃO É IMPROVISO
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mb-15 max-w-[700px] font-body text-lg leading-[1.6] text-gray-light text-pretty"
        >
          Consistência importa mais que volume.
        </Reveal>

        <Reveal
          as="h3"
          className="mt-15 mb-8 font-body text-2xl font-extrabold tracking-[0.02em] text-white uppercase lg:text-[26px]"
        >
          4 pilares de conteúdo
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i} className="flex flex-col gap-2.5">
              <span
                className="font-display uppercase text-4xl leading-none text-mint"
                style={{ textShadow: '0 0 26px rgba(0, 255, 209,0.3)' }}
              >
                {p.pct}%
              </span>
              <span className="font-body text-[17px] font-extrabold tracking-[0.1em] text-white uppercase">
                {p.title}
              </span>
              <PillarBar pct={p.pct} />
              <p className="m-0 mt-1 font-body text-base leading-[1.6] text-gray-light">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Conteudo
