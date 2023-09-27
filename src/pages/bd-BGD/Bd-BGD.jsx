import React from "react";
import style from "./bd-BGD.module.css";
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
              <Heading>Blockchain Game Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Blockchain Game Development Firm Crafting highly immersive gaming environments for an engaging user experience.Pioneering Blockchain Game Development With more than a decade of experience, our team boasts innovative ideas, formidable skills, and a wealth of real-world expertise in delivering exceptional gaming experiences. We leverage the latest blockchain tools to create exhilarating games that have the potential to disrupt the market.Whether your goal is to launch a console game, a desktop game, or venture into mobile game development, harness our mission-driven blockchain game development services to achieve your objectives.Dominate the gaming industry with a formidable game designed by our seasoned professionals.
           
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Our Services in Cryptocurrency Game Development 
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            A single concept is all it takes to fashion a new virtual realm. Our video game development company merges cutting-edge tools with comprehensive services to transform your idea into a reality.
Blockchain Game Consultation Our team of specialists provides consulting services in blockchain game development, facilitating a smooth transition for newcomers to the world of blockchain gaming.
Unity 3D Game Development Capitalizing on the potential of Unity, we create extraordinary games that offer deeply immersive 3D experiences, as 60% of AR/VR content and 50% of mobile games are powered by Unity.
Unreal Engine 5 Games Our blockchain game developers breathe life into incredibly immersive and realistic interactive experiences by constructing expansive worlds with greater freedom and flexibility.
2D/3D Game Development Backed by years of experience and expertise, our proficient blockchain game designers deliver 2D/3D games featuring exceptional gameplay, art design, and graphics.
Metaverse Game Development We craft a diverse range of games for the expansive metaverse world, encompassing themes such as play-to-earn, move-to-earn, player-vs-player, and more.
Game Maintenance Services Our comprehensive game maintenance and upgrade services ensure uninterrupted, error-free gameplay for the titles we develop.
Explore the Real-World and Virtual World Connection with Web3 Game Development Our track record encompasses the creation of immersive digital experiences across various industries. Our designers and developers collaborate to construct digital worlds that hold greater meaning than reality itself.
From simple card games to complex combat games with weaponry and assets, or digital twin cities where players can perform tasks and monetize them, we bring every concept to life.
The Finest Games Crafted by Premier Game Developers The games listed below are just the tip of the iceberg. We possess the expertise to build any game, be it for the web, mobile, or consoles.
Metaverse in Real Estate Connect with our experts to discuss your game concept.
            </Text>
            <Text align={'center'} letterSpacing={1} mt={5}>Explore on WhatsApp Explore on Telegram Technologies Utilized by Our Cryptocurrency Game Development Company</Text>
            
            <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Blender</Text></CardBody></Card>
              <Card><CardBody><Text>After Effects</Text></CardBody></Card>
              <Card><CardBody><Text>Substance Painter</Text></CardBody></Card>
              <Card><CardBody><Text></Text>Unity 3D</CardBody></Card>
              <Card><CardBody><Text>Unreal Engine 5</Text></CardBody></Card>
            </SimpleGrid>

            <Text align={'center'} letterSpacing={1} mt={5}>Why Choose Us as Your Gaming Software Development Company Actions speak louder than words! Here's what sets us apart as a trusted name in blockchain game development.Technical Proficiency Expert Team Swift Development Comprehensive Support Meaningful Outcomes</Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Frequently Asked Questions
</Heading>

<Text mt={8} align={'center'} letterSpacing={1}>
  How does blockchain technology enhance gaming experiences?
  Blockchain-based gaming offers benefits like true ownership of in-game assets, interoperability, transparent and secure transactions, and play-to-earn opportunities.
</Text>

<Text mt={8} align={'center'} letterSpacing={1}>
  What are the advantages of integrating blockchain into game development?
</Text>

<Text mt={8} align={'center'} letterSpacing={1}>
  Which blockchain platforms are commonly used for game development?
</Text>

<Text mt={8} align={'center'} letterSpacing={1}>
  How can blockchain games ensure fairness and prevent cheating?
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  A Glimpse of Our Blog Posts
</Heading>

<Text mt={8} align={'center'} letterSpacing={1}>
  Carbon Credit Platform Development
</Text>

<Text mt={8} align={'center'} letterSpacing={1}>
  Blockchain in the Beauty Industry
</Text>

<Text mt={8} align={'center'} letterSpacing={1}>
  Custom AI Blockchain Development
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Blockchain Technology Expertise
</Heading>

<Text mt={8} align={'center'} letterSpacing={1}>
  We're available for a friendly chat to discuss your business needs, with no obligations.
</Text>

<Text mt={8} align={'center'} letterSpacing={1}>
  Our dedicated team is eager to assist you by providing technical support, and we welcome your inquiries and requests.
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
       phoneNumber="+447432284026"
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