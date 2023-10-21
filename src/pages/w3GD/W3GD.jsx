import React from "react";
import style from "./w3GD.module.css";
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
              <Heading>Web3 Game Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Discover Some Interesting Facts!As highlighted in the dApp Industry Report 2022, nearly half of the blockchain activity stems from Web 3 gaming. This sector boasts daily unique active wallets totaling 1.15 million and a transaction count reaching a remarkable 7.4 billion.Optimal Web 3 Game Development.Web 3 gaming stands as an innovative blockchain-powered alternative to traditional gaming experiences. Embracing decentralization over localized servers, it grants users ownership of digital assets via NFTs and cryptocurrencies, fostering an unregulated marketplace for asset trading.If you're eager to venture into the realm of Web 3 games, AradChain Technologies stands ready to steer you in the right direction. As a premier web 3 game development company, we're dedicated to helping the gaming industry penetrate the Web 3 landscape and unlock its full potential.Our team comprises proficient game developers who possess extensive expertise in the Web 3 platform. With their guidance, gaming businesses can forge the path to next-generation games that offer exceptional user experiences for unparalleled entertainment.
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

             <Text align={'center'} letterSpacing={1} mt={4}><strong>Did You Know? </strong>Amidst the challenges faced by cryptocurrencies in recent times, the number of Web 3 gaming projects has surprisingly grown by approximately 31% since January 2022.Embark on Your Web 3 Game Development Journey - Our Services As a leading Web 3 game development company, we extend an array of services tailored to help gaming companies harness the potential of the Web 3 platform and make a lasting impact in the next-gen gaming industry.</Text>
             <Text align="center" mt={5}>
  <strong>Group 72671: </strong>
  Web 3 Game Consulting
  Our top-tier web 3 game development consulting services empower newcomers to the Web 3 domain to successfully launch games on this platform, minimizing disruptions and issues.
</Text>
<Heading mt={5} mb={5} size="lg" align="center">As a leading Web 3 game development company</Heading>

<Text align="center" mt={5}>
  <strong>Group 72672: </strong>
  Web 3 Game Development
  Our team excels in web 3 game development, transforming your gaming concepts into reality efficiently. We ensure a seamless launch on the futuristic web 3 platform, yielding impressive outcomes.
</Text>


<Text align="center" mt={5}>
  <strong>Group 72673: </strong>
  Custom Game Development
  With expertise spanning various genres like action and adventure, our adept team delivers custom game development services tailored to your precise requirements, ensuring utmost satisfaction.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72674: </strong>
  Avatar Creation
  Immerse gamers in captivating experiences through our top-notch avatar creation service. Utilizing cutting-edge animation tools and technologies, we craft hyper-realistic avatars for heightened engagement.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72675: </strong>
  Smart Contract Development
  Facilitating automated in-game asset trading, our smart contract development services enhance the ease and convenience of transactions, ensuring a seamless gaming experience.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72676: </strong>
  NFT Marketplace Creation
  Empower gamers with highly functional NFT marketplaces integrated into your Web 3 games. Our platforms provide a convenient hub for the buying, selling, and transferring of in-game digital assets.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72677: </strong>
  Wallet Development & Integration
  Create robust, secure crypto wallets and seamlessly integrate them into Web 3 games. Enable easy crypto transactions, streamlining storage and retrieval of digital assets within games.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72678: </strong>
  Token Creation
  Encompassing design and development, our Web 3 game development services include tokens equipped with essential features on your chosen blockchain, facilitating scalable growth for your business.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72679: </strong>
  Web 3 Game Porting
  As a pioneering Web 3 game development company, we offer game porting from the Web 2 platform to Web 3 platforms. This transition ensures gaming businesses reap the full benefits of decentralized gaming.
</Text>

<Text align="center" mt={5}>
  <strong>Predictions from consulting firm MarketsandMarkets indicate the global blockchain gaming market is set to surge to $65.7 billion by 2027, soaring from $4.6 billion in 2022.</strong>
</Text>

<Text align="center" mt={5}>
  <strong>TALK TO OUR EXPERTS</strong>
</Text>

<Text align="center" mt={5}>
  <strong>Key Features of Web 3 Game Development  </strong>
  Web 3 games bring forth a range of advantages, outlined below:
</Text>

<Text align="center" mt={5}>
  <strong>Group 72650: </strong>
  Robust Security
  Web 3 games boast top-tier security ensured by encrypted and immutable blockchain transactions. This security framework applies to both gameplay and asset transfers.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72651: </strong>
  Decentralized Landscape
  Incorporating decentralization, Web 3 games offer equal autonomy to all users. The absence of central authorities ensures adherence to gaming guidelines without external influence.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72652: </strong>
  Enhanced Transparency
  Transparency is a hallmark of Web 3 games. Gamers gain complete insight into all in-game activities, fostering a high level of trustworthiness within the gaming ecosystem.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72653: </strong>
  Instant Payment Processing
  Enabling crypto payments, Web 3 games facilitate immediate transaction processing. Transactions are verified and confirmed by the blockchain rapidly, ensuring swift exchanges.
</Text>

<Text align="center" mt={5}>
  <strong>Group 72654: </strong>
  Verified Transactions
  All transactions within the Web 3 platform undergo verification and validation. This streamlined process enhances affordability, security, and speed, all without relying on intermediaries.
</Text>

<Text align="center" mt={5} textAlign="center">
  <strong>Group 72655: </strong>
  Customization Options
  Web 3 games offer effortless customization, facilitating seamless integration of essential in-game assets and tokens to cater to gamers' unique preferences.
</Text>

<Text align="center" mt={5} textAlign="center">
  <strong>Notable web 3 games, such as Alien Worlds and Splinterlands, boast over 160,000 daily active wallets. Gods Unchained, a web 3 trading card game, generated over $18 million through in-game asset sales.</strong>
</Text>
<Heading as="h2" size="lg" textAlign="center" mt={5}>
  Our Web 3 Game Development Process
</Heading>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Consultation Phase
  </Heading>
  Commencing with web 3 game development consulting, we guide newcomers in planning and launching games on the web 3 platform. This initial phase minimizes potential disruptions.
</Text>

  <Heading mt={5} as="h3" size="md" textAlign="center">
    Discovery Phase
  </Heading>
  <Text textAlign="center">
  The discovery phase delves into your goals, initiating brainstorming sessions to chart a plan for achieving your objectives within the web 3 game development landscape.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Requirements Gathering
  </Heading>
  Our team gathers all project requirements, conducts in-depth analyses, and designs a roadmap to guide the subsequent web 3 game development process.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Solution and Strategy Design
  </Heading>
  During this phase, we devise solutions and design strategies to ensure top-notch UI/UX in gaming, fostering remarkable experiences that captivate and engage users.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Maintenance and Support
  </Heading>
  Following successful game launch, we provide comprehensive maintenance and ongoing support to ensure smooth operations, devoid of bugs or technical glitches.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Deployment Phase
  </Heading>
  Once our QA team provides the green light, your game is prepared for launch. Our careful launch process guarantees client satisfaction, concluding the deployment phase.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Testing and Quality Analysis
  </Heading>
  Post-development, our dedicated QA team rigorously tests and analyzes the game. This ensures that the final product is market-ready, free of any glitches or issues.
</Text>

<Text mt={5} textAlign="center">
  <Heading as="h3" size="md">
    Development Phase
  </Heading>
  The core development of the game unfolds in this phase. Aligned with approved designs and strategies, this step molds the game, preparing it for launch.
</Text>

<Heading as="h2" size="lg" textAlign="center" mt={5}>
  Why Opt for AradChain Technologies in Web 3 Game Development?
</Heading>

<Text mt={5}>
  At AradChain Technologies, we take pride in being a premier web 3 game development company, catering to diverse business needs with utmost dedication. With a blend of years of experience and comprehensive game development expertise, we elevate your web 3 game project to unprecedented heights. By choosing us as your web 3 game development partner, you access an array of benefits.
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