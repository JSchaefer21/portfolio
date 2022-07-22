import { useState } from 'react'
import '../styles/Projects.sass'

function Projects(){

    const [hover, setHover] = useState(false)


    return <div className='Projects mw' >

        <h1 className='Projects__title'>PROJECTS</h1>

        <a className='Project_1' href="https://stravita.surge.sh/" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
            <div className='Project__container'onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
                {!hover && <div> 
                    <p className='Project__description'><text className='bold'>Stravita</text>, is a clone from strava.</p>
                    <p className='Project__description'>It's a social media web aplication (mobile first) designed for register and share sport activities.</p>
                    <p className='Project__description'>Users can track their activities with the main focus on the elevation gain, and distance.</p>
                    <p className='Project__description'>The application shows some data in real time like altitude, distance, time, weather and map including the track registered.</p>
                </div> }
                {hover && <div> 
                    <p className='Project__description'><text className='bold'>Front-end</text> made with HTML, SASS, Javascript, ReactJS, Express.</p>
                    <p className='Project__description'><text className='bold'>Back-end</text> made with Javascript, NodeJS, MongoDB.</p>
                    <p className='Project__description'>Tested with Mocha - Chai</p>
                    <p className='Project__description'>Deployed with Surge, Heroku and MongoDB-Atlas</p>
                </div> }
                    <p className='Project__description'><text className='bold'>Checkout GitHub</text> repositorie for more information.</p>

            </div>

            <img className='Project__1' src='../../stravita_resume.jpg' alt=''/>
        </a>


        
    </div>
} 

export default Projects