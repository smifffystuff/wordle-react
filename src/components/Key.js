import { useContext } from 'react'

import WotwordContext from '../context/wotword-context'

const Key = ({ letter }) => {
  const { keyPressed } = useContext(WotwordContext)

  const onPressed = () => {
    keyPressed(letter)
  }

  return (
    <button className='key' onClick={onPressed}>
      {letter}
    </button>
  )
}

export default Key
