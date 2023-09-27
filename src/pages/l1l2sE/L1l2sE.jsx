import React from "react";
import style from "./l1l2sE.module.css";
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
              <Heading>Ethereum Blockchain Solutions</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Empowering Secure, Decentralized, and Scalable Transformation on Ethereum Blockchain,Request a Complimentary Demo
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Ethereum Blockchain Development: Pioneering the Path to Decentralization
</Heading>

<Text align={'center'} letterSpacing={1}>
    At AradChain Technologies, we harness the groundbreaking Ethereum blockchain to construct highly secure decentralized applications tailored for your business. Whether you intend to fork the Ethereum blockchain or harness the original version, our bespoke solutions seamlessly translate your business use case into reality. From determining the consensus mechanism for your forked blockchain to executing the solution – we oversee the entire process, ensuring a smooth and expedited transition to the Ethereum blockchain.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Comprehensive Ethereum Blockchain Development Services
</Heading>

<Text align={'center'} letterSpacing={1}>
    We offer a full spectrum of solutions to facilitate your integration into the Ethereum ecosystem.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>dApp Development</strong><br/>
    The future belongs to dApps – business applications with no single point of failure. Our Ethereum-based dApp development services ensure the creation of fully operational dApps with zero downtime.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Smart Contract Development</strong><br/>
    We design self-governing, rapid, secure, and precise smart contracts that facilitate direct transactions between parties, eliminating the need for intermediaries. This results in expedited transactions, accelerated processes, and minimized fraud for businesses.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Token Development</strong><br/>
    Our Ethereum blockchain-based token creation services encompass security tokens, utility tokens, asset tokens, and more. These tokens optimize business operations, enhance overall functionality, and eliminate intermediary reliance.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Private Ethereum Blockchain Development</strong><br/>
    We guide businesses in launching their own scalable, secure, and permission-based private networks on the Ethereum blockchain with minimal downtime. These networks ensure high transactional speeds and data security, enabling smooth business operations.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Ethereum Node Development</strong><br/>
    Our certified Ethereum blockchain developers assist in launching custom Ethereum nodes and connecting them to the primary Ethereum network, enabling you to contribute to network security while earning cryptocurrencies.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Wallet Development</strong><br/>
    We craft decentralized wallets fortified with enterprise-grade security, user-friendly interfaces, and seamless scalability, supporting various cryptocurrencies.
</Text>

<Text align={'center'} letterSpacing={1}>
    Engage with our domain experts to delve into your business use case.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Connect on WhatsApp Connect on Telegram</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Diverse Industries We Cater To
</Heading>

<Text align={'center'} letterSpacing={1}>
    Our solutions are tailored to suit diverse business sectors.
</Text>

<Text align={'center'} letterSpacing={1}>
    Finance and Accounting<br/>
    Real Estate<br/>
    Crowdfunding<br/>
    Information Technology<br/>
    Digital Trading<br/>
    Decentralized Autonomous Organizations<br/>
    Asset Management
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Robust Ethereum Technology Stack
</Heading>

<Text align={'center'} letterSpacing={1}>
    <strong>Remix</strong><br/>
    Remix is a browser-based integrated development environment (IDE) that facilitates the creation, execution, and validation of smart contracts written in the Solidity programming language.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Truffle</strong><br/>
    Truffle is a development framework designed to simplify Ethereum Smart Contract testing and deploy customized Ethereum applications on private and public networks.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Embark</strong><br/>
    Embark is a multifunctional tool offering service monitoring, real-time deployment, and interactive REPL (Read-Evaluate-Print Loop) to expedite modular smart contract development.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>openzeppelin</strong><br/>
    Zeppelin provides smart contract management and security audit checks for reusable smart contracts.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>ganache</strong><br/>
    Ganache, with local test nodes, is employed by our blockchain engineers for smart contract deployment and interaction testing.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>parity</strong><br/>
    Parity tools facilitate Ethereum dApp development, cross-chain autonomous blockchain connection, and smart contract public blockchain permissioning.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Connect on WhatsApp Connect on Telegram</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Why Choose Us for Ethereum Blockchain Development
</Heading>

<Text align={'center'} letterSpacing={1}>
    AradChain Technologies ensures your Ethereum blockchain journey is guided by a team of skilled experts with hands-on experience in delivering end-to-end blockchain services.
</Text>

<Text mt={4} align={'center'} letterSpacing={1}>
    <strong>Technical Excellence</strong><br/>
    Our expertise is solely focused on blockchain technologies, enabling us to excel in this domain.
</Text>

<Text mt={4} align={'center'} letterSpacing={1}>
    <strong>Expert Team</strong><br/>
    Our team of 500+ professionals fine-tunes your offerings, recommends optimal tech strategies, and aids in community setup and campaigns.
</Text>

<Text align={'center'} mt={4} letterSpacing={1}>
    <strong>Rapid Development</strong><br/>
    We deliver personalized products tailored to your target audience. A cohesive roadmap ensures swift development and deployment.
</Text>

<Text align={'center'} mt={4} letterSpacing={1}>
    <strong>Complete Support</strong><br/>
    Our commitment extends beyond product launch. We provide comprehensive post-delivery services, enabling you to concentrate on growth.
</Text>

<Text align={'center'} mt={4} letterSpacing={1}>
    <strong>Meaningful Outcomes</strong><br/>
    We deliver tangible results, ensuring substantial value from your investments.
</Text>

<Text align={'center'} mt={4} letterSpacing={1}>
    <strong>Explore Our Partners</strong><br/>
    <strong mt={4}>Browse Through Our Clients</strong>
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Frequently Asked Questions
</Heading>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>How secure is the Ethereum blockchain?</strong><br/>
    While the Ethereum blockchain is generally secure due to its distributed structure and cryptographic protocols, it is not immune to attacks. Developers must write their smart contracts securely to prevent vulnerabilities.
</Text>

<Text mt={4} align={'center'} letterSpacing={1}>
    <strong>How does Ethereum ensure security and prevent hacks?</strong>
</Text>

<Text mt={4} align={'center'} letterSpacing={1}>
    <strong>How can I integrate Ethereum into my existing business?</strong>
</Text>

<Text mt={4} align={'center'} letterSpacing={1}>
    <strong>What advantages does Ethereum offer for decentralized application (dApp) development?</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Highlighted Blogs
</Heading>

<Text align={'center'} letterSpacing={1}>
    Discover insights into blockchain, cryptocurrencies, NFTs, metaverse, and related technologies by exploring our blog.
</Text>

<Text mt={4} align={'center'} letterSpacing={1}>
    <strong>Metaverse in Manufacturing Industry: Role and Future Prospects</strong><br/>
    The concept of the Metaverse needs no introduction, as it has seamlessly woven itself into our lives. The relentless surge in its...
    <br/><strong>READ MORE</strong>
</Text>

<Text mt={4} align={'center'} letterSpacing={1}>
    <strong>AI Empowers NPCs: Breathing Life into the Metaverse</strong><br/>
    Blockchain, metaverse, and artificial intelligence stand as the most remarkable innovations of the 21st century. These technologies...
    <br/><strong>READ MORE</strong>
</Text>

<Text mt={4} align={'center'} letterSpacing={1}>
    <strong>Getting Started with White Label Crypto Banking Platform</strong><br/>
    When opportunity knocks, we seek quick and easy ways to leverage it. In the domain of cryptocurrencies and blockchain...
    <br/><strong>READ MORE</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Expertise in Blockchain Technology
</Heading>

<Text mt={4} align={'center'} letterSpacing={1}>
    We're here for a friendly chat to address your business requirements without obligation.
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