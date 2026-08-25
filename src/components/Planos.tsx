import Reveal from './Reveal'

const WHATSAPP = 'https://wa.me/5511991437244'

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

function Planos() {
  return (
    <section id="planos" className="relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, rgba(46,230,184,0.06) 0 1px, transparent 1px 88px)',
          maskImage: 'linear-gradient(to bottom, transparent, #000 16%, #000 84%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 16%, #000 84%, transparent)',
        }}
      />

      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-[130px] pb-20 sm:px-10 sm:pt-[140px] sm:pb-22 lg:px-20 lg:pt-[160px] lg:pb-25">
        <Reveal
          as="span"
          className="inline-flex items-center gap-3 font-manrope text-sm font-medium tracking-[0.4em] text-teal-neon uppercase"
        >
          <span className="block h-px w-7 bg-teal-neon" />
          Investimento
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-4 font-anton text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase lg:text-[54px]"
        >
          UM MODELO. RESULTADO MENSURÁVEL.
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mb-15 max-w-[700px] font-manrope text-lg leading-[1.6] text-gray-light text-pretty"
        >
          Sem pacotes genéricos. Um retainer com escopo completo, que cresce junto com o seu negócio.
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-[60fr_40fr]">
          {/* RETAINER PRINCIPAL */}
          <Reveal
            anim="pop"
            className="flex flex-col rounded-xl border-2 border-teal-neon p-9 sm:p-12"
            style={{
              background:
                'linear-gradient(160deg, rgba(46,230,184,0.1), rgba(46,230,184,0.03) 55%, #0A0A0A)',
            }}
          >
            <span className="font-manrope text-xs font-medium tracking-[0.26em] text-gray-light uppercase">
              Retainer base
            </span>
            <span
              className="mt-4.5 font-anton text-4xl leading-[1.05] text-teal-neon sm:text-[56px]"
              style={{ textShadow: '0 0 40px rgba(46,230,184,0.4)' }}
            >
              SOB CONSULTA
            </span>
            <span className="mt-2.5 font-manrope text-base text-gray-light">Mensal · 1 unidade/local</span>
            <span className="mt-2 font-manrope text-sm text-gray-light">Contrato mínimo: 4 a 6 meses</span>

            <span aria-hidden="true" className="my-8 block h-px bg-teal-neon/25" />

            <span className="mb-4.5 font-manrope text-xs font-bold tracking-[0.24em] text-teal-neon uppercase">
              O que está incluso
            </span>
            <ul className="mb-9 flex list-none flex-col gap-3 p-0">
              {incluso.map((item) => (
                <li key={item} className="flex gap-3 font-manrope text-base leading-[1.5] text-white sm:text-[17px]">
                  <span className="text-teal-neon">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-auto inline-block self-start rounded-md bg-teal-neon px-12 py-[18px] font-manrope text-[17px] font-extrabold tracking-[0.12em] text-black whitespace-nowrap uppercase no-underline transition-all duration-300 ease-out hover:scale-[1.04] hover:bg-teal-neon-bright hover:shadow-[0_0_40px_rgba(46,230,184,0.65),0_0_90px_rgba(46,230,184,0.35)]"
            >
              Agendar diagnóstico
            </a>
          </Reveal>

          {/* COMPLEMENTOS */}
          <div className="flex flex-col gap-7">
            <Reveal
              anim="pop"
              delay={1}
              className="flex flex-col gap-3.5 rounded-lg border border-teal-neon/15 bg-[#0A0A0A] p-6 transition-all duration-300 ease-out hover:border-teal-neon hover:shadow-[0_12px_40px_rgba(46,230,184,0.14)]"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2EE6B8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 14 L8 6 H28 L31 14" />
                <path d="M7 14 V30 H29 V14" />
                <path d="M18 21 V27" />
                <path d="M15 24 H21" />
              </svg>
              <h3 className="m-0 font-manrope text-lg font-extrabold tracking-[0.04em] text-white uppercase">
                Unidade adicional
              </h3>
              <span className="font-anton text-[26px] leading-[1.1] text-teal-neon">+ R$ 1.500 a R$ 2.000</span>
              <span className="font-manrope text-sm text-gray-light">/mês por local extra</span>
            </Reveal>
          </div>
        </div>

        {/* QUALIFICAÇÃO */}
        <Reveal
          anim="fade"
          className="mt-15 rounded-xl border border-white/8 bg-white/3 p-8 sm:p-10"
        >
          <span className="inline-flex items-center gap-3 font-manrope text-sm font-medium tracking-[0.4em] text-teal-neon uppercase">
            <span className="block h-px w-7 bg-teal-neon" />
            Critérios de qualificação
          </span>
          <h3 className="mt-4.5 mb-6 font-manrope text-xl font-extrabold text-white sm:text-2xl">
            Trabalhamos com negócios prontos para escalar.
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-10">
            {qualificacao.map((item) => (
              <span key={item} className="flex gap-3 font-manrope text-base leading-[1.5] text-white sm:text-[17px]">
                <span className="text-teal-neon">✓</span>
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6.5 font-manrope text-sm leading-[1.6] text-gray-light italic lg:text-base">
            Esse filtro existe para garantir que só entramos em parceria com negócios prontos para o método
            funcionar de verdade.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Planos
