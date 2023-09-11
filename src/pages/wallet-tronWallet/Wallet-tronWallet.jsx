import React from "react";
import style from "./wallet-tronWallet.module.css";
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
import { Box, Text, Heading, UnorderedList, Grid, CardHeader, SimpleGrid, CardBody, Card } from "@chakra-ui/react";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>TRON Wallet Development Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Innovative Tron Wallet Development Solutions to Lead the IndustryDid you know that TRON boasts a market cap of $5,710,814,069 and a 24-hour trading volume of $358,074,402? Additionally, TRON wallets have become a highly searched term on the internet. This blockchain is exceptionally progressive and inherently decentralized. Moreover, it features smart protocols and a blockchain explorer. Operating on a peer-to-peer network, TRON handles transactions with remarkable speed. With its native cryptocurrency, TRONIX (TRX), and the integration of Smart Contract functionality, the transaction process is simplified.As a prominent TRON wallet development company, we specialize in creating robust and feature-rich TRON wallets. We blend stunning designs with agile development techniques to deliver exceptional TRON wallet development services that elevate user experiences. With almost a decade of industry presence, our blockchain analysts meticulously grasp project requirements and craft detailed development roadmaps.
           </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
              Features of Cryptocurrency Exchange Software Development Basic
              Level
            </Heading>
            <>
  <Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Unique Features of the TRON Wallet
  </Heading>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
    Group 66294
  </Text>
  <Text align={'center'} letterSpacing={2}>
    High Throughput
  </Text>
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    TRON wallets manage over 1500 transactions per second seamlessly.
  </Text>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
    Group 66035
  </Text>
  <Text align={'center'} letterSpacing={2}>
    High Scalability
  </Text>
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    TRON wallets effortlessly handle increasing workloads.
  </Text>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
    Group 66036
  </Text>
  <Text align={'center'} letterSpacing={2}>
    Advanced Storage
  </Text>
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    Data storage occurs in renowned spaces like LevelDB and Khaos DB.
  </Text>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
    Group 66037
  </Text>
  <Text align={'center'} letterSpacing={2}>
    EVM Compatibility
  </Text>
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    Smooth connection between EVM or TRON virtual machine execution and existing virtual systems.
  </Text>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
    GET IN TOUCH
  </Text>

  <Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Explore Our Premium TRON Wallet Development Services
  </Heading>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>TRON-Wallet-App-Development</strong>
  </Text>
  
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    Our skilled team excels in delivering outstanding TRON dApp development services to enterprises of all sizes. We harness the latest technologies to create cutting-edge applications tailored to your business needs.
  </Text>

  
  <Text align={'center'} letterSpacing={2}>
    <strong>TRC10 & TRC20 Token Development</strong>
  </Text>
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    With deep market knowledge, we develop secure and stable TRC10 & TRC20 tokens. Our Smart Contract-based tokens are automated, safe, and easily transferable.
  </Text>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
   <strong> Node-set-up</strong>
  </Text>
  
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    We're experienced in installing and running nodes on the TRON network. Our node set-up services, regardless of scale, ensure optimal platform performance.
  </Text>

 
  <Text align={'center'} letterSpacing={2}>
    <strong>TRON Wallet App Development</strong>
  </Text>
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    Utilizing industry experience and expertise, we create customizable TRON wallet solutions for viewing, storing, and managing Tronix, TRON's native cryptocurrency.
  </Text>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>API-Integration</strong>
  </Text>
 
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    Our user-friendly API integrations leverage state-of-the-art technology, widening your future earning potential through TRON dApp development solutions.
  </Text>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Decentralized-exchange</strong>
  </Text>
  
  <Text align={'center'} letterSpacing={2} marginTop={2}>
    Our team has extensive experience in developing TRON-based decentralized exchanges, enhancing users' trading experiences with essential features.
  </Text>

  <Text align={'center'} letterSpacing={2} marginTop={4}>
    Unlock the Potential of the TRON Wallet. Schedule a Live Meeting Today!
  </Text>
  <>
  <Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    How We Craft a TRON Wallet
  </Heading>
  <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
  <Card>
    <CardHeader>Group 66337</CardHeader>
    <CardBody>
      <Text>
       <strong> Requirement Analysis</strong>
      </Text>
      <Text>
        Thoroughly understand and gather application requirements
      </Text>
      <Text>
        Assess feature prerequisites and implementation criteria
      </Text>
      <Text>
        Develop a comprehensive roadmap outlining TRON wallet development steps
      </Text>
    </CardBody>
  </Card>

  <Card>
    <CardHeader>Group 66338</CardHeader>
    <CardBody>
      <Text>
        <strong>Designing</strong>
      </Text>
      <Text>
        Build a design prototype and share it with the client
      </Text>
      <Text>
        Incorporate client feedback for design refinements
      </Text>
      <Text>
        Design the technical architecture of the application
      </Text>
      <Text>
        Implement data protection and privacy compliance measures
      </Text>
    </CardBody>
  </Card>

  <Card>
    <CardHeader>Group 66336</CardHeader>
    <CardBody>
      <Text>
        <strong>Development</strong>
      </Text>
      <Text>
        Employ cutting-edge technology for application development
      </Text>
      <Text>
        Subject TRON application to rigorous testing and audits
      </Text>
      <Text>
        Address errors for seamless application performance
      </Text>
    </CardBody>
  </Card>

  <Card>
    <CardHeader>Group 66373</CardHeader>
    <CardBody>
      <Text>
        <strong>Deployment</strong>
      </Text>
      <Text>
        Deploy the TRON application on the main network
      </Text>
    </CardBody>
  </Card>

  <Card>
    <CardHeader>Group 66340</CardHeader>
    <CardBody>
      <Text>
        <strong>Post-Deployment</strong>
      </Text>
      <Text>
        Continuously update the application with new features
      </Text>
      <Text>
        Prioritize backlog tasks during the updating process
      </Text>
    </CardBody>
  </Card>
</SimpleGrid>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">Our Distinctive Offerings</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>password (2)-6</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Unmatched Consultation</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>cost effective</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Seasoned and proficient team</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>password (2)-5</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Flexible Models</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>password (2)-3</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Transparent pricing</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>password (2)-4</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Integrated high-grade security & scalability</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>password (2)-2</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>24/7 Customer Support</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>password (2)</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Meaningful Outcomes</Text>
    </CardBody>
</Card>
</SimpleGrid>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">Why Opt for Our TRON Wallet Development?</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
AradChain Technologies stands as a reliable IT partner, delivering futuristic and enterprise-grade TRON wallet development solutions. Our unmatched accessibility and support empower enterprises to achieve their goals. We prioritize decentralization, offering advantages like no central control. Our services come with unparalleled technical proficiency and are backed by a proficient framework and SDK management. Our team provides exceptional support, and our comprehensive services cater to various aspects of TRON wallet development.

When it comes to enlisting professional TRON wallet developers, we pride ourselves as a distinguished TRON wallet development firm. Our developers possess extensive knowledge of trending technologies and have hands-on experience in using cutting-edge programming languages like Solidity, JAVA, C++, and others. This expertise enables them to craft applications with high-grade security features, ensuring end-to-end encryption for each transaction. We offer unparalleled solutions to startups and enterprises of all sizes, aiming to elevate their business standards and provide substantial returns on investment.

If you are considering TRON wallet development, enlisting our services can be your strategic choice. We have established partnerships, a satisfied client base, and are ready to address frequently asked questions. Choose AradChain Technologies for your TRON wallet development needs and experience the difference.
</Text>


</>


</>

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
        accountName="Jennie"
        allowEsc
        allowClickAway
        notification
        notificationSound
        buttonStyle={{
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