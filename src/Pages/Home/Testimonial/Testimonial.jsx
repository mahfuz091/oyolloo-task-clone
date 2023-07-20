import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import testimonial from "../../../assets/Image/testimonial.png";
import play from "../../../assets/Image/Play Icon.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className='testimonial'>
      <div className='wraper'>
        <div className='pt-[100px] flex items-center justify-between mb-[60px]'>
          <h3 className='testimonial-title'>
            Our Client Says Their Satisfaction
          </h3>
          <a className='discover-btn '>
            Discover More <FiArrowUpRight />
          </a>
        </div>
        <div className='grid grid-cols-2  testimonial-content'>
          <div className='relative'>
            <img src={testimonial} alt='' />
            <img
              className='absolute bottom-[225px] left-[226px]  w-[88px]'
              src={play}
              alt=''
            />
          </div>
          <div>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className='mySwiper'
            >
              {reviews.map((review) => (
                <SwiperSlide key={review._id}>
                  <div className='relative'>
                    <div className='absolute right-[46px] top-[30px]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='96'
                        height='96'
                        viewBox='0 0 96 96'
                        fill='none'
                        className='ml-[]'
                      >
                        <path
                          d='M76.2075 38.277C78.1778 33.3053 81.292 28.3834 85.4624 23.6461C86.7896 22.1388 86.958 19.9869 85.8814 18.2921C85.0523 16.9884 83.6577 16.2457 82.1812 16.2457C81.7652 16.2457 81.3418 16.3043 80.9243 16.4259C72.0854 19.0084 51.4678 28.1813 50.9141 57.5016C50.7002 68.8234 58.9809 78.5499 69.7637 79.6456C75.7066 80.2404 81.6524 78.3097 86.0586 74.3268C90.4707 70.3395 93.002 64.6471 93.002 58.7072C93.002 48.7975 85.9678 40.1315 76.2075 38.277ZM82.0361 69.8751C79.2339 72.4079 75.7066 73.757 71.9668 73.757C71.438 73.757 70.9048 73.7306 70.3701 73.675C62.6694 72.8942 56.7588 65.8395 56.9141 57.6159C57.2964 37.3278 68.2812 28.1945 77.3779 24.109C74.4995 28.0026 72.2378 32.0075 70.6294 36.0665C70.0025 37.6471 70.1064 39.4137 70.9136 40.9137C71.7588 42.4869 73.2661 43.6031 75.0459 43.9767C81.9746 45.4254 87.002 51.6217 87.002 58.7072C87.002 62.9523 85.1914 67.0231 82.0361 69.8751Z'
                          fill='#F5F5F5'
                        />
                        <path
                          d='M37.97 18.292C37.1409 16.9883 35.7464 16.2456 34.2698 16.2456C33.8538 16.2456 33.4319 16.3042 33.013 16.4258C24.1741 19.0083 3.55788 28.1812 3.00417 57.5015V57.503C2.79324 68.8247 11.0725 78.5498 21.8567 79.6455C27.8069 80.2505 33.7424 78.3111 38.1487 74.3267C42.5608 70.3394 45.092 64.647 45.092 58.7071C45.092 48.7974 38.0578 40.1314 28.2991 38.2769C30.2708 33.3008 33.385 28.3789 37.5539 23.6446C38.8811 22.1358 39.0482 19.9854 37.97 18.292ZM22.721 36.0635C22.0941 37.6441 22.1966 39.4107 23.0023 40.9107C23.8489 42.4854 25.3548 43.6016 27.1361 43.9766C34.0648 45.4253 39.0921 51.6216 39.0921 58.7071C39.0921 62.9537 37.2815 67.023 34.1263 69.875C31.3255 72.4078 27.7982 73.7569 24.0569 73.7569C23.5296 73.7569 22.9964 73.7305 22.4602 73.6749C14.761 72.8941 8.84892 65.8394 9.0042 57.6158C9.38505 37.3262 20.3714 28.1944 29.4681 24.1089C26.5911 27.9995 24.3323 32.0044 22.721 36.0635Z'
                          fill='#F5F5F5'
                        />
                      </svg>
                    </div>
                  </div>
                  <p className=' review'>{review.details}</p>
                  <div className='mt-[63px] flex gap-[19px] items-center mb-[40px]'>
                    <img className='w-[74px]' src={review.image} alt='' />
                    <div>
                      <h3 className='reviewer-name'>{review.name}</h3>
                      <p className='reviewer-status'>{review.status}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
