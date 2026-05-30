import { useState } from 'react'

import './Contact.scss'
//icons
import {Phone, Headset, MapPin} from 'lucide-react'
//email
import emailjs from '@emailjs/browser'

function Contact() {

  // email
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  //capturar cambios
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  //envio correo
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      alert('Mensaje enviado correctamente')

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

    } catch (error) {

      console.error(error)
      alert('Error al enviar mensaje')

    }
  }

  //whatsapp
  const whatsappNumber = '51906257485'

  const openWhatsApp = () => {

    const message =
      'Hola, deseo información sobre sus servicios tecnológicos.'

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

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

              <button
                className="primary-btn"
                onClick={openWhatsApp}
              >
                WhatsApp
              </button>

            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input 
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
            />

            <input 
              type="email" 
              placeholder="Correo electrónico" 
              value={formData.email}
              onChange={handleChange}
            />

            <input 
              type="tel" 
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange} 
            />

            <textarea 
              name="message"
              placeholder="Escribe tu mensaje"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">
              Enviar consulta
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact