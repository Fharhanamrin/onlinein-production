import { useReveal } from '../hooks/useReveal'

type Tone = 'indigo' | 'cyan' | 'amber' | 'rose'

const toneMap: Record<Tone, string> = {
  indigo: 'bg-[#4338CA]/10 text-[#4338CA]',
  cyan: 'bg-[#06B6D4]/10 text-[#0891B2]',
  amber: 'bg-amber-100 text-amber-700',
  rose: 'bg-rose-100 text-rose-600',
}

interface Props {
  eyebrow: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  tone?: Tone
  align?: 'center' | 'left'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'indigo',
  align = 'center',
}: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} flex flex-col ${alignCls} max-w-2xl mb-14`}
    >
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${toneMap[tone]}`}
      >
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#1E1B4B] leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
