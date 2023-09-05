import React from "react";
import style from "./sSTO.module.css";
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
              <h2>STO</h2>
            </div>
            <div>
              <p>
              Security Token Development
Empowering the Future of Fundraising
Elevate your project funding to new heights with the revolutionary approach of security token offerings.

CONSULT OUR EXPERTS
AradChain Technologies is at the forefront of shaping the future of legal fundraising through strategic consulting and innovative security token development services. Your budding concept is transformed into a tailor-made solution that fosters market penetration and engagement with potential investors. Our technology-driven, mission-oriented approach guarantees meaningful business outcomes, nurturing your growth.

Diverse Services in STO Development
STO
Equity Tokens
Harness optimal fundraising opportunities with our design thinking-based equity token creation approach.
STO
Asset Tokens
Ride the wave of STO (Security Token Offering) market growth with asset tokenization, seizing relevant market openings.
STO
Debt Tokens
Leverage our peer-oriented, result-focused strategy to tokenize debt instruments and attract a broader investor base.
Asset Tokenization Varieties
STO
Real Estate
Nurture business growth by digitizing real estate assets, granting global and digital accessibility to potential investors.

th-art-min
Art
Tokenize artworks and scale your capabilities to align with your business strategies and needs.

th-venture-capital-min
Venture Capital Funds
Tokenize venture capital funds to unlock enhanced fundraising prospects.

th-exclusive-goods-min
Exclusive Goods
Enhance your tokens' value by backing them with collectible cars, coins, jewelry, and more.

th-illiquid-asset-min
Illiquid Assets
Convert illiquid assets into cash without compromising their value through tokenization.

              </p>
              <p>
              STO
Mining Repository
Step into the future of commodities by tokenizing assets like gold, silver, and renewable energy.

Comprehensive Security Token Offering Services
th-security-token-offering-min
Security Token Offering Development
Navigate your security token development journey with a coherent roadmap created by AradChain Technologies. We employ best practices and programs tailored to your business objectives, ensuring optimal business value extraction. Essential aspects such as SEC regulations and smart contract development are meticulously managed.

th-security-token-exchange-min
Security Token Exchange Platform Development
Our security token development process follows an end-to-end programmatic approach to construct a secure, SEC-compliant exchange. Equipped with modular architecture, a powerful trade engine, high liquidity, and smart contract integration, our exchange is the epitome of excellence. Our dedicated teams expedite deployments, aligning activities with your growth ambitions.

sto-marketing-min
STO Marketing
Stand out in a competitive landscape with our multichannel marketing approach. Backed by data-driven recommendations and a profound understanding of the competitive STO industry, we help you seize the best market opportunities. Effective communication and strategic marketing platforms capture investors' attention and influence their perceptions and behaviors.

th-tokenized-asset-min
Tokenized Asset Offering Development
Asset tokenization is revolutionizing the blockchain space, attracting trillions of dollars. Leverage our strategy-driven approach to establish a strong foundation for digital business transformation.

Key Features of Security Token Offerings
security token offering platform
Programmable
Equity

security token offering services
security token offering services

sto development company
Enhanced
Liquidity

security token development
Automated
SEC Compliance

successful security token offerings
Secure
Wallet

security token offering development
Global Capital
Investment

Security Token Platform Development
Greater Market
Efficiency

Security Token Development Services
No Intermediaries

STO Development Services
Customized
Blockchain

security token development company
Tailored
Smart Contracts

Benefits of Security Token Development
Automated Dividends
Profit Sharing Rights
Cash Flow
Voting Rights
Buyback Rights
Holdings in Another Fund
Frequently Asked Questions

How is your Security Token Offering Regulated?
Participation in STO involves AML and KYC checks, similar to opening a bank account or stock exchange account. Our due diligence checks adhere to Swiss law, FAFT, and EU AML regulations, ensuring the highest safety standards and regulatory compliance.
How long does it take to launch an STO?
What factors influence the cost of STO development?
Does STO development follow the same process as ICO?
How is STO development advantageous for businesses?
Insights from Our Blog
Asset Tokenization Disrupting the Financial Industry: Why Should Businesses Embrace it?
Explore how tokenizing assets, from real estate to commodities, is reshaping asset investment strategies.

How to Bring Liquidity to Security Tokens
Discover how ICOs and STOs are modernizing fundraising tools and paving the way for liquidity in the cryptocurrency world.

Security Token Exchange Development: Gaining Worldwide Acceptance
Learn how investors and property owners are embracing blockchain crowdfunding for effective fundraising.

Our Blockchain Tech Expertise
We're here for a friendly chat to discuss your business needs.

Feel free to reach out for technical support or inquiries!

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
