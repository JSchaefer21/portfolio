import { useEffect, useState, useRef } from 'react';
import GameInfo from './GameInfo'
import GameFooter from './GameFooter'
import '../styles/Game.sass'

function Game(props){
  
    const [infoView, setInfoView] = useState('info')
    const [pos, setPos] = useState(50)
    const [win, setWin] = useState(false)
    const [contact, setContact] = useState(null)
    const [sidebarView, setSidebarView] = useState(false)
    const sidebar = useRef(false)
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
            handlesidebar()
        }
    }

    const handleBottomContact = () => {
        if(!bottom) {
            bottom = true
            top = false
            start = end
            end = random()
            setContact(['bottom', start])
            handlesidebar()
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

        return () => window.removeEventListener('scroll', scrollFunction)
    }, []);

    const handlesidebar = () => {
        if(sidebar.current) {
            if (end > 50 && start > (min.current+3)) {
                if (min.current<44) min.current = min.current+1.5 }
            else if (min.current>44) max.current = max.current+1.5
            else if (max.current<56) min.current = min.current+1.5
            else {
                if (max.current>56)
                    max.current = max.current-1.5
                else if (start < (max.current-3))
                    min.current = min.current+1.5
            }
            
        }
    }

    const handleSideClick = () => {
        if(!sidebarView) {
            setSidebarView(true)
            sidebar.current=true
        } else {
            setSidebarView(false)
            sidebar.current=false
            min.current = 6
            max.current = 94
        }
    }

    const handleResetClicked = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
        const elem= document.getElementById('game')
        elem.classList.add('Game-out')
        setTimeout(() => props.onResetClicked(), 1500)     
    }

    return <>
        <div id='game' className='Game'>
            {infoView==='info' &&  <GameInfo onCloseClicked={() => setInfoView(false)}/>}
            
            <div className='Game_container-buttons'>
                <button className='Game_button' onClick={() => props.onBackClicked()}>Back</button>
                <button className='Game_button' onClick={handleResetClicked}>Reset</button>
            </div>

            <div className='Game_arrow'/>

            <div className='circle' style={{"left": `${pos}%`}}> </div>
            <div className='line_top'/>
            <div className='line_bottom line_bottom-left'/>
            <div className='line_bottom line_bottom-right'/>
            {contact && contact[0]==='top' && <div className='material-symbols-rounded logo logo-top' style={{"left": `${contact[1]}%`}}>wifi_tethering</div>}
            {contact && contact[0]==='bottom' && <div className='material-symbols-rounded logo logo-bottom' style={{"left": `${contact[1]}%`}}>wifi_tethering</div>}

            <button className='sidebar-button' onClick={handleSideClick}>{sidebarView? 'Remove sidebar': 'Activate sidebar'}</button>
            {sidebarView && <div className='sidebar' style={{"left": `calc(${min.current}% - 4.5% )`}}> </div> }
            {sidebarView && <div className='sidebar' style={{"left": `calc(${max.current}% + 2.5% )`}}> </div> }
        </div>

        {win===true && <GameFooter onResetClicked={() => props.onBackClicked()}/>}
    </>
} 

export default Game