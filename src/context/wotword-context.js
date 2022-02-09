import {createContext, useState} from 'react'

import {targetWords, dictionary} from '../data/words'

// const offsetFromDate = new Date(2022, 0, 1)
// const msOffset = Date.now() - offsetFromDate
// const dayOffset = msOffset / 1000 / 60 / 60 / 24

const initialState = {
  wotword:
    targetWords[Math.floor(Math.random() * (targetWords.length - 0 + 1) + 0)],
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
  keyState: [
    {
      letter: 'A',
      state: 0,
    },
    {
      letter: 'B',
      state: 0,
    },
    {
      letter: 'C',
      state: 0,
    },
    {
      letter: 'D',
      state: 0,
    },
    {
      letter: 'E',
      state: 0,
    },
    {
      letter: 'F',
      state: 0,
    },
    {
      letter: 'G',
      state: 0,
    },
    {
      letter: 'H',
      state: 0,
    },
    {
      letter: 'I',
      state: 0,
    },
    {
      letter: 'J',
      state: 0,
    },
    {
      letter: 'K',
      state: 0,
    },
    {
      letter: 'L',
      state: 0,
    },
    {
      letter: 'M',
      state: 0,
    },
    {
      letter: 'N',
      state: 0,
    },
    {
      letter: 'O',
      state: 0,
    },
    {
      letter: 'P',
      state: 0,
    },
    {
      letter: 'Q',
      state: 0,
    },
    {
      letter: 'R',
      state: 0,
    },
    {
      letter: 'S',
      state: 0,
    },
    {
      letter: 'T',
      state: 0,
    },
    {
      letter: 'U',
      state: 0,
    },
    {
      letter: 'V',
      state: 0,
    },
    {
      letter: 'W',
      state: 0,
    },
    {
      letter: 'X',
      state: 0,
    },
    {
      letter: 'Y',
      state: 0,
    },
    {
      letter: 'Z',
      state: 0,
    },
  ],
  currentGuess: 1,
  currentCell: 1,
  message: '',
}

const WotwordContext = createContext(initialState)

export const WotwordContextProvider = ({children}) => {
  const [wotword] = useState(initialState.wotword)
  const [guesses, setGuesses] = useState(initialState.guesses)
  const [currentGuess, setCurrentGuess] = useState(initialState.currentGuess)
  const [currentCell, setCurrentCell] = useState(initialState.currentCell)
  const [message, setMessage] = useState(initialState.message)
  const [keyState, setKeyState] = useState(initialState.keyState)
  const [gameOn, setGameOn] = useState(true)

  console.log(wotword)
  // useEffect(() => {
  //   setWotword('elder')
  // }, [])
  const keyPressed = key => {
    if (!gameOn || currentGuess > 6) {
      return
    }
    if (
      (currentCell > 5 && key !== 'SUBMIT' && key !== 'DELETE') ||
      (currentCell < 6 && key === 'SUBMIT')
    ) {
      return
    }

    if (key === 'SUBMIT' && currentCell === 6) {
      let curGuess = JSON.parse(JSON.stringify(guesses[currentGuess - 1]))
      let checkGuess = JSON.parse(JSON.stringify(curGuess))
      const wordSubmitted = checkGuess
        .map(c => c.guess)
        .join('')
        .toLowerCase()

      if (!dictionary.includes(wordSubmitted)) {
        setMessage('Word Not In List')
        setTimeout(() => setMessage(''), 2000)
        return
      }

      if (wordSubmitted === wotword) {
        checkGuess.forEach(cell => {
          cell.state = 3
        })
        setMessage('Congratulations!!!')
        setGameOn(false)
      } else {
        let checkWotword = wotword
          .split('')
          .map(letter => ({letter, checked: false}))
        checkGuess.forEach((guess, index) => {
          if (guess.guess.toLowerCase() === checkWotword[index].letter) {
            guess.state = 3
            checkWotword[index].checked = true
          }
        })
        //Now check if exists BUT not checked already
        checkGuess.forEach((guess, index) => {
          if (guess.state !== 0) {
            return
          }
          const foundIndex = checkWotword.findIndex(g => {
            if (g.checked) {
              return false
            }
            return g.letter === guess.guess.toLowerCase()
          })
          if (foundIndex >= 0) {
            guess.state = 2
          } else if (guess.state === 0) {
            guess.state = 1
          }
        })
      }
      checkGuess.forEach((cell, index) => {
        setTimeout(() => {
          curGuess[index] = {...cell}
          setKeyState(prev => {
            const curState = JSON.parse(JSON.stringify(prev))
            const curKey = curState.find(s => s.letter === cell.guess)
            if (cell.state > curKey.state) {
              curKey.state = cell.state
            }
            return curState
          })

          setGuesses(prev => {
            prev.map((row, index) =>
              index !== currentGuess - 1
                ? row
                : row.map((cell, index) =>
                    index !== currentCell - 1
                      ? cell
                      : {...cell, state: cell.state}
                  )
            )
            prev[currentGuess - 1] = [...curGuess]
            return [...prev]
          })
        }, 400 * index)
      })

      if (currentGuess === 6 && gameOn) {
        setMessage(`You failed to guess ${wotword}`)
        setGameOn(false)
      }
      setTimeout(() => setMessage(''), 5000)
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
        keyState,
        keyPressed,
        setMessage,
      }}
    >
      {children}
    </WotwordContext.Provider>
  )
}

export default WotwordContext
