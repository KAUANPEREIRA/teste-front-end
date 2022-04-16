import React from 'react'
import './parceiros.css'

const Parceiros = () => {
  return (
    <div className='parceiros container'>
      <div className='parceirosEsquerda'>
          <div className='efeito'>
            <div className='retanguloImg'>
            </div>
            <div className='propriedades'>
                    <h1 className='paceirosNome'>Parceiros</h1>
                    <p className='loremParagro'>
                        Lorem ipsum dolor sit amet, consecteur
                    </p>
                    <div className='btnPropiedades'>
                        CONFIRA
                    </div>
                    <div className='meuEfeito'>

                    </div>
                    <div className='slider-pointerParceiros'>
                        <div className='pointer active'></div>
                        <div className='pointer'></div>
                        <div className='pointer'></div>
                    </div>   
             </div>
          </div>
      </div>
      <div className='parceirosDireita'>
          <div className='retanguloPrincipal'>

              

          </div>
          
          
      </div>
    </div>
  )
}

export default Parceiros