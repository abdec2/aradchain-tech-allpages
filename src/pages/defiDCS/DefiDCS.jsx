import React from "react";
import style from "./defiDCS.module.css";
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
              <h2>DeFi Consulting Service</h2>
            </div>
            <div>
              <p>
              Looking to venture into the DeFi market? Whether you're considering launching a decentralized crypto exchange or initiating staking activities, we facilitate your entry and participation in the dynamic world of DeFi.

CONNECT WITH OUR EXPERTS

DeFi Consulting: Harness the Potential of DeFi for Your Business
The DeFi market is poised to reach a staggering $232 billion by 2030's conclusion. If you're eager to tap into this growth but uncertain about where to begin, we're here to assist.

Our subject matter experts offer comprehensive DeFi consulting solutions, guiding you through all aspects of DeFi. Whether you seek technical insights into DeFi development or need advice on community building, our experts provide accurate information to inform your project decisions. Moreover, our DeFi consulting company delivers holistic development solutions to steer your DeFi journey.

Partner with us for a seamless entry into the DeFi market.

REQUEST A FREE DEMO

              </p>
              <p>
              Our DeFi Consulting Services
Our comprehensive consulting services cater to diverse use cases, ensuring your vision translates into a world-class product.

DeFi Staking
We provide extensive support for crafting staking strategies, whether you're establishing your infrastructure or leveraging ours.

Decentralized Assets
Exploring decentralized assets offers cutting-edge crypto investment opportunities. We're here to guide you through these boundless prospects.

Stablecoins
The potential of stablecoins is immense. We help you identify the best-suited stablecoin for your needs and develop a robust strategy to manage their challenges.

DeFi Protocols
Navigating the rapidly expanding DeFi protocols landscape can be daunting. We offer an overview of this sector and assist you in assessing its potential for your venture.

Liquidity Mining
Liquidity mining presents unique investment opportunities and risks. Our expertise helps you understand its investment thesis and formulate strategies to maximize its benefits.

Custody and Security
Safeguarding your crypto assets and wallet's private key is paramount. We aid in developing a tailored security and custody strategy.

Connect with our experts to discuss your specific business use case.

CONNECT WITH US ON WHATSAPP CONNECT WITH US ON TELEGRAM

Independent and Objective Insights into the DeFi Market
If you're unsure about launching a DeFi product due to skepticism about the market, rely on us for impartial advice and insights. We possess hands-on experience assisting organizations in analyzing the DeFi landscape to make informed business decisions. Our extensive domain knowledge and expertise position us as a trusted DeFi consulting firm.

Whether you're taking your first steps into decentralized finance or integrating DeFi into your existing operations, our consulting solutions illuminate every aspect of DeFi development, unlocking its true potential.

Why Opt for Us as Your DeFi Consulting Partner?
Teaming up with AradChain Technologies means access to a cadre of technical experts with real-world experience in delivering end-to-end consulting services.

Technical Excellence
Expert Team
Rapid Development
Comprehensive Support
Meaningful Outcomes

Ready to Implement DeFi Consulting in Your Business?

CONNECT WITH US ON WHATSAPP CONNECT WITH US ON TELEGRAM

Our Partners
Our Clients
Frequently Asked Questions

What Services Do DeFi Consultants Provide?
DeFi consultants offer a range of services to navigate the intricate and swiftly evolving realm of decentralized finance. These encompass:
Investment strategy formulation
Protocol selection
Risk assessment and management
Security and custody solutions
Technical guidance
Regulatory compliance
Market research and analysis

What Are the Costs of DeFi Consulting Services?
The costs of DeFi consulting services can vary based on the scope and complexity of your project. It's advisable to reach out to consultants for tailored pricing details.

Can DeFi Consulting Services Offer Customized Solutions?
Yes, DeFi consulting services can be tailored to your specific needs. Consultants typically work closely with clients to understand their goals and requirements, providing customized strategies and solutions.

What Support and Communication Can I Expect from DeFi Consultants?
DeFi consultants usually offer comprehensive support and open communication throughout the consulting engagement. They provide insights, answer queries, and guide you through the decision-making process.

How Can DeFi Consulting Services Navigate the Rapidly Evolving DeFi Landscape?
DeFi consulting services bring deep industry knowledge and expertise to help you navigate the dynamic DeFi landscape. Consultants can provide insights into market trends, risk assessment, protocol selection, and strategic planning to ensure successful engagement with DeFi opportunities.

Explore Our Blogs

Metaverse in the Manufacturing Industry: Role and Future Prospects
The term “Metaverse” needs no introduction, as it has already woven itself into the fabric of our lives. The unending surge in […]
READ MORE

Breathing Life into the Metaverse: How AI Empowers NPCs
Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies have brought a big change in […]
READ MORE

White Label Crypto Bank
How to Get Started with White Label Crypto Banking Platform?
When the opportunity knocks at the door, we all look for a quick and easy way to leverage it for a better […]
READ MORE

Our Blockchain Tech Expertise
We're here for a friendly chat to discuss your business needs, without any obligations.

Rely on us for technical support and effective responses to your inquiries!

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
