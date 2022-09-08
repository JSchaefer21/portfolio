import { useState, useEffect } from 'react'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import '../styles/Home.sass'
import '../styles/MenuBar.sass'

function Home(props){

    const [menu, setMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const handleMenuClick = () => setMenu(!menu)

    useEffect(() => {
        const changeWidth = () => setScreenWidth(window.innerWidth)
        window.addEventListener('resize', changeWidth)

        return () => window.removeEventListener('resize', changeWidth)
    }, [])

    
    const handleGameClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
        const elem= document.getElementById('header')
        elem.classList.add('header-out')
        setTimeout(() => props.onGameClicked(), 1500)
    }

    return <div className="Home">

        <div className='space'/>

        <header id='header' className="Home__header mw">
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

            <button className='Home__button' onClick={handleGameClick}>Game</button>
        </header>



        <div className="Menu_container">
            <button className="btn" onClick={handleMenuClick}> Menu </button>
            {(menu || screenWidth > 650) && <ul className="list">
                <li className="items">Projects</li>
                <li className="items">About me</li>
                <li className="items">Contact</li>
            </ul> }
        </div>

        <Projects/>
        <Footer/>
    </div>
} 

export default Home