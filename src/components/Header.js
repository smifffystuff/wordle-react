import { useContext } from 'react'
import WordleContext from '../context/wordle-context'

const Header = () => {
  const { wordle } = useContext(WordleContext)

  console.log(wordle)

  return (
    <header className='title'>
      <h1 className='title-text'>WOTWord</h1>
    </header>
  )
}

export default Header
