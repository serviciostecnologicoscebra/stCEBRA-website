import { useState } from "react";
import { Helmet } from "react-helmet-async";
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
        <meta property="og:title" content="Servicios Tecnológicos CEBRA" />

        <meta
          property="og:description"
          content="Mantenimiento de computadoras, licencias, desarrollo web y soporte técnico."
        />

        <meta property="og:image" content="/og-image.png" />

        <meta property="og:type" content="website" />
      </Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://stcebra.vercel.app/#business",
          name: "Servicios Tecnológicos CEBRA",
          url: "https://stcebra.vercel.app",
          logo: "https://stcebra.vercel.app/logo.png",
          image: "https://stcebra.vercel.app/og-image.png",
          description:
            "Servicios Tecnológicos CEBRA ofrece mantenimiento de computadoras, instalación de Windows y Office, desarrollo web, soporte técnico y soluciones tecnológicas.",

          telephone: "+51906257485",
          email: "serviciostecnologicoscebra@gmail.com",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Ciudad Blanca",
            addressLocality: "Paita",
            addressRegion: "Piura",
            addressCountry: "PE"
          },

          areaServed: {
            "@type": "Country",
            name: "Perú"
          },
        })}
      </script>
      
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