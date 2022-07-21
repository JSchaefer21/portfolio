import '../styles/CV.sass'

function CV(){
    return <div className='CV' >
        <a className='CV__tittle' href="../../CV_Jordi_Schaefer.pdf" download="CV_Jordi_Schaefer.pdf">
            Download CV
            <p className='CV__description'> pdf (145Mb)</p>
        </a>
        
    </div>
} 

export default CV