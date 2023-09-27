import React from "react";
import style from "./bfS.module.css";
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
              <Heading>Substrate</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Substrate Blockchain Development Overview The Substrate framework is a versatile toolkit designed for creating and constructing blockchain solutions. Crafted using the RUST programming language, it presents a flexible array of tools that expedite the development process by furnishing all the essential layers required for operating the consensus, network, and application components of a blockchain system.Our team of blockchain developers harnesses the power of the Substrate blockchain framework to construct exceptionally adaptable and future-proof applications, empowering you to disrupt the market. We devise a meticulous plan to propel and hasten your development journey, enabling you to swiftly penetrate the market and attain a crucial competitive advantage.
            </Text>
            <Heading as="h2" size="2xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>AradChain Technologies: Substrate Development Services</Heading>

<Text mt={4} align="center">
  At AradChain Technologies, we offer an array of comprehensive services tailored to Substrate development. Our team of experts specializes in harnessing the power of the Substrate framework to create diverse platforms and solutions.
</Text>

<Text mt={4} align="center">
  <strong>Interconnected Blockchain Bridge:</strong>
  Our experts excel at building robust cross-chain bridges using Substrate's XCMP protocol. This technology facilitates seamless asset and information exchange across multiple blockchains.
</Text>

<Text mt={4} align="center">
  <strong>Integration of Sidechains:</strong>
  We possess the capability to integrate existing Substrate-powered relay chains and dApps, connecting them with other chains or the Polkadot ecosystem to enhance interoperability.
</Text>

<Text mt={4} align="center">
  <strong>Relay Chain Creation:</strong>
  Our specialization lies in constructing highly secure Substrate-based blockchains tailored to specific use cases, ensuring rapid and secure development.
</Text>

<Text mt={4} align="center">
  <strong>Parachain Establishment:</strong>
  With extensive experience in constructing relay chains and parachains using the Substrate framework and Rust programming language, our team ensures efficient blockchain development.
</Text>

<Text mt={4} align="center">
  <strong>Pallets Crafting:</strong>
  Leveraging Rust, we can create novel pallets within the Substrate framework, ranging from formulating new consensus algorithms to generating NFTs. Our Rust developers are proficient in pallet and relay chain creation.
</Text>

<Text mt={4} align="center">
  <strong>Smart Contract Implementation:</strong>
  We craft smart contracts on Substrate-based blockchains using Parity's ink! technology. These contracts execute business logic on a relay chain.
</Text>

<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Blockchain Innovations</Text></CardBody></Card>
              <Card><CardBody><Text>Platforms for Decentralized Finance (DeFi)</Text></CardBody></Card>
              <Card><CardBody><Text>Systems for Supply Chain Management</Text></CardBody></Card>
              <Card><CardBody><Text> Voting and Governance Networks</Text></CardBody></Card>
              <Card><CardBody><Text>Solutions for Identity and Access Management</Text></CardBody></Card>
              <Card><CardBody><Text>Solutions for Identity and Access Management</Text></CardBody></Card>
              <Card><CardBody><Text>Gaming and Betting Platforms</Text></CardBody></Card>
</SimpleGrid>

<Text mt={4} align="center">
  Connect with our domain experts to explore how these applications can benefit your business.
</Text>

<Heading as="h2" size="2xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
Our Methodology for Building Substrate Applications
  </ Heading>

<Text mt={4} align="center">
  <strong>Comprehend:</strong>
   We work closely with you to understand your business requirements and the envisioned benefits of the project.
</Text>

<Text mt={4} align="center">
  <strong>Develop Substrate Node:</strong>
   This stage involves default implementations for fundamental components like account management, consensus, and more. The genesis block can be customized to initiate the chain.
</Text>

<Text mt={4} align="center">
  <strong>Develop Substrate Frame:</strong>
   We create a Substrate frame, serving as a framework for constructing a Substrate runtime environment using existing libraries while maintaining control over the blockchain's logic.
</Text>

<Text mt={4} align="center">
  <strong>Develop Substrate Core:</strong>
   Substrate Core empowers us to integrate the runtime environment aligned with WebAssembly and Substrate block construction principles, which can be used within the Substrate node.
</Text>

<Text mt={4} align="center">
  <strong>Testing and Deployment:</strong>
   Our blockchain engineers conduct thorough automated and manual tests, including testnet and load tests, to ensure the application's performance. We also assist in deploying these nodes on public and private networks.
</Text>
<Heading as="h2" size="2xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>Reasons to Choose AradChain Technologies as Your Substrate Blockchain Development Partner:</Heading>

<Text mt={4} align="center">
  <strong>Technical Excellence:</strong> Our exclusive focus on Blockchain Technologies ensures technical proficiency.
</Text>

<Text mt={4} align="center">
  <strong>Expert Team:</strong> Our team comprises over 600 experts who excel in refining your offerings and proposing optimal tech strategies.
</Text>

<Text mt={4} align="center">
  <strong>Accelerated Development:</strong> We provide tailor-made blockchain services to yield exceptional products, ensuring seamless and swift development and deployment.
</Text>

<Text mt={4} align="center">
  <strong>Comprehensive Support:</strong> Our commitment extends beyond product launch, offering extensive post-delivery services to support your growth.
</Text>

<Text mt={4} align="center">
  <strong>Meaningful Results:</strong>  We deliver tangible transformations, ensuring discernible value from your investments.
</Text>
<Heading as="h2" size="2xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>Explore Our Blogs:</Heading>
<Text mt={4} align="center">
  Tailored AI Blockchain Development
</Text>

<Text mt={4} align="center">
  Confluence of Blockchain & AI: Prime Use Cases and Hurdles to AI Adoption
</Text>

<Text mt={4} align="center">
  Exploring Novel Blockchain Applications in Real Estate
</Text>

<Text mt={4} align="center">
  Blockchain Advancements in the Beauty Industry
</Text>
<Heading as="h2" size="2xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>Our Proficiency in Blockchain Technology:</Heading>
<Text mt={4} align="center">
  We welcome cordial conversations to delve into your business requisites, without any obligation. Feel free to reach out with your inquiries and requests.
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