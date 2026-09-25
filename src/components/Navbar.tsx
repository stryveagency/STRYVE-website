import { useEffect, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { href: '/#metodo', label: 'Motor de Crescimento' },
  { href: '/servicos', label: 'Serviços' },
]

const metodoSubLinks = [
  { href: '/#trafego', label: 'Tráfego Pago' },
  { href: '/#conteudo', label: 'Conteúdo' },
]

const afterMetodoLinks = [
  { href: '/#resultados', label: 'Resultados' },
  { href: '/#planos', label: 'Planos' },
]

const sectionIds = ['servicos', 'metodo', 'trafego', 'conteudo', 'resultados', 'planos']

function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return active
}

// Links "/#secao" apontam para seções da Home; os demais são rotas do React Router.
function NavItem({
  href,
  className,
  onClick,
  children,
}: {
  href: string
  className: string
  onClick?: () => void
  children: ReactNode
}) {
  if (href.startsWith('/#')) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={href} onClick={onClick} className={className}>
      {children}
    </Link>
  )
}

function navLinkClass(isActive: boolean) {
  return `font-body text-[13px] font-medium tracking-[0.16em] uppercase no-underline transition-colors duration-250 ease-out ${
    isActive ? 'text-mint' : 'text-gray-light hover:text-mint'
  }`
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [metodoOpen, setMetodoOpen] = useState(false)
  const section = useActiveSection()
  const { pathname } = useLocation()
  const active = pathname === '/' ? section : ''
  const isActive = (href: string) => (href.startsWith('/#') ? active === href.slice(2) : pathname === href)
  const metodoActive = active === 'metodo' || active === 'trafego' || active === 'conteudo'

  const closeMobile = () => {
    setMobileOpen(false)
    setMetodoOpen(false)
  }

  return (
    <header
      className="reveal-up fixed inset-x-0 top-0 z-50 w-full border-b border-white/6 bg-black/55 backdrop-blur-[14px]"
      style={{ animationDelay: '0s' }}
    >
      <div className="flex w-full items-center justify-between gap-8 px-6 py-[18px] lg:px-16 lg:py-[22px]">
        <a href="/#hero" onClick={closeMobile} className="flex items-center gap-3 no-underline">
          <img src="/images/logo-stryve.png" alt="STRYVE" style={{ height: '45px', width: 'auto' }} />
          <span className="font-body text-xl leading-none font-light tracking-[0.26em] text-white">
            STRYVE
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href} className={navLinkClass(isActive(link.href))}>
              {link.label}
            </NavItem>
          ))}

          <div className="group relative flex items-center self-stretch px-0.5">
            <a href="/#metodo" className={`inline-flex items-center gap-1.5 ${navLinkClass(metodoActive)}`}>
              Método
              <span aria-hidden="true" className="text-[10px] leading-none">
                ▾
              </span>
            </a>

            <div
              className="invisible absolute top-full left-0 z-[60] mt-3 min-w-[210px] scale-95 rounded-lg border border-mint/28 bg-[#121415] p-2 opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_22px_rgba(0, 255, 209,0.14)] transition-all duration-200 ease-out group-hover:visible group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:scale-100 group-focus-within:opacity-100"
            >
              <span aria-hidden="true" className="absolute inset-x-0 -top-3 h-3" />
              {metodoSubLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-4 py-2.5 font-body text-sm text-white no-underline transition-colors duration-200 ease-out hover:bg-mint/8 hover:text-mint"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {afterMetodoLinks.map((link) => (
            <NavItem key={link.href} href={link.href} className={navLinkClass(isActive(link.href))}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-mint/40 text-mint lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {mobileOpen ? <path d="M5 5 L19 19 M19 5 L5 19" /> : <path d="M4 6 H20 M4 12 H20 M4 18 H20" />}
            </svg>
          </button>

          <a
            href="https://wa.me/5511976348811"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded border border-mint/55 bg-mint/6 px-[22px] py-[11px] font-body text-[13px] font-bold tracking-[0.12em] text-mint whitespace-nowrap uppercase no-underline transition-all duration-300 ease-out hover:bg-mint hover:text-black hover:shadow-[0_0_26px_rgba(0, 255, 209,0.45)]"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div className="flex flex-col gap-1 border-t border-white/6 bg-[#121415] px-6 pt-2 pb-5 lg:hidden">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="py-3 font-body text-sm font-medium tracking-[0.14em] text-gray-light uppercase no-underline transition-colors duration-200 ease-out hover:text-mint"
            >
              {link.label}
            </NavItem>
          ))}

          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <a
                href="/#metodo"
                onClick={closeMobile}
                className="flex-1 py-3 font-body text-sm font-medium tracking-[0.14em] text-gray-light uppercase no-underline transition-colors duration-200 ease-out hover:text-mint"
              >
                Método
              </a>
              <button
                type="button"
                aria-label={metodoOpen ? 'Recolher submenu Método' : 'Expandir submenu Método'}
                aria-expanded={metodoOpen}
                onClick={() => setMetodoOpen((v) => !v)}
                className="p-3 text-mint"
              >
                <span
                  aria-hidden="true"
                  className={`inline-block text-xs transition-transform duration-200 ${metodoOpen ? 'rotate-180' : ''}`}
                >
                  ▾
                </span>
              </button>
            </div>

            {metodoOpen && (
              <div className="flex flex-col gap-1 pb-2 pl-3">
                {metodoSubLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="rounded-md px-3 py-2.5 font-body text-sm text-white no-underline transition-colors duration-200 ease-out hover:bg-mint/8 hover:text-mint"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {afterMetodoLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="py-3 font-body text-sm font-medium tracking-[0.14em] text-gray-light uppercase no-underline transition-colors duration-200 ease-out hover:text-mint"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
