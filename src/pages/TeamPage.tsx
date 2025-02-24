import React from "react";
import Navbar from "../components/Navbar";

function team() {
  const teamMembers = [
    {
      id: 1,
      name: "Melvin Rae Sikazwe",
      role: "2D/3D Character Animator",
      image: "/team/melvinRae.jpeg",
    },
    {
      id: 2,
      name: "Kai",
      role: "Animator",
      image: "/team/kai.jpeg",
    },
    {
      id: 3,
      name: "Prince Pfox",
      role: "Lead Animator",
      image: "/team/prince.jpeg",
    },
    {
      id: 4,
      name: "Tai The Artist",
      role: "Lead Animatic/Storyboard Artist",
      image: "/team/tai.jpeg",
    },
    // {
    //   id: 5,
    //   name: "Salome P Arts",
    //   role: "Illustrator/Concept",
    //   image: "/team/salome.jpeg",
    // },
    {
      id: 6,
      name: "Numba.E.Kabila",
      isCenter: true,
      role: "Creative Director",
      image: "/team/numba.jpeg",
    },
    {
      id: 7,
      name: "Don Philip",
      role: "Character Designer/3D Modeling",
      image: "/team/philip.jpeg",
    },
    {
      id: 8,
      name: "Baxstone Kayawe",
      role: "Lead Illustrator, Character Designer",
      image: "/team/baxstone.jpeg",
    },
    {
      id: 9,
      name: "Stanford Sakala",
      role: "Lead Concept Artist/Comic book/Illustrator",
      image: "/team/stanford.jpeg",
    },
  ];

  const nonCenterMembers = teamMembers.filter((member) => !member.isCenter);
  const centerMember = teamMembers.find((member) => member.isCenter);

  return (
   
<div className="min-h-screen p-8" style={{ fontFamily: "'', sans-serif",backgroundImage: "url('/studio1.jpeg')" }}>
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <div className="  flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16">
          {/* Text Section */}
          <div className="flex-1 space-y-6 py-28 text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="text-6xl text-sky-500 font-bold leading-tight">
              Meet Our Exceptional Team
            </h1>
            <p className="text-3xl text-[#FFD700] pt-10">
              We're a diverse group of passionate individuals working together
              to create amazing experiences. Our team brings together expertise
              from design, development, and strategy to deliver outstanding
              results.
            </p>
          </div>

          {/* Circular Team Section */}
          <div className="relative flex-1 h-[600px] ">
            {/* Center Circle */}
            {centerMember && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <div className="relative w-40 h-40 rounded-full bg-black shadow-xl flex items-center justify-center overflow-hidden animate-bounce">
                  <img
                    src={centerMember.image}
                    alt={centerMember.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-32 text-center">
                  <p className="text-sky-500 font-semibold text-sm">
                    {centerMember.name}
                  </p>
                  <p className="text-[#FFD700] text-xs">{centerMember.role}</p>
                </div>
              </div>
            )}

            {/* Surrounding Circles */}
            {nonCenterMembers.map((member, index) => {
              const angle =
                index * (360 / nonCenterMembers.length) * (Math.PI / 180);
              const radius = 220; // Distance from center
              const left = Math.cos(angle) * radius;
              const top = Math.sin(angle) * radius;

              return (
                <div
                  key={member.id}
                  className="absolute group"
                  style={{
                    left: `calc(50% + ${left}px)`,
                    top: `calc(50% + ${top}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden transform transition-all duration-300 group-hover:scale-110 shadow-xl animate-spin">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sky-500 font-semibold text-sm">
                      {member.name}
                    </p>
                    <p className="text-[#FFD700] text-xs">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default team;
