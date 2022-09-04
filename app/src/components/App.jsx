import { useState } from 'react'
import Home from './Home'
import Game from './Game.jsx'
import '../styles/App.sass'

function App () {

    const [view, setView] = useState('game')
    const [key, setKey] = useState(null)

    const handleGameClicked = () => setView('game')
    const handleBackClicked = () => setView('home')
    const handleResetClicked = () => {
        setKey(Date.now())
    }

    return <div key={key} className="App mh mw">
        {view==='home' && <Home onGameClicked={handleGameClicked}/>}
        {view==='game' && <Game onBackClicked={handleBackClicked} onResetClicked={handleResetClicked}/>} 
    </div>
}

export default App