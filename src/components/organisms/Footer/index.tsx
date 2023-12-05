import { GithubIcon } from '@/components/atoms/Icon'
import tw, { styled } from 'twin.macro'

const Anchor = styled.span(tw`cursor-pointer hover:underline`)

const Footer = () => {
  return (
    <footer>
      <div tw="flex">
        <div tw="min-w-full">
          <nav>
            <Anchor as="a">
              <GithubIcon size={22} />
            </Anchor>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
