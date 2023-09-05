import React from "react";
import style from "./l1l2sP.module.css";
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
              <h2>Polkadot Blockchain Solutions</h2>
            </div>
            <div>
              <p>
              Connecting the Dots Across Multitudes of Networks Through
Comprehensive Polkadot Blockchain Development Services
Initiate a Conversation with Our Experts

Polkadot Development Services
AradChain Technologies's Polkadot blockchain development harnesses the power of cross-chain network environments to achieve remarkable transaction throughput without fail. Reach out today to explore our Polkadot application development expertise, which spans public, private, open, and permission-less blockchain networks.

Embracing Web 3.0 with Polkadot Blockchain Development
Polkadot's standout feature lies in its capability to seamlessly transfer diverse datasets and tokens across various blockchain networks. This capability is a boon for dApp developers, enabling them to facilitate data transfer between both public and private blockchains.

However, managing data transfer between multiple blockchains can be complex without finesse. Leveraging years of experience in developing secure and scalable blockchain platforms, AradChain Technologies has honed its expertise in Polkadot development services.

              </p>
              <p>
              Key Components of Polkadot

Relay Chain
Safeguarding blockchain security, consensus, and cross-chain compatibility.

Para Chains
Individual layer-1 blockchains running in parallel with the main Polkadot blockchain, each with its own sovereign functionality.

Bridges
Connecting Para Chains & Para Threads with external blockchains.

Para Threads
Para Chains with a pay-as-you-go model, resulting in a more customizable application network.

Connect on WhatsApp Connect on Telegram

Polkadot Technology Stack
polkadot_relay_chain_icon
Substrate, the backbone of Polkadot blockchain, is an open-source framework for rapid construction and deployment of custom blockchains across the Polkadot network.
polkadot_state_machine_icon
WebAssembly (WASM), a high-performance virtual environment, compiles Polkadot's state machine, making Polkadot universally accessible.
polka_networking_uses
Libp2p, a versatile framework, enables cross-platform peer-to-peer applications, foreseeing it as a standard for future dApps.
polkadot_ruuntime
Polkadot runtime environment is developed using Rust, C++, and Golang, enhancing adaptability for developers.
Initiate a Conversation with Our Experts

Advantages of Polkadot Blockchain Development
While existing blockchain solutions have empowered communities, certain limitations have hindered their adoption. One significant limitation was isolated blockchain networks. Polkadot's cross-chain communication resolves this by creating a shard network of interconnected chains, unifying them into an integrated ecosystem.

AradChain Technologies's Polkadot blockchain consulting services ensure that enterprise transactions can occur simultaneously across networks and systems. Beyond exceptional communication, this translates to faster response times compared to existing networks.

Benefits at a Glance

Exceptional Security Model

Trustworthy Consensus Algorithm

Transparent On-Chain Governance

Heterogeneous Sharding

Parallel Processing

Enhanced Scalability

Community Driven

Cross-Chaining

Connect on WhatsApp Connect on Telegram

Why Choose AradChain Technologies for Polkadot Development?
AradChain Technologies Solutions stands as a prominent blockchain consulting firm with an impressive clientele across various sectors. With over 100 successful blockchain implementations, Polkadot has naturally become our immediate focus. We firmly believe that Polkadot's significantly improved transaction throughput rates and smart contract functionalities will position it among the top 3 blockchain networks globally.

As DeFi continues to grow, Polkadot emerges as a pivotal factor in network infrastructure readiness for inter-blockchain communications. This trend, pioneered by Polkadot, will likely be adopted by other blockchains in the near future.

At AradChain Technologies, we amalgamate our blockchain expertise with hands-on experience in constructing full-scale blockchains, achieving scalable and secure Polkadot development solutions.

Polkadot Blockchain Development
Meaningful Outcomes
We generate tangible impact, ensuring you derive value from your investments.

Rapid Development
Our customized products cater to your target audience. A cohesive roadmap ensures swift development and deployment.

Complete Support
Our commitment extends beyond product launch. We offer comprehensive post-delivery services so you can concentrate on growth.

Expert Team
Our team of 500+ experts assists in refining your offerings, suggesting optimal tech approaches, and facilitating community setup and campaigns.

By partnering with AradChain Technologies Solutions, you can rely on a team of financial and technical experts who can assist you in rapidly launching your crypto wallet.

Engage Our Services
Highlighted Blogs
Explore our blog for insights into blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.

Metaverse in the Manufacturing Industry: Role and Future Prospects
The concept of the Metaverse needs no introduction, as it has seamlessly woven itself into our lives. The relentless surge in its...
READ MORE

AI Empowers NPCs: Breathing Life into the Metaverse
Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies...
READ MORE

Getting Started with White Label Crypto Banking Platform
When opportunity knocks, we seek quick and easy ways to leverage it. In the domain of cryptocurrencies and blockchain...
READ MORE

Our Blockchain Tech Expertise
We are available for a friendly chat to discuss your business needs, without obligation.

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
