import React from "react";
import style from "./wallet-defiWallet.module.css";
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
              <h2>Defi Wallet Development Company</h2>
            </div>
            <div>
              <p>
              Outstanding Attributes of Our Decentralized Crypto Wallet
The world of decentralized finance has captured the attention of crypto enthusiasts aiming to augment their earnings in the crypto realm. It has set forth a new paradigm in finance, characterized by security, immutability, and independence from third-party interference. This sector holds immense promise for the future, poised to bring about a complete revolution in the financial landscape.

AradChain Technologies's Defi wallets offer comprehensive safeguarding for crypto assets and coins, fortified by advanced security features such as 2-factor authentication. These wallets can be tailored to align with specific business needs. We engage in detailed consultations to grasp your project vision, outlining a roadmap that delves into the intricacies of project development. Our Defi wallet development experts stand ready to guide you through the development journey, elucidating the intricate workings of decentralized finance. With nearly a decade of experience and mastery, we are well-equipped to deliver comprehensive decentralized solutions to global businesses. Consult our proficient team to embark on developing top-notch Defi crypto wallets and steer your business towards growth.

              </p>
              <p>
              Advantages of Defi Crypto Wallet App Development
Our Defi wallet app development solutions encompass a multitude of benefits, boosting long-term income prospects.

Dedicated Administrative Control
Our platform bestows dedicated admin control, effectively managing the platform's operations.

User-Friendly Interface
A seamless and straightforward user interface is imperative for facilitating uncomplicated transactions. Our platform features a user-friendly UI/UX design for effortless interactions.

Conversion Rates
Users can effortlessly monitor balances, engage in Bitcoin and fiat currency transactions, and review their transaction history directly on the platform.

Unique Selling Proposition
Our Defi crypto wallet team offers a unique marketing proposition that grants you a competitive edge over peers.

Cross-Platform Compatibility
Our experts craft wallets compatible with Android, iOS, and other platforms as required. We ensure seamless application performance across all platforms.

Security
Our wallets are fortified with top-tier security mechanisms, including two-factor authentication and multi-signature functionality. Routine security updates ensure wallet invulnerability.
CONNECT ON WHATSAPP CONNECT ON TELEGRAM
Exploring Our Extensive DeFi Wallet Development Services
Our Defi wallet development services encompass an array of platforms offering diverse service qualities that amplify revenue potential and expand the reach of the cryptocurrency and decentralized finance sectors.

Decentralized Exchange Development
We deliver Defi-based exchange solutions that leverage the decentralized financial phenomenon, facilitating transaction processes within the Defi platform without central authority oversight.

Defi Staking Development
Our Defi staking development entails creating an earning module wherein users can stake their chosen tokens in a preferred pool for a set duration, earning passive income in return.

Defi Yield Farming Development
We embark on Defi yield farming development, constructing yield farming platforms that enable crypto enthusiasts to earn native tokens by participating in the liquidity minting process.

Defi Lending/Borrowing Platform Development
Our skilled team can design smart-contract-based lending and borrowing platforms that reshape the banking landscape, promoting crypto lending and borrowing sans third-party intervention.

Defi dApp Development
DeFi DApps, developed using decentralized finance technology rather than central authority, empower users to partake in the next-generation fintech revolution.

Defi Wallet Development
Defi wallets play a pivotal role within the Defi ecosystem, holding cryptocurrencies and facilitating transactions without third-party involvement. Our experts construct tamper-proof wallets that function without background verification or identity disclosure.

Cost of DeFi Wallet Development
"Ready to embark on the world of digital currency? Obtain your customized crypto wallet at a fraction of the cost today!

REQUEST A FREE DEMO TALK TO OUR EXPERTS
Launching a Customizable White Label DeFi Wallet Clone Script
We develop scalable, customizable White-Label DeFi wallet clone script solutions supplemented with services like staking, yield farming, swapping, and tokenization.

UniSwap Clone Script
Our repertoire includes fully functional replicas of Uniswap, enriched with features such as automated liquidity provisioning and superior swapping capabilities. We possess expertise in developing Uniswap V3-based solutions.

PancakeSwap Clone Script
We design and create PancakeSwap clone scripts equipped with automated market making, analytical tools, transaction history, seamless integration with Initial Farm Offerings, and rapid-speed audits per second.

JustSwap Clone Script
Our adept team crafts ready-made and customizable JustSwap clone scripts, offering scalability for platform swapping and pooling needs.

SushiSwap Clone Script
We deliver ready-made SushiSwap clone scripts complete with stage-ready integrations, contribution support for relational databases, hazard fixes, and weekly accessed menu bars that enhance portfolio performance.

BakerySwap Clone Script
Our BakerySwap clone scripts are designed to encompass Ethereum 2.0 compliance, integrating NFT marketplaces and launchpads while facilitating numerous audits per second.

Yearn Finance Clone Script
Developed by our Defi crypto wallet experts, the Yearn Finance Clone Script boasts high-yield dApps, liquidity provision, decentralization, robust smart contracts, and enhanced APY.

1Inch Exchange Clone Script
AradChain Technologies constructs 1 Inch Exchange Clone Scripts that amalgamate several DEXs within a single platform, offering token integration, heightened liquidity, optimal exchange algorithms, and enhanced efficiency.

Compound Finance Clone Script
We offer ETH Blockchain Compound Finance Clone Scripts, completely decentralized assets monitored through collateral and executed via algorithms.

Polkaswap Clone Script
Our PolkaSwap clone script incorporates top-tier trading features like rapid speed settlements, optimal gas fees, flexible governance, and more.

              </p>
              <p>TALK TO OUR EXPERTS
Why We Stand Out as the Premier Defi Wallet Development Company
AradChain Technologies is a respected Defi wallet development company, known for delivering professional services. Our track record showcases the creation of secure, scalable, and robust wallets. With almost a decade of experience in the blockchain arena, our experts remain aligned with advanced development trends, seamlessly integrating them into web and mobile wallet development. Crypto enthusiasts can enter the Defi ecosystem with confidence, supported by our adept blockchain team.

Core Attributes of Our Defi Crypto Wallet

In-Chat Transactions
Users can effortlessly send, receive, or request payments using the in-chat feature of the wallet, streamlining chat-based financial interactions.

QR Code Scanner
The wallet is equipped with an automatic scanning feature, simplifying currency exchange and preventing copying errors.

Auto-Denial of Duplicate Payments
The platform detects and rejects duplicate payments, effectively minimizing chargeback incidents.
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
