import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 6 "Alumni"
export const Alumni: CollectionConfig = {
  slug: 'alumni',
  admin: { useAsTitle: 'nameEn' },
  access: { read: () => true },
  fields: [
    { name: 'nameEn', label: 'Name (English)', type: 'text', required: true },
    { name: 'nameSa', label: 'Name (Devanagari)', type: 'text' },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'batchYear', type: 'number', required: true },
    { name: 'currentRole', type: 'text', required: true },
    { name: 'currentOrganization', type: 'text' },
    { name: 'quoteEn', label: 'Quote (English)', type: 'richText' },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    {
      name: 'consentObtained', type: 'checkbox', defaultValue: false, required: true,
      admin: { description: 'Must be checked before this record can be published publicly - see Content Collection Checklist, Workstream D.' },
    },
  ],
}
