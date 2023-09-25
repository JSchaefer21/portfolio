import { useState } from 'react';
import Home from "./components/Home"
import './styles/App.sass'
import Game from './components/Game';

function App() {

  const [view, setView] = useState('home')

  const handleGameClicked = () => setView('game'); window.scrollTo({ top: 0 })
  const handleBackClicked = () => setView('home'); window.scrollTo({ top: 0 })
  const handleResetClicked = () => window.scrollTo({ top: 0 })

  return <div className="App mh mw">
    {view === 'home' && <Home onGameClicked={handleGameClicked} />}
    {view === 'game' && <Game onBackClicked={handleBackClicked} onResetClicked={handleResetClicked} />}
  </div>
}

export default App
