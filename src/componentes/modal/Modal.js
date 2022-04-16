import React from 'react'
import './modal.css'
import Chukit from '../../assets/chuckit.png'
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({onClose =()=>{}}) => {

 

  return (
    <div className='modal' onClick={onClose}>
      <div className='cardModal'>
          <div className='modalConteudoLeft'>
          kjkjkjkjk
            <div ><img src={Chukit} className='imagem'/></div>
           
            
    
          </div>
          <div className='modalConteudoRight'>
            <div className='textModal'>
              <span className='modalText'>BOLA DE TÊNIS CHUCKIT 1</span>
            </div>
            <div className='precoModal'>
              <span className='modalPrice'>R$ 1499,90</span>
            </div>
            <div className='paragrafoModal'>
              <p className='paragrafo'>
              Many desktop publishing packages and web page editors now many desktop publishing
              </p>
            </div>
            <div className='linkVer'>
              <span className='link'>Veja mais detalhe do produto</span>
            </div>
            <div className='fechar'>
              <AiOutlineClose className='modalClose' onClick={onClose}/>
            </div>
              
          </div>
        </div>
    </div>
  )
}

export default Modal