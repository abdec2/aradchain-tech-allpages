import React from "react";
import style from "./exchange-hybridExchange.module.css";
import crypto1 from "../../assets/crypto1.png";
import crypto2 from "../../assets/crypto2.png";
import data from "../../database/data";
import Whyus from "../../components/whyUs/Whyus";
import AboutStats from "../../components/aboutStats/AboutStats";
import Team from "../../components/team/Team";
import Footer1 from "../../components/footer1/Footer1";
import Needsolution from "../../components/needSolution/Needsolution";
import map from "../../assets/map-pattern-1.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={`${style.mainSectionContainer} ${style.customContainer}`}>
          <div className={style.headerContainer}>
            <img src={map} alt="" />
            <h2 style={{ color: "white", marginTop: "-50%", fontWeight: "900", marginLeft: "-3px" }}>
              White Label Crypto Exchange Development Company
            </h2>
          </div>
          <div className={style.mainSectionContent} style={{ marginTop: "-0.5px" }}>
            <p>
              Hybrid Crypto Exchange Software: Integrating the Strengths of Centralized and Decentralized Exchanges

              Centralized and decentralized exchanges have played significant roles in the cryptocurrency landscape since its inception. Centralized exchanges are known for their high liquidity and fast transaction speeds. On the other hand, decentralized exchanges prioritize anonymity and robust security. However, both types of exchanges face certain drawbacks. Centralized exchanges are vulnerable to hacking and often charge high transaction fees, while decentralized exchanges struggle with handling high-frequency transactions. These limitations have given rise to the concept of a hybrid crypto exchange.

              A hybrid exchange aims to combine the advantages of centralized and decentralized exchanges. This entails offering the high liquidity and rapid transactions of centralized exchanges, coupled with the anonymity and security features characteristic of decentralized exchanges. Given these benefits, hybrid exchanges are garnering attention among traders and businesses aiming to establish their own crypto trading platforms.

              <h3>EMBARK ON YOUR HYBRID EXCHANGE JOURNEY</h3>

              AradChain Technologies’s Expertise in Hybrid Exchange Development

              Whether you're a startup or an established entity planning to launch a hybrid crypto exchange, you can tap into our blockchain expertise, in-depth industry knowledge, and technical proficiency to realize comprehensive development and consulting solutions for setting up your hybrid exchange. We leverage cutting-edge features to bolster your exchange with institutional-grade security and top-tier performance, ensuring an enhanced trading experience for your users.

              Our skilled blockchain engineers and subject matter experts empower you to pivot swiftly and intelligently, enabling you to achieve your business objectives and make a significant impact in the market.

              Reach out to our experts to discuss your business requirements.

              <h3>Key Features of Our White Label Hybrid Exchange</h3>

              Every exchange we deliver comes equipped with industry-leading features to provide a secure and exceptional trading experience.

              <ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
                <li>High Liquidity: Our hybrid exchanges incorporate options such as API connections or market maker integrations to ensure robust liquidity.</li>
                <li>Two-Factor Authentication: A seamless two-factor authentication process enhances security by confirming legitimate user access to the exchange.</li>
                <li>Smart Contract Integration: Immutable smart contracts enable automated verification and seamless processing of transactions.</li>
                <li>Payment Gateway Integration: The integration of multiple secure payment gateways allows users to make payments using their preferred methods.</li>
                <li>User-Friendly Dashboard: An intuitive user dashboard simplifies trading and facilitates fund management for exchange users.</li>
                <li>Robust Admin Panel: An institutional-grade admin panel assists exchange owners in effectively managing user profiles and activities.</li>
                <li>Secure and Swift Transactions: High-performance trading tools integrated into the platform enable secure and rapid transactions.</li>
                <li>Institutional-Grade Security: Security features such as two-factor authentication and KYC help maintain a high level of security for safe and risk-free trading.</li>
                <li>KYC Verification: KYC verification comes into play when large withdrawal amounts are requested, ensuring legitimate transactions.</li>
              </ul>

              Launch your hybrid exchange equipped with advanced features to lead the industry.

              <h3>Your Path to Successful Hybrid Crypto Exchange Development</h3>

              <ol style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
                <li>Understand the business vision and goals</li>
                <li>Plan a coherent roadmap for navigating the development journey</li>
                <li>Evaluate, implement, and deploy core technology infrastructure for the hybrid exchange</li>
                <li>Enhance the platform's security and resilience</li>
                <li>Implement the system and incorporate updates and modifications</li>
              </ol>

              <h3>Why Choose Us for Your Hybrid Cryptocurrency Exchange Development?</h3>

              By collaborating with AradChain Technologies, you gain access to a team of technical experts with practical experience in achieving success.

              <ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
                <li>Technical Excellence: We specialize exclusively in blockchain technologies, ensuring a focused and proficient approach.</li>
                <li>Expert Team: Our team of 500 experts assists in refining your offering, suggesting optimal tech strategies, and aiding in community setup and campaigns.</li>
                <li>Swift Development: We provide tailored products tailored to your target audience. A well-defined roadmap ensures smooth and accelerated development and deployment.</li>
                <li>Comprehensive Support: Our commitment extends beyond product launch. We offer extensive post-delivery services, enabling you to focus on growth.</li>
                <li>Meaningful Results: We create tangible impacts, ensuring your investments yield substantial value.</li>
              </ul>

              <h3>Frequently Asked Questions:</h3>

              A hybrid crypto exchange combines the strengths of both centralized and decentralized exchanges, offering high liquidity and fast transactions from centralized exchanges and the anonymity and security features of decentralized exchanges. Users maintain control of their funds, while an escrow mechanism ensures asset security and stability.

              <h3>A Glance at Our Blog Posts:</h3>

              The Metaverse in the Manufacturing Industry: Role and Future Prospects

              The term "Metaverse" needs no introduction; it's already woven into the fabric of our lives. The continuous surge in its popularity has […]

              Empowering NPCs with AI: Breathing Life into the Metaverse

              Blockchain, metaverse, and artificial intelligence are undoubtedly the standout innovations of the 21st century. These technologies have brought monumental changes to […]

              Exploring White Label Crypto Banking Platforms

              How to Get Started with a White Label Crypto Banking Platform?

              When opportunity knocks, we all look for quick and easy ways to leverage it for a better future. […]

              Our Expertise in Blockchain Technology

              We're here for a friendly chat to discuss your business needs, without
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
