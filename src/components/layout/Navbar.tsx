import { useCallback, useEffect, useId, useState } from 'react'
import type { NavSectionId } from '../../data/portfolio'
import { useI18n } from '../../providers/i18n-context'
import { useTheme } from '../../providers/ThemeProvider'

type NavItem = { id: NavSectionId; label: string }

type NavbarProps = {
  items: readonly NavItem[]
  activeId: string
}

function SunIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="4" strokeWidth="1.75" />
      <path
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M12 3v1.5M12 19.5V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.5M19.5 12H21M4.9 19.1l1.1-1.1M18 6l1.1-1.1"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 14.5A7.5 7.5 0 0 1 9.5 4 7.2 7.2 0 1 0 20 14.5z"
      />
    </svg>
  )
}

const iconButtonClass =
  'inline-flex size-9 items-center justify-center rounded-full border border-border bg-secondary text-primary transition hover:bg-card'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useI18n()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-pressed={isDark}
      aria-label={isDark ? t('a11y.themeLight') : t('a11y.themeDark')}
      className={iconButtonClass}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

function GlobeIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="9" strokeWidth="1.75" />
      <path
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M3 12h18M12 3c2.6 2.7 3.9 5.8 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.8-3.9-9s1.3-6.3 3.9-9z"
      />
    </svg>
  )
}

function LanguageIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="9" strokeWidth="1.75" />
      <path strokeWidth="1.75" strokeLinecap="round" d="M3 12h18M7 7.5h10M7 16.5h10" />
    </svg>
  )
}

function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()
  const next = locale === 'en' ? 'ar' : 'en'

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={t('a11y.switchLanguage')}
      className={iconButtonClass}
    >
      {locale === 'en' ? <GlobeIcon /> : <LanguageIcon />}
    </button>
  )
}

export function Navbar({ items, activeId }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const { t } = useI18n()
  const labelFor = (id: NavSectionId) => t(`nav.${id}`)

  const scrollToId = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-border/80 bg-navbar/90 backdrop-blur-md">
        <nav className="section-wrap" aria-label={t('a11y.primaryNav')}>
          <div className="flex h-16 items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToId('home')}
              className="flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
              aria-label={t('a11y.goHome')}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent-warm text-base font-bold text-white">
                S
              </span>
              <span className="truncate text-base font-bold tracking-tight text-primary">{t('brand.name')}</span>
            </button>

            <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 xl:flex">
              {items.map((item) => {
                const active = activeId === item.id
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToId(item.id)}
                      aria-current={active ? 'true' : undefined}
                      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                        active ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {labelFor(item.id)}
                      {active ? (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-warm" aria-hidden />
                      ) : null}
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition hover:bg-secondary hover:text-primary xl:hidden"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
              >
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/40 transition-opacity xl:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <aside
        id={panelId}
        role={open ? 'dialog' : undefined}
        aria-modal={open ? true : undefined}
        aria-label={open ? t('a11y.primaryNav') : undefined}
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`fixed inset-y-0 z-50 w-[min(100%,320px)] border-border bg-navbar transition-transform duration-300 ease-out ltr:right-0 ltr:border-l rtl:left-0 rtl:border-r xl:hidden ${
          open ? 'translate-x-0' : 'ltr:translate-x-full rtl:-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-sm font-semibold text-primary">{t('a11y.menu')}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-primary"
            aria-label={t('a11y.closeMenu')}
          >
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-2">
          {items.map((item) => {
            const active = activeId === item.id
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  aria-current={active ? 'true' : undefined}
                  className={`w-full rounded-xl px-4 py-3 text-start text-sm font-medium transition ${
                    active ? 'bg-accent-warm/10 text-accent-warm' : 'text-muted-foreground hover:bg-secondary hover:text-primary'
                  }`}
                >
                  {labelFor(item.id)}
                </button>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
