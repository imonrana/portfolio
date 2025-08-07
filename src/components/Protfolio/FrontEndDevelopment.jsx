import React from "react";
import ProjectCard from "./ProjectCard";

import todoList from "../../assets/frontendTodoList.png";
import numberGuessing from "../../assets/frontendNumberGuessingGame.png";
import passwordGenerator from "../../assets/passwordGenerator.png";
import petroll from "../../assets/petrolReact.png";
import quiarbox from "../../assets/quiarbox.png";
import chatApp from "../../assets/chatApp.png";

const cardData = [
  {
    img: chatApp,
    alt: "chatApp",
    title: "Chatting Application",
    icons: ["React", "tailwind", "firebase", "javaScript"],
    repoLink: "https://github.com/imonrana/chatting-application",
    liveLink: "https://chatting-application-silk.vercel.app/login",
    imgh: "h-full",
  },
  {
    img: petroll,
    alt: "petroll",
    title: "Petroil-Oil & Gas",
    icons: ["React", "tailwind", "javaScript"],
    repoLink: "https://github.com/imonrana/Random-Password-generator",
    liveLink: "https://imonrana.github.io/Random-Password-generator/",
    scrollY: "hover:-translate-y-[70%]",
  },

  {
    img: quiarbox,
    alt: "quiarbox",
    title: "Quiar-box",
    icons: ["React", "tailwind", "javaScript"],
    repoLink: "https://github.com/imonrana/quiar-box-courier-service",
    liveLink: "https://quiar-box-courier-service.vercel.app/",
    scrollY: "hover:-translate-y-[75%]",
  },

  {
    img: todoList,
    alt: "todoList",
    title: "To-Do List",
    icons: ["html", "css", "javaScript"],
    repoLink: "https://github.com/imonrana/to-do-list",
    liveLink: "https://imonrana.github.io/to-do-list/",
    scale: "1.1",
  },
  {
    img: numberGuessing,
    alt: "numberGuessing",
    title: "Number Guessing Game",
    icons: ["html", "css", "javaScript"],
    repoLink: "https://github.com/imonrana/number-guessing-game",
    liveLink: "https://imonrana.github.io/number-guessing-game/",
  },
  {
    img: passwordGenerator,
    alt: "passwordGenerator",
    title: "Password Generator",
    icons: ["html", "css", "javaScript"],
    repoLink: "https://github.com/imonrana/Random-Password-generator",
    liveLink: "https://imonrana.github.io/Random-Password-generator/",
  },
];

const FrontEndDevelopment = () => {
  return (
    <div className="flex justify-between flex-wrap gap-y-14">
      {cardData.map((card, index) => (
        <div key={index} className="mx-auto md:m-0">
          <ProjectCard
            img={card.img}
            alt={card.alt}
            title={card.title}
            icons={card.icons}
            repoLink={card.repoLink}
            liveLink={card.liveLink}
            scrollY={card.scrollY}
            imgh={card.imgh}
          />
        </div>
      ))}
    </div>
  );
};

export default FrontEndDevelopment;
