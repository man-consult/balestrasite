import type { Metadata } from 'next'
import { getLang } from '@/i18n/get-lang'
import { useTranslations } from '@/i18n/translations'

export const metadata: Metadata = {
  title: 'Contact',
}

export default async function ContactPage() {
  const lang = await getLang()
  const t = useTranslations(lang)

  const contacts = [
    {
      title: t('contact.email.title'),
      subtitle: 'brian@balestra.group',
      link: 'mailto:brian@balestra.group?subject=Procurement%20Transformation%20Inquiry',
      iconColor: 'text-balestra-red',
      hoverBorder: 'group-hover:border-balestra-red/50',
      iconPath:
        'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    },
    {
      title: t('contact.linkedin.title'),
      subtitle: 'Connect on LinkedIn',
      link: 'https://linkedin.com/in/brianmangano',
      iconColor: 'text-[#0077B5]',
      hoverBorder: 'group-hover:border-[#0077B5]/50',
      iconPath:
        'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    },
  ]

  return (
    <>
      <section className="pt-32 pb-12 max-w-4xl mx-auto px-6 text-center md:text-left">
        <h1
          className="font-serif text-5xl md:text-6xl text-white mb-6"
          dangerouslySetInnerHTML={{
            __html: t('contact.hero.title', {
              connect: '<span class="text-balestra-red italic">Connect</span>',
            }),
          }}
        />
        <div className="w-24 h-1 bg-balestra-red mb-8 mx-auto md:mx-0" />
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
          {t('contact.hero.description')}
        </p>
      </section>

      <section className="pb-16 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-balestra-black p-8 rounded-sm border border-white/10 ${contact.hoverBorder} transition-all hover:scale-105`}
            >
              <div className="flex flex-col items-center text-center">
                <svg
                  className={`w-12 h-12 ${contact.iconColor} mb-4 group-hover:scale-110 transition-transform`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={contact.iconPath} />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-gray-400 text-sm">{contact.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="pb-20 max-w-4xl mx-auto px-6">
        <div className="bg-balestra-black p-8 md:p-12 rounded-sm border border-white/10 text-center">
          <svg
            className="w-16 h-16 text-balestra-red mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            {t('contact.location.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
            {t('contact.location.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {t('contact.location.city')}
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              NZDT (UTC+13)
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
