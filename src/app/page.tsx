'use client'

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import tw from 'twin.macro'

import { allPosts, Post } from 'contentlayer/generated'
import Markdown from '@/components/atoms/Markdown'

const PostCard = (post: Post) => {
  return (
    <div tw="mb-8">
      <h2 tw="text-xl">
        <Link
          href={post.url}
          tw="text-blue-500 hover:text-blue-900"
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} tw="block mb-2 text-xs text-gray">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <Markdown content={post.body.raw} />
      <div>post url {post.url}</div>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div tw="max-w-xl py-8 mx-auto">
      <h1 tw="text-4xl font-bold text-center">블로그</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
