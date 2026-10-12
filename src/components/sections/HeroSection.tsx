import { motion } from 'framer-motion'
import { profileImage, site } from '../../data/portfolio'
import { useI18n } from '../../providers/i18n-context'

type HeroSectionProps = {
  onViewProjects: () => void
  onContact: () => void
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

function ArrowIcon({ flip }: { flip: boolean }) {
  return (
    <svg className={`size-4 ${flip ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14" />
    </svg>
  )
}

export function HeroSection({ onViewProjects, onContact }: HeroSectionProps) {
  const { locale, t } = useI18n()
  const flip = locale === 'ar'

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-24 pb-8 md:pt-28 md:pb-12" aria-labelledby="hero-heading">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(225,29,72,0.09),transparent_46%),radial-gradient(ellipse_at_bottom_left,rgba(129,140,248,0.08),transparent_42%)]"
        aria-hidden
      />

      <div className="section-wrap grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="max-w-xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-5 inline-flex rounded-full bg-accent-warm/10 px-3.5 py-1 text-sm font-medium text-accent-warm"
          >
            {t('hero.badge')}
          </motion.p>

          <motion.h1
            id="hero-heading"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            {t('hero.greeting')} <span className="text-accent-warm">{t('brand.name')}</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 text-xl font-semibold leading-snug text-primary sm:text-2xl"
          >
            {t('hero.lead')}
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {t('hero.subline')}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <button type="button" onClick={onContact} className="btn-primary">
              {t('hero.contact')}
              <ArrowIcon flip={flip} />
            </button>
            {site.cvUrl ? (
              <a href={site.cvUrl} download className="btn-outline">
                <DownloadIcon />
                {t('hero.downloadCv')}
              </a>
            ) : (
              <button type="button" onClick={onViewProjects} className="btn-outline">
                {t('hero.viewProjects')}
              </button>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="pointer-events-none absolute -end-4 top-16 size-64 rounded-full bg-accent-warm/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute start-0 bottom-8 size-56 rounded-[40%] bg-indigo-300/35 blur-3xl dark:bg-indigo-500/15" aria-hidden />

          <p className="font-hand absolute end-0 top-1 z-10 text-end text-[1.7rem] leading-none text-primary/85 sm:text-[1.9rem]">
            <span className="block whitespace-nowrap">{t('hero.noteLine1')}</span>
            <span className="mt-3 block whitespace-nowrap">{t('hero.noteLine2')}</span>
          </p>
          <svg
            className={`absolute end-16 top-16 hidden w-14 text-muted-foreground/80 sm:block ${flip ? '-scale-x-100' : ''}`}
            viewBox="0 0 70 48"
            fill="none"
            aria-hidden
          >
            <path
              d="M62 6c-8 2-22 10-30 22-4 6-6 12-8 16"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path d="M20 38c2 2 6 4 8 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>

          <div className="relative mx-auto mt-28 w-full max-w-[460px] sm:mt-24">
            <img
              src={profileImage}
              alt={t('brand.name')}
              width={460}
              height={460}
              decoding="sync"
              fetchPriority="high"
              className="aspect-square w-full rounded-[2rem] bg-secondary object-cover object-center shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
            />
          </div>

          <div className="absolute bottom-4 end-0 z-10 flex items-center gap-3 rounded-2xl border border-border bg-card px-3.5 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.12)] sm:bottom-8 sm:end-1">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-warm/10 text-sm font-semibold text-accent-warm">
              {'</>'}
            </span>
            <span dir="ltr" className="text-start">
              <span className="block text-sm font-semibold text-primary">{t('hero.cardTitle')}</span>
              <span className="block text-xs text-muted-foreground">{t('hero.cardSubtitle')}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
