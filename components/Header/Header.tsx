import { Link, routing } from '@/i18n/routing'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'

export async function Header() {
  const locale = await getLocale()
  const t = await getTranslations('header')

  return (
    <header className="mx-auto flex h-20 w-screen max-w-(--breakpoint-xl) items-center justify-between px-8">
      <a href="/" className="flex items-center gap-4">
        <Image
          src="/solina_logo.png"
          alt="Solina logo"
          width={200}
          height={200}
        />
      </a>
      <nav className="container mx-auto flex h-full items-center justify-end gap-8 text-lg">
        <Link
          className="transition-all hover:text-amber-500 hover:underline"
          href="/about-us"
        >
          {t('about-us')}
        </Link>
        <Link
          className="transition-all hover:text-amber-500 hover:underline"
          href="/services"
        >
          {t('services')}
        </Link>
        <Link
          className="transition-all hover:text-amber-500 hover:underline"
          href="/career/work-with-us"
        >
          {t('career')}
        </Link>
        <Link
          className="transition-all hover:text-amber-500 hover:underline"
          href="/contact"
        >
          {t('contact')}
        </Link>
      </nav>
      <ul className="flex flex-row gap-4 border-l border-l-amber-500 pl-4">
        {routing.locales.map((lang) => (
          <li key={lang}>
            {locale === lang ? (
              <span className="text-amber-500">{lang.toUpperCase()}</span>
            ) : (
              <Link
                className="transition-all hover:text-amber-500 hover:underline"
                href="/"
                locale={lang}
              >
                {lang.toUpperCase()}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
