import React from "react";
import style from "./bfS.module.css";
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
              <h2>Substrate</h2>
            </div>
            <div>
              <p>
              Substrate Blockchain Development Overview The Substrate framework is a versatile toolkit designed for creating and constructing blockchain solutions. Crafted using the RUST programming language, it presents a flexible array of tools that expedite the development process by furnishing all the essential layers required for operating the consensus, network, and application components of a blockchain system.
Our team of blockchain developers harnesses the power of the Substrate blockchain framework to construct exceptionally adaptable and future-proof applications, empowering you to disrupt the market. We devise a meticulous plan to propel and hasten your development journey, enabling you to swiftly penetrate the market and attain a crucial competitive advantage.

              </p>
              <p>
              CONSULT OUR SPECIALISTS Our Services in Substrate Development We offer a comprehensive range of services for creating various platforms driven by the Substrate framework.
Mask Group 69085 Interconnected Blockchain Bridge Our experts fabricate robust cross-chain bridges using Substrate's XCMP (Cross-Chain Message Passing) protocol, facilitating seamless exchange of assets and information across multiple blockchains. Mask Group 69086 Integration of Sidechains We possess the capability to integrate an existing Substrate-powered relay chain or dApp to interconnect with other chains or Polkadot, enhancing interoperability. Mask Group 69090 Relay Chain Creation Our specialization lies in constructing highly secure Substrate-based blockchains tailored to specific use cases, ensuring rapid and secure development. Mask Group 69091 Parachain Establishment We hold extensive experience in constructing relay chains and parachains using the Substrate framework and RUST programming language. Our team comprehends each stratum of the framework and its adept utilization for efficient blockchain development. Mask Group 69092 Pallets Crafting Using RUST, we can produce novel pallets within the Substrate framework, ranging from formulating new consensus algorithms to generating NFTs. Our RUST developers boast hands-on proficiency in pallet and relay chain creation. Mask Group 69096 Smart Contract Implementation Leveraging Parity's ink! technology, we craft smart contracts on substrate-based blockchains to execute business logic on a relay chain. Diverse Range of Substrate-based Applications Blockchain Innovations Mask Group 69126 Platforms for Decentralized Finance (DeFi) Mask Group 69127 Systems for Supply Chain Management Mask Group 69130 Voting and Governance Networks Mask Group 69136 Solutions for Identity and Access Management Mask Group 69129 Gaming and Betting Platforms Mask Group 69131 Social Media and Content Sharing Networks Connect with our domain experts to explore how these apply to your business. CONNECT VIA WHATSAPP CONNECT VIA TELEGRAM Our Methodology for Building Substrate Applications We adhere to a structured roadmap to steer the development process and expedite your time-to-market.
Group 85177 Comprehend We comprehend your business prerequisites to discern the envisioned business benefits. Throughout this phase, we closely collaborate with you to explore the initial theoretical and practical implications of the project. Group 85180 Develop Substrate Node This stage encompasses default implementations for fundamental components such as account management, privileged access, consensus, etc. The genesis block can be customized to initiate the chain. Group 85181 Develop Substrate Frame Subsequently, we formulate a Substrate frame, serving as a framework to construct a Substrate runtime environment using existing libraries, while maintaining substantial control over the blockchain's logic. Group 85178 Develop Substrate Core Substrate Core empowers us to integrate our runtime environment aligned with WebAssembly and in accordance with the fundamental principles of Substrate block construction. This runtime can subsequently be employed within the Substrate node. Group 85179 Testing and Deployment Our blockchain engineers conduct both automated and manual tests, encompassing testnet and load tests, to validate the application's performance. We additionally aid in deploying these nodes on public and private networks, ensuring perpetual network activity. CONSULT OUR SPECIALISTS Reasons to Opt for Us as Your Substrate Blockchain Development Partner Partnering with AradChain Technologies provides access to a team of technical experts with real-world expertise in delivering end-to-end blockchain services.
Technical Excellence (1) Technical Proficiency Our exclusive focus lies in Blockchain Technologies. We excel in this domain. 3050431 Expert Team Our team comprises over 600 experts who assist in refining your offering, proposing optimal tech strategies, and even aiding in community and campaign setups. Process Accelerated Development We deliver tailor-made blockchain services to yield exceptional products tailored to your target audience. A coherent roadmap ensures seamless and swift development and deployment. 950299 Comprehensive Support Our commitment extends beyond product launch. We provide extensive post-delivery services, freeing you to concentrate on growth. 1611179 Meaningful Results We effect tangible transformations. Your investments yield discernible value. Our Collaborators Our Clientele Common Queries Addressed
Substrate constitutes a modular framework for expeditious and uncomplicated construction of customized blockchain networks. It furnishes a collection of pre-constructed components, libraries, and tools that facilitate the development and deployment of blockchain networks.
Insight into Our Blogs Tailored AI Blockchain Development Confluence of Blockchain & AI Blockchain & AI: Prime Use Cases and Hurdles to AI Adoption The confluence of Blockchain and AI stands out as a transformative force, influencing businesses across diverse domains. […] READ MORE
Exploring Novel Blockchain Applications in Real Estate The real estate sector burgeons, but remains susceptible to fraudulent activities. Recent statistics suggest […] READ MORE Blockchain Advancements in the Beauty Industry Blockchain's Impression on the Beauty Industry: Boon or Bane? The association between Blockchain and beauty might not be immediate. However, these realms are intertwined in more ways than apparent. […] READ MORE Our Proficiency in Blockchain Technology We welcome cordial conversations to delve into your business requisites, without any obligation.
We earnestly strive to support you through technical assistance. Your inquiries and requests are welcome.



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
