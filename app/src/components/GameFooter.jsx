import { useEffect } from 'react';
import '../styles/Game.sass'

function Game(props){
  
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight*1.2)  {
                const elem= document.getElementById('drop-right')
                elem.classList.add('drop-right')
                setTimeout(() => elem.classList.add('move-right'), 800)
            }
            if (window.scrollY > window.innerHeight*1.7)  {
                const elem= document.getElementById('drop-left')
                elem.classList.add('drop-left')
                setTimeout(() => elem.classList.add('move-left'), 800)
            }
            if (window.scrollY > window.innerHeight*2.1)  {
                const elem0= document.getElementById('drop0')
                const elem1= document.getElementById('drop1')
                const elem2= document.getElementById('drop2')
                const elem3= document.getElementById('drop3')
                elem0.classList.add('drop-left')
                setTimeout(() => elem0.classList.add('move-left'), 800)
                elem1.classList.add('drop-right')
                setTimeout(() => elem1.classList.add('move-right'), 1100)
                elem2.classList.add('drop-right')
                setTimeout(() => elem2.classList.add('move-right'), 900)
                elem3.classList.add('drop-right')
                setTimeout(() => elem3.classList.add('move-right'), 800)
            }
            if (window.scrollY > window.innerHeight*3.2)  {
                const elem= document.getElementById('rotate')
                elem.classList.add('rotate')
            }
            if (window.scrollY > window.innerHeight*4.75)  {
                props.onRestartClicked()
            }
        })
    }, []);


    return <>
        <div className='win'>
            <p id='drop-right' className=''>You made it</p>
        </div>
        <div className='win'>
            <p id='drop-left' className=''>You got lucky, Math.random() is with you</p>
        </div>
        <div className='win'>
            <p id='drop0'>This game was made on React, only with Javascript and CSS</p>
            <p id='drop1'>100% pixel perfect, fully responsive</p>
            <p id='drop2'>Without galleries</p>
            <p id='drop3'>Working with screen sizes, percentages and scroll position</p>
        </div>
        <div className='win'></div>
        <div className='win' style={{"position": "relative", "zIndex": "-1"}}>
            <p id='rotate'>stop scrolling</p>
        </div>
        <div className='win'></div>
        <div className='win'></div>
        <div className='win'>
            <p className='limit'>You shall not pass!</p>
        </div>
        <div className='win'></div>
    </>
} 

export default Game