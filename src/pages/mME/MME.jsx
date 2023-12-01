import React from "react";
import style from "./mME.module.css";
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
import WhatsApp from './../../components/WhatsappWidget/WhatsApp';
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
              <Heading>Metaverse Events</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Crafting and Capitalizing on Your Metaverse With hands-on experience in building immersive metaverse platforms across various industries and events, we bring real-world expertise to your vision.<strong>REQUEST FREE DEMO</strong>About AradChain Technologies Fest AradChain Technologies Fest is an innovative virtual space event where organizations can host engaging virtual events, foster employee interaction, and showcase proofs of concept. It extends beyond specific occasions, offering lifelike experiences to all participants involved.AradChain Technologies has already pioneered the concept of enjoying festivals and events within the metaverse, setting a new standard for virtual celebrations.

            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Metaverse Events Expertise

            </Heading>

            <Text align={'center'} letterSpacing={1}>
            AradChain Technologies excels as a seasoned creator of metaverse events. Beyond business solutions, we orchestrate virtual festivals, provide remote healthcare, organize expos and exhibitions, and introduce meta-shops through our specialized skills.Dive into Immersive Possibilities.The metaverse is vast, brimming with diverse use cases. We can seamlessly integrate the metaverse into healthcare, fitness, education, manufacturing, industrial training, gaming, sales and marketing, as well as facilitate the organization of social and corporate metaverse events, among much more.
<strong>EXPLORE THE METAVERSE</strong>.Empowering Positive Change AradChain Technologies's technical prowess transforms virtual gatherings into imaginative worlds, where avatars gather in a festive atmosphere, interacting with fellow metaverse participants. Embark on your journey with us today!
A Closer Look at the Metaverse at AradChain Technologies, our proficient experts in blockchain and metaverse development possess the knowledge to seamlessly blend virtual and augmented reality. We create a captivating immersive experience within the 3D realm of the internet.
CONNECT NOW
 </Text>
            
            <Text align={'center'} letterSpacing={1}>
            The concept of the metaverse has been gaining traction online, each time bringing forth varying explanations. In simplified terms, the metaverse represents the internet's next evolution – an emerging 3D digital realm that leverages augmented reality, virtual reality, artificial intelligence, and other advanced internet technologies to replicate real-life experiences without the need for physical presence.Our Expertise in Blockchain Technology We're here for a friendly chat about your business needs, with no obligations.We are committed to assisting you by offering technical support. Feel free to reach out with inquiries or requests.
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
      <WhatsApp />


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