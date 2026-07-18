import { useEffect, useState } from 'react'
import './Game.scss'
import { players } from './players'
import Card from './Card'

function Game() {

  const [cards, setCards] = useState([])
  const [attempts, setAttempts] = useState(3)
  const [found, setFound] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(false)
  const [isChecking, setIsChecking] = useState(false)

  const whatsappNumber = '51906257485'

  const openWhatsApp = () => {

    const message =
      '🎉 Hola, encontré a Messi y Lamine en el juego y quiero reclamar mi descuento del 5%.'

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    )

  }

  const shuffleCards = () => {

    const shuffled = [...players]
      .sort(() => Math.random() - 0.5)
      .map(card => ({
        ...card,
        revealed: false,
      }))

    setCards(shuffled)
    setAttempts(3)
    setFound([])
    setWinner(false)
    setGameOver(false)
    setIsChecking(false)

  }

  useEffect(() => {
    shuffleCards()
  }, [])

  const handleCardClick = card => {

    if (gameOver || winner || isChecking) return

    if (card.revealed) return

    // Mostrar la carta
    setCards(prev =>
      prev.map(c =>
        c.id === card.id
          ? { ...c, revealed: true }
          : c
      )
    )

    // Si es Messi o Lamine
    if (card.winner) {

      const updatedFound = [...found, card.name]

      setFound(updatedFound)

      if (
        updatedFound.includes('Messi') &&
        updatedFound.includes('Lamine')
      ) {
        setWinner(true)
      }

      return

    }

    // Si es incorrecto
    setIsChecking(true)

    setTimeout(() => {

      setCards(prev =>
        prev.map(c =>
          c.id === card.id
            ? { ...c, revealed: false }
            : c
        )
      )

      setAttempts(prev => {

        const newAttempts = prev - 1

        if (newAttempts <= 0) {
          setGameOver(true)
        }

        return newAttempts

      })

      setIsChecking(false)

    }, 1000)

  }

  return (

    <section className="game section">

      <div className="container">

        <>
        <h2>🎮 Encuentra a Messi y Lamine</h2>

        <p className="subtitle">

        Descubre ambas figuras antes de perder tus 3 intentos y gana un descuento del 5%.

        </p>
        </>

        <p className="attempts">
          Intentos restantes: {attempts}
        </p>

        <div className="game-grid">

          {cards.map(card => (

            <Card
              key={card.id}
              card={card}
              onClick={() => handleCardClick(card)}
            />

          ))}

        </div>

        {winner && (

          <div className="winner">

            <h3>
              🎉 Ganaste un descuento del 5%
            </h3>

            <button onClick={openWhatsApp}>
              Reclamar por WhatsApp
            </button>

          </div>

        )}

        {gameOver && !winner && (

          <div className="loser">

            <h3>
              😢 Se acabaron los intentos
            </h3>

            <button onClick={shuffleCards}>
              Volver a intentarlo
            </button>

          </div>

        )}

      </div>

    </section>

  )

}

export default Game