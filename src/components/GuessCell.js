import {useContext, useEffect, useState} from 'react'
import WotwordContext from '../context/wotword-context'

const GuessCell = ({rowId, cellId}) => {
  const {guesses} = useContext(WotwordContext)
  const [curValue, setCurValue] = useState('')
  const [state, setState] = useState(0)

  useEffect(() => {
    setCurValue(guesses[rowId - 1][cellId - 1].guess)
    setState(guesses[rowId - 1][cellId - 1].state)
  }, [guesses, rowId, cellId])

  return (
    <div
      className={`guess-cell ${
        state === 1
          ? 'grey flip'
          : state === 2
          ? 'yellow flip'
          : state === 3
          ? 'green flip'
          : ''
      }`}
    >
      {curValue}
    </div>
  )
}

export default GuessCell
