import React from "react";
import style from "./bfT.module.css";
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
              <h2>Tezos Development Solutions</h2>
            </div>
            <div>
              <p>
              Comprehensive services for crafting Tezos-based assets and applications from start to finish.
REQUEST A FREE DEMO

Precision-Crafted Tezos dApp Development Solutions
Tezos is experiencing rapid growth and adoption owing to its exceptional attributes including efficiency, robust security, and seamless scalability. If you're considering entering the Tezos market with your application, we're here to facilitate your seamless entry and active participation.
Our team of adept blockchain developers boasts extensive experience in building blockchain applications across various platforms, rendering them proficient in developing and deploying Tezos dApps. They possess the prowess to swiftly identify both on-chain and off-chain entities, develop microservices, establish Tezos nodes, design Tezos wallets, and seamlessly integrate Tezos APIs into your existing solution or application.

TALK TO OUR EXPERTS

              </p>
              <p>
              Our Range of Tezos Blockchain Development Services
We offer a comprehensive suite of services to transform your business vision into a potent product that disrupts the market.

Tezos dApp Development
Leveraging our technical prowess and blockchain app development experience, we create potent and scalable Tezos dApps tailored to your specific requirements.
Tezos Token Development
Our support extends to post-deployment and decommissioning functionalities, ensuring seamless token development on the Tezos blockchain. Our development process emphasizes rigorous testing and support at every stage of token building.
Tezos Wallet Development
With the expertise to assist both enterprises and startups, we develop custom Tezos wallets that support XTZ (Tezos) tokens. We seamlessly integrate Tezos wallets with existing applications or platforms, facilitating effortless wallet integration.
Tezos Smart Contract Development
Smart contracts form the foundation of decentralized applications. With extensive experience in smart contract development across diverse blockchain platforms, our developers ensure flawless smart contract creation for both private and public networks.
Tezos Integration
Employing a diverse range of Tezos APIs, SDKs, and tools—such as Taquito, Conseil, Morley, TezosKit, PyTezos, and TezosJ—we seamlessly integrate your current application with the Tezos blockchain network. Our focus lies on high scalability, adaptability, and traceability.
Tezos Consulting
Our subject matter experts offer consulting services to assess the feasibility of integrating the Tezos Blockchain Platform into your business use case. We meticulously identify both on-chain and off-chain entities, and ascertain the required technology stack to deliver a comprehensive solution.

Connect with our subject matter experts to discuss your business requirements.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Advantages of Tezos for dApp Development
Tezos offers a range of features that make it an ideal choice for dApp development.

Proof of Stake
Tezos utilizes the Proof of Stake consensus mechanism, enabling participants to reach consensus on the blockchain's state. Unlike other proof-of-stake protocols, Tezos allows any stakeholder to engage in the consensus process and earn protocol-based rewards for contributing to network stability and security.

On-Chain Governance
Tezos employs on-chain governance, enabling all stakeholders to participate in protocol governance. Through a structured election cycle, stakeholders collaboratively reach agreements on protocol amendments. This combination of on-chain mechanisms and self-amendment allows Tezos to enhance governance mechanisms.

Self-Amendment
Tezos employs self-amendment to upgrade itself without splitting into distinct blockchains. This mechanism reduces the costs associated with protocol upgrades while enabling seamless implementation of future innovations.

Smart Contracts and Formal Verification
Tezos provides a platform for building dApps and smart contracts resistant to third-party shutdowns. Through formal verification, Tezos enhances security by offering mathematically proven properties of programs like smart contracts.

Discuss your business needs with our subject matter experts.

TALK TO OUR EXPERTS

Why Opt for Us in Tezos Blockchain Development
Partner with AradChain Technologies to access a team of technical experts with real-world experience, delivering end-to-end blockchain solutions.

Technical Proficiency
Benefit from our technical prowess.

Expert Team
Rely on our proficient team.

Rapid Development
Experience expedited project execution.

Complete Support
Access comprehensive assistance.

Meaningful Outcomes
Expect impactful results.

Our Partners
Our Clients
Frequently Asked Questions

What is on-chain governance in Tezos?
On-chain governance in Tezos enables all stakeholders to participate in the decision-making process for protocol upgrades, ensuring transparency and democratic governance.

How does Tezos ensure security in smart contract development?

What programming language is used for Tezos smart contract development?

Can I develop my own custom Tezos wallet?

Is Tezos suitable for developing decentralized exchanges (DEX)?

What tools and technologies are used in Tezos blockchain development?

Explore More in Our Blogs

Metaverse in the Manufacturing Industry: Role and Future Prospects
Uncover the evolving role of the Metaverse in manufacturing and its future prospects in our insightful blog.
READ MORE

Empowering NPCs with AI in the Metaverse
Delve into the transformative impact of AI on NPCs within the metaverse in our thought-provoking blog.
READ MORE

Initiating a White Label Crypto Banking Platform
Embark on your journey to a white label crypto banking platform with our comprehensive guide.
READ MORE

Discover Our Blockchain Tech Expertise

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
