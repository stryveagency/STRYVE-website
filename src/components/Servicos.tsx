import Reveal from './Reveal'

const services = [
  {
    tag: 'PAGO',
    label: 'Tráfego Pago',
    id: 'trafego_pago',
    desc: 'Campanhas Meta Ads e Google Ads com segmentação precisa, testes A/B e otimização semanal para maximizar ROI.',
    stat: '1 campanha por objetivo · 3 criativos em teste A/B simultâneo',
  },
  {
    tag: 'ORGÂNICO',
    label: 'Social Media',
    id: 'social_media',
    desc: 'Gestão completa de Instagram: planejamento, criação de conteúdo, Reels, Stories, legendas persuasivas, calendário estratégico.',
    stat: '4 pilares de conteúdo · autoridade, prova social, bastidores e conversão',
  },
  {
    tag: 'ENTREGA',
    label: 'Landing Pages',
    id: 'landing_pages',
    desc: 'Páginas de captura otimizadas para conversão. Design, copywriting e performance orientados a CTA.',
    stat: 'Pixel da Meta + GA4 · rastreamento e SEO técnico no lançamento',
  },
  {
    tag: 'DIAGNÓSTICO',
    label: 'Estratégia Digital',
    id: 'estrategia_digital',
    desc: 'Diagnóstico 360° do negócio, posicionamento, definição de público, plano estratégico mensal.',
    stat: 'Diagnóstico completo · antes de qualquer execução',
  },
  {
    tag: 'PRODUÇÃO',
    label: 'Conteúdo & Criativos',
    id: 'conteudo_criativos',
    desc: 'Produção de criativos de alta qualidade para anúncios, redes sociais e materiais de campanha.',
    stat: 'Roteiro, edição e arte · alinhados à identidade da marca',
  },
  {
    tag: 'DADOS',
    label: 'Relatórios & Insights',
    id: 'relatorios_insights',
    desc: 'Monitoramento semanal com métricas reais, análise de conversões, próximos passos baseados em dados.',
    stat: 'Toda sexta-feira · revisão fixa de métricas',
  },
]

function Servicos() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 z-0 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(46,230,184,0.16), transparent 70%)' }}
      />
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

        <Reveal
          anim="pop"
          className="overflow-hidden rounded-xl border border-teal-neon/25 bg-[#060706]"
          style={{ boxShadow: '0 0 60px rgba(46,230,184,0.06)' }}
        >
          <div className="flex items-center gap-2 border-b border-white/8 bg-white/2 px-6 py-4 sm:px-8">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 truncate font-mono text-[12px] text-gray-light sm:text-[13px]">
              stryve@sistema:~$ ./servicos.sh --list
            </span>
            <span className="ml-auto hidden shrink-0 font-mono text-[12px] text-teal-neon/70 sm:inline">
              6 processos
            </span>
          </div>

          <div className="flex flex-col">
            {services.map((service, i) => (
              <Reveal
                key={service.id}
                delay={i}
                className={`group px-6 py-7 transition-colors duration-300 ease-out hover:bg-teal-neon/[0.03] sm:px-8 ${
                  i < services.length - 1 ? 'border-b border-dashed border-white/8' : ''
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-lg leading-none text-teal-neon">&gt;</span>
                    <div className="flex flex-col gap-1">
                      <h3
                        className="m-0 font-anton text-2xl leading-[1.05] tracking-[0.01em] text-white uppercase sm:text-[28px]"
                        style={{ textShadow: '0 0 22px rgba(46,230,184,0.15)' }}
                      >
                        {service.label}
                      </h3>
                      <span className="font-mono text-[11px] text-gray-light/45">{service.id}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.1em] text-teal-neon/80 sm:text-xs">
                    [{service.tag}]
                  </span>
                </div>
                <p className="m-0 mt-4 max-w-[640px] pl-7 font-manrope text-[15px] leading-[1.6] text-gray-light text-pretty sm:text-base">
                  {service.desc}
                </p>
                <p className="m-0 mt-3 pl-7 font-mono text-[12px] leading-[1.6] text-teal-neon/85 sm:text-[13px]">
                  $ {service.stat}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-white/8 bg-white/2 px-6 py-4 sm:px-8">
            <span className="font-mono text-[13px] text-gray-light">stryve@sistema:~$</span>
            <span
              aria-hidden="true"
              className="inline-block h-4 w-2 bg-teal-neon"
              style={{ animation: 'stryve-cursor-blink 1.1s step-end infinite' }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Servicos
