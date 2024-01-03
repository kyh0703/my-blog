const withTwin = require('./withTwin')
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin(
  withContentlayer({
    trailingSlash: true,
    // Configure 'pageExtensions' to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'tx', 'tsx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
  }),
)

module.exports = nextConfig
