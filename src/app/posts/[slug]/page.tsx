export function generateStaticParams() {
  return [{ slug: 'hello' }, { slug: 'world' }]
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  return <div>My Post: {slug}</div>
}
