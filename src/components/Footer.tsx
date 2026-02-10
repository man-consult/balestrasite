import Link from 'next/link'
import { getLang } from '@/i18n/get-lang'
import { useTranslations } from '@/i18n/translations'

export async function Footer() {
  const lang = await getLang()
  const t = useTranslations(lang)

  return (
    <footer className="border-t border-white/10 py-12 mt-auto bg-black/20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <Link
            href="/"
            className="font-serif text-balestra-red text-lg block mb-2 hover:text-white transition-colors tracking-wider"
          >
            BALESTRA
          </Link>
          <p className="text-sm text-gray-500">
            {t('footer.copyright', { year: new Date().getFullYear().toString() })}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 md:gap-6 text-sm text-gray-500">
          <Link href="/terms" className="hover:text-balestra-red transition-colors">{t('footer.terms')}</Link>
          <span className="hidden md:inline text-white/10">|</span>
          <Link href="/privacy" className="hover:text-balestra-red transition-colors">{t('footer.privacy')}</Link>
        </div>
      </div>
    </footer>
  )
}
