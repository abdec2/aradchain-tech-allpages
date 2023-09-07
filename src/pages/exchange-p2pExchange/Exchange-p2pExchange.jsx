import React from "react";
import style from "./exchange-p2pExchange.module.css";
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
      <div className={`${style.mainSectionContainer} ${style.customContainer}`}>
        <div className={style.headerContainer}>
          <img src={map} alt="" />
          <h2 style={{ color: "white", marginTop: "-50%", fontWeight: "900", marginLeft: "-3px" }}>
          Security Token Exchange Development
          </h2>
        </div>
        <div className={style.mainSectionContent} style={{ marginTop: "-0.5px" }}>
          <p>
            
    <p>
        Development of Secure Token Exchange Platforms Security tokens are revolutionizing the landscape of fundraising. As a catalyst for legally compliant fundraising, security tokens are rapidly gaining popularity, widespread traction, and global acceptance. With the increasing demand for security tokens, the imperative need for a robust security token exchange platform to facilitate the trading of these tokens emerges. A security token exchange operates within the realm of Alternative Trading Systems (ATS), regulated as broker-dealers. ATS platforms provide a marketplace that connects buyers and sellers of securities. Our proficiency in technology, IT management, and blockchain positions us as a reliable security token exchange development company. Our adept team of blockchain developers possesses expertise in every facet of STO exchange development – encompassing design, functionality, security, performance, and SEC compliance. Our well-structured roadmap, combined with strategically aligned activities, expedites the deployment process. Embark on your STO exchange development journey with AradChain Technologies Solutions to harness an unparalleled opportunity to maintain a competitive edge.
    </p>

    <h3 style={{ textDecoration: 'underline' }}>Features Embedded in Our Security Token Exchange</h3>
    <ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
        <li>Robust Matching Engine</li>
        <p>
            Our premier security token exchange platform integrates a robust matching engine capable of efficiently pairing buy and sell orders at lightning speed. This engine accommodates diverse order types, including market, limit, and stop orders.
        </p>

        <li>Hot Wallet Integration</li>
        <p>
            We incorporate a resilient multi-crypto hot wallet into our security token exchange, bolstered by leading security features such as multi-signature support, secure storage, and seamless transactions for various cryptocurrencies.
        </p>

        <li>Multi-layered Security</li>
        <p>
            Each security token exchange we provide is fortified with advanced security solutions, including two-factor authentication, data encryption, SSL encryption, HTTP authentication, anti-Distributed Denial of Service (DDoS) measures, Cross-Site Request Forgery (CSRF) Protection, and more.
        </p>

        <li>API Integration with External Exchange</li>
        <p>
            We establish a secure API connection to an external security token exchange platform to ensure heightened liquidity for your exchange. Liquidity is influenced by the funds deposited in the external exchange's account.
        </p>

        <li>Payment Gateway Incorporation</li>
        <p>
            A payment gateway is seamlessly integrated into our security token exchange, enabling users to transact tokens using fiat currencies through credit cards, debit cards, and other payment systems, enhancing the overall user experience.
        </p>

        <li>Multi-currency Transactions</li>
        <p>
            Our scalable security token exchange platform effortlessly accommodates the integration of multiple cryptocurrencies as per your business requirements. Additionally, the exchange supports a plethora of fiat currencies.
        </p>

        <li>Multi-language Support</li>
        <p>
            The incorporation of multi-language support expands the global reach of your STO exchange platform. Integration with major languages like English, Russian, French, Spanish, Arabic, and more ensures seamless communication.
        </p>

        <li>KYC and AML Verification</li>
        <p>
            Geographically oriented KYC protocols facilitate secure user identity verification, ensuring only legitimate and authenticated users gain access to your security token exchange.
        </p>

        <li>Trustworthy Escrow System</li>
        <p>
            A secure, smart-contract-based escrow system facilitates direct trading between users, automating and expediting payment processing.
        </p>
    </ul>

    <h3 style={{ textDecoration: 'underline' }}>Frequently Asked Questions</h3>
    <ol style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
        <li>How does a security token exchange function?</li>
        <p>
            STO trading platforms enable users to buy and sell security tokens. These platforms cater to both primary and secondary markets, offering services such as STO issuance, functioning as hybrid issuance and trading platforms in the primary market.
        </p>

        <li>What role does the broker-dealer component play in an STO exchange?</li>

        <li>In what ways can STO impact the global landscape?</li>
    </ol>

    <h3 style={{ textDecoration: 'underline' }}>Our Proficiency in Blockchain Technology</h3>
    <p>
        We're available for a friendly conversation to discuss your business requirements, without any obligation.
    </p>
    </p>
                    
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
    {/* Our Team */}
    <div className={style.ourTeamSection}>
      <div className={style.ourTeamContainer}>
        <h1>Our Team</h1>
        <p>The passionate people who drive our projects in Aradchain Technologies.</p>
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
