import React from 'react'
import './header.css'
import '../../index.css'
import IMG4 from '../../assets/image4.png'

import {BiCheckShield} from "react-icons/bi"
import {HiOutlineTruck} from "react-icons/hi"
import {AiOutlineCreditCard} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
import {AiOutlineImport} from "react-icons/ai"
import {BsHeart} from "react-icons/bs"
import {HiOutlineUserCircle} from "react-icons/hi"
import {BsCart3} from "react-icons/bs"



const Header = () => {
  return (
      <header>
          <div className='headerAuxiliar container'>
          <div className='headerP1 container'>
              <ul>
                  <li><BiCheckShield className='colorIcon'/>Compra <span>100% segura</span></li>
                  <li><HiOutlineTruck className='colorIcon'/><span>Frete Gratis</span> acima de 200R$</li>
                  <li><AiOutlineCreditCard className='colorIcon'/><span>Parcele</span> suas Compras</li>
              </ul>
          </div>
          <div className='linha'></div>
          <div className='headerP2 container'>
              <div className='logo'>
                  <img src={IMG4}/>
              </div>
              <div className='campoBusca'>
              <input type="text" placeholder='O que você esta buscando'/><FiSearch className='colorIcon lupa'/>
              </div>
              <div className='iconsEnd'>
                <AiOutlineImport className='colorIcon importEnd'/>
                <BsHeart className='colorIcon heart'/>
                <HiOutlineUserCircle className='colorIcon user'/>
                <BsCart3 className='colorIcon user' />
              </div>
          </div>
          <div className='linha'></div>
          <div className='headerP3 container'>
              <ol>
                  <li>BRINCAR</li>
                  <li>MORDER</li>
                  <li>COMER</li>
                  <li>PASSEAR</li>
                  <li>CASA E CONFORTO</li>
                  <li>EDUCAÇÃO</li>
                  <li><span>OFERTAS</span></li>
                  <li>COLEÇAO OUTONO</li>
              </ol>
          </div>
          </div>
        
        
        
        
      </header>
  )
}

export default Header