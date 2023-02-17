import { memo } from 'react'
import type { ReactNode } from 'react'
import { Box, Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import type { TableProps } from '@chakra-ui/react'
import { Scrollbar } from '@/styles/theme'

interface Props extends TableProps {
  titles: string[]
  render: ReactNode[][]
  onRowClick?(item: any): void
  data: any
}

export default memo(({ titles, render, data, onRowClick, ...rest }: Props) => {
  return (
    <Box overflowX='auto' css={Scrollbar}>
      <Table size='lg' {...rest}>
        <Thead>
          <Tr>
            {titles.map((title) => {
              return (
                <Th
                  key={title}
                  color='white'
                  fontSize={14}
                  fontFamily='Roboto'
                  lineHeight='16px'
                  width='auto'
                  bg='blackAlpha.800'
                >
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Text fontSize={14} lineHeight='16px'>
                      {title}
                    </Text>
                  </Flex>
                </Th>
              )
            })}
          </Tr>
        </Thead>
        <Tbody>
          {render.map((row, i) => (
            <Tr key={i} fontSize='14px' cursor={onRowClick && 'pointer'} onClick={() => onRowClick?.(data[i])}>
              {row.map((val: ReactNode, index: number) => (
                <Td key={index}>{val}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
})
