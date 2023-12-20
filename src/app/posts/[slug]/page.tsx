import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()
}

export default function PostDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()
  return (
    <article tw="mx-auto prose dark:prose-invert">
      <div tw="mb-8 text-center">
        <time dateTime={post.date} tw="mb-1 text-xs text-gray">
          {new Intl.DateTimeFormat('en-US').format(new Date(post.date))}
        </time>
        <h1 tw="text-3xl font-bold">{post.title}</h1>
      </div>
    </article>
  )
}
