import './Contact.scss'

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

            <p>
              Nuestro equipo está preparado para brindarte
              soluciones rápidas y profesionales.
            </p>

            <div className="contact-data">
              <p>📱 +51 906 257 485</p>
              <p>📍 Piura, Perú</p>
              <p>🚀 Atención nacional</p>
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