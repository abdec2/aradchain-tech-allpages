import React from "react";
import style from "./ebEnt.module.css";
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
              <h2>Blockchain Solutions for the Media and Entertainment Industry</h2>
            </div>
            <div>
              <p>
              Combat Content Piracy and Enhance Visibility in Content Creation and Distribution

Request a Free Demo

Blockchain in Media and Entertainment: Embracing a New Era
The media and entertainment sector is grappling with the commoditization of content and rampant piracy of intellectual property (IP). Today, consumers often access digital content freely, showing reluctance to subscribe to premium services. Moreover, copyright violations further exacerbate the challenges. The rise of new consumption models and streaming subscriptions has only partially addressed revenue leakage. These inefficiencies present a compelling case for blockchain adoption within the industry. Blockchain in media and entertainment can help curtail IP infringement, provide transparency on content ownership, and enable monetization of copyrighted assets through smart contracts.

              </p>
              <p>
              Impact of Blockchain in the Media Landscape
The integration of blockchain in media and entertainment can yield significant transformations by enabling the following:

Empower Copyright Owners
Blockchain minimizes reliance on platform providers, content aggregators, and royalty collection associations, empowering copyright owners.

Decentralize Payments
Blockchain decentralizes payment collection and advertising revenues, resulting in cost-efficient transactions and automated revenue distribution through smart contracts.

Enhance Transparency
The decentralized nature of blockchain enhances transparency by tracing the provenance and lifecycle of assets.

Harness the potential of blockchain for the entertainment sector and reap the rewards.

Talk to Our Experts

Blockchain Use Cases in the Entertainment Industry
Blockchain in Media
Revolutionize Content Pricing
Blockchain streamlines the distribution and monetization of bite-sized content, empowering copyright owners to monitor material usage and receive fair profits accurately.

Blockchain for Media
Direct-to-Fan Sales
Artists can directly sell digital music or videos to fans, bypassing intermediaries like record labels. Revenues from music streaming, whether from ads or paid content, can be distributed more equitably.

Blockchain Development for Media and Entertainment
Efficient Royalty Distribution
Blockchain optimizes royalty distribution, offering a music directory with digital music files linked to content creators' identities. Smart contracts define artist compensation and sales proceeds distribution.

Blockchain in Media & Entertainment
Consumer-to-Consumer Sales
Blockchain's transparency facilitates peer-to-peer content distribution, creating new business models like consumer-to-consumer content marketing. Legally sharing paid content generates extra revenue for copyright holders.

Blockchain for the Entertainment Industry
Seamless Content Consumption
Blockchain streamlines DRM (Digital Rights Management) systems, tracking transactions and consumption on the blockchain and automatically initiating payments as per smart contract terms.

What's Your Business Use Case? Connect with our subject matter experts to transform your use case into a remarkable product.

Connect on WhatsApp
Connect on Telegram

Why Choose Us for Blockchain Development in Media and Entertainment
Partnering with AradChain Technologies guarantees access to a team of technical experts with hands-on experience in delivering comprehensive blockchain solutions.

Technical Prowess
We are exclusively dedicated to blockchain technologies, excelling in this field.

Expert Team
Our team of 500+ experts refines your offerings, recommends optimal tech strategies, and supports community and campaign setups.

Rapid Development
Tailored products for your target audience. A coherent roadmap ensures smooth and accelerated development and deployment.

Complete Support
Our commitment extends beyond product launch. We offer extensive post-delivery services to allow you to concentrate on growth.

Meaningful Outcomes
We create tangible impacts, ensuring value generation from your investments.

Explore Our Blogs
Explore our blog for insights into blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.

Blockchain & AI: Top Use Cases and Barriers to AI Adoption

Explore Emerging Blockchain Use Cases in Real Estate

Blockchain Development for the Beauty Industry: A Boon or Bane?

Our Blockchain Tech Expertise
We're here for a friendly chat to discuss your business needs, obligation-free.

Count on us for technical support, inquiries, and requests.

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
