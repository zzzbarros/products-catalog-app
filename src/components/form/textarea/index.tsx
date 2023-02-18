import { forwardRef } from 'react'
import { Textarea } from '@chakra-ui/react'
import { ErrorWrapper } from '../error'
import type { TextareaProps } from '@chakra-ui/react'
import type { ErrorProps } from '../error'

type Props = TextareaProps & ErrorProps

export default forwardRef<HTMLTextAreaElement, Props>(({ error, ...rest }, ref) => {
  return (
    <ErrorWrapper {...{ error }}>
      <Textarea {...rest} ref={ref} />
    </ErrorWrapper>
  )
})
