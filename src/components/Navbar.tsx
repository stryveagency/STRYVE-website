const links = [
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#metodo', label: 'Método' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#planos', label: 'Planos' },
]

function Navbar() {
  return (
    <header
      className="reveal-up fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between gap-8 border-b border-white/6 bg-black/55 px-6 py-[18px] backdrop-blur-[14px] lg:px-16 lg:py-[22px]"
      style={{ animationDelay: '0s' }}
    >
      <a href="#hero" className="flex items-center gap-3 no-underline">
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-teal-neon/60 font-playfair text-base leading-none text-teal-neon italic shadow-[0_0_14px_rgba(46,230,184,0.3)]">
          S
        </span>
        <span className="font-manrope text-xl leading-none font-light tracking-[0.26em] text-white">
          STRYVE
        </span>
      </a>

      <nav className="hidden items-center gap-9 lg:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-manrope text-[13px] font-medium tracking-[0.16em] text-gray-light uppercase no-underline transition-colors duration-250 ease-out hover:text-teal-neon"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="https://wa.me/5511991437244"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2.5 rounded border border-teal-neon/55 bg-teal-neon/6 px-[22px] py-[11px] font-manrope text-[13px] font-bold tracking-[0.12em] text-teal-neon whitespace-nowrap uppercase no-underline transition-all duration-300 ease-out hover:bg-teal-neon hover:text-black hover:shadow-[0_0_26px_rgba(46,230,184,0.45)]"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
        </svg>
        WhatsApp
      </a>
    </header>
  )
}

export default Navbar
