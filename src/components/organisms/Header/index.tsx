import Link from 'next/link'
import tw, { styled, css } from 'twin.macro'

import {
  LightModeIcon,
  DarkModeIcon,
  EmojiPeopleIcon,
} from '@/components/atoms/Icon'

const HeaderRoot = styled.header([tw`h-[56px] border-none`])

const Nav = styled.div([
  tw`flex h-[56px] items-center text-base`,
  css`
    & > span:not(:first-child) {
      margin-left: 8px;
    }
  `,
])

const NavLink = styled.span([tw`inline pr-2 text-xl cursor-pointer`])

const Header = () => {
  return (
    <HeaderRoot>
      <div tw="flex justify-between pl-1 pr-1">
        <Nav>
          <NavLink>Blog</NavLink>
          <NavLink>Categories</NavLink>
        </Nav>
        <Nav>
          <EmojiPeopleIcon size={26} />
          <DarkModeIcon size={26} />
        </Nav>
      </div>
    </HeaderRoot>
  )
}

export default Header
