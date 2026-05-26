import './Navbar.scss'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <div className="logo">
          <h1>
            <span>CE</span>BRA
          </h1>
          <p>Servicios Tecnológicos</p>
        </div>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">¿Por qué elegirnos?</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <button>
          WhatsApp
        </button>

      </div>
    </header>
  )
}

export default Navbar