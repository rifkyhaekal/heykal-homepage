import {
  Container,
  Badge,
  List,
  ListItem,
  AspectRatio,
  SimpleGrid
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Ngangkotin">
    <Container>
      <Title>
        Ngangkotin <Badge>2021-2024</Badge>
      </Title>
      <P>
        Ngangkotin singkatan dari Ngangge Angkot Online diambil dari kata
        "Ngangge" merupakan Bahasa Sunda yang dalam Bahasa Indonesia artinya
        adalah "Pakai" adalah aplikasi Android yang dibuat untuk bikin
        transportasi umum di Tasikmalaya jadi lebih modern dan nyaman. Aplikasi
        ini punya dua versi: satu buat penumpang dan satu lagi buat sopir
        angkot, yang dibangun pakai Android Kotlin dan Jetpack Compose. Selain
        itu, ada juga admin web app berbasis React dan backend menggunakan
        Node.js (Hapi.js).
      </P>
      <P>
        Supaya semuanya terasa real-time, Ngangkotin memanfaatkan WebSocket dan
        Redis buat melacak posisi angkot secara live. Jadi penumpang bisa tahu
        angkotnya lagi di mana dan kira-kira bakal sampai kapan. Bukan cuma soal
        praktis, aplikasi ini juga fokus ke keamanan dan transparansi.
      </P>
      <P>
        Penumpang terutama perempuan dan anak-anak bisa melihat siapa sopirnya,
        seperti apa angkotnya, dan estimasi waktu tunggu lewat update lokasi
        secara langsung. Hasilnya, naik angkot jadi lebih gampang, lebih pasti,
        dan pastinya lebih aman.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            NodeJS, Hapi.js, React, Kotlin, Mapbox, Websocket, Redis, PostgreSQL
          </span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/ngangkotin_01.png"
        alt="Ngangkotin"
        caption="App Admin"
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} my={4}>
        <WorkImage
          src="/images/works/ngangkotin_02.png"
          alt="Ngangkotin"
          caption="App Pengemudi"
        />
        <WorkImage
          src="/images/works/ngangkotin_03.png"
          alt="Ngangkotin"
          caption="App Penumpang"
        />
      </SimpleGrid>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/ShYjLxgxHik"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
