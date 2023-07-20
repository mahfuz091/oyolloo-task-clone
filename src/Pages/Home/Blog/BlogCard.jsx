import React from "react";

import moment from "moment";

const BlogCard = ({ blog }) => {
  return (
    <div>
      <div className=' relative'>
        <img className='blog-image' src={blog.image} alt='' />
        <p className='blog-date absolute top-[18px] left-[17.99px] '>
          {moment(blog.date).format("DD MMM YYYY")}
        </p>
      </div>
      <div className='flex gap-[166.66px] items-center mt-[28px]'>
        <p className='blog-status'>{blog.status}</p>
        <div className='flex justify-between gap-[40px] items-center'>
          <div className='flex items-center gap-[8.99px] '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='23'
              viewBox='0 0 24 23'
              fill='none'
            >
              <path
                d='M19.598 2.24512H4.60876C3.57544 2.24512 2.73511 3.08526 2.73511 4.11835V15.3577C2.73511 16.3908 3.57544 17.2309 4.60876 17.2309H7.41924V20.7592L13.2997 17.2309H19.598C20.6313 17.2309 21.4716 16.3908 21.4716 15.3577V4.11835C21.4716 3.08526 20.6313 2.24512 19.598 2.24512ZM19.598 15.3577H12.7807L9.2929 17.4492V15.3577H4.60876V4.11835H19.598V15.3577Z'
                fill='#858585'
              />
            </svg>
            <p>{blog.message}</p>
          </div>
          <div className='flex gap-[11.24px] items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='23'
              height='23'
              viewBox='0 0 23 23'
              fill='none'
            >
              <path
                d='M20.9794 11.0448C18.8979 6.661 15.7515 4.45483 11.5336 4.45483C7.31346 4.45483 4.16924 6.661 2.08773 11.047C2.00424 11.2237 1.96094 11.4168 1.96094 11.6122C1.96094 11.8077 2.00424 12.0008 2.08773 12.1775C4.16924 16.5613 7.31566 18.7675 11.5336 18.7675C15.7537 18.7675 18.8979 16.5613 20.9794 12.1753C21.1485 11.8197 21.1485 11.407 20.9794 11.0448ZM11.5336 17.1869C7.99193 17.1869 5.39882 15.3913 3.56982 11.6112C5.39882 7.83104 7.99193 6.03537 11.5336 6.03537C15.0752 6.03537 17.6683 7.83104 19.4973 11.6112C17.6705 15.3913 15.0774 17.1869 11.5336 17.1869ZM11.4457 7.74762C9.31154 7.74762 7.58134 9.47743 7.58134 11.6112C7.58134 13.7449 9.31154 15.4747 11.4457 15.4747C13.58 15.4747 15.3102 13.7449 15.3102 11.6112C15.3102 9.47743 13.58 7.74762 11.4457 7.74762ZM11.4457 14.0698C10.0866 14.0698 8.98658 12.97 8.98658 11.6112C8.98658 10.2523 10.0866 9.15254 11.4457 9.15254C12.8049 9.15254 13.9049 10.2523 13.9049 11.6112C13.9049 12.97 12.8049 14.0698 11.4457 14.0698Z'
                fill='#858585'
              />
            </svg>
            <p>{blog.watch}</p>
          </div>
        </div>
      </div>
      <hr className='line3' />
      <h1 className='blog-subtitle'>{blog.title}</h1>
      <p className='blog-details'>{blog.details}</p>
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
  );
};

export default BlogCard;
