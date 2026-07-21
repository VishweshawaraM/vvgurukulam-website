import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 7 "Milestone / Convocation Year"
// About -> Legacy, cross-linked from Alumni. Reuses the Timeline organism.
export const Milestone: CollectionConfig = {
  slug: 'milestones',
  admin: { useAsTitle: 'year' },
  access: { read: () => true },
  fields: [
    { name: 'year', type: 'number', required: true },
    { name: 'convocationDate', type: 'date' },
    { name: 'graduatingBatchSize', type: 'number', required: true },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'highlightsEn', label: 'Highlights (English)', type: 'richText' },
    { name: 'highlightsSa', label: 'Highlights (Devanagari)', type: 'richText' },
    { name: 'notableAlumni', type: 'relationship', relationTo: 'alumni', hasMany: true },
    {
      name: 'photoAvailable', type: 'checkbox', required: true, defaultValue: false,
      admin: { description: 'Drives whether the Timeline shows an image or a count-only entry - older years may have no photo on file.' },
    },
  ],
}
