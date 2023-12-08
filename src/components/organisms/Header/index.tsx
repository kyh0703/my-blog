import Link from 'next/link'
import tw, { styled, css } from 'twin.macro'

import Button from '@/components/atoms/Button'
import { LightModeIcon, DarkModeIcon } from '@/components/atoms/Icon'
import Separator from '@/components/atoms/Separator'

const HeaderRoot = styled.header([tw`h-[88px] border-none`])

const Nav = styled.div([
  tw`flex h-[56px] items-center`,
  css`
    & > span:not(:first-child) {
      margin-left: 8px;
    }
  `,
])

const NavLink = styled.span([tw`inline pr-2 text-xl cursor-pointer`])

const Anchor = styled.span([tw`cursor-pointer hover:text-[#570e1]`])
const Header = () => {
  return (
    <HeaderRoot>
      <div tw="flex justify-between pl-1 pr-1">
        <Nav>{/* AppLogo */}</Nav>
        <Nav>
          <NavLink>Blog</NavLink>
          <NavLink>Categories</NavLink>
          <NavLink>About</NavLink>
        </Nav>
        <Nav>
          <DarkModeIcon size={25} />
        </Nav>
      </div>
      <Separator />
    </HeaderRoot>
  )
}

export default Header
