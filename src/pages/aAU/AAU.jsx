import React from "react";
import style from "./aAU.module.css";
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
              <h2>About US</h2>
            </div>
            <div>
              <p>
              ioneering Innovation for Navigating Digital Transformation

About Us
TALK TO OUR EXPERTS
Our Expertise
With a decade-long track record, AradChain Technologies has been at the forefront of assisting businesses in embracing emerging technologies to proactively adapt to change. Through meticulous research, design thinking methodologies, and unparalleled solutions in strategy, consulting, technology, and operations, we chart an inventive course to guide global enterprises from traditional technology landscapes to blockchain-powered ecosystems. Our mission revolves around seizing opportunities from disruptions to drive transformative outcomes in the realm of decentralized digital evolution.

About Us
We possess real-world proficiency in bridging the gap between blockchain technology and business processes throughout the entire blockchain journey—for our clients.

Our Innovation Approach

              </p>
              <p>
              About Us
Research
Our meticulous research processes and design thinking-driven methodologies ensure access to trusted insights, guidance, and solutions necessary for securing a crucial competitive edge, enhancing operational efficiency, mitigating risks, achieving tangible results, and attaining business triumph.

About Us
Strategy
Crafted through profound industry acumen and analytics, fortified by the enrichment of human insights, our strategies empower businesses to act decisively and swiftly, enabling them to flourish both in the present and the emerging future.

About Us
Consulting
AradChain Technologies's capacity to spot and capitalize on opportunities thrives on intelligent innovation architecture—formed by a multidisciplinary team possessing industry expertise that aids our clients in piloting and assimilating new technologies to revitalize their enterprises for enduring success.

About Us
Digital
We shepherd our clients' evolution from envisioning digital to embodying digital by harnessing cutting-edge digital technologies to metamorphose core operations, customer experiences, and business models.

About Us
Technology
AradChain Technologies propels digital transformation through meticulously tailored services that redefine your application portfolio, facilitating the embrace of a novel realm of information technology. Our industry insights, coupled with innovative technologies, fuel your business growth.

About Us
Operations
In order to thrive in today's fiercely competitive market, swift adaptation to evolving customer and market dynamics is essential. We empower our clients to revolutionize their operations through technology integration, enabling them to see more, achieve more, and be more.

Our Clientele
About Us
Financial Sector
About Us
Product Development and Research
About Us
Healthcare Industry
About Us
Information Technology
About Us
Supply Chain Management
About Us
Marketing and Communications
About Us
Legal and Compliance
About Us
Human Resources
About Us
Sales Domain
About Us
Customer Service & Support
About Us
Real Estate Ventures
About Us
Strategic Endeavors
Our Core Beliefs
Transparency
Our operations are deeply rooted in the principles of open and candid communication, ensuring the prosperity of our clients through transparency.

Passion
At AradChain Technologies, passion permeates every facet of our work—for our clients and our organization alike. Our teams are motivated by a genuine enthusiasm and unwavering commitment to deliver unparalleled services to our clients.

Empowerment
AradChain Technologies is fueled by a determination to yield results. We foster end-to-end ownership, accountability, and responsibility, and we harness appropriate technologies to ensure tasks are efficiently accomplished.

Collaboration
Our cross-functional experts share knowledge and collaborate as a cohesive unit to achieve shared objectives—for our clients and for ourselves.

Customer-Centric Approach
We guide our clients on their journey towards becoming high-performance entities, forging enduring relationships by being responsive and consistently delivering substantial value.

Integrity
We uphold the highest standards of governance and steer business processes with unwavering moral and intellectual integrity.

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
