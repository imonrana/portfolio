import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";




const Address = () => {
  return (
    <article className="font-popins text-secondary">
      <div>
        <ul className="space-y-14">
          <li className="flex gap-x-8 md:gap-4 lg:gap-x-8 items-center">
            <div className="lg:h-16 lg:w-16 w-14 h-14 rounded-full bg-primary text-3xl lg:text-4xl flex justify-center items-center">
              <FaLocationDot />
            </div>
            <div>
              <p className="font-semibold text-2xl lg:text-[2.5rem]">Address</p>
              <p className="font-normal text-sm lg:text-lg text-[#B4AFC6]">
                Dhaka, Bangladesh
              </p>
            </div>
          </li>
          <li className="flex gap-x-8 md:gap-4 lg:gap-x-8 items-center">
            <div className="lg:h-16 lg:w-16 w-14 h-14 rounded-full bg-primary text-2xl lg:text-4xl flex justify-center items-center">
              <IoMdMail />
            </div>
            <div>
              <p className="font-semibold text-2xl lg:text-[2.5rem]">E-mail</p>
              <p className="font-normal text-sm md:text-lg text-[#B4AFC6]">
                info.imon@yahoo.com
              </p>
            </div>
          </li>
          <li className="flex gap-x-8 md:gap-4 lg:gap-x-8 items-center">
            <div className="lg:h-16 lg:w-16 w-14 h-14 rounded-full bg-primary text-2xl lg:text-4xl flex justify-center items-center">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="font-semibold text-2xl lg:text-[2.5rem]">Phone</p>
              <p className="font-normal text-sm lg:text-lg text-[#B4AFC6]">
                +8801762-561353
              </p>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};
export default Address;
