import React from "react";
import style from "./ebCC.module.css";
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
              <h2>Blockchain-Powered Carbon Credit Platform Development</h2>
            </div>
            <div>
              <p>
              Empower transparent, accessible, and standardized carbon markets.
Carbon Credits: Addressing Climate Change Impact
Amid growing concern over climate change, carbon credits are gaining popularity as tools to mitigate impact. These credits incentivize the fossil fuel industry to improve efficiency.

A carbon credit is a tradeable permit allowing emission of one ton of carbon dioxide or equivalent greenhouse gases.

However, the current carbon offset market is inefficient. Credits are predominantly sold in bulk to large corporations, hindering smaller groups or individuals from offsetting their impact.

Blockchain: Transforming Carbon Offsetting Challenges
Blockchain, a distributed ledger accessible to all network participants, offers transparency. This transparency can revolutionize carbon credit trading by aggregating small buyers and ensuring transparency.

The blockchain-based carbon credit ecosystem is secure, efficient, and ideal for carbon credit markets. The immutable, cryptographically secure ledger ensures reliable issuance and tracking. Public blockchains facilitate small and medium-sized enterprises' access, reducing entry barriers.

              </p>
              <p>
              LAUNCH YOUR CARBON CREDITS PLATFORM

AradChain Technologies’s Expertise: Blockchain-Based Carbon Trading Software
As blockchain streamlines carbon credit development and sales, businesses can seize opportunities in this emerging market.

With expertise in technology and IT management, AradChain Technologies guides you in blockchain-based carbon credit platform development. Our technology-agnostic approach, clear roadmap, and mission-driven solutions accelerate deployment, ensuring a competitive edge.

Leverage our services for successful carbon credit development.

TALK TO OUR EXPERTS

Blockchain-Based Carbon Credit Ecosystem
A comprehensive blockchain-based carbon trading software, encompassing key components for smooth carbon credit creation, distribution, and exchange.

Group 6025
Carbon Credit Token
Blockchain represents carbon credits as digital tokens. These tokens, distributed to consumers (emitters/polluters), facilitate environmental balance.
Group 6027
Secondary Market
A digital marketplace or carbon credit trading platform enables carbon credit buy/sell and trading. This exchange offers user-friendly features.
Group 6028
Smart Contract
Responsible for token minting, burning, distribution, and facilitating buy/sell and trading on the carbon credit exchange.

LAUNCH YOUR CARBON CREDITS PLATFORM

Why Choose Us for Blockchain Carbon Credit Platform Development
Partner with AradChain Technologies for a team of technical experts with real-world success stories.

Group 6030
Technical Expertise
Exclusive focus on Blockchain technology for optimal results.
team
Experienced Team
A team of 500 experts aids your journey from ideation to execution.
Group 6029
Rapid Development
Customized products aligned with your audience, ensuring swift deployment.
Group 6031
Complete Support
Post-launch services for your continued growth.
outcomes
Tangible Outcomes
Evident impact, ensuring value from investments.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Our Partners
Our Clients
Frequently Asked Questions

Blockchain's benefits in the carbon credit market:

Enhance carbon trading efficacy and transparency
Efficiently track the carbon market
Streamline and expedite carbon trading
Facilitate peer-to-peer renewable energy trading
Eliminate double counting
Explore Our Blogs
White Label Crypto Wallet
Navigating White Label Crypto Wallet Development Costs
Table of Contents Introduction Unveiling White Label Crypto Wallets In-Depth Market Analysis Advantages of White Label Crypto Wallet Solutions Explore the Complete […]
READ MORE
White Label Digital Identity Wallet
Diving into White Label Digital Identity Wallets
Table of Contents: Introduction Digital Identity Solutions in Detail Key Business Advantages of White Label Digital Identity Wallets The Importance of Digital […]
READ MORE
mobile wallet app development
Enhancing User Experience with Mobile Wallet App Development
Table of Contents Introduction to Mobile Wallet Apps Current Market Trends - Mobile Crypto Wallet Apps Reasons for Businesses to Invest in […]
READ MORE
Our Blockchain Expertise
We're here to support your business needs, providing technical assistance and responding to inquiries.

Feel free to reach out for a friendly conversation. No obligation

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
