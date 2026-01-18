import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNgangkotin from '../public/images/works/ngangkotin.jpg'

const Works = () => (
  <Layout title="Pekerjaan">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Pekerjaan
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="ngangkotin"
            title="Ngangkotin"
            thumbnail={thumbNgangkotin}
          >
            Ngangkotin (Ngangge Angkot Online) adalah sebuah sistem transportasi
            angkutan kota (angkot) online yang dikembangkan sebagai proyek tugas
            akhir studi sarjana saya.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
