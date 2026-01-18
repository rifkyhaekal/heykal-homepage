import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/works">
      Pekerjaan
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt, caption, height = '100%' }) => (
  <Box mb={5}>
    <Image src={src} alt={alt} w="full" h={height} borderRadius="lg" />
    {caption && (
      <Text fontSize="xs" color="gray.500" mt={1} textAlign="center">
        {caption}
      </Text>
    )}
  </Box>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
