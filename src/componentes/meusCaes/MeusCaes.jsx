import React,{useEffect} from 'react'
import './meusCaes.css'
import axios from "axios"
import {MdKeyboardArrowLeft} from "react-icons/md"
import {MdKeyboardArrowRight} from "react-icons/md"

const baseUrl ='https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json'


const MeusCaes = () => {

    
  return (
    <section className='container'>
        <div className="meusCaes">
            <div className='conteudoDireita'>
                <h1 className='titleMCaes'>
                    Meu cachorro...
                </h1>
            </div>
            <div className='conteudoEsquerda'>
                <div className='btns btnActive'>
                    É AGITADO 
                </div>
                <div className='btns'>
                    MORDE 
                </div>
                <div className='btns'>
                    LATE MUITO
                </div>
                <div className='btns'>
                    É ANSIOSO
                </div>
                <div className='btns'>
                    ESTRESSADO
                </div>
                <div className='caesSetas'>
                
                <MdKeyboardArrowLeft className='caesEsquerdas'/><MdKeyboardArrowRight className='caesDireita'/>
                
                </div>

            </div>
       </div>
       
    </section>
  )
}

export default MeusCaes