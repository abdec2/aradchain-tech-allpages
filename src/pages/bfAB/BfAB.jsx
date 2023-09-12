import React from "react";
import style from "./bfAB.module.css";
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
              <h2>Algorand Blockchain Development Solutions</h2>
            </div>
            <div>
              <p>
              Elevate your business with a range of services designed for Algorand-based applications.

CONNECT WITH OUR EXPERTS


              </p>
              <p>
              Business-Centric Algorand Blockchain Development Services
Algorand has risen as a premier blockchain, fostering decentralization, scalability, and top-tier security. Businesses are embracing Algorand to access the potential of a decentralized world.

At AradChain Technologies, we unlock the power of Algorand blockchain, crafting secure, user-friendly, and potent decentralized applications (dApps). Our adept blockchain team excels in Algorand's two-tier architecture, Transaction Execution Approval Language (TEAL), atomic transfers, and Algorand Standard Assets (ASA). With our in-depth knowledge and wide-ranging experience, we create decentralized solutions across sectors such as Decentralized Finance (DeFi), Web3, and Non-Fungible Tokens (NFTs).

Distinctive Attributes of Algorand Blockchain
Solution to Blockchain Trilemma
Algorand confronts the blockchain trilemma, striving for equilibrium among decentralization, scalability, and security, while fortifying the system against errors and malicious attacks. To conquer this challenge, Algorand employs Pure Proof-of-Stake (PPoS).

Efficient Algorand Transactions
Algorand expedites transactions, completing most within five seconds. Transactions have a low transfer threshold of 0.0001 ALGO and are cost-effective, with a minimum transaction fee of 0.001 ALGO (equivalent to $0.0014 based on current exchange rates).

NFT Support
Algorand stands as a prominent platform for Non-Fungible Tokens (NFTs), embracing Fractional NFT technology for tokenized asset ownership by multiple individuals.

dApps Facilitation
Algorand supports the creation of decentralized applications (dApps) through APIs and SDKs for languages like JavaScript, Python, Java, and Go. Algorand has developed diverse dApps, from crowdfunding apps to COVID-19 trackers.

Robust App Environment
Algorand offers extensive capabilities for building DeFi and dApps, enhancing scalability with a new smart contract function that handles millions of transactions daily.

Seamless E-Money Integration
Algorand seamlessly integrates with the e-Money protocol, facilitating stablecoin issuance backed by European fiat currencies, broadening accessibility and benefits within the Algorand ecosystem.

Empower Your Development with Algorand
Forge a connection with our experts to explore Algorand's potential for your decentralized applications.
CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Our Algorand Blockchain Development Services
dApp Development
Leveraging our expertise in Golang, Java, Python, and Javascript, we craft robust, institutional-grade Algorand Apps. Security and ease remain paramount, empowering your app to disrupt the market.

NFT Marketplace Creation
Addressing the surging demand for NFTs, our blockchain engineers employ Algorand to design seamless NFT marketplace platforms, enhancing trading experiences with custom features.

Smart Contract Crafting
Our smart contract experts specialize in Python and TEAL (PyTeal) programming languages, creating secure contract codes tailored to your automation needs.

DeFi & DEX Solution Building
We engineer resilient DeFi and DEX solutions on Algorand, leveraging its low carbon footprint and high scalability for seamless exchange processes.

Node Establishment
With extensive expertise, we build optimized and efficient Algorand network nodes, ensuring compliance with the consensus algorithm for optimal performance.

Algorand Blockchain Consultation
Our experts provide comprehensive technical and business analysis of Algorand's two-tier blockchain architecture, enabling you to harness scalability, security, and speed.
CONNECT WITH OUR EXPERTS

Algorand Blockchain Technology Stack
Python
GoLang
Node.js
Java
JavaScript
PyTeal

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

              </p>
              <p>Why Opt for Us as Your Algorand Blockchain Development Company
Engage with AradChain Technologies to access a team of technical experts with hands-on experience in delivering end-to-end blockchain services.

Technical Prowess
Benefit from our technical acumen.

Expert Team
Rely on our adept team.

Rapid Development
Experience swift project execution.

Complete Support
Access comprehensive assistance.

Meaningful Outcomes
Anticipate impactful results.

Our Partners
Our Clientele
Frequently Asked Questions

What are the advantages of developing dApps on Algorand?
Algorand offers several advantages for dApp development including high scalability, low transaction fees, fast transaction times, and secure smart contracts.

What is the process for developing dApps on Algorand?

What is Algorand Standard Assets (ASA)?

What is the Algorand Venture Capital Program?

What is e-Money integration with Algorand?

Exploring Our Blogs

Custom AI Blockchain Development
Blockchain & AI: Top Use Cases and Barriers to AI Adoption
The convergence of Blockchain and AI emerges as a transformative force across industries. Explore its potential in our latest blog.
READ MORE

Unveiling Emerging Blockchain Use Cases in Real Estate
Real estate holds great promise for blockchain technology. Delve into the intriguing use cases in our detailed blog.
READ MORE

Blockchain Development for the Beauty Industry
Blockchain transforms the beauty industry. Explore how in our captivating blog.
READ MORE

Discover Our Blockchain Expertise

We're available for a friendly chat to address your business needs, without any obligations.

Our commitment to technical support means we're here to assist with any inquiries or requests.
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
