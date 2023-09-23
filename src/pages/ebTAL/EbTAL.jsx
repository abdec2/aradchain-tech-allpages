import React from "react";
import style from "./ebTAL.module.css";
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
              <Heading>Blockchain Solutions for Supply Chain Management</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Achieve Comprehensive Visibility, Transparency, and Total Asset Control across Your Supply Chain Network.Blockchain-Powered Supply Chain Development: Creating a Transparent, Reliable, and Resilient Supply Chain NetworkThe supply chain industry is rapidly evolving, with new technologies disrupting operations and processes in the modern era. Businesses adhering to traditional supply chain methods, including disjointed data systems and paper-based practices, struggle to access and utilize vast data repositories. The incorporation of blockchain into supply chain management has gained substantial attention in recent years for its ability to offer enhanced transparency, traceability, and reduced administrative costs in business operations.AradChain Technologies offers business-oriented blockchain supply chain solutions to help digitize supply chains, lower operational costs, and unlock opportunities without introducing risk to ongoing operations. Our supply chain solutions, developed by AradChain Technologies's experts, empower supply chain leaders to address disruptions in operations and establish resilience for the future.<strong>Connect on WhatsApp Connect on Telegram</strong>
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    The Challenges of Traditional Supply Chain Management
</Heading>

<Text align={'center'} letterSpacing={1}>
    The conventional supply chain management process is riddled with inefficiencies that lead to information silos and complicate asset tracking, resulting in a time-consuming task.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Lack of Security and Transparency</strong><br/>
    Inefficient asset traceability and costly data reconciliation processes.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Disconnected Supply Chain Participants</strong><br/>
    Complicated and manual record-keeping methods.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Inefficient Asset Traceability</strong><br/>
    Error-prone and delayed business operations.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Traditional vs. Blockchain-Powered Supply Chains
</Heading>

<Text align={'center'} letterSpacing={1}>
    <strong>Supply Chains without Blockchain</strong><br/>
    Ethical sourcing uncertain, environmental impacts unknown. Fragmented data systems and data loss, infrequent third-party quality control. Manual transport updates not in real-time, overstock and stockouts due to inaccurate supply and demand data. Product provenance and authenticity uncertain, minimal supply chain insight.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Supply Chains with Blockchain</strong><br/>
    Ethical sourcing uncertain, measure and reduce environmental impacts. Complete data visibility on a single shared ledger, reduced need for regulators. Smart contracts ensure quality control throughout the supply chain. Automated real-time transport updates, manage stock with real-time data. Certainty of product provenance and authenticity, supply chain insight empowers informed decision-making.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Why Opt for AradChain Technologies's Blockchain-Powered Supply Chain Solutions?
</Heading>

<Text align={'center'} letterSpacing={1}>
    As a trusted blockchain supply chain development company, AradChain Technologies offers services to optimize supply chain operations and enhance data management efficiency through intuitive workflows.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Enhanced Visibility and Transparency</strong><br/>
    Streamlined onboarding and reduced product counterfeiting.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Secured Supply Chain Operations</strong><br/>
    Seamless team collaboration.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Features Offered by Our Blockchain Supply Chain Solutions
</Heading>

<Text align={'center'} letterSpacing={1}>
    Our blockchain supply chain solutions come equipped with user-friendly and advanced features to help businesses manage their supply chain operations seamlessly.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Reporting Dashboard</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>User Management</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Multi-Currency Wallet</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Instant KYC and AML</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Funds Management</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Blockchain in Supply Chain: The Use Cases
</Heading>

<Text align={'center'} letterSpacing={1}>
    <strong>Shipping</strong><br/>
    A blockchain supply chain solution simplifies logistics by eliminating manual document handling, enhancing shipment visibility, and replacing legacy data systems.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Food Supply</strong><br/>
    Monitor food quality, minimize wastage, and track food provenance using a blockchain solution, boosting customer trust and minimizing food waste.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Pharmaceutical</strong><br/>
    Enhance visibility, prevent counterfeit medicines, and reduce pharmaceutical costs using blockchain to secure the pharmaceutical supply chain.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Manufacturing</strong><br/>
    Track auto parts, validate product provenance, and streamline recall processes using a blockchain supply chain software in the manufacturing sector.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Healthcare</strong><br/>
    Securely streamline clinical data, enable patients to access their medical records, and protect patient health data using blockchain in the healthcare sector.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Why Choose AradChain Technologies for Blockchain Supply Chain Development?
</Heading>

<Text align={'center'} letterSpacing={1}>
    <strong>Technical Expertise</strong><br/>
    Our exclusive focus on blockchain technology ensures unmatched proficiency in the field.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Expert Team</strong><br/>
    Our 500+ experts help refine your offering, suggest optimal tech approaches, and assist in community setup and campaigns.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Rapid Development</strong><br/>
    Customized solutions are delivered for your target audience, ensuring swift development and deployment.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Complete Support</strong><br/>
    Our commitment extends beyond product launch, providing extensive post-delivery services for your growth.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Meaningful Outcomes</strong><br/>
    We ensure you generate tangible value from your investments.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Explore Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1}>
    Delve into our blog for insights into blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Metaverse in the Manufacturing Industry: Role and Future Prospects</strong><br/>
    Explore the concept of the Metaverse and its role in the manufacturing industry, along with future prospects.
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>AI Empowers NPCs: Breathing Life into the Metaverse</strong><br/>
    Discover how AI is empowering NPCs (non-player characters) in the Metaverse, breathing life into virtual worlds.
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Getting Started with White Label Crypto Banking Platform</strong><br/>
    Learn about the essentials of getting started with a white label crypto banking platform.
    <br/><strong>READ MORE</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Blockchain Tech Expertise
</Heading>

<Text align={'center'} letterSpacing={1}>
    We are available for a friendly chat to discuss your business needs without any obligation.
</Text>

<Text align={'center'} letterSpacing={1}>
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
      <FloatingWhatsApp
        phoneNumber="447778222221"
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