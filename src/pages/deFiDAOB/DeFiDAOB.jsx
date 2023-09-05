import React from "react";
import style from "./deFiDAOB.module.css";
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
              <h2>DAO Blockchain Development</h2>
            </div>
            <div>
              <p>
              AradChain Technologies: Your Expert DAO Development Partner
The capabilities of blockchain have furnished us with a unified and secure shared system enriched with diverse features. Harnessing the power of DAO blockchain development presents a cost-effective solution to the predicaments faced by conventional centralized businesses. Delve into the realm of safeguarding your business interests through DAO blockchain development with the assistance of AradChain Technologies Solutions.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Insight into DAO Development
A Decentralized Autonomous Organization, abbreviated as DAO, epitomizes a transparent and self-governing community-led entity that operates sans a central authority. This signifies that a DAO's governance lies in the hands of all project members, rendering all critical decisions collectively taken by the community.

DAOs can be established using myriad crypto wallets, be they under the control of organizations or individuals. Operations are executed through code, thus facilitating asset management and voting without the need for conventional banking and legal formalities.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

              </p>
              <p>
              DAO vs Traditional Organizations
Traditional Organizations
Governance: Centralized top-down management, fostering information and decision bottlenecks.
Trust: Anchored in experience and past relationships.
Decision-Making: Hinges on expertise and seniority.
Operational Costs: Elevated.
AI DAOs
Governance: Embedded in code through smart contracts.
Trust: Anchored in cryptography (Blockchain).
Decision-Making: Automated through AI (independent agents or AGI) and smart contracts.
Operational Costs: Minimal.
When contemplating organizational governance in the blockchain domain, two centralized solutions emerge: COs (Continuous Organizations) or traditional organizations, and DAOs (Decentralized Autonomous Organizations). Both operate on intricate crypto-economic principles and smart contracts.

While DAOs automate and decentralize corporate governance, COs aspire to cultivate a sustainable financial model for conventional organizations. Structurally, DAOs are flat entities reliant on smart contracts to enforce rules and decision-making. DAO Tokens empower participants with voting and decision-making authority, with more tokens equating to greater influence. In contrast, COs employ Decentralized Autonomous Trusts (DATs), immutable smart contracts that discourage speculation while incentivizing long-term stakeholder involvement.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Features of a Decentralized Autonomous Network
Group 15128
Open Source Code
DAOs remain closed until the financing phase concludes, at which point they evolve into independent autonomous entities detached from external influences. By open-sourcing the code, all participants gain access to it.
Group 15129
DAO Token
The financing phase endures while setting up DAO rules. Ensuring these rules inherently foster genuine economic growth and accommodate financing is pivotal during this phase.
Group 15130
Based on Smart Contracts
Effective decentralized autonomous organization blockchain operation necessitates well-defined guidelines dictating platform behavior. These guidelines, or rules, are encapsulated within smart contracts, rendering them valid and enforceable in the future.
Group 15131
Using Blockchain Technology
Leveraging blockchain technology, organizations can function autonomously and in a decentralized fashion. Users wield authority and decision-making power on the platform, rendering DAOs transparent, immune to corruption, and immutable.
How Does a DAO Function?

A core community team establishes DAO rules using smart contracts.
Smart contracts lay the groundwork on which the DAO operates, visible, verifiable, and auditable by all members.
Tokens are issued by the DAO platform to facilitate funding decisions and governance allocation.
This protocol enables the DAO to vend tokens for fundraising, thereby bolstering the treasury.
Token holders receive voting rights in proportion to their holdings.
Upon funding completion, the DAO is ready for deployment. The code is launched into production and cannot be altered without consensus attained through member voting.
Why Opt for DAO Platform Development?
When navigating projects that necessitate funding and entail transactions with a plethora of unknown entities, establishing trust can be challenging. The integration of a decentralized autonomous organization blockchain offers myriad opportunities for your business.

Embrace DAO blockchain development for wholly transparent transactions, mandatory voting for implementing changes, and automatic handling of services in a standardized fashion.


Group 15132
Trusted
Timestamping
Group 15133
Eliminate Security
Threats
Group 15134
Farewell to Managerial
Supervision
Group 15135
Utterly Autonomous
Control
TALK TO OUR EXPERTS
Why Choose AradChain Technologies for DAO Development Services?
By joining forces with AradChain Technologies, you enlist the support of a cadre of technical experts seasoned in transforming visions into reality.

Group 15139
Technical Prowess
Our focus is exclusively on Blockchain technologies. We specialize in one domain and excel at it.
Group 15140
Expert Team
A team of 500 experts aids in refining your offerings, suggesting optimal tech approaches, and aiding in the establishment of communities and campaigns.
Group 15141
Swift Development
Tailored products aligned with your target audience are our hallmark. A coherent roadmap ensures efficient, expedited development and deployment.
Group 15142
Comprehensive Support
Our commitment transcends product launch. Extensive post-delivery services are offered, enabling your unwavering focus on growth.
Group 15143
Meaningful Outcomes
We bring your aspirations to life, ensuring tangible value emerges from your investments.
CONNECT ON WHATSAPP CONNECT ON TELEGRAM
A Glimpse of Our Blogs
Get-Ready-For-Deploying-DAO-In-Healthcare
Harnessing DAO Blockchain Development to Empower Healthcare and Related Businesses in 2023
Blockchain technology is revamping enterprise operations, providing a secure, transparent approach to data management and sharing. It is […]
READ MORE

Building and Executing DAO Governance Models in 2023
Cryptocurrencies and blockchain technology merely scratch the surface; the upcoming buzz centers on Decentralized Autonomous Organizations (DAOs). DAO Governance Models are […]
READ MORE

Introduction to DAO Governance Tokens: Why and How to Construct Them
The decentralized world orbits the concept of empowering users with authority and ownership. However, this hinges on the participation of individuals […]
READ MORE
Our Blockchain Tech Expertise
We're here for a friendly conversation, eager to explore your business needs—no obligations attached.

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
