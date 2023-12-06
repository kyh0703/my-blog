import { Meta, StoryObj } from '@storybook/react'

import Mdx from '.'

const meta: Meta<typeof Mdx> = {
  component: Mdx,
  title: 'Atoms/Mdx',
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: { type: 'text' },
      description: 'MDX code',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Mdx>

export const Normal: Story = {
  args: {
    code: `
      # Hello, World!

      This is my first MDX file. Here's a button element <button>Click me!</button>.

      <MyComponent />
    `,
  },
}
