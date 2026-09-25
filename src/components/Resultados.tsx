import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let started = false

    const run = () => {
      if (started) return
      started = true
      const duration = 1800
      const start = performance.now()
      const tick = (t: number) => {
        const progress = Math.min(1, (t - start) / duration)
        setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      run()
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            io.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

function Resultados() {
  return (
    <section
      id="resultados"
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-black"
      style={{ overflow: 'hidden' }}
    >
      <video
        src="/videos/resultados-bust.mp4"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 z-0 m-0 block h-full w-full scale-[1.05] border-none object-cover object-center p-0"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          clipPath: 'inset(0)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 28%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-[130px] pb-22 sm:px-10 sm:pt-[140px] sm:pb-22 lg:px-20 lg:pt-[152px] lg:pb-22">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
          <Reveal
            anim="pop"
            className="grid grid-rows-[auto_auto] items-end justify-items-center px-8 text-center sm:grid-rows-[108px_auto]"
          >
            <span
              className="font-display uppercase text-[60px] leading-none tracking-[0.01em] text-mint sm:text-[72px] lg:text-[92px]"
              style={{ textShadow: '0 0 40px rgba(0, 255, 209,0.35)' }}
            >
              <Counter target={10} />+
            </span>
            <span className="mt-3 font-body text-[17px] font-medium tracking-[0.14em] text-white uppercase">
              Clientes atendidos
            </span>
          </Reveal>

          <Reveal
            anim="pop"
            delay={1}
            className="grid grid-rows-[auto_auto] items-end justify-items-center border-t border-white/10 px-8 pt-10 text-center sm:grid-rows-[108px_auto] sm:border-t-0 sm:border-l sm:pt-0"
          >
            <span
              className="font-display uppercase text-[60px] leading-none tracking-[0.01em] text-mint sm:text-[72px] lg:text-[92px]"
              style={{ textShadow: '0 0 40px rgba(0, 255, 209,0.35)' }}
            >
              <Counter target={100} suffix="%" />
            </span>
            <span className="mt-3 font-body text-[17px] font-medium tracking-[0.14em] text-white uppercase">
              Transparência
            </span>
          </Reveal>

          <Reveal
            anim="pop"
            delay={2}
            className="grid grid-rows-[auto_auto] items-end justify-items-center border-t border-white/10 px-8 pt-10 text-center sm:grid-rows-[108px_auto] sm:border-t-0 sm:border-l sm:pt-0"
          >
            <span
              className="font-display uppercase text-[60px] leading-none tracking-[0.01em] whitespace-nowrap text-mint"
              style={{ textShadow: '0 0 40px rgba(0, 255, 209,0.35)' }}
            >
              5 MESES
            </span>
            <span className="mt-3 max-w-[320px] font-body text-[17px] leading-[1.5] font-medium tracking-[0.14em] text-white uppercase text-pretty">
              Prazo mínimo para resultados consistentes
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Resultados
