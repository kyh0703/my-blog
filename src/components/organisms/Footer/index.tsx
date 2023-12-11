import Link from 'next/link'
import tw, { styled } from 'twin.macro'

import { EmailIcon, GithubIcon, LinkedInIcon } from '@/components/atoms/Icon'

const Footer = () => {
  return (
    <footer>
      <div tw="flex flex-col items-end">
        <div>
          <Link href="https://kyh0703.github.io">
            <EmailIcon />
          </Link>
          <Link href="https://kyh0703.github.io">
            <GithubIcon />
          </Link>
          <Link href="https://kyh0703.github.io">
            <LinkedInIcon />
          </Link>
        </div>
        <span tw="text-sm">
          © 2017-2023 overthinker blog Powered by Next.js, Github Pages
        </span>
      </div>
    </footer>
  )
}

export default Footer
