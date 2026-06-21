import { useState } from 'react'
import { services } from '../../modules/services/services';
import './Services.scss'
import imgServices from '../../assets/images/services.png'
function Services({

  selectedService,

  setSelectedService

}) {
  return (
    <>
    <section className="services" id="servicios">

      <div className="container">

        <div className="section-title">
          
          <small>NUESTROS SERVICIOS</small>

          <h2>
            Tenemos la solución que
            <span> necesitas</span>
          </h2>

          <p>
            Servicios tecnológicos modernos y eficientes para empresas,
            negocios y clientes particulares.
          </p>
          <div>
          <img
                    src={imgServices}
                    alt="imgServices"
                    className="floating-services"
                  />
                  </div>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}

              onClick={() =>

                setSelectedService(service)

              }

            >
             <div className="service-left">
              <div className="service-image">
                {service.icon}
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>

             </div>
            </div>
          ))}

        </div>

      </div>

    </section>
    {
    selectedService && (

    <div className="modal-overlay">

      <div className="modal">

        <button

          className="close-btn"

          onClick={() =>

            setSelectedService(null)

          }

        >

          ✕

        </button>

        <div className="modal-image">

          {selectedService.icon}

        </div>

        <h2>

          {selectedService.title}

        </h2>

        <p>

          {selectedService.desc}

        </p>

        <button

          className="whatsapp-btn"

          onClick={() =>

            window.open(

              `https://wa.me/51906257485?text=${encodeURIComponent(

                selectedService.whatsapp

              )}`,

              '_blank'

            )

          }

        >

          Solicitar por WhatsApp

        </button>

      </div>

    </div>

    )
    }
    </>
  )
}

export default Services