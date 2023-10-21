import React from "react";
import style from "./bfC.module.css";
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
import {
  Box,
  Text,
  Heading,
  UnorderedList,
  Grid,
  GridItem,
  SimpleGrid,
  CardBody,
  Card,
  Button,
  Stack,
} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Cosmos</Heading>
            </div>
          </div>
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={"center"} letterSpacing={1}>
              Cosmos Blockchain Development-Comprehensive Solutions from AtoZ
              Enlist the expertise of our blockchain professionals to empower
              your business with the potential of the Cosmos blockchain,
              propelling you ahead in a competitive market.
            </Text>
            <Box my={20}>
              <Link to="https://t.me/aradchain" target="_blank">
                <Text textAlign={"center"} mt={4}>
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
                      _media={{
                        "@media (max-width: 680px)": {
                          // Apply styles only in mobile view
                          marginTop: "2%",
                          marginLeft: "-15px",
                        },
                      }}
                    >
                      Connect on Whatsapp
                    </Button>
                  </Link>
                </Text>
              </Link>
            </Box>

            <Heading
              as="h2"
              size="2xl"
              letterSpacing={2}
              my={5}
              textAlign="center"
              mt={10}
              mb={10}
            >
              Cosmos Blockchain Network - An Overview
            </Heading>

            <Text mt={4} align="justify">
              The Cosmos Network stands as a decentralized network of scalable,
              independent, and interoperable blockchains, playing a pivotal role
              in establishing the foundation for a new token economy.
            </Text>

            <Text mt={4} align="justify">
              Cosmos, often termed Blockchain 3.0, offers a robust ecosystem
              with smart contract capabilities, along with a highly secure
              framework for trading and transactions, free from intermediaries.
            </Text>

            <Text mt={4} align="justify">
              At AradChain Technologies, our team will assist your business in
              harnessing the power of the Cosmos blockchain to its fullest
              potential, reaping the benefits efficiently for swift and
              desirable outcomes.
            </Text>

            <Text mt={4} align="justify">
              <strong>FUN FACT! </strong> Cosmos (ATOM) holds the 23rd rank
              among global cryptocurrencies.
            </Text>

            <Text mt={4} align="justify">
              <strong>Our Cosmos Blockchain Development Services: </strong>
              AradChain Technologies, a prominent cosmos blockchain development
              firm, extends premier cosmos blockchain solutions and services,
              catering to diverse business requirements, aiding in the creation
              and deployment of decentralized applications and services with
              ease.
            </Text>

            <Text mt={4} align="justify">
              <strong>Cosmos Blockchain Consulting: </strong>
              Our cosmos blockchain consulting solutions are tailored to guide
              businesses in implementing or enhancing the use of cosmos
              blockchain technology effectively.
            </Text>

            <Text mt={4} align="justify">
              <strong>Cosmos Marketplace Creation: </strong>
              We provide top-tier cosmos marketplace creation services, crafting
              platforms equipped with the necessary features and functionalities
              to fulfill business goals.
            </Text>

            <Text mt={4} align="justify">
              <strong>Cosmos dApp Development: </strong>
              Our accomplished team offers exceptional Cosmos dApp development
              services, building high-quality decentralized applications on the
              Cosmos network, complete with essential features and user-friendly
              interfaces.
            </Text>

            <Text mt={4} align="justify">
              <strong>Data Transfer Across Chains: </strong>
              As a leading cosmos blockchain development company, we facilitate
              seamless data transfer across chains within the Cosmos network,
              ensuring effortless processes for businesses.
            </Text>

            <Text mt={4} align="justify">
              <strong>Interchain Bridge Establishment: </strong>
              Our interchain bridge creation services play a pivotal role in
              facilitating the smooth transfer of tokens between various
              blockchain networks, enhancing scalability and interoperability.
            </Text>

            <Text mt={4} align="justify">
              <strong>Smart Contract Crafting: </strong>
              Our proficient blockchain developers design interoperable smart
              contracts for both public and private networks linked on the
              Cosmos network, supporting diverse dApps.
            </Text>

            <Text mt={4} align="justify">
              <strong>
                Cosmos (ATOM) boasts a total market capitalization of
                $3,254,598,419.00.
              </strong>
            </Text>
            <Heading
              as="h2"
              size="2xl"
              letterSpacing={2}
              my={5}
              textAlign="center"
              mt={10}
              mb={10}
            >
              Advantages of Cosmos Blockchain
            </Heading>

            <Text mt={4} align="justify">
              Cosmos blockchain presents an array of benefits, outlined as
              follows:
            </Text>

            <Text mt={4} align="justify">
              <strong>User-Friendly Nature: </strong>
              Compared to other platforms, Cosmos blockchain is relatively
              user-friendly, making it simpler for developers to construct
              applications on its network.
            </Text>

            <Text mt={4} align="justify">
              <strong>Exceptional Scalability: </strong>
              Cosmos blockchain surpasses conventional networks in terms of
              scalability, enabling a higher transaction throughput per second.
            </Text>

            <Text mt={4} align="justify">
              <strong>Customization Ease: </strong>
              The Cosmos blockchain platform is effortlessly customizable,
              empowering developers to swiftly create and launch new
              applications.
            </Text>

            <Text mt={4} align="justify">
              <strong>Swift Functioning: </strong>
              The interconnected blockchains within the Cosmos network result in
              a faster platform, elevating transaction speed.
            </Text>

            <Text mt={4} align="justify">
              <strong>Self-Governance: </strong>
              Cosmos blockchain is inherently self-governing, ensuring
              applications on the network remain independent of the platform's
              environment or governance.
            </Text>

            <Text mt={4} align="justify">
              <strong>Interoperability at its Core: </strong>
              The Cosmos network offers innate interoperability, connecting
              autonomous blockchains through a specialized protocol for seamless
              inter-blockchain communication.
            </Text>

            <Text mt={4} align="justify">
              <strong>
                Within 24 hours, Cosmos (ATOM) achieves a trading volume of
                $155,046,863.00, with a total circulating supply of
                292,586,163.827 coins.
              </strong>
            </Text>
            <Heading
              as="h2"
              size="2xl"
              letterSpacing={2}
              my={5}
              textAlign="center"
              mt={10}
              mb={10}
            >
              Our Cosmos Blockchain Development Process
            </Heading>

            <Text mt={4} align="justify">
              At AradChain Technologies, we embark on a cosmic journey to craft
              exceptional blockchain solutions. Our cosmos blockchain
              development process is a voyage of innovation and precision,
              tailored to illuminate the metaverse of possibilities for your
              eCommerce ambitions.
            </Text>

            <Text mt={4} align="justify">
              <strong>Consultation Phase: </strong>
              Our cosmic journey commences with cosmos blockchain consulting
              services, particularly tailored for newcomers in the field, aiming
              to explore and maximize metaverse benefits within their eCommerce
              endeavors.
            </Text>

            <Text mt={4} align="justify">
              <strong>Discovery Phase: </strong>
              Subsequently, we delve into the discovery phase, comprehensively
              understanding your objectives. This is followed by brainstorming
              sessions to formulate a precise plan to achieve your goals.
            </Text>

            <Text mt={4} align="justify">
              <strong>Requirements Gathering: </strong>
              In this step, we gather all project requirements, analyze them
              meticulously, and create a roadmap for cosmos blockchain
              development based on your specifications.
            </Text>

            <Text mt={4} align="justify">
              <strong>Solution and Strategy Design: </strong>
              We proceed to design suitable solutions and strategies, aligned
              with your project's needs. This phase ensures that our approach
              perfectly suits the desired outcomes.
            </Text>

            <Text mt={4} align="justify">
              <strong>Development Phase: </strong>
              The core development takes place in this stage, transforming
              approved designs and strategies from the previous step into a
              fully shaped cosmos blockchain platform, ready for deployment.
            </Text>

            <Text mt={4} align="justify">
              <strong>Testing and Quality Analysis: </strong>
              After development, our dedicated QA team conducts rigorous testing
              and quality analysis to ensure a smooth, glitch-free final product
              that meets all requirements.
            </Text>

            <Text mt={4} align="justify">
              <strong>Deployment Phase: </strong>
              Following successful testing, the product is prepared for launch.
              Our team ensures a seamless launch process to guarantee client
              satisfaction, marking the culmination of the deployment phase.
            </Text>

            <Text mt={4} align="justify">
              <strong>Maintenance and Support: </strong>
              Post-launch, we provide ongoing maintenance and support, ensuring
              your platform runs smoothly and efficiently, with minimal
              disruptions.
            </Text>

            <Heading
              as="h2"
              size="2xl"
              letterSpacing={2}
              my={5}
              textAlign="center"
              mt={10}
              mb={10}
            >
              Opt for AradChain Technologies as Your Cosmos Blockchain
              Development Partner
            </Heading>

            <Text mt={4} align="justify">
              AradChain Technologies takes immense pride in being a premier
              cosmos blockchain development company, adept at addressing diverse
              business needs with the utmost efficiency. With years of
              experience and a wealth of expertise in cosmos blockchain
              development, we propel your blockchain project to new heights.
            </Text>

            <Text mt={4} align="justify">
              <strong>Benefits of Choosing AradChain Technologies</strong>
            </Text>

            <Text mt={4} align="justify">
              <strong>Expert Blockchain Developers </strong>
              Our team comprises proficient blockchain developers.
            </Text>

            <Text mt={4} align="justify">
              <strong>Extensive Experience </strong>
              We boast years of experience in the field.
            </Text>

            <Text mt={4} align="justify">
              <strong>Consistent Results </strong>
              We consistently deliver valuable outcomes.
            </Text>

            <Text mt={4} align="justify">
              <strong>Swift Turnaround </strong>
              Expect quick project completion times.
            </Text>

            <Text mt={4} align="justify">
              <strong>Comprehensive Support </strong>
              Benefit from superior post-sales assistance.
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
      <WhatsApp/>

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
