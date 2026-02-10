import Image from 'next/image'
import Link from 'next/link'
import { getLang } from '@/i18n/get-lang'
import { useTranslations } from '@/i18n/translations'
import { MobileMenu } from './MobileMenu'

export async function Header() {
  const lang = await getLang()
  const t = useTranslations(lang)

  return (
    <header className="border-b border-white/10 py-4 sticky top-0 bg-balestra-black/95 backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="block transition-opacity hover:opacity-80 leading-none">
          <Image
            src="/header-logo.svg"
            alt="Balestra Group"
            width={200}
            height={46}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400 items-center">
          <Link href="/about" className="hover:text-balestra-red transition-colors">{t('nav.about')}</Link>
          <Link href="/blog" className="hover:text-balestra-red transition-colors">{t('nav.insights')}</Link>
          <Link
            href="/contact"
            className="px-5 py-2 bg-balestra-red text-white font-semibold rounded-sm hover:bg-white hover:text-balestra-black transition-all shadow-[0_0_15px_rgba(230,57,70,0.3)]"
          >
            {t('nav.contact')}
          </Link>
        </nav>

        <MobileMenu aboutLabel={t('nav.about')} insightsLabel={t('nav.insights')} contactLabel={t('nav.contact')} />
      </div>
    </header>
  )
}
