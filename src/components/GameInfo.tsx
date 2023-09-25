import '../styles/Game.sass'

type Props = {
    onCloseClicked: VoidFunction
}
function GameInfo({ onCloseClicked }: Props) {

    return <div className='GameInfo'>
        <p className='GameInfo-text'>Use the Scroll to move the ball and bounce randomly until you pass through the hole</p>
        <p className='GameInfo-text'>Activate the sidebars if you're not feeling lucky</p>
        <button className='GameInfo-button' onClick={onCloseClicked}>close</button>
    </div>
}

export default GameInfo