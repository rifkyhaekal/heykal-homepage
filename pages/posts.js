import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbWorkflowAzureDevops from '../public/images/contents/thumbWorkflowAzureDevops.webp'
import thumbEfCore from '../public/images/contents/efcore.webp'
import thumbLinq from '../public/images/contents/linq.png'
import thumbMudblazor from '../public/images/contents/mudblazor.webp'
import thumbOop from '../public/images/contents/oop.webp'
import thumbXunit from '../public/images/contents/xunit.webp'

const Posts = () => (
  <Layout title="Artikel">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Artikel Populer
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Membuat Persistence Dark Mode dan Skeleton Effect pada Blazor Menggunakan Library MudBlazor"
            thumbnail={thumbMudblazor}
            href="https://medium.com/@haekal/membuat-persistence-dark-mode-dan-skeleton-effect-dengan-mudah-menggunakan-library-mudblazor-f45ff7b94b5d"
          />
          <GridItem
            title="Melakukan CRUD Lebih Mudah dengan Entity Framework Core"
            thumbnail={thumbEfCore}
            href="https://medium.com/@haekal/melakukan-crud-lebih-mudah-dengan-entity-framework-core-2692ef8164a4"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Belajar Melakukan Unit Testing Automation dengan xUnit"
            thumbnail={thumbXunit}
            href="https://medium.com/@haekal/belajar-melakukan-unit-testing-automation-dengan-xunit-96843b2d060e"
          />
          <GridItem
            title="Abstract Class dan Interface Apa Perbedaannya? (C#)"
            thumbnail={thumbOop}
            href="https://medium.com/@haekal/class-abstract-class-dan-interface-apa-perbedaannya-c-5f9bb16e7fad"
          />
          <GridItem
            title="Berkenalan dengan LINQ pada C#"
            thumbnail={thumbLinq}
            href="https://medium.com/@haekal/berkenalan-dengan-linq-pada-c-1c1c7e6646ad"
          />
          <GridItem
            title="Mengatur Workflow Pengembangan Project Aplikasi dengan Metode Microsoft Release Flow untuk Pemula"
            thumbnail={thumbWorkflowAzureDevops}
            href="https://medium.com/@haekal/mengatur-workflow-pengembangan-project-aplikasi-dengan-metode-microsoft-release-flow-untuk-pemula-405e3b25774b"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
