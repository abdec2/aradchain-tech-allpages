import React from "react";
import style from "./acOBS.module.css";
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
import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card ,VStack} from "@chakra-ui/react";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Our Brand Story</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            We Are AradChain Technologies,Our Brand Narrative This Is Our Expression.Our brand goes beyond just a logo; it embodies the connection between people and our services.Our Logo as our Emblem,It signifies us. When used correctly, it's instantly recognizable and serves as our flag.
            </Text>
            <Box p={4}>
    <Heading as="h2" size="xl" letterSpacing={2} mt={10} mb={5} textAlign="center">
      We Are AradChain Technologies – Our Brand Story
    </Heading>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      Initial Inspiration
    </Heading>
    <Text mt={2} textAlign={'center'}>
      A new era.
      A new generation.
      New technologies.
      Fresh business models.
      A new perspective.
    </Text>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      Our Brand Identity
    </Heading>
    <Text mt={2} textAlign={'center'}>
      This chain of 'new' elements inspired us to infuse our fresh vision into our brand identity. Blockchain forms the DNA of the new AradChain Technologies, so we began with the foundational concept: everything for us is akin to a block. Thus, all our creative brainstorming centered around the term 'Block'.
    </Text>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      The Process
    </Heading>
    <Text mt={2} textAlign={'center'}>
      The new AradChain Technologies logo embodies transformation, progress, and a brighter future. To encapsulate the essence of blockchain, we played with the letter "t" in "AradChain Technologies," forming a chain of two blocks. These two blocks are presented in a simple yet elegant design that will remain impactful over time and instantly recognizable.
    </Text>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      Our Color Palette
    </Heading>
    <Text mt={2} textAlign={'center'}>
      Embracing a more vibrant language in our brand communications, AradChain Technologies Blue serves as our primary color, used only when the brand palette isn't applicable. We've chosen a vibrant sky blue to represent trust, and a deep blue to symbolize the bold, youthful personality of our brand.
    </Text>

    <VStack spacing={4} mt={6}>
      <Box bg="#002341" w="100%" h="40px" borderRadius="md" />
      <Box bg="#0f9bd8" w="100%" h="40px" borderRadius="md" />
      <Box bg="#ffffff" w="100%" h="40px" borderRadius="md" />
    </VStack>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      The Final Logo
    </Heading>
    <Text mt={2} textAlign={'center'}>
      Exclusion Zone
    </Text>
    <Text mt={2} textAlign={'center'}>
      The exclusion zone for both the logo and icon is equivalent to half the height of the icon (indicated as × in the diagram).
    </Text>

    <Text mt={2} textAlign={'center'}>
      Minimum Size
    </Text>
    <Text mt={2} textAlign={'center'}>
      Specifying a minimum size ensures that the logo's impact and legibility remain uncompromised in various applications.
    </Text>

    <Text mt={2} textAlign={'center'}>
      The AradChain Technologies logo should never be smaller than 184px in digital or 65mm in print.
    </Text>

    <Text mt={2} textAlign={'center'}>
      The AradChain Technologies icon should never be smaller than 52px in digital or 18mm in print.
    </Text>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      In Advertising
    </Heading>
    <Text mt={2} textAlign={'center'}>
      The visual identity ensures a consistent look across diverse advertising channels.
    </Text>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      Conceptual Design for Potential Brand Application
    </Heading>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      In Advertising
    </Heading>
    <Text mt={2} textAlign={'center'}>
      Decentralizing
    </Text>
    <Text mt={2} textAlign={'center'}>
      The Globe
    </Text>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      Join Us
    </Heading>
    <Text mt={2} textAlign={'center'}>
      Collaborate with us to harness your expertise in groundbreaking technology.
    </Text>

    <Text mt={2} textAlign={'center'}>
      SEARCH JOB OPENINGS
    </Text>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      Stay Informed
    </Heading>
    <Text mt={2} textAlign={'center'}>
      Stay updated with the latest developments in the realm of cryptocurrencies.
    </Text>

    <Text mt={2} textAlign={'center'}>
      CONTACT US
    </Text>

    <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
      Newsletter
    </Heading>
    <Text mt={2} textAlign={'center'}>
      Explore our journey of accomplishments through our newsletter subscription.
    </Text>
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