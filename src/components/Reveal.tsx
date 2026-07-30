import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'

interface RevealProps {
  as?: ElementType
  anim?: 'up' | 'pop' | 'fade'
  delay?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

function Reveal({ as = 'div', anim = 'up', delay = 0, className = '', style, children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Tag = as as ElementType
  return (
    <Tag
      ref={ref}
      className={`${visible ? `reveal-${anim}` : 'reveal-hidden'} ${className}`}
      style={visible ? { ...style, animationDelay: `${Math.min(delay, 8) * 0.09}s` } : style}
    >
      {children}
    </Tag>
  )
}

export default Reveal
