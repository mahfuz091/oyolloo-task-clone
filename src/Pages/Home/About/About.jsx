import React from "react";
import about from "../../../assets/Image/about.png";
import { FiArrowUpRight } from "react-icons/fi";
import CountUp from "react-countup";
const About = () => {
  return (
    <div className="about" id='about'>
      <div className='wrapper '>
        <div className="row">
        <div className=' about-img '>
          <div className='flex relative z-10 gap-8 mb-[35px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='84'
              height='84'
              viewBox='0 0 84 84'
              fill='none'
            >
              <circle cx='42' cy='42' r='42' fill='white' />
              <circle cx='42' cy='42' r='35' fill='#0F0F0F' />
              <path
                d='M53 40.2679C54.3333 41.0378 54.3333 42.9623 53 43.7321L38 52.3923C36.6667 53.1621 35 52.1999 35 50.6603L35 33.3397C35 31.8001 36.6667 30.8379 38 31.6077L53 40.2679Z'
                fill='white'
              />
            </svg>
            <p className='more-about'>
              More <br /> About CP.
            </p>
          </div>
          <div className="about-img-item">
            <img src={about} alt='' />
          </div>
        </div>
        <div className='about-content'>
          <h2 className='about-text flex items-center gap-2'>
            <hr className='line1' />
            About Us
          </h2>
          <h1 className='about-title'>
            We are aware for our quality to successful business
          </h1>
          <p className='about-description'>
            Learn how to start your own business consulting firm. Effective
            strategies for business consultants and things to consider before
            becoming a consultant
          </p>
          <a className='about-btn '>
            More About Us <FiArrowUpRight />
          </a>
          <div>
            <div className='flex justify-between mt-[60px]'>
              <hr className='line2' />
              <hr className='line2' />
              <hr className='line2' />
            </div>
            <div className='md:flex text-center md:text-left justify-between'>
              <div>
                <div className='count'>
                  <CountUp separator='' end={2760} />
                  <span>+</span>
                </div>
                <p className='count-subtitle'>Total Customer</p>
              </div>
              <div>
                <div className='count'>
                  <CountUp separator='' end={25} />
                  <span>+</span>
                </div>
                <p className='count-subtitle'>Years Experience</p>
              </div>
              <div>
                <div className='count'>
                  <CountUp separator='' end={328} />
                  <span>+</span>
                </div>
                <p className='count-subtitle'>Team Members</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
