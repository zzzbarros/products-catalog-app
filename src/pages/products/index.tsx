import { PageWrapper, Table } from '@/components'
import { Flex, Text, Button } from '@chakra-ui/react'
import type { ProductPageProps } from '@/types'
import { useRouter } from 'next/router'

// TODO: remover mock
const MOCK = [
  {
    id: 1,
    name: 'Produto A',
    price: 200,
    stock: 10,
    description: 'teste',
  },
  {
    id: 2,
    name: 'Produto B',
    price: 300,
    stock: 10,
    description: 'teste',
  },
  {
    id: 4,
    name: 'Produto C',
    price: 400,
    stock: 10,
    description: 'teste',
  },
  {
    id: 5,
    name: 'Produto C',
    price: 400,
    stock: 10,
    description: 'teste',
  },
  {
    id: 6,
    name: 'Produto C',
    price: 400,
    stock: 10,
    description: 'teste',
  },
  {
    id: 7,
    name: 'Produto C',
    price: 400,
    stock: 10,
    description: 'teste',
  },
  {
    id: 8,
    name: 'Produto C',
    price: 400,
    stock: 10,
    description: 'teste',
  },
]

// TODO: remover mock
export default ({ products = MOCK }: ProductPageProps['List']) => {
  const router = useRouter()

  function render() {
    return products.map((item) => {
      return [<Text>{item.name}</Text>, <Text>{item.price}</Text>, <Text>{item.stock}</Text>]
    })
  }

  return (
    <PageWrapper gap={8} flexDir='column' width='60%' p={8}>
      <Flex justify='space-between'>
        <Text fontSize={26}>Lista de Produtos</Text>
        <Button
          bg='blackAlpha.800'
          color='white'
          children='+'
          _hover={{
            bg: 'blackAlpha.800',
            boxShadow: 'xl',
          }}
          onClick={() => router.push('products/new')}
        />
      </Flex>

      <Table render={render()} data={products} titles={['Titulo', 'Valor', 'Estoque']} />
    </PageWrapper>
  )
}
