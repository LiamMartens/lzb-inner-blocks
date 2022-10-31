import React, { useCallback, useMemo } from 'react'
import { useBlockTypes } from '../hooks';
import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  BaseControl,
  SelectControl,
  Spinner,
} from '@wordpress/components';
import type { ControlOptions } from '../types';

export type SettingsProps = {
  data: ControlOptions;
  updateData: (data: Partial<ControlOptions>) => void;
}

export const Settings = ({ data, updateData }: SettingsProps) => {
  const blockTypes = useBlockTypes()

  const blockOptions = useMemo(() => {
    if (blockTypes) {
      const options = blockTypes.map((block) => ({
        label: block.title.raw,
        value: String(block.slug)
      }))
      return [
        { disabled: true, label: __('Select one or more blocks', '@@text_domain'), value: '' },
        ...options,
      ]
    }
    return []
  }, [blockTypes])

  const handleBlocksChange = useCallback((value: string[]) => {
    updateData({ allowed_blocks: value })
  }, [])

  return (
    <PanelBody>
      <BaseControl
        id="lzb-inner-blocks-block-id"
        label={__('Block', '@@text_domain')}
        help={__('Defines the block to show here')}
      >
        {!blockTypes ? (
          <Spinner />
        ) : (
          <SelectControl<string[]>
            multiple
            height={150}
            value={data.allowed_blocks}
            options={blockOptions}
            onChange={handleBlocksChange}
          />
        )}
      </BaseControl>
    </PanelBody>
  )
}
