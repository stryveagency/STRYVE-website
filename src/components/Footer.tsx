const navLinks = [
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#metodo', label: 'Método' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#planos', label: 'Planos' },
]

function Footer() {
  return (
    <footer className="relative z-2 border-t border-white/8 bg-[#050505]">
      <div className="mx-auto w-full max-w-[1560px] px-6 py-12 sm:px-10 sm:py-14 lg:px-20 lg:py-15">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="flex flex-col">
            <a href="#hero" className="flex items-center gap-3 no-underline">
              <img src="/images/logo-stryve.png" alt="STRYVE" style={{ height: '50px', width: 'auto' }} />
              <span className="font-manrope text-2xl leading-none font-light tracking-[0.26em] text-white">
                STRYVE
              </span>
            </a>
            <p className="mt-4 max-w-[240px] font-playfair text-base leading-[1.5] text-teal-neon italic">
              Crescimento não é sorte. É processo.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="mb-4 font-manrope text-xs font-medium tracking-[0.26em] text-gray-light uppercase">
              Contato
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5511991437244"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 font-manrope text-[15px] text-white no-underline transition-colors duration-200 ease-out hover:text-teal-neon"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
                </svg>
                WhatsApp: 11 99143-7244
              </a>
              <a
                href="mailto:stryve.agency01@gmail.com"
                className="inline-flex items-center gap-2.5 font-manrope text-[15px] text-white no-underline transition-colors duration-200 ease-out hover:text-teal-neon"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2.5" y="5" width="19" height="14" rx="2" />
                  <path d="M3 6.5 12 13l9-6.5" />
                </svg>
                stryve.agency01@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="mb-4 font-manrope text-xs font-medium tracking-[0.26em] text-gray-light uppercase">
              Redes sociais
            </span>
            <a
              href="https://instagram.com/stryve_ag"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 font-manrope text-[15px] text-white no-underline transition-colors duration-200 ease-out hover:text-teal-neon"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram: @stryve_ag
            </a>
            <div className="mt-4.5 flex gap-3">
              <a
                href="https://instagram.com/stryve_ag"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-teal-neon/45 text-teal-neon transition-all duration-250 ease-out hover:bg-teal-neon hover:text-black hover:shadow-[0_0_20px_rgba(46,230,184,0.4)]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://wa.me/5511991437244"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-teal-neon/45 text-teal-neon transition-all duration-250 ease-out hover:bg-teal-neon hover:text-black hover:shadow-[0_0_20px_rgba(46,230,184,0.4)]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="mb-4 font-manrope text-xs font-medium tracking-[0.26em] text-gray-light uppercase">
              Navegação
            </span>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-manrope text-[15px] text-gray-light no-underline transition-colors duration-200 ease-out hover:text-teal-neon"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6 text-center sm:text-left">
          <span className="font-manrope text-xs text-[#666666]">© 2025 STRYVE. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
