import { useState } from "react";
<<<<<<< HEAD
=======
import { Helmet } from "react-helmet-async";
>>>>>>> develop
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Banner from "../components/Banner/Banner";
import Game from "../components/Game/Game";

function Home() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <>
<<<<<<< HEAD
=======
      <Helmet>
        <title>Servicios Tecnológicos CEBRA | Mantenimiento y Tecnología</title>

        <meta
          name="description"
          content="Servicios Tecnológicos CEBRA. Mantenimiento de computadoras, instalación de Windows, Office, licencias originales, desarrollo web, cámaras de seguridad y soporte técnico."
        />

        <meta
          name="keywords"
          content="mantenimiento de computadoras, Windows, Office, soporte técnico, desarrollo web, cámaras de seguridad, Lima, Perú"
        />

        <meta name="author" content="Servicios Tecnológicos CEBRA" />
      </Helmet>
      
>>>>>>> develop
      <Navbar />
      <Hero 
        setSelectedService={setSelectedService}
      />
      <Banner />
      <Game />
      <Services 
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home