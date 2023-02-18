import { memo } from 'react'
import { Flex, Skeleton, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Scrollbar } from '@/styles/theme'
import type { Props, ReactNode } from './types'

export default memo(({ titles, render, data, onRowClick, loading, ...rest }: Props) => {
  const content = render()
  const isEmpty = !content.length && !loading

  if (isEmpty)
    return (
      <Flex fontSize={{ base: 18, md: 26 }} align='center' padding={{ base: 8, md: 0 }} gap={4}>
        <Search2Icon />
        <Text textAlign='center'>Não encontramos nenhum produto...</Text>
      </Flex>
    )

  return (
    <Skeleton isLoaded={!loading} h='100%' overflowX='auto' css={Scrollbar} borderRadius={8}>
      <Table size='lg' {...rest}>
        <Thead>
          <Tr>
            {titles.map((title) => {
              return (
                <Th
                  key={title}
                  fontSize={{ base: 12, md: 14 }}
                  lineHeight={4}
                  color='white'
                  width='auto'
                  fontFamily='Roboto'
                  bg='blackAlpha.800'
                >
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Text lineHeight={4}>{title}</Text>
                  </Flex>
                </Th>
              )
            })}
          </Tr>
        </Thead>
        <Tbody>
          {content.map((row, index) => (
            <Tr
              key={index}
              fontSize={{ base: 12, md: 14 }}
              cursor={onRowClick && 'pointer'}
              onClick={() => onRowClick?.(data[index])}
            >
              {row.map((val: ReactNode, index: number) => (
                <Td key={index} px={{ base: 8, md: 10, xl: 12 }}>
                  {val}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Skeleton>
  )
})
