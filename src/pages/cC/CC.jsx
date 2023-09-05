import React from "react";
import style from "./cC.module.css";
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
              <h2>CAREER</h2>
            </div>
            <div>
              <p>
              Ready to Make a Difference?
Empower yourself with expertise, tools, and creative freedom at AradChain Technologies Solutions

EXPLORE OPPORTUNITIES APPLY NOW

Envision the Future
To guide organizations towards their next breakthroughs, you must have the foresight to envision a brighter tomorrow. AradChain Technologies is here to equip you with all the necessary expertise to become an expert in foreseeing the future. This not only grants you the liberty to experiment and test user cases, but also provides actionable insights that sharpen your ability to anticipate what lies ahead.

Prepare for Impact
Global organizations and their customers are relying on your efforts to shape a better digital landscape. If you're ready to craft intelligent strategies that shape the future, we offer the opportunities to turn those ambitions into reality.

Cryptocurrency Exchange Script
Cryptocurrency Exchange Clone
Bring Your Ideas to Life
Our culture of constant innovation and learning will empower you to exceed your own expectations with every task you undertake. Through our training initiatives, consistent guidance, and wealth of expertise, we'll help you broaden your horizons and think beyond the ordinary.

Current Job Openings
Posted

Quality Analyst (Manual)
Read more
Apply Now
Posted

Quality Analyst (Automation)
Read more
Apply Now
Posted

Academic Technical Content Writer
Read more
Apply Now
Posted

Pre Sales Consultant
Read more
Apply Now
Posted

Java Developer
Read more
Apply Now
Posted

Outbound Sales Executive
Read more
Apply Now
Posted

Blockchain Protocol Engineer
Read more
Apply Now
Posted

Full Stack Developer
Read more
Apply Now
Posted

Private Blockchain Developer
Read more
Apply Now
Posted

Blockchain Consultant
Read more
Apply Now
Posted

MERN Stack Developer
Read more
Apply Now
Posted

Node JS Developer
Read more
Apply Now
Posted

Training Manager/Senior IT Trainer
Read more
Apply Now
Posted

Team Lead (JS)
Read more
Apply Now
Posted

Rust Developer
Read more
Apply Now
Posted

React Native Developer
Read more
Apply Now
Posted

Growth Hacker
Read more
Apply Now
Posted

Client Relationship Manager
Read more
Apply Now
Posted

Quorum Blockchain Developer
Read more
Apply Now
Posted

R3 Corda Developer
Read more

              </p>
              <p>
              Apply Now
Decentralize the World
Join Us
Harness your expertise in transformative technology by joining our team.
SEARCH JOBS
Stay Informed
Stay updated on the latest crypto developments to stay ahead of the curve.
CONTACT US
Newsletter
Stay connected with our journey of success through our newsletter.

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
