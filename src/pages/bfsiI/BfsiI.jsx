import React from "react";
import style from "./bfsiI.module.css";
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
import WhatsApp from './../../components/WhatsappWidget/WhatsApp';
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
              <Heading>Blockchain Technology in the Insurance Industry</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Blockchain Technology in the Insurance Industry,liminate Claims Delays, Data Duplicity, and Policy Frauds.Revolutionize your offerings with Blockchain-based Insurance
AradChain Technologies's innovative blockchain solution for the insurance sector offers a remedy for critical challenges like redundant data entry, fraudulent claims, and sluggish claims processing. Built on a foundation of trust, this peer-to-peer model ensures complete transparency, expedites processing, and reduces both time and financial expenditures.The Role of Blockchain Applications in the Insurance Sector
Insurance companies grapple with the storage, verification, and processing of massive volumes of customer data, as well as the facilitation of claims payouts. The absence of an automated solution has resulted in a convoluted ecosystem prone to inaccurate claims handling and policy manipulation. Additionally, this situation leaves customers helpless, forced to engage with an underperforming industry.

In the insurance realm, blockchain securely interlinks claims data, transaction records, and other invaluable datasets from all stakeholders. The ledger's data is duplicated across all nodes, ensuring absolute transparency.

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

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Challenges Addressed:
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Fragmented Data Sources
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  Inaccurate Underwriting
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  Complex Liability Assessment
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  Dependency on Intermediaries
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Blockchain in Insurance - Streamlining and Expediting Data Processing
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  AradChain Technologies boasts a proven track record in establishing comprehensive blockchain infrastructures for BFSI products, yielding cost savings, resource efficiency, and regulatory compliance. Our blockchain-based insurance application leverages self-executing smart contracts to automate risk modeling, auditing, and compliance checks. By involving all stakeholders, it eliminates false entries and fosters trust. Our solution significantly impacts the six foundational aspects of the industry.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Anti-Money Laundering (AML)
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Primary and secondary stakeholders, including insurers, reinsurers, regulators, validators, brokers, and customers, share data within an immutable repository, enhancing visibility.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Anti-Fraud
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  A secure shared database with multiple levels of compliance ensures asset ownership, eliminates duplication, and streamlines claims processing.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Re-Insurance
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Efficiently manages transactional data exchanges between insurers and reinsurers through smart contracts accessible to regulators and retrocessionaires.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Parametric Insurance
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Smart contracts automatically trigger policy execution in the event of a loss covered by insurance logic, applicable to all insurance-linked securities and bonds.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Claims
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Reduced claims fraud through the elimination of data silos, providing customers greater control over their data and access rights.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Peer-to-Peer Models
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Enhanced P2P models by automating tasks and securing funds in smart contract-based escrows.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  REQUEST A FREE DEMONSTRATION
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  AradChain Technologies’s Competitive Edge - Blockchain Applications for the Insurance Value Chain
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  AradChain Technologies establishes a shared ledger between institutions (e.g., clinics) and insurers, streamlining data exchange and accelerating claims processing accurately. This shared communication mechanism enhances claim validation, payment, and minimizes manual errors. Our tailor-made solution covers the entire insurance value chain, applicable to both group and individual policies.
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Key Features:
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Self-Governed Claims Handling & Underwriting
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  Compatibility with Various Insurance Types
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  Inherent Security & Scalability
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  Mitigation of Fraud Risks
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  Reduction of Intermediary Dependency
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  Holistic Group and Individual Policy Management
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Key Features of Our Blockchain-based Insurance Solution
</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>Smart Contracts</Text></CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}> Optical Character Recognition (OCR)</Text></CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>InterPlanetary File System (IPFS)</Text></CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  User Onboarding
</Text>
</CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  Integrated Invoicing
</Text>
</CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  Reporting Analytics
</Text>
</CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  Funds Management
</Text>
</CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  User Administration
</Text>
</CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  Claims Oversight
</Text>
</CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  Policy Administration
</Text>
</CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  Claims Management
</Text>
</CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  Payments & Collections
</Text>
</CardBody></Card>
              <Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
  Pricing/Underwriting
</Text>
</CardBody></Card>
<Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
Streamlined Due Diligence

</Text>
</CardBody></Card>
<Card><CardBody><Text style={{ textAlign: 'center' }} mt={4}>
Decentralized Data Storage
</Text>
</CardBody></Card>

</SimpleGrid>



<Text style={{ textAlign: 'center' }} mt={8}>
  <strong>Explore Our Blog Highlights</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Maximizing Profits With a Crypto Arbitrage Bot in 2023
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  The rise in cryptocurrency trading's popularity has led to increased interest in crypto arbitrage bots. These innovative tools empower traders to...
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Creating a Bitcoin Exchange Software Similar to Poloniex
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Table of Contents Introduction What is Poloniex? Key Features of Poloniex-Inspired Bitcoin Exchange Software Establishing Your Own Exchange Platform Using Poloniex as...
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Elevating Your Crypto Exchange Software for 2023
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  The year 2023 has brought robust growth to the cryptocurrency market. As the year progresses, market fluctuations and new entrants are reshaping...
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Our Expertise in Blockchain Technology
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  We're here for a friendly chat to discuss your business needs, no commitments.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  Count on us for comprehensive technical support. We're open to any inquiries or requests.
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
      <WhatsApp />


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