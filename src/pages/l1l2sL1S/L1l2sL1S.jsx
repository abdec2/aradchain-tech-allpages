import React from "react";
import style from "./l1l2sL1S.module.css";
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
              <Heading>Layer 1 Blockchain Solutions for Businesses</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Enable your entry and engagement in the blockchain market with a secure blockchain network.Consult Our Experts,Leverage AradChain Technologies’s Proficiency to Develop Your Custom Blockchain with 2.8 percent of the global population using blockchain and the projected worth of the blockchain market being $1,432 billion by 2030, this is a billion-dollar opportunity.As a leading layer 1 blockchain company, AradChain Technologies can help you seize this opportunity by creating your own network based on Layer 1 Blockchain. Whether you intend to fork an existing blockchain or initiate layer 1 blockchain development from scratch, our experienced blockchain engineers will transform your blockchain vision into a transformative reality.Maximize the value of your blockchain investment through our expertise in custom blockchain app development.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Custom Blockchain Development Services Tailored to Your Objectives:
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            The current business landscape is undergoing a revolutionary era, with forward-thinking enterprises, entrepreneurs, and innovators embracing layer 1 blockchain development strategies to transform industries like finance and healthcare. Now is the time to join visionary leaders offering enterprise-level layer 1 blockchain app development services and shape the dynamics of the world by creating your own blockchain network. Leverage our technical expertise, domain knowledge, and extensive experience to seamlessly navigate and accelerate Layer 1 Blockchain projects. We specialize in Layer 1 Blockchain solutions, whether forking an existing blockchain or building a custom blockchain from scratch. Engage with our subject matter experts to explore how we can support your business goals through custom blockchain app development.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Services: Forging New Paths with Layer 1 Blockchain Projects
</Heading>

<Text mt={3} align={'center'} letterSpacing={1}>
    As a premier layer 1 blockchain company, we offer a range of services to empower you in building a tailored blockchain platform aligned with your business objectives. Our team has honed layer 1 blockchain development skills that are invaluable to your enterprise. You can also rely on us as the foremost custom blockchain development platform.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Fork Ethereum (ETH) Blockchain</strong><br/>
    Ethereum, the second-largest blockchain after Bitcoin, can be forked by our blockchain engineers to create a new blockchain for your business.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Fork Binance Smart Chain (BNB) Blockchain</strong><br/>
    Binance Smart Chain's global traction can be harnessed through forking, splitting it into a separate blockchain tailored to your requirements.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Fork Solana (SOL) Blockchain</strong><br/>
    For token and NFT creation, Solana has risen in popularity. Our expertise extends to forking the Solana blockchain to help you build your own.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Frequently Asked Questions
</Heading>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>What's required to create my own blockchain?</strong><br/>
    To build your own blockchain, you need a business idea. Once you have your requirements defined, rely on our technical expertise, extensive experience, and domain knowledge to bring your concept to life.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Can you fork the Ethereum blockchain for me?</strong><br/>
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>What's the cost of creating a blockchain?</strong><br/>
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Can I approach you with an existing blockchain for improvement?</strong><br/>
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Why should I choose you for layer 1 blockchain solutions?</strong><br/>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Exploring Our Blogs
</Heading>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Custom AI Blockchain Development</strong><br/>
    Blockchain & AI: Use Cases and Barriers<br/>
    The convergence of Blockchain and AI is a game-changer for various industries. Learn about the top use cases and barriers in this dynamic partnership.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Emerging Blockchain Use Cases in Real Estate</strong><br/>
    Discover how blockchain is transforming the real estate industry, addressing challenges while providing transparency and efficiency.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Blockchain Development for the Beauty Industry</strong><br/>
    Can blockchain revolutionize the beauty industry? Explore the potential and impact of blockchain in skincare, cosmetics, and more.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Discover Our Blockchain Tech Expertise
</Heading>

<Text mt={3} align={'center'} letterSpacing={1}>
    We're here to discuss your business needs in a friendly chat, obligation-free.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    We're dedicated to assisting you through technical support, addressing inquiries, and fulfilling requests.
</Text>


<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Fork Cardano (ADA) Blockchain</strong><br/>
    Another DeFi-focused blockchain, Cardano, can be hard forked based on your needs, enabling the launch of your customized blockchain.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Fork Polkadot (DOT) Blockchain</strong><br/>
    Known for its transactional scalability, Polkadot spreads transactions across parallel blockchains. We can fork it to establish a new blockchain for your enterprise.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Fork Terra (LUNA) Blockchain</strong><br/>
    For a new blockchain aligned with your business use case, our services include hard forking the Terra blockchain.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Fork Avalanche (AVAX) Blockchain</strong><br/>
    Avalanche, an open-source platform for decentralized applications, can be forked to create a scalable blockchain for your venture.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Fork Algorand (ALGO) Blockchain</strong><br/>
    Characterized by energy efficiency, Algorand can be hard forked to establish a similar blockchain tailored to your needs.
</Text>

<Text mt={3} align={'center'} letterSpacing={1}>
    <strong>Fork TRON (TRX) Blockchain</strong><br/>
    Should you aspire to build a blockchain similar to TRON, our blockchain engineers can help bring your vision to life through forking.
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