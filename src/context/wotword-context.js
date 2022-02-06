import { createContext, useState } from 'react'

const initialState = {
  wotword: 'SUPER',
  guesses: [
    [
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
    ],
    [
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
    ],
    [
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
    ],
    [
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
    ],
    [
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
    ],
    [
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
      { guess: '', state: 0 },
    ],
  ],
  currentGuess: 1,
  currentCell: 1,
  message: '',
}

const WotwordContext = createContext(initialState)

export const WotwordContextProvider = ({ children }) => {
  const [wotword, setWotword] = useState(initialState.wotword)
  const [guesses, setGuesses] = useState(initialState.guesses)
  const [currentGuess, setCurrentGuess] = useState(initialState.currentGuess)
  const [currentCell, setCurrentCell] = useState(initialState.currentCell)
  const [message, setMessage] = useState(initialState.message)

  const keyPressed = (key) => {
    if (
      (currentCell > 5 && key !== 'SUBMIT' && key !== 'DELETE') ||
      (currentCell < 6 && key === 'SUBMIT')
    ) {
      return
    }

    if (key === 'SUBMIT' && currentCell === 6) {
      const wordSubmitted = guesses[currentGuess - 1]
        .map((c) => c.guess)
        .join('')
      console.log('Check guess', wordSubmitted)
      setCurrentCell(1)
      setCurrentGuess((prev) => prev + 1)
      setMessage('Checking submission')

      if (wordSubmitted == wotword) {
        setMessage('Congratulations!!!')
      }

      setTimeout(() => setMessage(''), 2000)
      return
    }

    if (key === 'DELETE') {
      if (currentCell > 1) {
        setGuesses((prev, index) =>
          prev.map((row, index) =>
            index !== currentGuess - 1
              ? row
              : row.map((cell, index) =>
                  index !== currentCell - 2 ? cell : { ...cell, guess: '' }
                )
          )
        )
        setCurrentCell((prev) => prev - 1)
      }
      return
    }
    setGuesses((prev, index) =>
      prev.map((row, index) =>
        index !== currentGuess - 1
          ? row
          : row.map((cell, index) =>
              index !== currentCell - 1 ? cell : { ...cell, guess: key }
            )
      )
    )
    setCurrentCell((prev) => prev + 1)
  }

  return (
    <WotwordContext.Provider
      value={{
        wotword,
        guesses,
        currentGuess,
        currentCell,
        message,
        keyPressed,
        setMessage,
      }}
    >
      {children}
    </WotwordContext.Provider>
  )
}

export default WotwordContext
