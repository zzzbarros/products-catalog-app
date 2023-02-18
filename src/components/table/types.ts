import type { ReactNode } from 'react'
import type { TableProps } from '@chakra-ui/react'
import type { ProductProps } from '@/types'

export interface Props extends TableProps {
  titles: string[]
  render: () => ReactNode[][]
  onRowClick?(item: any): void
  data: ProductProps[]
  loading: boolean
}

export type { ReactNode }
