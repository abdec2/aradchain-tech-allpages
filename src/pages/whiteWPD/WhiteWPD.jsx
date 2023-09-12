import React from "react";
import style from "./whiteWPD.module.css";
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
              <h2>White Paper Development</h2>
            </div>
            <div>
              <p>
              Tailored White Paper Crafting Solutions

A personalized white paper is an authoritative, persuasive, and all-encompassing formal dossier detailing a business venture, elucidating its quandary and the corresponding resolution. White papers assume a pivotal role in business operations, constructing authority within an industry, augmenting credibility, and displaying thought leadership. Enriched with data-driven insights, a white paper serves as an exceptional instrument to infiltrate the cryptocurrency market and seize the attention of potential investors.

Creating a white paper necessitates exhaustive research, coupled with profound knowledge and an intricate comprehension of solution architecture and token economics. At AradChain Technologies, our technical white paper writers are well-versed in the domain, collaborating with our subject matter experts to craft an intricate, technically sound white paper imbued with substantiated statistical data that bolsters the document's authority. Beyond content generation, our white paper development procedure encompasses white paper design services, guaranteeing a content-rich document that is visually enticing for your prospective investors.

Assert your position as industry experts and erect a robust foundation for your cryptocurrency project via our purpose-oriented white paper creation services.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

              </p>
              <p>
              Our White Paper Formulation Process
A white paper should encapsulate technical intricacies while remaining accessible to the general populace. Our white paper development agency fabricates white papers brimming with authoritative insights, equally comprehensible to lay investors.

REQUEST A FREE DEMO
Comprehend
Our adept white paper writer grasps the nitty-gritty of your project – encompassing the predicament addressed, your proposed solution, technical intricacies, and business strategy – to chart a roadmap for white paper conception.

Investigate
Tailored to your project, we conduct meticulous research to amass pertinent data, market statistics, and facts to reinforce and substantiate the information outlined in the white paper.

Content Construction
Armed with exhaustive research and complete information, we adhere to a design-driven methodology to compose succinct, lucid, and intelligible content. This content enlightens and educates potential investors on pivotal aspects of your project.

Design
Post-technical white paper drafting, we transition to white paper design. Our innovative designers strike a harmonious equilibrium between text and graphics while ensuring seamless integration of design elements – color scheme, typography, icons – congruent with your brand identity.

Delivery
Furnish a meticulously structured, well-designed white paper tailored to your unique business requisites.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM
The Significance of White Papers
A white paper stands as an indispensable asset for any cryptocurrency initiative, whether it's an ICO, the launch of a Stablecoin, or the introduction of a blockchain coin. Serving as an enduring repository of information about your project, white papers cultivate investors' trust and cement their resolve to invest in your undertaking.

White Paper Development
Elevate brand presence
White Paper Development
Light paper creation and design
White Paper Development
Forge trust and credibility
White Paper Development
Reach out to investors and partners
White Paper Development
Amplify audience engagement
White Paper Development
Generate leads
TALK TO OUR EXPERTS
Encompassed Industries and Sectors
Whether you seek ICO white paper services or a stablecoin white paper, our bespoke services adeptly cater to your specific needs.

White Paper Development
ICO
White Paper Development
Stablecoin
White Paper Development
Technology
White Paper Development
Finance
White Paper Development
Law
White Paper Development
Real Estate
White Paper Development
Manufacturing
White Paper Development
Travel
White Paper Development
Lifestyle
White Paper Development
Education
CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Our Proficiency in Blockchain Tech
We're at your service for a friendly conversation to address your business needs, obligation-free.

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


      {/* Need Solution */}
      <Needsolution />

      {/* Footer Section */}
      <Footer1 />
    </div>
  );
};

export default About;
