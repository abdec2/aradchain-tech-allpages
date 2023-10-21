import React from "react";
import style from "./cC.module.css";
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
import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card,Button,VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>CAREER</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
          <Box p={4}>
    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      Ready to Make a Difference?
    </Heading>

    <Heading as="h3" size="lg" letterSpacing={1} mt={4} textAlign="center">
      Empower yourself with expertise, tools, and creative freedom at AradChain Technologies Solutions
    </Heading>

    <VStack spacing={4} mt={6}>
    <Text mt={2} textAlign="center">
        <Button bg="blue.500" color="white" fontSize="lg">
          Apply Now
        </Button>
        </Text>
        </VStack>

    <Heading as="h3" size="lg" letterSpacing={1} mt={6} textAlign="center">
      Envision the Future
    </Heading>

    <Text mt={2} >
      To guide organizations towards their next breakthroughs, you must have the foresight to envision a brighter tomorrow. AradChain Technologies is here to equip you with all the necessary expertise to become an expert in foreseeing the future. This not only grants you the liberty to experiment and test user cases, but also provides actionable insights that sharpen your ability to anticipate what lies ahead.
    </Text>

    <Heading as="h3" size="lg" letterSpacing={1} mt={6} textAlign="center">
      Prepare for Impact
    </Heading>

    <Text mt={2} textAlign="center">
      Global organizations and their customers are relying on your efforts to shape a better digital landscape. If you're ready to craft intelligent strategies that shape the future, we offer the opportunities to turn those ambitions into reality.
    </Text>

    <Heading as="h3" size="lg" letterSpacing={1} mt={6} textAlign="center">
      Cryptocurrency Exchange Script
    </Heading>

    <Text mt={2} textAlign="center">
      Cryptocurrency Exchange Clone
    </Text>

    <Heading as="h3" size="lg" letterSpacing={1} mt={6} textAlign="center">
      Bring Your Ideas to Life
    </Heading>

    <Text mt={2} textAlign="center">
      Our culture of constant innovation and learning will empower you to exceed your own expectations with every task you undertake. Through our training initiatives, consistent guidance, and wealth of expertise, we'll help you broaden your horizons and think beyond the ordinary.
    </Text>

    <Heading as="h3" size="lg" letterSpacing={1} mt={6} textAlign="center">
      Current Job Openings
    </Heading>

    <VStack spacing={4} mt={6}>
       
    <Box p={4} border="1px solid #ccc" borderRadius="md">
        <Heading textAlign="center" as="h4" size="md">Pre Sales Consultant</Heading>
        <Text textAlign="center" mt={2}>Read more</Text>
        <Text mt={2} textAlign="center">
        <Button bg="blue.500" color="white" fontSize="lg">
          Apply Now
        </Button>
        </Text>
      </Box>


      <Box p={4} border="1px solid #ccc" borderRadius="md">
        <Heading textAlign="center" as="h4" size="md">Quality Analyst (Manual)</Heading>
        <Text mt={2} textAlign="center">Read more</Text>
        <Text mt={2} textAlign="center">
        <Button bg="blue.500" color="white" fontSize="lg">
          Apply Now
        </Button>
        </Text>
        </Box>
     

      <Box p={4} border="1px solid #ccc" borderRadius="md">
        <Heading as="h4" size="md" textAlign="center">Quality Analyst (Automation)</Heading>
        <Text mt={2} textAlign="center">Read more</Text>
        <Text mt={2} textAlign="center">
        <Button bg="blue.500" color="white" fontSize="lg">
          Apply Now
        </Button>
        </Text>
        </Box>

      <Box p={4} border="1px solid #ccc" borderRadius="md">
        <Heading as="h4" size="md" textAlign="center">Academic Technical Content Writer</Heading>
        <Text mt={2} textAlign="center">Read more</Text>
        <Text mt={2} textAlign="center">
        <Button bg="blue.500" color="white" fontSize="lg">
          Apply Now
        </Button>
        </Text>
      </Box>

      <Box p={4}>
    <Heading as="h3" size="lg" textAlign="center" letterSpacing={1} mt={6}>
      Decentralize the World
    </Heading>

    <Text mt={2} textAlign="center">
      Join Us
    </Text>

    <Text mt={2} textAlign="center">
      Harness your expertise in transformative technology by joining our team.
    </Text>
    <Text mt={2} textAlign="center">
    <Button bg="blue.500" color="white" fontSize="lg">
      SEARCH JOBS
    </Button>
    </Text>

    <Heading as="h3" textAlign="center" size="lg" letterSpacing={1} mt={6}>
      Stay Informed
    </Heading>

    <Text mt={2} textAlign="center">
      Stay updated on the latest crypto developments to stay ahead of the curve.
    </Text>
    <Text mt={2} textAlign="center">
    <Button bg="white" color="blue.500" fontSize="lg">
      CONTACT US
    </Button>
    </Text>

    <Heading as="h3" size="lg" textAlign="center"  letterSpacing={1} mt={6}>
      Newsletter
    </Heading>

    <Text mt={2} textAlign="center">
      Stay connected with our journey of success through our newsletter.
    </Text>
    <Text mt={2} textAlign="center">
    <Button bg="blue.500" color="white" fontSize="lg" textAlign="center">
      SUBSCRIBE
    </Button>
    </Text>
  </Box>
  </VStack>
  </Box>
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