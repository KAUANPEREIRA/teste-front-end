import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
import './meusProdutos.css'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'
import Chukit from '../../assets/chuckit.png'
import {BsHeart} from 'react-icons/bs'
import Modal from '../modal/Modal'


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
     <div className='meusCards container carousel' ref={carousel}>
         {
         produtos.map((produto,key)=>{
             const {productName,descriptionShort,photo,price}=produto
             return(
                <div className='meuCard' key={key}>
                    <div ><img src={Chukit} className='imagem'/></div>
                    <div className='extensoes'>
                        <div className='btnImg'>40% OFF</div>
                        <BsHeart className='heartCard'/>
                    </div>
                    <div className='meuspan1'>
                        <span className='produtoApi'>{(productName.toUpperCase())}</span>
                    </div>
                    <div className='linhaCorte'>
                        <span className='PriceCortado'>De R$96,69</span>
                    </div>
                    <div className='PriceAtual'>
                        <span className='priceOrigin'>Por R$90,69</span>
                    </div>
                    <div className='priceDescont'>
                        <span className='desconto'>R$85,69</span>
                    </div>
                    <div className='priceAssinantes'>
                        <span className='assinantes'>Para assinantes</span>
                    </div>
                    <div className='btnComprar'>
                        <span className='ligth' onClick={()=>setIsModalVisible(true)}>ADICIONAR</span>
                    </div>
                   
                </div>

             )

         })}
           
        </div>
        <div className='mbotes'>
            <IoIosArrowForward  className="clickLeft"onClick={handleLeftClick}/>
            <IoIosArrowBack className='clickRight' onClick={handleRigthClick}/>
        </div>
        <div className='visualizarMais container'>
            <span className='vMais'>Ver mais...</span>
        </div>
        <div className='slider-pointer'>
              <div className='pointer active'></div>
              <div className='pointer'></div>
              <div className='pointer'></div>
              <div className='pointer'></div>
              <div className='pointer'></div>

            </div>
        {isModalVisible ?(
        <Modal onClose={()=>setIsModalVisible(false)}/>
        
        ):null}
    </div>  
)

}


export default MeusProdutos



