import { Text, Heading, Center, SimpleGrid } from '@chakra-ui/react'

import { MemberCard } from '@/components/MemberCard'
import { Container } from '@/components/Container'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const Index = () => (
  <>
    <NavBar />
    <Container minH={'100vh'}>
      <Center mt={'6em'}>
        <Heading>Members</Heading>
      </Center>
      <Center mt={'2em'}>
        <Text color={'text'}>
          ここに乗るメンバーの情報を募集しています！ Discordにてご連絡ください。
        </Text>
      </Center>
      <Center mt={'2em'}>
        <SimpleGrid spacing={'100px'} mt={6} columns={[1, 1, 2, 2, 3]}>
          <MemberCard
            name={'asobiyaちゃん'}
            twitter={'asobiya_dao'}
            discord={'asobiyaちゃん#7154'}
            bio={'Proud member of asobiya'}
          />
          <MemberCard
            name={'shokaji｜しょーかじ'}
            avatar={'avatar-shokaji.jpg'}
            discord={'shokaji'}
            twitter={'shokaji_z'}
            skills={'Meme, Guitar, 散歩, 聞き上手'}
            bio={'asobiya Founder'}
          />
          <MemberCard
            name={'A.J. えーじぇい'}
            avatar={'avatar-aj.jpg'}
            discord={'a.j.official'}
            twitter={'JanadoNovel'}
            skills={'絵描き, DTM, バイク整備 '}
            bio={'自律分散型絵描き'}
          />
          <MemberCard
            name={'karawapo'}
            avatar={'avatar-karawapoeth.png'}
            discord={'karawapo'}
            twitter={'karawapoeth'}
            skills={'替え歌, frontend, web3'}
            bio={'謎の実在人物'}
          />
          <MemberCard
            name={'Sushi yam'}
            avatar={'avator-sushiyam.jpg'}
            discord={'sushi yam'}
            twitter={''}
            skills={'田舎暮らし, 建築DIY, 発酵料理, web3'}
            bio={'実験大好き人間'}
          />
        </SimpleGrid>
      </Center>
    </Container>
    <Container>
      <Footer />
    </Container>
  </>
)

export default Index
