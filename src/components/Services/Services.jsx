import './Services.scss'
import imgServices from '../../assets/images/services.png'

const services = [
  {
    icon: '🎧',
    title: 'Accesorios de Tecnología',
    desc: 'Los mejores accesorios para mejorar tu experiencia.',
  },
  {
    icon: '💾',
    title: 'Repuestos Informáticos',
    desc: 'Componentes originales y compatibles con garantía.',
  },
  {
    icon: '💻',
    title: 'Repotenciación de PCs',
    desc: 'Mejoramos el rendimiento de tus equipos.',
  },
  {
    icon: '🛠️',
    title: 'Problemas de TI e Informática',
    desc: 'Solucionamos errores de hardware y software.',
  },
  {
    icon: '🪟',
    title: 'Instalación y Activación de Programas Originales',
    desc: 'Software original y configuraciones profesionales.',
  },
  {
    icon: '🌐',
    title: 'Desarrollo de Páginas y Sistemas Web',
    desc: 'Creamos páginas y sistemas modernos.',
  },
  {
    icon: '📹',
    title: 'Cámaras de Seguridad',
    desc: 'Videovigilancia profesional para hogares y negocios.',
  },
  {
    icon: '🔌',
    title: 'Instalación de Cableado Estructurado de Red',
    desc: 'Redes estables, organizadas y de alto rendimiento.',
  },
]

function Services() {
  return (
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
                    alt="CEBRA"
                    className="floating-services"
                  />
                  </div>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>
             <div className="service-left">
              <div className="service-image">
                <p>{service.icon}</p>
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
  )
}

export default Services