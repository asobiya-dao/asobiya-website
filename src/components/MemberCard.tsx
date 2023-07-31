import {
  Link as ChakraLink,
  Heading,
  Text,
  Box,
  Button,
  Tag,
  Avatar,
  Center,
  Image,
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter, FaDiscord } from 'react-icons/fa'

export const MemberCard = ({
  name,
  avatar,
  discord,
  twitter,
  bio,
  skills,
}: {
  name: string
  avatar?: string
  discord?: string
  twitter?: string
  bio?: string
  skills?: string
}) => (
  <>
    <Center py={6}>
      <Box
        maxW={'xs'}
        minW={'xs'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'show'}
      >
        <Flex mt={25}></Flex>
        <Flex justify={'center'} mt={-20}>
          <Avatar
            size={'2xl'}
            src={`/images/${avatar}`}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
            <Text color={'gray.500'}>{bio}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            {(discord || twitter) && (
              <Stack spacing={0} align={'center'}>
                {discord && (
                  <Box>
                    {' '}
                    <Tag p={2} mt={'4px'}>
                      <FaDiscord />
                      &nbsp;
                      {discord}
                    </Tag>
                  </Box>
                )}
                {twitter && (
                  <Box>
                    {' '}
                    <Button
                      as={ChakraLink}
                      size={'sm'}
                      href={`https://www.twitter.com/${twitter}`}
                      mt={'4px'}
                    >
                      <FaTwitter />
                      &nbsp;
                      {twitter}
                    </Button>
                  </Box>
                )}
              </Stack>
            )}
          </Stack>

          {skills && (
            <Text align={'center'} mt={'1em'}>
              <b>Skills:</b> {skills}
            </Text>
          )}
        </Box>
      </Box>
    </Center>
  </>
)

MemberCard.defaultProps = {
  name: 'Member Name',
  avatar: 'avatar-asobiyachan.jpg',
  discord: 'asobiyaちゃん#7154',
  twitter: 'asobiya-dao',
  bio: null,
  skills: 'All sorts of skills',
}
