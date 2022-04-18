import React from 'react'
import './entreEmContato.css'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import IMG2 from '../../assets/image2.png'

export const EntreEmContato = () => {
  return (
    <div className='entreEmContato container'>
        <div className='meuCardContato'>
            <div className='textoInscrever'>
                <h1 className='inscrever'>
                    Se inscreva para receber novidades e promoções
                </h1>
            </div>
            <div className='login'>
                <div className='inputEmail'>
                    <AiOutlineUser className='userEmoji'/>
                    <input type="email" placeholder='Digite seu nome'/>
                </div>

                <div className='inputSenha'>
                    <AiOutlineMail className='senhaEmoji'/>
                    <input type="password" placeholder='Digite seu nome'/>
                </div>
            </div>
            <div className='imagemCao'>
                <img src={IMG2} />
            </div>
            <div className='btnEnviarContato'>
                ENVIAR
            </div>

        </div>



    </div>
  )
}

export default EntreEmContato;
