import React from "react";
import style from "./mPR.module.css";
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
import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card } from "@chakra-ui/react";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>PRESS RELEASE</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            AradChain Technologies Solutions Featured In News18.News18Punjab[…]Read more ,AradChain Technologies's Innovative Approach to Smart Contracts Featured on Cointelegraphcointelegraph.com
            The unlimited potential of smart contracts is being explored by AradChain Technologies, embracing their versatility for various business objectives. The smart contract market is projected to reach $354 billion by 2026, indicating their widespread adoption and utility in mainstream applications […]
            Read more
            </Text>
            <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Cryptocurrency Market Surge: Bitcoin's Price Surges Past $57,000 Mark
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      In the past week, Bitcoin's value soared by almost 21%, while Ethereum witnessed a 7.8% increase. Notable surges were also seen among other top 100 cryptocurrencies, with XRP rising by 12.5% […]{" "}
      <Link href="https://www.financialexpress.com">Read more</Link>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Blockchain-Powered Finance: A Solution for Fiat Finance Challenges
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      Blockchain-driven finance is revolutionizing participation in the economy, especially for the unbanked population. The remarkable growth of the crypto market owes a debt to the 2020 DeFi movement, which catalyzed fintech enterprises […]{" "}
      <Link href="https://www.outlookindia.com">Read more</Link>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Record Inflows in Cryptocurrency Investments, Fueled by First Bitcoin ETF
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      Altcoins like Solana, Cardano, and Binance experienced significant inflows of $8.1 million, $5.3 million, and $1.8 million respectively, highlighting the growing diversification within the crypto investment landscape […]{" "}
      <Link href="https://www.financialexpress.com">Read more</Link>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      NFT Trend in India: Artists' Dreams Achieved on the Blockchain
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      The recent surge of interest among celebrities, athletes, gamers, and artists in leveraging blockchain technology to realize their ambitions is evident. The allure of permanently recording achievements on the blockchain has captivated many […]{" "}
      <Link href="https://zeenews.india.com">Read more</Link>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      The Ascendance of Comprehensive Blockchain Development Solutions for Enterprises
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      Enterprises like AradChain Technologies Solutions are propelling the decentralization movement and embracing the next wave of digital business through innovative, integrated blockchain services. The expansion of enterprise blockchain solutions is redefining the business landscape […]{" "}
      <Link href="https://www.entrepreneur.com">Read more</Link>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Blockchain-Driven Finance: Addressing Fiat Finance Challenges
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      The remarkable ascent of the crypto market was largely made possible by the DeFi surge in 2020, which compelled fintech enterprises to reevaluate their strategies and preferences in favor of blockchain-powered finance […]{" "}
      <Link href="https://www.outlookindia.com">Read more</Link>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      AradChain Technologies Solutions' DeFi Tokens Surpass $500 Million Market Cap
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      Amidst the surging wave of cryptocurrency adoption, India's AradChain Technologies Solutions has emerged as a standout player. The company's foray into blockchain and cryptocurrency development has yielded successful token launches that have collectively exceeded $500 million in market capitalization […]{" "}
      <Link href="https://news.bitcoin.com">Read more</Link>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      AradChain Technologies Solutions Facilitates $100 Million in Blockchain MLM Platform Transactions
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      As blockchain technology continues to revolutionize various industries, especially in finance, the focus remains on its transformative impact on business operations. Organizations are harnessing its potential to enhance efficiency and transparency […]{" "}
      <Link href="https://www.yahoo.com">Read more</Link>
    </Text>

    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Explore Our Blog
    </Heading>

    <Text align="center" letterSpacing={1} mt={4}>
      Discover insightful articles on diverse topics related to the blockchain and cryptocurrency landscape.
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