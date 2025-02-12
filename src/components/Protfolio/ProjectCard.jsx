import React from "react";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
const ProjectCard = (props) => {
  const { img, alt, title, icons, repoLink, liveLink, scrollY, imgh } = props;

  const getIcons = (icons) => {
    switch (icons) {
      case "html":
        return (
          <FaHtml5
            title="Html"
            className="cursor-pointer hover:text-secondary  transition-all duration-300"
          />
        );
      case "css":
        return (
          <IoLogoCss3
            title="Css"
            className="cursor-pointer  hover:text-secondary transition-all duration-300"
          />
        );
      case "bootstrapt":
        return (
          <FaBootstrap
            title="Bootstrapt"
            className="cursor-pointer  hover:text-secondary transition-all duration-300"
          />
        );
      case "tailwind":
        return (
          <RiTailwindCssFill
            title="Tailwind"
            className="cursor-pointer  hover:text-secondary transition-all duration-300"
          />
        );
      case "sass":
        return (
          <IoLogoSass
            title="Sass"
            className="cursor-pointer  hover:text-secondary transition-all duration-300"
          />
        );
      case "javaScript":
        return (
          <IoLogoJavascript
            title="JavaScript"
            className="cursor-pointer  hover:text-secondary transition-all duration-300"
          />
        );

      case "React":
        return (
          <FaReact
            title="React"
            className="cursor-pointer  hover:text-secondary transition-all duration-300"
          />
        );

      case "firebase":
        return (
          <IoLogoFirebase
            title="Firebase"
            className="cursor-pointer  hover:text-secondary transition-all duration-300"
          />
        );

      default:
        return null;
    }
  };


  return (
    <div className="rounded-lg  bg-[#3A2B71] w-fit   ">
      <figure className="w-[340px] h-[340px] overflow-hidden  relative rounded-lg cursor-pointer ">
        <img
          className={`absolute top-0 left-0  transition-all duration-[6s] object-contain  ${scrollY} ${imgh} `}
          src={img}
          alt={alt}
        />
      </figure>
      <figcaption className="font-popins text-secondary px-5 py-4 space-y-5">
        <p className="text-xl font-semibold">{title}</p>
        <div className="flex justify-between text-3xl text-info">
          <div className=" flex gap-x-2 cursor-pointer   transition-all duration-300 ">
            {icons.map((icon, index) => (
              <span key={index}>{getIcons(icon)}</span>
            ))}
          </div>
          <div className="flex gap-x-4">
            <a
              href={liveLink}
              target="_blank"
              title="Live view"
              className="hover:text-secondary transition-all duration-300"
            >
              <FaEye />
            </a>
            <a
              href={repoLink}
              target="_blank"
              title="GitHub Repo"
              className=" hover:text-secondary  transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </figcaption>
    </div>
  );
};

export default ProjectCard;
