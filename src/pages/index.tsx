import { NextPage } from 'next'
import Hero from '@/components/Hero'
import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

const Index: NextPage = () => (
  <>
    <NavBar />
    <Container height="100vh">
      <Hero />
      <Footer />
    </Container>
  </>
)

export default Index
