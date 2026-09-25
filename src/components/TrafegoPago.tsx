import Reveal from './Reveal'

const benefits = [
  {
    title: 'Mais clientes qualificados',
    desc: 'Tráfego direcionado pra quem já procura o que você oferece.',
    icon: (
      <>
        <circle cx="17" cy="17" r="12" />
        <circle cx="17" cy="17" r="7" />
        <circle cx="17" cy="17" r="2" fill="#00FFD1" stroke="none" />
      </>
    ),
  },
  {
    title: 'Sem desperdício de verba',
    desc: 'O que não converte para. O que funciona escala.',
    icon: (
      <>
        <path d="M6 6 H28 L19 18 V27 L15 25 V18 Z" />
      </>
    ),
  },
  {
    title: 'Decisão por dado',
    desc: 'Toda campanha é acompanhada por métricas reais, não por achismo.',
    icon: (
      <>
        <path d="M6 27 H28" />
        <rect x="9" y="16" width="4" height="11" />
        <rect x="16" y="10" width="4" height="17" />
        <rect x="23" y="20" width="4" height="7" />
      </>
    ),
  },
  {
    title: 'Previsibilidade pra escalar',
    desc: 'Estrutura testada e repetível, que cresce junto com o seu negócio.',
    icon: (
      <>
        <path d="M6 24 L14 16 L19 20 L28 9" />
        <path d="M21 9 H28 V16" />
      </>
    ),
  },
]

const metrics = [
  {
    label: 'Alcance',
    icon: (
      <>
        <path d="M3 20 H21" />
        <rect x="5" y="12" width="3.5" height="6" />
        <rect x="10.2" y="8" width="3.5" height="10" />
        <rect x="15.5" y="4" width="3.5" height="14" />
      </>
    ),
  },
  {
    label: 'CTR',
    icon: <path d="M5 3 L19 12 L12.5 13.2 L15.5 20 L12.8 21 L9.8 14.4 L5 18.6 Z" />,
  },
  {
    label: 'Custo por resultado',
    icon: (
      <>
        <path d="M12 3 V21" />
        <path d="M16 7.5 C16 5.6 14.2 4.5 12 4.5 C9.8 4.5 8 5.6 8 7.5 C8 12 16 10.5 16 15.5 C16 17.6 14.2 19 12 19 C9.8 19 8 17.6 8 15.5" />
      </>
    ),
  },
  {
    label: 'Retenção de vídeo',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8.5 L16 12 L10 15.5 Z" />
      </>
    ),
  },
]

function TrafegoPago() {
  return (
    <section id="trafego" className="relative overflow-hidden bg-black">
      <div className="relative z-2 mx-auto w-full max-w-[1560px] px-6 pt-[130px] pb-20 sm:px-10 sm:pt-[140px] sm:pb-22 lg:px-20 lg:pt-[160px] lg:pb-25">
        <Reveal
          as="span"
          className="inline-flex items-center gap-3 font-body text-sm font-medium tracking-[0.4em] text-mint uppercase"
        >
          <span className="block h-px w-7 bg-mint" />
          Metodologia
        </Reveal>

        <Reveal
          as="h2"
          delay={1}
          className="mt-5 mb-4 font-display text-[38px] leading-[1.05] tracking-[0.01em] text-white uppercase lg:text-[54px]"
        >
          MAIS CLIENTE.
          <br />
          MENOS DESPERDÍCIO.
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mb-15 max-w-[700px] font-body text-lg leading-[1.6] text-gray-light text-pretty"
        >
          Cada real investido é rastreado até o resultado. Decisão por dado, não por achismo.
        </Reveal>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal
              key={b.title}
              anim="pop"
              delay={i}
              className="flex flex-col gap-4.5 rounded-lg border border-mint/15 bg-[#121415] p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-mint hover:bg-[#121415] hover:shadow-[0_12px_44px_rgba(0, 255, 209,0.16)]"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                stroke="#00FFD1"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {b.icon}
              </svg>
              <h4 className="m-0 font-body text-xl font-extrabold tracking-[0.04em] text-white uppercase">
                {b.title}
              </h4>
              <p className="m-0 font-body text-base leading-[1.6] text-gray-light text-pretty">{b.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          anim="fade"
          className="mt-15 rounded-xl border border-mint/20 p-8 sm:p-10"
          style={{
            background:
              'linear-gradient(150deg, rgba(0, 255, 209,0.09), rgba(0, 255, 209,0.03) 60%, rgba(18,20,21,1))',
          }}
        >
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <span
                key={m.label}
                className={`flex flex-col items-center gap-3 text-center ${i > 0 ? 'border-l border-white/10' : ''}`}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00FFD1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ animation: `stryve-icon-glow 3s ease-in-out ${i * 0.4}s infinite` }}
                >
                  {m.icon}
                </svg>
                <span className="font-body text-[15px] font-bold tracking-[0.12em] text-white uppercase sm:text-base">
                  {m.label}
                </span>
              </span>
            ))}
          </div>

          <p className="mt-6 text-center font-accent text-lg leading-[1.5] text-mint italic text-pretty">
            Decisão baseada em dado: criativo fraco pausa, criativo forte escala.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default TrafegoPago
