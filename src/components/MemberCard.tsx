import {
  Link as ChakraLink,
  Heading,
  Text,
  Box,
  Button,
  Tag,
} from '@chakra-ui/react'
import { FaTwitter, FaDiscord } from 'react-icons/fa'

export const MemberCard = ({
  name,
  discord,
  twitter,
  bio,
  skills,
}: {
  name: string
  discord?: string
  twitter?: string
  bio?: string
  skills?: string
}) => (
  <Box minWidth={'30vh'}>
    <Heading size={'lg'}>{name}</Heading>
    {(discord || twitter) && (
      <Text mt={2}>
        {discord && (
          <>
            {' '}
            <Tag p={2}>
              <FaDiscord />
              &nbsp;
              {discord}
            </Tag>
          </>
        )}
        {twitter && (
          <>
            {' '}
            <Button
              as={ChakraLink}
              size={'sm'}
              href={`https://www.twitter.com/${twitter}`}
            >
              <FaTwitter />
              &nbsp;
              {twitter}
            </Button>
          </>
        )}
      </Text>
    )}
    {bio && (
      <Text mt={2}>
        <b>Bio:</b> {bio}
      </Text>
    )}
    {skills && (
      <Text mt={2}>
        <b>Skills:</b> {skills}
      </Text>
    )}
  </Box>
)

MemberCard.defaultProps = {
  name: 'Member Name',
  discord: 'asobiyaちゃん#7154',
  twitter: 'asobiya-dao',
  bio: null,
  skills: 'All sorts of skills',
}
