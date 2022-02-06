import { useContext } from 'react'
import WotwordContext from '../context/wotword-context'
import GuessRow from './GuessRow'

const GameArea = () => {
  const { message } = useContext(WotwordContext)

  return (
    <div className='game-area'>
      {message !== '' ? <div className='message'>{message}</div> : null}
      <GuessRow rowId={1} />
      <GuessRow rowId={2} />
      <GuessRow rowId={3} />
      <GuessRow rowId={4} />
      <GuessRow rowId={5} />
      <GuessRow rowId={6} />
    </div>
  )
}

export default GameArea
