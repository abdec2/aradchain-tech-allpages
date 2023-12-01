import React from "react";
import style from "./scSCD.module.css";
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
              <Heading>Smart Contract Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Expert Smart Contract Development
            </Heading>
            <Text align={'center'} letterSpacing={1}>
            When it comes to smart contract development, our team of highly skilled developers is at the forefront. We not only possess in-depth knowledge of blockchain platforms like Ethereum, EOS, Hyperledger, TRON, and more, but we also prioritize security and reliability in every contract we create. We understand that each business is unique, which is why we specialize in crafting custom smart contract solutions that are perfectly tailored to your specific needs. Whether you're looking to automate agreements or streamline business processes, we have the expertise to make it happen.
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
            Streamlined Development Process
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            Our development process is designed to be both efficient and transparent. We kickstart the journey by conducting a comprehensive analysis of your requirements, ensuring that we fully grasp your business objectives. With a clear roadmap in place, we move on to the technical design phase, where we document the smart contract, create data flow diagrams, and design the technical architecture. The development stage is where our team shines, as we implement the proposed solution with precision. Throughout this phase, we maintain open lines of communication with you, seeking your feedback to ensure the final product aligns with your vision. Rigorous testing follows, both on testnet and the main network, to guarantee the reliability and security of the smart contract.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            DeFi Solutions for Finance
            </Heading>
            <Text align={'center'} letterSpacing={1}>
            In today's fast-paced financial landscape, automation is no longer a luxury but a necessity. The DeFi (Decentralized Finance) market is booming, and financial institutions are increasingly turning to DeFi smart contract development to meet customer expectations and stay competitive. As a leading DeFi smart contract development company, we offer services that go beyond mere automation. We focus on enhancing data accuracy, reducing paperwork, bolstering security measures, and expediting transaction processing for financial institutions. With the DeFi market projected to grow significantly, investing in DeFi smart contract development has become essential for staying ahead in the financial sector.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Trusted Industry Applications</Heading>
            <Text align={'center'} letterSpacing={1}>
            Our smart contract solutions have earned trust across various industries, including real estate, healthcare, logistics, insurance, and media. In the real estate sector, we provide robust smart contract solutions that streamline management processes and ensure transparency in sales transactions. For healthcare, our smart contracts automate data sharing between entities, verify medical claims, and optimize operations. In the insurance sector, we expedite claims processing through error checks and automated payout calculations. In media and entertainment, we empower creators and consumers with smart contracts for automatic micropayments, eliminating intermediaries and fostering a direct connection. Our solutions are designed to transform industries, making them more efficient, transparent, and secure.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Frequently Asked Questions</Heading>
            <Text align={'center'} letterSpacing={1} mt={4}><strong>What is the cost of smart contract development?</strong></Text>
            <Text align={'center'} letterSpacing={1} mt={4}>The cost varies based on factors like blockchain platform fees, development company charges, team size, tools, and maintenance services.</Text>
            <Text align={'center'} letterSpacing={1} mt={4}><strong>How do I create an Ethereum smart contract?</strong></Text>
            <Text align={'center'} letterSpacing={1} mt={4}><strong>Which blockchain platform is best for smart contract development?</strong></Text>
            <Text align={'center'} letterSpacing={1} mt={4}><strong>How long does DeFi smart contract development take?</strong></Text>
           
           <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Our Blog Highlights</Heading>
           <Text align={'center'} letterSpacing={1} mt={4}><strong>Smart Contract Auditing: </strong> Trends and Case Studies
Explore emerging trends and real-world case studies in smart contract auditing to ensure secure and reliable blockchain transactions.</Text>
           <Text align={'center'} letterSpacing={1} mt={4}><strong>Future Trends in DeFi Smart Contract Development:
 </strong> Discover the future trends in DeFi smart contract development, including oracles and NFTs integration.
</Text>
           <Text align={'center'} letterSpacing={1} mt={4}><strong>Preparing for a Smart Contract Security Audit:
 </strong> Enhance the reliability of your blockchain applications through a 10-step checklist for smart contract security audits.
</Text>
<Text align={'center'} letterSpacing={1} mt={4}><strong>Contact us for a friendly chat about your business needs.

We're here to provide technical support and respond to inquiries</ strong></Text>
          
          
          
          
          
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