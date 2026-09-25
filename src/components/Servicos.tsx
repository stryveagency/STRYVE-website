import Reveal from './Reveal'

const services = [
  {
    tag: 'ORGÂNICO',
    label: 'Gestão de Redes Sociais',
    id: 'gestao_redes_sociais',
    desc: 'Gestão completa dos perfis da marca, do planejamento à publicação, com conteúdo pensado para gerar autoridade e aproximar o público do negócio.',
    items: ['Planejamento e calendário editorial', 'Posts, carrosséis e Reels', 'Stories', 'Legendas e copy', 'Análise de desempenho'],
  },
  {
    tag: 'PAGO',
    label: 'Gestão de Tráfego Pago',
    id: 'gestao_trafego_pago',
    desc: 'Campanhas no Meta Ads e no Google Ads para colocar a sua oferta na frente de quem tem mais chance de comprar.',
    items: [
      'Estrutura e estratégia de campanhas',
      'Segmentação de público',
      'Criativos e testes A/B',
      'Pixel e rastreamento de conversões',
      'Otimização contínua',
      'Relatórios de resultado',
    ],
  },
  {
    tag: 'SISTEMAS',
    label: 'Sistemas Personalizados',
    id: 'sistemas_personalizados',
    desc: 'Sistemas feitos sob medida para a rotina da sua empresa, quando as ferramentas prontas não resolvem.',
    items: [
      'Levantamento do processo',
      'Painéis administrativos',
      'Cadastros, controles e relatórios internos',
      'Integração com outras ferramentas',
    ],
  },
  {
    tag: 'CRM',
    label: 'CRM do Básico ao Automatizado',
    id: 'crm',
    desc: 'Organização de clientes e oportunidades em um CRM, desde uma estrutura simples até um funil com etapas e tarefas automatizadas.',
    items: [
      'Estruturação do funil de vendas',
      'Organização de contatos e oportunidades',
      'Etapas e status de negociação',
      'Integração com site, formulários e WhatsApp',
      'Follow-up e tarefas automáticas',
    ],
  },
  {
    tag: 'AUTOMAÇÃO',
    label: 'Automações',
    id: 'automacoes',
    desc: 'Automação de tarefas repetitivas do atendimento, das vendas e da operação, com destaque para a Secretária IA.',
    items: [
      'Secretária IA: atendimento, respostas e agendamentos',
      'Fluxos automatizados de atendimento e vendas',
      'Follow-ups e lembretes automáticos',
      'Integração entre ferramentas',
      'Automações sob medida para cada processo',
    ],
  },
  {
    tag: 'SITES',
    label: 'Criação de Sites',
    id: 'criacao_sites',
    desc: 'Sites institucionais que apresentam a empresa com clareza e passam credibilidade para quem chega até ela.',
    items: ['Design personalizado', 'Versão para celular', 'Estrutura e textos das páginas', 'SEO técnico', 'Integração com WhatsApp e formulários'],
  },
  {
    tag: 'LOJA VIRTUAL',
    label: 'E-commerce',
    id: 'ecommerce',
    desc: 'Lojas virtuais prontas para vender, com catálogo de produtos, carrinho e pagamento online.',
    items: ['Cadastro e organização de produtos', 'Carrinho e checkout', 'Meios de pagamento e frete', 'Gestão de pedidos', 'Loja otimizada para celular'],
  },
  {
    tag: 'CONVERSÃO',
    label: 'Landing Pages',
    id: 'landing_pages',
    desc: 'Páginas de captura otimizadas para conversão. Design, copywriting e performance orientados a CTA.',
    items: ['Design focado em conversão', 'Copy orientada ao CTA', 'Formulários e botão de WhatsApp', 'Pixel da Meta e GA4', 'Carregamento rápido'],
  },
  {
    tag: 'PRODUÇÃO',
    label: 'Captação de Conteúdo',
    id: 'captacao_conteudo',
    desc: 'Produção de fotos e vídeos da sua marca para alimentar as redes sociais e os anúncios.',
    items: ['Roteiro', 'Captação de fotos e vídeos', 'Edição', 'Conteúdo para Reels, Stories e anúncios'],
  },
]

function Servicos() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 z-0 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(0, 255, 209,0.16), transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, rgba(0, 255, 209,0.06) 0 1px, transparent 1px 88px)',
          maskImage: 'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)',
        }}
      />

      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-[120px] pb-20 sm:px-10 sm:pt-[132px] sm:pb-22 lg:px-20 lg:pt-[160px] lg:pb-25">
        <Reveal
          as="span"
          className="inline-flex items-center gap-3 font-body text-sm font-medium tracking-[0.4em] text-mint uppercase"
        >
          <span className="block h-px w-7 bg-mint" />
          Serviços
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-15 max-w-[900px] font-display text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase text-balance lg:text-[54px]"
        >
          O QUE A GENTE FAZ NA PRÁTICA
        </Reveal>

        <Reveal
          anim="pop"
          className="overflow-hidden rounded-xl border border-mint/25 bg-[#121415]"
          style={{ boxShadow: '0 0 60px rgba(0, 255, 209,0.06)' }}
        >
          <div className="flex items-center gap-2 border-b border-white/8 bg-white/2 px-6 py-4 sm:px-8">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 truncate font-body text-[12px] text-gray-light sm:text-[13px]">
              stryve@sistema:~$ ./servicos.sh --list
            </span>
            <span className="ml-auto hidden shrink-0 font-body text-[12px] text-mint/70 sm:inline">
              {services.length} processos
            </span>
          </div>

          <div className="flex flex-col">
            {services.map((service, i) => (
              <Reveal
                key={service.id}
                delay={i}
                className={`group px-6 py-7 transition-colors duration-300 ease-out hover:bg-mint/[0.03] sm:px-8 ${
                  i < services.length - 1 ? 'border-b border-dashed border-white/8' : ''
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-body text-lg leading-none text-mint">&gt;</span>
                    <div className="flex flex-col gap-1">
                      <h3
                        className="m-0 font-display text-2xl leading-[1.05] tracking-[0.01em] text-white uppercase sm:text-[28px]"
                        style={{ textShadow: '0 0 22px rgba(0, 255, 209,0.15)' }}
                      >
                        {service.label}
                      </h3>
                      <span className="font-body text-[11px] text-gray-light/45">{service.id}</span>
                    </div>
                  </div>
                  <span className="font-body text-[11px] tracking-[0.1em] text-mint/80 sm:text-xs">
                    [{service.tag}]
                  </span>
                </div>
                <p className="m-0 mt-4 max-w-[640px] pl-7 font-body text-[15px] leading-[1.6] text-gray-light text-pretty sm:text-base">
                  {service.desc}
                </p>
                <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0 pl-7">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-mint/20 bg-mint/[0.04] px-2.5 py-1 font-body text-[12px] leading-[1.5] text-mint/85 sm:text-[13px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-white/8 bg-white/2 px-6 py-4 sm:px-8">
            <span className="font-body text-[13px] text-gray-light">stryve@sistema:~$</span>
            <span
              aria-hidden="true"
              className="inline-block h-4 w-2 bg-mint"
              style={{ animation: 'stryve-cursor-blink 1.1s step-end infinite' }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Servicos
