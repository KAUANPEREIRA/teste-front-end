import React from "react";
import '../footer/footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__grid">
          {/* Coluna da Logo (col-4) */}
          <div className="footer__brand-col">
            <div className="footer__institutional">
              <img 
                src='/imagens/logo.webp' 
                alt='Econverse' 
                className="footer__logo"
              />
              <p className="footer__brand-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="d-flex">
                <img src="/imagens/instagram.png" alt="" title=""/>
                <img src="/imagens/facebook.png" alt="" title=""/>
                <img src="/imagens/linkedin.png" alt="" title=""/>

              </div>
              
             
            </div>
          </div>

         
          <div className="footer__links-col">
            <div className="footer__links-grid">
              <div className="footer__links-column">
                <h3 className="footer__links-title">Institucional</h3>
                <ul className="footer__links-list">
                  <li><a href="#" className="footer__link">Sobre Mia</a></li>
                  <li><a href="#" className="footer__link">Movimento</a></li>
                  <li><a href="#" className="footer__link">Trabalha conosco</a></li>
                </ul>
              </div>

              <div className="footer__links-column">
                <h3 className="footer__links-title">Ajuda</h3>
                <ul className="footer__links-list">
                  <li><a href="#" className="footer__link">Suporte</a></li>
                  <li><a href="#" className="footer__link">Fala Conosco</a></li>
                  <li><a href="#" className="footer__link">Perguntas Frequentes</a></li>
                </ul>
              </div>

              <div className="footer__links-column">
                <h3 className="footer__links-title">Termos</h3>
                <ul className="footer__links-list">
                  <li><a href="#" className="footer__link">Termos e Condições</a></li>
                  <li><a href="#" className="footer__link">Política de Privacidade</a></li>
                  <li><a href="#" className="footer__link">Troca e Devolução</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>

        <p className="footer__copyright">
          © {new Date().getFullYear()} Econverse. Lorem ipsum dolor sit amet.
        </p>
      </div>
    </footer>
  );
};