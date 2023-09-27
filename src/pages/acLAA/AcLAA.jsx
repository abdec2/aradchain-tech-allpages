import React from "react";
import style from "./acLAA.module.css";
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
              <Heading>LIFE AT AradChain Technologies</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            An Enriching, Dynamic, and Innovative Workplace AradChain Technologies thrives as an organization by the people, for the people. We firmly believe that our collective efforts can propel us to excellence in the realm of blockchain. Our selection process for team members is meticulous, and we provide them with compelling reasons to grow and remain with us. Our mission is to enrich lives and offer continuous growth opportunities on both intellectual (IQ) and emotional (EQ) levels.
             </Text>
             <Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Our Core Beliefs
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Our values illuminate our path in every transformation we undertake, both for our company and our clients.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={5} style={{ textAlign: 'center' }}>
  Transparency as the Foundation
</Heading>

<Text style={{ textAlign: 'center' }}>
  Transparency is the cornerstone of our approach, grounded in open and honest communication. We conduct ourselves with complete transparency to ensure the success of our clients.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={5} style={{ textAlign: 'center' }}>
  Passion Fuels Us
</Heading>

<Text style={{ textAlign: 'center' }}>
  At AradChain Technologies, our dedication to our clients and our organization is fueled by passion. Our teams are motivated by enthusiasm and commitment, delivering exceptional services with zeal.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={5} style={{ textAlign: 'center' }}>
  Empowering Progress
</Heading>

<Text style={{ textAlign: 'center' }}>
  AradChain Technologies thrives on the motto of delivering results. We foster end-to-end ownership, responsibility, and accountability, while embracing the right technologies to achieve our goals.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={5} style={{ textAlign: 'center' }}>
  Collaboration for Success
</Heading>

<Text style={{ textAlign: 'center' }}>
  Our experts from diverse fields collaborate seamlessly, sharing knowledge and working as a team to achieve a common goal, both for our clients and ourselves.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={5} style={{ textAlign: 'center' }}>
  Customer-Centric Approach
</Heading>

<Text style={{ textAlign: 'center' }}>
  Guided by a focus on our clients' success, we guide them on a journey toward becoming high-performance businesses, building lasting relationships through responsiveness and consistent value delivery.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={5} style={{ textAlign: 'center' }}>
  Upholding Integrity
</Heading>

<Text style={{ textAlign: 'center' }}>
  Our business processes are orchestrated with the utmost moral and intellectual integrity, upholding the highest standards of governance.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Our Essence
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Navigating the transition from digital thinking to digital being.
  Infused with an entrepreneurial and innovative spirit, we persistently work to translate visions into meaningful outcomes.
  Tools like design thinking empower us to identify problems, cognitive skills help uncover solutions, and strategically designed solutions guide us toward the future.
  At AradChain Technologies, we bring about profound, positive change with the freedom to conceive ideas and ingenious tools to manifest them.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Diverse Perspectives
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Highly motivated individuals committed to delivering impactful results.
  We believe that innovation catering to diverse audiences should stem from diverse minds. Hence, our team of over 150 driven individuals hails from varied backgrounds, bringing distinct interests, skills, and ideas to the table, and operating across five countries.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Technology that Drives Transformation
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Our technology-agnostic solutions are the driving force behind our clients' digital transformation journeys. Regardless of the industry, we harness the right technology to bring your business ideas to life.
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