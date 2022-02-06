import './App.css'
import GameArea from './components/GameArea'
import Header from './components/Header'
import Keyboard from './components/Keyboard'
import WordleContext from './context/wordle-context'

function App() {
  return (
    <WordleContext.Provider value={{ wordle: 'SUPER' }}>
      <div className='App'>
        <div className='game-container'>
          <Header />
          <GameArea />
          <Keyboard />
        </div>
      </div>
    </WordleContext.Provider>
  )
}

export default App
