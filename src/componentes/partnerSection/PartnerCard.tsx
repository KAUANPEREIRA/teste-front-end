import React from "react";


interface PartnerCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="partner-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="overlay">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default PartnerCard;
