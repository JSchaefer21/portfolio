import { useState } from 'react'
import Home from './Home'
import Game from './Game.jsx'
import '../styles/App.sass'

function App () {

    const [view, setView] = useState('home')
    const [key, setKey] = useState(null)

    const handleGameClicked = () => setView('game'); window.scrollTo({ top: 0 })
    const handleBackClicked = () => setView('home'); window.scrollTo({ top: 0 })
    const handleResetClicked = () => setKey(Date.now()); window.scrollTo({ top: 0 })

    return <div key={key} className="App mh mw">
        {view==='home' && <Home onGameClicked={handleGameClicked}/>}
        {view==='game' && <Game onBackClicked={handleBackClicked} onResetClicked={handleResetClicked}/>} 
    </div>
}

export default App