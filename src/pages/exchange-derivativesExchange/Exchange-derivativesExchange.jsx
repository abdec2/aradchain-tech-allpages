import React from "react";
import style from "./exchange-derivativesExchange.module.css";
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
              <Heading>Crypto Derivatives Exchange</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            A crypto derivative represents a tradable security or an automated financial contract between parties, based on the future price of an asset. AradChain Technologies Solutions, a trusted smart contract development company, offers top-tier derivatives exchange development services, introducing new investment opportunities to traders.
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
             
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>How Crypto Derivatives Work</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
    In crypto derivatives trading, the underlying asset can be any cryptocurrency token. Two parties involved in a financial contract speculate on the price of the cryptocurrency on a specific future date. At the contract's initiation, both parties agree on the buying/selling price of the cryptocurrency on the predetermined date, regardless of the market price at that time. This enables investors to profit from fluctuations in the underlying asset's price by buying at a lower price and selling at a higher price.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Crypto derivatives can be traded on both centralized and decentralized exchange platforms. Exchange owners can leverage the potential of a cryptocurrency derivatives exchange to attract a wider range of investors. A crypto derivative trading platform offers more flexibility than spot margin trading, providing access to markets that might otherwise be unavailable.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>The Rising Potential of Crypto Derivatives Trading Platforms</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
    Beyond just generating profits, cryptocurrency derivatives trading offers investors a chance to mitigate the risks associated with highly volatile digital assets. This has increased the adoption of crypto trading among mainstream investors and holds promise for a brighter future for the trading ecosystem. With derivatives exchange development, financial institutions can reap the following benefits:
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Opportunity to venture into the world of Decentralized Finance (DeFi),
    </Text>
    <Text align={'center'} letterSpacing={2} marginTop={4}>

    Access to an untapped pool of cryptocurrency holders,
    </Text>
    <Text align={'center'} letterSpacing={2} marginTop={4}>

    Accelerated transaction processing through automated smart contracts,
    </Text>
    <Text align={'center'} letterSpacing={2} marginTop={4}>

     Efficient execution of complex strategies such as shorting.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Supported Derivative Strategies</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
    Our exchange supports a range of derivative strategies. With extensive industry experience, AradChain Technologies Solutions creates comprehensive crypto exchange products and platforms. As a reputable derivatives exchange development company, we empower investors to achieve more benefits with less complexity. Our ready-to-deploy derivatives trading platforms emphasize risk management behind the scenes and offer an intuitive customer experience, ensuring rapid time-to-market.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
     Advanced Order Types & Long-Short Contracts,
     High Transaction Throughput Rates & Minimal Latency,
     Multi-layered Security and a Robust Trade Engine,
     Incredibly User-Friendly Admin Panel.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Derivatives Trading Features Supported by Our Exchange Platform</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
    - Crypto Derivatives Exchange Development
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Auto Deleveraging (ADL):</b> Automatically liquidates traders’ positions when the mark price reaches the bankruptcy price.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Stop Loss/Take Profit:</b> Allows traders to set stop-loss and take-profit values, enabling automatic market exit under favorable conditions.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Partial Close Orders:</b> Enables users to partially close orders, securing profits while capitalizing on a bullish market.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Insurance Funds:</b> Helps traders protect their funds from auto deleveraging even if their positions fall below the maintenance margin amount.
</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>Supported Forms of Crypto Derivative Trading
Our Derivatives Exchange Development Services encompass four key types:</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Crypto Derivatives Exchange Development</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Futures Trading:</b> Buyers/sellers agree on a fixed price for a crypto asset on a specific future date. Contracts are standardized and have an expiry date.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Crypto Derivatives Exchange Development</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Forwards Trading:</b> Similar to futures but with customizable and flexible contracts based on the parties' needs, including the underlying asset.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Crypto Derivatives Exchange Development</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Options Trading:</b> Buyers reserve the right to purchase the asset on an agreed-upon date. The buyer can also specify a particular time for purchase.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Crypto Derivatives Exchange Development</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Perpetual Trading:</b> Parties exchange one type of cash flow for another on a future date, primarily governed by interest rates, currencies, and commodities.
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Features of Our Derivatives Trading Exchange Platform</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>High Leverage:</b> Enable users to increase their buying or selling power with leverage of multiple times.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Multi-layer Security:</b> Leading security features like SSL implementation and two-factor authentication ensure secure user access.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Advanced Order Types:</b> Our exchange integrates various trading order types, including market orders and copy trading.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Powerful Trading Engine:</b> A robust trading engine offers high speed and reliability, enhancing exchange performance.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Multi-currency Wallet:</b> Our integrated multi-currency wallet ensures secure and fast transactions across various cryptocurrencies.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Robust Admin Panel:</b> Monitor user activities and transactions on the platform with our robust admin panel.
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Frequently Asked Questions</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>What is a Crypto Derivatives Trading Platform?</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>A platform where two parties agree on a speculated buying price for an underlying crypto asset on a specific future date.</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>How Many Types of Crypto Derivatives Trading Are There?</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>How Long Does It Take to Build a Crypto Derivatives Exchange Platform?</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>How Much Does It Cost to Build a Crypto Derivatives Exchange Platform?</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>What Are the Benefits of Crypto Derivatives Trading?</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>What Are the Features of a Crypto Derivatives Exchange Platform?</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>What Are the Business Advantages of Developing a Crypto Derivatives Exchange Platform?</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>A Glance at Our Blogs</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Metaverse in the Manufacturing Industry: Role and Future Prospects</b>
    <p>
        The term “Metaverse” needs no introduction, as it has already woven itself into the fabric of our lives. The unending surge in […]
        <a href="#">READ MORE</a>
    </p>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>Breathing Life into the Metaverse: How AI Empowers NPCs</b>
    <p>
        Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies have brought a big change in […]
        <a href="#">READ MORE</a>
    </p>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>White Label Crypto Bank</b>
    <p>
        <b>How to Get Started with White Label Crypto Banking Platform?</b>
        When the opportunity knocks at the door, we all look for a quick and easy way to leverage it for a better […]
        <a href="#">READ MORE</a>
    </p>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <b>How is Metaverse Casino Development Changing the Future of Gambling?</b>
    <p>
        The Casino- a game of luck that lifted some to great success while leaving others in disappointment as known by many. It […]
        <a href="#">READ MORE</a>
    </p>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Our Expertise in Blockchain Technology</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    We are available for a friendly chat to discuss your business needs, no obligation.
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