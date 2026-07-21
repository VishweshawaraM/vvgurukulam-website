import type { CollectionConfig } from 'payload'

// The six roles from VVG-Phase0-Decisions.md, section B.
// Rollout starts with a single Super Administrator (you) - other roles
// added whenever you're ready to delegate. See that doc for the current
// sign-off status of each role.
export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: { useAsTitle: 'email' },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => req.user?.role === 'Super Administrator',
    update: ({ req }) => req.user?.role === 'Super Administrator',
  },
  fields: [
    {
      name: 'role', type: 'select', required: true, defaultValue: 'Super Administrator',
      options: [
        'Super Administrator',
        'Principal',
        'Office Staff',
        'Faculty',
        'Media Team',
        'Research Team',
      ],
    },
    { name: 'linkedFaculty', type: 'relationship', relationTo: 'faculty', admin: { description: 'If this user is also a Faculty profile' } },
  ],
}
