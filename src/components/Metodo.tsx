import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const steps = [
  {
    code: 'S-01',
    title: 'Scan — Diagnóstico 360°',
    desc: 'Mergulhamos no negócio do cliente antes de qualquer ação. Analisamos presença digital, concorrentes, público e histórico. Nada é executado sem ser diagnosticado primeiro.',
    tags: ['Formulário estratégico', 'Análise de concorrentes', 'Auditoria de perfil'],
  },
  {
    code: 'T-02',
    title: 'Target — Estratégia sob medida',
    desc: 'Com base no diagnóstico, criamos uma estratégia customizada. Definimos público-alvo, mensagem, canais e metas mensuráveis. Cada cliente tem um plano único — nunca um template genérico.',
    tags: ['ICP do cliente', 'Plano de 30/60/90 dias', 'Metas e KPIs'],
  },
  {
    code: 'R-03',
    title: 'Run — Execução simultânea',
    desc: 'Conteúdo e tráfego pago rodando juntos, não em sequência. Enquanto o orgânico constrói autoridade, o pago acelera resultado. Essa combinação é o que separa agências de performance das demais.',
    tags: ['Social media', 'Meta Ads', 'Google Ads', 'Landing pages'],
  },
  {
    code: 'I-04',
    title: 'Insights — Monitoramento em tempo real',
    desc: 'Acompanhamos os dados semanalmente, não só no final do mês. Identificamos o que está performando e o que não está antes que vire problema. Cliente sempre informado.',
    tags: ['Análise semanal', 'Dashboard do cliente', 'Alertas de performance'],
  },
  {
    code: 'D-05',
    title: 'Drive — Otimização contínua',
    desc: 'Pausamos o que não funciona, escalamos o que funciona. Testes A/B, ajustes de segmentação, novos criativos. A estratégia evolui todo mês — nunca fica parada.',
    tags: ['Testes A/B', 'Ajustes semanais', 'Relatório mensal'],
  },
  {
    code: 'E-06',
    title: 'Expand — Escala e novos horizontes',
    desc: 'Quando os resultados chegam, escalamos. Novos canais, novos públicos, novas campanhas. O objetivo é crescimento previsível e sustentável — não um pico isolado.',
    tags: ['Novos canais', 'Upsell estratégico', 'Planejamento trimestral'],
  },
]

function Metodo() {
  const gridRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([])
  const basePathRef = useRef<SVGPathElement>(null)
  const fillPathRef = useRef<SVGPathElement>(null)
  const pathLenRef = useRef(0)
  const [viewBox, setViewBox] = useState('0 0 0 0')

  useEffect(() => {
    const onScroll = () => {
      const fill = fillPathRef.current
      const container = gridRef.current
      if (!fill || !container || !pathLenRef.current) return
      const box = container.getBoundingClientRect()
      const vh = window.innerHeight || 0
      const total = Math.max(1, box.height * 0.85)
      const progress = Math.max(0, Math.min(1, (vh * 0.72 - box.top) / total))
      fill.style.strokeDashoffset = `${(pathLenRef.current * (1 - progress)).toFixed(1)}px`
    }

    const buildPath = () => {
      const container = gridRef.current
      const base = basePathRef.current
      const fill = fillPathRef.current
      if (!container || !base || !fill) return
      const box = container.getBoundingClientRect()
      setViewBox(`0 0 ${Math.round(box.width)} ${Math.round(box.height)}`)

      const pts = dotRefs.current
        .filter((el): el is HTMLSpanElement => el !== null)
        .map((el) => {
          const r = el.getBoundingClientRect()
          return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 }
        })
      if (pts.length < 2) return

      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1]
        const p1 = pts[i]
        const midY = (p0.y + p1.y) / 2
        d += ` C ${p0.x.toFixed(1)} ${midY.toFixed(1)}, ${p1.x.toFixed(1)} ${midY.toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`
      }
      base.setAttribute('d', d)
      fill.setAttribute('d', d)
      const len = fill.getTotalLength()
      pathLenRef.current = len
      fill.style.strokeDasharray = `${len}px`
      fill.style.strokeDashoffset = `${len}px`
      onScroll()
    }

    buildPath()

    let raf = 0
    const handleScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        onScroll()
      })
    }
    const handleResize = () => buildPath()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    const ro = new ResizeObserver(handleResize)
    if (gridRef.current) ro.observe(gridRef.current)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      ro.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="metodo" className="relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, rgba(46,230,184,0.06) 0 1px, transparent 1px 88px)',
          maskImage: 'linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent)',
        }}
      />

      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-[130px] pb-22 sm:px-10 sm:pt-[140px] sm:pb-22 lg:px-20 lg:pt-[160px] lg:pb-25">
        <Reveal
          as="span"
          className="inline-flex items-center gap-3 font-manrope text-sm font-medium tracking-[0.4em] text-teal-neon uppercase"
        >
          <span className="block h-px w-7 bg-teal-neon" />
          Método
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-5 font-anton text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase lg:text-[54px]"
        >
          O MÉTODO S.T.R.I.D.E
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mb-15 max-w-[760px] font-manrope text-xl leading-[1.6] text-gray-light text-pretty"
        >
          Seis etapas que transformam presença digital em crescimento previsível — aplicado a qualquer
          negócio, de qualquer segmento.
        </Reveal>

        <div ref={gridRef} className="relative grid grid-cols-1 gap-x-16 md:grid-cols-2">
          <svg
            viewBox={viewBox}
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          >
            <path
              ref={basePathRef}
              d=""
              fill="none"
              stroke="rgba(46,230,184,0.16)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={fillPathRef}
              d=""
              fill="none"
              stroke="#2EE6B8"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: 'drop-shadow(0 0 8px rgba(46,230,184,0.8))' }}
            />
          </svg>

          {steps.map((step, i) => (
            <Reveal
              key={step.code}
              delay={i}
              style={{ gridRow: i + 1 }}
              className={`relative col-start-1 pb-13 pl-16 ${i === steps.length - 1 ? 'pb-0' : ''} ${
                i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
              }`}
            >
              <span
                ref={(el) => {
                  dotRefs.current[i] = el
                }}
                aria-hidden="true"
                className="absolute top-2 left-1.5 h-4 w-4 rounded-full border-2 border-teal-neon bg-black shadow-[0_0_16px_rgba(46,230,184,0.5)]"
              />
              <span className="inline-block rounded bg-teal-neon/10 px-3 py-1 font-anton text-[26px] tracking-[0.08em] text-teal-neon">
                {step.code}
              </span>
              <h3 className="mt-[18px] mb-3.5 font-manrope text-2xl font-extrabold text-white lg:text-[30px]">
                {step.title}
              </h3>
              <p className="mb-[18px] max-w-[620px] font-manrope text-lg leading-[1.7] text-gray-light text-pretty">
                {step.desc}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-teal-neon/35 px-3 py-1 font-manrope text-sm text-gray-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metodo
