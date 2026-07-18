import { useEffect, useState } from 'react'
import './Game.scss'
import { players } from './players'
import Card from './Card'
import Confetti from 'react-confetti'

function Game() {

  const [cards, setCards] = useState([])
  const [attempts, setAttempts] = useState(3)
  const [found, setFound] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    })

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

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  window.addEventListener('resize', handleResize)

  return () => window.removeEventListener('resize', handleResize)

}, [])

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
    <>
    {winner && (
    <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={400}
        recycle={false}
        gravity={0.18}
        style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        pointerEvents: 'none',
        }}
    />
    )}

    <section className="game section">

      <div className="container">

        <>
        <h2>🎮 Encuentra a Messi y Lamine</h2>

        <p className="subtitle">

        Descubre ambas figuras y gana un descuento en licencias

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

        {(winner || gameOver) && (

        <div className="game-modal">

            <div className="game-modal-content">

                {winner ? (

                    <>

                        <h2>🎉 ¡Felicidades!</h2>

                        <p>

                            Encontraste a Messi y Lamine.

                            <br /><br />

                            Ganaste un descuento del <strong>5%</strong>.

                        </p>

                        <button onClick={openWhatsApp}>

                            Reclamar por WhatsApp

                        </button>

                    </>

                ) : (

                    <>

                        <h2>😢 ¡Casi!</h2>

                        <p>

                            Se acabaron tus intentos.

                            <br /><br />

                            ¡Vuelve a intentarlo!

                        </p>

                        <button onClick={shuffleCards}>

                            Jugar nuevamente

                        </button>

                    </>

                )}
             <button
                className="close-modal"
                onClick={shuffleCards}
            >
                ✕
            </button>

            </div>

        </div>

        )}

      </div>

    </section>
    </>


  )

}

export default Game