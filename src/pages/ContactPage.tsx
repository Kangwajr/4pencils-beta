import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="relative flex-1">
        <img
          src="4pencil-utils1/3D-REN/renders/MissingSmile.svg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90 sm:h-[690px]"
        />
        <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24 z-10">
          <div className="max-w-4xl mx-auto border border-gray-800 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="p-4 sm:p-6 md:p-8 bg-black/70">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-sky-500">
                  Get in Touch
                </h2>
                <p className="text-[#FFD700] mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Ready to bring your creative vision to life? We'd love to hear
                  from you!
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start sm:items-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-sky-500 flex-shrink-0" />
                    <span className="text-[#FFD700] text-base sm:text-lg md:text-xl lg:text-2xl">
                      4pencilsanims@gmail.com
                    </span>
                  </div>
                  <div className="flex items-start sm:items-center">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-sky-500 flex-shrink-0" />
                    <span className="text-[#FFD700] text-base sm:text-lg md:text-xl lg:text-2xl">
                      +260976659962
                    </span>
                  </div>
                  <div className="flex items-start sm:items-center">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-sky-700 flex-shrink-0" />
                    <span className="text-[#FFD700] text-base sm:text-lg md:text-xl lg:text-2xl">
                      Salama park Cucumber st Plot No. 11, Lusaka Zambia
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-4 sm:p-6 md:p-8 bg-black/70">
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-sky-500 mb-1 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#FFD700] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-transparent text-[#FFD700] placeholder-[#FFD700]/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-sky-500 mb-1 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#FFD700] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-transparent text-[#FFD700] placeholder-[#FFD700]/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-sky-500 mb-1 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#FFD700] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-transparent text-[#FFD700] placeholder-[#FFD700]/50"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FFD700] hover:bg-[#FFC700] text-sky-500 font-semibold px-4 py-2 sm:py-3 rounded-lg transition-colors text-base sm:text-lg md:text-xl lg:text-2xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;