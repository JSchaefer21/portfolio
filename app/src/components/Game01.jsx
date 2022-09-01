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
    const [move, setMove] = useState([50, random()])
    const [pos, setPos] = useState(null)
    const [win, setWin] = useState(false)


    const handleTopContact = () => {
            top = true
            bottom = false
            setMove([move[1], random()])
            console.log(move)
    }

    const handleBottomContact = () => {
            bottom = true
            top = false
            setMove([move[1], random()])
            console.log(move)
    }
    
    useEffect(() => {
        window.scrollTo({ top: 0 })
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                handleTopContact()
            } else if (window.scrollY > window.outerHeight/2)  {
                if(move[1]>45 && move[1]<55 && !bottom) {
                    setWin(true)
                    return
                }
                handleBottomContact()
            }
            calculate()
        });
    }, []);

    const calculate = () => {
        let percent = 1-((window.outerHeight/2)-window.scrollY)/(window.outerHeight/2)
        // 0 arriba, 1 abajo
        let position
        if(top) {
            position = parseFloat(move[0])+parseFloat(move[1]-move[0])*percent
        }
        else
            position = parseFloat(move[1])+parseFloat(move[0]-move[1])*percent
        setPos(position)
    }


    return <>
        <div className='Game'>
            <div className='circle' style={{"left": `${pos}%`}}/>
            <div className='line_top'/>
            <div className='line_bottom'/>
            <div className='line_hole'/>
        </div>
        {win===true && <div className='win'>You made it</div>}
    </>
} 

export default Game