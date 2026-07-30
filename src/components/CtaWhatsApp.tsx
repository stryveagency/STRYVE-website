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
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.88) 100%)',
        }}
      />

      <div className="relative z-1 mx-auto flex w-full max-w-[1560px] justify-center px-6 py-20 sm:px-10 sm:py-24 lg:justify-end lg:px-20 lg:py-28">
        <Reveal anim="pop" className="max-w-[520px] text-center lg:text-right">
          <h2 className="m-0 font-anton text-[32px] leading-[1.1] tracking-[0.01em] text-white uppercase lg:text-[40px]">
            PRONTO PARA CRESCER?
          </h2>
          <p className="mx-auto mt-4.5 max-w-[500px] font-manrope text-[17px] leading-[1.6] text-gray-light text-pretty lg:mx-0">
            O seu próximo passo é uma conversa. Não cobramos pela reunião de diagnóstico — só pelo resultado.
          </p>
          <div className="mt-8 flex justify-center lg:justify-end">
            <a
              href="https://wa.me/5511991437244"
              target="_blank"
              rel="noopener"
              className="inline-flex w-max flex-shrink-0 items-center justify-center gap-3 rounded-md bg-teal-neon px-12 py-[18px] font-manrope text-[17px] font-extrabold tracking-[0.12em] text-black uppercase no-underline [animation:stryve-btn-pulse_2.8s_ease-in-out_infinite] transition-all duration-300 ease-out hover:scale-105 hover:bg-teal-neon-bright"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
