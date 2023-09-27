import React from "react";
import style from "./deFiDAOB.module.css";
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
              <Heading>DAO Blockchain Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
          <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  DAO vs Traditional Organizations
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Traditional Organizations</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Governance: Centralized top-down management, fostering information and decision bottlenecks.
</Text>
<Text align={'center'} letterSpacing={1}>
  Trust: Anchored in experience and past relationships.
</Text>
<Text align={'center'} letterSpacing={1}>
  Decision-Making: Hinges on expertise and seniority.
</Text>
<Text align={'center'} letterSpacing={1}>
  Operational Costs: Elevated.
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>AI DAOs</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Governance: Embedded in code through smart contracts.
</Text>
<Text align={'center'} letterSpacing={1}>
  Trust: Anchored in cryptography (Blockchain).
</Text>
<Text align={'center'} letterSpacing={1}>
  Decision-Making: Automated through AI (independent agents or AGI) and smart contracts.
</Text>
<Text align={'center'} letterSpacing={1}>
  Operational Costs: Minimal.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Features of a Decentralized Autonomous Network
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Open Source Code</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  DAOs remain closed until the financing phase concludes, at which point they evolve into independent autonomous entities detached from external influences. By open-sourcing the code, all participants gain access to it.
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>DAO Token</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  The financing phase endures while setting up DAO rules. Ensuring these rules inherently foster genuine economic growth and accommodate financing is pivotal during this phase.
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Based on Smart Contracts</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Effective decentralized autonomous organization blockchain operation necessitates well-defined guidelines dictating platform behavior. These guidelines, or rules, are encapsulated within smart contracts, rendering them valid and enforceable in the future.
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Using Blockchain Technology</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Leveraging blockchain technology, organizations can function autonomously and in a decentralized fashion. Users wield authority and decision-making power on the platform, rendering DAOs transparent, immune to corruption, and immutable.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  How Does a DAO Function?
</Heading>

<Text align={'center'} letterSpacing={1} style={{ marginTop: '4rem' }}>
  A core community team establishes DAO rules using smart contracts.
</Text>
<Text align={'center'} letterSpacing={1}>
  Smart contracts lay the groundwork on which the DAO operates, visible, verifiable, and auditable by all members.
</Text>
<Text align={'center'} letterSpacing={1}>
  Tokens are issued by the DAO platform to facilitate funding decisions and governance allocation.
</Text>
<Text align={'center'} letterSpacing={1}>
  This protocol enables the DAO to vend tokens for fundraising, thereby bolstering the treasury.
</Text>
<Text align={'center'} letterSpacing={1}>
  Token holders receive voting rights in proportion to their holdings.
</Text>
<Text align={'center'} letterSpacing={1}>
  Upon funding completion, the DAO is ready for deployment. The code is launched into production and cannot be altered without consensus attained through member voting.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Why Opt for DAO Platform Development?
</Heading>
<SimpleGrid minChildWidth='100px' spacing='20px' mt={10}>
  <Card><CardBody><Text align={'center'}>Trusted Timestamping</Text></CardBody></Card>
</SimpleGrid>

<SimpleGrid minChildWidth='100px' spacing='20px' mt={10}>
  <Card><CardBody><Text align={'center'}>Eliminate Security Threats</Text></CardBody></Card>
</SimpleGrid>

<SimpleGrid minChildWidth='100px' spacing='20px' mt={10}>
  <Card><CardBody><Text align={'center'}>  Farewell to Managerial Supervision</Text></CardBody></Card>
</SimpleGrid>

<SimpleGrid minChildWidth='100px' spacing='20px' mt={10}>
  <Card><CardBody><Text align={'center'}>Utterly Autonomous Control</Text></CardBody></Card>
</SimpleGrid>


<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Why Choose AradChain Technologies for DAO Development Services?
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Technical Prowess</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Our focus is exclusively on Blockchain technologies. We specialize in one domain and excel at it.
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Expert Team</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  A team of 500 experts aids in refining your offerings, suggesting optimal tech approaches, and aiding in the establishment of communities and campaigns.
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Swift Development</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Tailored products aligned with your target audience are our hallmark. A coherent roadmap ensures efficient, expedited development and deployment.
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Comprehensive Support</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Our commitment transcends product launch. Extensive post-delivery services are offered, enabling your unwavering focus on growth.
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Meaningful Outcomes</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  We bring your aspirations to life, ensuring tangible value emerges from your investments.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  A Glimpse of Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Get-Ready-For-Deploying-DAO-In-Healthcare</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Harnessing DAO Blockchain Development to Empower Healthcare and Related Businesses in 2023
  Blockchain technology is revamping enterprise operations, providing a secure, transparent approach to data management and sharing. It is [...]
  READ MORE
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Building and Executing DAO Governance Models in 2023</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Cryptocurrencies and blockchain technology merely scratch the surface; the upcoming buzz centers on Decentralized Autonomous Organizations (DAOs). DAO Governance Models are [...]
  READ MORE
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Introduction to DAO Governance Tokens: Why and How to Construct Them</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  The decentralized world orbits the concept of empowering users with authority and ownership. However, this hinges on the participation of individuals [...]
  READ MORE
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Blockchain Tech Expertise
</Heading>

<Text align={'center'} letterSpacing={1} style={{ marginTop: '4rem' }}>
  We're here for a friendly conversation, eager to explore your business needs—no obligations attached.
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