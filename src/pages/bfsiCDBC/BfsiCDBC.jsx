import React from "react";
import style from "./bfsiCDBC.module.css";
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
              <Heading>Central Bank Digital Currency</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Adopt a Universal Digital Payment Solution for the Digital Age.

Central Bank Digital Currency is shaping the future Monetary Landscape.
The fusion of advanced technologies and the emergence of information systems have led to a revolution in the banking and financial domain. Financial institutions are embracing transformative shifts driven by innovative technologies like blockchain.

The rise of Bitcoin and other cryptocurrencies acted as a catalyst for this revolution. The concept of digital currencies has gained significant traction, paving the way for the emergence of central bank digital currencies (CBDCs).

A central bank digital currency (CBDC) is a digital rendition of a traditional fiat currency, integrated into diverse monetary systems to facilitate innovation and serve the public's interest. CBDCs have taken center stage in discussions among governments, central banks, and private sectors, heralded as the future of the digital financial landscape.

Central Bank-Issued Digital Currency:
Transitioning from Concept to Design
The Bank for International Settlements (BIS) has reported that more than 70% of central banks express interest in exploring central bank digital currencies. Initial CBDC trials have showcased their potential to enhance efficiency and transparency in central bank operations. Moreover, CBDCs empower central banks to leverage real-time data, reinforcing their decision-making processes.


            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  LAUNCH YOUR CBDC
</Heading>

<Text textAlign={'center'} mt={4}>
  AradChain Technologies's Expertise in Developing Central Bank-Backed Digital Currencies
</Text>

<Text textAlign={'center'} mt={4}>
  As numerous central banks delve into the possibilities of CBDCs and initiate pilot programs, the demand for central bank-issued digital currency development is on the rise.
</Text>

<Text textAlign={'center'} mt={4}>
  At AradChain Technologies Solutions, we offer top-tier solutions for developing digital central bank currencies. Our team of experienced blockchain engineers and subject matter experts chart a clear course for your development journey. Starting with a deep understanding of your specific requirements, we harness blockchain innovation to meet your unique infrastructure needs, address challenges, and realize your strategic vision.
</Text>

<Text textAlign={'center'} mt={4}>
  Engage with our subject matter experts to discuss your business plan.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Your Pathway to Successful CBDC Development
</Heading>

<Text textAlign={'center'} mt={4}>
  <strong>STEP 1</strong>
</Text>

<Text textAlign={'center'} mt={2}>
  Grasp the implications, risks, and opportunities presented by CBDCs.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>STEP 2</strong>
</Text>

<Text textAlign={'center'} mt={2}>
  Devising an intelligent strategy for seamless adoption across both business and technology aspects.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>STEP 3</strong>
</Text>

<Text textAlign={'center'} mt={2}>
  Evaluate, implement, and deploy the core technological infrastructure for central bank digital currency systems.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>STEP 4</strong>
</Text>

<Text textAlign={'center'} mt={2}>
  Strengthen CBDC systems with robust security measures and resilience protocols.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Why Opt for AradChain Technologies for Central Bank Digital Currency Development?
</Heading>

<Text textAlign={'center'} mt={4}>
  <strong>Tangible Outcomes</strong>
  We create measurable impacts, ensuring your investments yield value.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Swift Development</strong>
  We provide tailor-made solutions that resonate with your target audience. A well-structured roadmap expedites the development and deployment process.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Comprehensive Support</strong>
  Our commitment extends beyond product launch. We offer extensive post-delivery services, enabling you to focus on your growth.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Expert Team</strong>
  With over 300 experts, we refine your offerings, suggest optimal tech approaches, and assist in setting up communities and campaigns.
</Text>

<Text textAlign={'center'} mt={4}>
  By joining forces with AradChain Technologies, you gain access to a team of technical experts armed with real-world experience in crafting success stories.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  A Glimpse into Our Blogs
</Heading>

<Text textAlign={'center'} mt={4}>
  <strong>Maximizing Profits With Crypto Arbitrage Bot in 2023</strong>
  As cryptocurrency trading has become increasingly popular, there has been a constant buzz around crypto arbitrage bots. This groundbreaking development empowers traders [...]
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>How to Develop a Poloniex-like Bitcoin Exchange Software</strong>
  Table of Contents Introduction What is Poloniex? Salient Features of Bitcoin Exchange Software Modeled After Poloniex Setting Up Your Exchange Platform Using [...]
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>From Bland To Brilliant: Building Advanced Crypto Exchange Software in 2023</strong>
  The onset of 2023 witnessed a robust cryptocurrency market, and as the year progressed, we observed market fluctuations and the entry of [...]
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Proficiency in Blockchain Technology
</Heading>

<Text textAlign={'center'} mt={4}>
  We are ready for a friendly chat to delve into your business needs, obligation-free.
</Text>

<Text textAlign={'center'} mt={4}>
  We are dedicated to offering technical support, open to inquiries and requests.
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