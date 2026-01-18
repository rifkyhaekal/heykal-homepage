import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelCatLoader from '../voxel-cat-loader'

const LazyVoxelCat = dynamic(() => import('../voxel-cat'), {
  ssr: false,
  loading: () => <VoxelCatLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Haekal's homepage" />
        <meta name="author" content="Rifky Haekal Al-Fadillah" />
        <meta name="author" content="heykal" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="twitter:title" content="Rifky Haekal" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rifkyhaekal" />
        <meta name="twitter:creator" content="@rifkyhaekal" />
        <meta property="og:site_name" content="Rifky Haekal Al-Fadillah" />
        <meta name="og:title" content="Rifky Haekal Al-Fadillah" />
        <meta property="og:type" content="website" />
        <title>Haekal - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelCat />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
