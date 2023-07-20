import React, { useState } from "react";
import feature from "../../../assets/Image/feature.png";

const Features = () => {
  return (
    <div className='mt-[140px] pl-[299px] pr-[250px] flex gap-[83px]'>
      <div>
        <h2 className='feature-text flex items-center gap-2'>
          <hr className='line1' />
          features
        </h2>
        <h1 className='feature-title'>
          Solve your business problems with our experts
        </h1>
      </div>
      <div>
        <p className='feature-description mb-[38px]'>
          Business consultants provide management consulting to help businesses
          and organizations improve performance and efficienc
        </p>
        <div className='relative'>
          <img className='' src={feature} alt='' />
          <div className='project-success'></div>
          <div className='element absolute -bottom-[47px] -right-[50px] -z-10'></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
