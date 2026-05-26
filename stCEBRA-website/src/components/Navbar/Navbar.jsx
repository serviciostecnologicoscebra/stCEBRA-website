import './Navbar.scss'

import { FaWhatsapp } from 'react-icons/fa'

//img
import logo from '../../assets/images/logo.png'

function Navbar() {

  return (

    <header className="navbar">

      <div className="container navbar-container">

        <div className="logo">

          <img src={logo} alt="CEBRA Logo" />

        </div>

        <nav>

          <a href="#inicio">INICIO</a>
          <a href="#servicios">SERVICIOS</a>
          <a href="#nosotros">¿POR QUÉ ELEGIRNOS?</a>
          <a href="#contacto">CONTACTO</a>

        </nav>

        <button>

          <FaWhatsapp />

          +51 906 257 485

        </button>

      </div>

    </header>

  )
}

export default Navbar