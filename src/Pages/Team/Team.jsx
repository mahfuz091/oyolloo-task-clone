import React from "react";
// import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";

import twitter from "../../assets/Image/Twitter.png";
import linkedin from "../../assets/Image/Linkedin.png";
import pinterest from "../../assets/Image/Pinterest.png";

// Import Swiper styles
import "swiper/css";

const Team = () => {
  return (
    <div className='mt-[90px] md:mt-[210px] mb-[130px] '>
      <h3 className='team-heading'>Our Team</h3>
      <h2 className='team-subheading text-[35px] md:text-[50px] mb-[50px]'>
        Meet with Expert
      </h2>
      <div className=''>
        <Swiper
          slidesPerView={1}
          loop='true'
          breakpoints={{
            // when window width is >= 640px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3.95,
            },
          }}
          spaceBetween={30}
          className=' mySwiper '
        >
          <SwiperSlide>
            <div className='image image1 relative '>
              <div className='expart-des  absolute bottom-0 -left-[1px]'>
                <div className='flex flex-wrap items-center p-[30px] gap-[20px]'>
                  <div>
                    <h2 className='expart-name'>Jenny Wilson</h2>
                    <p className='expart-address'>St. Celina, Delaware</p>
                  </div>
                  <div className='flex gap-[14px]'>
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={twitter}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={linkedin}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={pinterest}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image image2 relative'>
              <div className='expart-des absolute bottom-0'>
                <div className='flex flex-wrap items-center p-[30px] gap-[20px]'>
                  <div>
                    <h2 className='expart-name'>Jenny Wilson</h2>
                    <p className='expart-address'>St. Celina, Delaware</p>
                  </div>
                  <div className='flex gap-[14px]'>
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={twitter}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={linkedin}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={pinterest}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image image3 relative'>
              <div className='expart-des absolute bottom-0 '>
                <div className='flex flex-wrap items-center p-[30px] gap-[20px]'>
                  <div>
                    <h2 className='expart-name'>Jenny Wilson</h2>
                    <p className='expart-address'>St. Celina, Delaware</p>
                  </div>
                  <div className='flex gap-[14px]'>
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={twitter}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={linkedin}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={pinterest}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image image4 relative '>
              <div className='expart-des absolute bottom-0'>
                <div className='flex flex-wrap items-center p-[30px] gap-[20px]'>
                  <div>
                    <h2 className='expart-name'>Jenny Wilson</h2>
                    <p className='expart-address'>St. Celina, Delaware</p>
                  </div>
                  <div className='flex gap-[14px]'>
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={twitter}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={linkedin}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={pinterest}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image image5 relative '>
              <div className='expart-des absolute bottom-0 '>
                <div className='flex  p-[30px] gap-[87px]'>
                  <div>
                    <h2 className='expart-name'>Jenny Wilson</h2>
                    <p className='expart-address'>St. Celina, Delaware</p>
                  </div>
                  <div className='flex gap-[14px]'>
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={twitter}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={linkedin}
                      alt=''
                    />
                    <img
                      className='w-[41.99px] h-[41.99px]'
                      src={pinterest}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
