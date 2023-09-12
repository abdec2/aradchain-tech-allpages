import React from "react";
import style from "./asCAM.module.css";
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
              <h2>We believe that technology can change the world.</h2>
            </div>
            <div>
              <p>
              Cryptocurrency Asset Management Services
Management of Your Cryptocurrency Assets
Let our crypto wealth management experts choose the most profitable crypto tokens for you!

After developing an array of cryptocurrency products and services, we are now extending our expertise in crypto asset management to empower millions of budding traders who may be hesitant about crypto trading.

CONSULT OUR EXPERTS
Why Aren't You Among the 50 Million Investors Trading on a Cryptocurrency Asset Management Platform Every Day?
Since the retail market woke up to the disruption caused by cryptocurrencies in 2017, the opportunities for investing in this market have multiplied. As an experienced cryptocurrency asset management company, AradChain Technologies Solutions assists investors in navigating the landscape of high-performing asset tokens across various exchanges.

Cryptocurrency Asset Management Solutions - A Shift in an Emerging Market
Unlike traditional practices that mainly recognized essential elements and metals as tradable commodities, the ability to buy or sell licenses and even artwork marks a significant leap. This diversification enriches investment portfolios, based on the long-term potential of this innovative industry. Thus, the expansive crypto market proves to be a valuable addition to investors' portfolios, enhancing diversification and long-term profitability.

However, the intricate nature of decentralized ledger technology and the high volatility of cryptocurrencies can make crypto trading complex. While modern traders may grasp these intricacies, those accustomed to conventional trading require more comprehensive guidance. Moreover, tokens are listed on various exchanges that may or may not be compatible with the user's wallet. Consequently, managing multiple assets increases complexity, necessitating expert advisory services.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

              </p>
              <p>
              AradChain Technologies Solutions – Selecting the Most Suitable Crypto Tokens for Your Investment Portfolio
Addressing the challenges of this promising yet intricate trading practice, AradChain Technologies Solutions offers a comprehensive range of digital asset management solutions to empower even the most perplexed investors. For ordinary traders struggling to grasp market behavior, AradChain Technologies selectively chooses the most suitable tokens based on your expectations and facilitates registration on relevant exchanges for trading.

We operate on an efficient crypto fund management platform, offering unparalleled exposure to the best-performing crypto asset class. Our investment strategy targets the most liquid crypto assets, which have proven their potential through time series analysis. Furthermore, our test trading techniques consistently yield higher returns and lower risk statistics compared to others.

crypto asset management
We sift through hundreds of crypto tokens so you don't have to!

Our Suite of Cryptocurrency Asset Management Products
We present two premium investment fund opportunities in the crypto space:
Fund Name Category Investment Management Fee Performance Fee
AradChain Technologies Crypto Fund Active Weekly 0.0% - 2.0% 20%
AradChain Technologies Index Fund Crypto Index 10 Tracker Weekly 1.0% - 1.5% 0%
AradChain Technologies Crypto Fund
The AradChain Technologies Crypto Fund focuses on maximizing returns regardless of overall market performance. Predictive decisions are made through algorithmic filter analysis, ensuring optimal trend exploitation.

This fund employs a quantitative approach based on the current market price of individual crypto assets. It prioritizes the most liquid crypto assets that have demonstrated their value through time series analysis. Additionally, this strategy can extend to other assets upon qualification.

Diversification from traditional investments
Weekly liquidity
Upside benefits, downside protection
Direct investment with fiat currency
AradChain Technologies Index Fund
Crypto Index 10 is the definitive benchmark for evaluating the top 10 cryptocurrencies globally. Widely followed by reputable exchanges and investors, this index sets foundation standards for scrutinizing crypto markets.

AradChain Technologies diligently adheres to these standards for its crypto funds. AradChain Technologies Index Funds are quarterly readjusted based on live listings, aligning with each token's market capitalization.

Performance achieved prior to fee deduction
Investments in large-cap crypto portfolios
Weekly liquidity
Upside benefits, downside protection
Learn More About Our Cryptocurrency Investment Strategy
LEARN MORE
Why Choose Us
Why Choose Us
We employ advanced trading data analytics to identify tokens with potential for growth each quarter.

Cryptocurrency Asset Management Services
Investor-Friendly
User-friendly crypto fund products designed for portfolios
Cryptocurrency Asset Management Services
Instant Liquidity
Easy fiat conversion requests to investors' banks
Cryptocurrency Asset Management Services
Enhanced Portfolio
A diverse range of crypto tokens and industries to enhance returns
Cryptocurrency Asset Management Services
Uncompromised Quality
A selection of institutional-grade premium products
Cryptocurrency Asset Management Services
Personalized Management
Expert guidance on buying, holding, and selling tokens
Cryptocurrency Asset Management Services
Expert Counterparties
Partnerships only with registered and authorized distributors
Frequently Asked Questions

Why should I invest in cryptocurrency assets?
The current price levels present an ideal opportunity to invest in the crypto asset market ahead of anticipated technological breakthroughs. The broader crypto asset market exhibits low correlations with traditional asset classes. This investment adds diversification and strengthens portfolios based on the long-term potential of this innovative industry.
How does AradChain Technologies assist in cryptocurrency management?
What types of funds does AradChain Technologies offer?
Who can benefit from cryptocurrency management services?
Are cryptocurrency asset management services secure?
Insights from Our Blog

Top 12 Asset Tokenization Platforms of 2023
Discover the leading asset tokenization platforms driving innovation in 2023.

Asset Tokenization Empowering the Economy
Learn how asset tokenization empowers comprehensive economies by transforming conventional assets.

From Physical to Digital: Evolution of Asset Tokenization
Explore the evolution of asset tokenization and its transformative impact on investing.

Our Blockchain Tech Expertise
We're available for a friendly chat about your business needs.

We're here to offer technical support and answer inquiries. Feel free to get in touch!

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
      <Needsolution />

      {/* Footer Section */}
      <Footer1 />
    </div>
  );
};

export default About;
