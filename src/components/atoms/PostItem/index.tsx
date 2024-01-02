import { Post } from 'contentlayer/generated'
import tw, { styled, css, theme } from 'twin.macro'

const PostItemContainer = styled.div(() => [
  tw`pt-12 pb-12`,
  css`
    &:first-child {
      padding-top: 0;
    }
    & + & {
    }
    h2 {
      font-size: 2rem;
      margin-top: 0;
      margin-bottom: 0%;
      &:hover {
      }
    }
  `,
])

const PostItemTitle = styled.h2(() => [
  tw`text-3xl mt-0 mb-0 hover:text-blue-900`,
])

const PostItemText = styled.p(() => [tw`mt-8`])

type PostItemProps = {
  post: Post
}

const PostItem = () => {
  return <div>PostItem</div>
}

export default PostItem
