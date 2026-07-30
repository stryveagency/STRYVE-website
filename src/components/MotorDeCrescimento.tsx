import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const steps = [
  {
    code: '01',
    title: 'Diagnóstico',
    desc: 'Levantamos os números reais do cliente: faturamento, ticket médio, funil atual e gargalo principal. Validamos os critérios de qualificação antes de qualquer proposta.',
    artefato: 'Artefato: Documento de Diagnóstico',
  },
  {
    code: '02',
    title: 'Árvore de Metas',
    desc: 'Definimos com o cliente a meta de negócio principal e desdobramos em KPIs de marketing e depois KPIs por canal — tudo registrado e rastreável.',
    artefato: 'Artefato: Árvore de Metas',
  },
  {
    code: '03',
    title: 'Ciclos de Execução',
    desc: 'Cada ciclo de 2 a 4 semanas parte de uma hipótese ligada à Árvore de Metas. Produzimos os criativos e rodamos as campanhas conforme o plano do ciclo.',
    artefato: 'Artefato: Plano de Ciclo',
  },
  {
    code: '04',
    title: 'Ritual de Medição',
    desc: 'Toda sexta, revisamos as métricas com cadência fixa. Geramos o relatório com números reais, e a decisão do que muda vem do dado — nunca do achismo.',
    artefato: 'Artefato: Relatório de Ciclo',
  },
  {
    code: '05',
    title: 'Otimização',
    desc: 'Revisamos o que funcionou e o que não funcionou. Pausamos o que é fraco, escalamos o que performa, e ajustamos o próximo ciclo.',
    artefato: 'Artefato: Ata de Otimização',
  },
  {
    code: '06',
    title: 'Expansão',
    desc: 'Verificamos se a meta da Árvore foi batida, apresentamos a proposta de expansão de escopo e orçamento, e ativamos o bônus por resultado.',
    artefato: 'Artefato: Proposta de Expansão',
  },
]

function MotorDeCrescimento() {
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

      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-[130px] pb-15 sm:px-10 sm:pt-[140px] sm:pb-15 lg:px-20 lg:pt-[160px] lg:pb-15">
        <Reveal
          as="span"
          className="inline-flex items-center gap-3 font-manrope text-sm font-medium tracking-[0.4em] text-teal-neon uppercase"
        >
          <span className="block h-px w-7 bg-teal-neon" />
          Motor de Crescimento
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-5 font-anton text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase lg:text-[54px]"
        >
          O MOTOR DE CRESCIMENTO STRYVE
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mb-15 max-w-[760px] font-manrope text-xl leading-[1.6] text-gray-light text-pretty"
        >
          Um artefato obrigatório em cada etapa — sempre com dono e entregável claro. Decisão baseada em dado
          real, não em achismo.
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
              <h3 className="mt-[18px] mb-3.5 font-manrope text-2xl font-extrabold text-white uppercase lg:text-[30px]">
                {step.title}
              </h3>
              <p className="mb-[18px] max-w-[620px] font-manrope text-lg leading-[1.7] text-gray-light text-pretty">
                {step.desc}
              </p>
              <span className="inline-block rounded-full border border-teal-neon/55 bg-teal-neon/8 px-3 py-1 font-manrope text-[15px] text-white">
                {step.artefato}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MotorDeCrescimento
