import React from "react";

import Banner from "../../Banner/Banner";
import Partners from "../../Partners/Partners";
import About from "../About/About";
import Features from "../Features/Features";
import Services from "../Services/Services";
import Team from "../../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Partners></Partners>
      <About></About>
      <Features></Features>
      <Services></Services>
      <Team></Team>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
