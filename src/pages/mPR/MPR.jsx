import React from "react";
import style from "./mPR.module.css";
// import image from '../../assets/aboutInfo2.png'
import crypto1 from "../../assets/crypto1.png";
import crypto2 from "../../assets/crypto2.png";
import data from "../../database/data";
import Whyus from "../../components/whyUs/Whyus";
import Heading from "../../components/heading/Heading";
import AboutStats from "../../components/aboutStats/AboutStats";
import Team from "../../components/team/Team";
import { Link } from "react-router-dom";
import Footer1 from "../../components/footer1/Footer1";
import Needsolution from "../../components/needSolution/Needsolution";
import map from "../../assets/map-pattern-1.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const About = () => {
  // console.log(data.aboutStatsData)
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <Heading heading="About" />
          <div className={style.mainSectionContent}>
            <div>
              <img src={map} alt="" />
              <h2>PRESS RELEASE</h2>
            </div>
            <div>
              <p>
              AradChain Technologies Solutions Featured In News18
News18Punjab
[…]
Read more

AradChain Technologies's Innovative Approach to Smart Contracts Featured on Cointelegraph
cointelegraph.com
The unlimited potential of smart contracts is being explored by AradChain Technologies, embracing their versatility for various business objectives. The smart contract market is projected to reach $354 billion by 2026, indicating their widespread adoption and utility in mainstream applications […]
Read more

              </p>
              <p>
              Cryptocurrency Market Surge: Bitcoin's Price Surges Past $57,000 Mark
financialexpress.com
In the past week, Bitcoin's value soared by almost 21%, while Ethereum witnessed a 7.8% increase. Notable surges were also seen among other top 100 cryptocurrencies, with XRP rising by 12.5% […]
Read more

Blockchain-Powered Finance: A Solution for Fiat Finance Challenges
outlookindia.com
Blockchain-driven finance is revolutionizing participation in the economy, especially for the unbanked population. The remarkable growth of the crypto market owes a debt to the 2020 DeFi movement, which catalyzed fintech enterprises […]
Read more

Record Inflows in Cryptocurrency Investments, Fueled by First Bitcoin ETF
financialexpress.com
Altcoins like Solana, Cardano, and Binance experienced significant inflows of $8.1 million, $5.3 million, and $1.8 million respectively, highlighting the growing diversification within the crypto investment landscape […]
Read more

NFT Trend in India: Artists' Dreams Achieved on the Blockchain
zeenews.india.com
The recent surge of interest among celebrities, athletes, gamers, and artists in leveraging blockchain technology to realize their ambitions is evident. The allure of permanently recording achievements on the blockchain has captivated many […]
Read more

The Ascendance of Comprehensive Blockchain Development Solutions for Enterprises
entrepreneur.com
Enterprises like AradChain Technologies Solutions are propelling the decentralization movement and embracing the next wave of digital business through innovative, integrated blockchain services. The expansion of enterprise blockchain solutions is redefining the business landscape […]
Read more

Blockchain-Driven Finance: Addressing Fiat Finance Challenges
outlookindia.com
The remarkable ascent of the crypto market was largely made possible by the DeFi surge in 2020, which compelled fintech enterprises to reevaluate their strategies and preferences in favor of blockchain-powered finance […]
Read more

AradChain Technologies Solutions' DeFi Tokens Surpass $500 Million Market Cap
news.bitcoin.com
Amidst the surging wave of cryptocurrency adoption, India's AradChain Technologies Solutions has emerged as a standout player. The company's foray into blockchain and cryptocurrency development has yielded successful token launches that have collectively exceeded $500 million in market capitalization […]
Read more

AradChain Technologies Solutions Facilitates $100 Million in Blockchain MLM Platform Transactions
yahoo.com
As blockchain technology continues to revolutionize various industries, especially in finance, the focus remains on its transformative impact on business operations. Organizations are harnessing its potential to enhance efficiency and transparency […]
Read more
Load More
Explore Our Blog
Discover insightful articles on diverse topics related to the blockchain and cryptocurrency landscape.
Categories:
NFT Wallet Development
Asset Management
Asset Tokenization Services
Binance Smart Chain
Blockchain
Coin/Token Development
Crypto Banking
Crypto Exchange Development
DeFi Crypto Exchange
Cryptocurrency Wallet Development
DAO Development
dApps Development
Decentralized Finance
DeFi Wallet Development
ICO Development
IDO Development
Launchpad Development
Margin Trading Exchange
Market Making
Metaverse Development
NFT Development
Polkadot Development
P2P Exchange
P2P Lending
Smart Contract
Stablecoin Development
STO Development
Web3 Development
Web3 Wallet Development
Whitepaper Development
Recent Posts:
Breathing Life into the Metaverse: How AI Empowers NPCs
How to Get Started with White Label Crypto Banking Platform?
How Metaverse Casino Development is Shaping the Future of Gambling
Exploring the Cosmos Through Metaverse Development
Blockchain & AI: Top Use Cases and Barriers to AI Adoption
Decentralizing
The World
Join Us
Unlock opportunities by leveraging your expertise in game-changing technology.
SEARCH JOBS
Stay Informed
Receive the latest updates on the evolution of cryptocurrencies to stay informed.
CONTACT US
Newsletter
Stay connected with our journey of success through our newsletter.

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className={style.infoSection}>
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
      </div>

      {/* Crypto Section */}
      {/* <div className={style.cryptoSection}>
        <div className={style.cryptoContainer}>
          <img src={crypto1} alt="crypto1" />
          <img src={crypto2} alt="crypto2" />
        </div>
    </div> */}

      {/* Our Team */}
      <div className={style.ourTeamSection}>
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
      </div>
      <TelegramFloatingBtn />
      <FloatingWhatsApp
        phoneNumber="447778222221"
        accountName="Jennie"
        allowEsc
        allowClickAway
        notification
        notificationSound
        buttonStyle={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
        }}
      />

      {/* Need Solution */}
      <Needsolution />

      {/* Footer Section */}
      <Footer1 />
    </div>
  );
};

export default About;
