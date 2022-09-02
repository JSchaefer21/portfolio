import { useEffect } from 'react';
import '../styles/Game.sass'

function Game(props){
  
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight*1.2)  {
                const elem= document.getElementById('drop0')
                elem.classList.add('drop0')
                setTimeout(() => elem.classList.add('move0'), 800)
            }
            if (window.scrollY > window.innerHeight*1.7)  {
                const elem= document.getElementById('drop1')
                elem.classList.add('drop1')
                setTimeout(() => elem.classList.add('move'), 800)
            }
            if (window.scrollY > window.innerHeight*2.1)  {
                const elem2= document.getElementById('drop2')
                const elem3= document.getElementById('drop3')
                const elem4= document.getElementById('drop4')
                const elem5= document.getElementById('drop5')
                elem2.classList.add('drop1')
                setTimeout(() => elem2.classList.add('move'), 800)
                elem3.classList.add('drop0')
                setTimeout(() => elem3.classList.add('move0'), 800)
                elem4.classList.add('drop0')
                setTimeout(() => elem4.classList.add('move0'), 800)
                elem5.classList.add('drop0')
                setTimeout(() => elem5.classList.add('move0'), 800)
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
            <p id='drop0' className=''>You made it</p>
        </div>
        <div className='win'>
            <p id='drop1' className=''>You got lucky, Math.random() is with you</p>
        </div>
        <div className='win'>
            <p id='drop2'>This game was made on React, only with Javascript and CSS</p>
            <p id='drop3'>100% pixel perfect, fully responsive</p>
            <p id='drop4'>Without galleries</p>
            <p id='drop5'>Working with screen sizes, percentages and scroll position</p>
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