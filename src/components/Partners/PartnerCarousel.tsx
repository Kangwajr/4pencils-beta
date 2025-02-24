import React from 'react';
import { partners } from './partnerData';
import PartnerLogo from './PartnerLogo';

const PartnerCarousel: React.FC = () => {
  // Double the partners array for seamless infinite scroll
  const doubledPartners = [...partners, ...partners];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-infinite-scroll">
        {doubledPartners.map((partner, index) => (
          <PartnerLogo key={`${partner.id}-${index}`} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;