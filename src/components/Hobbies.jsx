import { useState } from 'react'
import {AnimatedOnScroll} from "react-animated-css-onscroll"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import 'react-awesome-slider/dist/custom-animations/open-animation.css'
import '../styles/Hobbies.sass'

function Hobbies(){
     
    const [view, setView] = useState(false)
 
    return <div className='Hobbies mw'>

        <div className='Container-hobbies Container-last'>
            <p className='Text Text-big Text-bold'>I'm now READY to work with you! 👨‍💻</p> 
        </div>

        <div className='Container-hobbies Container-hobbies-title'>
            <p className='Text'>Want to know more about me?</p>
            <button className='Hobbies_button' onClick={()=> setView(!view)}>My Hobbies</button>
        </div>

        {view === true && <div className='Center'>
        <div className='line-2'/>

        <AnimatedOnScroll className='mw' animationIn="slideInRight" screenOffset='300' animationInDuration="1200">
            <div className='Container-hobbies'>
                <p className='Title Title-small'>MTB Rider</p>
                <AwesomeSlider className='aws' animation='openAnimation' bullets={false}>
                    <div data-src={require("./assets/bike_1.jpg")}/>
                    <div data-src={require("./assets/bike_2.jpg")}/>
                    <div data-src={require("./assets/bike_3.jpg")}/>
                    <div data-src={require("./assets/bike_4.jpg")}/>
                    <div data-src={require("./assets/bike_5.jpg")}/>
                </AwesomeSlider>
                <p className='Text'>I've been riding mtb (downhill and enduro) since I was a child! Cycling is my favorite sport, I even did trials for a while and participated in some downhill races for a couple of years.</p>
            </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll className='mw' animationIn="slideInRight" screenOffset='300' animationInDuration="1200">
            <div className='Container-hobbies'>
                <p className='Title Title-small'>Pasionate about classics</p>
                <AwesomeSlider className='aws' animation='fallAnimation' bullets={false}>
                    <div data-src={require("./assets/mercedes_1.jpg")}/>
                    <div data-src={require("./assets/mercedes_2.jpg")}/>
                    <div data-src={require("./assets/mercedes_3.jpg")}/>
                    <div data-src={require("./assets/mercedes_4.jpg")}/>
                </AwesomeSlider>
                <p className='Text'>I've always liked classic vehicles. I like the way they sound and 
                the sensation of driving it as if I were in another time.
                I'm a proud owner of a 1979 Mercedes that has always been in the family and some classic bikes.</p>
            </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll className='mw' animationIn="slideInRight" screenOffset='300' animationInDuration="1200">
            <div className='Container-hobbies'>
                <p className='Title Title-small'>Mountain lover</p>
                <AwesomeSlider className='aws' animation='openAnimation' bullets={false}>
                    <div data-src={require("./assets/mountain_1.jpg")}/>
                    <div data-src={require("./assets/mountain_2.jpg")}/>
                    <div data-src={require("./assets/mountain_3.jpg")}/>
                </AwesomeSlider>
                <p className='Text'>Always available for a hike, training hard to improve my marks and endurance. 
                I love the sensation of peace and adventure that the mountains bring.
                Spending the night in the pyrenees, without tent, looking at the stars, is the best definition of a plan for me.</p>
            </div>
        </AnimatedOnScroll>
        </div>}

    </div>
} 

export default Hobbies