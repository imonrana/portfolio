import React from "react";
import Tilt from "react-parallax-tilt"
// icons
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { FaToolbox } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const WorkSheet = () => {
  return (
    <section className="mt-[120px] mb-[154px]">
      <div className="w-container mx-auto">
        {/* card items  */}
        <div className="flex justify-between items-stretch">
          {/* card one */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <div className="bg-[#3A2B71] w-[337px] rounded-[30px]  py-[42px] px-7 h-full">
            <div>
              <HiOutlineCog6Tooth className="text-[5.5625rem] text-primary" />
            </div>
            <h6 className="font-popins font-semibold text-[1.3125rem] text-[#FFFFFF] mt-[46px]">
              Deeper Skill set
            </h6>
            <ul className="font-popins font-normal text-base text-[#B4AFC6] mt-4 space-y-4">
              <li className="flex items-center gap-x-1.5">
                {" "}
                <span>
                  <FaCheck />
                </span>
                Frontend Web Development
              </li>
              <li className="flex items-center gap-x-1.5 ">
                {" "}
                <span>
                  <FaCheck />
                </span>
                React App Development
              </li>
              <li className="flex items-center gap-x-1.5 ">
                {" "}
                <span>
                  <FaCheck />
                </span>
                Responsive Web Design
              </li>
              <li className="flex items-center gap-x-1.5 ">
                {" "}
                <span>
                  <FaCheck />
                </span>
                Firebase Intregation
              </li>
              <li className="flex items-center gap-x-1.5 ">
                {" "}
                <span>
                  <FaCheck />
                </span>
                Git & Github
              </li>
            </ul>
          </div>
          </Tilt>

          {/* card two */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <div className="bg-[#3A2B71] w-[337px] rounded-[30px]  py-[42px] px-7 h-full">
            <div>
              <FaToolbox className="text-[5.5625rem] text-primary" />
            </div>
            <h6 className="font-popins font-semibold text-[1.3125rem] text-[#FFFFFF] mt-[46px]">
              Creative Work
            </h6>
            <p className="font-popins font-normal text-base text-[#B4AFC6] mt-[16px] text-justify">
              create dynamic web pages with HTML, CSS, Bootstrapt, Tailwind
              csss, JavaScript, React.js, Firebase, and React.js echo system
              apply essential programming concepts an appropriate web hosting
              service, and publish your webpages.
            </p>
          </div>
          </Tilt>

          {/* card three */}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div className="bg-[#3A2B71] w-[337px] rounded-[30px]  py-[42px] px-7 h-full">
            <div>
              <IoDiamondOutline className="text-[5.5625rem] text-primary" />
            </div>
            <h6 className="font-popins font-semibold text-[1.3125rem] text-[#FFFFFF] mt-[46px]">
              Strong Dedication
            </h6>
            <p className="font-popins font-normal text-base text-[#B4AFC6] mt-[16px] text-justify">
              Having a positive attitude can help you build a more uplifting
              work environment. Dedicated employees are excited to start the
              workday, seeing all the potential possibilities of their hard
              work.
            </p>
          </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default WorkSheet;
