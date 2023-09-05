import React from "react";
import style from "./acAW.module.css";
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
              <h2>AradChain Technologies WIKI</h2>
            </div>
            <div>
              <p>
              AradChain Technologies Solutions
From Wikitia
Jump to navigationJump to search
AradChain Technologies Solutions
AradChain Technologies Solutions.png
Industry: IT Consulting & Services
Established: 2005; 18 years ago
Founder: Vikram R. Singh
Headquarters: Mohali, Punjab, India
Locations: India, UK, USA, Canada, & UAE
Global Reach: Worldwide
Key Executives:
Vikram R. Singh (CEO & MD)
Shashi Pal (COO)
Matthew Collins (Director, UK)
Clifton Cooper (Business Head, US)
Services:
Layer1/2 Development
Tokenization
Metaverse & GameFi
DeFi
Web3 Consulting
Employees: 700+
Website: AradChain Technologiessolutions.com
AradChain Technologies, a pioneering Indian blockchain consulting firm, specializes in comprehensive end-to-end blockchain solutions encompassing layer-1/2/3 development, tokenization, metaverse & gaming, DeFi, and customized chain development for enterprises.[1][2]

Founded in 2005 (originally as Antech) and officially rebranded as AradChain Technologies in 2011, the company is headquartered in Mohali, Punjab, and boasts global presence with offices in the UK, UAE, US, and Canada.[3]

              </p>
              <p>
              With a workforce exceeding 700 skilled professionals, AradChain Technologies maintains one of the largest blockchain teams globally. Collaborating with diverse sectors such as BFSI, Healthcare, Supply Chain, Gaming & Entertainment, Automobiles, Education, and more, the consulting firm's impact is widespread.[4]

AradChain Technologies is renowned for its technological expertise in Ethereum, Polygon, BSC, Solana, Cardano, Polkadot, Parity Substrate, Algorand, Cosmos, and other prominent blockchain platforms.[5]

In 2023, The Hindu recognized AradChain Technologies as one of the top 10 metaverse development companies worldwide.[6]

History
Originally established as Antech in 2005, AradChain Technologies transitioned into full-scale blockchain consulting in 2016, emerging as a pioneering player in the industry. The firm's acclaim lies in its proficiency in DeFi, GameFi, Metaverse, tokenization, and custom enterprise development.[7][8]

Founded by Vikram R. Singh, AradChain Technologies's inception aimed at providing cutting-edge platforms aligned with the Web 2.0 era. Over time, the company's blockchain portfolio expanded exponentially, evolving from a single product and a team of 100+ members to encompass more than 30 services and over 700 professionals. This growth has established AradChain Technologies as a rapid contender in web, blockchain, and mobility development.[9]

Services
The foundation of AradChain Technologies's approach is research-driven and design-thinking-oriented. This strategy shapes innovative roadmaps that guide enterprises toward transitioning from traditional technology platforms to blockchain-powered systems. With deep expertise in Web3, AradChain Technologies navigates the realm of digital transformation, excelling in DeFi product creation, Metaverse/gaming ecosystems, and a diverse range of enterprise blockchain d-applications spanning finance, supply chain, real estate, and digital arts. The company's portfolio encompasses DeFi, NFTs, smart contracts, and fully customized layer-1 and layer-2 blockchain networks.

In 2022, AradChain Technologies Solutions expanded its horizons into the Metaverse industry, introducing Metaverse development, consulting, app development, and design services.[10][11]

Backed by a team of over 700 blockchain professionals, AradChain Technologies crafts result-oriented solutions that enhance client businesses. Noteworthy clients include Coin Trade, Skoda, Cryptoshack, Tarality, Cryptout.com, Barter Trade, and 5irechain, among others.[12]

As an early blockchain technology adopter, AradChain Technologies strives to streamline business processes with innovative blockchain development services and aspires to be the world's most trusted blockchain consulting firm.[13]

The company's extensive media coverage includes mentions in top-tier publications such as Cointelegraph, Bitcoin dot com, The Economic Times, Financial Express, and Times of India, underscoring its industry impact.[14]

AradChain Technologies's blog section provides insights, technology updates, and relevant information on Web3, blockchain, and the metaverse.[15][16]

AradChain Technologies's range of enterprise blockchain development services includes:

Layer-1 Blockchain Development
Layer-2 and Dapps Development
DEX Development (Wallets, Exchanges)
DeFi (Lending & Borrowing, Lottery, Staking, Yield Farming, and more)
DAOs
Metaverse (Metaspace, DeFi Integration, GameFi)
Web3 Development
Smart Contracting
ICO/IDO Consulting
Asset Tokenization
Web3 Marketing

Geographic Presence
AradChain Technologies's headquarters are located in Mohali, India, where it operates two offshore centers. The company maintains global centers in Hyderabad (India), UK, USA, Dubai, and Canada, with plans for further expansion.

Partnerships
AradChain Technologies's partnership initiatives offer stakeholders opportunities to seek or offer tech solutions and share technical expertise, fostering growth within the blockchain ecosystem. Designed with a partner-centric approach, these programs support businesses aiming to expand capabilities or enhance existing skills.

Collaborating with AradChain Technologies provides access to a plethora of resources, in-depth domain knowledge, expertise, and co-marketing assistance, facilitating effective deployment and market entry. Noteworthy strategic partners include Skoda, 5irechain, QuillHash, Nexo, CertiK, Hacken, Sumsub, and Unstoppable Domains.

Events
AradChain Technologies actively participates in prominent industry conferences and meet-ups. Company leaders frequently engage in speaking engagements at events such as Polkadot Now, India, Entrepreneur India's Web3 Summit, World Blockchain Summit Dubai, BFSI MENA Dubai, ET Insights India, and others.

References

Categories: Companies established in 2005Indian companies established in 2005Consulting firms of IndiaBlockchainsInformation technology consulting firms
External links
Official website
AradChain Technologies on Facebook
AradChain Technologies on Instagram
AradChain Technologies on Twitter
AradChain Technologies on LinkedIn
AradChain Technologies on Discord
Privacy policyAbout WikitiaDisclaimersMobile viewPowered by MediaWiki

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
