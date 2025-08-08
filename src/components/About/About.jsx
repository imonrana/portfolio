import React from "react";
import SectionTitle from "../Ui/SectionTitle/SectionTitle";
import Button from "../Ui/Button/Button";

import aboutModle from "../../assets/about_img_imon.png";
import aboutImglaptop from "../../assets/about_img_two.png";


import { SlBadge } from "react-icons/sl";
const About = () => {
  return (
    <section className=" px-5 mt-[60px] lg:mt-[100px]">
      <div className=" lg:px-10 xl:w-container mx-auto">
        <SectionTitle
          subTitle="About Me"
          title="A Passionate Developer Who 
        Loves to Code"
        />
        <div className="flex flex-col md:flex-row justify-end  md:gap-x-5 lg:gap-x-14 mt-[50px] md:mt-[74px]">
          <div className="relative">
          <figure className="relative">
            <img src={aboutModle} alt="aboutModle" />
            <img className="absolute bottom-0 lg:top-[310px] lg:left-[-110px] w-[100px]"
            src={aboutImglaptop} alt="aboutImglaptop" />
          </figure>
          <div className="hidden lg:block absolute top-[68px] left-[-120px] h-[110px] w-[110px] bg-primary rounded-xl text-7xl ">
            <SlBadge className="text-white m-auto mt-3" />
          </div>
             {/* succes year */}
             <div className="absolute bottom-0 md:bottom-[200px] lg:bottom-[100px] right-2 lg:right-7 text-secondary font-popins font-semibold  flex gap-x-3 items-center">
                <h6 className="text-3xl relative after:absolute after:contents-[''] after:h-[100%] after:w-2 after:bg-primary after:top-0 after:-left-3 ">2+ </h6>
                <p className="mt-5 text-base"> Successful <span className="block"> Year </span></p>
             </div>
          </div>


          {/* About info */}
          <div className="md:w-[535px] lg:w-[400px]  xl:w-[535px] font-popins mt-10 md:mt-0 ">
            <h6 className="font-semibold text-2xl lg:text-3xl text-secondary text-center md:text-left">
              About me
            </h6>
            <p className="font-normal text-base text-info text-justify mx-auto lg:mx-0  xl:m-auto my-5 xl:my-5 lg:w-[420px] xl:w-auto">
              As a web developer, my objective is to make a positive impact on
              clients, co-workers, and the Internet using my skills and
              experience to design compelling and attractive websites.
            </p>

            <table className="m-auto lg:m-0 xl:m-auto">
                <tbody>
                    <tr className="font-popins text-secondary text-sm md:text-lg font-semibold">
                     <td className="border border-[#B4AFC6] ">
                        <ul className="p-2 md:p-3 space-y-3 w-[130px] md:w-auto lg:w-[220px] xl:w-auto">
                        <li>
                            <p>Name</p>
                            <p className="font-normal  text-sm md:text-base text-info"> Md. Imon Rana</p>
                        </li>
                        <li>
                            <p>E-mail</p>
                            <a href="mailto:info.imon@yahoo.com" className="font-normal text-sm  md:text-base  text-info"> info.imon@ yahoo.com</a>
                        </li>
                        <li>
                            <p>Phone</p>
                            <a href="tel:01762561353" className="font-normal text-sm md:text-base text-info"> +8801762-561353</a>
                        </li>
                    </ul>
                        </td>

                        <td className="border border-[#B4AFC6] ">
                        <ul className="p-2 md:p-5 space-y-3 w-[130px] md:w-auto lg:w-[220px] xl:w-auto">
                        <li>
                            <span>Address</span>
                            <p className="font-normal  text-sm md:text-base text-info"> Dhaka, Bangladesh</p>
                        </li>
                        <li>
                            <span>Degree</span>
                            <p className="font-normal text-sm  md:text-base  text-info"> Diploma in Computer Engineering.</p>
                        </li>
                        <li>
                            <span>Freelance</span>
                            <p className="font-normal text-sm  md:text-base text-info"> Available</p>
                        </li>
                    </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button className="mt-10 cursor-pointer block m-auto md:ml-0">Download  CV</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
