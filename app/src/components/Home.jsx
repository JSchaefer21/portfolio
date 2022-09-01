import { useState } from 'react'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import Game from './Game.jsx'
import '../styles/Home.sass'

function Home(){

    const [view, setView] = useState('projects')

    const handleProjectsClick=() => setView('projects')
    const handleGameClick=() => setView('game')

    return <div className="Home mw">

        {view === 'projects' && <header className="Home__header mw">
            <div className='polygon'>
                <img className='Home__foto-perfil' src='../../foto_perfil.jpg' alt=''/>
            </div>

            <div className='Home__text-container'>
                <p className="Home__name"> Hello, I'm Jordi Schaefer </p>
                <p className="Home__name"> junior web developer </p>

                <p className="Home__description">Passionate about finding solutions to development challenges</p>
            </div>

            <div className="slide-lines">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
            </div>

        </header>}

        <div className={view === 'projects'? 'button_container' : 'button_container-top'}>
            <button className='button button1' onClick={handleProjectsClick}>Projects</button>
            <button className='button button2' onClick={handleGameClick}>Game</button>
        </div>

        {view === 'projects' && <Projects/> }
        {view === 'projects' && <Footer/> }

        {view === 'game' && <Game/> }


    </div>
} 

export default Home