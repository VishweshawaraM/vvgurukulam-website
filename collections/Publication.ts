import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 3 "Publication"
export const Publication: CollectionConfig = {
  slug: 'publications',
  admin: { useAsTitle: 'titleEn' },
  access: { read: () => true },
  fields: [
    { name: 'titleEn', label: 'Title (English)', type: 'text', required: true },
    { name: 'titleSa', label: 'Title (Devanagari)', type: 'text' },
    {
      name: 'type', type: 'select', required: true,
      options: ['Book', 'Article', 'Conference paper', 'Manuscript', 'Digital resource'],
    },
    { name: 'authors', type: 'relationship', relationTo: 'faculty', hasMany: true, required: true },
    { name: 'abstractEn', label: 'Abstract (English)', type: 'richText' },
    { name: 'abstractSa', label: 'Abstract (Devanagari)', type: 'richText' },
    { name: 'file', type: 'upload', relationTo: 'media' },
    { name: 'externalLink', type: 'text' },
    { name: 'publishDate', type: 'date', required: true },
    { name: 'tag', type: 'select', required: true, options: ['Publication'] },
  ],
}
