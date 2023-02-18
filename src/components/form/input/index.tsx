import { forwardRef } from 'react'
import { Input } from '@chakra-ui/react'
import { ErrorWrapper } from '../error'
import type { InputProps } from '@chakra-ui/react'
import type { ErrorProps } from '../error'

type Props = InputProps & ErrorProps

export default forwardRef<HTMLInputElement, Props>(({ error, ...rest }, ref) => {
  return (
    <ErrorWrapper {...{ error }}>
      <Input ref={ref} {...rest} />
    </ErrorWrapper>
  )
})
