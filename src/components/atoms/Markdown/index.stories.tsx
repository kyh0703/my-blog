import { Meta, StoryObj } from '@storybook/react'

import Markdown from '.'

const meta: Meta<typeof Markdown> = {
  component: Markdown,
  title: 'Atoms/Markdown',
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'Input placeholder',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Markdown>

export const Normal: Story = {}
