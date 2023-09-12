import React from "react";
import style from "./bfPE.module.css";
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
              <h2>Polygon Edge Blockchain Development Solutions</h2>
            </div>
            <div>
              <p>
              Accelerate your market presence with our highly scalable applications designed for rapid deployment.

CONNECT WITH OUR EXPERTS

Unleash the Power of Polygon Edge Blockchain
Polygon Edge offers a robust ecosystem for building tokens, wallets, and applications with swift time-to-market.

At AradChain Technologies, we harness the capabilities of Polygon Edge to expedite application development and deployment, enabling you to swiftly enter and thrive in the market. Our comprehensive services cover consulting, development, deployment, and maintenance, ensuring the success of your project.

              </p>
              <p>
              Business Advantages of Polygon Edge for Development
Scalability
Polygon Edge, a Layer 2 scaling solution for Ethereum, processes a high volume of transactions rapidly and efficiently. This empowers the creation of decentralized applications capable of handling heavy traffic and usage without slow transaction speeds or high gas fees.

Lower Transaction Costs
Polygon Edge prioritizes cost-effectiveness, surpassing other blockchain networks. It adopts a Proof-of-Stake consensus mechanism, minimizing energy consumption and leading to lower transaction fees compared to networks using Proof-of-Work consensus mechanisms.

Interoperability
Polygon Edge facilitates seamless interaction between diverse blockchain networks, allowing applications built on it to leverage the strengths of different networks. This is achieved through a modular architecture supporting side chains and scaling solutions.

Uncover the Potential of Polygon Edge for Your Business.

CONNECT WITH OUR EXPERTS

Our Polygon Edge Blockchain Development Offerings
We cater to various business needs with our diverse application development solutions.

Decentralized Application Development
Crafting state-of-the-art Web3 apps on immutable shared ledgers, ensuring autonomy without single-party control.

Digital Assets Platform Creation
Building enterprise-level digital asset platforms that excel in security and scalability.

NFT Marketplace Establishment
Designing carbon-neutral, zero gas fee blockchain marketplaces for digital collectibles.

Decentralized Finance (DeFi)
Enhancing transaction speed and cross-chain interactions with Ethereum through Polygon Edge.

Gaming Platform Building
Leveraging Polygon Edge to construct immersive gaming platforms, offering engaging gameplay and rewarding experiences.

Custom Blockchain Development
Specializing in Ethereum-compatible blockchain construction on Polygon Edge to suit your specific needs.

Connect with Our Experts to Discuss Your Business Case.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Industries We Serve
Our comprehensive solutions cater to a wide range of industries.

Banking and Financial Services

Supply Chain

Media & Entertainment

Healthcare

Insurance

Government & Public Sector

Connect with Our Experts to Discuss Your Business Case.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Why Choose Us for Polygon Edge Development
Partner with AradChain Technologies for a team of technical experts delivering end-to-end consulting services with real-world experience.

Technical Proficiency
Benefit from our technical expertise.

Expert Team
Rely on our seasoned team.

Rapid Development
Experience swift project execution.

Complete Support
Access comprehensive assistance.

Meaningful Outcomes
Expect impactful results.

Our Partners
Our Clients
Frequently Asked Questions

How does Polygon Edge ensure the security of decentralized applications?
Polygon employs security measures including checkpoints, double-validation, and fraud proofs to safeguard against breaches, ensuring network integrity and protection against attacks.


              </p>
              <p>How does Polygon Edge support interoperability with other blockchain networks?

How is Polygon Edge environmentally friendly?

What are the advantages of deploying a smart contract on Polygon Edge?

What programming languages are compatible with Polygon Edge?

Discover More in Our Blogs

Metaverse in the Manufacturing Industry: Role and Future Prospects
Explore the evolving role of the Metaverse in manufacturing and its future prospects in our insightful blog.
READ MORE

Empowering NPCs with AI in the Metaverse
Delve into the transformative impact of AI on NPCs within the metaverse in our thought-provoking blog.
READ MORE

Initiating a White Label Crypto Banking Platform
Embark on your journey to a white label crypto banking platform with our comprehensive guide.
READ MORE

Explore Our Blockchain Expertise

We're available for a friendly chat to address your business needs, without any obligations.

Count on our technical support to assist with inquiries and requests.
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
