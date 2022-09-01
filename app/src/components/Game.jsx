import { useEffect, useState } from 'react';
import '../styles/Game.sass'

function Game(){

    const random = () => {
        const min = 20
        const max = 80
        return ((Math.random()*(max-min+1)+min)).toFixed(0)
    }

    let top = true
    let bottom = false
    let start = 50
    let end = random()
    const [pos, setPos] = useState(null)
    const [win, setWin] = useState(false)


    const handleTopContact = () => {
        if(!top) {
            top = true
            bottom = false
            start = end
            end = random()
            console.log(start, end)
        }
    }

    const handleBottomContact = () => {
        if(!bottom) {
            bottom = true
            top = false
            start = end
            end = random()
            console.log(start, end)
        }
    }
    
    useEffect(() => {
        window.scrollTo({ top: 0 })
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                handleTopContact()
            } else if (window.scrollY+1 > window.innerHeight/2)  {
                if(end>45 && end<55 && !bottom) {
                    setWin(true)
                    return
                }
                handleBottomContact()
            }
            calculate()
        });
    }, []);

    const calculate = () => {
        let percent = 1-((window.innerHeight/2)-window.scrollY)/(window.innerHeight/2)
        // 0 arriba, 1 abajo
        let position
        if(top) {
            position = parseFloat(start)+parseFloat(end-start)*percent
        }
        else
            position = parseFloat(end)+parseFloat(start-end)*percent
        setPos(position)
    }


    return <>
        <div className='Game'>
            <div className='circle' style={{"left": `${pos}%`}}></div>
            <div className='line_top'/>
            <div className='line_bottom'/>
            <div className='line_hole'/>
        </div>
        {win===true && <div className='win'>You made it</div>}
        {win===true && <div className='win'>Well done</div>}
        {win===true && <div className='win'>Congrats</div>}
    </>
} 

export default Game