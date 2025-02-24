import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import GalleryItem from "./ServicesItem";
import { galleryItems } from "./servicesData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="bg-black/20 px-0"> 
    <div className="py-20  inset-0  bg-cover bg-center bg-fixed" style={{ fontFamily: "'Wonderkids', sans-serif", backgroundImage: "url('/4pencil-utils1/ServicesImages/girls_final_.svg')", }}>
      <div className="relative px-4">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 1,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <GalleryItem
                {...item}
                icon={<item.icon className="w-6 h-6 text-sky-500" />}
                selected={selected}
                onSelect={setSelected}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
       </div>
    </div>
  );
};

export default OurGallery;