import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 5 "Event"
// Status auto-archives after endDate - implement via a scheduled job
// (Payload jobs queue) rather than in the schema itself.
export const Event: CollectionConfig = {
  slug: 'events',
  admin: { useAsTitle: 'titleEn' },
  access: { read: () => true },
  fields: [
    { name: 'titleEn', label: 'Title (English)', type: 'text', required: true },
    { name: 'titleSa', label: 'Title (Devanagari)', type: 'text' },
    { name: 'descriptionEn', label: 'Description (English)', type: 'richText' },
    { name: 'descriptionSa', label: 'Description (Devanagari)', type: 'richText' },
    { name: 'startDateTime', type: 'date', required: true, admin: { date: { pickerAppearance: 'dayAndTime' } } },
    { name: 'endDateTime', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' } } },
    { name: 'venueEn', label: 'Venue (English)', type: 'text', required: true },
    { name: 'venueSa', label: 'Venue (Devanagari)', type: 'text' },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
    { name: 'registrationLink', type: 'text' },
    { name: 'status', type: 'select', required: true, defaultValue: 'Draft', options: ['Draft', 'Published', 'Archived'] },
  ],
}
