import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hey, aku seorang Full-Stack Developer asal Kuningan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rifky Haekal Al-Fadillah
          </Heading>
          <p>
            Full-Stack Developer · Problem Solver · Ngoding sampai lupa waktu
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <Image
                src="/images/haekal.jpg"
                alt="Profile image"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Pekerjaan
        </Heading>
        <Paragraph>
          Hey! Aku Haekal, seorang Full-Stack Developer dari Indonesia yang
          senang bikin aplikasi web dan backend yang rapi, scalable, dan enak
          dirawat. Buatku, ngoding bukan cuma soal bikin fitur jalan, tapi juga
          soal bikin kode yang bersih dan mudah dipahami.
          <br />
          <br />
          Saat ini, aku bekerja sebagai Software Enginerr di{' '}
          <Link
            as={NextLink}
            href="https://www.ysi.co.id/"
            passHref
            target="_blank"
          >
            PT. Yafii Solusi Indonesia
          </Link>
          . Di luar kerjaan kantor, aku juga sering ngulik project pribadi, coba
          teknologi baru, dan eksplor hal-hal seru di dunia software
          development.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Intip Portofolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Lahir dan besar di Kuningan, Jawa Barat.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Lulus Sarjana Informatika dari Universitas Siliwangi.
        </BioSection>
        <BioSection>
          <BioYear>2023 - sekarang</BioYear>
          Berkarier sebagai Software Engineer di{' '}
          <Link
            as={NextLink}
            href="https://www.ysi.co.id/"
            passHref
            target="_blank"
          >
            PT. Yafii Solusi Indonesia
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Aku ♥
        </Heading>
        <Paragraph>
          Masak iseng, main game kalau capek, dengerin musik dan ngopi sambil
          ngoding, dan eksplor dunia Machine Learning.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Temukan aku di sini
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/rifkyhaekal" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @rifkyhaekal
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/rifkyhaekal" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @rifkyhaekal
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/rhalfad" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @rhalfad
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/rifkyhaekal/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Rifky Haekal Al-Fadillah
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
