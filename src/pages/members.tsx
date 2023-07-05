import { Text, Stack, Heading, Center } from '@chakra-ui/react'

import { MemberCard } from '../components/MemberCard'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Main mt={0}>
      <Center>
        <Heading>Members</Heading>
      </Center>
      <Center>
        <Text color="text">
          ここに乗るメンバーの情報を募集しています！Discordでご連絡ください。
        </Text>
      </Center>
      <Center>
        <Stack spacing={'100px'} direction={['column', 'row']}>
          <MemberCard
            name={'asobiyaちゃん'}
            twitter={'asobiya_dao'}
            discord={'asobiyaちゃん#7154'}
            bio={'Proud member of asobiya'}
          />
          <MemberCard
            name={'karawapo'}
            discord={'karawapo'}
            twitter={'karawapoeth'}
            skills={'替え歌, frontend, web3'}
          />
        </Stack>
      </Center>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
