import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'
import IMG826 from '../../assets/Group826.png'
import IMG830 from '../../assets/Group830.png'
import IMG831 from '../../assets/Group831.png'

const Footer = () => {
  return (
    <div className='footer container'>
        <div className='conteudoFooter container'>
            <div className='espacoFooter'>..</div>
            <div className='footerEsquerda'>
                <div className='sigaNos'>
                Nos siga nas nossas redes sociais
                </div>
                <div className='redeSociais'>
                    <FaFacebookF className='iconsSocialxs'/>
                    <BsInstagram className='iconsSocialxs'/>
                    <BsYoutube className='iconsSocialxs'/>
                </div>
                <h1 className='sobreO'>Sobre o Cãoselheiro</h1>
                <p className='paragrafoFooter'>
                Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online
                 de uma empresa que nasceu para contribuir para uma melhor
                  qualidade de vida dos cães e seus familiares humanos. Seus
                   sócios são profissionais de educação canina que trabalham seguindo
                    metodologias positivas de treinamento animal, encorajando e recompensando
                     os acertos de nossos amigos em seus processos de adestramento. Aqui você
                      encontrará apenas itens de qualidade comprovada e utilizados pessoalmente
                       por seus idealizadores. Fique à vontade!
                </p>
            </div>
            <div className='linhaDivisoriaFooter'></div>
            <div className='footerDireita'>
           
                <div className='anuncios'>
                    
                    <div className='assinatura'>
                        <h1 className='textoAssinatura'>ASSINATURA</h1>
                        <h1 className='textoParceiros'>PARCEIROS</h1>
                    </div>
                    
                    <div className='institucional'>
                        <h1 className='textoInstitucional'>INSTITUCIONAL</h1>
                        <ul className='listaFooter'>
                            <li className='liFooter'>Quem somos</li>
                            <li className='liFooter'>Política de privacidade</li>
                            <li className='liFooter'>Política comercial</li>
                            <li className='liFooter'>Política de devolução</li>
                            <li className='liFooter'>Regras de frete</li>
                        </ul>

                    </div>
                    <div className='atendimento'>
                    <h1 className='textoAtendimento'>ATENDIMENTO</h1>
                    <ul className='listaFooter'>
                            <li className='liFooter'>Fale conosco</li>
                            <li className='liFooter'><BsTelephone className='foneFooter'/>(11) 97212-1314</li>
                            <li className='liFooter'>ocaoselheiro@ocaoselheiro.com.br</li>
                            <li className='liFooter'>Trabalhe conosco</li>
                        </ul>

                    </div>
                </div>
                <div className='formasPagamentos'>
                    <div className='formaPagametoFooter'>
                        <h1 className='formaFooter'>FORMAS DE PAGAMENTO</h1>
                        <img src={IMG826} className="img826"/>
                      


                    </div>

                    <div className='segurancaFooter'>
                        <h1 className='segurancafoter'>SEGURANÇA</h1>
                        <img src ={IMG830} className="img830"/>

                    </div>
                </div>
                <div className='linhaDeitada'></div>
                <div className='final'>
                    <p className='finalFooter'>
                    O Cãoselheiro Comércio LTDA
                    CNPJ: 30.324.633/0001-16
                    © Todos os direitos reservados. 2021
                    </p>
                    <div className='ecconverse'>
                        <img src={IMG831} className="ecconverse"/>
                    </div>
                </div>
            </div>
            

        </div>

    </div>
  )
}

export default Footer