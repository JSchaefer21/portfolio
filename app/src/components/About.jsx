import {AnimatedOnScroll} from "react-animated-css-onscroll"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import '../styles/About.sass'
import Hobbies from "./Hobbies"

function About(props){

    return <div className='About mw' >
        <h1 className='About_title'>ABOUT ME</h1>

        <div className='About_container'>
            <div className='circle-up'/>
            <div className='line'/>

            <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container-left'>
                    <p className='Title Title-small'>HI! 👋 I'm Jordi</p>
                    <p className='Text Text-bold'>From Barcelona, Spain</p>
                    <p className='Text'>Here you will find more about me</p>
                    <p className='Text Text-bold'>This is like a CV in a more interactive way</p>
                    <p className='Text'>My studies, hobbies, passions, work experience, etc.</p>
                    <p className='Text Text-bold'>Let's start with my studies, I have a...</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInRight" screenOffset='350' animationInDuration="1200">
                <div className='Container-right Solape'>
                    <p className='Title'>Degree in Electronics Engineering</p>
                    <img className='Logo-school' src={require("./assets/upc.png")}/>
                    <AwesomeSlider className='aws' bullets={false}>
                        <div data-src={require("./assets/electronic_1.jpg")}/>
                        <div data-src={require("./assets/electronic_2.jpg")}/>
                    </AwesomeSlider>
                    <p className='Text'><b className='Text-bold'>Final project: </b>Design and program an Audio board for Arduino DUE capable of processing high resolution audio data (24bits, 48Khz) in real time.</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container-left'>
                    <p className='Text Text-bold'>This was my first contact with programming languages in multiple subjects</p>
                    <p className='Text'>After graduate I decided to go to germany, start working in the automotive industry</p>
                    <p className='Text Text-bold'>And improve my German skills</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInRight" screenOffset='350' animationInDuration="1200">           
                <div className='Container-right Solape'>
                    <p className='Title'>Technical support at BMW</p>
                    <p className='Text Text-small'>EDAG Engineering | July 2016 – May 2017 | Munich (Germany)</p>
                    <p className='Text'>Management, calibration and maintance of sensors, cables and electronic components for development testing cars.</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container-left Container-language'>
                    <p className='Title Title-small'>Languages</p>
                    <p className='Text'>Spanish · native</p>
                    <p className='Text'>English · intermediate</p>
                    <p className='Text'>German · intermediate</p>
                </div>
            </AnimatedOnScroll>
            
            <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container-left'>
                    <p className='Text Text-bold'>Then I come back to Barcelona and I take a good oportunity to continues working in automotive</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInRight" screenOffset='350' animationInDuration="1200">           
                <div className='Container-right Solape'>
                    <p className='Title'>SEAT quality testing engineer</p>
                    <p className='Text Text-small'>Ferchau Engineering | Jun 2017 – November 2021</p>
                    <p className='Text'>More than four years working in the management and performance of functional, durable and fatigue test 
                    for SEAT and AUDI projects. Inside of multiple departments with cockpit, console, interior, trunk and bumper parts.</p>
                    <iframe width="100%" height='330' src="https://www.youtube.com/embed/iS7Cr3piWSQ" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className='Text'>Constantly searching for solutions and optimizations of parts to achieve the high requirements of the company.</p>                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container-left'>
                    <p className='Text Text-bold'>Here is where I decided to redirect my career to one of my passions i start with some intensive online course</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInRight" screenOffset='350' animationInDuration="1200"> 
                <div className='Container-right Solape-2'>
                    <p className='Title'>CS50 Introduction to Computer Science</p>
                    <p className='Text Text-small'>Harvard University · edX | February 2022</p> 
                    <p className='Text Text-bold'>10 weeks of lessons and exercises</p> 
                    <img className='Logo' src={require("./assets/c.png")}/>
                    <img className='Logo' src={require("./assets/python.png")}/>
                    <img className='Logo' src={require("./assets/sql.png")}/>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInLeft" screenOffset='350' animationInDuration="1200">
                <div className='Container-left '>
                    <p className='Text Text-bold'>And then direct to a Bootcamp</p>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInRight" screenOffset='350' animationInDuration="1200"> 
                <div className='Container-right Solape-2'>
                    <p className='Title'>Web Developer Bootcamp</p>
                    <p className='Text Text-small'>Neoland  |  April 2022 – Jun 2022</p> 
                    <p className='Text Text-bold'>More than 480h of programming lessons with a main focus on JavaScript and React</p> 
                    <p className='Text'>HTML, CSS, SASS, JavaScript, React, Node, Mongo, GIT</p> 
                    <p className='Text'>Knowledge of Frontend and Backend, API calls and database (everything implemented in my projects) with tests on each logical file, clean and reusable code, and TDD - agile methodologies.</p> 
                    <img className='Logo' src={require("./assets/react.png")}/>
                    <img className='Logo' src={require("./assets/node.png")}/>
                    <img className='Logo' src={require("./assets/mongo.png")}/>
                    <img className='Foto' src={require("./assets/bootcamp.jpg")}/>
                    <p className='Text'><b className='Text-bold'>Final project: </b>Web aplication and social media designed 
                    for register and share sport activities with data visualization in real time. You can find it in the projects section!</p>
                </div>
                <div className='Container-right-2'>
                    <button className='Projects_button' onClick={()=>props.handleProjectsClick()}>Go to Projects</button> 
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll className='Center' animationIn="slideInRight" screenOffset='350' animationInDuration="1200"> 
                <div className='Container-right'>
                    <p className='Text Text-big Text-bold'>I'm now READY to WORK with you</p> 
                </div>
            </AnimatedOnScroll>

            <Hobbies/>
        </div>
    </div>
} 

export default About