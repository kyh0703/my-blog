import Link from 'next/link'
import tw, { styled, css, theme } from 'twin.macro'

import Button from '@/components/atoms/Button'

const HeaderRoot = styled.header(tw`h-[88px]`)

const Nav = styled.div([
  tw`flex items-center`,
  css`
    height: 56px;
    & > span:not(:first-child) {
    }
  `,
])

const NavLink = styled.span(tw`inline`)

const Anchor = styled.span(tw`cursor-pointer hover:text-[#5670e1]`)

const Header = () => {
  return (
    <HeaderRoot>
      <div tw="flex pl-1 pr-1 justify-between">
        <Nav as="nav">
          <NavLink>
            <Link href="/">
              <Anchor>{/* TODO LOGO */}</Anchor>
            </Link>
          </NavLink>
        </Nav>
        <Nav as="nav"></Nav>
        <Nav as="nav">
          <NavLink>
            <Link href="/">
              <Anchor as="a">Home</Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <div tw="block">
              <Link href="/">
                <Anchor as="a">Blog</Anchor>
              </Link>
            </div>
          </NavLink>
        </Nav>
      </div>
    </HeaderRoot>
  )
}

export default Header
