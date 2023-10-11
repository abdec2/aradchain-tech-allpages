import React from "react";
import style from "./ebRE.module.css";
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
              <Heading>Blockchain Solutions for Real Estate</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Empowering Real Estate with Blockchain Solutions.Our expertise in Blockchain development for real estate is unmatched. We specialize in creating solutions that smartly and accurately simplify data capture, analysis, and tracing of real estate properties. Our digital real estate Blockchain solutions eliminate data silos while ensuring transparency at reduced costs. Leveraging our Blockchain know-how, we help businesses and individuals overcome major industry challenges and achieve their objectives.The Need for Blockchain Development in Real Estate.Addressing Real Estate Challenges with Blockchain.The real estate landscape grapples with paper-based land titles vulnerable to loss, fraud, and mismanagement. Property transfers and permits entail complex, time-consuming legal procedures, often locking land in unproductive use.Managing large construction projects has grown increasingly challenging due to fragmented sub-contracting, unclear procurement practices, and a lack of supply chain transparency.Property development firms struggle to secure finances for new projects. Relying on single loan sources results in high interest rates, while crowd financing and loan syndication prove difficult to administer.
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
            Blockchain in Real Estate
           </Heading>

            <Text align={'center'} letterSpacing={1} mt={6}>
            A Game-Changer Our team simplifies legacy systems, offering a secure, immutable digital registry complete with document authentication and transaction transparency.A trusted asset title and documentation process bolsters investor confidence, facilitates market transactions, grants access to finance opportunities, and propels economic and social community development.Blockchain applications in real estate enable secure data sharing, streamline rental collections and payments to property owners, and provide thorough due diligence across portfolios. This enhances operational efficiency, reduces overhead costs, and generates comprehensive data for informed decision-making.With our Blockchain Applications in Real Estate, Enterprises Can Secure, enhance, and transparently manage land registries.Revolutionize loan and mortgage securitization.Optimize property search processes.Unlock alternative financing options for property development.Accelerate real estate investment management with digital assets.From Blockchain real estate tokenization to smart contracts, our solutions revolutionize traditional real estate processes. We pave the way for a streamlined, trusted future of real estate with efficient Blockchain solutions.

            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Explore Blockchain Use Cases in Healthcare
</Heading>

<Text align={'center'} letterSpacing={1}  mt={6}>
    As a trusted blockchain healthcare solutions development company, AradChain Technologies has served clients from the healthcare industry, fulfilling specific project requirements.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
    <strong>Clinical Trials & Research</strong><br/>
    Facilitate secure, transparent data sharing and collaboration in clinical trials and research to accelerate scientific discovery.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
    <strong>Healthcare Data Sharing</strong><br/>
    Enable secure patient health information exchange across providers and third parties like insurers, enhancing care coordination and industry efficiency.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
    <strong>Health Insurance and Claims Management</strong><br/>
    Streamline claims processing by eliminating errors and improving payment speed and accuracy through blockchain development for healthcare.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
    <strong>Identity Management</strong><br/>
    Boost security with a secure medical credential verification system, reducing fraud and ensuring professional and patient information is verified.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
    <strong>Drug Traceability</strong><br/>
    Conveniently trace prescription medications from manufacturing to the end customer, minimizing counterfeiting risks.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
    <strong>Supply Chain Management</strong><br/>
    Enhance supply chain transparency and efficiency with specialized blockchain healthcare solutions.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
    <strong>Medical Device Management</strong><br/>
    Simplify medical device data management, enhancing patient safety and minimizing faults with blockchain.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
    <strong>Personalized Medicine</strong><br/>
    Store and share genomic data securely through blockchain, enabling more personalized and efficient medical treatments.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Choose AradChain Technologies for Blockchain Development in Healthcare
</Heading>

<Text align={'center'} letterSpacing={1}  mt={6}>
    <strong>Technical Expertise</strong><br/>
    Benefit from our exclusive focus on blockchain technologies and unmatched expertise.<br/><br/>
    
    <strong>Expert Team</strong><br/>
    Our 500+ experts refine offerings, suggest optimal tech strategies, and support community and campaign setups.<br/><br/>
    
    <strong>Rapid Development</strong><br/>
    Get tailored products for your audience, backed by a seamless development and deployment roadmap.<br/><br/>
    
    <strong>Complete Support</strong><br/>
    We extend our commitment beyond product launch, providing post-delivery services for your growth.<br/><br/>
    
    <strong>Meaningful Outcomes</strong><br/>
    We ensure tangible impacts that generate value from your investments.<br/><br/>
    
    
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Blockchain Tech Expertise
</Heading>

<Text align={'center'} letterSpacing={1}  mt={6}>
    We're here for a friendly chat to discuss your business needs, obligation-free.<br/><br/>
    
    Count on us for technical support, inquiries, and requests.
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