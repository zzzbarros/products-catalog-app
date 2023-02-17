import { Box, Collapse, Input, Text } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { theme } from '@/styles'

interface Props extends BoxProps {
  error?: string
}

export const ErrorWrapper = ({ error, children, ...rest }: Props) => {
  return (
    <Box>
      {children}
      <Collapse in={!!error}>
        <Text fontSize={12} mt={2} color={theme.colors.error}>
          {error}
        </Text>
      </Collapse>
    </Box>
  )
}
