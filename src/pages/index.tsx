import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button, Flex, Text } from '@chakra-ui/react'
import { PageWrapper } from '@/components'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Product Catalog App - Challenge</title>
        <meta name='description' content='Create Product Catalog List And Create - Challenge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWrapper hideGoBack align='center' justify='space-between'>
        <Flex
          flexDir='column'
          h='100%'
          borderBottom='2px solid'
          borderColor='gray.200'
          align='center'
          justify='center'
          w='100%'
        >
          <Text fontSize={32}>Olá, seja bem-vindo!</Text>
          <Text fontSize={26} color='gray.600'>
            Acesse o seu catalogo.
          </Text>
        </Flex>
        <Flex flexDir='column' gap={8} h='100%' align='center' justify='center' w='100%'>
          <Button w={250} onClick={() => router.push('products')}>
            Listagem
          </Button>
          <Button w={250} onClick={() => router.push('products/new')}>
            Adicionar produto
          </Button>
        </Flex>
      </PageWrapper>
    </>
  )
}
