import { useEffect, useState } from 'react'
import './Hero.scss'

//icons
import {ShieldCheck, Zap, Settings} from 'lucide-react'
import logo from '../../assets/images/logo.png'

function Hero() {

  //scroll
  const [scrolled, setScrolled] = useState(false)

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

  return (

    <section
      className={`hero ${scrolled ? 'hero-scrolled' : ''}`}
      id="inicio"
    >

      <div className="hero-overlay"></div>
        <img
          src={logo}
          alt="CEBRA"
          className="floating-logo"
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

          <p>
            Resolvemos problemas de TI e informática
            con servicios modernos, seguros y eficientes.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              WhatsApp
            </button>

            <button className="secondary-btn">
              Nuestros servicios
            </button>

          </div>

          <div className="hero-features">

            <div className="feature-box">

              <ShieldCheck className='heroFeature-icon'/>

              <div className="feature-content">
                <h3>Seguridad</h3>
                <p>Protección avanzada.</p>
              </div>

            </div>

            <div className="feature-box">

              <Zap className='heroFeature-icon'/>

              <div className="feature-content">
                <h3>Rapidez</h3>
                <p>Soporte eficiente.</p>
              </div>

            </div>

            <div className="feature-box">

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