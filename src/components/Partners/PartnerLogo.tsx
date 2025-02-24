import React from 'react';
import { Partner } from './partnerData';

interface PartnerLogoProps {
  partner: Partner;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ partner }) => {
  return (
    <div className="mx-8 flex-none">
      <img
        src={partner.logo}
        alt={partner.name}
        className="w-full h-24 object-cover hover:grayscale-0 transition-all duration-300 shadow-lg"
      />
    </div>
  );
};

export default PartnerLogo;