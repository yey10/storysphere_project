import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Autoplay, EffectCards]);
import '../../../assets/css/home2.css';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules';

const Home2 = () => {
  return (
    <div>
      <div className="home-2 slider">
        <h3>DESTACADOS</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCards]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect='cards'
          grabCursor={true}
        >
          <SwiperSlide className="swiper-slide slide-1 slide-item img-1">
            <div>
              <h4>Image 1</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-2 slide-item img-2">
            <div>
              <h4>Image 2</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-3 slide-item img-3">
            <div>
              <h4>Image 3</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-4 slide-item img-4">
            <div>
              <h4>Image 4</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-5 slide-item img-5">
            <div>
              <h4>Image 5</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home2;
