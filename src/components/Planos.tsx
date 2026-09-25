import Reveal from './Reveal'

const WHATSAPP = 'https://wa.me/5511976348811'

const incluso = [
  'Diagnóstico completo do negócio',
  'Estratégia sob medida (Árvore de Metas)',
  'Execução simultânea de conteúdo e tráfego pago',
  'Monitoramento semanal com relatório real',
  'Otimização contínua a cada ciclo',
  'Plano de expansão quando a meta for batida',
]

const qualificacao = [
  'Faturamento mensal a partir de R$ 10.000 a R$ 30.000',
  'Orçamento de tráfego pago a partir de R$ 600/mês',
]

const investimentoFacts: { title: string; stat?: string; desc: string }[] = [
  {
    title: 'Por unidade/local',
    desc: 'O retainer cobre 1 endereço. Cada local adicional soma ao investimento.',
  },
  {
    title: 'Unidade adicional',
    stat: '+R$1.500–2.000',
    desc: '/mês por local extra',
  },
  {
    title: 'Contrato mínimo',
    stat: '4–6 meses',
    desc: 'Tempo pro Motor de Crescimento rodar um ciclo completo, do diagnóstico à otimização.',
  },
]

function Planos() {
  return (
    <section id="planos" className="relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 z-0 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(0, 255, 209,0.16), transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, rgba(0, 255, 209,0.06) 0 1px, transparent 1px 88px)',
          maskImage: 'linear-gradient(to bottom, transparent, #000 16%, #000 84%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 16%, #000 84%, transparent)',
        }}
      />

      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-[130px] pb-20 sm:px-10 sm:pt-[140px] sm:pb-22 lg:px-20 lg:pt-[160px] lg:pb-25">
        <Reveal
          as="span"
          className="inline-flex items-center gap-3 font-body text-sm font-medium tracking-[0.4em] text-mint uppercase"
        >
          <span className="block h-px w-7 bg-mint" />
          Investimento
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-4 font-display text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase lg:text-[54px]"
        >
          UM MODELO. RESULTADO MENSURÁVEL.
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mb-15 max-w-[700px] font-body text-lg leading-[1.6] text-gray-light text-pretty"
        >
          Sem pacotes genéricos. Um retainer com escopo completo, que cresce junto com o seu negócio.
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[60fr_40fr]">
          {/* RETAINER PRINCIPAL */}
          <Reveal
            anim="pop"
            className="flex flex-col rounded-xl border-2 border-mint p-9 sm:p-12"
            style={{
              background:
                'linear-gradient(160deg, rgba(0, 255, 209,0.1), rgba(0, 255, 209,0.03) 55%, #121415)',
            }}
          >
            <span className="font-body text-xs font-medium tracking-[0.26em] text-gray-light uppercase">
              Retainer base
            </span>
            <span
              className="mt-4.5 font-display uppercase text-4xl leading-[1.05] text-mint sm:text-[56px]"
              style={{ textShadow: '0 0 40px rgba(0, 255, 209,0.4)' }}
            >
              SOB CONSULTA
            </span>
            <span className="mt-2.5 font-body text-base text-gray-light">Mensal · 1 unidade/local</span>
            <span className="mt-2 font-body text-sm text-gray-light">Contrato mínimo: 4 a 6 meses</span>

            <span aria-hidden="true" className="my-8 block h-px bg-mint/25" />

            <span className="mb-4.5 font-body text-xs font-bold tracking-[0.24em] text-mint uppercase">
              O que está incluso
            </span>
            <ul className="mb-9 flex list-none flex-col gap-3 p-0">
              {incluso.map((item) => (
                <li key={item} className="flex gap-3 font-body text-base leading-[1.5] text-white sm:text-[17px]">
                  <span className="text-mint">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-auto inline-block self-start rounded-md bg-mint px-12 py-[18px] font-body text-[17px] font-extrabold tracking-[0.12em] text-black whitespace-nowrap uppercase no-underline transition-all duration-300 ease-out hover:scale-[1.04] hover:bg-mint hover:shadow-[0_0_40px_rgba(0, 255, 209,0.65),0_0_90px_rgba(0, 255, 209,0.35)]"
            >
              Agendar diagnóstico
            </a>
          </Reveal>

          {/* COMO O INVESTIMENTO FUNCIONA */}
          <Reveal
            anim="pop"
            delay={1}
            className="relative flex flex-col overflow-hidden rounded-xl border border-mint/30 p-7 transition-all duration-300 ease-out hover:border-mint sm:p-8"
            style={{
              background: 'linear-gradient(165deg, rgba(0, 255, 209,0.1), rgba(0, 255, 209,0.02) 55%, #121415)',
              boxShadow: '0 0 50px rgba(0, 255, 209,0.08)',
            }}
          >
            <span className="mb-7 inline-flex items-center gap-2.5 font-body text-xs font-bold tracking-[0.24em] text-mint uppercase">
              <svg width="26" height="26" viewBox="0 0 36 36" fill="none" stroke="#00FFD1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 14 L8 6 H28 L31 14" />
                <path d="M7 14 V30 H29 V14" />
                <path d="M18 21 V27" />
                <path d="M15 24 H21" />
              </svg>
              Como o investimento funciona
            </span>

            <div className="relative flex flex-col gap-6">
              <span
                aria-hidden="true"
                className="absolute top-1 bottom-1 left-[13.5px] w-px"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 255, 209,0.5), rgba(0, 255, 209,0.06))',
                }}
              />
              {investimentoFacts.map((f, i) => (
                <div key={f.title} className="relative flex gap-4">
                  <span className="relative z-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-mint/60 bg-[#121415] font-display uppercase text-[13px] text-mint">
                    {i + 1}
                  </span>
                  <div className="flex flex-1 flex-col gap-1 pt-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                      <span className="font-body text-base font-extrabold text-white">{f.title}</span>
                      {f.stat && (
                        <span
                          className="font-display uppercase text-xl leading-none whitespace-nowrap text-mint"
                          style={{ textShadow: '0 0 18px rgba(0, 255, 209,0.4)' }}
                        >
                          {f.stat}
                        </span>
                      )}
                    </div>
                    <span className="font-body text-sm leading-[1.55] text-gray-light">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <span aria-hidden="true" className="mt-7 mb-6 block h-px bg-mint/15" />
            <p className="font-accent text-base leading-[1.5] text-mint italic">
              Cada negócio parte de um ponto diferente — o investimento reflete isso.
            </p>
          </Reveal>
        </div>

        {/* QUALIFICAÇÃO */}
        <Reveal
          anim="fade"
          className="mt-15 rounded-xl border border-white/8 bg-white/3 p-8 sm:p-10"
        >
          <span className="inline-flex items-center gap-3 font-body text-sm font-medium tracking-[0.4em] text-mint uppercase">
            <span className="block h-px w-7 bg-mint" />
            Critérios de qualificação
          </span>
          <h3 className="mt-4.5 mb-6 font-body text-xl font-extrabold text-white sm:text-2xl">
            Trabalhamos com negócios prontos para escalar.
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-10">
            {qualificacao.map((item) => (
              <span key={item} className="flex gap-3 font-body text-base leading-[1.5] text-white sm:text-[17px]">
                <span className="text-mint">✓</span>
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6.5 font-body text-sm leading-[1.6] text-gray-light italic lg:text-base">
            Esse filtro existe para garantir que só entramos em parceria com negócios prontos para o método
            funcionar de verdade.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Planos
