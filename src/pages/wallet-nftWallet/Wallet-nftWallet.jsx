import React from "react";
import style from "./wallet-nftWallet.module.css";
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
              <h2>NFT Wallet Development Company</h2>
            </div>
            <div>
              <p>
              How Secure are Our NFT Wallet Services?
NFTs are renowned for their authenticity, integrity, and immutability, making them impervious to hacking and often utilized as collateral. Security is of paramount importance to our NFT wallet development professionals, who meticulously incorporate it into our solutions. As an esteemed NFT wallet development company, our blockchain experts possess a wealth of domain knowledge and technical expertise. They adeptly craft robust and scalable NFT wallets from the ground up. Moreover, our experts stay abreast of the latest advancements in the crypto sector, seamlessly integrating them into our wallet solutions. Count on us for a comprehensive range of crypto-related services, including NFT wallet development, NFT marketplace creation, NFT desktop app development, and much more. Our globally acclaimed wallet development services testify to our dedication.


Varieties of NFT Wallets
Custodial Wallets (1)
Custodial Wallet
Custodial NFT wallets entrust a third party with storing credentials such as assets, coins, tokens, and private keys on their servers. Users access the wallet by logging in for transactions.

Non-Custodial Wallets (1)
Non-Custodial Wallet
Non-custodial wallets offer users complete control over their funds. Users bear the responsibility of safeguarding their keys and confidential data, without involving third parties.

Hot Wallets (1)
Hot Wallet
Hot wallets, including desktop and mobile apps, facilitate buying, selling, and exchanging NFTs. These NFTs are accessible online, and tampering with the integrated security measures proves challenging.

Distinctive Features of Our White Label NFT Wallet
Support Across Multiple Platforms (2)
Multi-Platform Assistance
As a premier NFT Wallet Development Service provider, we conceive innovative and distinctive NFT wallets, seamlessly integrating them with existing platforms in the decentralized realm.

Cross-Chain Functionality
Cross-Chain Compatibility
Our experts engineer cross-platform applications that can interconnect with various platforms, establishing novel ecosystems rooted in true decentralization.

Compatibility Across Multiple Devices (2)
Device Flexibility
We create NFT wallets catering to both web-based browser extensions and mobile platforms. These wallets are easily usable across various devices.

Enhanced Security (2)
Heightened Security
Rest assured, the NFT wallets developed by our experts are fortified with two-factor authentication, ensuring the utmost security for NFTs.

Integration with Crypto Exchange API (2)
Crypto Exchange Integration
Our NFT wallet can be seamlessly linked with crypto exchanges, broadening its functionality. This synergy enhances transaction flow and user engagement within the wallet.

Fiat Conversion with Credit Card (2)
FIAT Conversion via Credit Card
Our NFT wallet empowers users to acquire NFTs using a FIAT credit card, enabling effortless conversion of FIAT into supported cryptos for NFT purchases.

Our NFT Wallet Development Process
Group 66337
Requirement Analysis
Thoroughly understanding and assimilating application requirements
Assessing feature necessities and implementation criteria
Creating a development roadmap detailing the NFT wallet creation process

Group 66338
Designing
Formulating a Smart Contract application document
Illustrating data flow through diagrammatic representation
Designing the technical architecture of the NFT wallet app
Enforcing data protection and privacy compliance protocols

Group 66336
Development
Utilizing cutting-edge technology to craft applications
Subjecting the NFT app to rigorous testing and audits
Rectifying errors to ensure seamless app performance

Group 66373
Deployment
Launching the NFT wallet onto the main network

Group 66340
Post-Deployment
Continuously updating the application with new features
Prioritizing backlog tasks during the updating process

              </p>
              <p>
              Our Unique Offerings:
password (2)
Robust infrastructure
Cost-effective solutions
Expert development team
password (2)-2
Extensive domain knowledge & experience
password (2)-3
Transparent and reliable processes
password (2)-6
Customizable solutions
password (2)-5
Timely and quality service delivery
password (2)-6
Budget-friendly project options

Why Opt for Our NFT Wallet Development?
AradChain Technologies stands as a dependable IT partner, offering forward-looking and enterprise-grade NFT wallet development solutions. Our unmatched accessibility and support empower enterprises in attaining their objectives.

assistance
Diverse Wallet Offerings
services
Tailored Custom Solutions
team
Seasoned Professional Team
technology
Integration of Cutting-Edge Technologies
respond
Prompt Responsiveness
assistance
Round-the-Clock Support

Our Partners
Our Clients
Frequently Asked Questions

1Is Security Ensured in NFT Wallets?
NFT wallets enjoy heightened security due to their private key-based access, making them resilient to online attacks. Only the authorized private key owner can access the wallet.

2What's the Cost of Developing an NFT Wallet?
3Can Multiple Cryptocurrencies be Stored in an NFT Wallet?
4How Long Does NFT Wallet Development Take?
A Glimpse into Our Blogs
White Label Crypto Wallet
Navigating the Expenses of Constructing a White Label Crypto Wallet
Table of Contents Introduction Exploring the Core Aspects of White-Label Crypto Wallets In-Depth Market Overview Advantages of Opting for White-Label Crypto Wallet Solutions […]
READ MORE
White Label Digital Identity Wallet
Deepening the Understanding of White Label Digital Identity Wallets
Table of Contents : Introduction A Comprehensive Look at Digital Identity Solutions Thorough Market Overview The Business Advantages of White Label Digital […]
READ MORE
Mobile Wallet App Development
Elevating and Empowering User Experience through Mobile Wallet App Development Solutions
Table of Contents Introduction to Mobile Wallet Apps Present Market Insights into Mobile Crypto Wallet Apps Reasons for Enterprises to Invest in Mobile […]
READ MORE
Our Blockchain Tech Proficiency
We're available for a friendly conversation to discuss your business needs, no strings attached.

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
