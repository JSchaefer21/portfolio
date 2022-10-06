import AwesomeSlider from "react-awesome-slider"
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import "react-awesome-slider/dist/styles.css"
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import '../styles/About.sass'

const AutoplaySlider = withAutoplay(AwesomeSlider)

function About(){

    
 
    return <div className='About mw' >

        <h1 className='About_title'>ABOUT ME</h1>

        <div className='About_container'>

            <div className='circle-up'/>
            <div className='line'/>

            <div className='Container Container-left'>
                <p className='Container_title'>MTB Rider</p>
                <AwesomeSlider className="Foto" animation='fallAnimation' bullets={false}>
                    <div data-src={require("./asset/moto.png")}/>
                    <div data-src={require("./asset/bultaco.jpg")}/>
                </AwesomeSlider>
                <p className='Container_description'>Riding mtb (downhill and enduro) since child! cycling is my favourite sport, I even practice trial for a while and participate in some downhill races during a couple of years.</p>
            </div>

            <div className='Container Container-right'>
                <p className='Container_title'>Electronic Engineer</p>
                <AwesomeSlider bullets={false}>
                    <div data-src={require("./asset/bultaco.jpg")}/>
                    <div data-src={require("./asset/moto.png")}/>
                </AwesomeSlider>
                <p className='Container_description'>Final project: Design and program an Audio board for Arduino DUE capable of processing high resolution audio data (24bits, 48Khz) in real time.</p>
            </div>

            <div className='Container Container-left'>
                <p className='Container_title'>Pasionate about classics</p>
                <AwesomeSlider bullets={false}>
                    <div data-src={require("./asset/bultaco.jpg")}/>
                    <div data-src={require("./asset/moto.png")}/>
                </AwesomeSlider>
                <p className='Container_description'>I have always liked classic vehicles, I like how they sound and 
                the sensations of driving it as if I were in another time.
                I'm a proud owner of a 1979 Mercedes that was always in the family, and some other classic bikes.</p>
            </div>

            <div className='Container Container-right'>
                <p className='Container_title'>Automotive experience as quality testing engineer</p>
                <AwesomeSlider bullets={false}>
                    <div data-src={require("./asset/bultaco.jpg")}/>
                    <div data-src={require("./asset/moto.png")}/>
                </AwesomeSlider>
                <p className='Container_description'>Almost five years working in the management and performance of functional, durable and fatigue test 
                for SEAT and AUDI projects. Inside of multiple departments with cockpit, console, interior, trunk and bumper parts.
                Constantly searching for solutions and optimizations of parts to achieve the high requirements of the company.</p>
            </div>

            <div className='Container Container-left'>
                <p className='Container_title'>Mechanic as a hobby</p>
                <AwesomeSlider bullets={false}>
                    <div data-src={require("./asset/moto.png")}/>
                    <div data-src={require("./asset/bultaco.jpg")}/>
                </AwesomeSlider>
                <p className='Container_description'>I like to do the maintenance of the vehicles by myself, 
                restore bikes and solve the issues in the most cheapest and intelligent way. knowing that your "old vehicles" 
                are allways ready for a ride because of your own work is one of the best feelings.</p>
            </div>

            <div className='Container Container-right'>
                <p className='Container_title'>Web developer bootcamp</p>
                <AwesomeSlider bullets={false}>
                    <div data-src={require("./asset/bultaco.jpg")}/>
                    <div data-src={require("./asset/moto.png")}/>
                </AwesomeSlider>
                <p className='Container_description'>Final project: Web aplication and social media designed 
                for register and share sport activities with data visualization in real time. You can find it in the projects section!</p>
            </div>

            <div className='Container Container-left'>
                <p className='Container_title'>Mountain lover</p>
                <AwesomeSlider bullets={false}>
                    <div data-src={require("./asset/bultaco.jpg")}/>
                    <div data-src={require("./asset/moto.png")}/>
                </AwesomeSlider>
                <p className='Container_description'>Always available for a walk, training hard to improve my marks and endurance. 
                I love the sensation of peace and adventure that the mountains transmit.
                A good plan to do: spend the night in the pyrenees, without tent, looking at the stars.</p>
            </div>
        </div>
   
    </div>
} 

export default About