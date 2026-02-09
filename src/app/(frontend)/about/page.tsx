import type { Metadata } from 'next'
import { getLang } from '@/i18n/get-lang'
import { useTranslations } from '@/i18n/translations'

export const metadata: Metadata = {
  title: 'About',
}

export default async function AboutPage() {
  const lang = await getLang()
  const t = useTranslations(lang)

  return (
    <>
      <section className="pt-32 pb-12 max-w-4xl mx-auto px-6">
        <h1
          className="font-serif text-5xl md:text-6xl text-white mb-6"
          dangerouslySetInnerHTML={{
            __html: t('about.hero.title', {
              balestra: '<span class="text-balestra-red italic">balestra</span>',
            }),
          }}
        />
        <div className="w-24 h-1 bg-balestra-red mb-8" />
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
          {t('about.hero.description')}
        </p>
      </section>

      <section className="pb-20 max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-white mb-8">{t('about.opportunity.title')}</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <p>{t('about.opportunity.p1')}</p>
          <p>{t('about.opportunity.p2')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-balestra-black p-8 rounded-sm border border-white/10">
            <h3 className="font-serif text-2xl text-balestra-red mb-4">
              {t('about.pillar.precision.title')}
            </h3>
            <p className="text-gray-400 leading-relaxed">{t('about.pillar.precision.desc')}</p>
          </div>

          <div className="bg-balestra-black p-8 rounded-sm border border-white/10">
            <h3 className="font-serif text-2xl text-balestra-red mb-4">
              {t('about.pillar.decisiveness.title')}
            </h3>
            <p className="text-gray-400 leading-relaxed">{t('about.pillar.decisiveness.desc')}</p>
          </div>

          <div className="bg-balestra-black p-8 rounded-sm border border-white/10">
            <h3 className="font-serif text-2xl text-balestra-red mb-4">
              {t('about.pillar.transformation.title')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('about.pillar.transformation.desc')}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <h2 className="font-serif text-3xl text-white mb-6">{t('about.founder.title')}</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="bg-balestra-black p-6 rounded-sm border border-white/10">
                <h3 className="font-serif text-xl text-balestra-red mb-2">
                  {t('about.founder.name')}
                </h3>
                <p className="text-gray-500 text-sm">{t('about.founder.role')}</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed">{t('about.founder.bio')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 mt-12">
          <h2 className="font-serif text-3xl text-white mb-6">{t('about.vision.title')}</h2>

          <p
            className="text-gray-300 leading-relaxed mb-8"
            dangerouslySetInnerHTML={{
              __html: t('about.vision.intro', {
                balestra:
                  '<span class="font-serif text-balestra-red italic text-xl">Balestra</span>',
              }),
            }}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-balestra-black p-8 rounded-sm border border-balestra-red/50">
              <h3 className="font-serif text-2xl text-balestra-red mb-4">
                {t('about.vision.procurevalue.title')}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t('about.vision.procurevalue.desc')}
              </p>
            </div>

            <div className="bg-balestra-black p-8 rounded-sm border border-white/10">
              <h3 className="font-serif text-2xl text-white mb-4">
                {t('about.vision.coming.title')}
              </h3>
              <p className="text-gray-400 leading-relaxed">{t('about.vision.coming.desc')}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-balestra-red text-white font-semibold rounded-sm hover:bg-white hover:text-balestra-black transition-all shadow-lg"
          >
            {t('home.cta.primary')}
          </a>
        </div>
      </section>
    </>
  )
}
