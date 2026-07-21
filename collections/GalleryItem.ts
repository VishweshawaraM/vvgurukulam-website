import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 9 "Gallery item"
export const GalleryItem: CollectionConfig = {
  slug: 'gallery-items',
  admin: { useAsTitle: 'caption' },
  access: { read: () => true },
  fields: [
    { name: 'media', type: 'upload', relationTo: 'media', required: true },
    { name: 'caption', type: 'text' },
    {
      name: 'category', type: 'select', required: true,
      options: ['Campus', 'Festivals', 'Students', 'Events', 'Videos'],
    },
    { name: 'relatedEvent', type: 'relationship', relationTo: 'events' },
  ],
}
