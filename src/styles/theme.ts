import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    dark: {
      'text': '#47585B',
      'info': '#999999',
    },
    light: {
      'text': '#F5F8FA',
      'info': '#DADADA'
    },
    yellow: '#FFBA08'
  },
  styles: {
    global: {
      body: {
        bg: 'light.text',
        color: 'dark.text'
      }
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  }
})