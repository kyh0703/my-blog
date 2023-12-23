'use client'

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import tw from 'twin.macro'

import { allPosts, Post } from 'contentlayer/generated'

const PostCard = (post: Post) => {
  return (
    <div tw="mb-8">
      <h2 tw="text-xl"></h2>
    </div>
  )
}

export default function Home() {
  return (
    <div tw="max-w-xl py-8 mx-auto">
      <h1 tw="text-4xl font-bold text-center">Next.js Example</h1>
    </div>
  )
}
