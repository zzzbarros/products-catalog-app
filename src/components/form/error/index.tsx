import { Box, Collapse, Text } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { theme } from '@/styles'

type ErrorProps = { error?: string }

export const ErrorWrapper = ({ error, children, ...rest }: BoxProps & ErrorProps) => {
  return (
    <Box>
      {children}
      <Collapse in={!!error}>
        <Text fontSize={12} mt={1} color={theme.colors.error}>
          {error}
        </Text>
      </Collapse>
    </Box>
  )
}

export type { ErrorProps }
