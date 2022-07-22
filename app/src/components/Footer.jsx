import Formular from './Formular.jsx'
import '../styles/Footer.sass'

function Footer(){

    return <footer className="Footer mw">
        
        <div className="Footer__cv mw">
            <div className='Footer__section color-cv'></div>
            <div className='Footer__cv-container' >
                <a className='Footer__cv-tittle' href="../../CV_Jordi_Schaefer.pdf" download="CV_Jordi_Schaefer.pdf">
                    Download CV
                    <p className='Footer__cv-description'> pdf (145Mb)</p>
                </a>     
            </div>
        </div>

        <div className="Footer__formular mw">
            <div className='Footer__section color-formular'></div>
            <Formular/>
        </div>

        <div className="Footer__contact mw">
            <a href="https://github.com/JSchaefer21" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
                <img className='Footer__contact-logo' src='../../github_logo.png' alt=''/>
            </a>
            <a href="https://www.linkedin.com/in/jordi-schaefer" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
                <img className='Footer__contact-logo' src='../../linkedin_logo.png' alt=''/>
            </a>
        </div>

    </footer>
} 

export default Footer