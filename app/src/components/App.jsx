import { useState } from 'react'
import Home from './Home'
import Game from './Game.jsx'
import '../styles/App.sass'

function App () {

    const [view, setView] = useState('home')

    const handleGameClicked = () => setView('game')
    const handleBackClicked = () => setView('home')
    const handleRestartClicked = () => {
        setView('home')
        setView('game')
    }

    return <div className="App mh mw">
        {view==='home' && <Home onGameClicked={handleGameClicked}/>}
        {view==='game' && <Game onBackClicked={handleBackClicked} onRestartClicked={handleRestartClicked}/>} 
    </div>
}

export default App