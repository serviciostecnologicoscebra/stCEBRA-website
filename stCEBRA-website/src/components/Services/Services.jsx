import './Services.scss'

const services = [
  {
    icon: '🎧',
    title: 'Accesorios de Tecnología',
    desc: 'Periféricos y accesorios premium para mejorar tu experiencia.',
  },
  {
    icon: '💾',
    title: 'Repuestos Informáticos',
    desc: 'Componentes originales compatibles y garantizados.',
  },
  {
    icon: '💻',
    title: 'Repotenciación de PCs',
    desc: 'Mejoramos el rendimiento de tus equipos.',
  },
  {
    icon: '🛠️',
    title: 'Problemas de TI',
    desc: 'Solucionamos errores de hardware y software.',
  },
  {
    icon: '🪟',
    title: 'Instalación de Programas',
    desc: 'Software original y configuraciones profesionales.',
  },
  {
    icon: '🌐',
    title: 'Desarrollo Web',
    desc: 'Creamos páginas y sistemas modernos.',
  },
  {
    icon: '📹',
    title: 'Cámaras de Seguridad',
    desc: 'Videovigilancia profesional para hogares y negocios.',
  },
  {
    icon: '🔌',
    title: 'Cableado Estructurado',
    desc: 'Redes LAN rápidas, seguras y organizadas.',
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
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-image">
                <span>{service.icon}</span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Services