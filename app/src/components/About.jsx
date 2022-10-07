import {AnimatedOnScroll} from "react-animated-css-onscroll"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import 'react-awesome-slider/dist/custom-animations/open-animation.css'
import '../styles/About.sass'

function About(props){
 
    return <div className='About mw' >
        <h1 className='About_title'>ABOUT ME</h1>

        <div className='About_container'>
            <div className='circle-up'/>
            <div className='line'/>

            <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container Container-left'>
                    <p className='Container_title'>MTB Rider</p>
                    <AwesomeSlider className='aws' animation='openAnimation' bullets={false}>
                        <div data-src={require("./assets/bike_1.jpg")}/>
                        <div data-src={require("./assets/bike_2.jpg")}/>
                        <div data-src={require("./assets/bike_3.jpg")}/>
                        <div data-src={require("./assets/bike_4.jpg")}/>
                        <div data-src={require("./assets/bike_5.jpg")}/>
                    </AwesomeSlider>
                    <p className='Container_description'>Riding mtb (downhill and enduro) since child! cycling is my favourite sport, I even practice trial for a while and participate in some downhill races during a couple of years.</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInRight" screenOffset='350' animationInDuration="1200">
                <div className='Container Container-right'>
                    <p className='Container_title'>Degree in Electronics Engineering</p>
                    <img className='Foto' src={require("./assets/upc.png")}/>
                    <AwesomeSlider className='aws' bullets={false}>
                        <div data-src={require("./assets/electronic_1.jpg")}/>
                        <div data-src={require("./assets/electronic_2.jpg")}/>
                    </AwesomeSlider>
                    <p className='Container_description'><b className='des_bold'>Final project: </b>Design and program an Audio board for Arduino DUE capable of processing high resolution audio data (24bits, 48Khz) in real time.</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container Container-left'>
                    <p className='Container_title'>Pasionate about classics</p>
                    <AwesomeSlider className='aws' animation='fallAnimation' bullets={false}>
                        <div data-src={require("./assets/mercedes_1.jpg")}/>
                        <div data-src={require("./assets/mercedes_2.jpg")}/>
                        <div data-src={require("./assets/mercedes_3.jpg")}/>
                        <div data-src={require("./assets/mercedes_4.jpg")}/>
                    </AwesomeSlider>
                    <p className='Container_description'>I have always liked classic vehicles, I like how they sound and 
                    the sensations of driving it as if I were in another time.
                    I'm a proud owner of a 1979 Mercedes that was always in the family, and some other classic bikes.</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInRight" screenOffset='350' animationInDuration="1200">           
                <div className='Container Container-right'>
                    <p className='Container_title'>Automotive experience as quality testing engineer</p>
                    <iframe width="100%" height='330' src="https://www.youtube.com/embed/iS7Cr3piWSQ" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className='Container_description'>Almost five years working in the management and performance of functional, durable and fatigue test 
                    for SEAT and AUDI projects. Inside of multiple departments with cockpit, console, interior, trunk and bumper parts.
                    Constantly searching for solutions and optimizations of parts to achieve the high requirements of the company.</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container Container-left'>
                    <p className='Container_title'>Mountain lover</p>
                    <AwesomeSlider className='aws' animation='openAnimation' bullets={false}>
                        <div data-src={require("./assets/mountain_1.jpg")}/>
                    </AwesomeSlider>
                    <p className='Container_description'>Always available for a walk, training hard to improve my marks and endurance. 
                    I love the sensation of peace and adventure that the mountains transmit.
                    A good plan to do: spend the night in the pyrenees, without tent, looking at the stars.</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInRight" screenOffset='350' animationInDuration="1200"> 
                <div className='Container Container-right'>
                    <p className='Container_title'>Web Developer Bootcamp</p>
                    <p className='Container_description des_bold'>More than 480h of programming lessons with a main focus on JavaScript and React</p> 
                    <p className='Container_description'>HTML, CSS, SASS, JavaScript, React, Node, Mongo, GIT</p> 
                    <p className='Container_description'>Knowledge with backend, API calls and database (everything implemented in my projects) with tests on each logical file, clean and reusable code, and TDD - agile methodologies.</p> 
                    <img className='Logo2' src={require("./assets/react.png")}/>
                    <img className='Logo2' src={require("./assets/node.png")}/>
                    <img className='Logo2' src={require("./assets/mongo.png")}/>
                    <AwesomeSlider className='aws' bullets={false} organicArrows={false}>
                        <div data-src={require("./assets/bootcamp.jpg")}/>
                    </AwesomeSlider>
                    <p className='Container_description'><b className='des_bold'>Final project: </b>Web aplication and social media designed 
                    for register and share sport activities with data visualization in real time. You can find it in the projects section!</p>
                    <button className='Container_description' onClick={()=>props.handleProjectsClick()}>All about the projects</button> 
                </div>
            </AnimatedOnScroll>

        </div>
    </div>
} 

export default About



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