import { NextPage } from 'next'
import Hero from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Footer from '../components/Footer'

const Index: NextPage = () => (
  <Container height="100vh">
    <Hero />
    <Footer />
    <DarkModeSwitch />
  </Container>
)

export default Index
