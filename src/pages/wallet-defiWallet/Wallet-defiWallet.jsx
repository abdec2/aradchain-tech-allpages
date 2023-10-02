import React from "react";
import style from "./wallet-defiWallet.module.css";
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
              <Heading>Defi Wallet Development Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Outstanding Attributes of Our Decentralized Crypto Wallet
The world of decentralized finance has captured the attention of crypto enthusiasts aiming to augment their earnings in the crypto realm. It has set forth a new paradigm in finance, characterized by security, immutability, and independence from third-party interference. This sector holds immense promise for the future, poised to bring about a complete revolution in the financial landscape.
AradChain Technologies's Defi wallets offer comprehensive safeguarding for crypto assets and coins, fortified by advanced security features such as 2-factor authentication. These wallets can be tailored to align with specific business needs. We engage in detailed consultations to grasp your project vision, outlining a roadmap that delves into the intricacies of project development. Our Defi wallet development experts stand ready to guide you through the development journey, elucidating the intricate workings of decentralized finance. With nearly a decade of experience and mastery, we are well-equipped to deliver comprehensive decentralized solutions to global businesses. Consult our proficient team to embark on developing top-notch Defi crypto wallets and steer your business towards growth.

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
            Advantages of Defi Crypto Wallet App Development
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            Our DeFi wallet app development solutions come with numerous advantages, enhancing your long-term income potential. With dedicated administrative control, you can effectively manage platform operations. Our user-friendly interface ensures seamless and straightforward interactions, vital for uncomplicated transactions. Users can easily monitor balances, engage in Bitcoin and fiat currency transactions, and review their transaction history directly on the platform. We offer a unique marketing proposition that grants you a competitive edge. Our wallets are compatible with Android, iOS, and other platforms, ensuring seamless application performance. Security is a top priority, with two-factor authentication and multi-signature functionality, along with routine security updates for wallet invulnerability.

Our DeFi wallet development services span various platforms, amplifying revenue potential and expanding the reach of the cryptocurrency and decentralized finance sectors. We provide DeFi-based exchange solutions, facilitating transaction processes within the DeFi platform without central authority oversight. DeFi staking development allows users to stake tokens and earn passive income. Our DeFi yield farming development constructs platforms for earning native tokens through liquidity minting. We design smart-contract-based lending and borrowing platforms, reshaping the banking landscape. DeFi DApps empower users to partake in the next-generation fintech revolution. Our tamper-proof DeFi wallets hold cryptocurrencies and facilitate transactions without third-party involvement.

The cost of DeFi wallet development is cost-effective, making it accessible for anyone ready to enter the world of digital currency. We also offer a customizable White Label DeFi wallet clone script with features like staking, yield farming, swapping, and tokenization. Our repertoire includes Uniswap, PancakeSwap, JustSwap, SushiSwap, BakerySwap, Yearn Finance, 1 Inch Exchange, Compound Finance, and PolkaSwap clone scripts, each enriched with unique features and designed for optimal performance within the DeFi landscape.
             </Text>
             <Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  Why We Stand Out as the Premier Defi Wallet Development Company
</Heading>

<Text align="center" mt={5}>
  AradChain Technologies is a respected Defi wallet development company, known for delivering professional services. Our track record showcases the creation of secure, scalable, and robust wallets. With almost a decade of experience in the blockchain arena, our experts remain aligned with advanced development trends, seamlessly integrating them into web and mobile wallet development. Crypto enthusiasts can enter the Defi ecosystem with confidence, supported by our adept blockchain team.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
  Core Attributes of Our Defi Crypto Wallet
</Heading>

<Text align="center" mt={5}>
  <strong>In-Chat Transactions:</strong> Users can effortlessly send, receive, or request payments using the in-chat feature of the wallet, streamlining chat-based financial interactions.
</Text>

<Text align="center" mt={5}>
  <strong>QR Code Scanner:</strong> The wallet is equipped with an automatic scanning feature, simplifying currency exchange and preventing copying errors.
</Text>

<Text align="center" mt={5}>
  <strong>Auto-Denial of Duplicate Payments:</strong> The platform detects and rejects duplicate payments, effectively minimizing chargeback incidents.
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