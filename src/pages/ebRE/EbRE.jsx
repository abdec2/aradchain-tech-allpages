import React from "react";
import style from "./ebRE.module.css";
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
              <h2>Blockchain Solutions for Real Estate</h2>
            </div>
            <div>
              <p>
              Revolutionizing Property Transactions

Request a Free Demo

Empowering Real Estate with Blockchain Solutions
Our expertise in Blockchain development for real estate is unmatched. We specialize in creating solutions that smartly and accurately simplify data capture, analysis, and tracing of real estate properties. Our digital real estate Blockchain solutions eliminate data silos while ensuring transparency at reduced costs. Leveraging our Blockchain know-how, we help businesses and individuals overcome major industry challenges and achieve their objectives.

The Need for Blockchain Development in Real Estate
Addressing Real Estate Challenges with Blockchain
The real estate landscape grapples with paper-based land titles vulnerable to loss, fraud, and mismanagement. Property transfers and permits entail complex, time-consuming legal procedures, often locking land in unproductive use.

Managing large construction projects has grown increasingly challenging due to fragmented sub-contracting, unclear procurement practices, and a lack of supply chain transparency.

Property development firms struggle to secure finances for new projects. Relying on single loan sources results in high interest rates, while crowd financing and loan syndication prove difficult to administer.

              </p>
              <p>
              Blockchain in Real Estate: A Game-Changer
Our team simplifies legacy systems, offering a secure, immutable digital registry complete with document authentication and transaction transparency.

A trusted asset title and documentation process bolsters investor confidence, facilitates market transactions, grants access to finance opportunities, and propels economic and social community development.

Blockchain applications in real estate enable secure data sharing, streamline rental collections and payments to property owners, and provide thorough due diligence across portfolios. This enhances operational efficiency, reduces overhead costs, and generates comprehensive data for informed decision-making.

With our Blockchain Applications in Real Estate, Enterprises Can:
Secure, enhance, and transparently manage land registries
Revolutionize loan and mortgage securitization
Optimize property search processes
Unlock alternative financing options for property development
Accelerate real estate investment management with digital assets
From Blockchain real estate tokenization to smart contracts, our solutions revolutionize traditional real estate processes. We pave the way for a streamlined, trusted future of real estate with efficient Blockchain solutions.

Connect on WhatsApp
Connect on Telegram

Our Real Estate Blockchain Development Services
We offer a range of Blockchain solutions for real estate.

Real Estate Tokenization
We develop Blockchain applications for real estate to facilitate rental property transactions. Tokenizing real property allows assets to be traded like stocks on an exchange, with transactions conducted online. We guide the industry through technology, legal, and auditing processes to raise capital through property-backed tokens compliant with various jurisdictions' regulations.

Real Estate Property Search Platform
Our Blockchain solutions for real estate automate the house-buying process. Consumers access a platform where potential sellers showcase their properties. After selection, physical or virtual property tours are available. Setting parameters, processing payments, and completing the transaction are the final steps.

Real Estate Blockchain Marketplace Platform
Facilitate customizable asset issuance, regulatory compliance, accelerated onboarding, and direct asset distribution. This reduces minimum subscription amounts, enables rapid customizable issuance, and satisfies investor demands more precisely.

Mortgage Securitization Platform
We employ digital real estate Blockchain-based smart contracts to streamline loan and mortgage approvals. Payments are collected and distributed to beneficiary holders, with real-time reporting to regulators. This enhances loan/mortgage lifecycle management and instills confidence in secondary markets.

Automated Digital Registry Platform Development
Boost investor confidence and facilitate market transactions with trusted asset title and documentation processes. Access finance opportunities, advance economic development, and ensure transparency with our Blockchain applications in real estate.

Real Estate Construction Management
Blockchain platforms simplify procurement, automate contract management, verify product quality, and streamline project management. Comprehensive project lifecycle management minimizes construction bottlenecks, enhances transparency, and enables real-time reporting audit trails.

Schedule a Free Demo

Our Value Proposition: Benefits of Real Estate on Blockchain
Real Estate NFT Expertise
Create real estate-backed NFT tokens and use them as collaterals for immediate liquidity. Add immutability and attested ownership of assets through NFTs.

Transparency in Title Transfers
Utilize smart contracts to streamline title transfer processes. Parties involved can view property ownership history, fostering transparency.

Access to Secondary Market Opportunities
Enhanced connectivity between digital assets and networks expands secondary market opportunities and boosts liquidity potential.

Process Efficiency
Automate real estate processes such as KYC/AML, compliance, payment settlement, transaction monitoring, and reporting through smart contracts.

Asset Tokenization Expertise
Digitized real estate assets can be tailored to meet issuer requirements and match investor specifications.

Fraud Prevention
Blockchain ensures that property information, owner data, and legal documents are securely stored, preventing unauthorized access.

Blockchain Use Cases in Real Estate
Explore how Blockchain use cases are transforming the real estate industry, enhancing efficiency, transparency, and trust in property transactions and management processes.

Tokenization of Properties
Blockchain enables fractional ownership of real estate through tokenization, allowing investors to trade digital shares of properties, boosting liquidity.

Smart Contracts for Transactions
Automate real estate transactions with smart contracts, eliminating intermediaries, reducing costs, and ensuring transparency and security.

Property Title Management
Blockchain applications revolutionize property title management by securely storing ownership records in a decentralized ledger, preventing fraud.

Streamlined Due Diligence
Immutable Blockchain records expedite due diligence for buyers, sellers, and lenders by providing tamper-proof property information.

Real Estate Crowdfunding
Blockchain enables crowdfunding platforms for real estate projects, letting investors participate in fractional ownership with lower investment thresholds.

Land Registry Systems
Blockchain-based land registries streamline land ownership recording and management, reducing bureaucracy and preventing disputes.

Property Management and Maintenance
Blockchain applications streamline property management by creating a decentralized platform for recording maintenance activities, payments, and obligations.

Real Estate Data Management
Blockchain provides a secure, transparent platform for sharing real estate data, ensuring data integrity, privacy, and facilitating information exchange.

Choose AradChain Technologies as Your Trusted Blockchain Partner
Technical Expertise
Benefit from our exclusive focus on blockchain technologies and unmatched expertise.

Expert Team
Our team of 500+ experts refines offerings, suggests optimal tech strategies, and supports community and campaign setups.

Rapid Development
Get tailored products for your audience with seamless development and deployment roadmaps.

Complete Support
Our commitment extends beyond product launch, providing post-delivery services for your growth.

Meaningful Outcomes
We ensure tangible impacts that generate value from your investments.

Explore Our Blogs
Visit our blog for insights on blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.

Blockchain & AI: Top Use Cases and Barriers to AI Adoption

Explore Emerging Blockchain Use Cases in Real Estate

Blockchain Development for the Beauty Industry: A Boon or Bane?

Our Blockchain Tech Expertise
We're here for a friendly chat to discuss your business needs, obligation-free.

Count on us for technical support, inquiries, and requests.

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
