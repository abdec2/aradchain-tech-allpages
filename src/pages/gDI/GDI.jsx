import React from "react";
import style from "./gDI.module.css";
import crypto1 from "../../assets/crypto1.png";
import crypto2 from "../../assets/crypto2.png";
import data from "../../database/data";
import Whyus from "../../components/whyUs/Whyus";
import AboutStats from "../../components/aboutStats/AboutStats";
import Team from "../../components/team/Team";
import { Link } from "react-router-dom";
import Footer1 from "../../components/footer1/Footer1";
import Needsolution from "../../components/needSolution/Needsolution";
import map from "../../assets/map-pattern-1.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card } from "@chakra-ui/react";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Digital Identity</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Decentralized & Secure Management Systems for Public Sector Digital Identities.Digital identity management holds paramount significance for the growth and sustainability of any digital economy. It is foundational across all organizations within the public sector. Leveraging blockchain for government digital identity emerges as an optimal solution for addressing challenges related to identity and access management. By utilizing advanced cryptographic techniques, credentials can be seamlessly verified without compromising the integrity of actual data, thereby safeguarding against cyber breaches.Significance of Blockchain in Digital Identity.A digital identity encompasses an individual's online presence, including user behavior, images, shopping preferences, and financial information. In essence, it comprises both offline and online aspects of an individual's identity. Blockchain technology offers decentralized security for these identities, incorporating advanced cryptographic techniques to enhance overall security.Blockchain-based digital identity solutions establish decentralized identifiers that link digital identities with verifiable credentials. By integrating blockchain into digital identity systems, prevailing challenges like data vulnerability, restricted access, and fraudulent identities can be mitigated.
            TALK TO OUR EXPERTS
             </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Challenges in Government Digital Identity
              </Heading>

            <Text align={'center'} letterSpacing={1}>
            In the realm of digital identity solutions within the public sector, several pressing concerns come to the forefront. These issues encompass adaptability, as existing systems often lack versatility, limiting their application in various scenarios. Data security is another critical aspect, as centralized databases become vulnerable due to legacy software and single points of failure, making them appealing targets for hackers. Additionally, privacy deficiencies in conventional digital identity systems necessitate the sharing of sensitive personal data, leading to potential identity theft and fraud. Moreover, the lack of standardized interoperability among current systems results in inefficiencies and increased costs.However, the adoption of blockchain technology presents promising solutions to these challenges. Blockchain's attributes, such as privacy through digital signatures, trust through distributed ledgers and consensus mechanisms, security through encryption and immutability, integrity through continuous verification, and simplicity through clear rules, enhance its effectiveness in government digital identity management.Blockchain's advantages in this context are numerous, including enabling users to have greater control over their data, decentralizing control to mitigate single-entity dominance, promoting interoperability through open standards, ensuring high levels of security with tamper-proof data, offering flexibility for diverse purposes, and reducing costs by eliminating intermediaries. AradChain Technologies's blockchain identity solutions, specifically designed for the public sector, hold the potential to address current system deficiencies, providing secure, efficient, and adaptable digital identity management.
            </Text>
            <Text mt={4} align={'center'} letterSpacing={1}>
              <strong>Why Select AradChain Technologies for Government Blockchain Identity Solutions?</strong>
            </Text>
            <Text align={'center'} letterSpacing={1}>
            Collaborate with AradChain Technologies to harness a secure, trusted blockchain-based platform's full potential. We assist in creating unique capabilities to issue, manage, and verify government digital identities. Forge a security-rich hub of user identity data and tap into a results-driven network of digital credentials.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>A Glimpse into Our Blog Posts</strong>
</Heading>

<Text textAlign={'center'} mt={4}>
  <strong>Custom AI Blockchain Development</strong>
  Blockchain & AI: Top Use Cases and Barriers to AI Adoption
</Text>

<Text textAlign={'center'} mt={4}>
  The fusion of Blockchain and AI is proving to be a game-changer for businesses across various sectors. Discover top use cases and challenges in this dynamic integration.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Exploring Emerging Blockchain Use Cases in Real Estate</strong>
  The real estate industry is growing at a rapid pace; however, it's also susceptible to scams. Dive into emerging blockchain applications that can transform the industry.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Blockchain Development for the Beauty Industry</strong>
  Blockchain Development for Beauty Industry: A Boon or Bane?
</Text>

<Text textAlign={'center'} mt={4}>
  Blockchain and beauty may not seem related, but this technology is making waves in skincare, cosmetics, and more. Explore its impact on the beauty industry.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Our Proficiency in Blockchain Technology</strong>
</Heading>

<Text textAlign={'center'} mt={4}>
  Feel free to initiate a friendly conversation about your business needs. We are committed to providing technical support and are open to inquiries and requests.
</Text>


            
          </div>

        </div>

      </div>

      {/* Info Section */}
      {/* <div className={style.infoSection}>
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
      </div> */}

      {/* Our Team */}
      {/* <div className={style.ourTeamSection}>
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
      </div> */}
      <TelegramFloatingBtn />
      <FloatingWhatsApp
       phoneNumber="+447432284026"
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
      <Box mt={20}>
        <Needsolution />
      </Box>

      {/* Footer Section */}
      <Footer1 />
    </div>
  );
};

export default About;