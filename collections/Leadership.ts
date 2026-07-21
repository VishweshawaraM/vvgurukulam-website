import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 8 "Leadership / Founder"
export const Leadership: CollectionConfig = {
  slug: 'leadership',
  admin: { useAsTitle: 'nameEn' },
  access: { read: () => true },
  fields: [
    { name: 'nameEn', label: 'Name (English)', type: 'text', required: true },
    { name: 'nameSa', label: 'Name (Devanagari)', type: 'text', required: true },
    { name: 'roleEn', label: 'Role/title (English)', type: 'text', required: true },
    { name: 'roleSa', label: 'Role/title (Devanagari)', type: 'text' },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'bioEn', label: 'Bio (English)', type: 'richText' },
    { name: 'bioSa', label: 'Bio (Devanagari)', type: 'richText' },
    { name: 'order', type: 'number', required: true, admin: { description: 'Manual display order - seniority, not alphabetical' } },
  ],
}
