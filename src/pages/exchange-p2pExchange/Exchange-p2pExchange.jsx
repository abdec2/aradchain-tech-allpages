import React from "react";
import style from "./exchange-p2pExchange.module.css";
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
              <h2>P2P Crypto Exchange</h2>
            </div>
            <div>
              <p>
              Peer-to-Peer Cryptocurrency Exchange –
Revolutionizing Trading through Peer Interaction
By harnessing the core principle of blockchain technology – decentralization – a peer-to-peer (P2P) exchange facilitates direct transactions between buyers and sellers without any intermediary. Operating with a smart contract-based Escrow system, this platform ensures secure and reliable transactions.
Unlock the Potential of P2P Trading
Embrace the thriving peer-to-peer trading ecosystem with our purpose-driven approach to P2P exchange software development.

Our closely-knit teams align development strategies with your objectives, delivering a realm of trust. Merging deep domain expertise with a technology-agnostic stance, we craft a coherent roadmap that steers the development of your P2P exchange platform, expediting its time-to-market.

P2P Cryptocurrency Exchange Features
P2P
Dynamic Matching Engine
Fueled by a high-speed engine, our crypto exchange efficiently matches buyer and seller orders with minimal latency. It encompasses various order types, including buy and sell orders, forming the bedrock of the trading system.

P2P
Layered Security Measures
Our P2P exchange integrates cutting-edge security features like SSL implementation and two-factor authentication (email and Google authentication), augmenting the platform's security layers.

P2P
Instant KYC and AML Verification
An intuitive identity verification system expedites KYC processes while adhering to the proper protocols. This cultivates a community of verified and legitimate users (Buyers and Sellers).

P2P
Robust Escrow System
Secure and dependable smart contract-driven escrow system powers trading among platform users.

P2P
Atomic Swaps
Peer-to-peer swaps signify trusted user transactions, eliminating the necessity of a central authority. Atomic swaps execute transactions completely or not at all, reducing the chances of disputes in cases of agreement breaches.

P2P
Efficient Dispute Management
A resilient dispute management system facilitates seamless dispute resolution. Complete transaction history and bank statements empower the Admin to navigate dispute management, strengthening their decisions.

P2P
Preferred Trader Selection
Buyers enjoy the flexibility to choose their preferred sellers, and vice versa, for a more secure and trustworthy trading experience.

P2P
Admin Panel
A secure admin panel with streamlined controls enables efficient management of critical components like the Escrow system and dispute resolution.

P2P
Multi-language Support
Global reach is enhanced through multi-language support. The platform's UI offers a superior user experience in languages ranging from left-to-right to right-to-left.

              </p>
              <p>
              How the P2P Cryptocurrency Exchange Functions
Buyers and Sellers register on the P2P exchange platform.
Users undergo KYC verification.
A buyer places a buy order.
A wallet address is generated for the buyer.
The matching engine pairs the buyer with the suitable seller.
Buyer and seller confirm and agree on trade terms.
Smart contract-driven Escrow secures the seller's crypto assets for sale.
Buyer makes payment for the crypto assets to be acquired.
Seller verifies the payment.
Escrow releases crypto assets, transferring them to the buyer's wallet address.
Buyer can transfer the assets to a cold wallet.

Our P2P Exchange Development Process
Gathering Requirements and Planning
Comprehend your business objectives deeply and strategize a plan for P2P exchange development that aligns with your goals.

Solution Development
Architect the P2P solution with a focus on technology, process, security, and legal considerations, while addressing crucial aspects like UI/UX, smart contracts, and policies.

Coin/Token Listing
List the requisite coins or tokens on the exchange.

Testing and Enhancement
Thoroughly test the exchange for performance and usability, and make necessary enhancements accordingly.

Deployment
Integrate the P2P solution into your IT environment with the support of our dedicated blockchain team. Facilitate changes and updates as required.

Advantages of Our P2P Exchange Software
P2P
Institutional-grade Security
P2P
Rapid Transaction Speeds
P2P
Intuitive User Interface
P2P
Scalability
P2P
Swift Time-to-Market
P2P
Crafted by Blockchain Experts

Frequently Asked Questions

1How does a peer-to-peer (P2P) exchange operate?
A P2P exchange functions on the foundational principle of blockchain: decentralization. It enables direct trading between buyers and sellers, eliminating the need for intermediaries.
2What drives businesses to build P2P crypto exchanges?
3What are the development costs for a P2P crypto exchange?
4What lies in the future of P2P trading?

A Glimpse into Our Blog

Metaverse in Manufacturing: Role and Prospects
The term "Metaverse" requires no introduction, as it's seamlessly woven into our lives. Its upward trajectory in various sectors, including manufacturing, is unmistakable.
READ MORE

Empowering NPCs with AI in the Metaverse
The 21st century has witnessed remarkable innovations in blockchain, metaverse, and artificial intelligence. These technologies have ushered in significant changes.
READ MORE
White Label Crypto Banking Platform
Getting Started with White Label Crypto Banking
When opportunities knock, we seek swift and easy ways to leverage them for growth. The emerging landscape of white-label crypto banking is one such opportunity.
READ MORE

Our Expertise in Blockchain Technology

We're here for a friendly chat about your business needs, without any commitment.

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
