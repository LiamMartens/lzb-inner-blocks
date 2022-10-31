import React, { useMemo } from 'react'
import { BaseControl } from '@wordpress/components'
import { InnerBlocks } from '@wordpress/block-editor'
import type { ControlOptions } from '../types'

type Props = {
  data: ControlOptions
}

export const Control = ({ data }: Props) => {
  const allowedBlocks = useMemo(() => (
    data.allowed_blocks.map((slug) => `lazyblock/${slug}`)
  ), [data.allowed_blocks])

  return (
    <BaseControl id={data.name} label={data.label}>
      <InnerBlocks allowedBlocks={allowedBlocks} />
    </BaseControl>
  )
}