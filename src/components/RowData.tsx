import React from "react";

interface FarmerInfoProps {
  imgSrc: string;
  farmerName: string;
  produceType: string;
  contactUrl: string;
}

const FarmerInfo: React.FC<FarmerInfoProps> = ({
  imgSrc,
  farmerName,
  produceType,
  contactUrl,
}) => {
  const handleButtonClick = () => {
    window.open(contactUrl, "_blank");
  };

  return (
    <td className={`FarmerInfo`}>
      <div>
        <img src={imgSrc} width="300" height="200" alt={farmerName} />
        <h2>Farmer: {farmerName}</h2>
        <h3>Produce Type: {produceType}</h3>
        <button onClick={handleButtonClick}>Get in touch</button>
      </div>
    </td>
  );
};

export default FarmerInfo;
export type { FarmerInfoProps };
