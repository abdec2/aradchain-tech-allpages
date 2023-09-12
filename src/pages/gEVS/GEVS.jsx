import React from "react";
import style from "./gEVS.module.css";
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
              <h2>E-Voting System</h2>
            </div>
            <div>
              <p>
              Blockchain-Powered E-Voting Solution for the Public Sector
Enhance data management through decentralized, blockchain-based data storage systems for the public sector.

CONNECT WITH OUR EXPERTS

Voting systems play a pivotal role across various domains and levels, from selecting a school prefect to electing a nation's leader. While digital voting methods have emerged to overcome challenges of paper balloting, a single flaw in this system can lead to significant vote manipulation. Embracing a decentralized voting system with blockchain technology offers a secure avenue for preserving the sanctity of the voting process, ensuring privacy, security, and integrity.

Significance of Blockchain in Electronic Voting Systems
Blockchain's distributed nature, spread across multiple nodes, eliminates single points of failure. This inherent resilience shields blockchain-based voting systems from cyberattacks, denial of service incidents, and database deletions. Notably, blockchain's data immutability is pivotal in the voting ecosystem. Once a record is established, any alteration attempts are traceable, rendering tampering with voting results practically impossible.

Governments can leverage blockchain to streamline the balloting process, minimizing human intervention. This not only expedites vote counting but also mitigates fraud risks and human errors. Compared to other contemporary e-voting solutions, blockchain-based balloting platforms offer enhanced result verification and audit capabilities.

CONNECT WITH OUR EXPERTS

              </p>
              <p>
              Challenges in Government Voting Systems
Elections hold immense significance in democracies, shaping a country's trajectory. Trusted election systems remain a critical concern for major democracies like the US, India, and Japan, grappling with societal skepticism. The public sector faces several issues in the realm of voting systems:

Mask Group 69065
Security Vulnerabilities
Current voting systems are susceptible to hacking and manipulation, endangering the election outcome's integrity.
Mask Group 69066
Transparency Gap
Some voting systems lack transparency and auditability, raising doubts about the accuracy of vote counting.
Mask Group 69067
Voter Exclusion
Certain voting methods hinder certain groups from voting, including disabled individuals, rural residents, and those unable to leave work for polling.
Group 72526
Obsolete Technology
Outdated technology leads to lengthy queues, delayed results, and other complications.
Mask Group 69069
Partisan Influence
Some voting systems exhibit bias favoring a particular political party, eroding public faith in the electoral process.
Mask Group 69070
Misinformation
Rising misinformation through social media can undermine the legitimacy of election results.
Mask Group 69071
Lack of Standardization
Different jurisdictions employ disparate voting systems, leading to confusion and inconsistencies.
Mask Group 69072
Absence of Contingency Plans
Some systems lack contingency strategies for emergencies, such as natural disasters or cyberattacks.
CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Advantages of Blockchain in Electronic Voting Systems
Utilizing blockchain for electronic voting can bolster election accuracy, security, accessibility, and trust, while reducing costs. Here are some solutions offered by a blockchain-powered voting system.

Mask Group 69073
Decentralization
Distribute voting records across multiple nodes, preventing tampering, fraud, and manipulation by avoiding single-entity control.
Mask Group 69075
Transparency
Provide a transparent and tamper-proof record of each vote, enabling anyone to verify election results.
Group 74318
Security Reinforcement
Blockchain safeguards election outcomes from external interference.
Mask Group 69076
Accessibility
Craft inclusive voting systems accessible to all, irrespective of location or ability, elevating voter turnout and inclusivity.
Mask Group 69080
Efficiency Boost
Streamline voting by reducing manual vote counting, ensuring swift and precise results.
Mask Group 69081
Smart Contracts
Deploy self-executing smart contracts to automate and enforce voting rules, enhancing efficiency and transparency.
Mask Group 69079
Immutable Audit Trail
Create a tamper-proof, transparent record of the complete voting process, instilling trust in the results.
Why AradChain Technologies for Building a Secure Blockchain Voting System?
Collaborate with us to design and develop a customized blockchain-based voting system tailored to your government's specific needs. Integrate a blockchain solution that aligns with existing government infrastructure. Our comprehensive training and support services empower government officials and staff to effectively employ blockchain-based voting systems.

Our Partners
Our Clients
Blogs at a Glance
Seek insights into blockchain, cryptocurrencies, NFTs, metaverse, and associated technologies? Read our blog for enlightening perspectives!

Metaverse in Manufacturing Industry: Role and Future Prospects
The "Metaverse" requires no introduction, as it's woven into our lives. This article explores the metaverse's role in the manufacturing industry.
READ MORE

Empowering NPCs in the Metaverse with AI
Blockchain, metaverse, and AI are 21st-century innovations. Learn how AI empowers NPCs in the metaverse, enriching user experiences.
READ MORE
Getting Started with White Label Crypto Banking Platform
Unlock opportunities in crypto banking. This guide helps you explore the steps to get started with a white-label crypto banking platform.
READ MORE
Our Blockchain Expertise
We're here for a friendly chat about your business needs, without obligation. Our goal is to provide technical support, open to inquiries and requests.

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
