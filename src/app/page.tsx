'use client'

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { allPosts, Post } from 'contentlayer/generated'

const PostCard = (post: Post) => {
  const Content = getMDXComponent(post.body.code)

  return (
    <div tw="mb-8">
      <h2 tw="text-xl">
        <Link href={post.url} tw="text-primary hover:text-black">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} tw="block mb-2 text-xs">
        {format(parseISO(post.date), 'LLL d, yyyy')}
      </time>
      <div tw="text-sm">
        <Content />
      </div>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div tw="max-w-xl py-8 mx-auto">
      <h1 tw="text-4xl font-bold">My Blog</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
