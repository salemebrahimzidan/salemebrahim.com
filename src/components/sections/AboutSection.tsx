import { site } from '../../data/portfolio'
import { useI18n } from '../../providers/i18n-context'
import { SlashTitle } from '../ui/SlashTitle'
import { Reveal } from '../ui/Reveal'

const serviceIcons = [
  <svg key="web" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <rect x="3" y="4" width="18" height="14" rx="2" strokeWidth="1.75" />
    <path strokeWidth="1.75" strokeLinecap="round" d="M8 21h8M12 18v3" />
  </svg>,
  <svg key="dash" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <rect x="3" y="3" width="8" height="8" rx="1.5" strokeWidth="1.75" />
    <rect x="13" y="3" width="8" height="5" rx="1.5" strokeWidth="1.75" />
    <rect x="13" y="10" width="8" height="11" rx="1.5" strokeWidth="1.75" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" strokeWidth="1.75" />
  </svg>,
  <svg key="api" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <circle cx="6" cy="12" r="2.25" strokeWidth="1.75" />
    <circle cx="18" cy="7" r="2.25" strokeWidth="1.75" />
    <circle cx="18" cy="17" r="2.25" strokeWidth="1.75" />
    <path strokeWidth="1.75" strokeLinecap="round" d="M8.2 11.2 15.8 8M8.2 12.8l7.6 3.4" />
  </svg>,
  <svg key="ui" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M4 20h4l10-10-4-4L4 16v4z" />
    <path strokeWidth="1.75" strokeLinecap="round" d="m13 7 4 4" />
  </svg>,
]

function GitHubIcon() {
  return (
    <svg className="size-4" fill="currentColor" viewBox="0 0 496 512" aria-hidden>
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="size-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="size-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 223.9-99.6 223.9-222 0-59.3-23.1-114.9-65.1-156.9zm-156.9 340.2c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.7 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.4 4.2-11.9 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.3 31.6 11.9 13.3 4.2 25.4 3.6 35 2.2 10.7-1.3 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.6-6.6z" />
    </svg>
  )
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function AboutSection() {
  const { locale, t, messages } = useI18n()
  const phoneHref = `tel:${site.phone.replace(/\s/g, '')}`

  return (
    <section id="about" className="section-shell" aria-labelledby="about-heading">
      <div className="section-wrap grid gap-12 lg:grid-cols-3 lg:gap-0">
        <Reveal className="lg:pe-8">
          <SlashTitle id="about-heading">{t('about.intro')}</SlashTitle>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">{t('about.bio')}</p>
          <button
            type="button"
            onClick={() => scrollTo('qualification')}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-warm transition hover:gap-2.5"
          >
            {t('about.learnMore')}
            <span aria-hidden className={locale === 'ar' ? 'inline-block rotate-180' : undefined}>
              →
            </span>
          </button>
        </Reveal>

        <Reveal delayMs={50} className="lg:border-s lg:border-border lg:px-8">
          <SlashTitle as="h3">{t('about.whatIDoHeading')}</SlashTitle>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {messages.about.services.map((service, index) => (
              <li key={service.title} className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent-warm/10 text-accent-warm">
                  {serviceIcons[index]}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-primary">{service.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{service.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={90} className="lg:border-s lg:border-border lg:ps-8">
          <SlashTitle as="h3">{t('contact.title')}</SlashTitle>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t('contact.intro')}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={phoneHref} dir="ltr" className="inline-flex items-center gap-2.5 font-medium text-primary hover:text-accent-warm">
                <span className="text-accent-warm" aria-hidden>
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.75" strokeLinecap="round" d="M8 4h3l1 4-2 1a12 12 0 0 0 5 5l1-2 4 1v3a2 2 0 0 1-2 2A16 16 0 0 1 6 6a2 2 0 0 1 2-2z" />
                  </svg>
                </span>
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                dir="ltr"
                className="inline-flex items-center gap-2.5 font-medium text-primary hover:text-accent-warm"
              >
                <span className="text-accent-warm" aria-hidden>
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.75" />
                    <path strokeWidth="1.75" strokeLinecap="round" d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5 font-medium text-primary">
              <span className="text-accent-warm" aria-hidden>
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.75" strokeLinecap="round" d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.2" strokeWidth="1.75" />
                </svg>
              </span>
              {t('contact.locationValue')}
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost size-10 p-0"
              aria-label={t('a11y.linkedin')}
            >
              <LinkedInIcon />
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost size-10 p-0"
              aria-label={t('a11y.github')}
            >
              <GitHubIcon />
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost size-10 p-0"
              aria-label={t('a11y.whatsapp')}
            >
              <WhatsAppIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
