import { createContext } from 'react'

const initialState = {
  wordle: 'SUPER',
}

const WordleContext = createContext(initialState)

export default WordleContext
