import React from "react";
import style from "./w3WCC.module.css";
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
              <Heading>Web 3 Consulting Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Web 3 Advisory Company Leverage the Expertise of Our Premier Web 3 Advisors to Propel Your Business Ahead in Today's Competitive Landscape.
<br/><strong>DID YOU KNOW! </strong> Bankless Times' report indicates that the global web 3 market was valued at $3.2 billion in 2021, with the current market cap soaring to $27.5 billion.

            </Text>
            <Text align={'center'} mt={5}>Web 3 opens a realm of opportunities across industries. Enter AradChain Technologies, a leading web 3 advisory firm, offering guidance to businesses in efficiently exploring and harnessing opportunities for growth.</Text>
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
  <strong>Web 3 Advisory Services for Your Business</strong>
</Heading>

<Text align={'center'} mt={5}>
  Our web 3 advisory services extract the best from emerging technology, fostering business benefits.
</Text>

<Text align={'center'} mt={5}>
  <strong>Crafting Web 3 Strategy and Roadmap: </strong>
  As a trusted web 3 advisory firm, we unleash the true potential of web 3. We assist businesses in creating strategies and roadmaps for a seamless transition into the web 3 domain.
</Text>

<Text align={'center'} mt={5}>
  <strong>Web 2 to Web 3 Migration: </strong>
  Our web 3 advisory and consultation services facilitate effortless migration from web 2 to web 3, ensuring a smooth transition without interruptions.
</Text>

<Text align={'center'} mt={5}>
  <strong>Integrating Web 3 Solutions: </strong>
  Engage our expert web 3 consultants to explore how integrating web 3 technology can unlock new avenues, preparing businesses for the future.
</Text>

<Text align={'center'}mt={5}>
  <strong>Web 3 Game Consultation: </strong>
  Utilize our team's domain knowledge and expertise in web 3 game development to harness the right web 3 technologies for your gaming projects.
</Text>

<Text align={'center'} mt={5}>
  <strong>Developing Web 3 Business Apps: </strong>
  Our web 3 advisory services empower businesses to develop result-oriented applications, expanding their market reach and boosting profitability.
</Text>

<Text align={'center'} mt={5}>
  <strong>Web 3 Compliance Solutions: </strong>
  AradChain Technologies, a premium web 3 advisory firm, offers compliance services, enabling businesses to navigate the web 3 space and develop superior solutions.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Benefits of Web 3 Advisory</strong>
</Heading>

<Text align={'center'} mt={5}>
  Discover the advantages of our web 3 advisory services.
</Text>

<Text align={'center'} mt={5}>
  <strong>Streamlined Operations: </strong>
  Web 3 streamlines business transactions and automates processes, enhancing operational efficiency.
</Text>

<Text align={'center'} mt={5}>
  <strong>Reduced Dependency: </strong>
  Web 3's blockchain foundation eliminates third-party dependency, saving time, effort, and money.
</Text>

<Text align={'center'} mt={5}>
  <strong>Effective Data Management: </strong>
  Web 3 enhances data management, facilitating efficient sharing and collaboration across borders.
</Text>

<Text align={'center'} mt={5}>
  <strong>Enhanced Security: </strong>
  Web 3's decentralization ensures secure transactions, reducing the risk of hacks and cyber attacks.
</Text>

<Text align={'center'}mt={5}>
  <strong>Transparency and Trust: </strong>
  Web 3's integration enhances transparency and trust through blockchain technology's inherent features.
</Text>

<Text align={'center'} mt={5}>
  <strong>Interoperability: </strong>
  Web 3 enables seamless product and system interoperability across platforms.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Our Web 3 Advisory Process</strong>
</Heading>

<Text align={'center'} mt={5}>
  Explore our comprehensive Web 3 advisory and development process.
</Text>

<Text align={'center'} mt={5}>
  <strong>Writing Web 3 Project Proposal: </strong>
  We initiate our services by understanding problem statements and prioritizing project components for feasibility.
</Text>

<Text align={'center'} mt={5}>
  <strong>Discovery Phase: </strong>
  In this phase, we delve into your goals, conduct brainstorming sessions, and formulate a plan for achieving objectives.
</Text>

<Text align={'center'} mt={5}>
  <strong>Requirements Gathering: </strong>
  Gathering project requirements, conducting market analysis, and creating a roadmap pave the way for the development process.
</Text>

<Text align={'center'} mt={5}>
  <strong>Solution and Strategy Design: </strong>
  Based on project requirements, we craft solutions and strategize designs to achieve goals efficiently.
</Text>

<Text align={'center'} mt={5}>
  <strong>Maintenance and Support: </strong>
  Post-launch, we offer support and maintenance, ensuring smooth operations and addressing any glitches.
</Text>

<Text align={'center'} mt={5}>
  <strong>Deployment Phase: </strong>
  After approval by our QA team, the web project is launched, prioritizing client satisfaction and concluding the deployment phase.
</Text>

<Text align={'center'} mt={5}>
  <strong>Testing and Quality Analysis: </strong>
  Thorough testing and quality analysis are conducted post-development by our dedicated QA team.
</Text>

<Text align={'center'} mt={5}>
  <strong>Development Phase: </strong>
  Based on approved designs and strategies, core technical development ensures the project is ready for deployment.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Why Choose AradChain Technologies as Your Web 3 Advisory Firm?</strong>
</Heading>

<Text align={'center'} mt={5}>
  AradChain Technologies, a premium web 3 advisory firm, caters to diverse business needs for effective web 3 technology implementation.
</Text>

<Text align={'center'} mt={5}>
  <strong>Expert Web 3 Consultants</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>Strategic Web 3 Advisory Services</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>Effective Solutions for Efficiency</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong>Delivering Valuable Results</strong>
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Frequently Asked Questions</strong>
</Heading>

<Text align={'center'} mt={5}>
  <strong> What is Web 3 Consulting? </strong>
   Web 3 consulting refers to a professional service that guides businesses, organizations, and individuals in implementing and integrating web 3 into their operations. It involves analyzing project requirements and developing a strategic plan for seamless implementation.
</Text>

<Text align={'center'} mt={5}>
  <strong> What Role Does a Web 3 Consultant Play?</strong>
</Text>

<Text align={'center'}mt={5}>
  <strong>What Transformations Does Web 3 Bring to Industries?</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong> Why is Web 3 Gaining Traction?</strong>
</Text>

<Text align={'center'} mt={5}>
  <strong> Do You Offer Web 3 Consulting for Various Industries?</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Blogs at a Glance</strong>
</Heading>

<Text align={'center'} mt={5}>
  <strong>Metaverse in Manufacturing: Role and Future Prospects: </strong>
  The concept of the Metaverse is pervasive, shaping our lives. The rise of blockchain, metaverse, and AI has revolutionized industries, including finance.
</Text>

<Text align={'center'} mt={5}>
  <strong>AI Empowering NPCs: Breathing Life into the Metaverse  </strong>
  The 21st century's innovative trio – blockchain, metaverse, and AI – have ushered in transformative changes across industries. Explore the shift.
</Text>

<Text align={'center'}mt={5}>
  <strong>White Label Crypto Bank: </strong>
  How to Launch a White Label Crypto Banking Platform?
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