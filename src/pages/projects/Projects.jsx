import React from "react";
import style from "./projects.module.css";
import Heading from "../../components/heading/Heading";
import Footer1 from "../../components/footer1/Footer1";
import NeedSolution from "../../components/needSolution/Needsolution";
import data from "../../database/data";
import Projectsbox from "../../components/projectsBox/Projectsbox";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const Projects = () => {
  return (
    <div className={style.projectMain}>
      {/* Main Section */}
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <Heading heading="Projects" />
        </div>
      </div>

      {/* Services Section */}
      <div className={style.projectsSection}>
        <div className={style.projectsSectionContainer}>
          {data.projects.map((ele) => {
            return (
              <Link
                to={`/projects/${ele.slug}`}
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <Projectsbox
                  key={ele.id}
                  slug={ele.slug}
                  year={ele.year}
                  icon={ele.icon}
                  service={ele.service}
                  client={ele.client}
                  shortDesc={ele.shortDesc}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Need Solution Section*/}
      <NeedSolution />
      <TelegramFloatingBtn />
      <FloatingWhatsApp
       phoneNumber="+447432284026"
        accountName="AradChain Support"
        chatMessage="Welcome to AradChain Technologies. One of our representative will be with you shortly."
        allowEsc
        allowClickAway
        notification
        notificationSound
        buttonStyle={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
        }}
        statusMessage="Typically Replies With in 5 minutes"
        chatboxHeight={450}
        chatboxStyle={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
        }}
      />

      {/* Foooter Section */}
      <Footer1 />
    </div>
  );
};

export default Projects;
