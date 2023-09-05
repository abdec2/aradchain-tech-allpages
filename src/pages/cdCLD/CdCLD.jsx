import React from "react";
import style from "./cdCLD.module.css";
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
              <h2>Crypto Launchpad Development</h2>
            </div>
            <div>
              <p>
              Accelerate Your Cryptocurrency Launchpad Development Journey
The anticipation of widespread cryptocurrency adoption by 2022 has paved the way for innovative solutions that cater to investors. One such solution is the cryptocurrency launchpad, which has revolutionized the fundraising landscape. This platform empowers blockchain-based projects to initiate fundraising efforts for their expansion. Being part of the booming crypto industry, a cryptocurrency launchpad offers opportunities to tap into new revenue streams.


AradChain Technologies, a leading player in the field, offers comprehensive cryptocurrency launchpad development services. Our seasoned blockchain engineers and subject matter experts collaborate to expedite your time-to-market, ensuring you stay ahead in this dynamic landscape. Leverage our expertise to construct your cryptocurrency launchpad and seize the revenue-generation potential.

TALK TO OUR EXPERTS
Our Range of Cryptocurrency Launchpad Development Services
Our offerings cater to diverse business requirements, providing tailored solutions under one roof.
Group 783
ICO Launchpad Development
We specialize in building ICO platforms based on smart contracts, facilitating seamless token listing and fundraising for projects.
Group 784
IEO Launchpad Development
Our blockchain engineers create customized IEO launchpads tailored to unique business needs, enabling effective fundraising through crypto exchanges.
Group 785
INO Launchpad Development
Embrace the growing trend of Initial NFT Offering (INO) with our expert INO launchpad development services, ensuring exceptional user experiences.
Group 786
IGO Offering Development
Venture into the GameFi realm with our user-friendly IGO launchpad solutions, designed to raise funds for blockchain-based games.
Group 940
IIO Launchpad Development
Capitalizing on the rising popularity of Initial Insurance Offering (IIO), we develop secure and scalable IIO launchpads for insurance market participants.
Group 941
IFO Launchpad Development
Our IFO launchpad development service is dedicated to crafting performance-driven platforms for Initial Farming Offering (IFO) events.
Group 943
IDO Launchpad Development
Enter the world of decentralized projects with confidence through our IDO launchpad development, ensuring scalability and security.
Group 946
ILO Launchpad Development
Fuel your startup's growth with our ILO launchpads featuring Automated Market Maker (AMM) integration and liquidity pool support.
CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Cryptocurrency Launchpad Development: A Win-Win Proposition
Cryptocurrency launchpads have simplified the entry of startups into the crypto arena by revolutionizing fundraising processes. Geographical boundaries are eliminated, enabling businesses to attract investors from around the world. This innovation benefits platform owners as well, opening new revenue streams.

AradChain Technologies facilitates your journey into this innovative space by building tailored cryptocurrency launchpads.

TALK TO OUR EXPERTS

              </p>
              <p>
              Key Features of a Cryptocurrency Launchpad
Our launchpads are equipped with essential features to deliver exceptional performance.
04
Know Your Customer (KYC)
Authenticate businesses and potential investors to ensure legitimate platform access.
Group 947
Multiple Fundraising Methods
Our platforms support various fundraising models, providing flexibility to businesses.
1027836
Crypto Wallet Integration
Secure crypto wallets are seamlessly integrated, ensuring safe transactions and asset storage.
Group 24924
Multi-Tier Staking
Facilitate crowdfunding with multiple staking rounds based on token quantity.
Group 949
Transparency
Boost project visibility for higher investments through transparent platforms.
Group 951
Compatibility
Our launchpads accommodate different blockchain networks, enhancing usability.
Connect with our experts to discuss your requirements.
CONNECT ON WHATSAPP CONNECT ON TELEGRAM

White Label Crypto Launchpad Development
In a rapidly evolving cryptocurrency landscape, the need for platform owners to swiftly enter the market is paramount. AradChain Technologies expedites this process through white label crypto launchpad development services. Our cross-functional team analyzes your business use case and devises a comprehensive roadmap, regardless of the launchpad you require. Our experience, expertise, and domain knowledge ensure your successful entry.

TALK TO OUR EXPERTS
Why Choose AradChain Technologies for Cryptocurrency Launchpad Development
Our team's synergy results in tailored solutions for optimal outcomes.
Technical Proficiency
Benefit from our exclusive focus on blockchain technologies and extensive experience in the field.
Complete Support
We provide post-launch support, allowing you to concentrate on growth after product launch.
Rapid Development
Our rapid development process delivers customized products, meeting your audience's needs.
Meaningful Impact
We ensure tangible value generation from your investments, creating a real impact.
Explore our blogs for further insights.
TALK TO OUR EXPERTS

Insightful Blogs at a Glance

Developing IDO Launchpad Platform On Different Blockchains - A Guide
Discover the steps involved in developing an IDO launchpad platform on various blockchains.
READ MORE

The Importance of Security in IDO Platform Development: A Guide
Learn how to mitigate risks and ensure security in the process of developing an IDO platform.
READ MORE

Exploring the Opportunity of Initial DEX Offering (IDO) Development in 2023
Explore the significance of Initial DEX Offering (IDO) development as a business opportunity in 2023.
READ MORE
Our Blockchain Tech Expertise
We are available for a friendly chat to discuss your business needs, no obligation.

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
