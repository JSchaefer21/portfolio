import { useState, useEffect } from "react"
import Projects from "./Projects.jsx"
import About from "./About.tsx"
import Footer from "./Footer.tsx"
import "../styles/Home.sass"
import "../styles/MenuBar.sass"

function Home(props: any) {
  const [view, setView] = useState("projects")
  const [menu, setMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleMenuClick = () => setMenu(!menu)

  useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", changeWidth)

    return () => window.removeEventListener("resize", changeWidth)
  }, [])

  const handleGameClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const elem = document.getElementById("header")
    elem?.classList.add("header-out")
    setTimeout(() => props.onGameClicked(), 1500)
  }

  const handleProjectsClick = () => {
    setMenu(false)
    window.scrollTo({ top: document.body.clientHeight, behavior: "smooth" })
    setView("projects")
  }
  const handleAboutClick = () => {
    setMenu(false)
    window.scrollTo({ top: document.body.clientHeight, behavior: "smooth" })
    setView("about")
  }
  const handleContactClick = () => {
    setMenu(false)
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }
  const handleUpClick = () => {
    setMenu(false)
    window.scrollTo({ top: document.body.clientHeight, behavior: "smooth" })
  }

  return (
    <div className="Home">
      <div className="space" />

      <header id="header" className="Home__header mw">
        {/* <div className="polygon"> */}
        <img className="Home__foto-perfil" src="../../foto_perfil.jpg" alt="" />
        {/* </div> */}

        <div className="Home__text-container">
          <p className="Home__name"> Hello, I'm Jordi Schaefer </p>
          <p className="Home__name"> Frontend Developer </p>

          <p className="Home__description">
            Passionate about finding solutions to development challenges
          </p>
        </div>

        <div className="slide-lines">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div>

        <button className="Home__button" onClick={handleGameClick}>
          CSS Game
        </button>
      </header>

      <div className="Menu_container">
        <button className="btn" onClick={handleMenuClick}></button>
        {(menu || screenWidth > 650) && (
          <ul className="list">
            <li className="items" onClick={handleProjectsClick}>
              Projects
            </li>
            <li className="items" onClick={handleAboutClick}>
              About me
            </li>
            <li className="items" onClick={handleContactClick}>
              Contact
            </li>
          </ul>
        )}
      </div>

      {view === "projects" && <Projects />}
      {view === "about" && <About handleProjectsClick={handleProjectsClick} />}

      <Footer onUpClicked={handleUpClick} />
    </div>
  )
}

export default Home
