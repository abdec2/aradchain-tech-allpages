import React from "react";
import style from "./bfsiKA.module.css";
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
              <h2>KYC & AML</h2>
            </div>
            <div>
              <p>
              Blockchain-Powered KYC Solution
A Secure and Streamlined Approach to Digitizing the KYC Process.
Revolutionize Regulatory Technology Innovation

Request a Free Demo
GET EXPERT ADVICE
Your Name*

Email Address*

Pakistan 

Phone Number

Message*

Prove your humanity by selecting the Cup.

              </p>
              <p>
              KYC Solution Leveraging Blockchain

Enshrined in Article 6 of the Universal Declaration of Human Rights is the principle that "Everyone has the right to recognition everywhere as a person before the law." However, approximately one-fifth of the global population (1.8 billion individuals) lacks a legal identity. This exclusion prevents them from accessing essential services like healthcare, education, housing, justice, and governmental assistance.

Current KYC (Know Your Customer) systems are plagued by inefficiency, involving complex procedures where specific documents are presented and background checks are conducted. Research from Thomson Reuters, a prominent corporate entity, reveals that completing KYC checks takes an average of 32 days. Moreover, major financial institutions annually spend between $900 million and $1.3 billion on compliance-related efforts. This situation is exacerbated by the absence of a digital identity. Another significant drawback is identity theft, affecting millions annually, with 15.4 million cases reported last year.

These alarming statistics underscore the urgency of modernizing identity management through digital means. We firmly believe that blockchain holds the potential to revolutionize the KYC landscape, enhancing its accessibility and efficacy. To this end, we have harnessed blockchain's capabilities to develop a KYC solution that simplifies the creation, monitoring, and maintenance of digital identities. Our solution is designed to be efficient, user-friendly, secure, and resilient against fraud. Delivered as a white-label solution, it can be tailored to your business requirements and branded accordingly. Leverage our comprehensive KYC solution to drive transformative innovation in the realm of regulatory technology.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Highlights of Our Blockchain-Backed KYC Solution
Our ready-to-deploy KYC solution comes equipped with cutting-edge features to streamline the KYC process and manage the entire user lifecycle.

KYC Solution Highlights
Optical Character Recognition (OCR)
Our OCR technology converts scanned paper documents—such as driver's licenses, voter IDs, passports, and other ID proofs—into machine-readable text. This information is then recorded on the blockchain, forming a secure digital identity for each user.
KYC Solution Highlights
Ethereum-Based Identity
User-related textual data is stored on the Ethereum blockchain, with each user assigned a unique Ethereum address. This address serves as an identifier, facilitating easy access and sharing of user data.
KYC Solution Highlights
IPFS Integration
Image files uploaded by users are stored using the InterPlanetary File System (IPFS), a peer-to-peer file-sharing protocol. This accelerates and simplifies the process of sharing user data across global networks.
KYC Solution Highlights
Digital Signatures
Enhancing security, multiple digital signatures ensure that user data can only be exchanged when authorized by approved signatories—a user and the platform owner.
KYC Solution Highlights
Incentive Mechanism
Share verified user information with financial institutions and other entities seeking the same data and earn incentives in return. Each data share presents an opportunity for substantial rewards.
KYC Solution Highlights
Wallet Integration
Our multi-cryptocurrency hot wallet ensures secure storage and seamless transactions for covering gas fees and distributing incentives.
CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Blockchain-Powered KYC: Diverse Applications
Our KYC solution is versatile and can be applied to a wide range of industries and sectors.

KYC Solution Applications
Cryptocurrency Exchanges
KYC Solution Applications
Lending Platforms
KYC Solution Applications
Telecommunications
KYC Solution Applications
Finance
KYC Solution Applications
Healthcare
KYC Solution Applications
Real Estate
KYC Solution Applications
Government
KYC Solution Applications
Travel and Transportation
KYC Solution Applications
Insurance
KYC Solution Applications
Casinos and Online Gaming
CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Our Proficiency in Blockchain Technology
We are here to have a friendly discussion about your business needs, without any obligation.

We are dedicated to offering technical support and are open to any inquiries or requests.

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
