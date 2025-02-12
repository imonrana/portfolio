import React from "react";
import ProjectCard from "./ProjectCard";

import webDesignProjectOne from "../../assets/webDesignProjectOne.png";
import leaglSolution from "../../assets/legalSolution.png";
import applandingProject from "../../assets/webDesignApplanding.png";
import batlesProject from "../../assets/WebDesignbatlesProject.png";
import gamerProject from "../../assets/webDesigngamer.png";
import teaHoseProject from "../../assets/webDesignTeaHouse.png";
import fruitBrustProject from "../../assets/webDesignFruitBrust.png";
import inovateProject from "../../assets/webDesignInovate.png";
import finsweetStellarProject from "../../assets/webDesignFinsweetStellar.png";
import finsweetProject from "../../assets/webDesignFinsweet.png";
import omahProject from "../../assets/webDesignOmahProject.png";
import queryProject from "../../assets/webDesignQuery.png";
import bangladesh from "../../assets/bangladesh.png";

const cardData = [
  {
    img: webDesignProjectOne,
    alt: "webDesignProjectOne",
    title: "Valentina",
    icons: ["html", "css", "bootstrapt"],
    repoLink: "https://github.com/imonrana/fast-project",
    liveLink: "https://imonrana.github.io/fast-project/",
    scrollY: "hover:-translate-y-[75%]",
  },

  {
    img: applandingProject,
    alt: "applandingProject",
    title: "App Landing",
    icons: ["html", "sass", "bootstrapt"],
    repoLink: "https://github.com/imonrana/app_landing_project",
    liveLink: "https://imonrana.github.io/app_landing_project/",
    scrollY: "hover:-translate-y-[75%]",
  },

  {
    img: finsweetProject,
    alt: "finsweetProject",
    title: "Finsweet",
    icons: ["html", "css", "bootstrapt"],
    repoLink: "https://github.com/imonrana/finsweet",
    liveLink: "https://imonrana.github.io/finsweet/",
    scrollY: "hover:-translate-y-[80%]",
  },

  {
    img: batlesProject,
    alt: "batlesProject",
    title: "Batles",
    icons: ["html", "css"],
    repoLink: "https://github.com/imonrana/batles-project",
    liveLink: "https://imonrana.github.io/batles-project/",
    scrollY: "hover:-translate-y-[59%]",
  },

  {
    img: leaglSolution,
    alt: "leaglSolution",
    title: "Justice",
    icons: ["html", "css", "bootstrapt"],
    repoLink: "https://imonrana.github.io/justice-legal-solution-bootstrap/",
    liveLink: "https://github.com/imonrana/justice-legal-solution-bootstrap",
    scrollY: "hover:-translate-y-[70%]",
  },

  {
    img: finsweetStellarProject,
    alt: "finsweetStellarProject",
    title: "Finsweet-Stellar",
    icons: ["html", "css", "bootstrapt"],
    repoLink: "https://github.com/imonrana/finsweet-stellar",
    liveLink: "https://imonrana.github.io/finsweet-stellar/",
    scrollY: "hover:-translate-y-[80%]",
  },

  {
    img: gamerProject,
    alt: "gamerProject",
    title: "Gamer",
    icons: ["html", "css"],
    repoLink: "https://github.com/imonrana/B8A2-Gamer-Zone",
    liveLink: "https://imonrana.github.io/B8A2-Gamer-Zone/",
    scrollY: "hover:-translate-y-[59%]",
  },

  {
    img: inovateProject,
    alt: "inovateProject",
    title: "Inovate",
    icons: ["html", "css", "bootstrapt"],
    repoLink: "https://github.com/imonrana/innovate",
    liveLink: "https://imonrana.github.io/innovate/",
    scrollY: "hover:-translate-y-[82%]",
  },

  {
    img: teaHoseProject,
    alt: "teaHoseProject",
    title: "Tea House",
    icons: ["html", "css", "tailwind"],
    repoLink: "https://github.com/imonrana/tea-house-with-daisy-ui",
    liveLink: "https://imonrana.github.io/tea-house-with-daisy-ui/",
    scrollY: "hover:-translate-y-[65%]",
  },

  {
    img: fruitBrustProject,
    alt: "fruitBrustProject",
    title: "Friut Brust",
    icons: ["html", "css", "tailwind"],
    repoLink: "https://github.com/imonrana/B8A3-fruit-brust",
    liveLink: "https://imonrana.github.io/B8A3-fruit-brust/",
    scrollY: "hover:-translate-y-[59%]",
  },

  {
    img: omahProject,
    alt: "omahProject",
    title: "Omah",
    icons: ["html", "css"],
    repoLink: "https://github.com/imonrana/omah",
    liveLink: "https://imonrana.github.io/omah/",
    scrollY: "hover:-translate-y-[63%]",
  },

  {
    img: queryProject,
    alt: "queryProject",
    title: "Query",
    icons: ["html", "css"],
    repoLink: "https://github.com/imonrana/qwery",
    liveLink: "https://imonrana.github.io/qwery/",
    scrollY: "hover:-translate-y-[70%]",
  },
  {
    img: bangladesh,
    alt: "bangladesh",
    title: "Bangladesh 2.0",
    icons: ["html", "css"],
    repoLink: "https://github.com/imonrana/bangladesh-2.0",
    liveLink: "https://imonrana.github.io/bangladesh-2.0/",
    scrollY: "hover:-translate-y-[74%]",
  },
];

const WebDesign = () => {
  return (
    <div className="flex justify-between flex-wrap gap-y-14">
      {cardData.map((card, index) => (
        <div key={index}>
          <ProjectCard
            img={card.img}
            alt={card.alt}
            title={card.title}
            icons={card.icons}
            repoLink={card.repoLink}
            liveLink={card.liveLink}
            scrollY={card.scrollY}
          />
        </div>
      ))}
    </div>

  );
};

export default WebDesign;
