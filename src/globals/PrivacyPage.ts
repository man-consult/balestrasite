import type { GlobalConfig } from 'payload'

export const PrivacyPage: GlobalConfig = {
  slug: 'privacy-page',
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, defaultValue: 'Privacy Policy' },
    { name: 'lastUpdated', type: 'text', defaultValue: '30/12/2024' },
    { name: 'content', type: 'richText' },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        { name: 'email', type: 'email', defaultValue: 'privacy@balestra.group' },
        { name: 'commissionerAddress', type: 'textarea' },
        { name: 'commissionerPhone', type: 'text' },
        { name: 'commissionerEmail', type: 'email' },
        { name: 'commissionerWebsite', type: 'text' },
      ],
    },
  ],
}
