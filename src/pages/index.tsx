import { Flex } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Flex as="main" maxWidth="1160px" justify="center" mx="auto">
        <TravelTypes />
      </Flex>
    </>
  )
}
