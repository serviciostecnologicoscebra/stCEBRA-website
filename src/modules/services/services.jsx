import imgAccesorios from '../../assets/images/accesorios.png'
import imgRepuestos from '../../assets/images/repuestos.png'
import imgRepotenciacion from '../../assets/images/repotenciacion.png'
import imgSolucionesTi from '../../assets/images/soluciones-ti.png'
import imgInstalacionProgramas from '../../assets/images/instalacion-programas.png'
import imgInstalacionRed from '../../assets/images/instalacion-red.png'
import imgInstalacionCamaras from '../../assets/images/instalacion-camaras.png'
import imgDesarrolloWeb from '../../assets/images/desarrollo-web.png'

export const services = [
  {
    id: 'accesorios',
    icon: <img src={imgAccesorios}
               alt="imgAccesorios"
               className="img-services"/>,
    title: 'Accesorios de Tecnología',
    desc: 'Los mejores accesorios para mejorar tu experiencia.',
    whatsapp:
    'Hola, me interesa el servicio de Accesorios de Tecnología.'
  },
  {
    id: 'repuestos',
    icon: <img src={imgRepuestos}
               alt="imgRepuestos"
               className="img-services"/>,
    title: 'Repuestos Informáticos',
    desc: 'Componentes originales y compatibles con garantía.',
    whatsapp:
      'Hola, me interesa el servicio de Repuestos Informáticos.'
  },
  {
    id: 'repotenciacion',
    icon: <img src={imgRepotenciacion}
               alt="imgRepotenciacion"
               className="img-services"/>,
    title: 'Repotenciación de PC y Laptop',
    desc: 'Mejoramos el rendimiento de tus equipos.',
    whatsapp:
      'Hola, me interesa el servicio de Repotenciación'
  },
  {
    id: 'soluciones-ti',
    icon: <img src={imgSolucionesTi}
               alt="imgSolucionesTi"
               className="img-services"/>,
    title: 'Problemas de TI e Informática',
    desc: 'Solucionamos errores de hardware y software.',
     whatsapp:
      'Hola, tengo un problema de TI.'
  },
  {
    id: 'instalacion-programas',
    icon: <img src={imgInstalacionProgramas}
               alt="imgInstalacionProgramas"
               className="img-services"/>,
    title: 'Instalación y Activación de Programas Originales',
    desc: 'Software original y configuraciones profesionales.',
     whatsapp:
      'Hola, me interesa el servicio de Instalación de Programas Originales.'
  },
  {
    id: 'desarrollo-web',
    icon: <img src={imgDesarrolloWeb}
               alt="imgDesarrolloWeb"
               className="img-services"/>,
    title: 'Desarrollo de Páginas y Sistemas Web',
    desc: 'Creamos páginas y sistemas modernos.',
     whatsapp:
      'Hola, me interesa el servicio de Desarrollo de Paginas Web.'
  },
  {
    id: 'instalacion-camaras',
    icon: <img src={imgInstalacionCamaras}
               alt="imgInstalacionCamaras"
               className="img-services"/>,
    title: 'Cámaras de Seguridad',
    desc: 'Videovigilancia profesional para hogares y negocios.',
     whatsapp:
      'Hola, me interesa el servicio de Cámaras de Seguridad.'
  },
  {
    id: 'instalacion-red',
    icon: <img src={imgInstalacionRed}
               alt="imgInstalacionRed"
               className="img-services"/>,
    title: 'Instalación de Cableado Estructurado de Red',
    desc: 'Redes estables, organizadas y de alto rendimiento.',
     whatsapp:
      'Hola, me interesa el servicio de Cableado Estructurado de Red.'
  },
]