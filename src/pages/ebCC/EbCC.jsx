import React from "react";
import style from "./ebCC.module.css";
import crypto1 from "../../assets/crypto1.png";
import crypto2 from "../../assets/crypto2.png";
import data from "../../database/data";
import Whyus from "../../components/whyUs/Whyus";
import AboutStats from "../../components/aboutStats/AboutStats";
import Team from "../../components/team/Team";
import { Link } from "react-router-dom";
import Footer1 from "../../components/footer1/Footer1";
import Needsolution from "../../components/needSolution/Needsolution";
import map from "../../assets/map-pattern-1.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card } from "@chakra-ui/react";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Blockchain-Powered Carbon Credit Platform Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Empower transparent, accessible, and standardized carbon markets.Carbon Credits Addressing Climate Change Impact.Amid growing concern over climate change, carbon credits are gaining popularity as tools to mitigate impact. These credits incentivize the fossil fuel industry to improve efficiency.A carbon credit is a tradeable permit allowing emission of one ton of carbon dioxide or equivalent greenhouse gases.However, the current carbon offset market is inefficient. Credits are predominantly sold in bulk to large corporations, hindering smaller groups or individuals from offsetting their impact.Blockchain Transforming Carbon Offsetting Challenges.Blockchain, a distributed ledger accessible to all network participants, offers transparency. This transparency can revolutionize carbon credit trading by aggregating small buyers and ensuring transparency.The blockchain-based carbon credit ecosystem is secure, efficient, and ideal for carbon credit markets. The immutable, cryptographically secure ledger ensures reliable issuance and tracking. Public blockchains facilitate small and medium-sized enterprises' access, reducing entry barriers.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            LAUNCH YOUR CARBON CREDITS PLATFORM

            </Heading>
            <Heading as='h2' size='xl' textAlign={'center'} mt={8}>
    AradChain Technologies’s Expertise: Blockchain-Based Carbon Trading Software
  </Heading>
  <Text textAlign={'center'} mt={5}>
    As blockchain streamlines carbon credit development and sales, businesses can seize opportunities in this emerging market.
  </Text>

  <Text as='h3' size='lg' textAlign={'center'}>
    With expertise in technology and IT management, AradChain Technologies guides you in blockchain-based carbon credit platform development. Our technology-agnostic approach, clear roadmap, and mission-driven solutions accelerate deployment, ensuring a competitive edge.
  </Text>

  <Text textAlign={'center'}>
    Leverage our services for successful carbon credit development.
  </Text>


  <Heading as='h2' size='xl' textAlign={'center'} mt={8}>
    Blockchain-Based Carbon Credit Ecosystem
  </Heading>

  <Text textAlign={'center'}>
    A comprehensive blockchain-based carbon trading software, encompassing key components for smooth carbon credit creation, distribution, and exchange.
  </Text>

  <Text textAlign={'center'}>
    <strong>Group 6025</strong><br />
    Carbon Credit Token<br />
    Blockchain represents carbon credits as digital tokens. These tokens, distributed to consumers (emitters/polluters), facilitate environmental balance.
  </Text>

  <Text textAlign={'center'}>
    <strong>Group 6027</strong><br />
    Secondary Market<br />
    A digital marketplace or carbon credit trading platform enables carbon credit buy/sell and trading. This exchange offers user-friendly features.
  </Text>

  <Text textAlign={'center'}>
    <strong>Group 6028</strong><br />
    Smart Contract<br />
    Responsible for token minting, burning, distribution, and facilitating buy/sell and trading on the carbon credit exchange.
  </Text>

  <Heading as='h2' size='xl' textAlign={'center'} mt={8}>
    LAUNCH YOUR CARBON CREDITS PLATFORM
  </Heading>

  <Heading as='h2' size='xl' textAlign={'center'} mt={8}>
    Why Choose Us for Blockchain Carbon Credit Platform Development
  </Heading>

  <Text textAlign={'center'}>
    Partner with AradChain Technologies for a team of technical experts with real-world success stories.
  </Text>

  <Text textAlign={'center'}>
    <strong>Group 6030</strong><br />
    Technical Expertise<br />
    Exclusive focus on Blockchain technology for optimal results.
  </Text>

  <Text textAlign={'center'}>
    <strong>Group 6029</strong><br />
    Experienced Team<br />
    A team of 500 experts aids your journey from ideation to execution.
  </Text>

  <Text textAlign={'center'}>
    <strong>Group 6031</strong><br />
    Rapid Development<br />
    Customized products aligned with your audience, ensuring swift deployment.
  </Text>

  <Text textAlign={'center'}>
    <strong>outcomes</strong><br />
    Tangible Outcomes<br />
    Evident impact, ensuring value from investments.
  </Text>

  <Text textAlign={'center'}>
    <strong>CONNECT ON WHATSAPP CONNECT ON TELEGRAM</strong>
  </Text>

  <Text textAlign={'center'}>
    Our Partners
  </Text>

  <Text textAlign={'center'}>
    Our Clients
  </Text>


  <Heading as='h2' size='xl' mt={8} textAlign={'center'}>
    Frequently Asked Questions
  </Heading>

  <Text textAlign={'center'} mt={5}>
    Enhance carbon trading efficacy and transparency
  </Text>

  <Text textAlign={'center'}>
    Efficiently track the carbon market
  </Text>

  <Text textAlign={'center'}>
    Streamline and expedite carbon trading
  </Text>

  <Text textAlign={'center'}>
    Facilitate peer-to-peer renewable energy trading
  </Text>

  <Text textAlign={'center'}>
    Eliminate double counting
  </Text>

  <Text textAlign={'center'}>
    Explore Our Blogs
  </Text>

  <Text textAlign={'center'}>
    White Label Crypto Wallet
  </Text>

  <Heading textAlign={'center'} mt={8}>
    Navigating White Label Crypto Wallet Development Costs
  </Heading>

  <Text textAlign={'center'} mt={4}>
    Table of Contents Introduction Unveiling White Label Crypto Wallets In-Depth Market Analysis Advantages of White Label Crypto Wallet Solutions Explore the Complete […]
  </Text>

  <Text textAlign={'center'}>
    READ MORE
  </Text>

  <Text textAlign={'center'}>
    White Label Digital Identity Wallet
  </Text>

  <Text textAlign={'center'}>
    Diving into White Label Digital Identity Wallets
  </Text>

  <Text textAlign={'center'}>
    Table of Contents: Introduction Digital Identity Solutions in Detail Key Business Advantages of White Label Digital Identity Wallets The Importance of Digital […]
  </Text>

  <Text textAlign={'center'}>
    READ MORE
  </Text>

  <Text textAlign={'center'}>
    mobile wallet app development
  </Text>

  <Text textAlign={'center'}>
    Enhancing User Experience with Mobile Wallet App Development
  </Text>

  <Text textAlign={'center'}>
    Table of Contents Introduction to Mobile Wallet Apps Current Market Trends - Mobile Crypto Wallet Apps Reasons for Businesses to Invest in […]
  </Text>

  <Heading as='h2' size='xl' mt={8} textAlign={'center'}>
    Our Blockchain Expertise
  </Heading>

  <Text textAlign={'center'}>
    We're here to support your business needs, providing technical assistance and responding to inquiries.
  </Text>

  <Text textAlign={'center'}>
    Feel free to reach out for a friendly conversation. No obligation
  </Text>

            
          </div>

        </div>

      </div>

      {/* Info Section */}
      {/* <div className={style.infoSection}>
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
      </div> */}

      {/* Our Team */}
      {/* <div className={style.ourTeamSection}>
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
      </div> */}
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
      <Box mt={20}>
        <Needsolution />
      </Box>

      {/* Footer Section */}
      <Footer1 />
    </div>
  );
};

export default About;