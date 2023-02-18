export interface ProductProps {
  name: string
  description: string
  price: number
  stock: number
}

export interface CreateProductInput {
  name: string
  price: number
  stock: number
  description: string
}

interface FieldProps {
  field: keyof ProductProps
  label: string
  type: 'text' | 'textarea' | 'number'
}

export type RenderFieldsProps = FieldProps[]
