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
    <div className='wraper' id='blog'>
      <h2 className='blog-title '>Regular Get Update </h2>
      <div className='mt-[60px] ml-[75px] md:ml-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
