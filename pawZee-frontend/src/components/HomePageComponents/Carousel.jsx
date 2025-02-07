import 'swiper/css';
import React from 'react';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = ({ lg_md_carousel_slides, sm_carousel_slides }) => {
  return (
    <>

      {/* Large Screen Carousel */}

      <div className="relative hidden lg:block md:block">
        <Swiper modules={[Autoplay]} loop={true} speed={1000} autoplay={{ delay: 2000 }}>
          {lg_md_carousel_slides.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="relative md:pt-20 lg:pt-0">
                <img className="w-full lg:h-[100vh] h-[75vh] object-cover" src={data.img} alt="carousel_img" />
                <div className="absolute inset-0 flex flex-col justify-center items-start lg:px-16 md:px-12" >
                  <p className="xl:text-6xl lg:text-4xl md:text-3xl font-bold bg-gradient-to-br from-[#6a70d1] to-purple-400 bg-clip-text text-transparent">
                    Experience the Magic <br /> of Unconditional Love
                  </p>
                  <p className="lg:text-lg md:text-sm text-gray-800 py-6">
                    Explore a world of furry friends. <br /> At PawZee, we celebrate the joy of pets <br /> and their unconditional love for you.
                  </p>
                  <Link to={'/shop/cat'}>
                    <button className="px-6 py-2 md:btn-xl bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:bg-gray-300 hover:bg-none text-white hover:text-gray-800 font-semibold rounded-full">
                      Discover More
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Small Screen Carousel */}

      <div className="block lg:hidden md:hidden">
        <Swiper modules={[Autoplay]} loop={true} speed={1000} autoplay={{ delay: 2000 }}>
          {sm_carousel_slides.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="relative mt-20">
                <img className="object-cover" src={data.img} alt="carousel_img" />
                <div className="absolute inset-0 flex flex-col justify-center items-start pl-4">
                  <p className="text-2xl font-bold bg-gradient-to-br from-[#6a70d1] to-purple-400 bg-clip-text text-transparent">
                    Experience the  <br /> Magic of Love 
                  </p>
                  <p className="text-gray-800 py-3">
                    Explore with furry friends. <br /> At PawZee, we celebrate the <br /> joy of pets.
                  </p>
                  <Link to={'/shop/cat'}>
                    <button className="btn-sm bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white font-semibold rounded-full">
                      Discover More
                    </button>
                  </Link>
                </div>
              </div>  
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );
};

export default Carousel;
