import { useEffect, useState } from 'react'
import { services } from '../../modules/services/services';
import { heroImages } from '../../modules/hero/heroImages';
import './Hero.scss'

//icons
import {ShieldCheck, Zap, Settings} from 'lucide-react'

function Hero({ setSelectedService }) {

  //scroll
  const [scrolled, setScrolled] = useState(false)
  
  //imagen flotante
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage(prev =>
        (prev + 1) % heroImages.length
      )

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  useEffect(() => {

    const handleScroll = () => {

      if(window.scrollY > 50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)

  }, [])

  //whatsapp
  const whatsappNumber = '51906257485'

  const openWhatsApp = (
    message = 'Hola, deseo información sobre sus servicios tecnológicos.'
  ) => {

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (

    <section
      className={`hero ${scrolled ? 'hero-scrolled' : ''}`}
      id="inicio"
    >

      <div className="hero-overlay"></div>
        <img
          src={heroImages[currentImage].src}
          alt="CEBRA"
          className={`floating-logo ${heroImages[currentImage].className}`}
          style={{
            cursor: heroImages[currentImage].message
              ? 'pointer'
              : 'default'
          }}
          onClick={() => {
            if (heroImages[currentImage].message) {
                      document
                        .getElementById('game')
                        .scrollIntoView({
                          behavior:'smooth'
                        })
              /*openWhatsApp(
                heroImages[currentImage].message
              )*/
            }
          }}
        />

      <div className="container hero-layout">

        <div className="hero-main">

          <small>
            SERVICIOS TECNOLÓGICOS
          </small>

          <h1 className="hero-logo-text">
            <span className="red">CE</span>
            <span className="cyan">B</span>
            <span className="yellow">RA</span>
          </h1>

          <h2>
            Soluciones tecnológicas
            que <span>impulsan</span> tu mundo.
          </h2>

          <p className="hero-one-paragraph">
            Resolvemos problemas de TI e informática
            con servicios modernos, seguros y eficientes.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn" onClick={() => openWhatsApp()}>
              WhatsApp
            </button>

            <button className="secondary-btn"
                    onClick={() =>
                      document
                        .getElementById('servicios')
                        .scrollIntoView({
                          behavior:'smooth'
                        })
                    }
                  >
              Nuestros servicios
            </button>

          </div>

          <div className="hero-features">

            <div className="feature-box"
                  onClick={() =>

                      setSelectedService(

                        services.find(

                          service =>

                            service.id === 'instalacion-programas'
                        )
                      )
                    }
                  >

              <ShieldCheck className='heroFeature-icon'/>

              <div className="feature-content">
                <h3>Seguridad</h3>
                <p>Protección avanzada.</p>
              </div>

            </div>

            <div className="feature-box"
                 onClick={() =>

                      setSelectedService(

                        services.find(

                          service =>

                            service.id === 'soluciones-ti'
                        )
                      )
                    }>

              <Zap className='heroFeature-icon'/>

              <div className="feature-content">
                <h3>Rapidez</h3>
                <p>Soporte eficiente.</p>
              </div>

            </div>

            <div className="feature-box"
                 onClick={() =>
                      document
                        .getElementById('servicios')
                        .scrollIntoView({
                          behavior:'smooth'
                        })
                    }>

              <Settings className='heroFeature-icon'/>

              <div className="feature-content">
                <h3>Confiabilidad</h3>
                <p>Servicios garantizados y de calidad.</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Hero