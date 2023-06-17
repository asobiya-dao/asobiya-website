import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <Heading fontSize="8vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'asobiya',
}
