import React from 'react'
import ReactMarkdown from 'react-markdown'

type MarkdownProps = {
  content?: string
}

const Markdown = ({ content }: MarkdownProps) => {
  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default Markdown
