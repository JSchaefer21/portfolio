import { useEffect, useState } from 'react';
import GameFooter from './GameFooter'
import '../styles/Game.sass'

function Game(props){
  
    const [pos, setPos] = useState(50)
    const [win, setWin] = useState(false)
    const [contact, setContact] = useState(null)

    const random = () => {
        const min = 15
        const max = 85
        return ((Math.random()*(max-min+1)+min)).toFixed(0)
    }

    let top = true
    let bottom = false
    let start = 50
    let end = random()

    const handleTopContact = () => {
        if(!top) {
            top = true
            bottom = false
            start = end
            end = random()
            setContact(['top', start])
        }
    }

    const handleBottomContact = () => {
        if(!bottom) {
            bottom = true
            top = false
            start = end
            end = random()
            setContact(['bottom', start])
        }
        console.log(window.scrollY)
    }

    const scrollFunction = () => {
        if (window.scrollY === 0) {
            handleTopContact()
        } else if (window.scrollY+1 > window.innerHeight/2)  {
            if(!win && end>45 && end<55 && !bottom) {
                setWin(true)
                return
            }
            else if(!win && !bottom){
                handleBottomContact()
            }
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


    useEffect(() => {
        window.scrollTo({ top: 0 })
        window.addEventListener('scroll', scrollFunction)
    }, []);


    const handleBackClick = () => props.onBackClicked()
    const handleRestartClick = () => props.onRestartClicked()


    return <>
        <div className='Game'>
            <div className='Game_container-buttons'>
                <button className='Game_button' onClick={handleBackClick}>Back</button>
                <button className='Game_button' onClick={handleRestartClick}>Restart</button>
            </div>

            <div className='Game_arrow'/>

            <div className='circle' style={{"left": `${pos}%`}}> </div>
            <div className='line_top'/>
            <div className='line_bottom line_bottom-left'/>
            <div className='line_bottom line_bottom-right'/>
            {contact && contact[0]==='top' && <div className='material-symbols-rounded logo logo-top' style={{"left": `${contact[1]}%`}}>wifi_tethering</div>}
            {contact && contact[0]==='bottom' && <div className='material-symbols-rounded logo logo-bottom' style={{"left": `${contact[1]}%`}}>wifi_tethering</div>}
        </div>

        {win===true && <GameFooter onRestartClicked={handleBackClick}/>}
    </>
} 

export default Game