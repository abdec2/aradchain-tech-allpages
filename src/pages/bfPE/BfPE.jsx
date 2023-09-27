import React from "react";
import style from "./bfPE.module.css";
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
              <Heading>Polygon Edge Blockchain Development Solutions</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Accelerate your market presence with our highly scalable applications designed for rapid deployment.Unleash the Power of Polygon Edge Blockchain Polygon Edge offers a robust ecosystem for building tokens, wallets, and applications with swift time-to-market.At AradChain Technologies, we harness the capabilities of Polygon Edge to expedite application development and deployment, enabling you to swiftly enter and thrive in the market. Our comprehensive services cover consulting, development, deployment, and maintenance, ensuring the success of your project.

            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Business Advantages of Polygon Edge for Development
            </Heading>
            <Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Scalability
</Heading>

<Text mt={2} align="center">
  Polygon Edge, a Layer 2 scaling solution for Ethereum, processes a high volume of transactions rapidly and efficiently. This empowers the creation of decentralized applications capable of handling heavy traffic and usage without slow transaction speeds or high gas fees.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Lower Transaction Costs
</Heading>

<Text mt={2} align="center">
  Polygon Edge prioritizes cost-effectiveness, surpassing other blockchain networks. It adopts a Proof-of-Stake consensus mechanism, minimizing energy consumption and leading to lower transaction fees compared to networks using Proof-of-Work consensus mechanisms.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Interoperability
</Heading>

<Text mt={2} align="center">
  Polygon Edge facilitates seamless interaction between diverse blockchain networks, allowing applications built on it to leverage the strengths of different networks. This is achieved through a modular architecture supporting side chains and scaling solutions.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Uncover the Potential of Polygon Edge for Your Business.
</Heading>

<Text mt={2} align="center">
  <strong>CONNECT WITH OUR EXPERTS</strong>
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Our Polygon Edge Blockchain Development Offerings
</Heading>

<Text mt={2} align="center">
  We cater to various business needs with our diverse application development solutions.
</Text>

<Text mt={4} align="center">
  <strong>Decentralized Application Development</strong>
</Text>
<Text mt={2} align="center">
  Crafting state-of-the-art Web3 apps on immutable shared ledgers, ensuring autonomy without single-party control.
</Text>

<Text mt={4} align="center">
  <strong>Digital Assets Platform Creation</strong>
</Text>
<Text mt={2} align="center">
  Building enterprise-level digital asset platforms that excel in security and scalability.
</Text>

<Text mt={4} align="center">
  <strong>NFT Marketplace Establishment</strong>
</Text>
<Text mt={2} align="center">
  Designing carbon-neutral, zero gas fee blockchain marketplaces for digital collectibles.
</Text>

<Text mt={4} align="center">
  <strong>Decentralized Finance (DeFi)</strong>
</Text>
<Text mt={2} align="center">
  Enhancing transaction speed and cross-chain interactions with Ethereum through Polygon Edge.
</Text>

<Text mt={4} align="center">
  <strong>Gaming Platform Building</strong>
</Text>
<Text mt={2} align="center">
  Leveraging Polygon Edge to construct immersive gaming platforms, offering engaging gameplay and rewarding experiences.
</Text>

<Text mt={4} align="center">
  <strong>Custom Blockchain Development</strong>
</Text>
<Text mt={2} align="center">
  Specializing in Ethereum-compatible blockchain construction on Polygon Edge to suit your specific needs.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Connect with Our Experts to Discuss Your Business Case.
</Heading>
<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
Industries We Serve
</Heading>
<Text mt={2} align="center">Our comprehensive solutions cater to a wide range of industries.</Text>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Banking and Financial Services</Text></CardBody></Card>
              <Card><CardBody><Text>Supply Chain</Text></CardBody></Card>
              <Card><CardBody><Text>Media & Entertainment</Text></CardBody></Card>
              <Card><CardBody><Text>Healthcare</Text></CardBody></Card>
              <Card><CardBody><Text>Insurance</Text></CardBody></Card>
              <Card><CardBody><Text>Government & Public Sector</Text></CardBody></Card>
</SimpleGrid> 
<Text mt={4} align="center"><strong>Connect with Our Experts to Discuss Your Business Case.</strong></Text>           
<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Why Choose Us for Polygon Edge Development
</Heading>

<Text mt={2} align="center">
  Partner with AradChain Technologies for a team of technical experts delivering end-to-end consulting services with real-world experience.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={3} mb={10}>
  Technical Proficiency
</Heading>

<Text mt={2} align="center">
  Benefit from our technical expertise.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={3} mb={10}>
  Expert Team
</Heading>

<Text mt={2} align="center">
  Rely on our seasoned team.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={3} mb={10}>
  Rapid Development
</Heading>

<Text mt={2} align="center">
  Experience swift project execution.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={3} mb={10}>
  Complete Support
</Heading>

<Text  align="center">
  Access comprehensive assistance.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={3} mb={10}>
  Meaningful Outcomes
</Heading>

<Text  align="center">
  Expect impactful results.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Frequently Asked Questions
</Heading>

<Text align="center">
  How does Polygon Edge ensure the security of decentralized applications?
</Text>

<Text align="center">
  Polygon employs security measures including checkpoints, double-validation, and fraud proofs to safeguard against breaches, ensuring network integrity and protection against attacks.
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