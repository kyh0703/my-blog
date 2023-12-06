import { useMDXComponent } from 'next-contentlayer/hooks'
import Image, { ImageProps } from 'next/image'
import { ImgHTMLAttributes } from 'react'

const RoundedImage = (props: ImageProps) => {
  return (
    <Image
      tw="rounded-lg border border-gray dark:border-gray"
      {...props}
      alt={props.alt}
    />
  )
}

const ImgToCustomImage = (attrs: ImgHTMLAttributes<HTMLImageElement>) => {
  if (!attrs.src || !attrs.alt || !attrs.width || !attrs.height) {
    throw new Error(
      "required attributes in <img> tags: 'src', 'alt', 'width', 'height'",
    )
  }

  return (
    <RoundedImage
      src={attrs.src}
      alt={attrs.alt}
      width={+attrs.width}
      height={+attrs.height}
    />
  )
}

const components = {
  img: ImgToCustomImage,
}

type MdxProps = {
  code: string
}

const Mdx = ({ code }: MdxProps) => {
  const MDXComponent = useMDXComponent(code)

  return <MDXComponent components={components} />
}

export default Mdx
