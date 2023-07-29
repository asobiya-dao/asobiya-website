import { Stack, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={'/images/hero.svg'}
      backgroundSize={'contain'}
      backgroundPosition={'center center'}
      backgroundRepeat={'no-repeat'}
    ></Flex>
  )
}
