import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Heading display="inline-block" as="h2" fontSize={24} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const PostImage = ({ src, alt, caption, height = '100%' }) => (
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
