import React from "react";
import style from "./nftSFT.module.css";
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
              <h2>Semi Fungible Token Development Services</h2>
            </div>
            <div>
              <p>
              Semi-Fungible Token (SFT) Development
The concept of a semi-fungible token (SFT) brings together the attributes of both fungible and non-fungible tokens, adding an intriguing layer of complexity. An SFT retains its fungibility until a specific purpose demands otherwise. AradChain Technologies offers comprehensive SFT token development services, allowing you to represent multiple tokens within a single smart contract.

Why Opt for SFT Development Services?
NFTs revolutionized digital asset ownership representation, providing immutability, transparency, and security. However, transferring an entire collection of NFTs can be slow and inefficient. This led to the emergence of the SFT standard, enabling the creation of multi-token platforms.

By choosing to develop semi-fungible tokens, batch token transfers become streamlined as SFTs support both fungible and non-fungible tokens within one contract. This not only reduces gas fees but also simplifies token management.

With AradChain Technologies's SFT token development, individuals such as artists, gamers, and brands can leverage SFTs to consolidate various tokens into a single contract. This not only saves costs but also streamlines token administration.

TALK TO OUR EXPERTS

AradChain Technologies’s Semi-Fungible Token Development Services
Our SFT development employs the ERC-1155 multi-token standard, enabling each token ID to represent a distinct token type with configurable attributes.

              </p>
              <p>
                
Key features of our SFT development services include:

Create tokens with a mix of fungible and non-fungible attributes.
Each token carries attributes like token ID, token count, and metadata.
Professional methodology for end-to-end SFT token development.
Leverage our expertise and services to realize your semi-fungible token vision.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Advantages of Semi-Fungible Token Development
Benefits for Token Holders

Effortless management of fungible and non-fungible tokens.
Even bundled tokens under a single smart contract can be unbundled and traded separately.

Benefits for Token Creators

Facilitates open, user-friendly, and cost-effective minting.
Only a single smart contract is needed to govern both fungible and non-fungible tokens.

Why Choose Us for Your Semi-Fungible Token Development
Collaborate with AradChain Technologies to access a team of technical experts with real-world experience in achieving success stories.

Technical Proficiency

We specialize exclusively in blockchain technologies, excelling in our focused domain.

Expert Team

Our team of 500 experts refines your concepts, suggests optimal tech strategies, and aids in community building and campaigns.

Rapid Development

Our tailored products are designed for your target audience. A well-structured roadmap ensures swift and efficient development and deployment.

Complete Support

Our commitment extends beyond product launch. Comprehensive post-delivery services empower you to focus on growth.

Meaningful Outcomes

Our impact is tangible; we ensure your investments yield visible value.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

A Glimpse of Our Blog Content
NFTs: Key to Effortless Digital Identity Management
NFTs and Digital Identity: Fostering Trust for a Smarter Future
In a digital era dominated by interactions, the significance of digital identity has never been more pivotal. Explore how Non-Fungible Tokens (NFTs) stand as a robust solution for secure and efficient digital identity representation.
READ MORE

Crafting Tomorrow's NFT Marketplace: Delving into Advanced Features
Advanced Attributes of Next-Gen NFT Marketplaces
In the ever-evolving realm of blockchain technology and digital assets, Non-Fungible Tokens (NFTs) have seized the spotlight. Uncover the advanced features that empower next-generation NFT marketplaces to provide a unique user experience.
READ MORE

Expense Considerations for Crafting a White Label NFT Marketplace
Cost Analysis: Developing a White Label NFT Marketplace in 2023
Amid the swiftly expanding universe of non-fungible tokens (NFTs), white label NFT marketplaces hold substantial significance due to their adaptability and potential. Explore the cost factors involved in establishing such a platform.
READ MORE

Our Blockchain Expertise at Your Service
Feel free to engage in a friendly conversation to explore your business requirements, with no obligations attached.

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
