import React from "react";
import style from "./acLAA.module.css";
// import image from '../../assets/aboutInfo2.png'
import crypto1 from "../../assets/crypto1.png";
import crypto2 from "../../assets/crypto2.png";
import data from "../../database/data";
import Whyus from "../../components/whyUs/Whyus";
import Heading from "../../components/heading/Heading";
import AboutStats from "../../components/aboutStats/AboutStats";
import Team from "../../components/team/Team";
import { Link } from "react-router-dom";
import Footer1 from "../../components/footer1/Footer1";
import Needsolution from "../../components/needSolution/Needsolution";
import map from "../../assets/map-pattern-1.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const About = () => {
  // console.log(data.aboutStatsData)
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <Heading heading="About" />
          <div className={style.mainSectionContent}>
            <div>
              <img src={map} alt="" />
              <h2>LIFE AT AradChain Technologies</h2>
            </div>
            <div>
              <p>
              An Enriching, Dynamic, and Innovative Workplace
AradChain Technologies thrives as an organization by the people, for the people. We firmly believe that our collective efforts can propel us to excellence in the realm of blockchain. Our selection process for team members is meticulous, and we provide them with compelling reasons to grow and remain with us. Our mission is to enrich lives and offer continuous growth opportunities on both intellectual (IQ) and emotional (EQ) levels.

              </p>
              <p>
              Our Core Beliefs
Our values illuminate our path in every transformation we undertake, both for our company and our clients.

Transparency as the Foundation
Transparency is the cornerstone of our approach, grounded in open and honest communication. We conduct ourselves with complete transparency to ensure the success of our clients.

Passion Fuels Us
At AradChain Technologies, our dedication to our clients and our organization is fueled by passion. Our teams are motivated by enthusiasm and commitment, delivering exceptional services with zeal.

Empowering Progress
AradChain Technologies thrives on the motto of delivering results. We foster end-to-end ownership, responsibility, and accountability, while embracing the right technologies to achieve our goals.

Collaboration for Success
Our experts from diverse fields collaborate seamlessly, sharing knowledge and working as a team to achieve a common goal, both for our clients and ourselves.

Customer-Centric Approach
Guided by a focus on our clients' success, we guide them on a journey toward becoming high-performance businesses, building lasting relationships through responsiveness and consistent value delivery.

Upholding Integrity
Our business processes are orchestrated with the utmost moral and intellectual integrity, upholding the highest standards of governance.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Our Essence
Navigating the transition from digital thinking to digital being.

Infused with an entrepreneurial and innovative spirit, we persistently work to translate visions into meaningful outcomes.

Tools like design thinking empower us to identify problems, cognitive skills help uncover solutions, and strategically designed solutions guide us toward the future.

At AradChain Technologies, we bring about profound, positive change with the freedom to conceive ideas and ingenious tools to manifest them.

TALK TO OUR EXPERTS

Diverse Perspectives
Highly motivated individuals committed to delivering impactful results.

We believe that innovation catering to diverse audiences should stem from diverse minds. Hence, our team of over 150 driven individuals hails from varied backgrounds, bringing distinct interests, skills, and ideas to the table, and operating across five countries.

TALK TO OUR EXPERTS

Technology that Drives Transformation
Our technology-agnostic solutions are the driving force behind our clients' digital transformation journeys. Regardless of the industry, we harness the right technology to bring your business ideas to life.

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className={style.infoTop}>
            {data.about.map((ele) => {
              return (
                <Whyus
                  key={ele.id}
                  image={ele.image}
                  title={ele.title}
                  desc={ele.desc}
                  alt={ele.title}
                />
              );
            })}
          </div>
          <div className={style.infoBottom}>
            {data.aboutStatsData.map((ele) => {
              return <AboutStats number={ele.number} text={ele.text} />;
            })}
          </div>
        </div>
      </div>

      {/* Crypto Section */}
      {/* <div className={style.cryptoSection}>
        <div className={style.cryptoContainer}>
          <img src={crypto1} alt="crypto1" />
          <img src={crypto2} alt="crypto2" />
        </div>
    </div> */}

      {/* Our Team */}
      <div className={style.ourTeamSection}>
        <div className={style.ourTeamContainer}>
          <h1>Our Team</h1>
          <p>
            The passionate people who drive our projects in Aradchain
            Technologies.
          </p>
          <div className={style.teamBoxes}>
            {data.team.map((ele) => {
              return (
                <Team
                  key={ele.id}
                  image={ele.image}
                  desg={ele.desg}
                  name={ele.name}
                  link={ele.link}
                />
              );
            })}
          </div>
        </div>
      </div>
      <TelegramFloatingBtn />
      <FloatingWhatsApp
        phoneNumber="447778222221"
        accountName="Jennie"
        allowEsc
        allowClickAway
        notification
        notificationSound
        buttonStyle={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
        }}
      />

      {/* Need Solution */}
      <Needsolution />

      {/* Footer Section */}
      <Footer1 />
    </div>
  );
};

export default About;
