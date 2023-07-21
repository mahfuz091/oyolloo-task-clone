import React from 'react';
import { Collapse } from 'react-collapse';

const AccordionItem = ({ open, toggle, title, desc }) => {



    return (
        <div className="pt-[10px] w-full lg:max-w-[579px]">

            <div className={open ? "collaps-title-open" : "collaps-title"} onClick={toggle} >

                <p >{title}</p>
                <div className=" mr-[20px]" >
                    {open ? <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <path d="M22.6274 23L16.9706 28.6569M16.9706 17.3431L22.6274 23L16.9706 17.3431ZM22.6274 23L28.2843 28.6569L22.6274 23ZM22.6274 23L28.2843 17.3431L22.6274 23Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 16H8M16 8V16V8ZM16 16V24V16ZM16 16H24H16Z" stroke="#AFB1C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>}
                </div>
            </div>

            <Collapse isOpened={open}>


                <div className="collaps-desc px-[30px] pt-[16px] pb-[30px]">{desc}</div>
            </Collapse>
        </div >
    );
};

export default AccordionItem;