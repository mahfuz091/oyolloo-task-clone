import React from "react";
import logo from "../../../assets/Image/logo.png";
import twitter from "../../../assets/Image/footer-Twitter.png";
import linkedin from "../../../assets/Image/footer-Linkedin.png";
import pinterest from "../../../assets/Image/footer-Pinterest.png";

const Footer = () => {
  return (
    <div className='bg-[#0F0F0F]  mt-[120px] pb-[34px]'>
      <div className='lg:max-w-[1320px] px-8 md:px-8 lg:px-8 xl:px-0 mx-auto'>
        <div className='pt-[70px] xl:flex items-center gap-[302px]'>
          <div>
            <h2 className='footer-header text-[26px] md:text-[34px] mb-[24px]'>
              Subscribe Our Newsletter
            </h2>
            <p className='footer-desctiption text-lg  lg:w-[469px]'>
              Enter your details to get business inspiration, trending
              solutions, and consulting tips delivered to your inbox
            </p>
          </div>
          <div className='relative   mt-4 md:mt-6 lg:mt-6 xl:mt-0 lg:w-[555px]'>
            <input
              type='text'
              placeholder='Enter your email'
              className=' w-full pl-[30px] py-[25px] pr-[217px]  text-lg outline-none'
            />
            <button className=' bg-[#495AF0] text-[#fff] absolute top-0 right-0 px-[32px] py-[25px] font-secondary text-xl font-semibold'>
              Subscribe
            </button>
          </div>
        </div>
        <hr className=' bg-[#1F2B2B] mt-[60px]' />
        <div className='mt-[60px] xl:flex justify-between'>
          <div className='mr-[140px]'>
            <div className='flex gap-3 items-center'>
              <img className='logo' src={logo} alt='' />
              <div>
                <h6 className='font-bold font-primary text-[#FFF] text-3xl'>
                  Creative
                </h6>
                <p className='text-sm font-secondary text-[#FFF] tracking-[1.12px]'>
                  Peoples Design
                </p>
              </div>
            </div>
            <p className='xl:w-[394px] mt-[26px] text-lg font-secondary text-[#B4B4B4]'>
              Business consultants provide management consulting to help
              businesses and organizations improve performance .
            </p>
            <div className='flex gap-[14px] mt-[40px]'>
              <a href='#'>
                <img src={twitter} alt='' />
              </a>
              <a href='#'>
                <img src={linkedin} alt='' />
              </a>
              <a href='#'>
                <img src={pinterest} alt='' />
              </a>
            </div>
          </div>
          <div className='mt-5 md:mt-8 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
            <div className='xl:mr-[134px] ml-auto w-full xl:w-[124px]'>
              <h2 className='text-[#fff] font-secondary text-2xl font-semibold mb-[30px] '>
                Company
              </h2>
              <ul className='text-[#B4B4B4] text-lg font-normal space-y-2  '>
                <li>About</li>
                <li>Contact</li>
                <li>FAQ's</li>
                <li>Services</li>
                <li>Latest Posts</li>
              </ul>
            </div>

            <div className='xl:mr-[133px] w-full xl:w-[168px]'>
              <h2 className='text-[#fff] font-secondary text-2xl font-semibold mb-[30px] '>
                Our Services
              </h2>
              <ul className='text-[#B4B4B4] text-lg font-normal space-y-2 '>
                <li>Business planning</li>
                <li>Tax strategy</li>
                <li>Financial advices</li>
                <li>Insurance strategy</li>
                <li>Manage investment</li>
              </ul>
            </div>
            <div className='mt-5 md:mt-5 lg:mt-5 xl:mt-0 w-full xl:w-[226px] xl:ml-9'>
              <h2 className='text-[#fff] font-secondary text-2xl font-semibold mb-[30px] '>
                Contact Info.
              </h2>
              <ul className='text-[#B4B4B4] text-lg font-normal space-y-2 '>
                <li>(303) 555-0105</li>
                <li>(303) 555-0105</li>
                <li>sara.cruz@example.com </li>
                <li>3517 W. Gray St. Utica, Pennsylvania 57867</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='copyright lg:p-[30px] p-[15px]'>
          <p className=''>© 2022 CreativePeoples. All Rights Reserved</p>
          <div className='flex gap-4'>
            <a className=' underline' href=''>
              Privacy Policy
            </a>
            <a href='' className='underline'>
              {" "}
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
