import React from "react";
import style from "./scSCA.module.css";
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
              <Heading>Smart Contract Audit</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Ensure the Integrity of Your Blockchain Projects with Our Exceptional Smart Contract Auditing Services,In a digital world marked by growing trust concerns, businesses are increasingly turning to smart contract development services to enhance their security measures. However, even a minor mistake during the creation or deployment of smart contracts can lead to significant financial losses. This is precisely where the importance of smart contract security audits becomes evident.At AradChain Technologies, our team of Blockchain experts leverages their extensive experience and expertise to conduct thorough audits of smart contracts. We identify existing and potential errors, security vulnerabilities, compilation issues, and more to ensure the utmost quality of the code.The Need for Smart Contract Security Audit ServicesThe second quarter of 2022 witnessed 48 major attacks in the Web3 space, resulting in total losses of around $718.34 million.

DeFi projects continue to experience the highest frequency of attacks, accounting for approximately 79.2% of all attacks.

Ethereum experienced the greatest losses in the second quarter, totaling $381.35 million. The BNB Chain was the most targeted chain, with 26 exploits.

A mere 52% of attacked projects had undergone audits.

These statistics underscore the compelling case for prominent cryptocurrency entities to seek smart contract security audit services from a reliable audit firm.

Effortlessly Secure Your Smart Contracts Through Auditing

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
            Our Comprehensive Smart Contract Security Audit Services
            </Heading>

            <Text align={'center'} letterSpacing={1}>
              
As a reputable smart contract audit company, AradChain Technologies offers end-to-end smart contract security audit services to help businesses, regardless of their size, launch highly secure and flawless blockchain applications.

Our smart contract auditors conduct a thorough security evaluation of your application, meticulously reviewing every aspect of the code to identify potential vulnerabilities that could be exploited by cyberattacks.

We also assist our clients in threat modeling, helping them identify security requirements and potential entry points for hacks. Our experts quantify the criticality of threats, visualize the project's attack surface, and continually update the threat model to address evolving risks.

After conducting a comprehensive smart contract security audit, we provide you with detailed audit reports that highlight vulnerabilities and reference relevant portions of your application. Our auditors also offer a detailed executive summary of the project, along with mitigation guidance.

Our proficient team of smart contract security audit specialists provides comprehensive support throughout the blockchain development lifecycle. Our services include smart contract security auditing, testing, scheduled auto scans, and more, all tailored to meet the specific needs of enterprises.

We conduct smart contract security audits for various popular blockchain platforms, including Ethereum, Hyperledger, Solana, Cardano, Polkadot, TRON, BSC, Polygon, Cosmos, Corda, Tezos, Avalance, and more.

Our audit practices, combined with expert reviews, ensure the security and performance of projects across industries such as banking and finance, real estate, transport and logistics, healthcare, insurance, and media and entertainment.

Contact us to experience our comprehensive smart contract security audit services and ensure the robust security of your blockchain applications.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Why Choose AradChain Technologies as Your Smart Contract Audit Company?
            </Heading>
            <Text align={'center'} letterSpacing={1}>
            AradChain Technologies stands out as your smart contract audit company of choice due to its multidisciplinary team of experienced auditors who offer expert assessment, post-launch support, and follow an agile development process. They provide a confidentiality guarantee, ensuring your project's security and discretion. With a strong track record, AradChain Technologies delivers comprehensive smart contract audit services to enhance the security and reliability of your blockchain applications.
            </Text>
          </div>
          <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Frequently Asked Questions
            </Heading>

          <Text align={'center'} letterSpacing={1} mt={6}>
How much does a smart contract audit cost?
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
The cost of a smart contract security audit varies depending on factors such as project size, Blockchain platform, audit team size, and the audit process followed.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
What is the duration of an Ethereum smart contract security audit?
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
Why is smart contract security auditing crucial?
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
Where can I find reliable smart contract security audit services?
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
What are the benefits of having my smart contract audited?
</Text>

<Text align={'center'} letterSpacing={1} mt={8}><strong>Our Blockchain Expertise

Contact us for a friendly chat about your business needs.

We're here to provide technical support and respond to inquiries.
</strong></Text>


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