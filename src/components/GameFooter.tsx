import { useEffect } from "react"
import "../styles/Game.sass"

type Props = {
  onResetClicked: VoidFunction
}
function GameFooter({ onResetClicked }: Props) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 1.2) {
        const elem = document.getElementById("drop-right")
        elem?.classList.add("drop-right")
        setTimeout(() => elem?.classList.add("middle-right"), 800)
        setTimeout(() => elem?.classList.add("move-right"), 2800)
      }
      if (window.scrollY > window.innerHeight * 1.7) {
        const elem = document.getElementById("drop-left")
        elem?.classList.add("drop-left")
        setTimeout(() => elem?.classList.add("middle-left"), 800)
        setTimeout(() => elem?.classList.add("move-left"), 2800)
      }
      if (window.scrollY > window.innerHeight * 2.2) {
        const elem0 = document.getElementById("drop0")
        const elem1 = document.getElementById("drop1")
        const elem2 = document.getElementById("drop2")
        const elem3 = document.getElementById("drop3")
        elem0?.classList.add("drop-left")
        setTimeout(() => elem0?.classList.add("middle-left"), 800)
        setTimeout(() => elem0?.classList.add("move-left"), 2800)
        elem1?.classList.add("drop-right")
        setTimeout(() => elem1?.classList.add("middle-right"), 800 + 100)
        setTimeout(() => elem1?.classList.add("move-right"), 2800 + 300)
        elem2?.classList.add("drop-right")
        setTimeout(() => elem2?.classList.add("middle-right"), 800 + 0)
        setTimeout(() => elem2?.classList.add("move-right"), 2800 + 100)
        elem3?.classList.add("drop-right")
        setTimeout(() => elem3?.classList.add("middle-right"), 800)
        setTimeout(() => elem3?.classList.add("move-right"), 2800)
      }
      if (window.scrollY > window.innerHeight * 3.2) {
        const elem = document.getElementById("rotate")
        elem?.classList.add("rotate")
      }
      if (window.scrollY > window.innerHeight * 4.75) {
        const elem = document.getElementById("Footer")
        elem?.classList.add("Footer-transform")
        const elem2 = document.getElementById("limit")
        elem2?.classList.add("hide")
        setTimeout(() => onResetClicked(), 2800)
      }
    })
  }, [])

  return (
    <div id="Footer" className="Footer">
      <div style={{ height: "150vh" }}></div>
      <div className="Space_container">
        <p id="drop-right" className="">
          You made it
        </p>
      </div>
      <div className="Space_container">
        <p id="drop-left" className="">
          You got lucky, Math.random() is with you
        </p>
      </div>
      <div className="Space_container">
        <p id="drop0">
          This game was made on React, only with Javascript and CSS
        </p>
        <p id="drop1">100% pixel perfect, fully responsive</p>
        <p id="drop2">Without galleries</p>
        <p id="drop3">
          Working with screen sizes, percentages and scroll position
        </p>
      </div>
      <div className="Space_container"></div>
      <div className="Space_container" style={{ position: "relative" }}>
        <p id="rotate">Stop, you're breaking it</p>
      </div>
      <div style={{ height: "100vh" }}></div>
      <div className="Space_container">
        <div className="gandalf" />
        <p id="limit" className="limit">
          You Shall Not Pass!
        </p>
      </div>
      <div style={{ height: "150vh" }}></div>
    </div>
  )
}

export default GameFooter
