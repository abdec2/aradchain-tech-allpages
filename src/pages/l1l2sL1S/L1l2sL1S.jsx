import React from "react";
import style from "./l1l2sL1S.module.css";
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
              <h2>Layer 1 Blockchain Solutions for Businesses</h2>
            </div>
            <div>
              <p>
              Enable your entry and engagement in the blockchain market with a secure blockchain network.

Consult Our Experts

Leverage AradChain Technologies’s Proficiency to Develop Your Custom Blockchain
With 2.8 percent of the global population using blockchain and the projected worth of the blockchain market being $1,432 billion by 2030, this is a billion-dollar opportunity.

As a leading layer 1 blockchain company, AradChain Technologies can help you seize this opportunity by creating your own network based on Layer 1 Blockchain. Whether you intend to fork an existing blockchain or initiate layer 1 blockchain development from scratch, our experienced blockchain engineers will transform your blockchain vision into a transformative reality.

Maximize the value of your blockchain investment through our expertise in custom blockchain app development.

              </p>
              <p>
              Consult Our Experts
Custom Blockchain Development Services Tailored to Your Objectives
The present business landscape is undergoing a revolutionary era. Forward-thinking enterprises, entrepreneurs, and innovators are adopting layer 1 blockchain development strategies to revolutionize industries like finance and healthcare.

This is your moment to join visionary leaders who offer enterprise-level layer 1 blockchain app development services. Shape the world's dynamics by creating your own blockchain network. Harness our technical acumen, domain expertise, and extensive experience to seamlessly navigate and accelerate Layer 1 Blockchain projects.

We specialize in Layer 1 Blockchain solutions, realized through the following methods:

Forking an existing blockchain
Building a custom blockchain from scratch
Engage with our subject matter experts to explore how we can support your business goals through custom blockchain app development.
Connect on WhatsApp Connect on Telegram

              </p>
              <p>Our Services: Forging New Paths with Layer 1 Blockchain Projects
As a premier layer 1 blockchain company, we offer a range of services to empower you in building a tailored blockchain platform aligned with your business objectives. Our team has honed layer 1 blockchain development skills that are invaluable to your enterprise. You can also rely on us as the foremost custom blockchain development platform.

Fork Ethereum (ETH) Blockchain
Ethereum, the second-largest blockchain after Bitcoin, can be forked by our blockchain engineers to create a new blockchain for your business.

Fork Binance Smart Chain (BNB) Blockchain
Binance Smart Chain's global traction can be harnessed through forking, splitting it into a separate blockchain tailored to your requirements.

Fork Solana (SOL) Blockchain
For token and NFT creation, Solana has risen in popularity. Our expertise extends to forking the Solana blockchain to help you build your own.

Fork Cardano (ADA) Blockchain
Another DeFi-focused blockchain, Cardano, can be hard forked based on your needs, enabling the launch of your customized blockchain.

Fork Polkadot (DOT) Blockchain
Known for its transactional scalability, Polkadot spreads transactions across parallel blockchains. We can fork it to establish a new blockchain for your enterprise.

Fork Terra (LUNA) Blockchain
For a new blockchain aligned with your business use case, our services include hard forking the Terra blockchain.

Fork Avalanche (AVAX) Blockchain
Avalanche, an open-source platform for decentralized applications, can be forked to create a scalable blockchain for your venture.

Fork Algorand (ALGO) Blockchain
Characterized by energy efficiency, Algorand can be hard forked to establish a similar blockchain tailored to your needs.

Fork TRON (TRX) Blockchain
Should you aspire to build a blockchain similar to TRON, our blockchain engineers can help bring your vision to life through forking.

Ready to commence custom blockchain app development tailored to your needs?
Consult Our Experts
Why Opt for AradChain Technologies to Develop Your Blockchain
We are the right team in the right place to deliver the right layer 1 blockchain solutions. Trust us for exceptional custom blockchain development services.

Technical Prowess
We exclusively focus on blockchain technologies, doing one thing exceptionally well.

Expert Team
With a team of 500+ experts, we refine your offerings, suggest optimal tech approaches, and facilitate community setup and campaigns.

Rapid Development
Our approach ensures smooth and accelerated development and deployment, delivering customized products for your target audience.

Complete Support
Beyond product launch, our extensive post-delivery services enable you to concentrate on your growth.

Meaningful Outcomes
We create tangible impact, ensuring your investments yield substantial value.

We are your specialists in custom blockchain app development.
Connect on WhatsApp Connect on Telegram

Our Partners
Our Clients
Frequently Asked Questions

What's required to create my own blockchain?
To build your own blockchain, you need a business idea. Once you have your requirements defined, rely on our technical expertise, extensive experience, and domain knowledge to bring your concept to life.

Can you fork the Ethereum blockchain for me?

What's the cost of creating a blockchain?

Can I approach you with an existing blockchain for improvement?

Why should I choose you for layer 1 blockchain solutions?

Exploring Our Blogs

Custom AI Blockchain Development
Blockchain & AI: Use Cases and Barriers
The convergence of Blockchain and AI is a game-changer for various industries. Learn about the top use cases and barriers in this dynamic partnership.

Emerging Blockchain Use Cases in Real Estate
Discover how blockchain is transforming the real estate industry, addressing challenges while providing transparency and efficiency.

Blockchain Development for the Beauty Industry
Can blockchain revolutionize the beauty industry? Explore the potential and impact of blockchain in skincare, cosmetics, and more.

Discover Our Blockchain Tech Expertise

We're here to discuss your business needs in a friendly chat, obligation-free.

We're dedicated to assisting you through technical support, addressing inquiries, and fulfilling requests.
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
