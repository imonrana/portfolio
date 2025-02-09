import React from "react";
import SectionTitle from "../Ui/SectionTitle/SectionTitle";
import Button from "../Ui/Button/Button";

import aboutModle from "../../assets/about_img_imon.png";
import aboutImglaptop from "../../assets/about_img_two.png";


import { SlBadge } from "react-icons/sl";
const About = () => {
  return (
    <section>
      <div className="w-container mx-auto">
        <SectionTitle
          subTitle="About Me"
          title="A Passionate Developer Who 
        Loves to Code"
        />
        <div className="flex justify-end gap-x-14 mt-[74px]">
          <div className="relative">
          <figure className="relative">
            <img src={aboutModle} alt="aboutModle" />
            <img className="absolute top-[310px] left-[-141px]"
            src={aboutImglaptop} alt="aboutImglaptop" />
          </figure>
          <div className="absolute top-[68px] left-[-120px] h-[110px] w-[110px] bg-primary rounded-xl text-7xl "><SlBadge className="text-white m-auto mt-3" /></div>
             {/* succes year */}
             <div className="absolute bottom-6 right-7 text-secondary font-popins font-semibold  flex gap-x-3 items-center">
                <h6 className="text-3xl relative after:absolute after:contents-[''] after:h-[100%] after:w-2 after:bg-primary after:top-0 after:-left-3 ">2+ </h6>
                <p className="mt-5 text-base"> Successful <span className="block"> Year </span></p>
             </div>
          </div>


          {/* About info */}
          <div className="w-[535px] font-popins ">
            <h6 className="font-semibold text-3xl text-secondary">
              About me
            </h6>
            <p className="font-normal text-base text-[#B4AFC6] w-[432px] text-justify mt-5 mb-10">
              As a web developer, my objective is to make a positive impact on
              clients, co-workers, and the Internet using my skills and
              experience to design compelling and attractive websites.
            </p>

            <table>
                <tbody>
                    <tr className="font-popins text-secondary text-lg font-semibold">
                     <td className="border border-[#B4AFC6]">
                        <ul className="p-3 space-y-3">
                        <li>
                            <span>Name</span>
                            <p className="font-normal text-base text-[#B4AFC6]"> Md. Imon Rana</p>
                        </li>
                        <li>
                            <span>E-mail</span>
                            <p className="font-normal text-base text-[#B4AFC6]"> info.imon@yahoo.com</p>
                        </li>
                        <li>
                            <span>Phone</span>
                            <p className="font-normal text-base text-[#B4AFC6]"> +8801762-561353</p>
                        </li>
                    </ul>
                        </td>

                        <td className="border border-[#B4AFC6]">
                        <ul className="p-5 space-y-3">
                        <li>
                            <span>Address</span>
                            <p className="font-normal text-base text-[#B4AFC6]"> Dhaka, Bangladesh</p>
                        </li>
                        <li>
                            <span>Degree</span>
                            <p className="font-normal text-base  text-[#B4AFC6]"> Diploma in Computer Engineering.</p>
                        </li>
                        <li>
                            <span>Freelance</span>
                            <p className="font-normal text-base text-[#B4AFC6]"> Available</p>
                        </li>
                    </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button className="mt-10 cursor-pointer">Download  CV</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
