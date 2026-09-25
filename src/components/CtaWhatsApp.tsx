import Reveal from './Reveal'

function CtaWhatsApp() {
  return (
    <section
      className="relative overflow-hidden bg-black"
      style={{
        backgroundImage: 'url(/images/cta-bg.png)',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      <div className="relative z-1 mx-auto flex w-full max-w-[1560px] justify-center px-6 py-16 sm:px-10 sm:py-20 lg:justify-end lg:px-20 lg:py-24">
        <Reveal anim="pop" className="max-w-[560px] text-center lg:text-right">
          <h2
            className="m-0 font-anton text-[36px] leading-[1.1] font-black tracking-[0.01em] text-white uppercase sm:text-[44px] lg:text-[56px]"
            style={{ textShadow: '0 0 20px rgba(46,230,184,0.4)' }}
          >
            PRONTO PARA CRESCER?
          </h2>
          <p className="mx-auto mt-5 max-w-[500px] font-manrope text-lg leading-[1.6] text-gray-light text-pretty sm:text-xl lg:mx-0 lg:text-[22px]">
            O seu próximo passo é uma conversa. Não cobramos pela reunião de diagnóstico — só pelo resultado.
          </p>
          <div className="mt-10 flex justify-center lg:justify-end">
            <a
              href="https://wa.me/5511976348811"
              target="_blank"
              rel="noopener"
              className="inline-flex w-max flex-shrink-0 items-center justify-center gap-3 rounded-md bg-teal-neon px-[50px] py-5 font-manrope text-lg font-extrabold tracking-[0.12em] text-black uppercase no-underline shadow-[0_0_40px_rgba(46,230,184,0.6)] [animation:stryve-btn-pulse_2.8s_ease-in-out_infinite] transition-all duration-300 ease-out hover:scale-[1.08] hover:bg-teal-neon-bright hover:shadow-[0_0_60px_rgba(46,230,184,0.85)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
              </svg>
              Chama no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CtaWhatsApp
