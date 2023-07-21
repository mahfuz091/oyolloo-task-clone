import { useState } from "react";
import feature from "../../../assets/Image/feature.png";
import group from "../../../assets/Image/Group 42.png";
import AccordionItem from "./AccordionItem";

const Features = () => {
  const [open, setOpen] = useState(false)

  const toggle = (index) => {
    if (open === index) {
      return (
        setOpen(null)


      )

    }
    setOpen(index)
  }
  const accordionData = [
    {
      id: "1",
      title: "Investing in Digital Company",
      desc: "Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies."

    },
    {
      id: "2",
      title: "Building the  idea of future",
      desc: "Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies."

    },
    {
      id: "3",
      title: "Accurate and friendly support",
      desc: "Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies."

    }
  ]
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
        <div className='mt-[40px]'>
          {accordionData.map((data, index) => (<AccordionItem
            key={data.id} index={index} open={index === open} title={data.title} desc={data.desc} toggle={() => toggle(index)} ></AccordionItem>))}
        </div>
      </div>
      <div>
        <p className='feature-description mb-[38px]'>
          Business consultants provide management consulting to help businesses
          and organizations improve performance and efficienc
        </p>
        <div className='relative'>
          <img className='' src={feature} alt='' />
          <div className='project-success absolute -left-[42px] -bottom-[33px]'>
            <h1 className='feature-card-title'>Our Project Success</h1>
            <p className='feature-card-description'>
              Work with CP consultants to plan for the future of your business
            </p>
            <a className='feature-card-button' href=''>
              Free Consultation
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
              >
                <g opacity='0.9'>
                  <path
                    d='M1.875 6H10.125'
                    stroke='#FD9C06'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M6.75 2.625L10.125 6L6.75 9.375'
                    stroke='#FD9C06'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
              </svg>
            </a>
            <img className='group ml-[89px]' src={group} alt='' />
          </div>
          <div className='element absolute -right-[50px] -bottom-[47px] -z-10'></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
