import React from 'react'
import './headerMarcas.css'

const HeaderMarcas = () => {
  return (
    <div className='container'>
        <div className='headerMarcas'>
        <div className='headerDireita'>
            <h1 className='MeuTitleHeader'>
               Principais marcas
            </h1>
        </div>
        <div className='headerEsquerda'>
            <div className='visulalize'>
                <span className='vtodosHeader'>
                    Ver todos
                </span>
            </div>

        </div>
       
        </div>

    </div>
  )
}

export default HeaderMarcas