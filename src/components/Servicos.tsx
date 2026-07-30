import Reveal from './Reveal'

const services = [
  {
    title: 'Tráfego Pago',
    desc: 'Campanhas Meta Ads e Google Ads com segmentação precisa, testes A/B e otimização semanal para maximizar ROI.',
    statTitle: '1 campanha por objetivo',
    statCaption: '3 criativos em teste A/B simultâneo',
    icon: (
      <>
        <path d="M7 33 L17 22 L24 28 L37 13" />
        <path d="M28 13 H37 V22" />
      </>
    ),
  },
  {
    title: 'Social Media',
    desc: 'Gestão completa de Instagram: planejamento, criação de conteúdo, Reels, Stories, legendas persuasivas, calendário estratégico.',
    statTitle: '3x por semana',
    statCaption: 'cadência fixa de publicação',
    icon: (
      <>
        <rect x="6" y="12" width="24" height="20" rx="4" />
        <path d="M30 20 L38 15 V29 L30 24 Z" />
      </>
    ),
  },
  {
    title: 'Landing Pages',
    desc: 'Páginas de captura otimizadas para conversão. Design, copywriting e performance orientados a CTA.',
    statTitle: 'Pixel da Meta + GA4',
    statCaption: 'rastreamento e SEO técnico configurados no lançamento',
    icon: (
      <>
        <rect x="6" y="8" width="32" height="22" rx="3" />
        <path d="M18 36 H26" />
        <path d="M22 30 V36" />
        <path d="M20 16 L28 20 L24 21.6 L22.4 25.6 Z" fill="#2EE6B8" stroke="none" />
      </>
    ),
  },
  {
    title: 'Estratégia Digital',
    desc: 'Diagnóstico 360° do negócio, posicionamento, definição de público, plano estratégico mensal.',
    statTitle: 'Diagnóstico completo',
    statCaption: 'antes de qualquer execução',
    icon: (
      <>
        <circle cx="22" cy="22" r="15" />
        <circle cx="22" cy="22" r="8" />
        <circle cx="22" cy="22" r="2" fill="#2EE6B8" stroke="none" />
      </>
    ),
  },
  {
    title: 'Conteúdo & Criativos',
    desc: 'Produção de criativos de alta qualidade para anúncios, redes sociais e materiais de campanha.',
    statTitle: '35% autoridade · 25% prova social\n20% bastidores · 20% conversão',
    statCaption: 'distribuição do calendário de conteúdo',
    icon: (
      <>
        <path d="M22 7 L37 15 L22 23 L7 15 Z" />
        <path d="M7 22 L22 30 L37 22" />
        <path d="M7 29 L22 37 L37 29" />
      </>
    ),
  },
  {
    title: 'Relatórios & Insights',
    desc: 'Monitoramento semanal com métricas reais, análise de conversões, próximos passos baseados em dados.',
    statTitle: 'Toda sexta-feira',
    statCaption: 'revisão fixa de métricas',
    icon: (
      <>
        <path d="M7 36 H37" />
        <rect x="10" y="24" width="6" height="10" />
        <rect x="20" y="17" width="6" height="17" />
        <rect x="30" y="10" width="6" height="24" />
      </>
    ),
  },
]

function Servicos() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, rgba(46,230,184,0.06) 0 1px, transparent 1px 88px)',
          maskImage: 'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)',
        }}
      />

      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-[120px] pb-20 sm:px-10 sm:pt-[132px] sm:pb-22 lg:px-20 lg:pt-[160px] lg:pb-25">
        <Reveal
          as="span"
          className="inline-flex items-center gap-3 font-manrope text-sm font-medium tracking-[0.4em] text-teal-neon uppercase"
        >
          <span className="block h-px w-7 bg-teal-neon" />
          Serviços
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-15 max-w-[900px] font-anton text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase text-balance lg:text-[54px]"
        >
          O QUE A GENTE FAZ NA PRÁTICA
        </Reveal>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              anim="pop"
              delay={i}
              className="group flex flex-col gap-5 rounded-lg border border-teal-neon/15 bg-[#0A0A0A] p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-teal-neon hover:bg-[#0C110F] hover:shadow-[0_12px_44px_rgba(46,230,184,0.16)]"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                stroke="#2EE6B8"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {service.icon}
              </svg>
              <h3 className="m-0 font-manrope text-xl font-extrabold tracking-[0.04em] text-white uppercase">
                {service.title}
              </h3>
              <p className="m-0 font-manrope text-base leading-[1.6] text-gray-light text-pretty">
                {service.desc}
              </p>
              <span aria-hidden="true" className="mt-1 block h-px bg-teal-neon/15" />
              <div className="flex flex-col gap-1">
                <span className="font-manrope text-xl leading-[1.35] font-extrabold whitespace-pre-line text-teal-neon">
                  {service.statTitle}
                </span>
                <span className="font-manrope text-[13px] leading-[1.5] text-gray-light">
                  {service.statCaption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos
