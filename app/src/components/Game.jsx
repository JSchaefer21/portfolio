import { useEffect, useState, useRef } from 'react';
import GameFooter from './GameFooter'
import '../styles/Game.sass'

function Game(props){
  
    const [pos, setPos] = useState(50)
    const [win, setWin] = useState(false)
    const [contact, setContact] = useState(null)
    const [sideBarView, setSideBarView] = useState(false)
    const sideBar = useRef(false)
    const min = useRef(6)
    const max = useRef(94)
    
    const random = () => {
        return ((Math.random()*(max.current-min.current+1)+min.current)).toFixed(0)
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
            handleSideBar()
        }
    }

    const handleBottomContact = () => {
        if(!bottom) {
            bottom = true
            top = false
            start = end
            end = random()
            setContact(['bottom', start])
            handleSideBar()
        }
    }

    const scrollFunction = () => {
        if (window.scrollY === 0) {
            handleTopContact()
        } else if (window.scrollY+1 > window.innerHeight/2)  {
            if(!win && end>46 && end<54 && !bottom) {
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

    const handleSideBar = () => {
        if(sideBar.current) {
            if (end > 50 && start > (min.current+3)) {
                if (min.current<44)
                    min.current = min.current+2 }
            else {
                if (max.current>56)
                    max.current = max.current-2
                else if (start < (max.current-3))
                    min.current = min.current+2
            }
            
        }
    }

    const handleSideClick = () => {
        if(!sideBarView) {
            setSideBarView(true)
            sideBar.current=true
        } else {
            setSideBarView(false)
            sideBar.current=false
            min.current = 6
            max.current = 94
        }
    }

    return <>
        <div className='Game'>
            <div className='Game_container-buttons'>
                <button className='Game_button' onClick={() => props.onBackClicked()}>Back</button>
                <button className='Game_button' onClick={() => props.onResetClicked()}>Reset</button>
            </div>

            <div className='Game_arrow'/>

            <div className='circle' style={{"left": `${pos}%`}}> </div>
            <div className='line_top'/>
            <div className='line_bottom line_bottom-left'/>
            <div className='line_bottom line_bottom-right'/>
            {contact && contact[0]==='top' && <div className='material-symbols-rounded logo logo-top' style={{"left": `${contact[1]}%`}}>wifi_tethering</div>}
            {contact && contact[0]==='bottom' && <div className='material-symbols-rounded logo logo-bottom' style={{"left": `${contact[1]}%`}}>wifi_tethering</div>}

            <button className='side_bar-button' onClick={handleSideClick}>{sideBarView? 'Remove side-bar': 'Active side-bar'}</button>
            {sideBarView && <div className='side_bar side_bar-left' style={{"left": `calc(${min.current}% - 4.5% )`}}> </div> }
            {sideBarView && <div className='side_bar side_bar-right' style={{"left": `calc(${max.current}% + 2.5% )`}}> </div> }
        </div>

        {win===true && <GameFooter onResetClicked={() => props.onBackClicked()}/>}
    </>
} 

export default Game