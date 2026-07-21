import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 2 "Faculty"
export const Faculty: CollectionConfig = {
  slug: 'faculty',
  admin: { useAsTitle: 'nameEn' },
  access: { read: () => true },
  fields: [
    { name: 'nameEn', label: 'Name (English)', type: 'text', required: true },
    { name: 'nameSa', label: 'Name (Devanagari)', type: 'text', required: true },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'credentialsEn', label: 'Credentials (English)', type: 'text', required: true },
    { name: 'credentialsSa', label: 'Credentials (Devanagari)', type: 'text' },
    { name: 'bioEn', label: 'Bio (English)', type: 'richText' },
    { name: 'bioSa', label: 'Bio (Devanagari)', type: 'richText' },
    { name: 'subjectsTaught', type: 'relationship', relationTo: 'subjects', hasMany: true },
    { name: 'contactEmail', label: 'Contact email (internal only)', type: 'email', admin: { description: 'Not shown publicly' } },
    { name: 'contactPhone', label: 'Contact phone (internal only)', type: 'text' },
    { name: 'active', type: 'checkbox', defaultValue: true },
  ],
}
