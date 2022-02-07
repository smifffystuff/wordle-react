import './App.css'
import GameArea from './components/GameArea'
import Keyboard from './components/Keyboard'
import Header from './components/Header'
import {WotwordContextProvider} from './context/wotword-context'

function App() {
  return (
    <WotwordContextProvider>
      <Header />
      <div class="alert-container" data-alert-container></div>
      <GameArea />
      <Keyboard />
    </WotwordContextProvider>
  )
}

export default App
