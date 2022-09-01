import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import '../styles/Home.sass'

function Home(props){

    const handleGameClick = () => props.onGameClicked()

    return <div className="Home mw">

        <header className="Home__header mw">
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
        </header>

        <button className='Home__button' onClick={handleGameClick}>Game</button>

        <Projects/>
        <Footer/>
    </div>
} 

export default Home