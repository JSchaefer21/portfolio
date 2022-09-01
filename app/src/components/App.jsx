import { useNavigate, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Home'
import Game from './Game.jsx'
import '../styles/App.sass'

function App () {

    const navigate = useNavigate()

    /* useEffect(() => {
        navigate('/')
    }, []) */

    const handleGameClicked = () => navigate('/game')
    const handleBackClicked = () => navigate('/')
    const handleRestartClicked = () => {
        //window.location.reload(false)
        navigate('/game')
    }

    return <div className="App mh mw">
            <Routes>
                <Route path="/" element={<Home onGameClicked={handleGameClicked}/>} />
                <Route path="/game" element={<Game onBackClicked={handleBackClicked} onRestartClicked={handleRestartClicked}/>} />
            </Routes>
        </div>
}

export default App