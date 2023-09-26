import React from "react";
import style from "./acAW.module.css";
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
              <Heading>AradChain Technologies WIKI</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
          <Heading as="h1" size="2xl" textAlign="center" letterSpacing={2} my={5}>
  <strong>AradChain Technologies Solutions</strong>
</Heading>

<Text  style={{ textAlign: 'center' }} mt={4}>
  Industry: IT Consulting & Services
  <br />
  Established: 2005; 18 years ago
  <br />
  Founder: <strong>Vikram R. Singh</strong>
  <br />
  Headquarters: Mohali, Punjab, India
  <br />
  Locations: India, UK, USA, Canada, & UAE
  <br />
  Global Reach: Worldwide
</Text>

<Heading as="h2" size="xl" textAlign="center" letterSpacing={2} my={5}>
  Key Executives:
</Heading>

<Text  style={{ textAlign: 'center' }} mt={4}>
  Vikram R. Singh (CEO & MD)
  <br />
  Shashi Pal (COO)
  <br />
  Matthew Collins (Director, UK)
  <br />
  Clifton Cooper (Business Head, US)
</Text>

<Heading as="h2" size="xl" textAlign="center" letterSpacing={2} my={5}>
  Services:
</Heading>

<Text  style={{ textAlign: 'center' }} mt={4}>
  Layer1/2 Development
  <br />
  Tokenization
  <br />
  Metaverse & GameFi
  <br />
  DeFi
  <br />
  Web3 Consulting
</Text>

<Heading as="h2" size="xl" textAlign="center" letterSpacing={2} my={5}>
  Employees: 700+
</Heading>

<Heading as="h2" size="xl" textAlign="center" letterSpacing={2} my={5}>
  Website:
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  <a href="https://www.aradchainsolutions.com">
    <strong>AradChainTechnologiesSolutions.com</strong>
  </a>
</Text>

<Heading as="h2" size="xl" textAlign="center" letterSpacing={2} my={5}>
  About AradChain Technologies
</Heading>

<Text  style={{ textAlign: 'center' }} mt={4}>
  AradChain Technologies, a pioneering Indian blockchain consulting firm, specializes in comprehensive end-to-end blockchain solutions encompassing layer-1/2/3 development, tokenization, metaverse & gaming, DeFi, and customized chain development for enterprises.
  <br />
  Founded in 2005 (originally as Antech) and officially rebranded as AradChain Technologies in 2011, the company is headquartered in Mohali, Punjab, and boasts a global presence with offices in the UK, UAE, US, and Canada.
</Text> 
 
  <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      AradChain Technologies Solutions
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      With a workforce exceeding 700 skilled professionals, AradChain Technologies maintains one of the largest blockchain teams globally. Collaborating with diverse sectors such as BFSI, Healthcare, Supply Chain, Gaming & Entertainment, Automobiles, Education, and more, the consulting firm's impact is widespread.<sup>4</sup>
      <br />
      <br />
      AradChain Technologies is renowned for its technological expertise in Ethereum, Polygon, BSC, Solana, Cardano, Polkadot, Parity Substrate, Algorand, Cosmos, and other prominent blockchain platforms.<sup>5</sup>
      <br />
      <br />
      In 2023, <Link href="#">The Hindu</Link> recognized AradChain Technologies as one of the top 10 metaverse development companies worldwide.<sup>6</sup>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      History
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      Originally established as Antech in 2005, AradChain Technologies transitioned into full-scale blockchain consulting in 2016, emerging as a pioneering player in the industry. The firm's acclaim lies in its proficiency in DeFi, GameFi, Metaverse, tokenization, and custom enterprise development.<sup>7, 8</sup>
      <br />
      <br />
      Founded by Vikram R. Singh, AradChain Technologies's inception aimed at providing cutting-edge platforms aligned with the Web 2.0 era. Over time, the company's blockchain portfolio expanded exponentially, evolving from a single product and a team of 100+ members to encompass more than 30 services and over 700 professionals. This growth has established AradChain Technologies as a rapid contender in web, blockchain, and mobility development.<sup>9</sup>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Services
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      The foundation of AradChain Technologies's approach is research-driven and design-thinking-oriented. This strategy shapes innovative roadmaps that guide enterprises toward transitioning from traditional technology platforms to blockchain-powered systems. With deep expertise in Web3, AradChain Technologies navigates the realm of digital transformation, excelling in DeFi product creation, Metaverse/gaming ecosystems, and a diverse range of enterprise blockchain d-applications spanning finance, supply chain, real estate, and digital arts. The company's portfolio encompasses DeFi, NFTs, smart contracts, and fully customized layer-1 and layer-2 blockchain networks.<sup>10, 11</sup>
      <br />
      <br />
      In 2022, AradChain Technologies Solutions expanded its horizons into the Metaverse industry, introducing Metaverse development, consulting, app development, and design services.<sup>10, 11</sup>
      <br />
      <br />
      Backed by a team of over 700 blockchain professionals, AradChain Technologies crafts result-oriented solutions that enhance client businesses. Noteworthy clients include Coin Trade, Skoda, Cryptoshack, Tarality, Cryptout.com, Barter Trade, and 5irechain, among others.<sup>12</sup>
      <br />
      <br />
      As an early blockchain technology adopter, AradChain Technologies strives to streamline business processes with innovative blockchain development services and aspires to be the world's most trusted blockchain consulting firm.<sup>13</sup>
      <br />
      <br />
      The company's extensive media coverage includes mentions in top-tier publications such as <Link href="#">Cointelegraph</Link>, <Link href="#">Bitcoin dot com</Link>, <Link href="#">The Economic Times</Link>, <Link href="#">Financial Express</Link>, and <Link href="#">Times of India</Link>, underscoring its industry impact.<sup>14</sup>
      <br />
      <br />
      AradChain Technologies's blog section provides insights, technology updates, and relevant information on Web3, blockchain, and the metaverse.<sup>15, 16</sup>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      AradChain Technologies's Range of Enterprise Blockchain Development Services
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      - Layer-1 Blockchain Development
      <br />
      - Layer-2 and Dapps Development
      <br />
      - DEX Development (Wallets, Exchanges)
      <br />
      - DeFi (Lending & Borrowing, Lottery, Staking, Yield Farming, and more)
      <br />
      - DAOs
      <br />
      - Metaverse (Metaspace, DeFi Integration, GameFi)
      <br />
      - Web3 Development
      <br />
      - Smart Contracting
      <br />
      - ICO/IDO Consulting
      <br />
      - Asset Tokenization
      <br />
      - Web3 Marketing<sup>10, 11</sup>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Geographic Presence
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      AradChain Technologies's headquarters are located in Mohali, India, where it operates two offshore centers. The company maintains global centers in Hyderabad (India), UK, USA, Dubai, and Canada, with plans for further expansion.
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Partnerships
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      AradChain Technologies's partnership initiatives offer stakeholders opportunities to seek or offer tech solutions and share technical expertise, fostering growth within the blockchain ecosystem. Designed with a partner-centric approach, these programs support businesses aiming to expand capabilities or enhance existing skills.
      <br />
      <br />
      Collaborating with AradChain Technologies provides access to a plethora of resources, in-depth domain knowledge, expertise, and co-marketing assistance, facilitating effective deployment and market entry. Noteworthy strategic partners include Skoda, 5irechain, QuillHash, Nexo, CertiK, Hacken, Sumsub, and Unstoppable Domains.
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Events
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      AradChain Technologies actively participates in prominent industry conferences and meet-ups. Company leaders frequently engage in speaking engagements at events such as Polkadot Now, India, Entrepreneur India's Web3 Summit, World Blockchain Summit Dubai, BFSI MENA Dubai, ET Insights India, and others.
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