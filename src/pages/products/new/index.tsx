import { Button, Flex, Text } from '@chakra-ui/react'
import { PageWrapper, Input, Textarea } from '@/components'
import { useForm } from 'react-hook-form'
import type { ProductProps } from '@/types'

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductProps>()

  function submit(data: any) {
    console.log(data, errors)
  }

  return (
    <PageWrapper flexDir='column' w='max-content' p={12} gap={8}>
      <Flex flexDir='column' justify='space-between' gap={8} height='100%'>
        <form id='form-id' onSubmit={handleSubmit(submit)}>
          <Flex flexDir='column' gap={8}>
            <Text fontSize={26}>Novo produto</Text>
            <Flex w='100%' gap={8}>
              <Text w={150}>Nome do produto</Text>
              <Input w={300} {...register('name', { required: 'Campo obrigatório' })} error={errors.name?.message} />
            </Flex>
            <Flex w='100%' gap={8}>
              <Text w={150}>Descrição</Text>
              <Textarea w={300} {...register('description')} />
            </Flex>
            <Flex w='100%' gap={8} align='center'>
              <Text w={150}>Preço</Text>
              <Input w={300} {...register('price')} type='number' />
            </Flex>
            <Flex w='100%' gap={8} align='center'>
              <Text w={150}>Estoque</Text>
              <Input w={300} {...register('stock')} />
            </Flex>
          </Flex>
        </form>
        <Button form='form-id' type='submit'>
          Adicionar
        </Button>
      </Flex>
    </PageWrapper>
  )
}
