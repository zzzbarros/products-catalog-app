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
    <Flex justify='center' minHeight='100vh' maxWidth='100vw' background='gray.200' padding={20}>
      <Flex
        flexDir='column'
        background='white'
        minHeight='100%'
        minWidth='60%'
        padding={20}
        borderRadius={6}
        boxShadow='xl'
        gap={8}
        {...rest}
      >
        <Flex align='center' gap={2}>
          {!hideGoBack && (
            <Flex align='center' gap={2}>
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
