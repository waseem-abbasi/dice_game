import { useState } from 'react'
import StartGame from './componenets/StartGame'

import GamePlay from './componenets/GamePlay'
function App() {
  const [count, setCount] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)

  const gamePlay = () => {
    setGameStarted((prev) => !prev)
  }

  return (
    <>
      {
        gameStarted ? <GamePlay /> : < StartGame toggle={gamePlay} />
      }
    </>
  )
}

export default App
