import "./Projects.scss"
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/Navbar/Navbar";
import veterinariaWeb from "./images/veterinaria-web.png"
import gymWeb from "./images/gym-web.png"
function Projects() {
  return (
    <>
      <Helmet>
        <title>Proyectos | Servicios Tecnológicos CEBRA</title>

        <meta
          name="description"
          content="Conoce algunos de los proyectos desarrollados por Servicios Tecnológicos CEBRA."
        />
      </Helmet>
      
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          padding: "120px 40px",
          background: "#0d1117",
          color: "#fff",
        }}
      >
        <div className="project">
          <h1 className="project-title">Proyectos en Desarrollo</h1>

          <p className="project-subtitle">Paginas Web</p>
          <div className="projects-grid">
            <div className="project-card">
              <img className="img-visual" src={veterinariaWeb} />

              <div className="project-card-content">
                <h3>VETERINARIA WEB</h3>
                <button
                  onClick={() => window.open("https://veterinariaweb-stcebra.vercel.app/", "_blank")}
                  style={{ cursor: "pointer" }}
                >Ver plantilla</button>
              </div>
            </div>
            <div className="project-card">
              <img className="img-visual" src={gymWeb} />

              <div className="project-card-content">
                <h3>GYM WEB</h3>
                <button
                  onClick={() => window.open("https://gymweb-stcebra.vercel.app/", "_blank")}
                  style={{ cursor: "pointer" }}
                >Ver plantilla</button>
              </div>
            </div>
          </div>

        </div>
        
      </main>
    </>
  );
}

export default Projects;