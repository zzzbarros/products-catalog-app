import { Button, Flex, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { PageWrapper, Input, Textarea } from '@/components'
import { useCreateProduct } from '@/hooks'
import type { ProductProps, RenderFieldsProps } from '@/types'

const fields: RenderFieldsProps = [
  { field: 'name', label: 'Nome do produto', type: 'text' },
  { field: 'description', label: 'Descrição', type: 'textarea' },
  { field: 'price', label: 'Preço', type: 'number' },
  { field: 'stock', label: 'Estoque', type: 'number' },
]

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductProps>({})

  const { create } = useCreateProduct()

  return (
    <PageWrapper>
      <Flex flexDir='column' justify='space-between' gap={8} height='100%'>
        <form id='form-id' onSubmit={handleSubmit(create)}>
          <Flex flexDir='column' gap={8}>
            <Text fontSize={26}>Novo produto</Text>
            {fields.map(({ field, label, type }) => {
              return (
                <Flex w='100%' gap={8}>
                  <Text w={150}>{label}</Text>
                  {type === 'textarea' ? (
                    <Textarea
                      w={300}
                      {...register(field, { required: 'Campo obrigatório' })}
                      error={errors[field]?.message}
                    />
                  ) : (
                    <Input
                      w={300}
                      {...register(field, { required: 'Campo obrigatório' })}
                      error={errors[field]?.message}
                      type={type}
                    />
                  )}
                </Flex>
              )
            })}
          </Flex>
        </form>
        <Button form='form-id' type='submit'>
          Adicionar
        </Button>
      </Flex>
    </PageWrapper>
  )
}
