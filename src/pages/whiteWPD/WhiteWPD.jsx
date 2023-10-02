import React from "react";
import style from "./whiteWPD.module.css";
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
              <Heading>White Paper Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Tailored White Paper Crafting Solutions,A personalized white paper is an authoritative, persuasive, and all-encompassing formal dossier detailing a business venture, elucidating its quandary and the corresponding resolution. White papers assume a pivotal role in business operations, constructing authority within an industry, augmenting credibility, and displaying thought leadership. Enriched with data-driven insights, a white paper serves as an exceptional instrument to infiltrate the cryptocurrency market and seize the attention of potential investors.Creating a white paper necessitates exhaustive research, coupled with profound knowledge and an intricate comprehension of solution architecture and token economics. At AradChain Technologies, our technical white paper writers are well-versed in the domain, collaborating with our subject matter experts to craft an intricate, technically sound white paper imbued with substantiated statistical data that bolsters the document's authority. Beyond connt generation, our white paper development procedure encompasses white paper design services, guaranteeing a content-rich document that is visually enticing for your prospective investors.Assert your position as industry experts and erect a robust foundation for your cryptocurrency project via our purpose-oriented white paper creation services.
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

            <Heading as="h2" size="lg" textAlign="center" mt={5}>
  Our White Paper Formulation Process
</Heading>

<Text mt={5} textAlign="center">
  A white paper should encapsulate technical intricacies while remaining accessible to the general populace. Our white paper development agency fabricates white papers brimming with authoritative insights, equally comprehensible to lay investors.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Comprehend
  </Heading>
  Our adept white paper writer grasps the nitty-gritty of your project – encompassing the predicament addressed, your proposed solution, technical intricacies, and business strategy – to chart a roadmap for white paper conception.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Investigate
  </Heading>
  Tailored to your project, we conduct meticulous research to amass pertinent data, market statistics, and facts to reinforce and substantiate the information outlined in the white paper.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Content Construction
  </Heading>
  Armed with exhaustive research and complete information, we adhere to a design-driven methodology to compose succinct, lucid, and intelligible content. This content enlightens and educates potential investors on pivotal aspects of your project.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Design
  </Heading>
  Post-technical white paper drafting, we transition to white paper design. Our innovative designers strike a harmonious equilibrium between text and graphics while ensuring seamless integration of design elements – color scheme, typography, icons – congruent with your brand identity.
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