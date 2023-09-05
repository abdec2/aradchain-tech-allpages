import React from "react";
import style from "./deFiDL.module.css";
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
              <h2>DeFi Lottery Platform Development</h2>
            </div>
            <div>
              <p>
              The Imperative for DeFi Lottery System Development
The worldwide lottery industry, worth billions, has been a lucrative realm for both issuers and participants since its inception. This extensive potential has garnered considerable attention globally. Evolving from offline formats to digital platforms, the lottery sector has adapted over time.

However, the traditional lottery landscape suffers from inefficiencies that erode trust between players and platform operators. Centralized in nature, the conventional lottery lacks transparency in all phases – issuance, purchase, draw, cashing, and fund usage. Further woes include:

defi lottery development
Complex Licensing Procedures
defi lottery platform development
Inability to Offer Substantial Jackpots
defi lottery development
Hidden Expenses
defi lottery platform development
Heightened Fraud Risk

Blockchain: Revolutionizing the Lottery Landscape
Disruptive blockchain technology and smart contracts offer potential solutions to traditional lottery issues.

Blockchain's four core attributes redefine the conventional lottery model:
defi lottery services
Immutable
Blockchain's autonomous nature negates the need for intermediaries.
develop defi lottery system
Trustworthy
Smart contracts manage processes like prize calculation and distribution.
develop defi lottery system
Transparent
Immutable blockchain ledgers secure data on sales, revenue, and performance metrics.
defi lottery services
Democratic
Blockchain frees lottery platforms from government control, yet adheres to regulations and local customs.

Leverage our knowledge and expertise to journey towards a decentralized lottery realm.
TALK TO OUR EXPERTS

Carefully Curated DeFi Lottery Development Services
Optimize your lottery business by migrating processes – from ticket sales to prize allocation – onto the blockchain. Achieve transparency, security, and fraud prevention. At AradChain Technologies Solutions, we offer comprehensive DeFi lottery development services for startups and established firms looking to launch decentralized lottery platforms. Leveraging blockchain's decentralization and tamper-proof properties, along with smart contract automation, we create lottery platforms that enable seamless data sharing, transparent processes, real-time oversight, and trustworthy outcomes. Unlock the business potential of DeFi lottery platforms with our expertise. Expedite your development journey and take the lead.

              </p>
              <p>
              TALK TO OUR EXPERTS
Why Opt for Us to Develop Your DeFi Lottery System
By collaborating with AradChain Technologies, you gain a team of technical experts experienced in creating successful endeavors.

how to build defi app
Technical Expertise
Our sole focus is on Blockchain technologies, and we excel in it.
Defi dapp development
Expert Team
Our team of 500 experts assists in refining your offering, suggesting optimal tech approaches, and even setting up communities and campaigns.
Defi dapp development services
Agile Development
Tailored products for your target audience with a structured roadmap for seamless development and deployment.
Defi dapp development company
Comprehensive Support
Our commitment extends beyond product launch, providing post-delivery services to support your growth.
DeFi Dapps Development Solutions
Tangible Impact
We ensure tangible value creation, making certain you reap the benefits of your investment.
CONNECT VIA WHATSAPP CONNECT VIA TELEGRAM
Insights from Our Blogs
Protecting DeFi Profits: Guide to Private Key Security
Navigating DeFi Safely: 9 Ways to Protect Your Private Keys and Secure Your Financial Future
While the cryptocurrency, blockchain, and DeFi developments present exciting opportunities, they also highlight the paramount importance of safeguarding private keys to ensure […]
 Read more
Future of DeFi: ZKP-based Apps
Zero Knowledge Proof-Based Applications Are the Future of DeFi
Decentralized Finance development (DeFi) has disrupted the financial sector, offering a trustless and transparent alternative to traditional financial services. However, the DeFi landscape […]
 Read more
Popular DeFi Use Cases
Top 12 Use Cases of DeFi
Decentralized Finance development (DeFi) has taken the financial world by storm, revolutionizing traditional financial services and offering a plethora of innovative use […]
 Read more
Our Blockchain Technology Expertise
Feel free to engage in a friendly chat to discuss your business needs without any obligations.

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
