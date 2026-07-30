import Reveal from './Reveal'

const WHATSAPP = 'https://wa.me/5511991437244'

const essencialIncluso = [
  '8 a 12 posts por mês',
  'Gestão básica do Instagram',
  'Stories estratégicos',
  'Organização visual do feed',
  'Legendas objetivas',
  'Agendamento de posts',
  'Relatório mensal simples',
  'Suporte básico',
]

const essencialNaoIncluso = [
  'Tráfego pago (anúncios)',
  'Estratégia de vendas',
  'Produção de vídeos profissionais',
  'Captação presencial',
  'Monitoramento ou ajustes estratégicos',
]

const crescimentoIncluso = [
  '10 a 15 posts por mês',
  'Gestão completa do Instagram',
  'Tráfego pago — gestão básica',
  'Segmentação local',
  'Stories estratégicos',
  'Legendas persuasivas',
  'Criação de anúncios',
  'Captação e Reels (limitados)',
  'Relatório mensal',
  'Suporte prioritário',
]

const performanceIncluso = [
  '15 a 25 posts por mês',
  'Gestão completa do Instagram',
  'Planejamento estratégico mensal',
  'Captação presencial recorrente',
  'Testes A/B e segmentação avançada',
  'Stories diários estratégicos',
  'Monitoramento diário de anúncios',
  'Reels profissionais contínuos',
  'Meta Ads — gestão completa',
  'Estratégia de vendas e campanhas',
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
          Planos
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-4 font-anton text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase lg:text-[54px]"
        >
          ESCOLHA SEU PLANO
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mb-15 max-w-[700px] font-manrope text-lg leading-[1.6] text-gray-light text-pretty"
        >
          O plano ideal depende do momento e do objetivo do seu negócio — o investimento é definido na
          reunião de diagnóstico.
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-3">
          {/* ESSENCIAL */}
          <Reveal anim="pop" className="flex h-full flex-col rounded-lg border border-teal-neon/15 bg-[#0A0A0A] p-10">
            <span className="font-manrope text-xs font-medium tracking-[0.24em] text-gray-light uppercase">
              Presença digital
            </span>
            <h3 className="mt-3.5 mb-5 font-manrope text-[28px] font-extrabold tracking-[0.02em] text-white uppercase">
              Essencial
            </h3>
            <span
              className="font-anton text-4xl leading-[1.05] text-teal-neon"
              style={{ textShadow: '0 0 30px rgba(46,230,184,0.3)' }}
            >
              SOB CONSULTA
            </span>
            <span className="mt-2 font-manrope text-sm text-gray-light">Mensal · contrato mínimo 2 meses</span>
            <span aria-hidden="true" className="my-7 block h-px bg-white/10" />

            <span className="mb-3.5 font-manrope text-xs font-bold tracking-[0.24em] text-teal-neon uppercase">
              Incluso
            </span>
            <ul className="mb-6.5 flex list-none flex-col gap-2.5 p-0">
              {essencialIncluso.map((item) => (
                <li key={item} className="flex gap-2.5 font-manrope text-[15px] leading-[1.5] text-white">
                  <span className="text-teal-neon">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <span className="mb-3.5 font-manrope text-xs font-bold tracking-[0.24em] text-[#666666] uppercase">
              Não incluso
            </span>
            <ul className="mb-6.5 flex list-none flex-col gap-2 p-0">
              {essencialNaoIncluso.map((item) => (
                <li key={item} className="flex gap-2.5 font-manrope text-sm leading-[1.5] text-[#777777]">
                  <span className="text-[#4a4a4a]">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-7 font-manrope text-sm leading-[1.6] text-gray-light italic text-pretty">
              Para quem é: negócios que querem manter presença profissional no Instagram com constância, sem
              foco direto em vendas imediatas.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-auto block rounded-md border border-teal-neon bg-transparent px-8 py-[15px] text-center font-manrope text-[15px] font-bold tracking-[0.14em] text-teal-neon uppercase no-underline transition-all duration-300 ease-out hover:bg-teal-neon hover:text-black hover:shadow-[0_0_28px_rgba(46,230,184,0.4)]"
            >
              Solicitar proposta
            </a>
          </Reveal>

          {/* CRESCIMENTO — destaque */}
          <Reveal
            anim="pop"
            delay={1}
            className="flex h-full flex-col rounded-lg border-2 border-teal-neon p-12 shadow-[0_18px_60px_rgba(46,230,184,0.16)]"
            style={{
              background:
                'linear-gradient(160deg, rgba(46,230,184,0.1), rgba(46,230,184,0.03) 60%, rgba(10,10,10,1))',
            }}
          >
            <span className="self-start rounded-full bg-teal-neon px-4 py-1.5 font-manrope text-xs font-extrabold tracking-[0.18em] text-black uppercase">
              ✦ Mais contratado ✦
            </span>
            <h3 className="mt-4.5 mb-5 font-manrope text-[32px] font-extrabold tracking-[0.02em] text-white uppercase">
              Crescimento
            </h3>
            <span
              className="font-anton text-[46px] leading-[1.05] text-teal-neon"
              style={{ textShadow: '0 0 36px rgba(46,230,184,0.45)' }}
            >
              SOB CONSULTA
            </span>
            <span className="mt-2 font-manrope text-sm text-gray-light">Mensal · contrato mínimo 3 meses</span>
            <span aria-hidden="true" className="my-7 block h-px bg-teal-neon/25" />

            <span className="mb-3.5 font-manrope text-xs font-bold tracking-[0.24em] text-teal-neon uppercase">
              Incluso
            </span>
            <ul className="mb-8 flex list-none flex-col gap-2.5 p-0">
              {crescimentoIncluso.map((item) => (
                <li key={item} className="flex gap-2.5 font-manrope text-base leading-[1.5] text-white">
                  <span className="text-teal-neon">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-8 font-manrope text-[15px] leading-[1.6] text-gray-light italic text-pretty">
              Para quem é: empresas que querem crescer, ganhar visibilidade e iniciar conversões reais com
              tráfego pago.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-auto block rounded-md border border-teal-neon bg-teal-neon px-10 py-5 text-center font-manrope text-[17px] font-extrabold tracking-[0.14em] text-black uppercase no-underline transition-all duration-300 ease-out hover:scale-[1.04] hover:bg-teal-neon-bright hover:shadow-[0_0_40px_rgba(46,230,184,0.65),0_0_90px_rgba(46,230,184,0.35)]"
            >
              Falar com a STRYVE
            </a>
          </Reveal>

          {/* PERFORMANCE */}
          <Reveal anim="pop" delay={2} className="flex h-full flex-col rounded-lg border border-teal-neon/15 bg-[#0A0A0A] p-10">
            <span className="font-manrope text-xs font-medium tracking-[0.24em] text-gray-light uppercase">
              Escala &amp; resultados
            </span>
            <h3 className="mt-3.5 mb-5 font-manrope text-[28px] font-extrabold tracking-[0.02em] text-white uppercase">
              Performance
            </h3>
            <span
              className="font-anton text-4xl leading-[1.05] text-teal-neon"
              style={{ textShadow: '0 0 30px rgba(46,230,184,0.3)' }}
            >
              SOB CONSULTA
            </span>
            <span className="mt-2 font-manrope text-sm text-gray-light">Mensal · contrato mínimo 3 meses</span>
            <span aria-hidden="true" className="my-7 block h-px bg-white/10" />

            <span className="mb-3.5 font-manrope text-xs font-bold tracking-[0.24em] text-teal-neon uppercase">
              Pacote completo
            </span>
            <ul className="mb-6.5 flex list-none flex-col gap-2.5 p-0">
              {performanceIncluso.map((item) => (
                <li key={item} className="flex gap-2.5 font-manrope text-[15px] leading-[1.5] text-white">
                  <span className="text-teal-neon">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-7 font-manrope text-sm leading-[1.6] text-gray-light italic text-pretty">
              Para quem é: empresas que buscam crescimento previsível, escala e foco total em performance e
              ROI.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-auto block rounded-md border border-teal-neon bg-transparent px-8 py-[15px] text-center font-manrope text-[15px] font-bold tracking-[0.14em] text-teal-neon uppercase no-underline transition-all duration-300 ease-out hover:bg-teal-neon hover:text-black hover:shadow-[0_0_28px_rgba(46,230,184,0.4)]"
            >
              Solicitar proposta
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Planos
