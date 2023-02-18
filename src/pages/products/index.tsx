import { useRouter } from 'next/router'
import { Flex, Text, Button } from '@chakra-ui/react'
import { PageWrapper, Table } from '@/components'
import { useProducts } from '@/hooks'

const titles = ['Título', 'Valor', 'Estoque']

export default () => {
  const router = useRouter()
  const { products, loading } = useProducts()

  const tableProps = { titles, loading, data: products, render }

  function render() {
    if (!products.length) return []

    return products.map((item) => {
      return [<Text>{item.name}</Text>, <Text>{item.price}</Text>, <Text>{item.stock}</Text>]
    })
  }

  function pushToCreate() {
    router.push('products/new')
  }

  return (
    <PageWrapper>
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
          title='adicionar novo produtos'
          onClick={pushToCreate}
        />
      </Flex>
      <Table {...tableProps} />
    </PageWrapper>
  )
}
