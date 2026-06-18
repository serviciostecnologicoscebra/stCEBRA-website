import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-logo">

          <p className="top-text">
              SERVICIOS TECNOLÓGICOS
            </p>

            <h2 className="logo-text">
              <span className="red">CE</span>
              <span className="cyan">B</span>
              <span className="yellow">RA</span>
            </h2>

        </div>

        <div className="footer-copy">
          © Servicios Tecnológicos CEBRA.
          Derechos Reservados.
        </div>

      </div>

    </footer>
  )
}

export default Footer