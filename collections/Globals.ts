import type { GlobalConfig } from 'payload'

// Matches VVG-Content-Schema.md "Global settings" table
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    { name: 'siteTitleEn', label: 'Site title (English)', type: 'text' },
    { name: 'siteTitleSa', label: 'Site title (Devanagari)', type: 'text' },
    {
      name: 'trustStats', label: 'Trust-stat numbers', type: 'array',
      fields: [
        { name: 'labelEn', type: 'text' },
        { name: 'labelSa', type: 'text' },
        { name: 'value', type: 'text' },
      ],
    },
    { name: 'homepageHeroMedia', type: 'upload', relationTo: 'media' },
    {
      name: 'donationFunds', label: 'Donation fund designations', type: 'array',
      fields: [
        { name: 'labelEn', type: 'text' },
        { name: 'labelSa', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'amount', type: 'text' },
      ],
    },
    { name: 'footerContact', type: 'textarea' },
  ],
}
