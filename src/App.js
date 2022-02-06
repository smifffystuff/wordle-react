import './App.css'
import GameArea from './components/GameArea'
import Header from './components/Header'
import Keyboard from './components/Keyboard'

function App() {
  return (
    <div className='App'>
      <div className='game-container'>
        <Header />
        <GameArea />
        <Keyboard />
      </div>
    </div>
  )
}

export default App
