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

            {/* <div className='circle-up'/>
            <div className='line'/> */}
            

            <div className='Container Container-left'>
                <p className='Container_title'>Mountainbike cyclist</p>
                <AwesomeSlider animation='fallAnimation' bullets={false}>
                    <div data-src={require("./asset/moto.png")}/>
                    <div data-src={require("./asset/bultaco.jpg")}/>
                </AwesomeSlider>
                <p className='Container_description'>Riding mountabike and downhill, running races since child</p>
            </div>

            <div className='Container Container-left'>
                <p className='Container_title'>Pasionate about classics</p>
                <AwesomeSlider bullets={false}>
                    <div data-src={require("./asset/moto.png")}/>
                    <div data-src={require("./asset/bultaco.jpg")}/>
                </AwesomeSlider>
                <p className='Container_description'>Maintaining my old mercedes, always in the familiy since 1979</p>
            </div>

            <div className='Container Container-left'>
                <p className='Container_title'>Mechanic as a hobby</p>
                <div className='Container_foto'></div>
                <p className='Container_description'>I like to restore classics and ride it as oldtimer</p>
            </div>

            <div className='Container Container-left'>
                <p className='Container_title'>Mountain lover</p>
                <div className='Container_foto'></div>
                <p className='Container_description'>Always availevide for a hike, training hard to superate myself</p>
            </div>


            <div className='Container Container-right'>Electronic Engineer</div>
            <div className='Container Container-right'>Automotive experience as quality testing engineer</div>
            <div className='Container Container-right'>Web developer bootcamp</div>
            
        </div>

   
    </div>
} 

export default About