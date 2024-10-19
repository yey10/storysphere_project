import React from 'react';
import ReactImg from '../../../assets/img/persona.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore from 'swiper/core';
SwiperCore.use([ Navigation ]);
import '../../../assets/css/home5.css';
import { Navigation } from 'swiper/modules';

const Home5 = () => {
  return (
    <div>
      <div className="home-5">
        <h3>Lo que dicen nuestros usuarios</h3>
        <div className="home5-content">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            speed={400}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
            }}
            breakpoints={{
              550: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="content">
                <img src={ReactImg} alt="User 1" />
                <h2>Fox</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, numquam.</p>
                <button>Más</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <img src={ReactImg} alt="User 2" />
                <h2>Fox</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, numquam.</p>
                <button>Más</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <img src={ReactImg} alt="User 3" />
                <h2>Fox</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, numquam.</p>
                <button>Más</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <img src={ReactImg} alt="User 4" />
                <h2>Fox</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, numquam.</p>
                <button>Más</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <img src={ReactImg} alt="User 5" />
                <h2>Fox</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, numquam.</p>
                <button>Más</button>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-no-swiping">
              <div className="content">
                <img src={ReactImg} alt="User 6" />
                <h2>Fox</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, numquam.</p>
                <button>Más</button>
              </div>
            </SwiperSlide>
          </Swiper>

          <ul className="control" id="custom-control">
            <li className="prev"><i className="fa-solid fa-arrow-left arrow"></i></li>
            <li className="next"><i className="fa-solid fa-arrow-right arrow"></i></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home5;
