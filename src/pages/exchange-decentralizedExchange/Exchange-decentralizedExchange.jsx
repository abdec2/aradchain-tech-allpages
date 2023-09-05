import React from "react";
import style from "./exchange-decentralizedExchange.module.css";
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
              <h2>Decentralized Exchange Development</h2>
            </div>
            <div>
              <p>
              Development of Decentralized Exchange Software
Empower financial autonomy through truly decentralized exchange software
Since their inception in 2014, solutions involving decentralized crypto exchange software have been gradually reshaping the landscape of cryptocurrency trading, elevating user experience and accessibility. Decentralized exchanges (DEXs) are crypto trading platforms that utilize smart contracts to facilitate buy or sell orders, eliminating the necessity for any centralized entity to oversee or authorize transactions within a trading ecosystem.

In recent years, decentralized exchange software solutions have undergone significant evolution, positioning themselves to challenge established centralized exchanges (CEXs). The new generation of DEXs emerging in the Web3 era offers numerous benefits to businesses and individuals alike. These advantages encompass enhanced data security, reduced risks, improved overall efficiency, increased liquidity, and an enriched user experience.

AradChain Technologies's expertise and experience in crafting innovative solutions ensure that your decentralized crypto exchange software aligns seamlessly with the Web3 vision and is well-prepared to navigate the evolving crypto landscape.

Embark on your journey towards a future-ready decentralized exchange development with AradChain Technologies!

REQUEST A FREE DEMO

White Label Decentralized Exchange:
For 2X Cost Efficiency and Faster DEX Deployment

The cryptocurrency exchange industry is swiftly moving toward a promising future, with an ever-growing number of entrepreneurs and users entering the scene. Consequently, the industry has turned increasingly competitive, underscoring the pivotal role of time in achieving success. As a leading white label decentralized exchange software development company, we strive to provide an innovative solution for entering the decentralized exchange sector. Our signature white label DEX exchange, meticulously crafted to adhere to the highest industry standards for performance and security, serves as a potent tool to empower users to trade securely and seamlessly.

A white label decentralized exchange is a prebuilt, non-custodial trading platform that significantly reduces the cost and time associated with complex development processes. By simplifying complexities, it enables efficient resource utilization.

Key Features of Our White Label DEX Exchange:

Real-time Alerts and Notifications
Support for Multiple Cryptocurrencies and Fiat
Fully Customizable and Scalable Platform
Robust Admin and User Dashboard
Intuitive and User-Friendly Interface
Advanced Trading Options
Cutting-edge Security Mechanisms
Impenetrable Smart Contracts
Integration with Multiple Payment Gateways
User-Friendly Platform Navigation

We harness robust security mechanisms, streamlined trading workflows, the technical excellence of blockchain networks, and an intuitive user interface to create decentralized exchange platforms suitable for users of varying experience levels.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Decentralized Cryptocurrency Exchange Development Services
We provide a unique opportunity to build your desired decentralized crypto exchange software, tailored precisely to your needs and enriched with as many features as necessary. Our solutions are designed to be versatile and feature-rich, granting you the flexibility to explore and deliver optimal services to your users.

AMM Decentralized Exchange Software Development

Create a fully decentralized trading ecosystem

Automated Market Makers (AMMs) represent autonomous mechanisms utilized by decentralized exchanges to eliminate the need for centralized exchanges and other intermediaries in facilitating trades. These decentralized crypto exchange software solutions rely on smart contracts to manage liquidity provision and asset pricing. The advanced protocol pools liquidity for these smart contracts, often referred to as liquidity pools.

              </p>
              <p>
              Key Features

Liquidity Pools
Swap
Pools
Farms
Lottery
Transaction Deadline
Slippage Tolerance
Multi-chain Capability
Multi-Wallet Connection

Order Book-Based Spot DEX Development
Deliver an exceptional experience using advanced mechanisms

Order book-based spot decentralized exchanges replicate the order book and trade book models utilized by centralized exchanges. These DEXs can be categorized into two main types: On-Chain DEXs and Off-Chain DEXs. In the former, decentralized crypto exchange software executes order matching and transactions directly through smart contracts. In the latter, order matching occurs in a centralized manner, while funds are securely stored in a smart contract.

Key Features

Limit Orders
Market Orders
Trading View Charts
Depth Chart
Transaction History
Multi-Wallet Connection
Multi-Chain Capability
Order Book
Node-Based Matching Engine
Trade Book
High Transaction Throughput

Order Book-Based Perpetual DEX Development
Empower users with consequential technology for futures trading

Perpetual DEXs are cryptocurrency derivative trading platforms that enable traders to hold positions indefinitely. These platforms operate continuously and autonomously, allowing traders to maintain positions as long as their accounts have sufficient funds to cover potential losses. These decentralized futures trading protocols can be designed to delegate Profit & Loss (PL) and other calculations to a third party or handle everything independently, depending on the preferences of entrepreneurs.

Key Features

Long/Short Positions
Isolated Margin
Stop Limit
Liquidation Engine
Trading View Charts
Take Profit/Stop Loss Calculator
Leverage Up To 125x
Market Order
Take Profit
Funding Rate
Depth Chart
Convert Position
Cross Margin
Limit Order
Stop Loss
Index Price from 5 Sources
Margin Calculator
High Throughput Matching Engine

DeFi DEX Aggregator Development:
Empower users with a DeFi trading search engine

In the DeFi landscape, DEX aggregators ensure communication among various decentralized exchange software solutions, offering users a unified interface to access liquidity across multiple DeFi trading protocols. As a top-rated decentralized exchange development company, we construct highly efficient DeFi exchange aggregators with user-friendly interfaces that adhere to top DEXs and market-making protocols.

Key Features

Support for Multiple Wallets
10+ Liquidity Sources
Slippage Tolerance
User-Friendly Interface
Support for Multiple Chains
Best Price Comparison
Multi-Path Swaps
Smart Order Routing
Transaction Deadline
Liquidity Pools

Let’s kickstart your decentralized cryptocurrency exchange development journey!

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Decentralized Exchange Scripts:
For swift and flawless DEX development

Whether you aim to optimize an existing crypto exchange platform or establish a decentralized exchange from scratch, our high-end DEX exchange scripts

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
