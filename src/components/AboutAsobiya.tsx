import { Heading, Text, Container, VStack, Link, Box } from '@chakra-ui/react'

const AboutAsobiya = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1" size="2xl">
        asobiyaについて
      </Heading>

      <Box
        position="relative"
        width="100%"
        height="0"
        padding="56.2500% 0 0 0"
        boxShadow="0 2px 8px 0 rgba(63, 69, 81, 0.16)"
        marginTop="1.6em"
        marginBottom="0.9em"
        overflow="hidden"
        borderRadius="8px"
        willChange="transform"
      >
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            border: 'none',
            padding: '0',
            margin: '0',
          }}
          src="https://www.canva.com/design/DAFi4v3hzC0/view?embed"
          allowFullScreen
        ></iframe>
      </Box>

      <VStack paddingTop="50px" spacing="2" alignItems="flex-start">
        <Heading as="h2" size="lg" paddingBottom="10px">
          コミュニティ概要
        </Heading>
        <Text fontSize="xl">コミュニティ名 : asobiya (読み : あそびや)</Text>
        <Text fontSize="xl">創設日 : 2023年3月6日</Text>
        <Text fontSize="xl">参加者 : インターネットの中で偶然繋がった人々</Text>
        <Text fontSize="xl">参加人数 : 約50名</Text>
      </VStack>

      <VStack paddingTop="50px" spacing="2" alignItems="flex-start">
        <Heading as="h2" size="xl" paddingBottom="20px">
          MISSION
        </Heading>
        <Text fontSize="xl">「遊んで暮らせる世界を創り出すDAOになる。」</Text>
      </VStack>

      <VStack paddingTop="50px" spacing="2" alignItems="flex-start">
        <Heading as="h2" size="xl" paddingBottom="20px">
          VISION
        </Heading>
        <Text fontSize="xl">
          ・全人類が遊びを通じて生きがいを見出し、個人の才能と情熱を最大限に発揮できる社会を構築する。
        </Text>
        <Text fontSize="xl">
          ・テクノロジーの力によって遊びと仕事の境界をなくし、人々が自分らしい生き方を選べる世界を実現するためのイノベーションの先駆者となる。
        </Text>
      </VStack>

      <VStack paddingTop="50px" spacing="2" alignItems="flex-start">
        <Heading as="h2" size="xl" paddingBottom="20px">
          VALUES
        </Heading>
        <Text fontSize="xl">・楽しさと遊び心をもつ</Text>

        <Text fontSize="xl">・挑戦と創造を繰り返す</Text>
        <Text fontSize="xl">・多様性のあるコミュニティ</Text>
      </VStack>

      <VStack
        paddingTop="50px"
        paddingBottom="50px"
        spacing="2"
        alignItems="flex-start"
      >
        <Heading as="h2" size="lg" paddingBottom="10px">
          みなさまへ
        </Heading>
        <Text fontSize="xl">
          asobiyaは、web3や様々なテクノロジーを駆使して、「遊んで暮らせる世界を創るDAO」を目指すコミュニティとして活動しています。現時点ではまだ完全なDAOではありませんが、未来に向けてDAOとして成長していくことを目指しています。
        </Text>
        <Text fontSize="xl">
          私たちは、誰もが貢献した分だけのインセンティブを得ることができ、個性を活かして輝くことができる「非中央集権」で「自律分散」的な組織を目指しています。
        </Text>
        <Text fontSize="xl">
          そして私たちが目指す未来は、「遊んで暮らせる」素晴らしい世界です。誰もが夢見るような、楽しさと充実感に溢れた世界を共に創り上げたくありませんか？
        </Text>
        <Text fontSize="xl">
          ぜひ、あなたと一緒にその未来の組織づくりを築き上げたいと思っています。
          asobiyaは、あなたの参加を心待ちにしています。
        </Text>
      </VStack>
    </Container>
  )
}

export default AboutAsobiya
