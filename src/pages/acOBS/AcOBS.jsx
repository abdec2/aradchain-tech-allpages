import React from "react";
import style from "./acOBS.module.css";
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
              <h2>Our Brand Story</h2>
            </div>
            <div>
              <p>
              We Are AradChain Technologies:
Our Brand Narrative
This Is Our Expression.
Our brand goes beyond just a logo; it embodies the connection between people and our services.

Our Logo as our Emblem
It signifies us. When used correctly, it's instantly recognizable and serves as our flag.

              </p>
              <p>
              We Are AradChain Technologies – Our Brand Story
Initial Inspiration
A new era.
A new generation.
New technologies.
Fresh business models.
A new perspective.
Our Brand Identity
This chain of 'new' elements inspired us to infuse our fresh vision into our brand identity. Blockchain forms the DNA of the new AradChain Technologies, so we began with the foundational concept: everything for us is akin to a block. Thus, all our creative brainstorming centered around the term 'Block'.

The Process
The new AradChain Technologies logo embodies transformation, progress, and a brighter future. To encapsulate the essence of blockchain, we played with the letter "t" in "AradChain Technologies," forming a chain of two blocks. These two blocks are presented in a simple yet elegant design that will remain impactful over time and instantly recognizable.

Sketching and Concept Exploration
Typography & Concept Development

Our Color Palette
Embracing a more vibrant language in our brand communications, AradChain Technologies Blue serves as our primary color, used only when the brand palette isn't applicable. We've chosen a vibrant sky blue to represent trust, and a deep blue to symbolize the bold, youthful personality of our brand.

Deep Blue*
#002341
R0 G35 B65
C100 M83 Y45 K51

Vivid Sky Blue*
#0f9bd8
R15 G155 B216
C76 M24 Y0 K0

White*
#ffffff
R255 G255 B255
C0 M0 Y0 K0

The Final Logo
Our Brand Identity
Exclusion Zone
The exclusion zone for both the logo and icon is equivalent to half the height of the icon (indicated as × in the diagram).

Our Brand Identity
Minimum Size
Specifying a minimum size ensures that the logo's impact and legibility remain uncompromised in various applications.

The AradChain Technologies logo should never be smaller than 184px in digital or 65mm in print.

The AradChain Technologies icon should never be smaller than 52px in digital or 18mm in print.

In Advertising
The visual identity ensures a consistent look across diverse advertising channels.

In Advertising
Conceptual Design for Potential Brand Application

In Advertising
Decentralizing
The Globe

Join Us
Collaborate with us to harness your expertise in groundbreaking technology.

SEARCH JOB OPENINGS

Stay Informed
Stay updated with the latest developments in the realm of cryptocurrencies.

CONTACT US

Newsletter
Explore our journey of accomplishments through our newsletter subscription.

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
