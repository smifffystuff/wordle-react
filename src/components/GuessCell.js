import { useContext, useEffect, useState } from 'react'
import WotwordContext from '../context/wotword-context'

const GuessCell = ({ rowId, cellId }) => {
  const { guesses } = useContext(WotwordContext)
  const [curValue, setCurValue] = useState('')

  useEffect(() => {
    setCurValue(guesses[rowId - 1][cellId - 1].guess)
  }, [guesses, rowId, cellId])

  return <div className='guess-cell'>{curValue}</div>
}

export default GuessCell
