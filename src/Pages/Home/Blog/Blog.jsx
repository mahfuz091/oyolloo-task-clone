import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);
  return (
    <div className='wrapper' id='blog'>
      <h2 className='blog-title text-[35px] md:text-[54px] mt-16 xl:mt-[130px]'>Regular Get Update </h2>
      <div className='mt-[60px] px-5 md:px-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[30px]'>
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
