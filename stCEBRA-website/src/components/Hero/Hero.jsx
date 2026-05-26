import './Hero.scss'
import heroImage from '../../assets/images/hero-tech.png'

function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="container hero-container">

        <div className="hero-left">

          <small>SERVICIOS TECNOLÓGICOS</small>

          <h1>
            Soluciones tecnológicas que
            <span> impulsan </span>
            tu mundo.
          </h1>

          <p>
            Resolvemos problemas de TI e informática con servicios
            modernos, seguros y eficientes para empresas y hogares.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              WhatsApp
            </button>

            <button className="secondary-btn">
              Nuestros servicios
            </button>
          </div>

        </div>

        <div className="hero-right">

          <div className="circle-effect"></div>

          <img src={heroImage} alt="CEBRA" />

        </div>

      </div>

    </section>
  )
}

export default Hero