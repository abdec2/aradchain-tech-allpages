import React from "react";
import style from "./bd-BGD.module.css";
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
              <h2>Blockchain Game Development</h2>
            </div>
            <div>
              <p>
              Blockchain Game Development Firm Crafting highly immersive gaming environments for an engaging user experience.
Pioneering Blockchain Game Development With more than a decade of experience, our team boasts innovative ideas, formidable skills, and a wealth of real-world expertise in delivering exceptional gaming experiences. We leverage the latest blockchain tools to create exhilarating games that have the potential to disrupt the market.
Whether your goal is to launch a console game, a desktop game, or venture into mobile game development, harness our mission-driven blockchain game development services to achieve your objectives.
Dominate the gaming industry with a formidable game designed by our seasoned professionals.
              </p>
              <p>
              Our Services in Cryptocurrency Game Development A single concept is all it takes to fashion a new virtual realm. Our video game development company merges cutting-edge tools with comprehensive services to transform your idea into a reality.
Blockchain Game Consultation Our team of specialists provides consulting services in blockchain game development, facilitating a smooth transition for newcomers to the world of blockchain gaming.
Unity 3D Game Development Capitalizing on the potential of Unity, we create extraordinary games that offer deeply immersive 3D experiences, as 60% of AR/VR content and 50% of mobile games are powered by Unity.
Unreal Engine 5 Games Our blockchain game developers breathe life into incredibly immersive and realistic interactive experiences by constructing expansive worlds with greater freedom and flexibility.
2D/3D Game Development Backed by years of experience and expertise, our proficient blockchain game designers deliver 2D/3D games featuring exceptional gameplay, art design, and graphics.
Metaverse Game Development We craft a diverse range of games for the expansive metaverse world, encompassing themes such as play-to-earn, move-to-earn, player-vs-player, and more.
Game Maintenance Services Our comprehensive game maintenance and upgrade services ensure uninterrupted, error-free gameplay for the titles we develop.
Explore the Real-World and Virtual World Connection with Web3 Game Development Our track record encompasses the creation of immersive digital experiences across various industries. Our designers and developers collaborate to construct digital worlds that hold greater meaning than reality itself.
From simple card games to complex combat games with weaponry and assets, or digital twin cities where players can perform tasks and monetize them, we bring every concept to life.
The Finest Games Crafted by Premier Game Developers The games listed below are just the tip of the iceberg. We possess the expertise to build any game, be it for the web, mobile, or consoles.
Metaverse in Real Estate Connect with our experts to discuss your game concept.
Explore on WhatsApp Explore on Telegram Technologies Utilized by Our Cryptocurrency Game Development Company
Blender
After Effects
Substance Painter
Unity 3D
Unreal Engine 5
Why Choose Us as Your Gaming Software Development Company Actions speak louder than words! Here's what sets us apart as a trusted name in blockchain game development.
Technical Proficiency Expert Team Swift Development Comprehensive Support Meaningful Outcomes
Our Partners Our Clients Frequently Asked Questions
How does blockchain technology enhance gaming experiences? Blockchain-based gaming offers benefits like true ownership of in-game assets, interoperability, transparent and secure transactions, and play-to-earn opportunities.
What are the advantages of integrating blockchain into game development?
Which blockchain platforms are commonly used for game development?
How can blockchain games ensure fairness and prevent cheating?
A Glimpse of Our Blog Posts
Carbon Credit Platform Development
Blockchain in the Beauty Industry
Custom AI Blockchain Development
Our Blockchain Technology Expertise We're available for a friendly chat to discuss your business needs, with no obligations.
Our dedicated team is eager to assist you by providing technical support, and we welcome your inquiries and requests.
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
