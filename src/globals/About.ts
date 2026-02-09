import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'opportunity',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'paragraph1', type: 'textarea', required: true },
        { name: 'paragraph2', type: 'textarea', required: true },
      ],
    },
    {
      name: 'pillars',
      type: 'array',
      maxRows: 3,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'founder',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'bio', type: 'textarea', required: true },
      ],
    },
    {
      name: 'vision',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'intro', type: 'textarea', required: true },
        {
          name: 'products',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'highlighted', type: 'checkbox', defaultValue: false },
          ],
        },
      ],
    },
  ],
}
