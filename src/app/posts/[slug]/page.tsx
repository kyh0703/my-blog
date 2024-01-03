import { allPosts } from 'contentlayer/generated'

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  return <div>My Post: {slug}</div>
}
