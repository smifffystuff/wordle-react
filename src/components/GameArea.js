// import { useState } from 'react'
import GuessRow from './GuessRow'

const GameArea = () => {
  // const [turn, setTurn] = useState(1)

  return (
    <div className='game-area'>
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
    </div>
  )
}

export default GameArea
