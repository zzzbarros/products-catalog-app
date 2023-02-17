import { extendTheme } from '@chakra-ui/react'

export const Scrollbar = {
  '&::-webkit-scrollbar': {
    width: '20px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#dbdbdb',
    borderRadius: '10px',
    backgroundClip: 'padding-box',
    border: '4px solid transparent',
  },
}

export const theme = extendTheme({
  config: { useSystemColorMode: true },
  fonts: {
    body: 'Inter, sans-serif',
  },
  colors: {
    error: '#FF0084',
  },
})
