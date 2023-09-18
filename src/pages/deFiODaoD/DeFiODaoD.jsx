import React from "react";
import style from "./deFiODaoD.module.css";
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
              <Heading>Olympus DAO Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            AradChain Technologies: Your Expert DAO Development Partner.The capabilities of blockchain have furnished us with a unified and secure shared system enriched with diverse features. Harnessing the power of DAO blockchain development presents a cost-effective solution to the predicaments faced by conventional centralized businesses. Delve into the realm of safeguarding your business interests through DAO blockchain development with the assistance of AradChain Technologies Solutions.Insight into DAO Development.A Decentralized Autonomous Organization, abbreviated as DAO, epitomizes a transparent and self-governing community-led entity that operates sans a central authority. This signifies that a DAO's governance lies in the hands of all project members, rendering all critical decisions collectively taken by the community.DAOs can be established using myriad crypto wallets, be they under the control of organizations or individuals. Operations are executed through code, thus facilitating asset managment and voting without the need for conventional banking and legal formalities.
            </Text>
            <Heading as='h2' size='xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  DAO vs Traditional Organizations
</Heading>

<Heading as='h3' size='lg' letterSpacing={1} my={4} textAlign={'center'}>
  Traditional Organizations
</Heading>
<Text textAlign={'center'}>
  <strong>Governance:</strong> Centralized top-down management, fostering information and decision bottlenecks.<br />
  <strong>Trust:</strong> Anchored in experience and past relationships.<br />
  <strong>Decision-Making:</strong> Hinges on expertise and seniority.<br />
  <strong>Operational Costs:</strong> Elevated.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={4} textAlign={'center'}>
  AI DAOs
</Heading>
<Text textAlign={'center'}>
  <strong>Governance:</strong> Embedded in code through smart contracts.<br />
  <strong>Trust:</strong> Anchored in cryptography (Blockchain).<br />
  <strong>Decision-Making:</strong> Automated through AI (independent agents or AGI) and smart contracts.<br />
  <strong>Operational Costs:</strong> Minimal.
</Text>

<Text textAlign={'center'} mt={5}>
  When contemplating organizational governance in the blockchain domain, two centralized solutions emerge: COs (Continuous Organizations) or traditional organizations, and DAOs (Decentralized Autonomous Organizations). Both operate on intricate crypto-economic principles and smart contracts.
</Text>

<Text textAlign={'center'}>
  While DAOs automate and decentralize corporate governance, COs aspire to cultivate a sustainable financial model for conventional organizations. Structurally, DAOs are flat entities reliant on smart contracts to enforce rules and decision-making. DAO Tokens empower participants with voting and decision-making authority, with more tokens equating to greater influence. In contrast, COs employ Decentralized Autonomous Trusts (DATs), immutable smart contracts that discourage speculation while incentivizing long-term stakeholder involvement.
</Text>
<Heading as='h4' size='lg' letterSpacing={1} my={4} textAlign={'center'}>
How Does a DAO Function?
</Heading>
<Text textAlign={'center'} mt={5}>
A core community team establishes DAO rules using smart contracts.
Smart contracts lay the groundwork on which the DAO operates, visible, verifiable, and auditable by all members.
Tokens are issued by the DAO platform to facilitate funding decisions and governance allocation.
This protocol enables the DAO to vend tokens for fundraising, thereby bolstering the treasury.
Token holders receive voting rights in proportion to their holdings.
Upon funding completion, the DAO is ready for deployment. The code is launched into production and cannot be altered without consensus attained through member voting.
</Text>
<Heading as='h4' size='lg' letterSpacing={1} my={4} textAlign={'center'}>
Why Opt for DAO Platform Development?
</Heading>
<Text textAlign={'center'} mt={5}>
When navigating projects that necessitate funding and entail transactions with a plethora of unknown entities, establishing trust can be challenging. The integration of a decentralized autonomous organization blockchain offers myriad opportunities for your business.
Embrace DAO blockchain development for wholly transparent transactions, mandatory voting for implementing changes, and automatic handling of services in a standardized fashion.
</Text>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Spot Trading Module</Text></CardBody></Card>
</SimpleGrid>

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