import React from 'react'
import IMG1 from '../../assets/image48.png'
import './nav.css'
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"
import {IoIosArrowDropdown} from "react-icons/io"
import {MdKeyboardArrowDown} from "react-icons/md"


const Nav = () => {
  return (
    <nav>
        <section className='banner'>
            <div className='sliders'>
                <div className='slide'>
                  <div className='slidearea'>
                    <div className='conteudoNav'>
                      <h1 className='fotoNav'>as melhores guias para os melhores passeios</h1>
                      <button className='btnNave'>
                       CONFIRA
                        
                      </button>

                    </div>

                  </div>
                    
                </div>
            </div>
            <div className='slider-pointer'>
              <div className='pointer active'></div>
              <div className='pointer'></div>
              <div className='pointer'></div>

            </div>
            <div className='slider-setas'>
              <IoIosArrowBack className='setaLeft'/>
              <IoIosArrowForward className='setaRigth'/>

            </div>
        </section>
        <div className='sliderDown'>
              <MdKeyboardArrowDown className='downSEta'/>
        </div>
    </nav>
  )
}

export default Nav