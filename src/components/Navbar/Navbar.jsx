import { useState } from 'react'

import './Navbar.scss'
import { FaWhatsapp } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'

import logo from '../../assets/images/logo.png'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
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
    <header className="navbar">

      <div className="container navbar-container">

        {/* LOGO + TEXTO */}
        <div className="brand"
             onClick={() =>
                      document
                        .getElementById('inicio')
                        .scrollIntoView({
                          behavior:'smooth'
                        })
                    }>

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

        {/* FONDO-OSCURO */}
        {menuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* MENU */} 
        <nav className={menuOpen ? 'nav-open' : ''}>
          <a href="#inicio">INICIO</a>
          <a href="#servicios">SERVICIOS</a>
          <a href="#nosotros">¿POR QUÉ ELEGIRNOS?</a>
          <a href="#contacto">CONTACTO</a>
        </nav>

        <div
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* BOTON */}
        <button onClick={openWhatsApp}>
          <FaWhatsapp />
          <p>906 257 485</p>
        </button>

      </div>

    </header>
  )
}

export default Navbar