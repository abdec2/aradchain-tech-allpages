import React from "react";
import style from "./bBCC.module.css";
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
              <Heading>Blockchain Consulting Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Blockchain Consulting Services
Unlock the Potential of Blockchain Technology with Expert Guidance
Discover the immense possibilities of blockchain technology and implement it effectively with the assistance of our skilled blockchain consultants.<strong>TALK TO OUR EXPERTS
</strong>.<br></br><strong>DID YOU KNOW! </strong>
  According to a report by MarketsandMarkets, the blockchain consulting market is projected to reach $39.7 billion by 2025, experiencing a compound annual growth rate of about 82.0% from 2020 to 2025.
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
            Experienced Blockchain Consultants at Your Service
            </Heading>

            <Text align={'center'} letterSpacing={1} mt={5}>
            AradChain Technologies, recognized as a leading blockchain consulting company, empowers businesses with futuristic blockchain-based solutions. We play a crucial role in harnessing the full potential of blockchain technology, fostering growth and development.Blockchain, with its inherent features of trust, transparency, and security, can revolutionize businesses across various industries. It has the power to turn business goals into success stories.As a prominent blockchain consulting firm, we boast a team of exceptional blockchain consultants. They conduct thorough research, development, and testing of blockchain ecosystems to propose innovative ideas for integrating blockchain architecture into businesses.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Comprehensive Blockchain Consulting Services
            </Heading>
            <Text align={'center'} letterSpacing={1} mt={5}>
            Our blockchain consulting and development services offer a holistic approach to integrating blockchain technology for business benefits. As a premier blockchain consulting company, we provide expert advice and training, enabling businesses to choose the best blockchain applications for their needs. Our proficient blockchain consultants analyze your business goals and craft effective strategies to integrate blockchain architecture, customized to your objectives. We prioritize your business goals, ensuring the swift creation of proof of concept (PoC) to validate the practical capabilities of blockchain-based applications. Additionally, we ensure regulatory compliance for all blockchain applications and conduct thorough security assessments, guaranteeing seamless integration into various businesses.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Enterprise Blockchain Consulting
            </Heading>
             
            <Text align={'center'} letterSpacing={1} mt={5}>
            AradChain Technologies offers comprehensive enterprise blockchain consulting services, providing businesses with in-depth knowledge about the advantages of blockchain in their operations. Our expertise extends to custom blockchain application development, including smart contracts and DeFi solutions, enabling businesses to fully leverage blockchain technology. Additionally, we excel in seamlessly integrating blockchain technology with existing systems, enhancing efficiency and security. The global blockchain consulting market has seen substantial growth, especially in Europe, North America, and Asia-Pacific, driven by the increasing demand for these services.
            </Text>



<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Key Benefits of Blockchain Development Consulting</strong>
</Heading>

<Text align={'center'}>
  Discover the remarkable advantages your business can gain from our expert blockchain consultants.
</Text>

<Text align={'center'} mt={6}>
  <strong>Exploring Blockchain Technology</strong>
</Text>

<Text align={'center'}>
  Our experienced consultants provide deeper insights into blockchain technology, exploring its potential use cases to unlock benefits for your business.
</Text>

<Text align={'center'} mt={6}>
  <strong>Cost Efficiency</strong>
</Text>

<Text align={'center'}>
  Blockchain's removal of intermediaries and identification of operational inefficiencies for replacement with blockchain-based solutions lead to cost reduction.
</Text>

<Text align={'center'} mt={6}>
  <strong>Streamlined Processes</strong>
</Text>

<Text align={'center'}>
  Blockchain-based solutions streamline business processes, resulting in faster and more efficient transactions, enhancing overall operations.
</Text>

<Text align={'center'} mt={6}>
  <strong>Competitive Edge</strong>
</Text>

<Text align={'center'}>
  Leveraging blockchain technology offers a competitive edge by improving transparency, efficiency, and security, setting your business apart.
</Text>

<Text align={'center'} mt={6}>
  <strong>Enhanced Security</strong>
</Text>

<Text align={'center'}>
  Blockchain's decentralized ledger ensures heightened security, recording transactions in a safe, transparent, and secure manner.
</Text>

<Text align={'center'} mt={6}>
  <strong>Improved Data Privacy</strong>
</Text>

<Text align={'center'}>
  Blockchain facilitates secure and private data sharing, enhancing confidentiality and privacy while handling sensitive information.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Discover the AradChain Technologies Blockchain Consulting Process</strong>
</Heading>

<Text align={'center'} mt={6}>
  Get an insight into our meticulous blockchain consulting and development process for a comprehensive understanding.
</Text>

<Text align={'center'} mt={6}>
  <strong>Blockchain Project Proposal: </strong>
  Our services begin with identifying project problems, breaking them down into components, and assessing their feasibility, prioritizing components accordingly.
</Text>

<Text align={'center'} mt={6}>
  <strong>Discovery Phase: </strong>
  We delve into your goals through in-depth discussions, followed by brainstorming sessions to create a detailed plan to achieve your objectives.
</Text>

<Text align={'center'}>
  <strong>Requirements Gathering: </strong>
  We collect all project requirements and conduct thorough market, trend, and competitor analyses, shaping the roadmap for seamless development.
</Text>

<Text align={'center'} mt={6}>
  <strong>Solution and Strategy Design: </strong>
  We design tailored solutions and strategies based on your project's specific needs, ensuring effective implementation and achievement of goals.
</Text>

<Text align={'center'} mt={6}>
  <strong>Maintenance and Support: </strong>
  After launch, our team provides ongoing maintenance and support, ensuring smooth operations without interruptions, bugs, or glitches.
</Text>

<Text align={'center'} mt={6}>
  <strong>Deployment Phase: </strong>
  Once approved by the QA team, your project is ready for launch. Our experts ensure a seamless launch, concluding the deployment phase.
</Text>

<Text align={'center'} mt={6}>
  <strong>Beta Testing and Quality Analysis: </strong>
  Post-development, our QA team conducts beta testing and quality analysis to ensure the final product functions smoothly and flawlessly.
</Text>

<Text align={'center'} mt={6}>
  <strong>Development Phase: </strong>
  In this stage, we execute core technical development based on approved designs and strategies, preparing the project for deployment.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Why Choose AradChain Technologies for Blockchain Consulting and Development?</strong>
</Heading>

<Text align={'center'} mt={6}>
  AradChain Technologies stands as a trusted, reputable blockchain consulting company, catering to diverse business needs for effective blockchain technology implementation.
</Text>

<Text align={'center'} mt={6}>
  <strong>Experienced Blockchain Consultants</strong>
</Text>

<Text align={'center'} mt={6}>
  <strong>Strategic Blockchain Consulting Services</strong>
</Text>

<Text align={'center'} mt={4}>
  <strong>Advanced Security</strong>
</Text>

<Text align={'center'} mt={4}>
  <strong>Efficient Solutions</strong>
</Text>

<Text align={'center'} mt={4}>
  <strong>Delivering Results</strong>
</Text>

<Text align={'center'}mt={4}>
  Ready to Implement Blockchain Technology in Your Business?
</Text>

<Text size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  <strong>Blockchain consulting involves professional guidance provided to businesses, organizations, or individuals seeking assistance in implementing and integrating blockchain technology. The process typically includes analyzing project needs, selecting the appropriate blockchain, and formulating a strategic plan for seamless implementation.</strong>
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