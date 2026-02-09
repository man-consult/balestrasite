import type { GlobalConfig } from 'payload'

export const TermsPage: GlobalConfig = {
  slug: 'terms-page',
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, defaultValue: 'Terms of Engagement' },
    { name: 'subtitle', type: 'text', defaultValue: 'Standard Terms & Conditions' },
    {
      name: 'clauses',
      type: 'array',
      fields: [
        { name: 'text', type: 'textarea', required: true },
      ],
    },
    { name: 'lastUpdated', type: 'date' },
  ],
}
