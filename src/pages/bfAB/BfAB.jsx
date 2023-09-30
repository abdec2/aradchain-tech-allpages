import React from "react";
import style from "./bfAB.module.css";
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

import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card ,Button,Stack} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Algorand Blockchain Development Solutions</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Elevate your business with a range of services designed for Algorand-based applications.<strong>CONNECT WITH OUR EXPERTS</strong>
            </Text>
            <Link to="https://t.me/aradchain" target="_blank">
<Text textAlign={'center'} mt={4}>
    <Button
      size={window.innerWidth <= 680 ? "xs" : "lg"} // Check the window width and change button size accordingly
      rightIcon={<MdCall />}
      colorScheme="telegram"
    >
      Connect on Telegram
    </Button>
    <Link to="https://wa.me/+447432284026" target="_blank">
      <Button
        ml={5}
        size={window.innerWidth <= 680 ? "xs" : "lg"} // Check the window width and change button size accordingly
        rightIcon={<MdCall />}
        colorScheme="whatsapp"
        _media={{'@media (max-width: 680px)': { // Apply styles only in mobile view
          marginTop: '2%',
          marginLeft: '-15px',
        }}}
      >
        Connect on Whatsapp
      </Button>
    </Link>
  </Text>
</Link>

            <Heading as="h2" size="2xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Business-Centric Algorand Blockchain Development Services
</Heading>

<Text mt={4} align="center">
  Algorand has emerged as a leading blockchain platform, championing decentralization, scalability, and top-tier security. Businesses are embracing Algorand to unlock the potential of a decentralized world.
</Text>

<Text mt={4} align="center">
  At AradChain Technologies, we harness the power of the Algorand blockchain, crafting secure, user-friendly, and potent decentralized applications (dApps). Our expert blockchain team excels in Algorand's two-tier architecture, Transaction Execution Approval Language (TEAL), atomic transfers, and Algorand Standard Assets (ASA). With our in-depth knowledge and extensive experience, we create decentralized solutions across sectors such as Decentralized Finance (DeFi), Web3, and Non-Fungible Tokens (NFTs).
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Distinctive Attributes of Algorand Blockchain
</Heading>

<Text mt={4} align="center">
  <strong>Solution to Blockchain Trilemma  </strong>
  Algorand addresses the blockchain trilemma, aiming for a delicate balance among decentralization, scalability, and security while fortifying the system against errors and malicious attacks. To overcome this challenge, Algorand employs Pure Proof-of-Stake (PPoS).
</Text>

<Text mt={4} align="center">
  <strong>Efficient Algorand Transactions  </strong>
  Algorand expedites transactions, completing most within five seconds. Transactions have a low transfer threshold of 0.0001 ALGO and are cost-effective, with a minimum transaction fee of 0.001 ALGO (equivalent to $0.0014 based on current exchange rates).
</Text>

<Text mt={4} align="center">
  <strong>NFT Support  </strong>
  Algorand stands as a prominent platform for Non-Fungible Tokens (NFTs), embracing Fractional NFT technology for tokenized asset ownership by multiple individuals.
</Text>

<Text mt={4} align="center">
  <strong>dApps Facilitation  </strong>
  Algorand supports the creation of decentralized applications (dApps) through APIs and SDKs for languages like JavaScript, Python, Java, and Go. Algorand has developed diverse dApps, from crowdfunding apps to COVID-19 trackers.
</Text>

<Text mt={4} align="center">
  <strong>Robust App Environment  </strong>
  Algorand offers extensive capabilities for building DeFi and dApps, enhancing scalability with a new smart contract function that handles millions of transactions daily.
</Text>

<Text mt={4} align="center">
  <strong>Seamless E-Money Integration  </strong>
  Algorand seamlessly integrates with the e-Money protocol, facilitating stablecoin issuance backed by European fiat currencies, broadening accessibility and benefits within the Algorand ecosystem.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Empower Your Development with Algorand
</Heading>

<Text mt={4} align="center">
  Forge a connection with our experts to explore Algorand's potential for your decentralized applications.
</Text>

<Text mt={4} align="center">
  <strong>Our Algorand Blockchain Development Services  </strong>
</Text>

<Text mt={4} align="center">
  <strong>dApp Development  </strong>
  Leveraging our expertise in Golang, Java, Python, and Javascript, we craft robust, institutional-grade Algorand Apps. Security and ease remain paramount, empowering your app to disrupt the market.
</Text>

<Text mt={4} align="center">
  <strong>NFT Marketplace Creation  </strong>
  Addressing the surging demand for NFTs, our blockchain engineers employ Algorand to design seamless NFT marketplace platforms, enhancing trading experiences with custom features.
</Text>

<Text mt={4} align="center">
  <strong>Smart Contract Crafting  </strong>
  Our smart contract experts specialize in Python and TEAL (PyTeal) programming languages, creating secure contract codes tailored to your automation needs.
</Text>

<Text mt={4} align="center">
  <strong>DeFi & DEX Solution Building  </strong>
  We engineer resilient DeFi and DEX solutions on Algorand, leveraging its low carbon footprint and high scalability for seamless exchange processes.
</Text>

<Text mt={4} align="center">
  <strong>Node Establishment  </strong>
  With extensive expertise, we build optimized and efficient Algorand network nodes, ensuring compliance with the consensus algorithm for optimal performance.
</Text>

<Text mt={4} align="center">
  <strong>Algorand Blockchain Consultation </strong>
  Our experts provide comprehensive technical and business analysis of Algorand's two-tier blockchain architecture, enabling you to harness scalability, security, and speed.
</Text>


<Text mt={4} align="center">
  We are ready for a friendly chat to discuss your business needs, without any obligations.
</Text>

<Text mt={4} align="center">
  Count on us for technical support; we are here to assist with any inquiries or requests.
</Text>
<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>Algorand Blockchain Technology Stack</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Python</Text></CardBody></Card>
              <Card><CardBody><Text>Golang</Text></CardBody></Card>
              <Card><CardBody><Text>NodeJS</Text></CardBody></Card>
              <Card><CardBody><Text>Java</Text></CardBody></Card>
              <Card><CardBody><Text>Javascript</Text></CardBody></Card>
              <Card><CardBody><Text>Pyteal</Text></CardBody></Card>
</SimpleGrid>
<Heading as="h2" size="2xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Business-Centric Algorand Blockchain Development Services
</Heading>

<Text mt={4} align="center">
  Algorand has emerged as a leading blockchain platform, championing decentralization, scalability, and top-tier security. Businesses are embracing Algorand to unlock the potential of a decentralized world.
</Text>

<Text mt={4} align="center">
  At AradChain Technologies, we harness the power of the Algorand blockchain, crafting secure, user-friendly, and potent decentralized applications (dApps). Our expert blockchain team excels in Algorand's two-tier architecture, Transaction Execution Approval Language (TEAL), atomic transfers, and Algorand Standard Assets (ASA). With our in-depth knowledge and extensive experience, we create decentralized solutions across sectors such as Decentralized Finance (DeFi), Web3, and Non-Fungible Tokens (NFTs).
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Distinctive Attributes of Algorand Blockchain
</Heading>

<Text mt={4} align="center">
  <strong>Solution to Blockchain Trilemma </strong>
  Algorand addresses the blockchain trilemma, aiming for a delicate balance among decentralization, scalability, and security while fortifying the system against errors and malicious attacks. To overcome this challenge, Algorand employs Pure Proof-of-Stake (PPoS).
</Text>

<Text mt={4} align="center">
  <strong>Efficient Algorand Transactions </strong>
  Algorand expedites transactions, completing most within five seconds. Transactions have a low transfer threshold of 0.0001 ALGO and are cost-effective, with a minimum transaction fee of 0.001 ALGO (equivalent to $0.0014 based on current exchange rates).
</Text>

<Text mt={4} align="center">
  <strong>NFT Support  </strong>
  Algorand stands as a prominent platform for Non-Fungible Tokens (NFTs), embracing Fractional NFT technology for tokenized asset ownership by multiple individuals.
</Text>

<Text mt={4} align="center">
  <strong>dApps Facilitation  </strong>
  Algorand supports the creation of decentralized applications (dApps) through APIs and SDKs for languages like JavaScript, Python, Java, and Go. Algorand has developed diverse dApps, from crowdfunding apps to COVID-19 trackers.
</Text>

<Text mt={4} align="center">
  <strong>Robust App Environment  </strong>
  Algorand offers extensive capabilities for building DeFi and dApps, enhancing scalability with a new smart contract function that handles millions of transactions daily.
</Text>

<Text mt={4} align="center">
  <strong>Seamless E-Money Integration  </strong>
  Algorand seamlessly integrates with the e-Money protocol, facilitating stablecoin issuance backed by European fiat currencies, broadening accessibility and benefits within the Algorand ecosystem.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Empower Your Development with Algorand
</Heading>

<Text mt={4} align="center">
  Forge a connection with our experts to explore Algorand's potential for your decentralized applications.
</Text>

<Text mt={4} align="center">
  <strong>Our Algorand Blockchain Development Services </strong>
</Text>

<Text mt={4} align="center">
  <strong>dApp Development  </strong>
  Leveraging our expertise in Golang, Java, Python, and Javascript, we craft robust, institutional-grade Algorand Apps. Security and ease remain paramount, empowering your app to disrupt the market.
</Text>

<Text mt={4} align="center">
  <strong>NFT Marketplace Creation  </strong>
  Addressing the surging demand for NFTs, our blockchain engineers employ Algorand to design seamless NFT marketplace platforms, enhancing trading experiences with custom features.
</Text>

<Text mt={4} align="center">
  <strong>Smart Contract Crafting  </strong>
  Our smart contract experts specialize in Python and TEAL (PyTeal) programming languages, creating secure contract codes tailored to your automation needs.
</Text>

<Text mt={4} align="center">
  <strong>DeFi & DEX Solution Building  </strong>
  We engineer resilient DeFi and DEX solutions on Algorand, leveraging its low carbon footprint and high scalability for seamless exchange processes.
</Text>

<Text mt={4} align="center">
  <strong>Node Establishment  </strong>
  With extensive expertise, we build optimized and efficient Algorand network nodes, ensuring compliance with the consensus algorithm for optimal performance.
</Text>

<Text mt={4} align="center">
  <strong>Algorand Blockchain Consultation  </strong>
  Our experts provide comprehensive technical and business analysis of Algorand's two-tier blockchain architecture, enabling you to harness scalability, security, and speed.
</Text>


<Text mt={4} align="center">
  We are ready for a friendly chat to discuss your business needs, without any obligations.
</Text>

<Text mt={4} align="center">
  Count on us for technical support; we are here to assist with any inquiries or requests.
</Text>
<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Frequently Asked Questions
</Heading>

<Text mt={4} align="center">
  <strong>What are the advantages of developing dApps on Algorand?</strong>
</Text>
<Text mt={2} align="center">
  Algorand offers several advantages for dApp development including high scalability, low transaction fees, fast transaction times, and secure smart contracts.
</Text>

<Text mt={4} align="center">
  <strong>What is the process for developing dApps on Algorand?</strong>
</Text>

<Text mt={4} align="center">
  <strong>What is Algorand Standard Assets (ASA)?</strong>
</Text>

<Text mt={4} align="center">
  <strong>What is the Algorand Venture Capital Program?</strong>
</Text>

<Text mt={4} align="center">
  <strong>What is e-Money integration with Algorand?</strong>
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Exploring Our Blogs
</Heading>

<Text mt={4} align="center">
  <strong>Custom AI Blockchain Development  </strong>
</Text>
<Text mt={2} align="center">
  Blockchain & AI: Top Use Cases and Barriers to AI Adoption
</Text>
<Text mt={2} align="center">
  The convergence of Blockchain and AI emerges as a transformative force across industries. Explore its potential in our latest blog.
</Text>

<Text mt={4} align="center">
  <strong>Unveiling Emerging Blockchain Use Cases in Real Estate  </strong>
</Text>
<Text mt={2} align="center">
  Real estate holds great promise for blockchain technology. Delve into the intriguing use cases in our detailed blog.
</Text>

<Text mt={4} align="center">
  <strong>Blockchain Development for the Beauty Industry </strong>
</Text>
<Text mt={2} align="center">
  Blockchain transforms the beauty industry. Explore how in our captivating blog.
</Text>

<Heading as="h2" size="xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Discover Our Blockchain Expertise
</Heading>

<Text mt={4} align="center">
  We're available for a friendly chat to address your business needs, without any obligations.
</Text>

<Text mt={4} align="center">
  Our commitment to technical support means we're here to assist with any inquiries or requests.
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