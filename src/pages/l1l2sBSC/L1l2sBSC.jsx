import React from "react";
import style from "./l1l2sBSC.module.css";
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
              <Heading>Binance Smart Chain Development Services</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Embark on your business journey with AradChain Technologies's expertise in Binance Smart Chain Development.Skyrocket Your Business Through Binance Smart Chain DevelopmentSince its launch in August 2020, Binance Smart Chain (BSC) has stood as an independent blockchain running alongside Binance Chain. This innovation addresses the need for enhanced smart contract flexibility, which was absent in Binance Chain, while also ensuring Ethereum Virtual Machine (EVM) compatibility. Binance Smart Chain is a recent advancement that grants users access to a thriving and expanding digital asset ecosystem.AradChain Technologies delivers flawless Binance Smart Chain development services, offering best-in-class solutions that merge your customized features with industry-leading traits, amplifying your business growth. We provide comprehensive blockchain development services, ensuring efficient and self-sufficient blockchain operations with swift transaction times and cost-effective fee structures. Whether you equire a dApp or a token, we are your ultimate destination, building robust Binance Smart Chain solutions that align with your business needs and deliver perfection.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Exceptional BSC Blockchain Development Solutions
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            Exceptional BSC Blockchain Development Solutions Yield Outstanding Results. Harness the Robust Binance Smart Chain Ecosystem for Unparalleled Business Growth. AradChain Technologies is your go-to solution for high-end platform development, leveraging profound domain knowledge and cutting-edge blockchain technology expertise. Our Binance Smart Chain Development Services include consultation to transform intricate business goals into matchless solutions aligned with your model, token development with diverse payment options, smart contract development for high-performance outcomes, scalable crypto wallets for superfast and secure transactions, NFT marketplace construction for an enhanced customer experience, DeFi applications covering yield farming, staking, MLM, and more, secure, reliable, and budget-friendly DeFi-based dApps and blockchain protocols, and mission-driven decentralized exchange solutions. Transform your business with our robust Binance Smart Chain development services and gain a competitive edge in the digital ecosystem. Key features of Binance Smart Chain include Proof of Staked Authority for enhanced transaction capacity, cross-chain compatibility for seamless asset transfers, EVM compatibility for Ethereum tool support, and BEP-20 token standard for diverse transactions. Unlock the potential of our BSC solutions development, focusing on consensus and cross-chain compatibility, and accelerate your business operations through our comprehensive Binance Smart Chain solutions, just a click away.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Our BSC Blockchain Development Process
            </Heading>
            <Text align={'center'} letterSpacing={1}>
              Creating on-demand crypto exchange software requires time and investment. However, the wait is worthwhile when the platform demands high-level customization and integration of complex use cases. The step-by-step transformation from concept to functional exchange software involves:
            </Text>

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Frequently Asked Questions</Heading>
            <Text align={'center'} letterSpacing={1} mt={3}>What benefits does Binance Smart Chain offer?</Text>
            <Text align={'center'} letterSpacing={1} mt={3}>What is the cost of building an application on Binance Smart Chain?</Text>
            <Text align={'center'} letterSpacing={1} mt={3}>What types of applications can I build on Binance Smart Chain?</Text>
            <Text align={'center'} letterSpacing={1} mt={3}>How fast is the Binance Smart Chain?</Text>
            <Text align={'center'} letterSpacing={1} mt={3}>How soon can AradChain Technologies begin developing my project?</Text>

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Explore More in Our Blogs</Heading>
            <Text align={'center'} letterSpacing={1} mt={3}>What benefits does Binance Smart Chain offer? Breathing Life into the Metaverse: How AI Empowers NPCs, Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies have brought a big change in the digital landscape. White Label Crypto Bank, How to Get Started with White Label Crypto Banking Platform? When the opportunity knocks at the door, we all look for a quick and easy way to leverage it for a better future. How Metaverse Casino Development Is Shaping the Future of Gambling? The casino—often a game of chance that has propelled some to grand fortunes while leaving others in the dust, as many are exploring the potential of the metaverse. Leverage Our Blockchain Technology Expertise. We're here for a friendly chat, ready to discuss your business needs without any obligations. Count on us for technical support; we're open to inquiries and requests.</Text>
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