import React from 'react'
import { Themed } from 'theme-ui'
import { ColorPalette } from '@theme-ui/style-guide'

export default () => {
  return (
    <section id="colors">
      <Themed.h2>Colors</Themed.h2>
      <ColorPalette omit={[]} />
    </section>
  )
}
