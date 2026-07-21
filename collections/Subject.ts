import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 1 "Subject"
export const Subject: CollectionConfig = {
  slug: 'subjects',
  admin: { useAsTitle: 'titleEn' },
  access: { read: () => true },
  fields: [
    { name: 'titleEn', label: 'Title (English)', type: 'text', required: true },
    { name: 'titleSa', label: 'Title (Devanagari)', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'summaryEn', label: 'Summary (English)', type: 'textarea', required: true },
    { name: 'summarySa', label: 'Summary (Devanagari)', type: 'textarea' },
    { name: 'fullDescriptionEn', label: 'Full description (English)', type: 'richText' },
    { name: 'fullDescriptionSa', label: 'Full description (Devanagari)', type: 'richText' },
    { name: 'relatedFaculty', type: 'relationship', relationTo: 'faculty', hasMany: true },
    { name: 'relatedPublications', type: 'relationship', relationTo: 'publications', hasMany: true },
    { name: 'order', type: 'number', required: true },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
  ],
}
