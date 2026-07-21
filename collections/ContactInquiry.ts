import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 11 "Contact Inquiry"
export const ContactInquiry: CollectionConfig = {
  slug: 'contact-inquiries',
  admin: { useAsTitle: 'name' },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    {
      name: 'inquiryType', type: 'select', required: true,
      options: ['General', 'Admissions', 'Press', 'Donor'],
    },
    { name: 'message', type: 'textarea', required: true },
    { name: 'status', type: 'select', required: true, defaultValue: 'New', options: ['New', 'Responded', 'Closed'] },
  ],
}
