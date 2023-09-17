import React from "react";
import style from "./deFiDLAB.module.css";
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
              <Heading>DeFi Lending And Borrowing Platform Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Business-Focused DeFi Lending Platform Development Solutions In 2020, the DeFi market surged, and by April 2021, the DeFi market's size, assessed by the total locked value, exceeded USD 61 billion. Within this impressive value, DeFi lending and borrowing played a pivotal role.Around the world, startups and corporations are seizing the chance to tap into the billion-dollar DeFi market by launching their own DeFi lending and borrowing software. If you're a startup or an established enterprise aiming to ride the next DeFi lending wave, AradChain Technologies Solutions is your guiding partner.We lay out a coherent roadmap to construct a DeFi lending platform fortified with pioneering features. Our fusion of blockchain, finance, and IT expertise empowers us to proficiently deliver high-performance lending platforms aligned with your business objectives.Connect with our subject matter experts to expedite your DeFi lending platform development journey.
            </Text>
            <Text align={'center'} letterSpacing={1} marginTop={3}>
              <strong>DeFi Wallet:</strong>
              Our secure DeFi wallet integration empowers borrowers and lenders to deposit crypto assets seamlessly for borrowing and lending. The wallet supports various tokens and stablecoins.
            </Text>
            
            <Text align={'center'} letterSpacing={1} marginTop={3}>
              <strong>Smart Contract:</strong>
              Complete decentralization is achieved through smart contracts. These automated digital intermediaries manage fund flow, transactions, and calculations on the platform.
            </Text>
            <Text align={'center'} letterSpacing={1} marginTop={3}>
              <strong>Liquidity Pool:</strong>
              Funds provided by lenders constitute the liquidity pool, ensuring ample borrowing funds are available on the platform.
            </Text>
            <Text align={'center'} letterSpacing={1} marginTop={3}>
              <strong>User Dashboard: </strong>
              Intuitive user dashboards feature self-explanatory controls, facilitating efficient account management for both borrowers and lenders.
            </Text>
            <Text align={'center'} letterSpacing={1} marginTop={3}><strong>Risk Management: </strong>
            A meticulously designed risk management system shields lenders from losses if a borrowing account's value exceeds 100% of borrowing capacity due to collateral or asset volatility.
            </Text>
            <Text align={'center'} letterSpacing={1} marginTop={3}><strong>Institutional-Grade Security:</strong>
            The platform integrates market-leading security elements, ensuring top-tier safety for borrowers' and lenders' funds.
            </Text>
            <Heading align={'center'} marginTop={5} marginBottom={5} size={'lg'}>Why Opt for AradChain Technologies's DeFi Borrowing Software Development</Heading>
            <Text align={'center'} letterSpacing={1} marginTop={3}><strong>Institutional-Grade Security:</strong>
            The platform integrates market-leading security elements, ensuring top-tier safety for borrowers' and lenders' funds.
            </Text>
            <Text align={'center'} letterSpacing={1} marginTop={3}>
              <strong>Technical Excellence:</strong>
              Our domain is Blockchain technologies, and we excel in it.
            </Text>
            <Text align={'center'} letterSpacing={1} marginTop={3}>
              <strong>Expert Team:</strong>
              With 500 experts, we refine your offerings, suggest optimal tech strategies, and assist in community setup.
            </Text>

<Text align={'center'} letterSpacing={1} marginTop={3}>
<strong>Agile Development:</strong>
Customized products tailored to your audience, with a well-structured roadmap ensuring smooth and swift development.
</Text>

<Text align={'center'} letterSpacing={1} marginTop={3}>
<strong>Comprehensive Support:</strong>
Our commitment extends past launch, providing extensive post-delivery services for your sustained growth.
</Text>

<Text align={'center'} letterSpacing={1} marginTop={3}>
<strong>Meaningful Outcomes:</strong>
We guarantee tangible impact, ensuring you see the value of your investment.
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Frequently Asked Questions
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>How does DeFi lending and borrowing differ from traditional lending and borrowing?</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  In traditional lending and borrowing, intermediaries oversee platform activities. In DeFi lending platforms, third-party involvement is eliminated.
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Who holds control over decentralized borrowing and lending platforms?</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Can I replicate a renowned DeFi lending platform?</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>What are the costs associated with building a DeFi lending platform?</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Explore More in Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Safeguarding DeFi Profits Guide to Private Key Security</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Navigating DeFi Safely: 9 Ways to Protecting Your Private Keys and Securing Your Financial Future
  While the cryptocurrency, blockchain, and DeFi developments present exciting opportunities, they also highlight the paramount importance of safeguarding private keys to ensure [...]
  READ MORE
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Future of DeFi ZKP-based Apps</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Zero Knowledge Proof-Based Applications Are the Future of DeFi
  Decentralized Finance development (DeFi) has disrupted the financial sector, offering a trustless and transparent alternative to traditional financial services. However, the DeFi landscape [...]
  READ MORE
</Text>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Popular Use Cases of DeFi</strong>
</Text>
<Text align={'center'} letterSpacing={1}>
  Top 12 Use Cases of DeFi
  Decentralized Finance development (DeFi) has taken the financial world by storm, revolutionizing traditional financial services and offering a plethora of innovative use [...]
  READ MORE
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Proficiency in Blockchain Technology
</Heading>

<Text align={'center'} letterSpacing={1}>
  Feel free to engage us in a friendly chat to discuss your business needs, without any obligation.
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