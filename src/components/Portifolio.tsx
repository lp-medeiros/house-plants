import '../layout/Portifolio.css'
import p1 from '../images/project 1.jpg'
import p2 from '../images/project 2.jpg'
import p3 from '../images/project 3.jpg'
import p4 from '../images/project 4.jpg'
import p5 from '../images/project 5.jpg'
import p6 from '../images/project 6.jpg'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useState } from 'react'


function Portifolio(){
    const [index, setIndex] = useState(-1);
    const slides = [{src: p1}, {src: p2}, {src: p3}, {src: p4}, {src: p5}, {src: p6}]
    return(
        <div id='portifolio'>
        <div className='portifolio-container'>
            <h2 className='title-portifolio'>Conheça Nosso Portifólio</h2>
            <div className='grid'>
                <img src={p1} alt='Project 1' onClick={() => setIndex(1)} style={{cursor:'pointer'}}/>
                <img src={p2} alt='Project 2'/>
                <img src={p3} alt='Project 3'/>
                <img src={p4} alt='Project 4'/>
                <img src={p5} alt='Project 5'/>
                <img src={p6} alt='Project 6'/>
            </div>
        </div>
        </div>
    )
}

export default Portifolio;