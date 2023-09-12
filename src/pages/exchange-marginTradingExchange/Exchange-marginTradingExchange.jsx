import React from "react";
import style from "./exchange-marginTradingExchange.module.css";
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
              <Heading> Margin Trading Exchange</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Margin trading has emerged as a prevailing trend in the cryptocurrency market. This practice involves borrowing funds to amplify potential gains when trading cryptocurrencies. Through margin trading, traders can utilize increased buying or selling power, enabling them to initiate positions that exceed their actual account balance. For instance, if a trader possesses a balance of 5 BTC and opts for 10X leverage (equivalent to 10 times their account value), they can open a position valued at 50 BTC. This means that if market conditions are favorable, traders can enhance their profits by a factor of 10. The opportunity to multiply earnings has positioned margin trading as a favored option among crypto traders. Recognizing this, crypto exchange proprietors are integrating margin trading into their platforms to attract more users and bolster their revenue. At AradChain Technologies, we specialize in developing leverage and margin trading exchanges that empower users to take long or short positions on multiple cryptocurrencies. At the heart of each margin trading exchange we create lies institutional-grade security and a potent trading engine, ensuring secure and swift transactions.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Advantages of Leverage and Margin Trading Exchange Software
            </Heading>
            
            <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
            <Card>
    <CardBody>
        <Text>Equipping your crypto exchange with comprehensive leverage trading features can open new avenues for revenue generation.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Margin trading benefits traders and exchange owners alike. While traders can maximize profits with a minimal investment, exchange owners can augment their returns through transaction fees.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Many crypto exchanges have idle funds in reserve. By integrating a crypto leverage trading system, exchange owners can utilize these funds, allowing traders to leverage their positions and thereby generating steady returns.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Irrespective of market conditions, traders are often drawn to speculate for substantial profits. A crypto exchange offering leverage trading can attract a larger user base, translating to increased earnings for exchange proprietors.</Text>
    </CardBody>
</Card>
</SimpleGrid>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Features Embedded in Our Margin Trading Exchange Software</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Enable users to magnify their buying or selling capacity through leverage, scaling up to multiple times.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Incorporate top-tier security features, including SSL implementation and two-factor authentication, ensuring authorized user access.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Integrate a variety of trading order types such as market orders and copy trading, enhancing user trading flexibility.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Our exchange is powered by a high-performance trading engine, guaranteeing exceptional speed and reliability.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Incorporate a multi-currency wallet to facilitate secure and swift transactions across a spectrum of cryptocurrencies.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>A comprehensive admin panel empowers exchange owners to efficiently oversee user activities and transactions on the platform.</Text>
    </CardBody>
</Card>
</ SimpleGrid>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Security Measures Enforced in Our Margin Trading Exchange</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Enhanced through multi-signature withdrawal functionality.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Strengthened by multi-level authentication mechanisms.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Ensured through high-level encryption protocols.</Text>
    </CardBody>
</Card>

</SimpleGrid>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Risk Management Features of Our Leverage and Margin Trading Exchange</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Automatically liquidates traders' positions when the mark price hits the bankruptcy threshold.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Allows traders to set thresholds for order execution, enabling automatic market exits under favorable conditions.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Empowers users to partially close orders, securing profits while capitalizing on bullish market trends.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Protects traders' funds from auto deleveraging, even if their positions dip below the maintenance margin level.</Text>
    </CardBody>
</Card>

</SimpleGrid>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10} >Frequently Asked Questions</Heading>

        <Text align={'center'} letterSpacing={1} marginTop={4}>What exactly is margin trading?</Text>

        <Text align={'center'} letterSpacing={1} marginTop={4}>Margin trading entails borrowing funds to amplify potential gains when buying and selling cryptocurrencies. Traders can access increased buying/selling power and open positions exceeding their actual account balance.</Text>
 
        <Text align={'center'} letterSpacing={1} marginTop={4}>What does the term "margin" mean?</Text>
  
        <Text align={'center'} letterSpacing={1} marginTop={4}>Could you explain what leverage is?</Text>
    
        <Text align={'center'} letterSpacing={1} marginTop={4}>What does "initial margin" refer to?</Text>

        <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>An Overview of Our Blog Posts</Heading>
        <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
        <Card>
    <CardBody>
        <Text>Maximizing Profits With a Crypto Arbitrage Bot in 2023 .</Text>
        <Text>As cryptocurrency trading continues to gain traction, the presence of crypto arbitrage bots has generated considerable buzz. This groundbreaking development empowers traders...</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Developing Bitcoin Exchange Software Similar to Poloniex .</Text>
        <Text>Table of Contents Introduction What is Poloniex? Key Features of Bitcoin Exchange Software Modeled After Poloniex Launching Your Exchange Platform Using Bitcoin...</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>From Ordinary to Extraordinary: Crafting Advanced Crypto Exchange Software in 2023.</Text>
        <Text>The beginning of 2023 marked a robust cryptocurrency market, with the year witnessing market fluctuations and the entry of...</Text>
    </CardBody>
</Card>
  
    </SimpleGrid>   
    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Our Proficiency in Blockchain Technology</Heading>
    <Text align={'center'} letterSpacing={1} marginTop={4}>We're here for a friendly conversation to discuss your business requirements, no obligation required.</Text> 
    
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
        phoneNumber="447778222221"
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