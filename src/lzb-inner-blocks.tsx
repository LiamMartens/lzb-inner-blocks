import React from 'react';
import { addFilter } from '@wordpress/hooks';
import { Settings, Control } from './components';

// getValue, onChange, ...props
addFilter('lzb.editor.control.inner-blocks.render', 'lzb.editor', (render, { data }: React.ComponentProps<typeof Control>) => {
  return (
    <Control data={data} />
  )
});

addFilter('lzb.constructor.control.inner-blocks.settings', 'lzb.constructor', (render, { data, updateData }: React.ComponentProps<typeof Settings>) => {
  return (
    <Settings
      data={data}
      updateData={updateData}
    />
  );
});