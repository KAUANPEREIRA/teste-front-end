import React from 'react'
import './parceiros.css'
import IMGCao from '../../assets/cao.png'

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
              <div className='textoEsquerda'>
                  <h1 className='caoselheiro'>Assinatura cãoselheiro</h1>
                  <p className='paragrafoCaoselheiro'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.
                  </p>
                  <div className='btnCaoselheiro'>
                     SAIBA MAIS
                  </div>


              </div>
              <div className='imagemDireita'>
                  <img src={IMGCao} className="imagemVasada"/>

              </div>



          </div>
          
          
      </div>
    </div>
  )
}

export default Parceiros