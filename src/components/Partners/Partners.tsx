import React from "react";
import PartnerCarousel from "./PartnerCarousel";

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16 text-sky-500">
          Trusted by Industry Leaders
        </h2>
        <PartnerCarousel />
      </div>
    </section>
  );
};

export default Partners;
