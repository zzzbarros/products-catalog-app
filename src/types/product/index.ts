export interface ProductProps {
  id: number
  name: string
  description: string
  price: number
  stock: number
}

export type ProductPageProps = {
  List: { products: ProductProps[] }
}
