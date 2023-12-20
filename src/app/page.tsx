'use client'

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import tw from 'twin.macro'

export default function Home() {
  return (
    <div tw="max-w-xl py-8 mx-auto">
      <h1 tw="text-4xl font-bold text-center">Next.js Example</h1>
    </div>
  )
}
