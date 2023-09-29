import React from "react";
import style from "./exchange-hybridExchange.module.css";
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
              <Heading>Hybrid Exchange Development</Heading>
            </div>
          </div>
          
        </div>
      </div>
       <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Hybrid Crypto Exchange Software: Integrating the Strengths of Centralized and Decentralized Exchanges Centralized and decentralized exchanges have played significant roles in the cryptocurrency landscape since its inception. Centralized exchanges are known for their high liquidity and fast transaction speeds. On the other hand, decentralized exchanges prioritize anonymity and robust security. However, both types of exchanges face certain drawbacks. Centralized exchanges are vulnerable to hacking and often charge high transaction fees, while decentralized exchanges struggle with handling high-frequency transactions. These limitations have given rise to the concept of a hybrid crypto exchange. A hybrid exchange aims to combine the advantages of centralized and decentralized exchanges. This entails offering the high liquidity and rapid transactions of centralized exchanges, coupled with the anonymity and security features characteristic of decentralized exchanges. Given these benefits, hybrid exchanges are garnering attention among traders and businesses aiming to establish their own crypto trading platforms.
            </Text>
            <Link to="https://t.me/aradchain" target="_blank">
              <Text textAlign={'center'} mt={4}>
                <Button
                  size={window.innerWidth <= 680 ? "xs" : "md"} // Check the window width and change button size accordingly
                  rightIcon={<MdCall />}
                  colorScheme="telegram"
                >
                  Connect on Telegram
                </Button>
                <Link to="https://wa.me/+447432284026" target="_blank">
                <Button
                  ml={5}
                  size={window.innerWidth <= 680 ? "xs" : "md"} // Check the window width and change button size accordingly
                  rightIcon={<MdCall />}
                  colorScheme="whatsapp"
                >
                  Connect on Whatsapp
                </Button>
              </Link>
            
                </Text>
              
              </Link>
             

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            EMBARK ON YOUR HYBRID EXCHANGE JOURNEY
            </Heading>
            <Text align={'center'} letterSpacing={1}>
            AradChain Technologies’s Expertise in Hybrid Exchange Development Whether you're a startup or an established entity planning to launch a hybrid crypto exchange, you can tap into our blockchain expertise, in-depth industry knowledge, and technical proficiency to realize comprehensive development and consulting solutions for setting up your hybrid exchange. We leverage cutting-edge features to bolster your exchange with institutional-grade security and top-tier performance, ensuring an enhanced trading experience for your users. Our skilled blockchain engineers and subject matter experts empower you to pivot swiftly and intelligently, enabling you to achieve your business objectives and make a significant impact in the market. Reach out to our experts to discuss your business requirements.
            </Text>

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Key Features of Our White Label Hybrid Exchange</Heading>
            <Text align={'center'} letterSpacing={1}> Every exchange we deliver comes equipped with industry-leading features to provide a secure and exceptional trading experience.</Text>
            
            <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
            <Card>
  <CardBody>
    <Text><strong>High Liquidity:</strong> Our hybrid exchanges incorporate options such as API connections or market maker integrations to ensure robust liquidity.</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text><strong>Two-Factor Authentication:</strong> A seamless two-factor authentication process enhances security by confirming legitimate user access to the exchange.</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text><strong>Smart Contract Integration:</strong> Immutable smart contracts enable automated verification and seamless processing of transactions.</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text><strong>Payment Gateway Integration:</strong> The integration of multiple secure payment gateways allows users to make payments using their preferred methods.</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text><strong>User-Friendly Dashboard:</strong> An intuitive user dashboard simplifies trading and facilitates fund management for exchange users.</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text><strong>Robust Admin Panel:</strong> An institutional-grade admin panel assists exchange owners in effectively managing user profiles and activities.</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text><strong>Secure and Swift Transactions: </strong>High-performance trading tools integrated into the platform enable secure and rapid transactions.</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text><strong>Institutional-Grade Security: </strong>Security features such as two-factor authentication and KYC help maintain a high level of security for safe and risk-free trading.</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text><strong>KYC Verification:</strong> KYC verification comes into play when large withdrawal amounts are requested, ensuring legitimate transactions.</Text>
  </CardBody>
</Card>
</SimpleGrid>
<Text align={'center'} letterSpacing={1} mt={10}> <strong>Launch your hybrid exchange equipped with advanced features to lead the industry.</strong></Text>
            <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card>
  <CardBody>
    <Text>Understand the business vision and goals</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text>Plan a coherent roadmap for navigating the development journey</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text>Evaluate, implement, and deploy core technology infrastructure for the hybrid exchange</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text>Enhance the platform's security and resilience</Text>
  </CardBody>
</Card>
<Card>
  <CardBody>
    <Text>Implement the system and incorporate updates and modifications</Text>
  </CardBody>
</Card>
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
