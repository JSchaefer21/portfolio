import {AnimatedOnScroll} from "react-animated-css-onscroll"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import 'react-awesome-slider/dist/custom-animations/open-animation.css'
import '../styles/About.sass'

function Hobbies(){
 
    return <div className='mw' >

        <AnimatedOnScroll className='mw' animationIn="slideInRight" screenOffset='350' animationInDuration="1200">
            <div className='Container Container-right'>
                <p className='Title Title-small'>MTB Rider</p>
                <AwesomeSlider className='aws' animation='openAnimation' bullets={false}>
                    <div data-src={require("./assets/bike_1.jpg")}/>
                    <div data-src={require("./assets/bike_2.jpg")}/>
                    <div data-src={require("./assets/bike_3.jpg")}/>
                    <div data-src={require("./assets/bike_4.jpg")}/>
                    <div data-src={require("./assets/bike_5.jpg")}/>
                </AwesomeSlider>
                <p className='Text'>Riding mtb (downhill and enduro) since child! cycling is my favourite sport, I even practice trial for a while and participate in some downhill races during a couple of years.</p>
            </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll className='mw' animationIn="slideInRight" screenOffset='350' animationInDuration="1200">
            <div className='Container Container-right'>
                <p className='Title Title-small'>Pasionate about classics</p>
                <AwesomeSlider className='aws' animation='fallAnimation' bullets={false}>
                    <div data-src={require("./assets/mercedes_1.jpg")}/>
                    <div data-src={require("./assets/mercedes_2.jpg")}/>
                    <div data-src={require("./assets/mercedes_3.jpg")}/>
                    <div data-src={require("./assets/mercedes_4.jpg")}/>
                </AwesomeSlider>
                <p className='Text'>I have always liked classic vehicles, I like how they sound and 
                the sensations of driving it as if I were in another time.
                I'm a proud owner of a 1979 Mercedes that was always in the family, and some other classic bikes.</p>
            </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll className='mw' animationIn="slideInRight" screenOffset='350' animationInDuration="1200">
            <div className='Container Container-right'>
                <p className='Title Title-small'>Mountain lover</p>
                <AwesomeSlider className='aws' animation='openAnimation' bullets={false}>
                    <div data-src={require("./assets/mountain_1.jpg")}/>
                </AwesomeSlider>
                <p className='Text'>Always available for a walk, training hard to improve my marks and endurance. 
                I love the sensation of peace and adventure that the mountains transmit.
                Spend the night in the pyrenees, without tent, looking at the stars is a good plan to do</p>
            </div>
        </AnimatedOnScroll>

    </div>
} 

export default Hobbies



{/*             <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container Container-left'>
                    <p className='Container_title'>Mechanic as a hobby</p>
                    <iframe width="100%" height="330" src="https://www.youtube.com/embed/4g8AQYztO6g" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className='Container_description'>I like to do the maintenance of the vehicles by myself, 
                    restore bikes and solve the issues in the most cheapest and intelligent way. knowing that your "old vehicles" 
                    are always ready for a ride because of your own work is one of the best feelings.</p>
                </div>
            </AnimatedOnScroll> */}