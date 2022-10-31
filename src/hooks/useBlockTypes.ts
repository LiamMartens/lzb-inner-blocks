import { store } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

type LazyblocksPostType = {
  type: 'lazyblocks';
  id: number
  date: string
  date_gmt: string
  slug: string
  status: 'publish' | 'draft'
  title: {
    raw: string
    rendered: string
  }
}

export const useBlockTypes = () => {
  const blocks = useSelect((select) => (
    select(store).getEntityRecords('postType', 'lazyblocks', {
      per_page: -1,
      status: 'publish',
    }) as (LazyblocksPostType[] | null)
  ), [])
  return blocks
}