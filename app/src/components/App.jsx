import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './Home';
import '../styles/App.sass'

function App () {

    return <div className="App mh mw">
            <ParallaxProvider>
                <Home/>
            </ParallaxProvider>
        </div>
}

export default App