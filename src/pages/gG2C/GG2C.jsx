import React from "react";
import style from "./gG2C.module.css";
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
              <Heading>G2C</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            The integration of blockchain in the government sector holds the potential for numerous advantages, including data protection, streamlined processes, and a reduction in instances of fraud, waste, and abuse. Moreover, it can enhance trust and accountability within the system. In a government model based on blockchain, a decentralized ledger fortified by cryptographic techniques facilitates the sharing of resources among individuals, businesses, and governments without intermediaries. This approach mitigates the risk of a single point of failure and ensures the safeguarding of sensitive data owned by citizens and government bodies.

AradChain Technologies’s Proficiency: Enabling Blockchain Implementation in the Government Sector

At AradChain Technologies, we are poised to assist you in incorporating blockchain into your government structure, fortifying it with enhanced security, agility, and cost efficiency. Our experienced blockchain engineers and domain experts comprehend your unique requirements, devising a coherent roadmap to steer your journey towards blockchain-powered systems.

Leveraging their vast experience, expertise, and deep domain knowledge, our experts deliver meaningful outcomes that drive your business growth.

           
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

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Blockchain Utilization Scenarios in Government
            </Heading>

            <Text align={'center'} letterSpacing={1} mt={5}>
            The adoption of blockchain technology within government organizations can revolutionize the following government functions.
<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Digital Identity</strong> 
</Text>
<Text align={'center'} letterSpacing={1} mt={3}>
Empower users to establish and manage their own secure digital identities using cryptography. Additionally, eliminate the dependence on a single profile provider, thus alleviating the burden of excessive documentation.
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Voting Systems</strong>
</Text>
<Text align={'center'} letterSpacing={1} mt={3}>
Embrace a decentralized blockchain-based voting system that significantly curbs the influence or compromise of any party. Prevent electoral fraud and achieve swift results with minimal room for error.
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Land Registration</strong>
</Text>
<Text align={'center'} letterSpacing={1} mt={3}>
Eradicate layers of cost and friction, expedite verification processes, and introduce enhanced flexibility for modular products. Broaden access to fractional property ownership and establish proof of origin for traded fractional properties.
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Secure Data Storage</strong> 
</Text>
<Text align={'center'} letterSpacing={1} mt={3}>
Store encrypted and tamper-proof data within a decentralized network to eliminate the vulnerabilities of a single point of failure. Enhance transparency and reduce data storage costs.
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Regulatory Processes</strong>
</Text>
<Text align={'center'} letterSpacing={1} mt={3}>
Facilitate secure and transparent data sharing across diverse agencies for improved coordination and regulation enforcement. Leverage self-executing smart contracts for automated regulatory enforcement, reducing non-compliance risks and boosting efficiency.
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Administrative Tasks</strong>
</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
Automate and streamline administrative procedures, reducing the need for paperwork, manual validation, and bureaucratic red tape. Establish a faster, more efficient payment system for government services and benefits.
What's Your Business Use Case? Engage with our domain experts to discuss your use case and embark on the next era of digital governance.
</Text>
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Advantages of Blockchain Integration in Government Operations</strong>
</Heading>

<Text align={'center'} letterSpacing={1}>
  The application of blockchain in government initiatives has the potential to alleviate longstanding challenges and confer the following advantages:
</Text>
<Text align={'center'} letterSpacing={1} mt={3}><strong>Value-added tools </strong></Text>
<Text align={'center'} letterSpacing={1} mt={3}><strong>User-friendly interface </strong></Text>
<Text align={'center'} letterSpacing={1} mt={3}><strong>Real-time tracking </strong></Text>
<Text align={'center'} letterSpacing={1} mt={3}><strong>Effortless operations </strong></Text>
<Text align={'center'} letterSpacing={1} mt={3}><strong>Cost-saving options </strong></Text>
<Text align={'center'} letterSpacing={1} mt={3}><strong>Autonomous nature </strong></Text>
<Text align={'center'} letterSpacing={1} mt={3}><strong>Secure storage</strong></Text>
<Text align={'center'} letterSpacing={1} mt={3}><strong>Preservation of sensitive data</strong></Text>
<Text align={'center'} letterSpacing={1} mt={4}><strong>Why Opt for AradChain Technologies to Harness Blockchain for Government Services</strong></Text>
<Text align={'center'} letterSpacing={1} mt={4}>By collaborating with AradChain Technologies, you gain access to a team of technical experts equipped with hands-on experience in delivering comprehensive end-to-end blockchain services.</Text>

<Text align={'center'} letterSpacing={1} mt={3}>Technical Expertise</Text>
<Text align={'center'} letterSpacing={1} mt={3}>Experienced Team</Text>
<Text align={'center'} letterSpacing={1} mt={3}>Swift Development</Text>
<Text align={'center'} letterSpacing={1} mt={3}>Complete support</Text>
<Text align={'center'} letterSpacing={1} mt={3}>Tangible Results</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Frequently Asked Questions</strong>
</Heading>

<Text textAlign={'center'} mt={4}>
  <strong>How does blockchain enhance transparency and accountability in government services?</strong>
  </Text>
<Text textAlign={'center'} mt={4}>
  Blockchain enhances transparency and accountability in government services through various mechanisms:
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Immutable Records: </strong>
  Once recorded on the blockchain, transactions are permanently stored, establishing a transparent and auditable record that aids in reducing corruption and improving accountability.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Smart Contracts: </strong>
  Smart contracts automate government services, mitigating the risks of fraud or corruption.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Public/Private Key Cryptography: </strong>
  Blockchain employs public and private key cryptography to ensure authorized access and modification of data. This curbs unauthorized access to government data, bolstering data security.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Audit Trails: </strong>
  Blockchain provides a transparent audit trail of transactions, enhancing accountability and diminishing fraud risks.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>A Glance at Our Blog Posts</strong>
</Heading>

<Text textAlign={'center'} mt={4}>
  <strong> Blockchain & AI: Top Use Cases and Barriers to AI Adoption</strong>
  
</Text>

<Text textAlign={'center'} mt={4}>
  The fusion of Blockchain and AI is proving to be a game-changer for businesses across various sectors. Discover top use cases and challenges in this dynamic integration.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Exploring Emerging Blockchain Applications in Real Estate</strong>
  </Text>
<Text textAlign={'center'} mt={4}>
 The real estate sector is rapidly evolving, but it's also susceptible to scams. Dive into emerging blockchain applications that can transform the industry.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Blockchain Development for Beauty Industry: Boon or Bane?</strong>
  </Text>

<Text textAlign={'center'} mt={4}>
  Blockchain and beauty may not seem related, but this technology is making waves in skincare, cosmetics, and more. Explore its impact on the beauty industry.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Our Expertise in Blockchain Technology</strong>
</Heading>

<Text textAlign={'center'} mt={4}>
  Feel free to initiate a friendly conversation about your business needs. We are committed to providing technical support and are open to inquiries and requests.
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