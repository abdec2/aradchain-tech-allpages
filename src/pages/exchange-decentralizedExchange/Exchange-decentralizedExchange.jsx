import React from "react";
import style from "./exchange-decentralizedExchange.module.css";
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
import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card } from "@chakra-ui/react";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Decentralized Exchange Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Development of Decentralized Exchange Software Empower financial autonomy through truly decentralized exchange software Since their inception in 2014, solutions involving decentralized crypto exchange software have been gradually reshaping the landscape of cryptocurrency trading, elevating user experience and accessibility. Decentralized exchanges (DEXs) are crypto trading platforms that utilize smart contracts to facilitate buy or sell orders, eliminating the necessity for any centralized entity to oversee or authorize transactions within a trading ecosystem.In recent years, decentralized exchange software solutions have undergone significant evolution, positioning themselves to challenge established centralized exchanges (CEXs). The new generation of DEXs emerging in the Web3 era offers numerous benefits to businesses and individuals alike. These advantages encompass enhanced data security, reduced risks, improved overall efficiency, increased liquidity, and an enriched user experience.AradChain Technologies's expertise and experience in crafting innovative solutions ensure that your decentralized crypto exchange software aligns seamlessly with the Web3 vision and is well-prepared to navigate the evolving crypto landscape.Embark on your journey towards a future-ready decentralized exchange development with AradChain Technologies!
             </Text>
             <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>White Label Decentralized Exchange:</Heading>
<Heading as='h3' size='xl' letterSpacing={2} my={3} textAlign={'center'} mt={6} mb={6}>For 2X Cost Efficiency and Faster DEX Deployment</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    The cryptocurrency exchange industry is swiftly moving toward a promising future, with an ever-growing number of entrepreneurs and users entering the scene. Consequently, the industry has turned increasingly competitive, underscoring the pivotal role of time in achieving success. As a leading white label decentralized exchange software development company, we strive to provide an innovative solution for entering the decentralized exchange sector. Our signature white label DEX exchange, meticulously crafted to adhere to the highest industry standards for performance and security, serves as a potent tool to empower users to trade securely and seamlessly.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    A white label decentralized exchange is a prebuilt, non-custodial trading platform that significantly reduces the cost and time associated with complex development processes. By simplifying complexities, it enables efficient resource utilization.
</Text>

<Heading as='h3' size='lg' letterSpacing={2} my={3} textAlign={'center'} mt={6} mb={6}>Key Features of Our White Label DEX Exchange:</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Real-time Alerts and Notifications
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Support for Multiple Cryptocurrencies and Fiat
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Fully Customizable and Scalable Platform
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Robust Admin and User Dashboard
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Intuitive and User-Friendly Interface
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Advanced Trading Options
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Cutting-edge Security Mechanisms
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Impenetrable Smart Contracts
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Integration with Multiple Payment Gateways
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - User-Friendly Platform Navigation
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    We harness robust security mechanisms, streamlined trading workflows, the technical excellence of blockchain networks, and an intuitive user interface to create decentralized exchange platforms suitable for users of varying experience levels.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <a href="#">CONNECT ON WHATSAPP</a> <span>|</span> <a href="#">CONNECT ON TELEGRAM</a>
</Text>

<Heading as='h3' size='lg' letterSpacing={2} my={3} textAlign={'center'} mt={6} mb={6}>Decentralized Cryptocurrency Exchange Development Services</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    We provide a unique opportunity to build your desired decentralized crypto exchange software, tailored precisely to your needs and enriched with as many features as necessary. Our solutions are designed to be versatile and feature-rich, granting you the flexibility to explore and deliver optimal services to your users.
</Text>

<Heading as='h3' size='lg' letterSpacing={2} my={3} textAlign={'center'} mt={6} mb={6}>AMM Decentralized Exchange Software Development</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Create a fully decentralized trading ecosystem
</Text>
<Heading as='h3' size='lg' letterSpacing={2} my={3} textAlign={'center'} mt={6} mb={6}> Key Features</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Liquidity Pools</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Swap Pools</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Farms</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Lottery</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Transaction Deadline</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Slippage Tolerance</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Multi-chain Capability</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Multi-Wallet Connection</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Order Book-Based Spot DEX Development</Text>
    </CardBody>
</Card>
  </SimpleGrid> 
<Text align={'center'} letterSpacing={2} marginTop={4}>Deliver an exceptional experience using advanced mechanisms.Order book-based spot decentralized exchanges replicate the order book and trade book models utilized by centralized exchanges. These DEXs can be categorized into two main types: On-Chain DEXs and Off-Chain DEXs. In the former, decentralized crypto exchange software executes order matching and transactions directly through smart contracts. In the latter, order matching occurs in a centralized manner, while funds are securely stored in a smart contract.</Text>
<Heading as='h3' size='lg' letterSpacing={2} my={3} textAlign={'center'} mt={6} mb={6}>Key Features</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Limit Orders</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Market Orders</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Trading View Charts</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Depth Chart</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Transaction History</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Multi-Wallet Connection</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Multi-Chain Capability</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Order Book</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Node-Based Matching Engine</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Trade Book</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>High Transaction Throughput</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Order Book-Based Perpetual DEX Development</Text>
    </CardBody>
</Card>
</SimpleGrid>  
<Text align={'center'} letterSpacing={2} marginTop={4}>Empower users with consequential technology for futures trading.Perpetual DEXs are cryptocurrency derivative trading platforms that enable traders to hold positions indefinitely. These platforms operate continuously and autonomously, allowing traders to maintain positions as long as their accounts have sufficient funds to cover potential losses. These decentralized futures trading protocols can be designed to delegate Profit & Loss (PL) and other calculations to a third party or handle everything independently, depending on the preferences of entrepreneurs.</Text>
<Heading as='h3' size='lg' letterSpacing={2} my={3} textAlign={'center'} mt={6} mb={6}>Key Features</Heading> 
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Long/Short Positions</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Isolated Margin</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Stop Limit</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Liquidation Engine</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Trading View Charts</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Take Profit/Stop Loss Calculator</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Leverage Up To 125x</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Market Order</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Take Profit</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Funding Rate</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Depth Chart</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Convert Position</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Cross Margin</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Limit Order</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Stop Loss</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Index Price from 5 Sources</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Margin Calculator</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>High Throughput Matching Engine</Text>
    </CardBody>
</Card>
</SimpleGrid>
<Heading as='h3' size='lg' letterSpacing={2} my={3} textAlign={'center'} mt={6} mb={6}>DeFi DEX Aggregator Development</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Empower users with a DeFi trading search engine.In the DeFi landscape, DEX aggregators ensure communication among various decentralized exchange software solutions, offering users a unified interface to access liquidity across multiple DeFi trading protocols. As a top-rated decentralized exchange development company, we construct highly efficient DeFi exchange aggregators with user-friendly interfaces that adhere to top DEXs and market-making protocols.</Text>      
<Heading as='h3' size='lg' letterSpacing={2} my={3} textAlign={'center'} mt={6} mb={6}>Key Features</Heading>          
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Support for Multiple Wallets</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>10+ Liquidity Sources</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Slippage Tolerance</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>User-Friendly Interface</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Support for Multiple Chains</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Best Price Comparison</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Multi-Path Swaps</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Smart Order Routing</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Transaction Deadline</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Liquidity Pools</Text>
    </CardBody>
</Card>
</SimpleGrid>
<Text align={'center'} letterSpacing={2} marginTop={4}>Let’s kickstart your decentralized cryptocurrency exchange development journey!</Text>
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