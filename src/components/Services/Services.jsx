import { useState } from 'react'
import './Services.scss'
import imgServices from '../../assets/images/services.png'
import imgAccesorios from '../../assets/images/accesorios.png'
import imgRepuestos from '../../assets/images/repuestos.png'
import imgRepotenciacion from '../../assets/images/repotenciacion.png'
import imgSolucionesTi from '../../assets/images/soluciones-ti.png'
import imgInstalacionProgramas from '../../assets/images/instalacion-programas.png'
import imgInstalacionRed from '../../assets/images/instalacion-red.png'
import imgInstalacionCamaras from '../../assets/images/instalacion-camaras.png'
import imgDesarrolloWeb from '../../assets/images/desarrollo-web.png'
const services = [
  {
    icon: <img src={imgAccesorios}
               alt="imgAccesorios"
               className="img-services"/>,
    title: 'Accesorios de Tecnología',
    desc: 'Los mejores accesorios para mejorar tu experiencia.',
    whatsapp:
    'Hola, me interesa el servicio de Accesorios de Tecnología.'
  },
  {
    icon: <img src={imgRepuestos}
               alt="imgRepuestos"
               className="img-services"/>,
    title: 'Repuestos Informáticos',
    desc: 'Componentes originales y compatibles con garantía.',
    whatsapp:
      'Hola, me interesa el servicio de Repuestos Informáticos.'
  },
  {
    icon: <img src={imgRepotenciacion}
               alt="imgRepotenciacion"
               className="img-services"/>,
    title: 'Repotenciación de PC y Laptop',
    desc: 'Mejoramos el rendimiento de tus equipos.',
    whatsapp:
      'Hola, me interesa el servicio de Repotenciación'
  },
  {
    icon: <img src={imgSolucionesTi}
               alt="imgSolucionesTi"
               className="img-services"/>,
    title: 'Problemas de TI e Informática',
    desc: 'Solucionamos errores de hardware y software.',
     whatsapp:
      'Hola, tengo un problema de TI.'
  },
  {
    icon: <img src={imgInstalacionProgramas}
               alt="imgInstalacionProgramas"
               className="img-services"/>,
    title: 'Instalación y Activación de Programas Originales',
    desc: 'Software original y configuraciones profesionales.',
     whatsapp:
      'Hola, me interesa el servicio de Instalación de Programas Originales.'
  },
  {
    icon: <img src={imgDesarrolloWeb}
               alt="imgDesarrolloWeb"
               className="img-services"/>,
    title: 'Desarrollo de Páginas y Sistemas Web',
    desc: 'Creamos páginas y sistemas modernos.',
     whatsapp:
      'Hola, me interesa el servicio de Desarrollo de Paginas Web.'
  },
  {
    icon: <img src={imgInstalacionCamaras}
               alt="imgInstalacionCamaras"
               className="img-services"/>,
    title: 'Cámaras de Seguridad',
    desc: 'Videovigilancia profesional para hogares y negocios.',
     whatsapp:
      'Hola, me interesa el servicio de Cámaras de Seguridad.'
  },
  {
    icon: <img src={imgInstalacionRed}
               alt="imgInstalacionRed"
               className="img-services"/>,
    title: 'Instalación de Cableado Estructurado de Red',
    desc: 'Redes estables, organizadas y de alto rendimiento.',
     whatsapp:
      'Hola, me interesa el servicio de Cableado Estructurado de Red.'
  },
]

function Services() {
  const [selectedService, setSelectedService] = useState(null)
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