import React from "react";
import style from "./deFiDLAB.module.css";
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
              <h2>DeFi Lending And Borrowing Platform Development</h2>
            </div>
            <div>
              <p>
              Business-Focused DeFi Lending Platform Development Solutions
In 2020, the DeFi market surged, and by April 2021, the DeFi market's size, assessed by the total locked value, exceeded USD 61 billion. Within this impressive value, DeFi lending and borrowing played a pivotal role.

Around the world, startups and corporations are seizing the chance to tap into the billion-dollar DeFi market by launching their own DeFi lending and borrowing software. If you're a startup or an established enterprise aiming to ride the next DeFi lending wave, AradChain Technologies Solutions is your guiding partner.

We lay out a coherent roadmap to construct a DeFi lending platform fortified with pioneering features. Our fusion of blockchain, finance, and IT expertise empowers us to proficiently deliver high-performance lending platforms aligned with your business objectives.

Connect with our subject matter experts to expedite your DeFi lending platform development journey.

CONNECT VIA WHATSAPP CONNECT VIA TELEGRAM

              </p>
              <p>
              Noteworthy Features of Our DeFi Lending and Borrowing Software
Our DeFi lending software boasts a spectrum of valuable features.

defi-wallet
DeFi Wallet
Our secure DeFi wallet integration empowers borrowers and lenders to deposit crypto assets seamlessly for borrowing and lending. The wallet supports various tokens and stablecoins.
smart-contract
Smart Contract
Complete decentralization is achieved through smart contracts. These automated digital intermediaries manage fund flow, transactions, and calculations on the platform.
liquidity-pool
Liquidity Pool
Funds provided by lenders constitute the liquidity pool, ensuring ample borrowing funds are available on the platform.
dashboard
User Dashboard
Intuitive user dashboards feature self-explanatory controls, facilitating efficient account management for both borrowers and lenders.
risk-management
Risk Management
A meticulously designed risk management system shields lenders from losses if a borrowing account's value exceeds 100% of borrowing capacity due to collateral or asset volatility.
security
Institutional-Grade Security
The platform integrates market-leading security elements, ensuring top-tier safety for borrowers' and lenders' funds.

Leverage our expertise and technical prowess to launch your DeFi lending platform.

TALK TO OUR EXPERTS
Advantages of DeFi Lending Software Development
Embarking on DeFi lending platform development brings forth several benefits:

transparency
Absolute Transparency
efficient
Cost-Effective Process
transactions
Instant Transactions
immutable-records
Immutable Records
automated
Fully Automated Process
globe
Global Outreach

SCHEDULE A FREE DEMO
Why Opt for AradChain Technologies's DeFi Borrowing Software Development
When you choose AradChain Technologies, you enlist a team of finance and technical experts seasoned in creating tangible successes.

technical
Technical Prowess
Our domain is Blockchain technologies, and we excel in it.
expert-team
Expert Team
Our 500 experts help refine your offerings, suggest optimal tech strategies, and even assist in community setup.
create defi exchange
Agile Development
Customized products tailored to your audience, with a well-structured roadmap ensuring smooth and swift development.
complete-support
Comprehensive Support
Our commitment extends past launch, providing extensive post-delivery services for your sustained growth.
Dex exchange script
Meaningful Outcomes
We guarantee tangible impact, ensuring you see the value of your investment.

CONNECT VIA WHATSAPP CONNECT VIA TELEGRAM
Frequently Asked Questions

1How does DeFi lending and borrowing differ from traditional lending and borrowing?
In traditional lending and borrowing, intermediaries oversee platform activities. In DeFi lending platforms, third-party involvement is eliminated.
2Who holds control over decentralized borrowing and lending platforms?
3Can I replicate a renowned DeFi lending platform?
4What are the costs associated with building a DeFi lending platform?

Explore More in Our Blogs
Safeguarding DeFi Profits Guide to Private Key Security
Navigating DeFi Safely: 9 Ways to Protecting Your Private Keys and Securing Your Financial Future
While the cryptocurrency, blockchain, and DeFi developments present exciting opportunities, they also highlight the paramount importance of safeguarding private keys to ensure […]
READ MORE
Future of DeFi ZKP-based Apps
Zero Knowledge Proof-Based Applications Are the Future of DeFi
Decentralized Finance development (DeFi) has disrupted the financial sector, offering a trustless and transparent alternative to traditional financial services. However, the DeFi landscape […]
READ MORE
Popular Use Cases of DeFi
Top 12 Use Cases of DeFi
Decentralized Finance development (DeFi) has taken the financial world by storm, revolutionizing traditional financial services and offering a plethora of innovative use […]
READ MORE
Our Proficiency in Blockchain Technology
Feel free to engage us in a friendly chat to discuss your business needs, without any obligation.

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
