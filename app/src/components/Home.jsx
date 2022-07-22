import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import '../styles/Home.sass'


function Home(){

    return <div className="Home mw">

        <header className="Home__header">
        </header>

        <main className="Home__body">
            <div className='Home__body-container'>

                <div className='Home__text-container'>
                    <p className="Home__name"> Hello, I'm Jordi Schaefer </p>
                    <p className="Home__name"> junior web developer </p>

                    <p className="Home__description">Passionate about finding solutions to development challenges</p>
                </div>
                <div className='polygon'>
                    <img className='Home__foto-perfil' src='../../foto_perfil.jpg' alt=''/>
                </div>
            </div>

            <Projects/>
        </main>
    
        <Footer/>

    </div>
} 

export default Home