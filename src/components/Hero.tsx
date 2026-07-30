import { useRef } from 'react'
import Reveal from './Reveal'

function Hero() {
  const videoWrapRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    if (videoWrapRef.current) {
      videoWrapRef.current.style.transform = `scale(1.06) translate(${x * -16}px, ${y * -16}px)`
    }
    if (contentRef.current) {
      contentRef.current.style.transform = `perspective(1200px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`
    }
  }

  const handleMouseLeave = () => {
    if (videoWrapRef.current) videoWrapRef.current.style.transform = 'scale(1.06) translate(0, 0)'
    if (contentRef.current) contentRef.current.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-stretch overflow-hidden bg-black"
    >
      <div
        ref={videoWrapRef}
        className="absolute inset-0 z-0 scale-[1.06] transition-transform duration-300 ease-out will-change-transform"
      >
        <video
          src="/videos/hero-bust.mp4"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-1"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.14) 55%, transparent 78%)',
        }}
      />

      <div className="absolute bottom-7 left-1/2 z-6 flex -translate-x-1/2 flex-col items-center gap-2.5 [animation:stryve-pulse_2s_ease-in-out_infinite]">
        <span className="font-manrope text-[11px] font-medium tracking-[0.4em] text-gray-light uppercase">
          scroll
        </span>
        <span
          className="block h-[34px] w-px"
          style={{ background: 'linear-gradient(to bottom, rgba(204,204,204,0.9), transparent)' }}
        />
      </div>

      <div className="relative z-4 mx-auto grid w-full max-w-[1560px] items-center gap-12 px-6 pt-[116px] pb-24 sm:px-10 sm:pt-[124px] sm:pb-18 lg:px-16 lg:pt-[132px] lg:pb-24">
        <div
          ref={contentRef}
          className="flex flex-col items-start transition-transform duration-300 ease-out will-change-transform"
        >
          <Reveal className="mb-10 flex items-center gap-[18px]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-neon/55 font-playfair text-[22px] leading-none text-teal-neon italic shadow-[0_0_18px_rgba(46,230,184,0.35),inset_0_0_12px_rgba(46,230,184,0.15)]">
              S
            </span>
            <span
              className="font-manrope text-[32px] leading-none font-extralight tracking-[0.28em] text-transparent sm:text-4xl lg:text-[48px]"
              style={{
                WebkitTextStroke: '0.7px #2EE6B8',
                filter: 'drop-shadow(0 0 14px rgba(46,230,184,0.65)) drop-shadow(0 0 42px rgba(46,230,184,0.28))',
              }}
            >
              STRYVE
            </span>
          </Reveal>

          <Reveal
            as="h1"
            delay={1}
            className="m-0 font-anton text-[52px] leading-[1.05] tracking-[0.01em] text-white uppercase text-balance sm:text-[68px] lg:text-[100px]"
          >
            CRESCIMENTO
            <br />
            NÃO É SORTE
          </Reveal>

          <Reveal
            as="p"
            delay={2}
            className="mt-6 font-anton text-[26px] leading-[1.1] tracking-[0.04em] text-teal-neon uppercase lg:text-[60px]"
            style={{ textShadow: '0 0 24px rgba(46,230,184,0.45)' }}
          >
            É PROCESSO.
          </Reveal>

          <Reveal
            as="p"
            delay={3}
            className="mt-8 max-w-[480px] font-manrope text-lg leading-[1.6] text-gray-light text-pretty"
          >
            Estratégia digital orientada a <strong className="font-bold text-white">RESULTADO</strong>. Sem
            achismo. Tráfego pago, social media e conteúdo trabalhando juntos, com dados reais guiando cada
            decisão.
          </Reveal>

          <Reveal delay={4} className="mt-10">
            <a
              href="#planos"
              className="inline-block rounded bg-teal-neon px-12 py-[18px] font-manrope text-xl font-extrabold tracking-[0.12em] text-black uppercase no-underline transition-all duration-300 ease-out hover:scale-105 hover:bg-teal-neon-bright hover:shadow-[0_0_0_1px_rgba(46,230,184,0.6),0_0_32px_rgba(46,230,184,0.6),0_0_72px_rgba(46,230,184,0.35)]"
            >
              Chama na DM
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
