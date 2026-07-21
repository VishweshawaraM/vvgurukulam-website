import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 4 "News"
export const News: CollectionConfig = {
  slug: 'news',
  admin: { useAsTitle: 'headlineEn' },
  access: { read: () => true },
  fields: [
    { name: 'headlineEn', label: 'Headline (English)', type: 'text', required: true },
    { name: 'headlineSa', label: 'Headline (Devanagari)', type: 'text' },
    { name: 'bodyEn', label: 'Body (English)', type: 'richText', required: true },
    { name: 'bodySa', label: 'Body (Devanagari)', type: 'richText' },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
    { name: 'categoryTag', type: 'select', required: true, defaultValue: 'News', options: ['News'] },
    { name: 'status', type: 'select', required: true, defaultValue: 'Draft', options: ['Draft', 'Published'] },
    { name: 'publishDate', type: 'date', required: true },
    { name: 'author', type: 'relationship', relationTo: 'users' },
  ],
}
