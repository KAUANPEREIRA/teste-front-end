import { FaShieldAlt, FaTruck, FaRegCreditCard } from 'react-icons/fa';


const ShieldIcon = FaShieldAlt as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const TruckIcon = FaTruck as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const CreditCardIcon = FaRegCreditCard as React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const TopoHeader = () => {
  return (
    <div className="topoHeader">
      <div className="container">
        <div className="topoItens">
          <div>
            
              <ShieldIcon style={{ color: "#9f9f9f", marginRight: "8px" }} />
         
            <span>Compra <span className='blueTopo'>100% segura</span></span>
          </div>
          <div>
            
              <TruckIcon style={{ color: "#9f9f9f", marginRight: "8px" }} />
           
            <span><span className='blueTopo'>Frete grátis</span> acima de R$ 200</span>
          </div>
          <div>
            
              <CreditCardIcon style={{ color: "#9f9f9f", marginRight: "8px" }} />
            
            <span><span className='blueTopo'>Parcele</span> suas compras</span>
          </div>
        </div>
      </div>
    </div>
  );
};