import React from "react";
import style from "./ebSC.module.css";
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
              <h2>supply chain</h2>
            </div>
            <div>
              <p>
              Blockchain Solutions for Supply Chain Management
                                                                                                                     Achieve Comprehensive Visibility, Transparency, and Total Asset Control across Your Supply Chain Network
Request a Free Demo

Blockchain-Powered Supply Chain Development: Creating a Transparent, Reliable, and Resilient Supply Chain Network
The supply chain industry is rapidly evolving, with new technologies disrupting operations and processes in the modern era. Businesses adhering to traditional supply chain methods, including disjointed data systems and paper-based practices, struggle to access and utilize vast data repositories. The incorporation of blockchain into supply chain management has gained substantial attention in recent years for its ability to offer enhanced transparency, traceability, and reduced administrative costs in business operations.

AradChain Technologies offers business-oriented blockchain supply chain solutions to help digitize supply chains, lower operational costs, and unlock opportunities without introducing risk to ongoing operations. Our supply chain solutions, developed by AradChain Technologies's experts, empower supply chain leaders to address disruptions in operations and establish resilience for the future.

Connect on WhatsApp Connect on Telegram

Common Challenges in Traditional Supply Chain Management
The conventional supply chain management process is riddled with inefficiencies that lead to information silos and complicate asset tracking, resulting in a time-consuming task.

Lack of Security and Transparency

Costly Data Reconciliation Processes

Disconnected Supply Chain Participants

Complicated and Manual Record Keeping Methods

Inefficient Asset Traceability

Error-Prone and Delayed Business Operations

Overcome Supply Chain Challenges with Our Blockchain Supply Chain Solutions
Get a Quote

              </p>
              <p>
              Traditional vs. Blockchain-Powered Supply Chains
Supply Chains without Blockchain

Ethical sourcing uncertain

Environmental impacts unknown. Fragmented data systems and data loss

Infrequent third-party quality control

Manual transport updates not in real-time

Overstock and stockouts due to inaccurate supply and demand data

Product provenance and authenticity uncertain

Minimal supply chain insight

Supply Chains with Blockchain

Ethical sourcing uncertain

Measure and reduce environmental impacts. Complete data visibility on a single shared ledger

Reduced need for regulators. Smart contracts ensure quality control throughout the supply chain

Automated real-time transport updates

Manage stock with real-time data

Certainty of product provenance and authenticity

Supply chain insight empowers informed decision-making

Why Opt for AradChain Technologies's Blockchain-Powered Supply Chain Solutions?
As a trusted blockchain supply chain development company, AradChain Technologies offers services to optimize supply chain operations and enhance data management efficiency through intuitive workflows.

Enhanced Visibility and Transparency

Streamlined Onboarding

Reduced Product Counterfeiting

Secured Supply Chain Operations

Seamless Team Collaboration

Features Offered by Our Blockchain Supply Chain Solutions
Our blockchain supply chain solutions come equipped with user-friendly and advanced features to help businesses manage their supply chain operations seamlessly.

Reporting Dashboard

User Management

Multi-Currency Wallet

Instant KYC and AML

Funds Management

Develop a Feature-Rich Blockchain-Powered Supply Chain Solution Today
Contact Our Experts

Blockchain in Supply Chain: The Use Cases

Shipping

A blockchain supply chain solution simplifies logistics by eliminating manual document handling, enhancing shipment visibility, and replacing legacy data systems.

Food Supply

Monitor food quality, minimize wastage, and track food provenance using a blockchain solution, boosting customer trust and minimizing food waste.

Pharmaceutical

Enhance visibility, prevent counterfeit medicines, and reduce pharmaceutical costs using blockchain to secure the pharmaceutical supply chain.

Manufacturing

Track auto parts, validate product provenance, and streamline recall processes using a blockchain supply chain software in the manufacturing sector.

Healthcare

Securely streamline clinical data, enable patients to access their medical records, and protect patient health data using blockchain in the healthcare sector.

              </p>
              <p>Why Choose AradChain Technologies for Blockchain Supply Chain Development?
Technical Expertise

Our exclusive focus on blockchain technology ensures unmatched proficiency in the field.

Expert Team

Our 500+ experts help refine your offering, suggest optimal tech approaches, and assist in community setup and campaigns.

Rapid Development

Customized solutions are delivered for your target audience, ensuring swift development and deployment.

Complete Support

Our commitment extends beyond product launch, providing extensive post-delivery services for your growth.

Meaningful Outcomes

We ensure you generate tangible value from your investments.

Explore Our Blogs
Delve into our blog for insights into blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.

Metaverse in the Manufacturing Industry: Role and Future Prospects

AI Empowers NPCs: Breathing Life into the Metaverse

Getting Started with White Label Crypto Banking Platform

Our Blockchain Tech Expertise
We are available for a friendly chat to discuss your business needs without any obligation.

Our commitment to providing technical support ensures we're here to assist with inquiries and requests.
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
