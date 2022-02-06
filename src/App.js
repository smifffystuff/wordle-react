import './App.css'
import GameArea from './components/GameArea'
import Header from './components/Header'
import Keyboard from './components/Keyboard'
import { WotwordContextProvider } from './context/wotword-context'

function App() {
  return (
    <WotwordContextProvider>
      <div className='App'>
        <div className='game-container'>
          <Header />
          <GameArea />
          <Keyboard />
        </div>
      </div>
    </WotwordContextProvider>
  )
}

export default App
