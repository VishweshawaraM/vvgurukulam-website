import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 8b "Award / Honour"
// About -> Awards & Honours.
export const Award: CollectionConfig = {
  slug: 'awards',
  admin: { useAsTitle: 'nameEn' },
  access: { read: () => true },
  fields: [
    { name: 'nameEn', label: 'Award name (English)', type: 'text', required: true },
    { name: 'nameSa', label: 'Award name (Devanagari)', type: 'text' },
    {
      name: 'recipientType', type: 'select', required: true,
      options: ['Institution', 'Founder', 'Acharya', 'Student'],
    },
    { name: 'recipient', type: 'relationship', relationTo: 'faculty' },
    { name: 'awardingBody', type: 'text', required: true },
    { name: 'year', type: 'number', required: true },
    { name: 'descriptionEn', label: 'Description/citation (English)', type: 'richText' },
    { name: 'descriptionSa', label: 'Description/citation (Devanagari)', type: 'richText' },
    { name: 'certificatePhoto', type: 'upload', relationTo: 'media' },
    {
      name: 'category', type: 'select',
      options: ['Academic Excellence', 'Spiritual & Cultural', 'Research', 'Service'],
    },
  ],
}
