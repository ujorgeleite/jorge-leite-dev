import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

import {Header} from '../components/Header'
import { Flex } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex>
          <Header/>
          <Component flex="1" {...pageProps}/>
      </Flex>
      </ChakraProvider>
 
    )
  }
  export default MyApp
  