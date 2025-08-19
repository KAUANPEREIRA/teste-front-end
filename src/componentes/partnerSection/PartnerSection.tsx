import React from "react";
import PartnerCard from "./PartnerCard";
import '../../componentes/partnerSection/partnerCard.scss'


const PartnerSection: React.FC = () => {
  const cards = [
    {
      title: "Parceiros",
      description: "Lorem ipsum dolor  sit amet, consectetur",
      buttonText: "CONFIRA",
      imageUrl: "/imagens/parceiros.webp",
    },
    {
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "CONFIRA",
      imageUrl: "/imagens/parceiros.webp",
    },
  ];

  return (
    <div className="container">
    <div className="partner-card-container">
      {cards.map((card, index) => (
        <PartnerCard key={index} {...card} />
      ))}
    </div>
    </div>
   
  );
};

export default PartnerSection;
