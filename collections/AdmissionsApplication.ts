import type { CollectionConfig } from 'payload'

// Matches VVG-Content-Schema.md section 10 "Admissions Application"
export const AdmissionsApplication: CollectionConfig = {
  slug: 'admissions-applications',
  admin: { useAsTitle: 'studentName' },
  access: {
    create: () => true, // public can submit
    read: ({ req }) => Boolean(req.user), // only logged-in staff can read
  },
  fields: [
    { name: 'studentName', type: 'text', required: true },
    { name: 'guardianContact', type: 'text', required: true },
    { name: 'countryLocation', type: 'text', required: true },
    { name: 'ageOrGrade', type: 'text', required: true },
    { name: 'message', type: 'textarea' },
    {
      name: 'status', type: 'select', required: true, defaultValue: 'New',
      options: ['New', 'In review', 'Contacted', 'Closed'],
    },
    { name: 'submittedDate', type: 'date', required: true, defaultValue: () => new Date().toISOString() },
  ],
}
