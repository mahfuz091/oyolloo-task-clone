import React from "react";
import CountUp from "react-countup";
import icon1 from "../../../assets/Image/Icon-1.png";
import icon2 from "../../../assets/Image/Icon-2.png";
import icon3 from "../../../assets/Image/Icon-3.png";
import icon4 from "../../../assets/Image/Icon-4.png";

const Services = () => {
  return (
    <div className='service-one md:pt-[120px] ' id='services' >
      <div className="wrapper">

      <div className='row'>
        <div className='service-content lg:pt-[90px]'>
          <h2 className='feature-text flex items-center gap-2'>
            <hr className='line1' />
            Our Services
          </h2>
          <h1 className='service-title md:text-[54px]'>Providing all Console Solution</h1>
          <p className='service-description md:text-[20px]'>
            Business consultants provide management consulting to help
            businesses organizations improve performance and efficienc
          </p>

          <div className='flex items-center mt-[15px] md:mt-[70px]'>
            <div>
              <h5 className='font-primary text-[50px] font-bold text-[#FD9C06]'>
                <CountUp separator='' end={95} /> %
              </h5>
              <p className='font-primary text-lg font-bold mr-[41px]'>
                Satisfaction rate
              </p>
            </div>
            <div className='line02'></div>
            <div>
              <h5 className='font-primary text-[50px] font-bold text-[#FD9C06]'>
                <CountUp separator='' end={25} />M
              </h5>
              <p className='font-primary text-lg font-bold'>Registered users</p>
            </div>
          </div>
        </div>
        <div className='service-cards lg:pl-[74px] lg:mt-0 relative '>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-[30px] '>
            <div className='service-card relative'>
              <img className='w-[73px] h-[71px]' src={icon1} alt='' />
              <h3 className='service-card-title'>Business Analysis</h3>
              <p className='service-card-description'>
                Business analysis is a professional discipline of identifying
                business needs determining
              </p>
              <a className='service-btn' href=''>
                Read More{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M18 12H6M13 7L18 12L13 7ZM18 12L13 17L18 12Z'
                    stroke='#495AF0'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </a>
              <div className='shadow absolute -bottom-[18px] -z-10'></div>
            </div>
            <div className='service-card relative'>
              <img className='w-[73px] h-[71px]' src={icon1} alt='' />
              <h3 className='service-card-title'>Business Analysis</h3>
              <p className='service-card-description'>
                Business analysis is a professional discipline of identifying
                business needs determining
              </p>
              <a className='service-btn' href=''>
                Read More{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M18 12H6M13 7L18 12L13 7ZM18 12L13 17L18 12Z'
                    stroke='#495AF0'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </a>
            </div>
            <div className='service-card relative'>
              <img className='w-[73px] h-[71px]' src={icon1} alt='' />
              <h3 className='service-card-title'>Business Analysis</h3>
              <p className='service-card-description'>
                Business analysis is a professional discipline of identifying
                business needs determining
              </p>
              <a className='service-btn' href=''>
                Read More{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M18 12H6M13 7L18 12L13 7ZM18 12L13 17L18 12Z'
                    stroke='#495AF0'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </a>
            </div>
            <div className='service-card relative'>
              <img className='w-[73px] h-[71px]' src={icon1} alt='' />
              <h3 className='service-card-title'>Business Analysis</h3>
              <p className='service-card-description'>
                Business analysis is a professional discipline of identifying
                business needs determining
              </p>
              <a className='service-btn' href=''>
                Read More{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M18 12H6M13 7L18 12L13 7ZM18 12L13 17L18 12Z'
                    stroke='#495AF0'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Services;
