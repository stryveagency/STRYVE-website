import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ServicosSection from '../components/Servicos'
import CtaWhatsApp from '../components/CtaWhatsApp'
import Footer from '../components/Footer'

function Servicos() {
  useEffect(() => {
    document.title = 'Serviços | STRYVE'
    window.scrollTo(0, 0)
    return () => {
      document.title = 'STRYVE'
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="pt-[90px]">
        <ServicosSection />
      </main>
      <CtaWhatsApp />
      <Footer />
    </>
  )
}

export default Servicos
