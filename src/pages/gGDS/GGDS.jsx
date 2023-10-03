import React from "react";
import style from "./gGDS.module.css";
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
              <Heading>Government Data Storage</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Blockchain-Powered Government Data Storage Leverage decentralized, blockchain-based data storage systems for enhanced data management in the public sector.
          Data sharing is pivotal for a nation's social development within the public sector. However, improper and insecure data sharing practices can lead to privacy breaches. Employing blockchain for government data storage within a consortium blockchain offers a promising avenue to safeguard privacy during data sharing within government entities.Significance of Blockchain for Government Data Storage.Blockchain offers decentralized data storage without the need for a client-server architecture or intermediaries. Embracing blockchain-based data storage enhances data privacy, security, and control, while reducing traditional data outages and failures. Adopting blockchain data storage allows the public sector to eliminate centralized repositories, ensuring service quality and performance monitoring.Blockchain-based government data storage eradicates dependencies on conventional centralized computing systems for storage, processing time, and uptime. An architecture built on blockchain facilitates large-scale implementation and sustainable project scalability.
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
  Challenges in Government Data Storage
</Heading>

<Text textAlign={'center'} mt={4}>
  Governments manage vast data quantities and regularly handle sensitive information, making them susceptible to cyberattacks. While digitization has revolutionized data storage, the public sector still faces challenges in fortifying its resilience against cybercrimes.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Data Volume Surge: </strong>
  The proliferation of digital devices has led to a rapid increase in government-generated data, posing challenges in storing and managing such voluminous data.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Data Security: </strong>
  Governments amass sensitive data, including personal information and confidential documents. Ensuring data security and preventing unauthorized access or breaches is a daunting challenge.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Data Privacy: </strong>
  Data privacy regulations mandate governments to protect personal information. This necessitates robust data privacy and protection mechanisms, adding complexity to data storage.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Cost Factors: </strong>
  Data storage costs can be substantial, requiring governments to allocate adequate resources for data management.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Technology Evolvement: </strong>
  Constant technological evolution compels governments to maintain up-to-date data storage infrastructure compatible with emerging technologies.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Disaster Preparedness: </strong>
  Robust disaster recovery plans are essential to prevent data loss in emergencies. This entails backup systems and redundant storage mechanisms.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Interoperability: </strong>
  Governments often employ diverse systems for data storage, leading to interoperability challenges between departments and agencies.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Advantages of Blockchain for Government Data Storage
</Heading>

<Text textAlign={'center'} mt={4}>
  By transitioning to blockchain-based data storage, the public sector can enhance efficiency and innovation. Blockchain data storage offers a generic approach for secure, decentralized data processing and storage. Here are key benefits of blockchain data storage from a governmental perspective.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Enhanced Security: </strong>
  Blockchain employs cryptography to ensure data security and integrity. A decentralized network of nodes verifies transactions, safeguarding data from tampering and unauthorized access.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Transparency Boost: </strong>
  Blockchain enables transparent data tracking, recording access details. This transparency is crucial for government settings, fostering accountability and transparency.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Improved Efficiency: </strong>
  Decentralized networks streamline transactions, reducing the need for intermediaries and expediting data storage and management processes.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Cost Efficiency: </strong>
  Blockchain adoption allows governments to cut costs linked to traditional data storage methods, such as maintaining physical servers and IT support.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Trust Building: </strong>
  Decentralized and transparent systems foster trust between governments and citizens, particularly in areas like voting and public record keeping.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Why Opt for AradChain Technologies to Build a Blockchain-Based Data Storage System for Government Entities
</Heading>

<Text textAlign={'center'} mt={4}>
  Governments grapple with various data storage challenges, demanding expertise in both blockchain and data solutions. AradChain Technologies's extensive team possesses deep knowledge of data storage solutions and blockchain technology, equipping you to establish a secure, reliable, and scalable blockchain-based data storage ecosystem. Collaborate with us to construct a robust data storage solution tailored for the public sector.
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Insights from Our Blogs
</Heading>

<Text textAlign={'center'} mt={4}>
  <strong>Custom AI Blockchain Development: </strong>
   Top Use Cases and Barriers to AI Adoption
</Text>

<Text textAlign={'center'} mt={4}>
  The fusion of Blockchain and AI is proving to be a game-changer for businesses across various sectors. Discover top use cases and challenges in this dynamic integration.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Exploring Emerging Blockchain Use Cases in Real Estate </strong>
  </Text>
  <Text textAlign={'center'} mt={4}>
  The real estate industry is growing at a rapid pace; however, it's also susceptible to scams. Dive into emerging blockchain applications that can transform the industry.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>Blockchain Development for Beauty Industry: A Boon or Bane? </strong>
  </Text>

<Text textAlign={'center'} mt={4}>
  Blockchain and beauty may not seem related, but this technology is making waves in skincare, cosmetics, and more. Explore its impact on the beauty industry.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Proficiency in Blockchain Technology
</Heading>

<Text textAlign={'center'} mt={4}>
  We're here to engage in a friendly chat about your business needs, sans obligation.
</Text>

<Text textAlign={'center'} mt={4}>
  Our mission is to provide technical support, and we're receptive to your inquiries and requests.
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