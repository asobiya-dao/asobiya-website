import { Heading, Text, Container, VStack } from '@chakra-ui/react'

const AboutAsobiya = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1" size="3xl">
        About asobiya
      </Heading>

      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2" size="xl" paddingBottom="20px">
          コミュニティ概要
        </Heading>
        <Text fontSize="xl">コミュニティ名 : asobiya (読み : あそびや)</Text>
        <Text fontSize="xl">創設日 : 2023年3月6日</Text>
        <Text fontSize="xl">参加者 : インターネットの中で偶然繋がった人々</Text>
        <Text fontSize="xl">参加人数 : 約50名</Text>
      </VStack>
    </Container>
  )
}

export default AboutAsobiya
