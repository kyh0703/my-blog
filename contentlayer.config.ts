import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings, {
  type Options as AutolinkHeadingsOptions,
} from 'rehype-autolink-headings'
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from 'rehype-pretty-code'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.md',
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

const autolinkHeadingOption: AutolinkHeadingsOptions = {
  properties: {
    className: ['anchor'],
  },
}

const prettyCodeOptions: PrettyCodeOptions = {
  theme: {},
}

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, autolinkHeadingOption],
      [rehypePrettyCode, prettyCodeOptions],
    ],
  },
})
