import React from "react";
import style from "./mMAD.module.css";
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
              <h2>Metaverse Application Development</h2>
            </div>
            <div>
              <p>
              Industry-Tailored Solutions
The potential of the metaverse spans various use cases. We offer specialized enterprise-focused solutions to empower businesses to leverage the metaverse.

Metaverse for Gaming
Axie Infinity, a prominent metaverse game, boasts over 1 million daily active users.

The gaming industry has witnessed a transformative shift with the integration of the metaverse. It has unlocked diverse earning opportunities for both business owners and players.

At AradChain Technologies, we deliver top-notch metaverse NFT game development services to assist businesses in embracing the next wave of digital gaming. Whether you seek to create a move-to-earn (M2E) game, player-vs-player (PvP) experience, play-to-earn (P2E) game, or any other concept, our adept metaverse game developers facilitate the creation of a comprehensive metaverse environment.

Seamlessly advance your NFT metaverse game development journey with our expertise.

              </p>
              <p>
              Metaverse for Fashion
In 2021, Gucci introduced The Gucci Garden Experience, selling virtual products, including a digital twin of a Gucci purse, fetching a higher price than its real-world counterpart.

The Fashion industry stands as an early adopter of the metaverse, enabling fashion brands to expand their offerings and reach a global audience.

The Fashion industry stands as an early adopter of the metaverse, enabling fashion brands to expand their offerings and reach a global audience.

Elevate your metaverse venture with our support.

Metaverse for Real Estate
Decentraland, an Ethereum-based user-owned virtual world, saw real estate transactions worth $110 million in the past year.

The metaverse holds immense potential for redefining the real estate market, having already initiated a path of digital transformation. Brands and individuals leverage the metaverse's power to invest in NFT virtual land, transcending geographical barriers.

Our metaverse development company boasts real-world success stories like Decentraland. We offer meticulously tailored services for real estate metaverse development, including NFT land creation, exciting themes, and more.

Launch your NFT real estate metaverse akin to Decentraland, or construct a customized version aligned with your business needs.

Metaverse for Tourism
Prominent companies like Disney are exploring their own metaverse iterations.

Madrid introduced a free, 360-degree virtual tour in English and Spanish in early 2022, enabling prospective visitors to explore popular tourist destinations virtually. This initiative provided a preview of what awaits them in Madrid, enhancing their travel decisions.

At AradChain Technologies, we enable you to embrace the "meta" concept. Whether spotlighting a city's premier tourist attractions or focusing on a single site, we craft a captivating virtual world that offers users a distinct and fully immersive travel experience.

Embark on a virtual journey with us.

Metaverse for Social Interaction
Justin Bieber performed as an "Avatar" in an immersive virtual world. An Indian couple hosted their wedding reception in the metaverse, marking Asia's "first metaverse wedding reception." Samsung conducted a product launch event in the metaverse. Businesses across sectors, as well as individuals, are gravitating toward the metaverse for social interaction.

If you envision an immersive metaverse experience for a business meeting, corporate launch, concert, or any social event, we possess the capability to transform your vision into reality.

CONNECT VIA WHATSAPP CONNECT VIA TELEGRAM
DIGITAL ASSETS
LAND NFTS
MARKETPLACE
DIGITAL CURRENCY
VIRTUAL INFRASTRUCTURE
DIGITAL TWINS
Metaverse Elements
How Our Metaverse App Development Journey Accelerates
We follow a systematic roadmap to guide and expedite your journey into the metaverse.

Theme Selection
Our subject matter experts guide you in selecting the appropriate theme – be it Game, EduTech, Spiritual, and more – based on your business ideas.

Land NFT Creation
Every metaverse project requires land NFTs to host virtual buildings. We develop the necessary land NFTs or any other required NFTs for your metaverse ecosystem.

NFT Marketplace Establishment
Our metaverse engineers construct world-class NFT marketplace platforms, enabling seamless buying and selling of various NFTs.

Storyboard Creation
AradChain Technologies's creative minds design a comprehensive storyboard outlining user journeys and navigation across the platform.

Economic Model
Our professionals provide comprehensive assistance and consulting services to help you understand how revenue will be generated through the metaverse platform.

MVP Delivery
We deliver a minimum viable product (MVP) that undergoes continuous scaling and improvement based on user feedback and technological evolution.

How Our Metaverse Developers Help You Seize Metaverse Opportunities
With over 15 years of technical expertise and a vast range of experience, we bring together over 500 skilled metaverse developers and designers to conceptualize, execute, and accelerate our clients' metaverse journeys.

We develop sophisticated and visually immersive metaverse applications, incorporating blockchain attributes such as user sovereignty, full transparency, enhanced privacy, and automation. As a prominent blockchain metaverse development entity, we provide a bridge between technology and metaverse aspirations.

Audio Player

00:09
01:38

Use Up/Down Arrow keys to increase or decrease volume.
Contact Us
Your Name*

Email Address*

Pakistan 

Phone Number

Message*

Please prove you are human by selecting the Star.

Consult Our Experts
A free consultation awaits to discuss your business needs. No obligations, just a friendly conversation to determine how we can assist you.

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
