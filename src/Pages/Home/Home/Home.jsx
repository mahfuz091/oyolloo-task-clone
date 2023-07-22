import React from "react";

import Partners from "../../Partners/Partners";
import About from "../About/About";
import Features from "../Features/Features";
import Services from "../Services/Services";
import Team from "../../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import Blog from "../Blog/Blog";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Partners />
      <About />
      <Features />
      <Services />
      <Team />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default Home;
