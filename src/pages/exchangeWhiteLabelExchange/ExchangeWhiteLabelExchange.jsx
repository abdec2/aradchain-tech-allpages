import React from "react";
import style from "./exchangeWhiteLabelExchange.module.css";
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
            <h2 style={{color:"white" ,marginTop:"-50%",fontWeight:"900",marginLeft:"-3px"}}>White Label Crypto Exchange Development Company</h2>
          </div>
          <div className={style.mainSectionContent} style={{marginTop:"-0.5px"}}>
            <p>WORTH NOTING! As per the "Crypto Market Sizing" report by Imarc Group, the global cryptocurrency market reached an estimated value of $2,019 billion in 2022 and is projected to grow at a CAGR of 11.7%, reaching approximately $4,008 billion by 2028.
              White Label Cryptocurrency Exchange: Your Gateway to Competitive Edge in the Crypto Realm With an ever-increasing number of users globally and a consistently rising adoption rate in recent years, cryptocurrency has surpassed its status as a mere buzzword. The expanding market capitalization, influential newcomers in the crypto domain, and the limitless possibilities introduced by distributed ledger technology all contribute to its exponential popularity. This widespread acceptance of digital currency creates vast opportunities for exchange businesses.
              White label cryptocurrency exchange development provides businesses with a strategic advantage, offering a quick, straightforward, and cost-effective way to launch digital asset trading software. AradChain Technologies offers a top-notch pre-built crypto trading platform with a customizable front-end and a deployable backend. Initiate your crypto trading venture efficiently using a white label cryptocurrency exchange script, bolstered with exceptional features, an appealing user interface, and robust security.
              CONNECT WITH OUR EXPERTS
              A Ready-to-Market White Label Crypto Exchange AradChain Technologies specializes in crafting market-ready white label crypto trading platforms for forward-thinking businesses aiming for success in the cryptocurrency market. White label crypto exchange development significantly reduces costs. The factors influencing the cost of white label crypto exchange solutions include:
              <ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
                <li>Type of exchange (Centralized, Decentralized, or Hybrid)</li>
                <li>Level of security features</li>
                <li>UI/UX design complexity</li>
                <li>Number of required features and functionalities</li>
                <li>API integrations</li>
                <li>Architectural complexity and development time</li>
                </ul>
                Moreover, the expertise, experience, and location of the white label cryptocurrency exchange development company also impact the cost. Contact AradChain Technologies's experts to tailor a future-proof digital asset exchange to your specific budget and timeline.
                VIEW LIVE DEMO REQUEST A FREE DEMO
                <p><h4 style={{ textDecoration: 'underline' }}>White Label Crypto Exchange Software:</h4></p>
<p>Our flagship white label cryptocurrency exchange script is equipped with a variety of leading features and functionalities, including:</p>

<p><h4 style={{ textDecoration: 'underline' }}>High Transaction Volume Capability:</h4></p>
<p>Our crypto white label exchange processes up to 100,000 transactions per second, ensuring world-class performance with high throughput.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Robust Trading Engine:</h4></p>
<p>Featuring a potent trading engine, our exchanges enable seamless execution of buy/sell orders with minimal latency, supporting various order types.</p>

<p><h4 style={{ textDecoration: 'underline' }}>KYC and AML Integration:</h4></p>
<p>Geographically-based KYC/AML processes prevent unauthorized users from accessing the platform, enhancing security and aiding large withdrawal requests.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Support for 500+ Cryptocurrencies & Fiat:</h4></p>
<p>Our white label exchange accommodates over 500 cryptocurrencies and supports fiat transactions, facilitating multi-currency trading on a single platform.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Automated Trading:</h4></p>
<p>Our dynamic bot trading module empowers users to capitalize on market opportunities round the clock, ensuring continuous trading and order book fulfillment.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Referral and Reward Programs:</h4></p>
<p>Our white label crypto trading platform features well-designed referral and reward programs, allowing users to earn rewards by bringing in new users.</p>

<p><h4 style={{ textDecoration: 'underline' }}>High Liquidity at All Times:</h4></p>
<p>With external liquidity options, our exchange ensures a robust order book, enabling seamless trade execution across various market conditions.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Staking Module:</h4></p>
<p>The staking feature lets users lock funds and earn additional incentives, enhancing liquidity and platform security.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Payment Gateway Integration:</h4></p>
<p>Our exchange supports multiple payment methods, facilitating instant transactions for a broader customer base.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Enterprise-Grade Multi-Cryptocurrency Wallet:</h4></p>
<p>Equipped with a secure multi-currency wallet, our exchange ensures safe storage of digital assets using elliptic curve and multi-signature technology.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Advanced Admin Console:</h4></p>
<p>Our robust admin dashboard provides comprehensive control over the platform and funds, ensuring effective management.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Advanced Chart Tools:</h4></p>
<p>Our white label bitcoin exchange offers user-friendly chart tools, enabling users to devise trading strategies with ease.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Security Features of White Label Crypto Currency Exchange Script:</h4></p>
<p>We prioritize institutional-grade security in our trading platforms, incorporating features such as:</p>

<p><h4 style={{ textDecoration: 'underline' }}>Token-Based HTTP Authentication:</h4></p>
<p>Token-based mechanisms like OAuth ensure secure user authentication through token-based HTTP authentication.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Data Encryption:</h4></p>
<p>Data encryption safeguards user credentials and sensitive data from unauthorized access.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Jail Login:</h4></p>
<p>The jail login feature temporarily blocks login attempts after multiple failed tries, enhancing security against unauthorized access.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Two-Factor Authentication (2FA):</h4></p>
<p>Our white label bitcoin exchange includes 2FA for added login security, minimizing unauthorized access risks.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Anti-Denial of Service (DoS) Protection:</h4></p>
<p>Anti-DoS mechanisms protect the platform from a surge of requests that could disrupt its functionality.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Anti-Distributed Denial of Service (DDoS) Protection:</h4></p>
<p>Anti-DDoS measures shield the platform from attacks by multiple connected devices aiming to disrupt services.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Cross-Site Request Forgery (CSRF) Security:</h4></p>
<p>Token-based security mechanisms prevent unwanted actions from authenticated users.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Server-Side Request Forgery (SSRF) Protection:</h4></p>
<p>SSRF protection guards against attacks from authorized internal applications.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Group 60160:</h4></p>

<p><h4 style={{ textDecoration: 'underline' }}>HTTP Parameter Pollution Protection:</h4></p>
<p>Protects the network against web attacks that manipulate HTTP requests to extract hidden data.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Accelerate the process of establishing a profitable revenue stream with our white label cryptocurrency exchange script:</h4></p>

<p><h4 style={{ textDecoration: 'underline' }}>Advantages of White Label Crypto Exchange Software Script:</h4></p>
<p>Leveraging our turnkey crypto exchange solutions from a reputable white label cryptocurrency exchange development company offers several benefits:</p>

<p><h4 style={{ textDecoration: 'underline' }}>Market-Ready Trading Software:</h4></p>
<p>A market-ready solution saves time and resources, enabling swift deployment of a fully functional cryptocurrency trading platform.</p>

<p><h4 style={{ textDecoration: 'underline' }}>100% Customizability:</h4></p>
<p>Our white label exchange is fully customizable, allowing you to tailor the platform to match your unique business requirements.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Feature-Rich and Budget-Friendly:</h4></p>
<p>The white label exchange comes with a range of essential features, making it an affordable solution compared to building a platform from scratch.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Quick-to-Market Solution:</h4></p>
<p>Our ready-to-deploy solution significantly reduces the time required to launch your crypto trading platform, giving you a competitive edge.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Scalable and Cost-Effective:</h4></p>
<p>Our white label crypto exchange software can scale with your business growth, ensuring cost-effectiveness as your user base expands.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Multi-Layered Security:</h4></p>
<p>We prioritize security, implementing multiple layers of protection to safeguard user data and platform integrity.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Modular and Resilient Architecture:</h4></p>
<p>Our platform features a modular architecture that allows for seamless expansion and integration of new features and modules.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Proven and Thoroughly Tested:</h4></p>
<p>Our solution has been rigorously tested to ensure its reliability, security, and performance.</p>

<p><h4 style={{ textDecoration: 'underline' }}>Adherence to High-Quality Standards:</h4></p>
<p>We uphold the highest quality standards in our white label crypto exchange solutions, ensuring a robust and efficient platform.</p>



<p>Build a Strong Brand Identity with a Cryptocurrency Exchange Clone Script</p>
<p>Embark on your cryptocurrency exchange development journey with a custom-built, secure, scalable, cost-effective, and feature-rich white label exchange software script tailored to your needs. AradChain Technologies provides top-tier white label crypto exchange software development services to help ambitious ventures effortlessly launch their high-functioning crypto trading platforms.</p>

<p>REQUEST A FREE DEMO</p>
<p>Our Highly Sought-After White Label Cryptocurrency Exchange Script Solutions Include:</p>

<ul style={{marginLeft:"3%",marginTop:"10px",marginBottom:"10px"}}>
  <li>Binance Clone Script</li>
  <li>Crypto.com Clone Script</li>
  <li>MDEX Clone Script</li>
  <li>Coinbase Clone Script</li>
  <li>Remitano Clone Script</li>
  <li>WazirX Clone Script</li>
  <li>Paxful Clone Script</li>
  <li>Bisq Clone Script</li>
  <li>KuCoin Clone Script</li>
  <li>Poloniex Clone Script</li>
  <li>Kraken Clone Script</li>
  <li>Luno Clone Script</li>
  <li>PancakeSwap Clone Script</li>
  <li>Bybit Clone Script</li>
</ul>

<p>Emulate the success of prominent crypto trading platforms by harnessing our top-notch white label crypto currency exchange script solutions.</p>

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
