import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-20 inset-0  bg-cover bg-center bg-fixed" style={{
      backgroundImage: "url('/4pencil-utils1/ServicesImages/girls_final_.svg')",
    }} >
      <div className="container mx-auto px-4 ">
        <div className="bg-sky-500 rounded-2xl p-12 text-center text-[#FFD700]">
          <h2 className="text-6xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-3xl mb-8 max-w-2xl mx-auto text-[#FFD700]">
            Let's work together to bring your creative vision to life. Contact
            us today for a free consultation.
          </p>
          <Link to="/Contact">
           <button className="text-2xl bg-[#FFD700] text-sky-500 px-8 py-3 rounded-full hover:bg-[#FFC700]transition-colors shadow-lg">
            Contact Us
          </button>
          </Link>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
