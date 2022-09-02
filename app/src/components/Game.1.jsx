import { useEffect, useState, setState } from 'react';
import '../styles/Game.sass'

function Game(props){

    const random = () => {
        const min = 20
        const max = 80
        return ((Math.random()*(max-min+1)+min)).toFixed(0)
    }

    const [up, setUp] = useState(null)
    let top = false
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
        }
    }

    const handleBottomContact = () => {
        if(!bottom) {
            bottom = true
            top = false
            start = end
            end = random()
        }
    }
    
    useEffect(() => {
        window.scrollTo({ top: 0 })
        window.addEventListener('scroll', scrollFunction)
    }, []);

    const scrollFunction = () => {
        if (window.scrollY === 0) {
            handleTopContact()
            setUp(true)
        } else if (window.scrollY+1 > window.innerHeight/2)  {
            if(end>45 && end<55 && !bottom) {
                setWin(true)
                return
            }
            handleBottomContact()
            setUp(false)
        }
        calculatePosition()
    }

    const calculatePosition = () => {
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

    const handleBackClick = () => props.onBackClicked()
    const handleRestartClick = () => {
        window.scrollTo({ top: 0 })
        window.location.reload()
    }

    return <>
        <div className='Game'>
            <div className='Game__container-buttons'>
                <button className='Game__button' onClick={handleBackClick}>Back</button>
                <button className='Game__button' onClick={handleRestartClick}>Restart</button>
            </div>

            <div className='circle' style={{"left": `${pos}%`}}></div>
            <div className='line_top'/>
            <div className='line_bottom-left'/>
            <div className='line_bottom-right'/>
            {up && <div className='logo-top' style={{"left": `${50}%`}}>A</div>}
            {!up && <div className='logo-bottom' style={{"left": `${20}%`}}>A</div>}
        </div>
        {win===true && <div className='win'>You made it</div>}
        {win===true && <div className='win'>Well done</div>}
        {win===true && <div className='win'>Congrats</div>}
    </>
} 

export default Game