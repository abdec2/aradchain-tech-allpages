import React from "react";
import style from "./mMAD.module.css";
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

import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card ,Button,Stack} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Metaverse Application Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Industry-Tailored Solutions the potential of the metaverse spans various use cases. We offer specialized enterprise-focused solutions to empower businesses to leverage the metaverse.Metaverse for Gaming Axie Infinity, a prominent metaverse game, boasts over 1 million daily active users.The gaming industry has witnessed a transformative shift with the integration of the metaverse. It has unlocked diverse earning opportunities for both business owners and players.At AradChain Technologies, we deliver top-notch metaverse NFT game development services to assist businesses in embracing the next wave of digital gaming. Whether you seek to create a move-to-earn (M2E) game, player-vs-player (PvP) experience, play-to-earn (P2E) game, or any other concept, our adept metaverse game developers facilitate the creation of a comprehensive metaverse environment.Seamlessly advance your NFT metaverse game development journey with our expertise.
            </Text>
            <Link to="https://t.me/aradchain" target="_blank">
<Text textAlign={'center'} mt={4}>
    <Button
      size={window.innerWidth <= 680 ? "xs" : "lg"} // Check the window width and change button size accordingly
      rightIcon={<MdCall />}
      colorScheme="telegram"
    >
      Connect on Telegram
    </Button>
    <Link to="https://wa.me/+447432284026" target="_blank">
      <Button
        ml={5}
        size={window.innerWidth <= 680 ? "xs" : "lg"} // Check the window width and change button size accordingly
        rightIcon={<MdCall />}
        colorScheme="whatsapp"
        _media={{'@media (max-width: 680px)': { // Apply styles only in mobile view
          marginTop: '2%',
          marginLeft: '-15px',
        }}}
      >
        Connect on Whatsapp
      </Button>
    </Link>
  </Text>
</Link>

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Metaverse for Fashion
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            In 2021, Gucci introduced The Gucci Garden Experience, selling virtual products, including a digital twin of a Gucci purse, fetching a higher price than its real-world counterpart.The Fashion industry stands as an early adopter of the metaverse, enabling fashion brands to expand their offerings and reach a global audience.The Fashion industry stands as an early adopter of the metaverse, enabling fashion brands to expand their offerings and reach a global audience.Elevate your metaverse venture with our support.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  Metaverse for Real Estate
</Heading>

<Text align={'center'} letterSpacing={1}>
  Decentraland, an Ethereum-based user-owned virtual world, saw real estate transactions worth $110 million in the past year.
  The metaverse holds immense potential for redefining the real estate market, having already initiated a path of digital transformation. Brands and individuals leverage the metaverse's power to invest in NFT virtual land, transcending geographical barriers.
  Our metaverse development company boasts real-world success stories like Decentraland. We offer meticulously tailored services for real estate metaverse development, including NFT land creation, exciting themes, and more.
  Launch your NFT real estate metaverse akin to Decentraland, or construct a customized version aligned with your business needs.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  Metaverse for Tourism
</Heading>

<Text align={'center'} letterSpacing={1}>
  Prominent companies like Disney are exploring their own metaverse iterations.
  Madrid introduced a free, 360-degree virtual tour in English and Spanish in early 2022, enabling prospective visitors to explore popular tourist destinations virtually. This initiative provided a preview of what awaits them in Madrid, enhancing their travel decisions.
  At AradChain Technologies, we enable you to embrace the "meta" concept. Whether spotlighting a city's premier tourist attractions or focusing on a single site, we craft a captivating virtual world that offers users a distinct and fully immersive travel experience.
  Embark on a virtual journey with us.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  Metaverse for Social Interaction
</Heading>

<Text align={'center'} letterSpacing={1}>
  Justin Bieber performed as an "Avatar" in an immersive virtual world. An Indian couple hosted their wedding reception in the metaverse, marking Asia's "first metaverse wedding reception." Samsung conducted a product launch event in the metaverse. Businesses across sectors, as well as individuals, are gravitating toward the metaverse for social interaction.
  If you envision an immersive metaverse experience for a business meeting, corporate launch, concert, or any social event, we possess the capability to transform your vision into reality.
</Text>


<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  Metaverse Elements
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong>How Our Metaverse App Development Journey Accelerates ?</strong>
</Text>
<Text align={'center'} letterSpacing={1}>

  <strong>Theme Selection: </strong>
   Our subject matter experts guide you in selecting the appropriate theme – be it Game, EduTech, Spiritual, and more – based on your business ideas.
</Text>
<Text align={'center'} letterSpacing={1}>

  <strong>Land NFT Creation: </strong>
   Every metaverse project requires land NFTs to host virtual buildings. We develop the necessary land NFTs or any other required NFTs for your metaverse ecosystem.
</Text>
<Text align={'center'} letterSpacing={1}>

  <strong>NFT Marketplace Establishment: </strong>
   Our metaverse engineers construct world-class NFT marketplace platforms, enabling seamless buying and selling of various NFTs.
</Text>
<Text align={'center'} letterSpacing={1}>

  <strong>Storyboard Creation: </strong>
   AradChain Technologies's creative minds design a comprehensive storyboard outlining user journeys and navigation across the platform.
</Text>
<Text align={'center'} letterSpacing={1}>

  <strong>Economic Model: </strong>
   Our professionals provide comprehensive assistance and consulting services to help you understand how revenue will be generated through the metaverse platform.
</Text>
<Text align={'center'} letterSpacing={1}>

  <strong>MVP Delivery: </strong>
   We deliver a minimum viable product (MVP) that undergoes continuous scaling and improvement based on user feedback and technological evolution.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  How Our Metaverse Developers Help You Seize Metaverse Opportunities?
</Heading>

<Text align={'center'} letterSpacing={1}>
  With over 15 years of technical expertise and a vast range of experience, we bring together over 500 skilled metaverse developers and designers to conceptualize, execute, and accelerate our clients' metaverse journeys.
  We develop sophisticated and visually immersive metaverse applications, incorporating blockchain attributes such as user sovereignty, full transparency, enhanced privacy, and automation. As a prominent blockchain metaverse development entity, we provide a bridge between technology and metaverse aspirations.
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