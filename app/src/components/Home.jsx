import Formular from './Formular.jsx'
import CV from './CV.jsx'
import '../styles/Home.sass'


function Home(){

    return <div className="Home mw">

        <header className="Home__header">

        </header>

        <main className="Home__body">
            <p className="Home__name"> Hello, I'm Jordi Schaefer </p>
            <p className="Home__name"> a junior web developer </p>

            <p className="Home__description">I'm a web developer from Barcelona, Spain.
            I have passion for finding solutions with every programming problems</p>
        </main>
    


        <footer className="Home__footer mw">
            <div className="Home__cv mw">
                <div className='Home__footer-section color-cv'></div>
                <CV/>
            </div>
            <div className="Home__formular mw">
                <div className='Home__footer-section color-formular'></div>
                <Formular/>
            </div>
            <div className="Home__contact mw">
                <h2>Github  Linkedin</h2>
            </div>
        </footer>

    </div>
} 

export default Home