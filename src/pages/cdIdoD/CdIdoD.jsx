import React from "react";
import style from "./cdIdoD.module.css";
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
              <h2>IDO Development Services</h2>
            </div>
            <div>
              <p>
              Streamline Your Initial DEX Offering (IDO) Experience:
The Modern IEO Equivalent
Initial DEX Offering, or IDO, introduces a new dimension to tokenization. It involves the issuance of tokens representing various types of assets on decentralized exchanges (DEX). The scope of IDOs extends to encompass a wide array of assets, ranging from cryptocurrencies to music albums and more.

While resembling Initial Exchange Offerings (IEOs), IDOs take a decentralized approach by eliminating the exchange fee associated with centralized offerings. Unlike IEOs, where tokens are launched on centralized exchanges, IDOs occur on decentralized platforms, removing the need for intermediaries and reducing costs.

AradChain Technologies's Proficiency in IDO Development
Initial DEX Offering has emerged as the preferred method for token distribution and fundraising within the DeFi landscape.

AradChain Technologies stands as a reliable partner, providing comprehensive IDO development services for startups, individuals, and businesses aiming to launch their tokens. Our collaboration between seasoned blockchain engineers and subject matter experts results in a streamlined roadmap encompassing ideation, white paper creation, and token development.

Embark on your IDO journey by sharing your business objectives with us.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

              </p>
              <p>
              Comprehensive IDO Development Services
Our services encompass the entire spectrum of IDO development, ensuring impactful outcomes for your business.
strategy_and_raodmap_icon
Strategic Roadmap Development
We create strategic roadmaps to guide your IDO development journey, ensuring purposeful execution.
white_papper_creation_icon
White Paper Crafting
Our expert team creates compelling white papers designed to captivate investor attention and facilitate market entry.
token_development_icon
Token Creation
Leveraging blockchains like Ethereum and Binance Smart Chain, our experienced engineers develop tokens tailored to your project.
listing_the_token_icon
Token Listing
Our blockchain consultants assist in identifying suitable decentralized exchanges for the launch of your token.
marketing_icon
Marketing Endeavors
With a multi-channel marketing approach, we promote your IDO project across digital platforms, ensuring optimal visibility.
support_icon
Ongoing Support
Backed by a team of blockchain engineers, subject matter experts, and marketing specialists, we offer comprehensive support to ensure a successful IDO launch.
Leverage our expertise and end-to-end services to initiate your Initial DEX Offering.

TALK TO OUR EXPERTS

Benefits of Leveraging an IDO Platform
Unlock a realm of opportunities by harnessing the potential of Decentralized Exchanges (DEX) through IDOs.

quick_trading_icon
Rapid Trading
IDO tokens are tradeable immediately upon launch, allowing investors to purchase tokens from the outset. This immediate trading can lead to token price appreciation and increased owner profits.

immediate_liquidity
Instant Liquidity
IDO tokens' immediate availability encourages instant liquidity, addressing liquidity concerns often faced by new projects. This liquidity boost can further positively impact token prices.

lower_cost_for_listing
Cost-Effective Listing
IDO offers a cost-effective token sale and listing model. The absence of intermediaries, facilitated by smart contracts, minimizes costs associated with the IDO process.

fair_fundraising
Equitable Fundraising
IDO eliminates the need for centralized exchanges, providing equal fundraising opportunities for projects. This decentralized approach ensures fairness and accessibility.

Connect with our experts to explore the potential of IDOs.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Why Opt for AradChain Technologies for Your IDO Development
Experience exceptional services tailored to your needs.
Technical Proficiency
Our deep focus on blockchain technologies and extensive industry experience set us apart.
Meaningful Impact
Our solutions create tangible value, ensuring you realize significant returns on your investment.
Expert Team
With a team of 500+ experts, we guide you in refining your offerings and selecting the optimal tech approach.
Rapid Development
We deliver customized products aligned with your target audience, employing a clear roadmap for swift development and deployment.
Complete Support
Our commitment extends beyond product launch. Post-delivery, we provide comprehensive support, enabling you to focus on your growth.

Empower your IDO journey by partnering with AradChain Technologies Solutions.

HIRE OUR EXPERTISE

Insightful Blog Highlights

Developing IDO Launchpad Platform On Different Blockchains - A Guide
Learn the crucial steps in creating an IDO launchpad platform across various blockchain networks.
READ MORE

The Importance of Security in IDO Platform Development: A Guide
Discover effective strategies for mitigating risks and ensuring security in the IDO platform development process.
READ MORE

Exploring the Opportunity of Initial DEX Offering (IDO) Development in 2023
Explore the potential of Initial DEX Offering (IDO) development as a viable business opportunity in 2023.
READ MORE
Discover Our Blockchain Expertise
We're available for an insightful discussion about your business needs, with no obligation attached.

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
