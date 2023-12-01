import React from "react";
import style from "./bfsiKA.module.css";
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
              <Heading>KYC & AML</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Blockchain-Powered KYC Solution.A Secure and Streamlined Approach to Digitizing the KYC Process.Revolutionize Regulatory Technology Innovation
            <strong>, GET EXPERT ADVICE</strong>

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
  KYC Solution Leveraging Blockchain
</Heading>

<Text textAlign={'center'} mt={4}>
  Enshrined in Article 6 of the Universal Declaration of Human Rights is the principle that "Everyone has the right to recognition everywhere as a person before the law." However, approximately one-fifth of the global population (1.8 billion individuals) lacks a legal identity. This exclusion prevents them from accessing essential services like healthcare, education, housing, justice, and governmental assistance.
</Text>

<Text textAlign={'center'} mt={4}>
  Current KYC (Know Your Customer) systems are plagued by inefficiency, involving complex procedures where specific documents are presented and background checks are conducted. Research from Thomson Reuters, a prominent corporate entity, reveals that completing KYC checks takes an average of 32 days. Moreover, major financial institutions annually spend between $900 million and $1.3 billion on compliance-related efforts. This situation is exacerbated by the absence of a digital identity. Another significant drawback is identity theft, affecting millions annually, with 15.4 million cases reported last year.
</Text>

<Text textAlign={'center'} mt={4}>
  These alarming statistics underscore the urgency of modernizing identity management through digital means. We firmly believe that blockchain holds the potential to revolutionize the KYC landscape, enhancing its accessibility and efficacy. To this end, we have harnessed blockchain's capabilities to develop a KYC solution that simplifies the creation, monitoring, and maintenance of digital identities. Our solution is designed to be efficient, user-friendly, secure, and resilient against fraud. Delivered as a white-label solution, it can be tailored to your business requirements and branded accordingly. Leverage our comprehensive KYC solution to drive transformative innovation in the realm of regulatory technology.
</Text>

<Heading textAlign={'center'} mt={4}>
  <strong>Highlights of Our Blockchain-Backed KYC Solution</strong>
</Heading>

<Text textAlign={'center'} mt={4}>
  <strong>KYC Solution Highlights: </strong>
  Optical Character Recognition (OCR)
  Our OCR technology converts scanned paper documents—such as driver's licenses, voter IDs, passports, and other ID proofs—into machine-readable text. This information is then recorded on the blockchain, forming a secure digital identity for each user.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>KYC Solution Highlights: </strong>
  Ethereum-Based Identity
  User-related textual data is stored on the Ethereum blockchain, with each user assigned a unique Ethereum address. This address serves as an identifier, facilitating easy access and sharing of user data.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>KYC Solution Highlights: </strong>
  IPFS Integration
  Image files uploaded by users are stored using the InterPlanetary File System (IPFS), a peer-to-peer file-sharing protocol. This accelerates and simplifies the process of sharing user data across global networks.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>KYC Solution Highlights: </strong>
  Digital Signatures
  Enhancing security, multiple digital signatures ensure that user data can only be exchanged when authorized by approved signatories—a user and the platform owner.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>KYC Solution Highlights: </strong>
  Incentive Mechanism
  Share verified user information with financial institutions and other entities seeking the same data and earn incentives in return. Each data share presents an opportunity for substantial rewards.
</Text>

<Text textAlign={'center'} mt={4}>
  <strong>KYC Solution Highlights: </strong>
  Wallet Integration
  Our multi-cryptocurrency hot wallet ensures secure storage and seamless transactions for covering gas fees and distributing incentives.
</Text>


<Text textAlign={'center'} mt={4}>
  <strong>KYC Solution Applications:</strong> Cryptocurrency Exchanges, Lending Platforms, Telecommunications, Finance, Healthcare, Real Estate, Government, Travel and Transportation, Insurance, Casinos and Online Gaming.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Proficiency in Blockchain Technology
</Heading>

<Text textAlign={'center'} mt={4}>
  We are here to have a friendly discussion about your business needs, without any obligation.
</Text>

<Text textAlign={'center'} mt={4}>
  We are dedicated to offering technical support and are open to any inquiries or requests.
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