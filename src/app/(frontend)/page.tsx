import type { Metadata } from 'next'
import Link from 'next/link'
import { getLang } from '@/i18n/get-lang'
import { getTranslations } from '@/i18n/translations'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function HomePage() {
  const lang = await getLang()
  const t = getTranslations(lang)

  const valueProps = [
    { title: t('home.value.intelligence.title'), desc: t('home.value.intelligence.desc') },
    { title: t('home.value.patterns.title'), desc: t('home.value.patterns.desc') },
    { title: t('home.value.implementation.title'), desc: t('home.value.implementation.desc') },
    { title: t('home.value.progress.title'), desc: t('home.value.progress.desc') },
  ]

  return (
    <>
      <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base uppercase tracking-widest text-balestra-red mb-6 font-medium">
            {t('home.subtitle')}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            {t('home.hero')}
          </h1>
          <div className="w-24 h-1 bg-balestra-red mx-auto mb-12" />

          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t('home.intro', {
                  balestra:
                    '<span class="font-serif text-balestra-red italic text-xl md:text-2xl">balestra</span>',
                }),
              }}
            />
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              {t('home.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/contact"
              className="px-10 py-4 bg-balestra-red text-white font-semibold rounded-sm hover:bg-white hover:text-balestra-black transition-all shadow-lg"
            >
              {t('home.cta.primary')}
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-sm hover:border-balestra-red hover:bg-balestra-red/10 transition-all"
            >
              {t('home.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            {t('home.story.title')}
          </h2>
          <div className="w-24 h-1 bg-balestra-red mx-auto mb-8" />
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t('home.story.description')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="bg-balestra-black p-8 rounded-sm border border-white/10 hover:border-balestra-red/50 transition-all group"
            >
              <h3 className="font-serif text-2xl text-balestra-red mb-4 group-hover:text-white transition-colors">
                {prop.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 text-center">
          {t('home.challenge.title')}
        </h2>
        <div className="w-24 h-1 bg-balestra-red mx-auto mb-12" />

        <div className="space-y-8">
          <div className="border-l-2 border-balestra-red/30 pl-6">
            <h3 className="text-xl font-medium text-white mb-3">
              {t('home.challenge.dynamic.title')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('home.challenge.dynamic.desc')}
            </p>
          </div>

          <div className="border-l-2 border-balestra-red/30 pl-6">
            <h3 className="text-xl font-medium text-white mb-3">
              {t('home.challenge.insights.title')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('home.challenge.insights.desc')}
            </p>
          </div>

          <div className="border-l-2 border-balestra-red/30 pl-6">
            <h3 className="text-xl font-medium text-white mb-3">
              {t('home.challenge.sustained.title')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('home.challenge.sustained.desc')}
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-balestra-red/10 border border-balestra-red/30 rounded-sm">
          <p className="text-lg text-white mb-4">
            <span className="font-serif text-balestra-red text-xl">
              {t('home.challenge.approach')}
            </span>{' '}
            {t('home.challenge.approach.desc')}
          </p>
          <p className="text-gray-400">{t('home.challenge.result')}</p>
        </div>
      </section>

      <section className="py-20 bg-black/30 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-6">{t('home.final.title')}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{t('home.final.desc')}</p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-balestra-red text-white font-semibold rounded-sm hover:bg-white hover:text-balestra-black transition-all shadow-lg text-lg"
          >
            {t('home.cta.primary')}
          </Link>
        </div>
      </section>
    </>
  )
}
