import './Contact.scss'
//icons
import {Phone, Headset, MapPin} from 'lucide-react'

function Contact() {
  return (
    <section className="contact" id="contacto">

      <div className="container">

        <div className="contact-box">

          <div className="contact-info">

            <small>CONTÁCTANOS</small>

            <h2>
              Estamos para
              <span> ayudarte</span>
            </h2>

            <p className='contact-info-p'>
              Nuestro equipo está preparado para brindarte
              soluciones rápidas y profesionales.
            </p>

            <div className="contact-data">

              <div className="contact-item">
                <Phone />
                <p>906 257 485</p>
              </div>

              <div className="contact-item">
                <MapPin />
                <p>Paita, Piura, Perú</p>
              </div>

              <div className="contact-item">
                <Headset />
                <p>Atención nacional</p>
              </div>

            </div>

          </div>

          <form className="contact-form">

            <input type="text" placeholder="Nombre completo" />

            <input type="email" placeholder="Correo electrónico" />

            <input type="text" placeholder="Teléfono" />

            <textarea placeholder="Escribe tu mensaje"></textarea>

            <button>
              Enviar consulta
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact