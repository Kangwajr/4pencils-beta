import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Palette, Users, Target, Lightbulb, Award, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';

const AboutPage = () => {


  const values = [
    {
      icon: Palette,
      title: "Creativity and Innovation",
      description: "We combine imagination with cutting-edge technologies to craft impactful and unique visual solutions.",
    },
    {
      icon: Users,
      title: "Sustainability and Education",
      description: "We combine imagination with cutting-edge technologies to craft impactful and unique visual solutions",
    },
    {
      icon: Target,
      title: "Empowerment and Collaboration",
      description: "We uplift communities and build strong partnerships to achieve shared goals and drive progress.",
    },
    {
      icon: Lightbulb,
      title: "Excellence and Integrity",
      description: "We are committed to delivering high-quality results with honesty, transparency, and professionalism.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering excellence always",
    },
    { 
      icon: Heart, 
      title: "Passion", 
      description: "Love for what we do" 
    },
  ];

  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: "'', sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative h-[80vh]">
  {/* Background Image */}
  <div 
    className="absolute inset-0 w-full h-full  bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('/aboutpage.jpeg')",
    }}
  />
  
  {/* Content */}
  <div className="relative z-10 h-full flex items-center justify-center text-center">
    <div className="max-w-6xl mx-auto px-4">
      <TypeAnimation
        sequence={[
          "4 Pencils Animation Studio",
          1000,
          "Where Creativity Meets Technology",
          1000,
          "Bringing Your Ideas to Life",
          1000,
        ]}
        wrapper="h1"
        speed={50}
        className="text-5xl md:text-6xl font-bold text-sky-500 mb-6"
        repeat={Infinity}
      />
      <p className="text-3xl text-[#FFD700]">
        Zambia's Premier Animation and Creative Design Studio
      </p>
    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-bold text-sky-500 mb-6">
                About Our Studio
              </h2>
              <p className="text-[#FFD700] text-2xl mb-4 justify-evenly">
              4 Pencils is a Zambian-based animation studio and creative
              hub dedicated to visual storytelling through design,
              animation, and illustration. We partner with NGOs,
              businesses, educational institutions,  <br /> and development
              organizations to communicate impact and advance
              sustainable development goals through innovative and
              engaging visuals. At 4 Pencils, we believe creativity is a
              powerful tool for driving positive change and shaping a
              better future.
              </p>
          
            </div>
            <div className="relative">
              <img
                src="/studio1.jpeg"
                alt="Studio workspace"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20">
        <img
          src="4pencil-utils1/4pencilsIllustrations/herokidsrich.svg"
          alt="Background"
          className="absolute inset-0 w-full h-[950px] bg-center  object-cover opacity-90"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 b">
          <h2 className="text-6xl font-bold text-center text-[#FFD700] mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 hover:border-sky-500 p-8 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-[#FFD700] text-xl">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-40" style={{
      backgroundImage: "url('/4pencil-utils1/3D-REN/renders/JAMES0.svg')"
    }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-white mb-4">
              Visit Our Studio
            </h2>
            <p className="text-[#FFD700] text-3xl">
              Salama Park cucumber cl st Plot No. 11, Lusaka Zambia.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 ">
            
            <div className="border border-gray-800 p-6 rounded-xl text-center bg-black/20">
              <h3 className="text-4xl font-semibold text-sky-500 mb-2">
                Address
              </h3>
              <p className="text-[#FFD700] text-3xl">
                Salama Park cucumber cl st Plot No. 11, Lusaka, Zambia
              </p>
            </div>
            <div className="border border-gray-800 p-6 rounded-xl text-center  bg-black/20">
              <h3 className="text-4xl font-semibold text-sky-500 mb-2">Email</h3>
              <p className="text-[#FFD700] text-3xl">4pencilsanims@gmail.com</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-xl text-center  bg-black/20">
              <h3 className="text-4xl font-semibold text-sky-500 mb-2">Phone</h3>
              <p className="text-[#FFD700] text-3xl">+260976659962</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;