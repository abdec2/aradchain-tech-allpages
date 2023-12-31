import React from "react";
import style from "./aAU.module.css";
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
import WhatsApp from '../../components/WhatsappWidget/WhatsApp';
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
              <Heading>About US</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Pioneering Innovation for Navigating Digital Transformation.Our Expertise with a decade-long track record, AradChain Technologies has been at the forefront of assisting businesses in embracing emerging technologies to proactively adapt to change. Through meticulous research, design thinking methodologies, and unparalleled solutions in strategy, consulting, technology, and operations, we chart an inventive course to guide global enterprises from traditional technology landscapes to blockchain-powered ecosystems. Our mission revolves around seizing opportunities from disruptions to drive transformative outcomes in the realm of decentralized digital evolution.We possess real-world proficiency in bridging the gap between blockchain technology and business processes throughout the entire blockchain journey—for our clients.Our Innovation Approach.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Research
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Our meticulous research processes and design thinking-driven methodologies ensure access to trusted insights, guidance, and solutions necessary for securing a crucial competitive edge, enhancing operational efficiency, mitigating risks, achieving tangible results, and attaining business triumph.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Strategy
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Crafted through profound industry acumen and analytics, fortified by the enrichment of human insights, our strategies empower businesses to act decisively and swiftly, enabling them to flourish both in the present and the emerging future.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Consulting
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  AradChain Technologies's capacity to spot and capitalize on opportunities thrives on intelligent innovation architecture—formed by a multidisciplinary team possessing industry expertise that aids our clients in piloting and assimilating new technologies to revitalize their enterprises for enduring success.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Digital
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  We shepherd our clients' evolution from envisioning digital to embodying digital by harnessing cutting-edge digital technologies to metamorphose core operations, customer experiences, and business models.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Technology
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  AradChain Technologies propels digital transformation through meticulously tailored services that redefine your application portfolio, facilitating the embrace of a novel realm of information technology. Our industry insights, coupled with innovative technologies, fuel your business growth.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Operations
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  In order to thrive in today's fiercely competitive market, swift adaptation to evolving customer and market dynamics is essential. We empower our clients to revolutionize their operations through technology integration, enabling them to see more, achieve more, and be more.
</Text>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Our Client</Text></CardBody></Card>
              <Card><CardBody><Text>Financial Sector</Text></CardBody></Card>
              <Card><CardBody><Text>Product Development and Research</Text></CardBody></Card>
              <Card><CardBody><Text>Health care Industry</Text></CardBody></Card>
              <Card><CardBody><Text>Information Technology</Text></CardBody></Card>
              <Card><CardBody><Text>About Us</Text></CardBody></Card>
              <Card><CardBody><Text>Supply Chain Management</Text></CardBody></Card>
              <Card><CardBody><Text>Marketing and Communications</Text></CardBody></Card>
              <Card><CardBody><Text>Legal and Compliance</Text></CardBody></Card>
              <Card><CardBody><Text>Human Resources</Text></CardBody></Card>
              <Card><CardBody><Text>Sales Domain</Text></CardBody></Card>
              <Card><CardBody><Text>Customer Service & Support</Text></CardBody></Card>
              <Card><CardBody><Text>Real Estate Ventures</Text></CardBody></Card>
              <Card><CardBody><Text>Our Core Beliefs</Text></CardBody></Card>
              <Card><CardBody><Text>Transparency</Text></CardBody></Card> 
</SimpleGrid>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Our Core Values
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Our operations are deeply rooted in the principles of open and candid communication, ensuring the prosperity of our clients through transparency.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Passion
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  At AradChain Technologies, passion permeates every facet of our work—for our clients and our organization alike. Our teams are motivated by a genuine enthusiasm and unwavering commitment to deliver unparalleled services to our clients.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Empowerment
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  AradChain Technologies is fueled by a determination to yield results. We foster end-to-end ownership, accountability, and responsibility, and we harness appropriate technologies to ensure tasks are efficiently accomplished.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Collaboration
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Our cross-functional experts share knowledge and collaborate as a cohesive unit to achieve shared objectives—for our clients and for ourselves.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Customer-Centric Approach
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  We guide our clients on their journey towards becoming high-performance entities, forging enduring relationships by being responsive and consistently delivering substantial value.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Integrity
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  We uphold the highest standards of governance and steer business processes with unwavering moral and intellectual integrity.
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