import { FaSearch ,FaBox, FaHeart, FaUser, FaShoppingCart} from 'react-icons/fa';
import logo from '../../img/logo.webp';

const PesquisaSearch = FaSearch as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const Caixa = FaBox as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const Coracao = FaHeart as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const User = FaUser as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const Cart = FaShoppingCart as React.ComponentType<React.SVGProps<SVGSVGElement>>;




export const SearchHeader = () => {
  return (
    <div className="search-header container">
      <div className="search-container">
        <div className="logo-container">
          <img 
            src={logo} 
            alt="Logo Econverse"
            title="Logo Econverse"
          />
        </div>
        
        <div className="input-wrapper">
          <input 
            type="text" 
            className="search-input" 
            placeholder="O que você está buscando?"
          />
          <PesquisaSearch className="search-icon" />
        </div>
        
        <div className="cart-container">
         <img 
            src="/icone-1.png" 
            alt="Ícone 1" 
            className="footer__icon"
          />
          <img 
            src="/icone-2.png" 
            alt="Ícone 2" 
            className="footer__icon"
          />
          <img 
            src="/icone-3.png" 
            alt="Ícone 3" 
            className="footer__icon"
          />
          <img 
            src="/icone-4.png" 
            alt="Ícone 4" 
            className="footer__icon"
          />
        </div>
      </div>
    </div>
  );
};