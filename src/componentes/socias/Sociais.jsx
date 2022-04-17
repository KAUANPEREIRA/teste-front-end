import React from 'react'
import './sociais.css'
import IMG25 from '../../assets/image25.png'
import IMG26 from '../../assets/image26.png'
import IMG99 from '../../assets/image99.png'

const Sociais = () => {
  return (
    <div className='sociais container'>
       <div className='headerSociais'>
           <div className='instagram'>
               <h1 className='insta'>Instagram</h1>
           </div>
           <div className='seguir'>
               <span className='seguirMais'>+Seguir</span>
           </div>
       </div>
       <div className='slideSocialImage'>
           <div className='socialImage'>
               <img src={IMG25}/>
           </div>
           <div className='socialImage'>
               <img src={IMG26}/>
           </div>
           <div className='socialImage'>
               <img src={IMG99}/>
           </div>
           <div className='socialImage'>
               <img src={IMG25}/>
           </div>
           <div className='socialImage'>
               <img src={IMG26}/>
           </div>
           <div className='socialImage'>
               <img src={IMG99}/>
           </div>
       </div>
    </div>
  )
}

export default Sociais