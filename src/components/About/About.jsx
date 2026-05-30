import './About.scss'
import technician from '../../assets/images/technician.jpg'

//icons
//icons
import {ShieldCheck} from 'lucide-react'
//img
import aboutBg from '../../assets/images/about-bg.png'

function About() {
  return (
    <section
      className="about"
      id="nosotros"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >

      <div className="container about-container">

        <div className="about-left">

          <small>¿POR QUÉ ELEGIR A CEBRA?</small>

          <h2>
            Mejores que la
            <span> competencia</span>
          </h2>

          <p>
            Ofrecemos soluciones tecnológicas modernas con atención
            personalizada, soporte eficiente y garantía profesional.
          </p>

          <div className="about-list">

            <div className="about-item">
              <span></span>
              <p>Buenas prácticas en cada proceso</p>
            </div>

            <div className="about-item">
              <span></span>
              <p>Tecnología actualizada y eficiente</p>
            </div>

            <div className="about-item">
              <span></span>
              <p>Atención personalizada</p>
            </div>

            <div className="about-item">
              <span></span>
              <p>Garantía en todos nuestros servicios</p>
            </div>

            <div className="about-item">
              <span></span>
              <p>Operamos a nivel nacional</p>
            </div>

          </div>

        </div>

        <div className="about-box">
         <ShieldCheck className='about-icon'/>
          <div className="floating-card">
            Calidad, Seguridad y Confianza
          </div>

        </div>

      </div>

    </section>
  )
}

export default About