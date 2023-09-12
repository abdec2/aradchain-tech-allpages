import React from "react";
import style from "./bfsiCDBC.module.css";
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
              <h2>Central Bank Digital Currency</h2>
            </div>
            <div>
              <p>
              Adopt a Universal Digital Payment Solution for the Digital Age.

CONNECT WITH OUR EXPERTS
Central Bank Digital Currency:
Shaping the Future Monetary Landscape
The fusion of advanced technologies and the emergence of information systems have led to a revolution in the banking and financial domain. Financial institutions are embracing transformative shifts driven by innovative technologies like blockchain.

The rise of Bitcoin and other cryptocurrencies acted as a catalyst for this revolution. The concept of digital currencies has gained significant traction, paving the way for the emergence of central bank digital currencies (CBDCs).

A central bank digital currency (CBDC) is a digital rendition of a traditional fiat currency, integrated into diverse monetary systems to facilitate innovation and serve the public's interest. CBDCs have taken center stage in discussions among governments, central banks, and private sectors, heralded as the future of the digital financial landscape.

Central Bank-Issued Digital Currency:
Transitioning from Concept to Design
The Bank for International Settlements (BIS) has reported that more than 70% of central banks express interest in exploring central bank digital currencies. Initial CBDC trials have showcased their potential to enhance efficiency and transparency in central bank operations. Moreover, CBDCs empower central banks to leverage real-time data, reinforcing their decision-making processes.

              </p>
              <p>
              LAUNCH YOUR CBDC
AradChain Technologies's Expertise in Developing
Central Bank-Backed Digital Currencies
As numerous central banks delve into the possibilities of CBDCs and initiate pilot programs, the demand for central bank-issued digital currency development is on the rise.

At AradChain Technologies Solutions, we offer top-tier solutions for developing digital central bank currencies. Our team of experienced blockchain engineers and subject matter experts chart a clear course for your development journey. Starting with a deep understanding of your specific requirements, we harness blockchain innovation to meet your unique infrastructure needs, address challenges, and realize your strategic vision.

Engage with our subject matter experts to discuss your business plan.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Your Pathway to Successful CBDC Development
STEP 1

Grasp the implications, risks, and opportunities presented by CBDCs.

STEP 2

Devising an intelligent strategy for seamless adoption across both business and technology aspects.

STEP 3

Evaluate, implement, and deploy the core technological infrastructure for central bank digital currency systems.

STEP 4

Strengthen CBDC systems with robust security measures and resilience protocols.

Why Opt for AradChain Technologies for Central Bank Digital Currency Development?Why Choose us
Central Bank Digital Currency Development
Tangible Outcomes
We create measurable impacts, ensuring your investments yield value.
Central Bank Digital Currency Development
Swift Development
We provide tailor-made solutions that resonate with your target audience. A well-structured roadmap expedites the development and deployment process.
Central Bank Digital Currency Development
Comprehensive Support
Our commitment extends beyond product launch. We offer extensive post-delivery services, enabling you to focus on your growth.
Central Bank Digital Currency Development
Expert Team
With over 300 experts, we refine your offerings, suggest optimal tech approaches, and assist in setting up communities and campaigns.
TALK TO US ON WHATSAPP TALK TO US ON TELEGRAM
By joining forces with AradChain Technologies, you gain access to a team of technical experts armed with real-world experience in crafting success stories.

A Glimpse into Our Blogs

Maximizing Profits With Crypto Arbitrage Bot in 2023
As cryptocurrency trading has become increasingly popular, there has been a constant buzz around crypto arbitrage bots. This groundbreaking development empowers traders […]
READ MORE

How to Develop a Poloniex-like Bitcoin Exchange Software
Table of Contents Introduction What is Poloniex? Salient Features of Bitcoin Exchange Software Modeled After Poloniex Setting Up Your Exchange Platform Using […]
READ MORE

From Bland To Brilliant: Building Advanced Crypto Exchange Software in 2023
The onset of 2023 witnessed a robust cryptocurrency market, and as the year progressed, we observed market fluctuations and the entry of […]
READ MORE
Our Proficiency in Blockchain Technology
We are ready for a friendly chat to delve into your business needs, obligation-free.

We are dedicated to offering technical support, open to inquiries and requests.

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
