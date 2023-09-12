import React from "react";
import style from "./wallet-bitcoinWallet.module.css";
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
              <Heading>Bitcoin Wallet Development Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            AradChain Technologies serves as a prominent Bitcoin wallet development firm, playing a pivotal role in the success and revenue growth of numerous businesses. Our team of experts meticulously deconstructs the development process into sequential steps, ensuring thorough completion of each task. With a keen eye on the rapidly evolving trends in Bitcoin wallet app development, we remain vigilant to seamlessly incorporate these advancements into our wallet solutions. Our company has consistently delivered top-tier Bitcoin wallet development services to global enterprises, spanning various domains, including consulting, Bitcoin wallet creation, multicurrency wallet development, ICO development, and Bitcoin coin mining. We take pride in crafting advanced Bitcoin wallets, operating on a private key basis for secure transactions, and assisting with token mining and secure storage within decentralized databases. Connect with AradChain Technologies today to discuss your Bitcoin wallet requirements with our experts and unlock the potential for enhanced financial solutions.
            </Text>
            <Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  Our Distinctiveness as a Bitcoin Wallet Development Company
</Heading>
<Text align="center"><strong >Uniqueness:</strong></Text>

<Text align="center" mt={5}>
  Backed by extensive experience and broad domain knowledge, we stand apart from the competition. Our innovative ideas and in-depth assessments at every stage set us apart in the market.
</Text>

<Text align="center"><strong >Adaptable Engagement Models:</strong></Text>
<Text align="center" mt={5}>
  - Transparent Process
</Text>
<Text align="center"><strong >Experienced and Proficient Team:</strong></Text>
<Text align="center" mt={5}>
  - Punctual Delivery
  - Technical Support
  - 24/7 Customer Assistance
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  Discover the Attributes of Our Enterprise-Grade Bitcoin Wallet Solutions
</Heading>

<Text align='center'><strong >Group 66034:</strong></Text>
<Text align="center" mt={5}>
  - Automated Conversion Rates
  - Our app features an Automatic Conversion Rate function, enabling users to ascertain the cryptocurrency equivalent of Fiat currencies effortlessly.
</Text>
<Text align="center"><strong >Group 66035:</strong></Text>
<Text align="center" mt={5}>
  - Automated Duplicate Payment Rejection
  - Enhanced security protocols prevent the occurrence of duplicate payments, ensuring robust security within our Bitcoin wallet solutions.
</Text>

<Text align="center"><strong >Group 66036:</strong></Text>
<Text align="center" mt={5}>
  - QR Code Scanner
  - Incorporated QR code scanners empower service providers and vendors to receive cryptocurrency payments, enabling swift transactions for users.
</Text>
<Text align="center"><strong >Group 66037:</strong></Text>
<Text align="center" mt={5}>
  - Admin Dashboard
  - Our centralized Bitcoin wallet design integrates with an EVM dashboard, facilitating real-time tracking of wallet activities.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  Our Development Process
</Heading>
<Text align="center"><strong >Requirment Gathering</strong></Text>
<Text align="center" mt={5}>
  - Thorough documentation of requirements for a comprehensive understanding of business goals.
</Text>
<Text align="center"><strong >Design Wireframe & Mockups:</strong></Text>
<Text align="center" mt={5}>
  - Stunning UI designs are implemented to ensure a seamless user experience across the platform.
</Text>
<Text align="center"><strong >Demo Prototype Creation:</strong></Text>
|<Text align="center" mt={5}>
  - Following design approval, we provide a prototype to illustrate the application's appearance.
</Text>

<Text align="center" mt={5}><strong >Feedback & Approval</strong></Text>
<Text align="center" mt={5}>
  - Client feedback is encouraged, and alterations are made based on their expectations, with confirmation obtained.
</Text>

<Text align="center"><strong >Development:</strong></Text>
<Text align="center" mt={5}>
  - Initiating development post-approval, with results delivered as per the technical team's set deadline.
</Text>
<Text align="center"><strong >Deployment</strong></Text>
<Text align="center" mt={5}>
  - Our Bitcoin wallets undergo final testing, UAT, training, and deployment, with launches tailored to client preferences.
</Text>
<Text align="center"><strong >Post-Deployment:</strong></Text>
<Text align="center" mt={5}>
  - Continuous updates and bug fixes occur during the post-deployment phase.
  - Monthly or yearly packages can be tailored to your requirements.
</Text>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">Our Proficency:</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Password (2)</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Well-equipped Infrastructure</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Cost-Effective Solutions</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Skilled Development Team</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Password (2)-2</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Broad Domain Knowledge & Experience</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Password (2)-3</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Transparent and Reliable Process</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Password (2)-6</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Customizable Solutions</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Password (2)-5</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Timely Delivery of Quality Services</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Password (2)-6</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Budget-Friendly Projects</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Why Opt for Our Bitcoin Wallet Development?</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>An Expert Team</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Technical Proficiency</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Experienced Team</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Swift Development</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Comprehensive Support</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Group 60171</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Meaningful Results</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Our Partners</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Our Clients</Text>
    </CardBody>
</Card>

</SimpleGrid>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  What Is the Cost of Developing a Bitcoin Wallet?
</Heading>

<Text align="center" mt={5}>
  <strong>Cost Estimate:</strong> The cost of Bitcoin wallet development depends on the app's features and complexity. Our experts will provide a free cost estimate tailored to your preferences.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  How Long Does It Take to Develop a Bitcoin Wallet?
</Heading>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  Do You Implement Security Measures during Bitcoin Wallet Development?
</Heading>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  A Glance at Our Blogs
</Heading>

<Text align="center" mt={5}>
  <strong>White Label Crypto Wallet:</strong> Exploring the Cost of Building a White Label Crypto Wallet
</Text>

<Text align="center" mt={5}>
  <strong>Table of Contents:</strong> Introduction Deciphering the Essence of White-Label Crypto Wallets Comprehensive Market Overview Advantages of Opting for White-Label Crypto Wallet Solutions Diving […]
</Text>

<Text align="center" mt={5}>
  <strong>White Label Digital Identity Wallet:</strong> A Comprehensive Look into White Label Digital Identity Wallets
</Text>

<Text align="center" mt={5}>
  <strong>Table of Contents:</strong> Introduction Navigating the Landscape of Digital Identity Solutions In-Depth Market Overview The Business Benefits of White Label Digital Identity […]
</Text>

<Text align="center" mt={5}>
  <strong>Mobile Wallet App Development:</strong> Enhancing User Experience and Empowering through Mobile Wallet App Development Solutions
</Text>

<Text align="center" mt={5}>
  <strong>Table of Contents:</strong> Introduction to Mobile Wallet Apps Current Market Trends in Mobile Crypto Wallet Apps Reasons for Businesses to Invest in Mobile […]
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  Our Blockchain Tech Expertise
</Heading>

<Text align="center" mt={5}>
  We're available for a friendly chat to discuss your business needs, without any obligations.
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