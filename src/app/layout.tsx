'use client'

import { Inter } from 'next/font/google'

import Header from '@/components/organisms/Header'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

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
        <Header />
        <div tw="px-6">{children}</div>
      </body>
    </html>
  )
}
