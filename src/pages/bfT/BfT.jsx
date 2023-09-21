import React from "react";
import style from "./bfT.module.css";
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
              <Heading>Tezos Development Solutions</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Comprehensive services for crafting Tezos-based assets and applications from start to finish.Precision-Crafted Tezos dApp Development SolutionsTezos is experiencing rapid growth and adoption owing to its exceptional attributes including efficiency, robust security, and seamless scalability. If you're considering entering the Tezos market with your application, we're here to facilitate your seamless entry and active participation.Our team of adept blockchain developer boasts extensive experience in building blockchain applications across various platforms, rendering them proficient in developing and deploying Tezos dApps. They possess the prowess to swiftly identify both on-chain and off-chain entities, develop microservices, establish Tezos nodes, design Tezos wallets, and seamlessly integrate Tezos APIs into your existing solution or application.TALK TO OUR EXPERTS
            </Text>
            <Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Tezos Blockchain Development Services
</Heading>

<Text my={2} textAlign="center">
  <strong>We offer comprehensive Tezos blockchain services to bring your vision to life.</strong>
</Text>

<Text my={2} align={'center'}>
  Tezos dApp Development: Create scalable Tezos dApps tailored to your needs.
</Text>

<Text my={2} align={'center'}>
  Tezos Token Development: Seamlessly develop and support XTZ tokens.
</Text>

<Text my={2} align={'center'}>
  Tezos Wallet Development: Custom Tezos wallets with easy integration.
</Text>

<Text my={2} align={'center'}>
  Tezos Smart Contracts: Secure smart contract development.
</Text>

<Text my={2} align={'center'}>
  Tezos Integration: Seamlessly integrate with Tezos using a range of tools.
</Text>

<Text my={2} align={'center'}>
  Tezos Consulting: Expert consultation for Tezos integration.
</Text>

<Heading my={2} textAlign="center">
  Advantages of Tezos for dApp Development
</Heading>

<Text my={2} align={'center'}>
  Tezos offers features ideal for dApp development:
</Text>

<Text my={2} align={'center'}>
  - Proof of Stake: Consensus mechanism for stability and security.
</Text>

<Text my={2} align={'center'}>
  - On-Chain Governance: Collaborative protocol amendments.
</Text>

<Text my={2} align={'center'}>
  - Self-Amendment: Seamless protocol upgrades.
</Text>

<Text align={'center'} my={2}>
  - Smart Contracts: Secure, third-party-resistant contracts.
</Text>

<Heading my={2} textAlign="center">
  Why Choose Us for Tezos Blockchain Development
</Heading>

<Text my={2}  align={'center'}>
  Partner with AradChain Technologies for end-to-end blockchain solutions:
</Text>

<Text my={2} align={'center'}>
  - Technical Proficiency
</Text>

<Text my={2} align={'center'}>
  - Expert Team
</Text>

<Text my={2} align={'center'}>
  - Rapid Development
</Text>

<Text my={2} align={'center'}>
  - Complete Support
</Text>

<Text my={2} align={'center'}>
  - Meaningful Outcomes
</Text>
<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center">
  Frequently Asked Questions
</Heading>

<Text mt={5} textAlign="center">
  What is on-chain governance in Tezos?
</Text>
<Text mt={5} textAlign="center">
  On-chain governance in Tezos enables all stakeholders to participate in the decision-making process for protocol upgrades, ensuring transparency and democratic governance.
</Text>

<Text mt={5} textAlign="center">
  How does Tezos ensure security in smart contract development?
</Text>

<Text mt={5} textAlign="center">
  What programming language is used for Tezos smart contract development?
</Text>

<Text mt={5} textAlign="center">
  Can I develop my own custom Tezos wallet?
</Text>

<Text mt={5} textAlign="center">
  Is Tezos suitable for developing decentralized exchanges (DEX)?
</Text>

<Text mt={5} textAlign="center">
  What tools and technologies are used in Tezos blockchain development?
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center">
  Explore More in Our Blogs
</Heading>

<Text mt={5} textAlign="center">
  Metaverse in the Manufacturing Industry: Role and Future Prospects
</Text>

<Text mt={5} textAlign="center">
  Uncover the evolving role of the Metaverse in manufacturing and its future prospects in our insightful blog.
</Text>

<Text mt={5} textAlign="center">
  Empowering NPCs with AI in the Metaverse
</Text>

<Text mt={5} textAlign="center">
  Delve into the transformative impact of AI on NPCs within the metaverse in our thought-provoking blog.
</Text>

<Text mt={5} textAlign="center">
  Initiating a White Label Crypto Banking Platform
</Text>

<Text mt={5} textAlign="center">
  Embark on your journey to a white label crypto banking platform with our comprehensive guide.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center">
  Discover Our Blockchain Tech Expertise
</Heading>

<Text mt={5} textAlign="center">
  We're available for a friendly chat to address your business needs, without any obligations.
</Text>

<Text mt={5} textAlign="center">
  Count on our technical support to assist with inquiries and requests.
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
      <Box mt={20}>
        <Needsolution />
      </Box>

      {/* Footer Section */}
      <Footer1 />
    </div>
  );
};

export default About;