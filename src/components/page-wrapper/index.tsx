import { useRouter } from 'next/router'
import { Flex, Link } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import type { FlexProps } from '@chakra-ui/react'

interface Props extends FlexProps {
  hideGoBack?: boolean
}

export default ({ hideGoBack = false, children, ...rest }: Props) => {
  const router = useRouter()


  return (
    <Flex justify='center' minHeight='100vh' maxWidth='100vw' background='gray.200' padding={{ base: 0, md: 20 }}>
      <Flex
        flexDir='column'
        background='white'
        minHeight='100%'
        minWidth={{ base: '100%', md: '60%' }}
        px={{ base: 4, md: 20 }}
        py={{ base: 12, md: 20 }}
        borderRadius={6}
        boxShadow='xl'
        gap={{ base: 10, md: 8 }}
        {...rest}
      >
        <Flex align='center' gap={2}>
          {!hideGoBack && (
            <Flex align='center' fontSize={{ base: 14, md: 16 }} gap={2} title='retornar para página anterior'>
              <ArrowBackIcon />
              <Link onClick={() => router.back()}>Voltar</Link>
            </Flex>
          )}
        </Flex>
        {children}
      </Flex>
    </Flex>
  )
}
