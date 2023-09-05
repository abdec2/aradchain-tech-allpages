import React from "react";
import style from "./exchange-marketMakingServices.module.css";
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
              <h2>Crypto Market Making Software</h2>
            </div>
            <div>
              <p>
              Effective Crypto Market Making Solutions
Enhance the performance of your centralized and decentralized exchanges with an advanced crypto market maker bot. This bot excels in providing liquidity, maintaining a consistent bid-ask spread, and ensuring order book efficiency.
Elevate Your Crypto Exchange with a Premium Market Making Solution
The primary purpose of a cryptocurrency market making bot is to bolster the liquidity of traded digital assets by managing bid-ask spreads effectively. It also plays a role in stabilizing the volatility of the crypto market. Deploying a well-designed crypto market maker strategy can lead to remarkable success for your exchange, as traders can confidently engage in trading activities. This, in turn, attracts a larger user base to your platform.

AradChain Technologies stands out as a trailblazing crypto market maker company, offering an innovative approach to market making services that elevate trading experiences by enhancing the speed and efficiency of your exchange. Our team consists of technology experts and financial veterans working collaboratively to find novel ways of minimizing slippage risks and maximizing traders' ROI. We make pragmatic efforts to design, develop, test, and deploy tailor-made crypto market making software that meets your specific needs.

Our goal is to establish sustainable markets for your crypto exchanges!

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

              </p>
              <p>
              Cutting-edge Technology
Our Specialty
AradChain Technologies develops custom enterprise-level algorithms and error-free scripts that consistently provide competitive bid-ask spreads and maintain robust order books. Our unparalleled expertise in market making as a service has earned us a reputable position as a leading liquidity provider on the global stage. We offer reliable crypto market making services with the vision of fostering fairer and more efficient crypto markets.

Empowering Your Crypto Exchange
Our Unique Advantage
We empower cryptocurrency exchanges by implementing an effective crypto market making strategy that works seamlessly on both centralized and decentralized protocols. Besides enhancing liquidity and trading efficiency, and mitigating counterparty default risks, our market making crypto exchange software provides real-time market data and aids in informed decision-making. Our groundbreaking market making strategy crypto software is equipped with highly scalable APIs capable of streaming orders from various cryptocurrency exchanges and liquidity providers.

SCHEDULE A FREE DEMO

Unleash the Untapped Potential of Our Crypto Market Maker for Landmark Success in Your Crypto Exchange
AradChain Technologies offers unparalleled technology and consulting solutions for liquidity provisioning and building trading volume through an easy-to-integrate functional API.

Cryptocurrency Market Making for
Centralized Exchanges
We empower centralized exchanges with cutting-edge trading tools that enable automatic generation of bid and ask limit orders.

Market Making Services For
Decentralized Exchanges
We strive to provide adequate liquidity to liquidity pools in your decentralized exchange, facilitating seamless execution of buy and sell orders.

We are committed to helping your crypto exchange achieve long-term success. To achieve this, we leverage our technical expertise and industry knowledge to develop a crypto market making software with future-ready features.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Distinctive Features of Our Crypto Market Maker Software
Here are some of the business benefits you can enjoy with our crypto market making software:

Relevant Bid-Ask Orders on a New Platform
Our crypto market making bot fetches orders from popular third-party exchanges and populates the order books of your new digital asset exchange with relevant orders, ensuring organic liquidity.

Real-time Adaptability to Changing Market Conditions
Our market-making bots allow you to adjust your trading strategy according to fluctuating market conditions and expand your list of liquidity providers easily through a configurable API.

Automated Cryptocurrency Trading
Implement any out-of-the-box or custom crypto market making strategy on your centralized or decentralized cryptocurrency exchange with our exceptional bot.

Continuous 24/7 Trading
With a simple command, our market making crypto bot enables complex trading strategies to run 24/7, providing continuous opportunities in the digital asset markets.

Transparent Market Making
Bid farewell to opaque market making services with our adaptable crypto market maker, which empowers you to have full control over your market-making activities.

Order Book Aggregation
Our APIs allow crypto exchanges to merge bid and ask orders on their platform with those on third-party trading venues and liquidity providers, ensuring investors access the best prices.

Low Latency Market Making Technology
Our top-notch market making software facilitates high-frequency trades, contributing to the development of robust markets.

Real-time Data Access
Monitor and assess the performance of your crypto market making strategy using our crypto market maker bot, which effectively records data.

Effective Risk Management
Our market maker crypto exchange equips you to effortlessly and efficiently manage risks through meticulously designed risk management features and algorithms.

Why Choose Us for Cryptocurrency Market Making Software?
Our growth, both in numbers and knowledge, has been rapid. Count on us for your crypto market making services.

Total Trading Volume
$300 Billion
Experts Behind the Products
500+
Exchange Integrations
100+
Delivered Projects
50+
Liquidity Provision
24/7
TALK TO OUR EXPERTS

Our Partners
Our Clients

              </p>
              <p>Frequently Asked Questions

1What is Cryptocurrency Market Making?
Cryptocurrency market making involves providing liquidity for digital assets on both decentralized and centralized exchanges. Its goal is to increase market activity by offering convenient entry and exit points for buyers and sellers.
2How does Crypto Market Making Work?
3Which Trading Strategies Can I Execute with Crypto Market Making Bot?
4How much does it cost to set up a crypto market making bot?
5How long does it take to build a crypto market making bot?
6Who provides the best Crypto Market Making Services?

A Glance at Our Blog

Empowering NPCs with AI in the Metaverse
The 21st century has witnessed remarkable innovations in blockchain, metaverse, and artificial intelligence. These technologies have brought a big change in […]
READ MORE

Breathing Life into the Metaverse: How AI Empowers NPCs
Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies have brought a big change in […]
READ MORE
White Label Crypto Bank
How to Get Started with White Label Crypto Banking Platform?
When the opportunity knocks at the door, we all look for a quick and easy way to leverage it for a better […]
READ MORE

How is Metaverse Casino Development Changing the Future of Gambling?
The Casino- a game of luck that lifted some to great success while leaving others in disappointment as known by many. It […]
READ MORE

Our Expertise in Blockchain Technology

We're here for a friendly chat about your business needs, without any commitment.
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
