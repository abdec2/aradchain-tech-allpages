import React from "react";
import style from "./nftG.module.css";
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
        <Heading>NFT Game Development Company</Heading>
      </div>
    </div>
  </div>
</div>

<div className={style.infoSection}>
  <div className={style.infoContainer}>
    <div className="content">
      <Text align={'center'} letterSpacing={1}>
        Revolutionizing NFT Gaming Development: Introducing an Innovative Paradigm Shift AradChain Technologies is at the forefront of crafting groundbreaking NFT games that redefine exclusivity and collectability. Our next-gen NFT games empower players with true ownership and control over in-game assets, allowing them to buy, sell, and trade unique virtual items possessing real-world value. Backed by our world-class NFT game development services, we have cultivated a strong portfolio that caters to the diverse needs of modern gamers and enterprises. Our NFT game solutions boast distinct qualities, including: Customizable Metadata Off-Chain Storage Compatibility Across Platforms Engaging Gameplay Mechanics Authentic Ownership CONNECT ON
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
        NFT Games vs Traditional Games:
      </Heading>
      <Text align={'center'} letterSpacing={1} mt={4}>A comparative analysis between NFT (Non-Fungible Token) games and traditional games unveils several significant distinctions. In the realm of NFT games, players enjoy true ownership of their in-game assets, which possess tangible real-world value and scarcity, all thanks to the underlying blockchain technology. Traditional games, on the other hand, typically maintain control over assets within their closed ecosystems, limiting their value to the confines of the game world. NFT games bring forth transparency, as all transactions and ownership records are securely stored on the blockchain, ensuring trust and verifiability. Players actively shape the in-game marketplace in NFT games, fostering a sense of community engagement and market dynamism. Creativity flourishes as players can create and trade their in-game items, enhancing player agency and participation. The security of NFT games is bolstered through blockchain technology, reducing the risk of hacks and fraud that centralized servers may face in traditional games. Monetization opportunities in NFT games are diverse, ranging from initial NFT sales to secondary market royalties, partnerships, and collaborations, providing developers with multifaceted revenue streams. AradChain Technologies stands at the forefront of NFT game development, offering a comprehensive suite of services that empower developers to craft immersive, interconnected gaming experiences. These experiences not only cater to the demand for exclusive and rare NFTs but also introduce innovative play-to-earn mechanics, cultivating vibrant communities, and seizing the ever-expanding opportunities within the NFT gaming landscape.</Text>
        <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>From NFT Marketplace Integration and tokenization to ownership</Heading>  
      <Text align={'center'} letterSpacing={1} marginTop={7}> Game mechanics, and multiplatform compatibility, we've got all bases covered. Conceptualization and Ideation With an extensive portfolio of designing tailored NFT gaming strategies for startups, SMBs, and Fortune 500 companies across various industries, we transform concepts into captivating ideas that captivate and engage your potential audience. Integration Expertise As a leading NFT game development company, AradChain Technologies excels in seamlessly integrating NFTs into existing games, utilizing robust development tools tailored to your needs. Whether it's fantasy sports, action games, card games, or simulations, we've got you covered. 2D/3D Art and Design Partner with our premium 2D/3D artists and certified designers to create visually appealing and user-friendly NFT gaming applications that captivate modern gamers and businesses alike. From concept art and animation to motion graphics, we employ cutting-edge technology to bring your vision to life. Smart Contract Development Ensure seamless asset creation, ownership, and transfer with our flawless smart contract development services. Our certified blockchain engineers deliver a next-gen solution for managing NFT assets, ensuring a secure and efficient gaming experience. Crypto Breeding Games Launch your unique crypto breeding game akin to CryptoKitties, penetrating the gaming market with new revenue streams. Fuel your growth with our secure, scalable, and world-class NFT game development services. Web3 Game Development Stay ahead of the curve in the evolving web3 development space by building decentralized games from the ground up. Our skilled NFT developers excel at creating feature-packed, award-winning Web3 games that push the boundaries of innovation. NFT Metaverse Game Development Immerse players in virtual ecosystems, avatars, and characters through comprehensive metaverse NFT game development services. Showcase rare and unique virtual items, from limited edition skins and weapons to characters that resonate with players. Support and Maintenance Our NFT game development services offer round-the-clock support, including ongoing optimization, feature enhancements, and community engagement strategies. This ensures that your NFT game remains at the forefront of innovation, retaining and engaging gamers.</Text>
      <Text align={'center'} letterSpacing={1} mt={6}>
        Gaming Development Process Embark on an extraordinary journey into the future with our agile mastery, streamlined processes that pave the way for innovation in the NFT gaming development arena.
     </Text>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
        AradChain Technologies’s Semi-Fungible Token Development Services
      </Heading>
      <Text align={'center'} letterSpacing={1}>
        Our SFT development employs the ERC-1155 multi-token standard, enabling each token ID to represent a distinct token type with configurable attributes.
      </Text>
       <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card>
                <CardBody>
                  <Text>Conceptualization Our sketch artists breathe life into our ideas, emphasizing each element's details</Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Text>Enhancement Shading adds a realistic look and feel to the sketch, enhancing its visual appeal.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Text>Modeling We create a mathematical, coordinate-based representation of the gaming environment.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Text> Animation Our animation experts utilize cutting-edge tools to craft 3D animations of the gaming ecosystem.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Text>Coding Our blockchain engineers bring the platform to life while ensuring an unparalleled user experience.</Text>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <Text>Testing Thorough testing is conducted to ensure the gaming platform performs optimally.</Text>
                </CardBody>
              </Card>
      </SimpleGrid>
      <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Explore Our Blogs.</Heading>
      <Text align={'center'} letterSpacing={1} mt={6}>
      Technology Stack We harness cutting-edge technologies and platforms prevalent in the global market while staying abreast of the latest industry trends. Mobile Frontend Backend CMS WordPress Discover NFT Gaming Development Possibilities Experience the future of gaming through our advanced NFT game development services. Unlock captivating gaming experiences that empower players with true ownership of in-game assets, play-to-earn mechanics, and the exploration of interconnected virtual worlds. Arcade Games Action and Adventure Casino and Cards Board Games Player versus Player Battles Sports and Fantasy Leagues Battle Games Play-to-Earn NFT RPG Games Simulation Games Adventure Games Move-to-Earn Games
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