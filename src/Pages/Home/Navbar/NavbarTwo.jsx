import React from "react";
import logo from "../../../assets/Image/logo.png";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const NavbarTwo = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FD9C06] active-border" : ""
          }
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FD9C06] active-border" : ""
          }
          to='about'
          smooth
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FD9C06] active-border" : ""
          }
          to='services'
          smooth
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FD9C06] active-border" : ""
          }
          to='pricing'
          smooth
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FD9C06] active-border" : ""
          }
          to='blog'
          smooth
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FD9C06] active-border" : ""
          }
          to='contact'
          smooth
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FD9C06] active-border" : ""
          }
          to='todos'
          smooth
        >
          Todos
        </NavLink>
      </li>
    </>
  );
  return (
    <div className='navbar wrapper pt-[26px] pb-[25.2px] bg-[#FFFFFF]'>
      <div className='navbar-start flex  justify-between pl-[20px]'>

        <div className='flex gap-3 items-center'>
          <img className='logo' src={logo} alt='' />
          <div>
            <h6 className='font-bold font-primary text-[#404040] text-3xl'>
              Creative
            </h6>
            <p className='text-sm font-secondary text-[#404040] tracking-[1.12px]'>
              Peoples Design
            </p>
          </div>
        </div>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100  rounded-box w-48'
          >
            {navOptions}
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
      </div>
      <div className='navbar-end'>
        <button className='nav-btn'>
          Free Consultation <FiArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default NavbarTwo;
