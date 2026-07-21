// NOTE: static export mode, for GitHub Pages preview deployment only.
// This does NOT include the Payload CMS backend - that needs real server
// hosting (a VPS or similar) once data fetching is wired up, per ADR-001.
// The withPayload() wrapper is removed here on purpose; re-add it and
// switch hosting when the CMS is actually connected to these pages.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vvgurukulam-website',
  images: { unoptimized: true },
}

module.exports = nextConfig
