import React from "react";
import style from "./deFiDDC.module.css";
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
              <Heading>Decentralized Finance and Decentralized Data Contracts</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1} mt={5}>
            Decentralized Finance, often abbreviated as DeFi, has emerged as a groundbreaking concept in the world of blockchain technology. Unlike traditional financial systems, DeFi operates on a decentralized network of computers, offering a range of financial services without the need for intermediaries like banks. Through smart contracts, DeFi platforms enable users to engage in activities such as lending, borrowing, trading, and earning interest on their cryptocurrencies. This democratization of finance empowers individuals by providing them with greater control over their assets and financial transactions, all while enhancing transparency and reducing the barriers to entry.
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
            The Role of Web Developers in DeFi and Blockchain
            </Heading>

            <Text align={'center'} letterSpacing={1} mt={5}>
              Web developers play a crucial role in the DeFi and blockchain ecosystem. They are responsible for creating user-friendly interfaces and applications that interact with blockchain networks. Web-based DeFi platforms, decentralized exchanges, wallets, and data visualization tools all rely on the expertise of web developers to design and develop seamless and secure user experiences. Additionally, web developers can contribute to the blockchain space by working on smart contract development, blockchain integration, and ensuring the security and efficiency of decentralized applications (DApps). As the DeFi and blockchain industries continue to grow, web developers will remain in high demand to build the next generation of decentralized financial solutions and blockchain-powered applications.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
              Cryptocurrency Exchange Software Development Process
            </Heading>
            <Text align={'center'} letterSpacing={1}>
              Creating on-demand crypto exchange software requires time and investment. However, the wait is worthwhile when the platform demands high-level customization and integration of complex use cases. The step-by-step transformation from concept to functional exchange software involves:
            </Text>

            <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Digital assets on blockchain.</Text></CardBody></Card>
              <Card><CardBody><Text>Transaction processing costs.</Text></CardBody></Card>
              <Card><CardBody><Text>Storage for cryptocurrencies.</Text></CardBody></Card>
              <Card><CardBody><Text> Returns on DeFi investments.</Text></CardBody></Card>
              <Card><CardBody><Text>Process of creating new blockchain blocks.</Text></CardBody></Card>
              <Card><CardBody><Text>Agreement among network nodes.</Text></CardBody></Card>
              <Card><CardBody><Text>Decentralized Autonomous Organization.</Text></CardBody></Card>
              <Card><CardBody><Text>News and Announcements Section</Text></CardBody></Card>
              <Card><CardBody><Text>Computers in a blockchain network.</Text></CardBody></Card>
              <Card><CardBody><Text> Blockchain's tamper-resistant nature.</Text></CardBody></Card>

              <Card><CardBody><Text>Protection of user data.</Text></CardBody></Card>
              <Card><CardBody><Text> Data on the blockchain is unchangeable.</Text></CardBody></Card>
              <Card><CardBody><Text>Platforms for buying/selling cryptocurrencies.</Text></CardBody></Card>
              <Card><CardBody><Text>Automated Market Making Bot</Text></CardBody></Card>
              <Card><CardBody><Text>Fiat Payment Gateway</Text></CardBody></Card>
              <Card><CardBody><Text>Airdrop Functionality</Text></CardBody></Card>
              <Card><CardBody><Text>Multi-Lingual Platform</Text></CardBody></Card>
              <Card><CardBody><Text>Admin Support Chat</Text></CardBody></Card>
              <Card><CardBody><Text>Multi-Role Access</Text></CardBody></Card>
              <Card><CardBody><Text>Advanced Level</Text></CardBody></Card>

              <Card><CardBody><Text>Peer-to-Peer Trading Capability</Text></CardBody></Card>
              <Card><CardBody><Text>Staking Module</Text></CardBody></Card>
              <Card><CardBody><Text>Prepaid Cards Support</Text></CardBody></Card>
              <Card><CardBody><Text>Over-The-Counter (OTC) Trading</Text></CardBody></Card>
              <Card><CardBody><Text>Merchant Payment Gateway</Text></CardBody></Card>
              <Card><CardBody><Text>NFT Marketplace Collectibles</Text></CardBody></Card>
              <Card><CardBody><Text>Launchpad Functionality</Text></CardBody></Card>
              <Card><CardBody><Text>Crypto Loans Services</Text></CardBody></Card>
              <Card><CardBody><Text>Copy Trading Feature</Text></CardBody></Card>
              <Card><CardBody><Text>Crypto Betting Module</Text></CardBody></Card>

              <Card><CardBody><Text>User Chat Feature</Text></CardBody></Card>
              <Card><CardBody><Text>Price Alerts</Text></CardBody></Card>
              <Card><CardBody><Text>VIP Account Options</Text></CardBody></Card>
              <Card><CardBody><Text>Lending and Borrowing Support</Text></CardBody></Card>
              <Card><CardBody><Text>Grid Trading Capability</Text></CardBody></Card>
              <Card><CardBody><Text>Margin Spot Trading Module</Text></CardBody></Card>
              <Card><CardBody><Text>Crypto Arbitrage Bot</Text></CardBody></Card>
              <Card><CardBody><Text>Derivatives and Perpetual Futures Trading</Text></CardBody></Card>
              <Card><CardBody><Text>Cryptocurrency Exchange Development</Text></CardBody></Card>
              <Card><CardBody><Text>Participate in the Next-Generation Financial Paradigm</Text></CardBody></Card>

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