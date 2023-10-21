import React from "react";
import style from "./w3W3D.module.css";
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
              <Heading>Web 3.0 Development Services</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Connect With Our Global Web 3.0 Development Firm to Expand Your Global Market Presence.The landscape of the internet has seen remarkable transformations over the past thirty years. Web 3.0, often referred to as the read-write-own web, represents the third generation of the internet, enabling websites and decentralized applications (dApps) to interact in a manner akin to human interactions. Entrepreneurs can seize the opportunity to forge global business connections with their customers by leveraging Decentralized Ledger Technology for secure and trustless transactions. Enhance your marketing infrastructure with Big Data, AI, and ML. Our team provides comprehensive end-to-end web3 development services to streamline and accelerate your transition to the evolved web, characterized by openness, intelligence, and autonomy. Leverage our expertise to embark on your web3 development journey with ease.Ready to Opt for Our Web 3.0 Development Solutions?
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

             <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
              Group 65894
              </Heading>
<Text align={'center'} letterSpacing={1}>
  Decentralization
  Central to Web 3.0 is decentralization, a distributed network that eliminates central authorities governing the internet. Users regain control over their data and content.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Blockchain Technology
</Heading>
<Text align={'center'} letterSpacing={1}>
  Blockchain offers transparent, tamper-proof, and secure transactions, transforming online interactions into more secure and trustworthy exchanges.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Enhanced Security and Privacy
</Heading>
<Text align={'center'} letterSpacing={1}>
  Decentralization enhances security by eliminating single points of attack. Additionally, users can determine who accesses their data and under what conditions.
  Join hands with experts at our Web3 development agency to establish a distributed and decentralized platform for your enterprise.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Our Comprehensive Web3 Development Services
</Heading>
<Text align={'center'} letterSpacing={1}>
  Enable your business to thrive in the 100% secure and easily manageable digital realm. Be part of the Web 3 revolution by selecting from our wide array of web3 development services, including:
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Web 3 Metaverse Development
</Heading>
<Text align={'center'} letterSpacing={1}>
  Our Web 3 metaverse development services are tailored to create immersive metaverse platforms for various industries such as Gaming, Entertainment, Real Estate, Fashion, Social Media, and more.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Web 3 Wallet Development
</Heading>
<Text align={'center'} letterSpacing={1}>
  Whether you require a multichain web3 wallet or a blockchain-specific wallet, we offer customized web3 wallet development services to provide you with a secure web3 crypto wallet aligned with your business needs.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Web 3 Exchange Development
</Heading>
<Text align={'center'} letterSpacing={1}>
  Our business-centric web 3.0 decentralized exchange development services empower enterprises to disrupt the crypto market with a robust exchange fortified with top-notch performance and security.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Web 3 Metaverse Game Development
</Heading>
<Text align={'center'} letterSpacing={1}>
  We offer end-to-end web 3 metaverse game development services to create NFTs and immersive gaming platforms for a thrilling experience. Leverage our expertise to build your metaverse game on web 3.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Web3 Smart Contract Development
</Heading>
<Text align={'center'} letterSpacing={1}>
  Our web3 smart contract developers specialize in crafting highly secure smart contracts to fortify decentralized applications. Capitalize on our web3 smart contract development services to tap into the DeFi world.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Web 3.0 Browsers
</Heading>
<Text align={'center'} letterSpacing={1}>
  Our Web 3.0 developers harness the potential of blockchain technology to build highly secure applications and web 3.0-powered browsers that secure user data while maintaining their anonymity.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Web Streaming Services
</Heading>
<Text align={'center'} letterSpacing={1}>
  Through blockchain and smart contracts, we create web streaming services that empower content creators to work transparently and receive payment for their content.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Decentralized Autonomous Organization (DAO)
</Heading>
<Text align={'center'} letterSpacing={1}>
  Our Web 3.0 developers create and deliver smart-contract-powered DAO platforms for diverse business use cases.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Decentralized Finance (DeFi)
</Heading>
<Text align={'center'} letterSpacing={1}>
  As a premier Web 3.0 development firm, we build a range of DeFi platforms, including borrowing/lending, staking, yield farming, and more.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>
  Something specific missing? Looking for tailored web 3.0 development services? Don't worry! Our Web3 development agency can effectively align with your unique requirements.
</Heading>

<Text align={'center'} letterSpacing={1} mt={4}><strong>Why We Stand Out as the Premier Web 3.0 Development CompanyMatching the right expertise to the right solutions.</strong> </Text>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
  <Card><CardBody><Text>Technical Proficiency team</Text></CardBody></Card>
  <Card><CardBody><Text>Expert Team</Text></CardBody></Card>
  <Card><CardBody><Text>Development</Text></CardBody></Card>
  <Card><CardBody><Text>Agile Development</Text></CardBody></Card>
  <Card><CardBody><Text>Assistance</Text></CardBody></Card>
  <Card><CardBody><Text>Comprehensive Support</Text></CardBody></Card>
  <Card><CardBody><Text>Group 60171</Text></CardBody></Card>
  <Card><CardBody><Text>Impactful Outcomes</Text></CardBody></Card>
  <Card><CardBody><Text>Our Partners</Text></CardBody></Card>
  <Card><CardBody><Text>Our Clients</Text></CardBody></Card>
</SimpleGrid>
<Heading as='h2' size='1xl' letterSpacing={2} my={5} textAlign={'center'} mt={5} mb={10}>Common Queries Addressed</Heading>
<Text align="center" mt={5}>
  <strong>How can AradChain Technologies assist with Web 3.0 development?</strong>
</Text>

<Text align="center" mt={5}>
  <strong>AradChain Technologies boasts a team of domain experts and skilled blockchain engineers capable of creating and delivering a wide spectrum of Web 3.0 solutions tailored to your business requirements. We also provide consulting services aligned with your business goals.</strong>
</Text>

<Text align="center" mt={5}>
  <strong>How can businesses benefit from Web 3.0 development?</strong>
</Text>

<Text align="center" mt={5}>
  <strong>What are the key features of Web 3.0?</strong>
</Text>

<Text align="center" mt={5}>
  <strong>How can businesses gain a competitive advantage with Web 3.0 development?</strong>
</Text>

<Text align="center" mt={5}>
  <strong>How quickly can AradChain Technologies initiate my project's development? </strong>
</Text>

<Text align="center" mt={5}>
  <strong>A Glimpse of Our Blogs</strong>
</Text>

<Text align="center" mt={5}>
  <strong>Metaverse in the Manufacturing Industry: Role and Future Prospects: </strong>
  The term "Metaverse" needs no introduction, as it has already woven itself into the fabric of our lives. The unending surge in [...]
  READ MORE
</Text>

<Text align="center" mt={5}>
  <strong>Breathing Life into the Metaverse: How AI Empowers NPCs?  </strong>
   Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies have brought a big change in [...]
  READ MORE
</Text>

<Text align="center" mt={5}>
  <strong>White Label Crypto Bank:  </strong>
  Getting Started with a White Label Crypto Banking Platform
  Opportunities often come knocking, and when they do, we all seek an expedient way to leverage them for a brighter future [...]
  READ MORE
</Text>

<Text align="center" mt={5}>
  <strong>Our Blockchain Tech Expertise  </strong>
  We are here for a friendly discussion about your business needs. No obligations.
</Text>

<Text align="center" mt={5}>
  <strong>We are always here to assist you. Feel free to reach out.</strong>
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