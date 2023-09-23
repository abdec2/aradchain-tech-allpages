import React from "react";
import style from "./ebPTP.module.css";
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
              <Heading>Procure to Pay</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Revolutionize the procure to pay cycle using blockchain technology, enhancing the management of goods, services, and resources.Blockchain for Procure to Pay,Streamlined Monitoring and Disbursement.Procure-to-Pay (PTP) encompasses multiple steps, connecting clients with one or more service/product providers. This process involves stakeholder identification, budgeting, invoicing, payment settlement, and more.Challenges in the Conventional PTP Process.The procure-to-pay process is intricate, spanning systems and operations, and susceptible to inefficiencies and vulnerabilities like fraud and money laundering. As a critical business process involving substantial cash flows, it must overcome challenges related to operational processes, transactions, and supply chain visibility. Manual functions, duplicate data, and reconciliation issues plague the current process.
            <strong>TALK TO OUR EXPERTS</strong>
            </Text>
            <Heading as="h2" size="2xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Blockchain Solution for Procure to Pay
</Heading>

<Text letterSpacing={1} textAlign="center">
  Common PTP challenges that hinder effective execution and management include:
</Text>

<Heading as="h3" size="lg" mt={3} textAlign={'center'}>
  Reduced Accuracy
</Heading>
<Text letterSpacing={1} textAlign="center">Manual, paper-based data entry increases the risk of errors.</Text>

<Heading as="h3" size="lg" mt={3} textAlign={'center'}>
  Lack of Visibility
</Heading>
<Text letterSpacing={1} textAlign="center">Information exchange and accessibility delays across the supply chain.</Text>

<Heading as="h3" size="lg" mt={3} textAlign={'center'}>
  Forged Invoicing
</Heading>
<Text letterSpacing={1} textAlign="center">Lack of centralized transaction history leads to forged invoices.</Text>

<Heading as="h3" size="lg" mt={3} textAlign={'center'}>
  Delayed Transactions
</Heading>
<Text letterSpacing={1} textAlign="center">Manual routing and sign-off processes slow down payments.</Text>

<Heading as="h3" size="lg" mt={3} textAlign={'center'}>
  High Costs per Invoice
</Heading>
<Text letterSpacing={1} textAlign="center">Human error resolution escalates invoice costs.</Text>

<Heading as="h3" size="lg" mt={5} textAlign={'center'}>
  AradChain Technologies’s Approach - Blockchain for Procure to Pay
</Heading>

<Text letterSpacing={1} textAlign="center">
  Blockchain technology can transform the PTP process, offering benefits like transparency, security, and transaction efficiency. Blockchain in procurement streamlines tasks by automating information exchange.
</Text>

<Text letterSpacing={1} textAlign="center">
  We utilize blockchain to create a PTP solution covering the entire spectrum of processes – from invoice processing and data management to funds management and on-time payments. Our blockchain procurement solution aims to:
</Text>

<Heading as="h3" size="lg" mt={3} textAlign={'center'}>
  Simplify User Onboarding
</Heading>
<Text letterSpacing={1} textAlign="center">
  Utilize blockchain-driven KYC or digital identity verification for fast user onboarding and centralized document repository.
</Text>

<Heading as="h3" size="lg" mt={3} textAlign={'center'}>
  Enhance Validation and Authentication
</Heading>
<Text letterSpacing={1} textAlign="center">
  Blockchain facilitates quick authentication distribution across the PTP chain, enhancing fraud prevention and security.
</Text>

<Heading as="h3" size="lg" mt={3} textAlign={'center'}>
  Facilitate Invoice Processing
</Heading>
<Text letterSpacing={1} textAlign="center">
  Blockchain-powered invoice exchange grants shared database access, eliminating invoice scanning and enabling authorized parties to review transactions.
</Text>

<Heading as="h3" size="lg" textAlign={'center'} mt={3}>
  Accelerate Settlements
</Heading>
<Text letterSpacing={1} textAlign="center">
  Transparent, real-time shared database minimizes the need for reconciliations, potentially revolutionizing settlement times.
</Text>

<Heading as="h3" size="lg" textAlign={'center'} mt={3}>
  Promote Stakeholder Trust
</Heading>
<Text letterSpacing={1} textAlign="center">
  Shared public IDs, product quality ratings, reliable delivery, timely invoice payment, and transaction history cultivate trust.
</Text>

<Heading textAlign={'center'} as="h3" size="lg" mt={3}>
  Mitigate Money Laundering Risk
</Heading>
<Text letterSpacing={1} textAlign="center">
  Access to tamper-free historical payment information allows real-time identification of suspicious transactions, reducing money laundering risk.
</Text>

<Heading as="h2" size="2xl" letterSpacing={2} my={5} textAlign="center" mt={10} mb={10}>
  Features of Our Blockchain-Based Procure to Pay Solution
</Heading>

<Text letterSpacing={1} textAlign="center">
  Our blockchain-based solution boasts cutting-edge features for high performance.
</Text>

<Heading textAlign={'center'} as="h3" size="lg" mt={3}>
  Procure-to-Pay on Blockchain
</Heading>
<Text mt={4} letterSpacing={1} textAlign="center">Multi-currency Wallet</Text>
<Text mt={4} letterSpacing={1} textAlign="center">Secure storage and transfer of various cryptocurrencies and tokens, enabling secure transactions.</Text>

<Text mt={4} letterSpacing={1} textAlign="center">Smart Contract</Text>
<Text mt={4} letterSpacing={1} textAlign="center">Manages crypto token creation and distribution for payments across the PTP chain.</Text>

<Text letterSpacing={1} textAlign="center">Powerful Matching Engine</Text>
<Text letterSpacing={1} textAlign="center">Quickly matches buy and sell orders, ensuring prompt order fulfillment.</Text>

<Text  mt={4} letterSpacing={1} textAlign="center">Instant KYC and AML</Text>
<Text mt={4} letterSpacing={1} textAlign="center">Blockchain-driven KYC and AML processes expedite user verification.</Text>


<Text mt={4} letterSpacing={1} textAlign="center">Liquidity Options</Text>
<Text mt={4} letterSpacing={1} textAlign="center">High liquidity through secure API connections with external exchanges.</Text>

<Text mt={4} letterSpacing={1} textAlign="center">Reporting Dashboard</Text>
<Text mt={4} letterSpacing={1} textAlign="center">Access balance and transaction reports for transparency and decision-making.</Text>

<Text mt={4} letterSpacing={1} textAlign="center">Multi-layer Security</Text>
<Text mt={4} letterSpacing={1} textAlign="center">Enhanced security through two-factor authentication, encryption, and more.</Text>

<Text mt={4} letterSpacing={1} textAlign="center">Funds Management</Text>
<Text mt={4} letterSpacing={1} textAlign="center">Simplifies fund management and provides essential details.</Text>

<Text mt={4} letterSpacing={1} textAlign="center">User Management</Text>
<Text mt={4} letterSpacing={1} textAlign="center">Efficiently manages users, logins, privileges, and roles.</Text>

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