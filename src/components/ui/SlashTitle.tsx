import type { ReactNode } from 'react'

type SlashTitleProps = {
  as?: 'h2' | 'h3'
  id?: string
  children: ReactNode
  className?: string
}

export function SlashTitle({ as = 'h2', id, children, className = '' }: SlashTitleProps) {
  const Tag = as

  return (
    <Tag
      id={id}
      className={`flex items-center gap-2 text-lg font-bold tracking-tight text-primary sm:text-xl ${className}`}
    >
      <span className="font-semibold text-accent-warm" aria-hidden>
        /
      </span>
      {children}
    </Tag>
  )
}
