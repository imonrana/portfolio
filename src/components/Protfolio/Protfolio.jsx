import React, { useState } from "react";
import SectionTitle from "../Ui/SectionTitle/SectionTitle";
import WebDesign from "./WebDesign";
import FrontEndDevelopment from "./FrontEndDevelopment";

const Protfolio = () => {
  const [showTab, setShowTab] = useState("all");

  function handelTabs(tab) {
    setShowTab(tab);
  }

  return (
    <section className="my-[60px] md:my-[160px]">
      <div className="p-5 lg:p-0 lg:w-container mx-auto">
        <SectionTitle subTitle="Portfolio" title="What I Do for My Clients" />
        {/* 
            ===========navs tabs start==========
             */}
        {/* navs start */}
        <div className="font-popins font-semibold text-sm md:text-xl  space-x-4  md:space-x-10 mx-auto  w-fit mt-16">
          <button
            onClick={() => handelTabs("all")}
            className={`${
              showTab === "all" ? "text-primary" : "text-secondary"
            } transition-all duration-300 cursor-pointer`}
          >
            All
          </button>
          <button
            onClick={() => handelTabs("webDesign")}
            className={`${
              showTab === "webDesign" ? "text-primary" : "text-secondary"
            } transition-all duration-300 cursor-pointer`}
          >
            Web Design
          </button>
          <button
            onClick={() => handelTabs("frontend")}
            className={`${
              showTab === "frontend" ? "text-primary text-[10px] md:text-xl" : "text-secondary  text-[10px] md:text-xl"
            } transition-all duration-300 cursor-pointer`}
          >
            Frontend Development
          </button>
        </div>
        {/* tabs start */}
        <div className="text-secondary mt-16 ">
          <div
            className={`${showTab === "all" ? "block space-y-16 " : "hidden"}`}
          >
            <FrontEndDevelopment />
            <WebDesign />
          </div>
          <div className={`${showTab === "webDesign" ? "block" : "hidden"}`}>
            <WebDesign />
          </div>
          <div className={`${showTab === "frontend" ? "block" : "hidden"}`}>
            <FrontEndDevelopment />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protfolio;
