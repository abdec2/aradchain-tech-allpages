import React from "react";
import style from "./p2pPL.module.css";
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
import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card ,Button,Stack} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>P2P Crypto Lending Software Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            P2P Crypto Lending Software Development,Revolutionizing the Peer-to-Peer Lending Landscape.Seize the monumental opportunity of the lending market, projected to reach an astounding $290 billion in 2020. Position yourself to tap into this billion-dollar sector with our white label P2P lending platform.Tailored White Label P2P Lending Platform Development.The fusion of cutting-edge technologies, innovative lending models, and evolving consumer behavior has propelled the growth of P2P crypto lending software. A multitude of crypto enthusiasts around the world are capitalizing on this trend to generate substantial profits. What fuels businesses and entrepreneurs to enter the P2P lending arena is the data shared by the World Bank, revealing that 3 billion adults globally remain unbanked. Additionally, a significant number of individuals are denied loans due to poor credit ratings. Developing a P2P lending platform presents an opportunity to bridge this gap, providing a contemporary P2P lending exchange to fulfill borrowing and lending needs.
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


            <Text  size='2xm' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>At AradChain Technologies,</strong> we can help you connect with these 3 billion unbanked individuals through our P2P lending software development. Our <strong>white label P2P lending platform,</strong> equipped with cutting-edge features, expedites deployment and can swiftly enter the market under your brand. Whether you require an automated platform with a robust matching engine or a lending marketplace, our mission-driven <strong>P2P lending software development</strong> caters to your needs. Our turnkey solution empowers crypto startups like yours to realize the vision of establishing a foundation for your <strong>P2P crypto lending platform.</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Features of Our Customizable White Label P2P Lending Software</strong>
</Heading>

<Text align={'center'}>
  <strong>P2P Lending Platform</strong>
  <br/>Multi-Layer Security
</Text>

<Text align={'center'}>
  We implement top-tier security solutions including SSL implementation and two-factor authentication (2FA) to bolster login security and ensure encrypted user access.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>KYC and AML
</Text>

<Text align={'center'}>
  Geographically-based KYC and AML verification processes verify users' identities and are triggered during the withdrawal of specific cryptocurrency amounts.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Escrow System
</Text>

<Text align={'center'}>
  Our secure, smart-contract-driven Escrow system automates the locking and releasing of users' crypto assets, ensuring transparent and swift transactions.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Hot Wallet
</Text>

<Text align={'center'}>
  With an integrated, multi-cryptocurrency encrypted hot wallet, users can securely store and transact a range of cryptocurrencies.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>LVR Calculation
</Text>

<Text align={'center'}>
  Loan to Value Ratio (LVR) calculation aids in risk assessment, enabling users to make informed decisions when borrowing or lending.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Flexible Interest Calculation
</Text>

<Text align={'center'}>
  Flexible interest calculation options enable you to compute interest rates daily, monthly, quarterly, or annually based on your business model.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Refinance
</Text>

<Text align={'center'}>
  The refinance option allows platform users (Borrowers) to use their current loan amount to secure another loan from a different lender upon successful repayment of the current loan's interest.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Auto-Renewal of Loans
</Text>

<Text align={'center'}>
  Automated loan renewal eliminates the manual placement of lending orders, expediting the process. Auto-renewal can be toggled based on user (Lenders) preferences.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Admin Panel – A Financial Hub
</Text>

<Text align={'center'}>
  Empowered with FinTech KPIs including Financial KPI, Order Book KPI, Loan Profile KPI, and User Startup KPI, the Admin Panel enables you to monitor ecosystem transactions and gauge your ROI.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Advanced Security Features of Our Peer-to-Peer Lending Software</strong>
</Heading>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
   <br/>Data Encryption
</Text>

<Text align={'center'}>
  Data encryption safeguards user credentials and sensitive information stored in the database.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>JWT Encryption
</Text>

<Text align={'center'}>
  JWT (JSON Web Token) encryption fortifies data against manipulation and unauthorized access.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Anti-Denial of Service (DoS)
</Text>

<Text align={'center'}>
  Protection against large requests to the server prevents DoS attacks.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Anti-Distributed Denial of Service (DDoS)
</Text>

<Text align={'center'}>
  Our platform is shielded against overwhelming traffic from multiple sources, a common DDoS tactic.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>SQL Injection Protection
</Text>

<Text align={'center'}>
  Defenses against maliciously crafted inputs protect the platform from SQL injection attacks.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Self-XSS Protection
</Text>

<Text align={'center'}>
  Protection against unauthorized account access enhances the platform's security layers.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Server-Side Request Forgery (SSRF) Protection
</Text>

<Text align={'center'}>
  Prevention against SSRF attacks safeguards against requests created or controlled by the attacker.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>HTTP Parameter Pollution Protection
</Text>

<Text align={'center'}>
  Prevents attacks that use HTTP requests to access hidden information.
</Text>

<Text align={'center'} mt={6}>
  <strong>P2P Lending Platform</strong>
  <br/>Single Credentials Multiple Login Prevention
</Text>

<Text align={'center'}>
  Restricts users to logging in on a single system or browser at a time, bolstering authenticated user access.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Our Admin Panel Empowers You With</strong>
</Heading>

<Text align={'center'} mt={6}>
  <strong>Data-Rich Dashboard Provides an overview of:</strong>
</Text>

<Text align={'center'} mt={4}>
  Registered and active users,
  Pending and approved KYC requests,
  Borrow-lend transactions,
  Escrow account,
  Total loans and interest,
  Cryptocurrency balances,
  Funds and Order Management,
  Listing of borrow and lend orders,
  Trade summaries,
  Deposit histories,
  Withdrawal histories,
  Lending Management,
  Comprises.  
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Our Blockchain Tech Expertise</Heading>
<Text align={'center'} mt={6}><strong>Feel free to engage in a friendly chat to discuss your business needs.
We're committed to providing technical support and addressing your inquiries!
</strong></Text>

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