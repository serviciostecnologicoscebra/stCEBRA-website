import './Features.scss'

const data = [
  {
    icon:'🛡️',
    title:'Seguridad',
    desc:'Protegemos tu información.'
  },
  {
    icon:'⚙️',
    title:'Confiabilidad',
    desc:'Servicios garantizados.'
  },
  {
    icon:'⚡',
    title:'Rapidez',
    desc:'Soluciones eficientes.'
  },
  {
    icon:'🎧',
    title:'Soporte',
    desc:'Atención personalizada.'
  }
]

function Features() {
  return (
    <section className="features">
      <div className="container features-grid">

        {data.map((item,index)=>(
          <div className="feature-card" key={index}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Features