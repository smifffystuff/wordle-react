import { useContext } from 'react'
import WotwordContext from '../context/wotword-context'
import GuessCell from './GuessCell'

const GameArea = () => {
  const { message } = useContext(WotwordContext)

  return (
    <div className='game-area'>
      {message !== '' ? <div className='message'>{message}</div> : null}
      <GuessCell rowId={1} cellId={1} />
      <GuessCell rowId={1} cellId={2} />
      <GuessCell rowId={1} cellId={3} />
      <GuessCell rowId={1} cellId={4} />
      <GuessCell rowId={1} cellId={5} />
      <GuessCell rowId={2} cellId={1} />
      <GuessCell rowId={2} cellId={2} />
      <GuessCell rowId={2} cellId={3} />
      <GuessCell rowId={2} cellId={4} />
      <GuessCell rowId={2} cellId={5} />
      <GuessCell rowId={3} cellId={1} />
      <GuessCell rowId={3} cellId={2} />
      <GuessCell rowId={3} cellId={3} />
      <GuessCell rowId={3} cellId={4} />
      <GuessCell rowId={3} cellId={5} />
      <GuessCell rowId={4} cellId={1} />
      <GuessCell rowId={4} cellId={2} />
      <GuessCell rowId={4} cellId={3} />
      <GuessCell rowId={4} cellId={4} />
      <GuessCell rowId={4} cellId={5} />
      <GuessCell rowId={5} cellId={1} />
      <GuessCell rowId={5} cellId={2} />
      <GuessCell rowId={5} cellId={3} />
      <GuessCell rowId={5} cellId={4} />
      <GuessCell rowId={5} cellId={5} />
      <GuessCell rowId={6} cellId={1} />
      <GuessCell rowId={6} cellId={2} />
      <GuessCell rowId={6} cellId={3} />
      <GuessCell rowId={6} cellId={4} />
      <GuessCell rowId={6} cellId={5} />
    </div>
  )
}

export default GameArea
