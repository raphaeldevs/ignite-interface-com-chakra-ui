import { Flex, Divider } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { TravelTypes } from '../components/TravelTypes'
import { Carousel } from '../components/Carousel'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Flex
        as="main"
        maxWidth="1160px"
        justify="center"
        mx="auto"
        direction="column"
      >
        <TravelTypes />

        <Divider
          width="90px"
          mt="20"
          mx="auto"
          mb="3.25rem"
          borderWidth="2px"
          borderColor="dark.text"
        />

        <Carousel />
      </Flex>
    </>
  )
}
