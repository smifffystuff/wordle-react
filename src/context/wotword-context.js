import {createContext, useState} from 'react'

const initialState = {
  wotword: 'SHEEN',
  guesses: [
    [
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
    ],
    [
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
    ],
    [
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
    ],
    [
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
    ],
    [
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
    ],
    [
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
      {guess: '', state: 0},
    ],
  ],
  currentGuess: 1,
  currentCell: 1,
  message: '',
}

const WotwordContext = createContext(initialState)

export const WotwordContextProvider = ({children}) => {
  const [wotword, setWotword] = useState(initialState.wotword)
  const [guesses, setGuesses] = useState(initialState.guesses)
  const [currentGuess, setCurrentGuess] = useState(initialState.currentGuess)
  const [currentCell, setCurrentCell] = useState(initialState.currentCell)
  const [message, setMessage] = useState(initialState.message)

  const keyPressed = key => {
    if (
      (currentCell > 5 && key !== 'SUBMIT' && key !== 'DELETE') ||
      (currentCell < 6 && key === 'SUBMIT')
    ) {
      return
    }

    let curGuess = guesses[currentGuess - 1]
    if (key === 'SUBMIT' && currentCell === 6) {
      const wordSubmitted = curGuess.map(c => c.guess).join('')
      console.log('Check guess', wordSubmitted)
      setMessage('Checking submission')

      if (wordSubmitted == wotword) {
        curGuess.forEach((cell, index) => {
          setTimeout(() => {
            cell.state = 3
            setGuesses((prev, index) =>
              prev.map((row, index) =>
                index !== currentGuess - 1 ? row : curGuess
              )
            )
          }, 400 * index)
        })
        setMessage('Congratulations!!!')
      } else {
        let checkWotword = wotword
        curGuess.forEach((cell, index) => {
          setTimeout(() => {
            if (cell.guess === wotword[index]) {
              cell.state = 3
            } else if (checkWotword.includes(cell.guess)) {
              cell.state = 2
            } else {
              cell.state = 1
            }
            checkWotword = checkWotword.replace(cell.guess, '')
            console.log(checkWotword)
            setGuesses((prev, index) =>
              prev.map((row, index) =>
                index !== currentGuess - 1 ? row : curGuess
              )
            )
          }, 400 * index)
        })
      }

      setTimeout(() => setMessage(''), 2000)
      setCurrentCell(1)
      setCurrentGuess(prev => prev + 1)
      return
    }

    if (key === 'DELETE') {
      if (currentCell > 1) {
        setGuesses((prev, index) =>
          prev.map((row, index) =>
            index !== currentGuess - 1
              ? row
              : row.map((cell, index) =>
                  index !== currentCell - 2 ? cell : {...cell, guess: ''}
                )
          )
        )
        setCurrentCell(prev => prev - 1)
      }
      return
    }
    setGuesses((prev, index) =>
      prev.map((row, index) =>
        index !== currentGuess - 1
          ? row
          : row.map((cell, index) =>
              index !== currentCell - 1 ? cell : {...cell, guess: key}
            )
      )
    )
    setCurrentCell(prev => prev + 1)
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
