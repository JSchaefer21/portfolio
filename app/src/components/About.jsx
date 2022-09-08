import { useState } from 'react'
import '../styles/Projects.sass'

function Projects(){

    const [hover, setHover] = useState(false)

    const handleMoreClick = () =>{
        if(!hover) setHover(true)
        else setHover(false)
    }
  
    return <div className='Projects mw' >

        <h1 className='Projects__title'>ABOUT ME</h1>


   
    </div>
} 

export default Projects