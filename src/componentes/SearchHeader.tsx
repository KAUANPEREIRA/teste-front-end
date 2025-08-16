import { FaSearch ,FaBox, FaHeart, FaUser, FaShoppingCart} from 'react-icons/fa';
import logo from '../img/logo.webp';

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
          <Caixa style={{ color: "#9f9f9f", marginRight: "8px" }}/>
          <Coracao style={{ color: "#9f9f9f", marginRight: "8px" }}/>
          <User style={{ color: "#9f9f9f", marginRight: "8px" }}/>
          <Cart style={{ color: "#9f9f9f", marginRight: "8px" }}/>
        </div>
      </div>
    </div>
  );
};