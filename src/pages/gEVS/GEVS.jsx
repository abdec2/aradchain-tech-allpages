import React from "react";
import style from "./gEVS.module.css";
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
              <Heading>E-Voting System</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Blockchain-Powered E-Voting Solution for the Public Sector.Enhance data management through decentralized, blockchain-based data storage systems for the public sector.Voting systems play a pivotal role across various domains and levels, from selecting a school prefect to electing a nation's leader. While digital voting methods have emerged to overcome challenges of paper balloting, a single flaw in this system can lead to significant vote manipulation. Embracing a decentralized voting system with blockchain technology offers a secure avenue for preserving the sanctity of the voting process, ensuring privacy, security, and integrity.Significance of Blockchain in Electronic Voting Systems.Blockchain's distributed nature, spread across multiple nodes, eliminates single points of failure. This inherent resilience shields blockchain-based voting systems from cyberattacks, denial of service incidents, and database deletions. Notably, blockchain's data immutability is pivotal in the voting ecosystem. Once a record is established, any alteration attempts are traceable, rendering tampering with voting results practically impossible.Governments can leverage blockchain to streamline the balloting process, minimizing human intervention. This not only expedites vote counting but also mitigates fraud risks and human errors. Compared to other contemporary e-voting solutions, blockchain-based balloting platforms offer enhanced result verification and audit capabilities.
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
  Challenges in Government Voting Systems
</Heading>

<Text textAlign={'center'} mt={4}>
  Elections hold immense significance in democracies, shaping a country's trajectory. Trusted election systems remain a critical concern for major democracies like the US, India, and Japan, grappling with societal skepticism. The public sector faces several issues in the realm of voting systems:
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Security Vulnerabilities:  </strong>
  Current voting systems are susceptible to hacking and manipulation, endangering the election outcome's integrity.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Transparency Gap:  </strong>
  Some voting systems lack transparency and auditability, raising doubts about the accuracy of vote counting.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Voter Exclusion:  </strong>
  Certain voting methods hinder certain groups from voting, including disabled individuals, rural residents, and those unable to leave work for polling.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Obsolete Technology:  </strong>
  Outdated technology leads to lengthy queues, delayed results, and other complications.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Partisan Influence:  </strong>
  Some voting systems exhibit bias favoring a particular political party, eroding public faith in the electoral process.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Misinformation:  </strong>
  Rising misinformation through social media can undermine the legitimacy of election results.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Lack of Standardization:  </strong>
  Different jurisdictions employ disparate voting systems, leading to confusion and inconsistencies.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Absence of Contingency Plans:  </strong>
  Some systems lack contingency strategies for emergencies, such as natural disasters or cyberattacks.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Advantages of Blockchain in Electronic Voting Systems
</Heading>

<Text textAlign={'center'} mt={4}>
  Utilizing blockchain for electronic voting can bolster election accuracy, security, accessibility, and trust, while reducing costs. Here are some solutions offered by a blockchain-powered voting system.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Decentralization:  </strong>
  Distribute voting records across multiple nodes, preventing tampering, fraud, and manipulation by avoiding single-entity control.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Transparency: </strong>
  Provide a transparent and tamper-proof record of each vote, enabling anyone to verify election results.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Security Reinforcement:  </strong>
  Blockchain safeguards election outcomes from external interference.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Accessibility:  </strong>
  Craft inclusive voting systems accessible to all, irrespective of location or ability, elevating voter turnout and inclusivity.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Efficiency Boost:  </strong>
  Streamline voting by reducing manual vote counting, ensuring swift and precise results.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Smart Contracts:  </strong>
  Deploy self-executing smart contracts to automate and enforce voting rules, enhancing efficiency and transparency.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Immutable Audit Trail:  </strong>
  Create a tamper-proof, transparent record of the complete voting process, instilling trust in the results.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Why AradChain Technologies for Building a Secure Blockchain Voting System?
</Heading>

<Text textAlign={'center'} mt={4}>
  Collaborate with us to design and develop a customized blockchain-based voting system tailored to your government's specific needs. Integrate a blockchain solution that aligns with existing government infrastructure. Our comprehensive training and support services empower government officials and staff to effectively employ blockchain-based voting systems.
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Blogs at a Glance
</Heading>

<Text textAlign={'center'} mt={4}>
  Seek insights into blockchain, cryptocurrencies, NFTs, metaverse, and associated technologies? Read our blog for enlightening perspectives!
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Metaverse in Manufacturing Industry: Role and Future Prospects</strong>
  </Text>
  <Text textAlign={'center'} mt={4}>
  The "Metaverse" requires no introduction, as it's woven into our lives. This article explores the metaverse's role in the manufacturing industry.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Empowering NPCs in the Metaverse with AI</strong>
  </Text>
  <Text textAlign={'center'} mt={4}>

  Blockchain, metaverse, and AI are 21st-century innovations. Learn how AI empowers NPCs in the metaverse, enriching user experiences.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Getting Started with White Label Crypto Banking Platform</strong>
  </Text>
  <Text textAlign={'center'} mt={4}>

  Unlock opportunities in crypto banking. This guide helps you explore the steps to get started with a white-label crypto banking platform.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Blockchain Expertise
</Heading>

<Text textAlign={'center'} mt={4}>
  We're here for a friendly chat about your business needs, without obligation. Our goal is to provide technical support, open to inquiries and requests.
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