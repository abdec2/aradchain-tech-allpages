import React from "react";
import style from "./acP.module.css";
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
              <h2>Partners</h2>
            </div>
            <div>
              <p>
              Collaborate for a Decentralized Ecosystem, Together
Our partners take precedence, and we invest in their success. Our partner-centric initiatives empower partners with the tools they need to provide exceptional services and support to customers.

JOIN OUR PARTNER PROGRAM

              </p>
              <p>
              Join Forces as a Blockchain Champion!
Let's combine efforts to co-create blockchain-centric solutions and shape a decentralized future. At AradChain Technologies, we invite organizations to become partners, enabling us to mutually gain and share business impacts and benefits. Partner with us to seek tech solutions, offer your expertise, or contribute to the technical stack for the advancement of the blockchain ecosystem.

Empowering Transformation through Technology
We harness the power of technology to guide and expedite our customers' digital transformation journeys. If your mission aligns with leveraging technology to accelerate the transition of business ideas into value, our partner program is the ideal fit. Together, we'll expand opportunities and diversify the range of solutions you can deliver.
Whether you seek to expand your business capabilities or enhance your existing skill set, AradChain Technologies's partner program consistently nurtures and grows your business. Access resources, expertise, in-depth domain knowledge, and co-marketing support to seamlessly deploy and enter the market with AradChain Technologies.

Leverage technical proficiency to accelerate development efforts
Enhance your visibility among AradChain Technologies's enterprise clientele
Establish and expand your global presence

GET IN TOUCH FOR PARTNERSHIP

Choose the Ideal Partnership
A partnership elevates a company's profitability and stability. Select the partnership type that aligns with your goals to create a mutually beneficial coexistence.

Become a Solution Provider
As a solution provider, you'll be equipped with the skills and tools needed to offer a wide spectrum of technologies, solutions, and services to your end customers. Partner with AradChain Technologies as a solution provider to amplify your technical capabilities and establish tools and processes that expedite successful solution deployment.

Become a Technical Alliance Partner
Our network of alliances generates business value and accelerates market entry. Collaborating with partners, we boost revenue growth, extend market reach, streamline sales processes, and enrich product and service offerings. In partnership with our alliance allies, we deliver business solutions that address our clients' technological challenges.

Become a Service Provider
If you provide services like hosting or other services related to financial instruments, collaborate with us to leverage service provider-ready solutions, adaptable business models, and a unified go-to-market strategy. Benefit from a global market presence, expedited market entry, and remarkable business expansion.

Become a Solution Seeker
As a solution seeker, leverage AradChain Technologies's expertise, extensive experience, and profound domain knowledge to acquire the right solutions at the right time, guiding clients through their technical journeys. Partnering with AradChain Technologies accelerates your global presence, enhances your capabilities, and drives substantial growth.

INQUIRE ABOUT PARTNERSHIP
Our Commitment
You'll gain unlimited earning potential.
Receive technical support from our expert team.
Receive necessary training for successful execution.
Our tech resources are at your disposal.
We're available 24/7 to address your inquiries.

Become a Partner Today!
CONTACT US
Benefits of Partnership
technical-icon (1)
Technical Proficiency
We prioritize knowledge sharing. Together, we can delve deep into the blockchain realm, utilizing our technical expertise as a driving force propelling us forward.

revenue- (1)
Revenue Opportunities
With an ever-expanding network of customers, we span the global market. Together, we can achieve greater revenue. Our partners enjoy limitless partnership benefits, which are always open to negotiation.

relationships (2)
Mutually Beneficial Relationship
Our aim is a mutually advantageous, long-term partnership. Trust, integrity, quality, fairness, and accountability form the foundation of our evolving relationship.

Our Expertise
Equipped with experience, expertise, and resources, we provide end-to-end solutions to boost the growth of both our partners and customers.

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
