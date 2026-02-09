import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  fields: [
    { name: 'siteName', type: 'text', defaultValue: 'Balestra Group' },
    { name: 'siteUrl', type: 'text', defaultValue: 'https://balestra.group' },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'defaultDescription', type: 'textarea' },
        { name: 'defaultImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'social',
      type: 'group',
      fields: [
        { name: 'linkedIn', type: 'text' },
        { name: 'email', type: 'email' },
      ],
    },
  ],
}
