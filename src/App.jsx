import { useState } from "react";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Banner from "./components/Banner/Banner";

function App() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <>
      <Navbar />
      <Hero 
        setSelectedService={setSelectedService}
      />
      <Banner />
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

export default App