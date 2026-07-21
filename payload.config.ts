import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Faculty } from './collections/Faculty'
import { Subject } from './collections/Subject'
import { Publication } from './collections/Publication'
import { News } from './collections/News'
import { Event } from './collections/Event'
import { Alumni } from './collections/Alumni'
import { Milestone } from './collections/Milestone'
import { Award } from './collections/Award'
import { Leadership } from './collections/Leadership'
import { GalleryItem } from './collections/GalleryItem'
import { AdmissionsApplication } from './collections/AdmissionsApplication'
import { ContactInquiry } from './collections/ContactInquiry'
import { SiteSettings } from './collections/Globals'

// This file is the CMS half of ADR-001's decision (Next.js + Payload,
// decoupled, bilingual). Every collection below maps 1:1 to a section
// in VVG-Content-Schema.md - if you add a field here, add it there too,
// and vice versa, so the two never drift apart.
export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'CHANGE_ME_before_deploying',
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || '' },
  }),
  editor: lexicalEditor({}),
  collections: [
    Users,
    Media,
    Faculty,
    Subject,
    Publication,
    News,
    Event,
    Alumni,
    Milestone,
    Award,
    Leadership,
    GalleryItem,
    AdmissionsApplication,
    ContactInquiry,
  ],
  globals: [SiteSettings],
  typescript: { outputFile: 'payload-types.ts' },
})
