import './Banner.scss'
//images
import BannerMundial from '../../assets/images/banner-mundial.png'
function Banner() {
    const whatsappNumber = '51906257485'
    const promoMessage =
        'Hola, quiero información sobre la promoción del Mundial.'
    const openWhatsApp = (
    message = promoMessage
    ) => {
    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        '_blank'
    )
 }

  return (
    <section className="promo-banner">
      <div className="promo-banner-content">

        <div>
          <span className="promo-tag">
            Promo Mundial
          </span>
 
         <img
            src={BannerMundial}
            alt="Banner Mundial"
            className="promo-image"
            onClick={() => openWhatsApp(promoMessage)}
          />

          <h2>
            30% de descuento en licencias originales
          </h2>

          <p>
            Windows, Office y ESET Internet Security con activación rápida y soporte personalizado.
          </p>
        </div>

        <button
            className="promo-btn"
            onClick={() => openWhatsApp(promoMessage)}
            >
            Consultar promoción
        </button>

      </div>
    </section>
  )
}

export default Banner