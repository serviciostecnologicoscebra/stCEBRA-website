import './Hero.scss'

import heroImage from '../../assets/images/hero-tech.png'

import Sidebar from '../Sidebar/Sidebar'
import logo from '../../assets/images/logo.png'

function Hero() {

  return (

    <section className="hero" id="inicio">

      <div className="container hero-layout">

        <div className="hero-main">

          <small>
            SERVICIOS TECNOLÓGICOS
          </small>
          <div className="logo-text">
              <span className="red">CE</span>
              <span className="cyan">B</span>
              <span className="yellow">RA</span>
          </div>
   

          <h1>
            Soluciones tecnológicas que
            <span> impulsan </span>
            tu mundo.
          </h1>

          <p>
            Resolvemos problemas de TI e informática
            con servicios y productos modernos,
            garantizando seguridad, confiabilidad
            y el mejor rendimiento.
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
              <h3>Seguridad</h3>
              <p>Protegemos tu información.</p>
            </div>

            <div className="feature-box">
              <h3>Confiabilidad</h3>
              <p>Servicios garantizados.</p>
            </div>

            <div className="feature-box">
              <h3>Rapidez</h3>
              <p>Soluciones eficientes.</p>
            </div>

            <div className="feature-box">
              <h3>Soporte</h3>
              <p>Atención personalizada.</p>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>

          <img src={logo} alt="CEBRA" />

        </div>

        <Sidebar />

      </div>

    </section>

  )
}

export default Hero