import './Sidebar.scss'

//img
import logo from '../../assets/images/logo.png'

import {
  FaWhatsapp,
  FaLaptop,
  FaShieldAlt,
  FaNetworkWired,
  FaTools
} from 'react-icons/fa'

function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="sidebar-top">

        <small>
          SERVICIOS TECNOLÓGICOS
        </small>

        <div className="sidebar-logo">

        <img src={logo} alt="CEBRA" />

        </div>

        <p>
          Soluciones tecnológicas profesionales
          para empresas y hogares.
        </p>

        <button>

          <FaWhatsapp />

          +51 906 257 485

        </button>

      </div>

      <div className="sidebar-services">

        <div className="sidebar-item">
          <FaLaptop />
          <span>Accesorios tecnológicos</span>
        </div>

        <div className="sidebar-item">
          <FaTools />
          <span>Repuestos informáticos</span>
        </div>

        <div className="sidebar-item">
          <FaShieldAlt />
          <span>Cámaras de seguridad</span>
        </div>

        <div className="sidebar-item">
          <FaNetworkWired />
          <span>Cableado estructurado</span>
        </div>

      </div>

      <div className="sidebar-card">

        <h3>
          Calidad, Seguridad y Confianza
        </h3>

      </div>

    </aside>

  )
}

export default Sidebar