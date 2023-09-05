import React from "react";
import style from "./mME.module.css";
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
              <h2>Metaverse Events</h2>
            </div>
            <div>
              <p>
              Crafting and Capitalizing on Your Metaverse
With hands-on experience in building immersive metaverse platforms across various industries and events, we bring real-world expertise to your vision.

REQUEST FREE DEMO
a;;l;m

About AradChain Technologies Fest
AradChain Technologies Fest is an innovative virtual space event where organizations can host engaging virtual events, foster employee interaction, and showcase proofs of concept. It extends beyond specific occasions, offering lifelike experiences to all participants involved.

AradChain Technologies has already pioneered the concept of enjoying festivals and events within the metaverse, setting a new standard for virtual celebrations.

              </p>
              <p>
              CONTACT US
Metaverse Events Expertise
AradChain Technologies excels as a seasoned creator of metaverse events. Beyond business solutions, we orchestrate virtual festivals, provide remote healthcare, organize expos and exhibitions, and introduce meta-shops through our specialized skills.

Dive into Immersive Possibilities
The metaverse is vast, brimming with diverse use cases. We can seamlessly integrate the metaverse into healthcare, fitness, education, manufacturing, industrial training, gaming, sales and marketing, as well as facilitate the organization of social and corporate metaverse events, among much more.

EXPLORE THE METAVERSE
Empowering Positive Change
AradChain Technologies's technical prowess transforms virtual gatherings into imaginative worlds, where avatars gather in a festive atmosphere, interacting with fellow metaverse participants. Embark on your journey with us today!

a;;l;m
A Closer Look at the Metaverse
At AradChain Technologies, our proficient experts in blockchain and metaverse development possess the knowledge to seamlessly blend virtual and augmented reality. We create a captivating immersive experience within the 3D realm of the internet.

CONNECT NOW
a;;l;m
Our Collaborations
Our Valued Clients
Frequently Asked Questions

The concept of the metaverse has been gaining traction online, each time bringing forth varying explanations. In simplified terms, the metaverse represents the internet's next evolution – an emerging 3D digital realm that leverages augmented reality, virtual reality, artificial intelligence, and other advanced internet technologies to replicate real-life experiences without the need for physical presence.

Our Expertise in Blockchain Technology
We're here for a friendly chat about your business needs, with no obligations.

We are committed to assisting you by offering technical support. Feel free to reach out with inquiries or requests.

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
