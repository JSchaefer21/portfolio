import Formular from "./Formular.jsx"
import "../styles/Footer.sass"

type Props = {
  onUpClicked: VoidFunction
}

function Footer({ onUpClicked }: Props) {
  return (
    <footer className="Footer mw">
      <div className="Footer__cv mw">
        <div className="Footer__section color-cv"></div>
        <div className="Footer__cv-container">
          <a
            className="Footer__cv-tittle"
            href="../../cv.pdf"
            download="Jordi_Schaefer_CV.pdf"
          >
            Download CV
            <p className="Footer__cv-description"> .pdf (96KB)</p>
          </a>
        </div>
      </div>

      <div className="Footer__formular mw">
        <div className="Footer__section color-formular"></div>
        <Formular />
      </div>

      <div className="Footer__icons mw">
        <a
          href="https://github.com/JSchaefer21"
          style={{ display: "table-cell" }}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="Footer__icons-logo"
            src="../../github_logo.png"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jordi-schaefer"
          style={{ display: "table-cell" }}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="Footer__icons-logo"
            src="../../linkedin_logo.png"
            alt=""
          />
        </a>
      </div>

      <button className="Footer__up-button" onClick={onUpClicked}></button>
    </footer>
  )
}

export default Footer
