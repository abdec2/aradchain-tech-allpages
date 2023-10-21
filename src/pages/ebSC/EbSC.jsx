import React from "react";
import style from "./ebSC.module.css";
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
              <Heading>Supply Chain</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Blockchain Solutions for Supply Chain Management Achieve Comprehensive Visibility, Transparency, and Total Asset Control across Your Supply Chain Network Blockchain-Powered Supply Chain Development: Creating a Transparent, Reliable, and Resilient Supply Chain Network.The supply chain industry is rapidly evolving, with new technologies disrupting operations and processes in the modern era. Businesses adhering to traditional supply chain methods, including disjointed data systems and paper-based practices, struggle to access and utilize vast data repositories. The incorporation of blockchain into supply chain management has gained substantial attention in recent years for its ability to offer enhanced transparency, traceability, and reduced administrative costs in business operations.AradChain Technologies offers business-oriented blockchain supply chain solutions to help digitize supply chains, lower operational costs, and unlock opportunities without introducing risk to ongoing operations. Our supply chain solutions, developed by AradChain Technologies's experts, empower supply chain leaders to address disruptions in operations and establish resilience for the future.Common Challenges in Traditional Supply Chain Management.The conventional supply chain management process is riddled with inefficiencies that lead to information silos and complicate asset tracking, resulting in a time-consuming task.Lack of Security and Transparency,Costly Data Reconciliation Processes,Disconnected Supply Chain Participants,Complicated and Manual Record Keeping Methods,Inefficient Asset Traceability,Error-Prone and Delayed Business Operations,Overcome Supply Chain Challenges with Our Blockchain Supply Chain Solutions<strong>  Get a Quote</strong>
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
    Traditional vs. Blockchain-Powered Supply Chains
</Heading>

<Text align={'center'} letterSpacing={1}>
    <strong>Supply Chains without Blockchain</strong><br/><br/>
    - Ethical sourcing uncertain<br/>
    - Environmental impacts unknown. Fragmented data systems and data loss<br/>
    - Infrequent third-party quality control<br/>
    - Manual transport updates not in real-time<br/>
    - Overstock and stockouts due to inaccurate supply and demand data<br/>
    - Product provenance and authenticity uncertain<br/>
    - Minimal supply chain insight
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Supply Chains with Blockchain</strong><br/><br/>
    - Ethical sourcing uncertain<br/>
    - Measure and reduce environmental impacts. Complete data visibility on a single shared ledger<br/>
    - Reduced need for regulators. Smart contracts ensure quality control throughout the supply chain<br/>
    - Automated real-time transport updates<br/>
    - Manage stock with real-time data<br/>
    - Certainty of product provenance and authenticity<br/>
    - Supply chain insight empowers informed decision-making
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Why Opt for AradChain Technologies's Blockchain-Powered Supply Chain Solutions?
</Heading>

<Text align={'center'} letterSpacing={1}>
    As a trusted blockchain supply chain development company, AradChain Technologies offers services to optimize supply chain operations and enhance data management efficiency through intuitive workflows.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Features Offered by Our Blockchain Supply Chain Solutions
</Heading>

<Text align={'center'} letterSpacing={1}>
    Our blockchain supply chain solutions come equipped with user-friendly and advanced features to help businesses manage their supply chain operations seamlessly.<br/><br/>
    - Reporting Dashboard<br/>
    - User Management<br/>
    - Multi-Currency Wallet<br/>
    - Instant KYC and AML<br/>
    - Funds Management
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Develop a Feature-Rich Blockchain-Powered Supply Chain Solution Today
</Heading>


<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Blockchain in Supply Chain: The Use Cases
</Heading>

<Text align={'center'} letterSpacing={1}>
   <strong>- Shipping<br/></strong> 
    A blockchain supply chain solution simplifies logistics by eliminating manual document handling, enhancing shipment visibility, and replacing legacy data systems.<br/><br/>
    <strong>- Food Supply<br/></strong>
    Monitor food quality, minimize wastage, and track food provenance using a blockchain solution, boosting customer trust and minimizing food waste.<br/><br/>
    <strong>- Pharmaceutical<br/></strong>
    Enhance visibility, prevent counterfeit medicines, and reduce pharmaceutical costs using blockchain to secure the pharmaceutical supply chain.<br/><br/>
    <strong>- Manufacturing<br/></strong>
    Track auto parts, validate product provenance, and streamline recall processes using a blockchain supply chain software in the manufacturing sector.<br/><br/>
    <strong>- Healthcare<br/></strong>
    Securely streamline clinical data, enable patients to access their medical records, and protect patient health data using blockchain in the healthcare sector.
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Why Choose AradChain Technologies for Blockchain Supply Chain Development?
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Technical Expertise</strong><br/>
    Our exclusive focus on blockchain technology ensures unmatched proficiency in the field.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Expert Team</strong><br/>
    Our 500+ experts help refine your offering, suggest optimal tech approaches, and assist in community setup and campaigns.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Rapid Development</strong><br/>
    Customized solutions are delivered for your target audience, ensuring swift development and deployment.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Complete Support</strong><br/>
    Our commitment extends beyond product launch, providing extensive post-delivery services for your growth.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Meaningful Outcomes</strong><br/>
    We ensure you generate tangible value from your investments.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Explore Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    Delve into our blog for insights into blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Metaverse in the Manufacturing Industry: Role and Future Prospects</strong><br/>
    Explore the concept of the Metaverse and its role in the manufacturing industry, along with future prospects.
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>AI Empowers NPCs: Breathing Life into the Metaverse</strong><br/>
    Discover how AI is empowering NPCs (non-player characters) in the Metaverse, breathing life into virtual worlds.
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Getting Started with White Label Crypto Banking Platform</strong><br/>
    Learn about the essentials of getting started with a white label crypto banking platform.
    <br/><strong>READ MORE</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Blockchain Tech Expertise
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    We are available for a friendly chat to discuss your business needs without any obligation.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Our commitment to providing technical support ensures we're here to assist with inquiries and requests.</strong>
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