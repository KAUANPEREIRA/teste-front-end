import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
import './nossoBlog.css'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'
import Chukit from '../../assets/chuckit.png'
import {BsHeart} from 'react-icons/bs'
import Modal from '../modal/Modal'
import IMG44 from '../../assets/image44.png'
import IMG9 from '../../assets/image9.png'


const MeusProdutos = () => {

    const [isModalVisible,setIsModalVisible]=useState(false)


    const [produtos, setProdutos]= useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:5000/products")
        .then((response)=>{
            setProdutos(response.data)
        }).catch(()=>{
            console.log('deu erro')
        })
    },[])

    const carousel=useRef(null)

    const handleLeftClick =(e)=>{
        e.preventDefault()
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft +=carousel.current.offsetWidth

    }

    const handleRigthClick =(e)=>{
        carousel.current.scrollLeft -=carousel.current.offsetWidth

    }


  return (
    <div className='meusProdutos '>
        <h1 className='nossoBlog container'>Confira Nosso Blog</h1>
     <div className='meusCardsBlog container ' >
         
         
                <div className='meuCardBlog'>
                    <div className='imagemBlog' ></div>
                    <div className='extensoes'>
                    </div>
                    <div className='meuspanBlog'>
                        <div className='loremIpsum'>
                            <br></br>
                            <span className='lorem1'>
                            Lorem ipsum dolor sit amet consectetur.</span>
                        </div>

                        <span className='produtoApiBlog'>
                        Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.
                        </span>
                        <div className='btnBlog'>
                            LER ARTIGO
                        </div>
                    </div>
                   
                </div>
                
                <div className='meuCardBlog'>
                    <div className='imagemBlog2' ></div>
                    <div className='extensoes'>
                    </div>
                    <div className='meuspanBlog'>
                        <div className='loremIpsum'>
                            <br></br>
                            <span className='lorem1'>
                            Lorem ipsum dolor sit amet consectetur.</span>
                        </div>

                        <span className='produtoApiBlog'>
                        Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.
                        </span>
                        <div className='btnBlog'>
                            LER ARTIGO
                        </div>
                    </div>
                   
                </div>

                <div className='meuCardBlog'>
                    <div className='imagemBlog3' ></div>
                    <div className='extensoes'>
                    </div>
                    <div className='meuspanBlog'>
                        <div className='loremIpsum'>
                            <br></br>
                            <span className='lorem1'>
                            Lorem ipsum dolor sit amet consectetur.</span>
                        </div>

                        <span className='produtoApiBlog'>
                        Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.
                        </span>
                        <div className='btnBlog'>
                            LER ARTIGO
                        </div>
                    </div>
                   
                </div>

                <div className='meuCardBlog'>
                    <div className='imagemBlog4' ></div>
                    <div className='extensoes'>
                    </div>
                    <div className='meuspanBlog'>
                        <div className='loremIpsum'>
                            <br></br>
                            <span className='lorem1'>
                            Lorem ipsum dolor sit amet consectetur.</span>
                        </div>

                        <span className='produtoApiBlog'>
                        Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.
                        </span>
                        <div className='btnBlog'>
                            LER ARTIGO
                        </div>
                    </div>
                   
                </div>
          
           
        </div>
        <div className='mbotesBlog'>
            <IoIosArrowForward  className="clickLeftBlog"/>
            <IoIosArrowBack className='clickRightBlog' />
        </div>
        <div className='slider-pointerBlog'>
              <div className='pointer active'></div>
              <div className='pointer'></div>
              <div className='pointer'></div>
             

            </div>
     
    </div>  
)

}


export default MeusProdutos



