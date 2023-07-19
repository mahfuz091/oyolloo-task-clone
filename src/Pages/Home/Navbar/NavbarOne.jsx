import React from "react";
import { FaTwitter, FaLinkedin, FaGoogle, FaPinterest } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const NavbarOne = () => {
  return (
    <div className='navbar-one  flex justify-between'>
      <div className='flex gap-5'>
        <FaTwitter className='icon' />
        <FaLinkedin className='icon' />
        <FaGoogle className='icon' />
        <FaPinterest className='icon' />
      </div>
      <div className='flex gap-5'>
        <div className='flex items-center gap-3'>
          <CiMail className='icon' />
          <p className='text-base'>info.pix@gmail.com</p>
        </div>
        <div className='flex items-center gap-3'>
          <FiPhoneCall className='icon' />
          <p className='text-base'>(209) 555-0104</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarOne;
