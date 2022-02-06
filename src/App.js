import './App.css'
import GameArea from './components/GameArea'
import Keyboard from './components/Keyboard'
import { WotwordContextProvider } from './context/wotword-context'

function App() {
  return (
    <WotwordContextProvider>
      <GameArea />
      <Keyboard />
    </WotwordContextProvider>
  )
}

export default App
