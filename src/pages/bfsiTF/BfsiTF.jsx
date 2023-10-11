import React from "react";
import style from "./bfsiTF.module.css";
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
              <Heading>Trade Finance</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Blockchain-Powered Trade Finance Embrace Enhanced Speed, Security, and Transparency in Transactions.<strong>CONSULT OUR EXPERTS</strong>

            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Blockchain Integration for Trade Finance: An Overview
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  The domain of trade finance, which relies on financial institutions to provide credit facilities for ensuring the exchange of goods, has clung to a traditional process that has seen minimal evolution despite the expansion of global trade dynamics.
</Text>
<Link to="https://t.me/aradchain" target="_blank">


<Text style={{ textAlign: 'center' }} mt={4}>
  Compounded by intricate procedures and diverse regulations across geographical boundaries, the existing trade finance framework faces multifaceted challenges. The presence of numerous external parties spanning jurisdictions complicates international trade, resulting in a cumbersome, expensive, and time-consuming process.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  These challenges underscore the compelling case for integrating blockchain technology into trade finance.
</Text>
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

<Heading as='h3' size='lg' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={5}>
  The Need for Blockchain-Enabled Trade Finance: Addressing Current Issues
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  The existing trade finance landscape grapples with the following issues:
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Manual Contract Creation Process: </strong>The importing bank meticulously reviews the financial agreement submitted by the importer and forwards the financial data to the correspondent bank.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Invoice Financing: </strong>Exporters seek short-term financing by submitting invoices to multiple banks, which escalates the risk if goods are not delivered.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Extended Timeline:</strong> The shipment of goods is extended due to numerous checks performed by intermediaries and multiple communication touchpoints.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong>Manual Anti-Money Laundering Assessment: </strong>The exporting bank manually conducts anti-money laundering evaluations based on the financial information from the importing bank.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Multiplicity of Systems:</strong> As each participant across nations employs different platforms, miscommunication is frequent, and fraud risks are heightened.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong>Double Bill of Lading: </strong>Bills of lading are duplicated as banks struggle to verify their authenticity.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  <strong> Divergent Versions:</strong> As financial information traverses entities, substantial version control issues arise due to alterations made during the process.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Delayed Payment: </strong>Prior to disbursing funds to the exporting bank, multiple intermediaries must confirm that the importer has received the funds as per the agreement, leading to prolonged settlement times.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  Resolve these challenges by embracing blockchain solutions for trade finance.
</Text>

<Heading style={{ textAlign: 'center' }} mt={4}>
  <strong>Advantages of Incorporating Blockchain in Trade Finance</strong>
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Blockchain can usher in an enhanced trade finance process with the following benefits:
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Enhanced Transparency: </strong> The transparent ledger records transactions and data in an immutable manner, offering visibility and accountability to all involved parties.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
  <strong> Accelerated and Streamlined Processes:</strong> Blockchain reduces the dependency on intermediaries, thereby expediting, cost-effecting, and enhancing the trade finance process.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong>Enhanced Traceability: </strong> Blockchain serves as a single source of truth for all parties engaged in a trade transaction, enabling seamless tracking of goods and ensuring transparency in the supply chain.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Augmented Security: </strong>The decentralized blockchain ledger ensures secure and tamper-resistant data storage and transaction processing, mitigating the risk of fraud and financial malfeasance.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong>Extended Accessibility: </strong>Blockchain facilitates the inclusion of new participants, including SMEs, into the trade finance ecosystem, thereby expanding access to trade financing.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong>Risk Management Reinforcement: </strong>Blockchain affords real-time visibility into the trade finance process, minimizing the risk of fraudulent activities and providing a secure repository for trade finance documentation.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  Harness the advantages of blockchain in trade finance with our expertise and practical experience in blockchain implementation.
</Text>

<Heading as='h3' size='lg' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={5}>
  The Need for Blockchain-Enabled Trade Finance: Addressing Current Issues
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  The existing trade finance process has to address the following challenges:
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Letter of Credit Processing:</strong> Streamline the Letter of Credit (LOC) process by reducing the need for intermediaries and enabling swift, real-time communication between involved parties.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Invoice Financing:</strong> Automate invoice financing to expedite the process, reduce manual processing, and improve data accuracy.
</Text>
<Text style={{ textAlign: 'center' }} mt={4}>
<strong>Supply Chain Financing: </strong>Gain insight into the supply chain and simplify risk assessment for trade transactions, enhancing trade financing accessibility for SMEs.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  <strong>Why Choose Us for Blockchain Integration in Trade Finance</strong>
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  The existing trade finance process has to address the following challenges:
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
<strong>Technical Proficiency: </strong>We specialize in Blockchain Technologies exclusively. Our focused expertise ensures unparalleled mastery in the field.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Expert Team: </strong>Our team comprises over 600 experts who guide you in refining your offerings, suggesting optimal tech approaches, and aiding in community and campaign establishment.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Rapid Development: </strong>Our tailored blockchain services ensure the creation of exceptional products aligned with your target audience. A well-defined roadmap guarantees seamless and expedited development and deployment.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Comprehensive Support: </strong>Our commitment goes beyond product launch. We offer extensive post-delivery services to allow you to concentrate on your expansion.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
<strong> Tangible Impact: </strong>We generate meaningful outcomes, ensuring discernible value from your investments.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  <strong>Our Partners</strong>
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  <strong>Our Clients</strong>
</Text>

<Heading style={{ textAlign: 'center' }} mt={4}>
  <strong>Frequently Asked Questions</strong>
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  1. How does blockchain work in trade finance?
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  2. Can blockchain technology be used to improve supply chain visibility and traceability in trade finance?
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  3. How can blockchain technology be integrated into existing trade finance processes?
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  4. How can blockchain technology improve access to trade financing for SMEs?
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  5. How long does it take to build a blockchain-based solution for trade finance?
</Text>

<Heading as='h3' size='lg' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={5}>
  <strong>A Glance of Our Blogs</strong>
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  - Revolutionizing Real Estate Tokenization with Blockchain
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  - NFTs and Intellectual Property Rights: The Uncharted Terrain
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  - How Blockchain and IoT are Revolutionizing Supply Chain Management
</Text>

<Heading as='h3' size='lg' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={5}>
  <strong>Our Blockchain Tech Expertise</strong>
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  We are available for a friendly chat to discuss your business needs, no obligation.
</Text>

<Text style={{ textAlign: 'center' }} mt={4}>
  We will zealously try to help you by providing technical support. We are open to inquiries.
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