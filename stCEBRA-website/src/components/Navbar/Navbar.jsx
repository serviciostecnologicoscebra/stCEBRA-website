import './Navbar.scss'
import { FaWhatsapp } from 'react-icons/fa'

import logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* LOGO + TEXTO */}
        <div className="brand">

          <img src={logo} alt="CEBRA Logo" />

          <div className="brand-text">

            <p className="top-text">
              SERVICIOS TECNOLÓGICOS
            </p>

            <h1 className="logo-text">
              <span className="red">CE</span>
              <span className="cyan">B</span>
              <span className="yellow">RA</span>
            </h1>

          </div>

        </div>

        {/* MENU */}
        <nav>
          <a href="#inicio">INICIO</a>
          <a href="#servicios">SERVICIOS</a>
          <a href="#nosotros">¿POR QUÉ ELEGIRNOS?</a>
          <a href="#contacto">CONTACTO</a>
        </nav>

        {/* BOTON */}
        <button>
          <FaWhatsapp />
          +51 906 257 485
        </button>

      </div>

    </header>
  )
}

export default Navbar