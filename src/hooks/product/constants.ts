import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query Products {
    products {
      name
      price
      stock
    }
  }
`

export const POST_PRODUCTS = gql`
  mutation Mutation($data: CreateProductInput!) {
    createProduct(data: $data) {
      name
      description
      price
      stock
    }
  }
`
