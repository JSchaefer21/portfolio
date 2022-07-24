import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import '../styles/Home.sass'

function Home(){

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

            <div class="slide-lines">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
                <div class="line4"></div>
            </div>

        </header>


        <Projects/>
    
        <Footer/>

    </div>
} 

export default Home