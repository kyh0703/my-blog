'use client'

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { allPosts, Post } from 'contentlayer/generated'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div tw="max-w-xl py-8 mx-auto">
      <h1 tw="text-4xl font-bold">My Blog</h1>
      {posts.map((post, idx) => (
        <div key={idx}></div>
      ))}
    </div>
  )
}
