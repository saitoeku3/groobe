import React from 'react'
import NextHead from 'next/head'

type Props = {
  title?: string
}

const Head: React.FC<Props> = ({ title = '好きな音楽を誰とでも' }) => (
  <NextHead>
    <title>{`${title} - groobe`}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </NextHead>
)

export default Head
