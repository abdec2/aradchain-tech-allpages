import React from "react";
import style from "./exchange-p2pExchange.module.css";
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
              <Heading>Security Token Exchange Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Development of Secure Token Exchange Platforms Security tokens are revolutionizing the landscape of fundraising. As a catalyst for legally compliant fundraising, security tokens are rapidly gaining popularity, widespread traction, and global acceptance. With the increasing demand for security tokens, the imperative need for a robust security token exchange platform to facilitate the trading of these tokens emerges. A security token exchange operates within the realm of Alternative Trading Systems (ATS), regulated as broker-dealers. ATS platforms provide a marketplace that connects buyers and sellers of securities. Our proficiency in technology, IT management, and blockchain positions us as a reliable security token exchange development company. Our adept team of blockchain developers possesses expertise in every facet of STO exchange development – encompassing design, functionality, security, performance, and SEC compliance. Our well-structured roadmap, combined with strategically aligned activities, expedites the deployment process. Embark on your STO exchange development journey with AradChain Technologies Solutions to harness an unparalleled opportunity to maintain a competitive edge.
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
            Features Embedded in Our Security Token Exchange
            </Heading>

            <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
            <Card>
    <CardBody>
        <Text><strong>Robust Matching Engine</strong></Text>
        <Text>Our premier security token exchange platform integrates a robust matching engine capable of efficiently pairing buy and sell orders at lightning speed. This engine accommodates diverse order types, including market, limit, and stop orders.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text><strong>Hot Wallet Integration</strong></Text>
        <Text>We incorporate a resilient multi-crypto hot wallet into our security token exchange, bolstered by leading security features such as multi-signature support, secure storage, and seamless transactions for various cryptocurrencies.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text><strong>Multi-layered Security</strong></Text>
        <Text>Each security token exchange we provide is fortified with advanced security solutions, including two-factor authentication, data encryption, SSL encryption, HTTP authentication, anti-Distributed Denial of Service (DDoS) measures, Cross-Site Request Forgery (CSRF) Protection, and more.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text><strong>API Integration with External Exchange</strong></Text>
        <Text>We establish a secure API connection to an external security token exchange platform to ensure heightened liquidity for your exchange. Liquidity is influenced by the funds deposited in the external exchange's account.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text><strong>Payment Gateway Incorporation</strong></Text>
        <Text>A payment gateway is seamlessly integrated into our security token exchange, enabling users to transact tokens using fiat currencies through credit cards, debit cards, and other payment systems, enhancing the overall user experience.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text><strong>Multi-currency Transactions</strong></Text>
        <Text>Our scalable security token exchange platform effortlessly accommodates the integration of multiple cryptocurrencies as per your business requirements. Additionally, the exchange supports a plethora of fiat currencies.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text><strong>Multi-language Support</strong></Text>
        <Text>The incorporation of multi-language support expands the global reach of your STO exchange platform. Integration with major languages like English, Russian, French, Spanish, Arabic, and more ensures seamless communication.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text><strong>KYC and AML Verification</strong></Text>
        <Text>Geographically oriented KYC protocols facilitate secure user identity verification, ensuring only legitimate and authenticated users gain access to your security token exchange.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text><strong>Trustworthy Escrow System</strong></Text>
        <Text>A secure, smart-contract-based escrow system facilitates direct trading between users, automating and expediting payment processing.</Text>
    </CardBody>
</Card>
</SimpleGrid>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Frequently Asked Questions</Heading>
            <Text align={'center'} letterSpacing={1} marginTop={5}>How does a security token exchange function?</Text>
            <Text align={'center'} letterSpacing={1} marginTop={5}>STO trading platforms enable users to buy and sell security tokens. These platforms cater to both primary and secondary markets, offering services such as STO issuance, functioning as hybrid issuance and trading platforms in the primary market</Text>
            <Text align={'center'} letterSpacing={1} marginTop={5}>What role does the broker-dealer component play in an STO exchange?</Text>
            <Text align={'center'} letterSpacing={1} marginTop={5}>In what ways can STO impact the global landscape?</Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Our Proficiency in Blockchain Technology</Heading>
            <Text align={'center'} letterSpacing={1} >
        We're available for a friendly conversation to discuss your business requirements, without any obligation.</Text>
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