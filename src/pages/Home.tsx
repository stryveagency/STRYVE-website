import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Manifesto from '../components/Manifesto'
import Servicos from '../components/Servicos'
import MotorDeCrescimento from '../components/MotorDeCrescimento'
import Resultados from '../components/Resultados'
import TrafegoPago from '../components/TrafegoPago'
import Conteudo from '../components/Conteudo'
import Planos from '../components/Planos'
import CtaWhatsApp from '../components/CtaWhatsApp'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Manifesto />
      <Servicos />
      <MotorDeCrescimento />
      <Resultados />
      <TrafegoPago />
      <Conteudo />
      <Planos />
      <CtaWhatsApp />
      <Footer />
    </>
  )
}

export default Home
