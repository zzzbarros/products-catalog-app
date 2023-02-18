import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { POST_PRODUCTS, GET_PRODUCTS } from '@/constants'
import type { CreateProductInput } from '@/types'

export function useCreateProduct() {
  const router = useRouter()
  const toast = useToast()

  const [createProduct] = useMutation(POST_PRODUCTS, {
    refetchQueries: [{ query: GET_PRODUCTS }, 'Products'],
  })

  async function create({ name, description, price, stock }: CreateProductInput) {
    const data = {
      name,
      description,
      price: Number(price),
      stock: Number(stock),
    }

    createProduct({
      variables: { data },
    })
      .then(async () => {
        await router.push('/products')

        toast({
          status: 'success',
          title: 'Produto criado com sucesso',
          position: 'top-right',
        })
      })
      .catch(() => {
        toast({
          status: 'error',
          title: 'Não foi possível criar o produto',
          description: 'tente novamente em alguns minutos.',
          position: 'top-right',
        })
      })
  }

  return { create }
}
