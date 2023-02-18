import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from './constants'
import type { ProductProps } from '@/types'

export function useProducts() {
  const { loading, error, data } = useQuery<{ products: ProductProps[] }>(GET_PRODUCTS)
  const products = data?.products ?? []

  return { loading, products, error }
}
