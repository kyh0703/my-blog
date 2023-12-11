'use client'

import GlobalStyles from '@/styles/GlobalStyles'
import Layout from '@/components/templates/Layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Contentlayer Next.js Example</title>
      </head>
      <body>
        <GlobalStyles />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
