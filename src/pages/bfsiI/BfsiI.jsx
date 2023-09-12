import React from "react";
import style from "./bfsiI.module.css";
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
              <h2>Blockchain Technology in the Insurance Industry</h2>
            </div>
            <div>
              <p>
              Blockchain Technology in the Insurance Industry
Eliminate Claims Delays, Data Duplicity, and Policy Frauds.

REQUEST A FREE DEMONSTRATION
Revolutionize your offerings with Blockchain-based Insurance
AradChain Technologies's innovative blockchain solution for the insurance sector offers a remedy for critical challenges like redundant data entry, fraudulent claims, and sluggish claims processing. Built on a foundation of trust, this peer-to-peer model ensures complete transparency, expedites processing, and reduces both time and financial expenditures.

The Role of Blockchain Applications in the Insurance Sector
Insurance companies grapple with the storage, verification, and processing of massive volumes of customer data, as well as the facilitation of claims payouts. The absence of an automated solution has resulted in a convoluted ecosystem prone to inaccurate claims handling and policy manipulation. Additionally, this situation leaves customers helpless, forced to engage with an underperforming industry.

In the insurance realm, blockchain securely interlinks claims data, transaction records, and other invaluable datasets from all stakeholders. The ledger's data is duplicated across all nodes, ensuring absolute transparency.

              </p>
              <p>
              Challenges Addressed:

Fragmented Data Sources
Inaccurate Underwriting
Complex Liability Assessment
Dependency on Intermediaries

Blockchain in Insurance - Streamlining and Expediting Data Processing
AradChain Technologies boasts a proven track record in establishing comprehensive blockchain infrastructures for BFSI products, yielding cost savings, resource efficiency, and regulatory compliance. Our blockchain-based insurance application leverages self-executing smart contracts to automate risk modeling, auditing, and compliance checks. By involving all stakeholders, it eliminates false entries and fosters trust. Our solution significantly impacts the six foundational aspects of the industry.

Anti-Money Laundering (AML)
Primary and secondary stakeholders, including insurers, reinsurers, regulators, validators, brokers, and customers, share data within an immutable repository, enhancing visibility.

Anti-Fraud
A secure shared database with multiple levels of compliance ensures asset ownership, eliminates duplication, and streamlines claims processing.

Re-Insurance
Efficiently manages transactional data exchanges between insurers and reinsurers through smart contracts accessible to regulators and retrocessionaires.

Parametric Insurance
Smart contracts automatically trigger policy execution in the event of a loss covered by insurance logic, applicable to all insurance-linked securities and bonds.

Claims
Reduced claims fraud through the elimination of data silos, providing customers greater control over their data and access rights.

Peer-to-Peer Models
Enhanced P2P models by automating tasks and securing funds in smart contract-based escrows.

REQUEST A FREE DEMONSTRATION
AradChain Technologies’s Competitive Edge - Blockchain Applications for the Insurance Value Chain
AradChain Technologies establishes a shared ledger between institutions (e.g., clinics) and insurers, streamlining data exchange and accelerating claims processing accurately. This shared communication mechanism enhances claim validation, payment, and minimizes manual errors. Our tailor-made solution covers the entire insurance value chain, applicable to both group and individual policies.

Key Features:

Self-Governed Claims Handling & Underwriting
Compatibility with Various Insurance Types
Inherent Security & Scalability
Mitigation of Fraud Risks
Reduction of Intermediary Dependency
Decentralized Data Storage
Holistic Group and Individual Policy Management
Streamlined Due Diligence
Pricing/Underwriting
Payments & Collections
Claims Management
Policy Administration
CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Key Features of Our Blockchain-based Insurance Solution

Smart Contracts
Optical Character Recognition (OCR)
InterPlanetary File System (IPFS)
User Onboarding
Integrated Invoicing
Reporting Analytics
Funds Management
User Administration
Claims Oversight

Explore Our Blog Highlights

Maximizing Profits With a Crypto Arbitrage Bot in 2023
The rise in cryptocurrency trading's popularity has led to increased interest in crypto arbitrage bots. These innovative tools empower traders to...
READ MORE

Creating a Bitcoin Exchange Software Similar to Poloniex
Table of Contents Introduction What is Poloniex? Key Features of Poloniex-Inspired Bitcoin Exchange Software Establishing Your Own Exchange Platform Using Poloniex as...
READ MORE

Elevating Your Crypto Exchange Software for 2023
The year 2023 has brought robust growth to the cryptocurrency market. As the year progresses, market fluctuations and new entrants are reshaping...
READ MORE

Our Expertise in Blockchain Technology
We're here for a friendly chat to discuss your business needs, no commitments.

Count on us for comprehensive technical support. We're open to any inquiries or requests.

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
