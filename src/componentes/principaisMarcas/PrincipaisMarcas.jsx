import React from 'react'
import "./principaisMarcas.css"
import IMG18 from '../../assets/image18.png'
import IMG19 from '../../assets/image19.png'
import IMG17 from '../../assets/image17.png'
import IMG43 from '../../assets/image43.png'
import {MdKeyboardArrowLeft} from "react-icons/md"
import {MdKeyboardArrowRight} from "react-icons/md"

const PrincipaisMarcas = () => {
  return (
    <section className='categorias container'> 
        <div className='meusCardsPrincipais'>
            <div className='cardPrincipais'>
                <img className="cardImg" src={IMG18} />
            </div>

            <div className='cardPrincipais'>
                <img className="cardImg" src={IMG19} />
            </div>

            <div className='cardPrincipais'>
                <img className="cardImg" src={IMG17} /> 
            </div>

            <div className='cardPrincipais'>
                <img className="cardImg" src={IMG18} />
            </div>

            <div className='cardPrincipais'>
                <img className="cardImg" src={IMG19} />
            </div>

            <div className='cardPrincipais'>
                <img className="cardImg" src={IMG17} />
            </div>
            <div className='cardsSetasPrincipais'>
                <MdKeyboardArrowLeft className='setaEsquerda'/><MdKeyboardArrowRight className='setaDireita'/>    
            </div>
        </div>
        
    </section>
  )
}

export default PrincipaisMarcas