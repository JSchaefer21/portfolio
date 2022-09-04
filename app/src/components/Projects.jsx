import { useState } from 'react'
import '../styles/Projects.sass'

function Projects(){

    const [hover, setHover] = useState(false)


    return <div className='Projects mw' >

        <h1 className='Projects__title'>PROJECTS</h1>

        <a className='Project Project-1' href="https://stravita.surge.sh/" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
            <div className='Project__container'onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
                {!hover && <div> 
                    <p className='Project__description'><b className='bold'>Stravita</b>, clone from strava.</p>
                    <p className='Project__description'>It's a social media web aplication (mobile first) designed for register and share sport activities.</p>
                    <p className='Project__description'>Users can track their activities with the main focus on the elevation gain, and distance.</p>
                    <p className='Project__description'>The application shows some data in real time like altitude, distance, time, weather and map including the track registered.</p>
                </div> }
                {hover && <div> 
                    <p className='Project__description'><b className='bold'>Front-end</b> made with HTML, SASS, Javascript, React, Express.</p>
                    <p className='Project__description'><b className='bold'>Back-end</b> made with Javascript, NodeJS, MongoDB.</p>
                    <p className='Project__description'>Tested with Mocha - Chai</p>
                    <p className='Project__description'>Deployed with Surge, Heroku and MongoDB-Atlas</p>
                </div> }
                    <p className='Project__description'><b className='bold'>Checkout GitHub</b> repositorie for more information.</p>
                    <b className='Project__description_test'>Username: </b>
                    <b className='Project__description_test bold2'> test</b>
                    <b className='Project__description_test'>Password: </b>
                    <b className='Project__description_test bold2'> 00004444</b>
            </div>       
        </a>

        <a className='Project Project-2' href="https://eggtimer-app.surge.sh/" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
            <div className='Project__container'>
                <p className='Project__description'><b className='bold'>Egg Timer</b>, web application that helps you boil eggs at the specific and perfect point for each one.</p>
                <p className='Project__description'>There is a countdown timer and some pictures to help you know how cooked your eggs are at that specific time.</p>
                <p className='Project__description'>The timer is set to user preference and an alarm sounds when it reaches the end.</p>
                <p className='Project__description'></p>
                <p className='Project__description'><b className='bold'>Actually working, testing and learning!</b></p>
            </div>       
        </a>

        <a className='Project Project-3' href="https://weather-time.surge.sh/" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
            <div className='Project__container'>
                <p className='Project__description'><b className='bold'>Weather App</b>, web application that gives you the weather at that specific time from anywhere in the world.</p>
                <p className='Project__description'>Weather can be found searching by name, using the location device, or by clicking anywhere on the map.</p>
                <p className='Project__description'>There is a button to show and hide the map, the coordinates of the point and altitude are also displayed on the map.</p>
                <p className='Project__description'></p>
                <p className='Project__description'><b className='bold'>Checkout GitHub</b> repositorie for more information.</p>
            </div>       
        </a>
   
    </div>
} 

export default Projects