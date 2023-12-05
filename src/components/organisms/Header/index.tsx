import Link from 'next/link'
import tw, { styled, css, theme } from 'twin.macro'

import Button from '@/components/atoms/Button'

const HeaderRoot = styled.header(tw`h-[88px]`)

const Nav = styled.div([
  tw`flex`,
  css`
    & > span:not(:first-child) {
    }
  `,
])

const NavLink = styled.span(tw``)

const Header = () => {
  return <div>Header</div>
}

export default Header
