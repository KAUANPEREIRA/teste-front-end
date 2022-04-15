import React from 'react'
import "./categorias.css"
import IMG40 from '../../assets/image40.png'
import IMG41 from '../../assets/image41.png'
import IMG42 from '../../assets/image42.png'
import IMG43 from '../../assets/image43.png'
import {MdKeyboardArrowLeft} from "react-icons/md"
import {MdKeyboardArrowRight} from "react-icons/md"

const Categorias = () => {
  return (
    <section className='categorias container'> 
        <h1 className='titleCategorias'>Categorias</h1>
        <div className='meusCards'>
            <div className='card'>
                <img className="cardImg" src={IMG40} />
                <span className='cardNome'>Brinquedos</span>
            </div>

            <div className='card'>
                <img className="cardImg" src={IMG41} />
                <span className='cardNome'>Petiscos</span>
            </div>

            <div className='card'>
                <img className="cardImg" src={IMG42} />
                <span className='cardNome'>Guias</span>
            </div>

            <div className='card'>
                <img className="cardImg" src={IMG43} />
                <span className='cardNome'>Higiene</span>
            </div>
            <div className='cardsSetas'>
                <MdKeyboardArrowLeft className='setaEsquerda'/><MdKeyboardArrowRight className='setaDireita'/>
                
        </div>
        </div>
        
    </section>
  )
}

export default Categorias