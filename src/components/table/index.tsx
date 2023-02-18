import { memo } from 'react'
import { Flex, Skeleton, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { Scrollbar } from '@/styles/theme'
import type { Props, ReactNode } from './types'

export default memo(({ titles, render, data, onRowClick, loading, ...rest }: Props) => {
  const content = render()
  const isEmpty = !content.length && !loading

  if (isEmpty)
    return (
      <Text fontSize={26} textAlign='center' padding={8}>
        Nenhum item encontrado
      </Text>
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
                  fontSize={14}
                  lineHeight={4}
                  color='white'
                  width='auto'
                  fontFamily='Roboto'
                  bg='blackAlpha.800'
                >
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Text fontSize={14} lineHeight={4}>
                      {title}
                    </Text>
                  </Flex>
                </Th>
              )
            })}
          </Tr>
        </Thead>
        <Tbody>
          {content.map((row, i) => (
            <Tr key={i} fontSize={14} cursor={onRowClick && 'pointer'} onClick={() => onRowClick?.(data[i])}>
              {row.map((val: ReactNode, index: number) => (
                <Td key={index} px={12}>
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
