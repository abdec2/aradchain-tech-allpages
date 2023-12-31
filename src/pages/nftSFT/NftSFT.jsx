import React from "react";
import style from "./nftSFT.module.css";
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
        <Heading>Semi-Fungible Token Development Services</Heading>
      </div>
    </div>
  </div>
</div>

<div className={style.infoSection}>
  <div className={style.infoContainer}>
    <div className="content">
      <Text align={'center'} letterSpacing={1}>
        The concept of a semi-fungible token (SFT) brings together the attributes of both fungible and non-fungible tokens, adding an intriguing layer of complexity. An SFT retains its fungibility until a specific purpose demands otherwise. AradChain Technologies offers comprehensive SFT token development services, allowing you to represent multiple tokens within a single smart contract.
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
        Why Opt for SFT Development Services?
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        NFTs revolutionized digital asset ownership representation, providing immutability, transparency, and security. However, transferring an entire collection of NFTs can be slow and inefficient. This led to the emergence of the SFT standard, enabling the creation of multi-token platforms. By choosing to develop semi-fungible tokens, batch token transfers become streamlined as SFTs support both fungible and non-fungible tokens within one contract. This not only reduces gas fees but also simplifies token management.
      </Text>
      <Text align={'center'} letterSpacing={1}>
        With AradChain Technologies's SFT token development, individuals such as artists, gamers, and brands can leverage SFTs to consolidate various tokens into a single contract. This not only saves costs but also streamlines token administration.
         </Text>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
        AradChain Technologies’s Semi-Fungible Token Development Services
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        Our SFT development employs the ERC-1155 multi-token standard, enabling each token ID to represent a distinct token type with configurable attributes.
      </Text>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={5}>
        Key features of our SFT development services include:
      </Heading>
      <UnorderedList>
        <Text align={'center'}>Create tokens with a mix of fungible and non-fungible attributes. Each token carries attributes like token ID, token count, and metadata.</Text>
        <Text align={'center'}>Professional methodology for end-to-end SFT token development. Leverage our expertise and services to realize your semi-fungible token vision.</Text>
      </UnorderedList>
    
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
        Advantages of Semi-Fungible Token Development
      </Heading>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={5}>
        Benefits for Token Holders
      </Heading>
      <UnorderedList>
        <Text align={'center'}>Effortless management of fungible and non-fungible tokens. Even bundled tokens under a single smart contract can be unbundled and traded separately.</Text>
      </UnorderedList>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={5}>
        Benefits for Token Creators
      </Heading>
      <UnorderedList>
        <Text align={'center'}>Facilitates open, user-friendly, and cost-effective minting. Only a single smart contract is needed to govern both fungible and non-fungible tokens.</Text>
      </UnorderedList>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
        Why Choose Us for Your Semi-Fungible Token Development
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        Collaborate with AradChain Technologies to access a team of technical experts with real-world experience in achieving success stories.
      </Text>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={5}>
        Technical Proficiency
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        We specialize exclusively in blockchain technologies, excelling in our focused domain.
      </Text>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={5}>
        Expert Team
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        Our team of 500 experts refines your concepts, suggests optimal tech strategies, and aids in community building and campaigns.
      </Text>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={5}>
        Rapid Development
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        Our tailored products are designed for your target audience. A well-structured roadmap ensures swift and efficient development and deployment.
      </Text>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={5}>
        Complete Support
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        Our commitment extends beyond product launch. Comprehensive post-delivery services empower you to focus on growth.
      </Text>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={5}>
        Meaningful Outcomes
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        Our impact is tangible; we ensure your investments yield visible value.
      </Text>
     
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
        A Glimpse of Our Blog Content
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        Feel free to engage in a friendly conversation to explore your business requirements, with no obligations attached.
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