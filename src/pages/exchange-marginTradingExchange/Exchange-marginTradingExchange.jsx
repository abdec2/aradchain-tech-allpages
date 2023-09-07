import React from "react";
import style from "./exchange-marginTradingExchange.module.css";
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
        <div className={`${style.mainSectionContainer} ${style.customContainer}`}>
          <div className={style.headerContainer}>
            <img src={map} alt="" />
            <h2 style={{ color: "white", marginTop: "-50%", fontWeight: "900", marginLeft: "-3px" }}>
            Margin Trading Exchange
            </h2>
          </div>
          <div className={style.mainSectionContent} style={{ marginTop: "-0.5px" }}>
            <p>
            <p>
        Enhance Your Profits through the Launch of a Margin Trading Crypto Exchange
    </p>
    <p>
        Margin trading has emerged as a prevailing trend in the cryptocurrency market. This practice involves borrowing funds to amplify potential gains when trading cryptocurrencies. Through margin trading, traders can utilize increased buying or selling power, enabling them to initiate positions that exceed their actual account balance. For instance, if a trader possesses a balance of 5 BTC and opts for 10X leverage (equivalent to 10 times their account value), they can open a position valued at 50 BTC. This means that if market conditions are favorable, traders can enhance their profits by a factor of 10. The opportunity to multiply earnings has positioned margin trading as a favored option among crypto traders. Recognizing this, crypto exchange proprietors are integrating margin trading into their platforms to attract more users and bolster their revenue.
    </p>
    <p>
        At AradChain Technologies, we specialize in developing leverage and margin trading exchanges that empower users to take long or short positions on multiple cryptocurrencies. At the heart of each margin trading exchange we create lies institutional-grade security and a potent trading engine, ensuring secure and swift transactions.
    </p>

    <h3 style={{ textDecoration: 'underline' }}>Advantages of Leverage and Margin Trading Exchange Software</h3>
    <ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
        <li>Equipping your crypto exchange with comprehensive leverage trading features can open new avenues for revenue generation.</li>
        <li>Margin trading benefits traders and exchange owners alike. While traders can maximize profits with a minimal investment, exchange owners can augment their returns through transaction fees.</li>
        <li>Many crypto exchanges have idle funds in reserve. By integrating a crypto leverage trading system, exchange owners can utilize these funds, allowing traders to leverage their positions and thereby generating steady returns.</li>
        <li>Irrespective of market conditions, traders are often drawn to speculate for substantial profits. A crypto exchange offering leverage trading can attract a larger user base, translating to increased earnings for exchange proprietors.</li>
    </ul>

    <h3 style={{ textDecoration: 'underline' }}>Features Embedded in Our Margin Trading Exchange Software</h3>
    <ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
        <li>Enable users to magnify their buying or selling capacity through leverage, scaling up to multiple times.</li>
        <li>Incorporate top-tier security features, including SSL implementation and two-factor authentication, ensuring authorized user access.</li>
        <li>Integrate a variety of trading order types such as market orders and copy trading, enhancing user trading flexibility.</li>
        <li>Our exchange is powered by a high-performance trading engine, guaranteeing exceptional speed and reliability.</li>
        <li>Incorporate a multi-currency wallet to facilitate secure and swift transactions across a spectrum of cryptocurrencies.</li>
        <li>A comprehensive admin panel empowers exchange owners to efficiently oversee user activities and transactions on the platform.</li>
    </ul>

    <h3 style={{ textDecoration: 'underline' }}>Security Measures Enforced in Our Margin Trading Exchange</h3>
    <ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
        <li>Enhanced through multi-signature withdrawal functionality.</li>
        <li>Strengthened by multi-level authentication mechanisms.</li>
        <li>Ensured through high-level encryption protocols.</li>
    </ul>

    <h3 style={{ textDecoration: 'underline' }}>Risk Management Features of Our Leverage and Margin Trading Exchange</h3>
    <ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
        <li>Automatically liquidates traders' positions when the mark price hits the bankruptcy threshold.</li>
        <li>Allows traders to set thresholds for order execution, enabling automatic market exits under favorable conditions.</li>
        <li>Empowers users to partially close orders, securing profits while capitalizing on bullish market trends.</li>
        <li>Protects traders' funds from auto deleveraging, even if their positions dip below the maintenance margin level.</li>
    </ul>

    <h3 style={{ textDecoration: 'underline' }}>Frequently Asked Questions</h3>
    <ol style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
        <li>What exactly is margin trading?</li>
        <p>Margin trading entails borrowing funds to amplify potential gains when buying and selling cryptocurrencies. Traders can access increased buying/selling power and open positions exceeding their actual account balance.</p>
        
        <li>What does the term "margin" mean?</li>
        
        <li>Could you explain what leverage is?</li>
        
        <li>What does "initial margin" refer to?</li>
    </ol>

    <h3 style={{ textDecoration: 'underline' }}>An Overview of Our Blog Posts</h3>
    <ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
        <li>Maximizing Profits With a Crypto Arbitrage Bot in 2023</li>
        <p>As cryptocurrency trading continues to gain traction, the presence of crypto arbitrage bots has generated considerable buzz. This groundbreaking development empowers traders...</p>

        <li>Developing Bitcoin Exchange Software Similar to Poloniex</li>
        <p>Table of Contents Introduction What is Poloniex? Key Features of Bitcoin Exchange Software Modeled After Poloniex Launching Your Exchange Platform Using Bitcoin...</p>

        <li>From Ordinary to Extraordinary: Crafting Advanced Crypto Exchange Software in 2023</li>
        <p>The beginning of 2023 marked a robust cryptocurrency market, with the year witnessing market fluctuations and the entry of...</p>
    </ul>

    <h3 style={{ textDecoration: 'underline' }}>Our Proficiency in Blockchain Technology</h3>
    <p>We're here for a friendly conversation to discuss your business requirements, no obligation required.</p>

            </p>

                      
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
      {/* Our Team */}
      <div className={style.ourTeamSection}>
        <div className={style.ourTeamContainer}>
          <h1>Our Team</h1>
          <p>The passionate people who drive our projects in Aradchain Technologies.</p>
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
