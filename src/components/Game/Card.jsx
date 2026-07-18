import './Game.scss'

function Card({ card, onClick }) {
  return (
    <div
      className="card"
      onClick={onClick}
    >
      <div className={`card-inner ${card.revealed ? 'flipped' : ''}`}>

        <div className="card-front">
          <span>?</span>
        </div>

        <div className="card-back">
          <img
            src={card.image}
            alt={card.name}
          />
        </div>

      </div>
    </div>
  )
}

export default Card