import React from "react";
import style from "./mMCC.module.css";
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

import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card ,Button,Stack} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Metaverse Consulting Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Seamlessly enter the Metaverse and unlock new dimensions for your business with our strategic Metaverse consulting and development solutions. Our experienced Metaverse consultants provide expert guidance tailored to help you harness the immense growth potential of this transformative realm. As the blockchain consulting market is projected to reach $39.7 billion by 2025, according to a report by MarketsandMarkets, AradChain Technologies stands ready to assist you in navigating this dynamic landscape. Our comprehensive Metaverse offerings include strategic consulting services that provide profound insights to transform businesses across diverse industries. We facilitate smooth entry into the Metaverse world with our proficient integration services, ensuring that businesses fully capitalize on the emerging technology. Additionally, our skilled Metaverse consultants can develop high-caliber Metaverse applications, explore opportunities in the Metaverse gaming sector, construct highly functional Metaverse marketplaces, and empower enterprises with effective Metaverse solutions, positioning you for success in this new era. Connect with us on WhatsApp or Telegram to embark on your Metaverse journey, stay ahead of the competition, and revolutionize your business processes in the Metaverse.
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
              <strong>DID YOU KNOW!</strong>
            </Heading>
            <Text align={'center'}>
              A report by McKinsey & Company states that the Metaverse has the potential to generate up to $5 trillion, a potential companies cannot afford to overlook.
            </Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Benefits of Metaverse Consulting Services</strong>
</Heading>

<Text align={'center'} mt={5}>
  <strong>Personalized User Experiences: </strong>
  Metaverse delivers hyper-personalized user experiences, enhancing customer satisfaction and loyalty.
</Text>

<Text align={'center'} mt={5}>
  <strong>Enhanced User Engagement: </strong>
  Businesses harness Metaverse for improved services, user engagement, and connections.
</Text>

<Text align={'center'} mt={5}>
  <strong>Seamless Training and Skills: </strong>
  Metaverse facilitates seamless training and skill delivery for onboarding employees.
</Text>

<Text align={'center'} mt={5}>
  <strong>Immersive Experiences: </strong>
  Metaverse creates highly immersive experiences, captivating users and creating appealing environments.
</Text>

<Text align={'center'} mt={5}>
  <strong>Digital Twin Creation: </strong>
  Metaverse enables the creation of digital twins for simulation and deeper analysis.
</Text>

<Text align={'center'} mt={5}>
  <strong>Global Accessibility: </strong>
  Metaverse's global accessibility allows users worldwide to easily access the platform.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Our Metaverse Consulting and Development Process</strong>
</Heading>

<Text align={'center'} mt={5}>
  <strong>Metaverse Project Proposal: </strong>
  We begin by dissecting the problem statement, prioritizing components to discuss project feasibility.
</Text>

<Text align={'center'} mt={5}>
  <strong>Discovery Phase: </strong>
  Understanding your goals, brainstorming sessions shape a perfect plan to realize your objectives.
</Text>

<Text align={'center'} mt={5}>
  <strong>Requirements Gathering:</strong>
  We collect project requirements, conduct market analysis, and develop a roadmap to guide development.
</Text>

<Text align={'center'} mt={5}>
  <strong>Solution and Strategy Design: </strong>
  Crafting solutions and strategies aligned with project requirements paves the way for development.
</Text>

<Text align={'center'} mt={5}>
  <strong>Maintenance and Support: </strong>
  Post-launch, our team ensures smooth operations, providing necessary support and addressing glitches.
</Text>

<Text align={'center'} mt={5}>
  <strong>Deployment Phase: </strong>
  Post QA approval, the Metaverse project is launched, focusing on client satisfaction and a successful deployment.
</Text>

<Text align={'center'} mt={5}>
  <strong>Testing and Quality Analysis: </strong>
  Our dedicated QA team conducts thorough testing and quality analysis post-development.
</Text>

<Text align={'center'} mt={5}>
  <strong>Development Phase: </strong>
  Core technical development, based on approved designs and strategies, shapes the Metaverse project for deployment.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Why Choose AradChain Technologies as Your Metaverse Consulting Company?</strong>
</Heading>

<Text align={'center'} mt={5}>
  AradChain Technologies, a premier Metaverse consulting company, caters to diverse business needs, transforming the delivery of products and services through Metaverse implementation.
</Text>

<Text align={'center'} mt={5}>
  <strong>Explore the key benefits of selecting us as your Metaverse development consulting partner:</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>Experienced Metaverse Consultants</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>Strategic Metaverse Consulting Services</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>In-Depth Metaverse Knowledge</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>Efficient Solutions for Optimal Outcomes</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Frequently Asked Questions</strong>
</Heading>

<Text align={'center'} mt={5}>
  <strong>1. What is Metaverse Consulting?</strong>
  </Text>
  <Text align={'center'} mt={5}>
  Metaverse consulting offers professional guidance to businesses, organizations, and individuals interested in exploring the Metaverse's opportunities and integrating it into their operations. The process involves analyzing project requirements to devise a strategic implementation plan.
</Text>

<Text align={'center'} mt={5}>
  <strong>2. What Role Does a Metaverse Consultant Play?</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>3. What are the Latest Trends in the Metaverse?</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>4. Do You Provide Metaverse Consulting and Development Services Across Industries?</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>5. What is the Expected Timeline for Metaverse Development?</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Blogs at a Glance</strong>
</Heading>

<Text align={'center'} mt={5}>
  <strong>Metaverse in Manufacturing: Role and Future Prospects: </strong>
  The Metaverse has seamlessly woven itself into our lives. The amalgamation of blockchain, metaverse, and AI has dramatically revolutionized industries.
</Text>

<Text align={'center'} mt={5}>
  <strong>AI Empowering NPCs: Breathing Life into the Metaverse </strong>
  The 21st century's innovative trio – blockchain, metaverse, and AI – have ushered in transformative changes across industries. Explore the shift.
</Text>

<Text align={'center'} mt={5}>
  <strong>White Label Crypto Bank: </strong>
  How to Get Started with a White Label Crypto Banking Platform?
  Opportunities knock, and we seek swift leverage. The dynamic crypto industry beckons, offering a quick and efficient white label solution.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Our Blockchain Tech Expertise</strong>
</Heading>

<Text align={'center'} mt={5}>
  We're here to discuss your business requirements in a friendly chat, with no obligations.
</Text>

<Text align={'center'} mt={5}>
  Count on us for technical support and to address your inquiries effectively!
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