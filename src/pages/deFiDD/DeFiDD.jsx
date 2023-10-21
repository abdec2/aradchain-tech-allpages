import React from "react";
import style from "./deFiDD.module.css";
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
              <Heading>Decentralized Finance DeFi Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Shifting from Traditional Business Models to DeFi Development Have you been grappling with issues like delayed settlement cycles, inefficient price discovery, liquidity constraints, suboptimal decision-making, and uncertainties around underlying assets due to conventional financial approaches? Decentralized Finance (DeFi) Development has the potential to alleviate these challenges.Whether you're a startup or a Fortune 500 company, the decentralized future is within reach through DeFi blockchain development. From enhanced stakeholder control and rapid settlements to improved auditability and reduced counterparty risks, the services offered by a DeFi development company hold immense promise for emerging businesses, propelling them to new heights.Embrace a Larger Audience with Generative NFT Art.AradChain Technologies is here to assist you in creating generative NFTs and deploying them on your chosen blockchain using NFT generator software development. Embark on the journey of building a future-ready generative NFT art marketplace that accommodates various media types such as images, videos, and GIFs. Whether on Solana, Ethereum, or another blockchain of your preference, AradChain Technologies is your comprehensive solution for generative NFT art marketplace development.
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
            Advanced Features of Our NFT Program
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            Harness the power of our feature-rich NFT program to seamlessly integrate generative NFT art into your business offerings.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Advanced Features of Our NFT Program
</Heading>
<Text align={'center'} letterSpacing={1}>
  Harness the power of our feature-rich NFT program to seamlessly integrate generative NFT art into your business offerings.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Effortless Listings
</Heading>
<Text align={'center'} letterSpacing={1}>
  Enable users to effortlessly create and trade their digital assets and collectibles. Our listings feature comes equipped with essential data fields like titles, tags, and descriptions to ensure a smooth process.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Captivating Storefront
</Heading>
<Text align={'center'} letterSpacing={1}>
  Construct an engaging storefront for users, providing a premium user interface adorned with advanced elements such as auctions, price history, and previews, enhancing the overall user experience.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Effective Token Filters
</Heading>
<Text align={'center'} letterSpacing={1}>
  Enhance user experience with efficient token filters, enabling users to swiftly discover NFT generative art that matches their preferences. Filters can sort data based on hot deals, prices, best-sellers, and new items.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Dynamic Bidding
</Heading>
<Text align={'center'} letterSpacing={1}>
  Initiate an e-commerce platform that empowers customers to bid on desired digital assets. Dynamic bidding for generated NFT art enables flexible pricing and auction-driven transactions.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Enhanced Search Capabilities
</Heading>
<Text align={'center'} letterSpacing={1}>
  Offer users comprehensive information about items of interest, allowing swift data sorting based on attributes like images, videos, music, and more.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Seamless Wallet Integration
</Heading>
<Text align={'center'} letterSpacing={1}>
  Provide users with a secure digital wallet for trading, selling, and storing their generated NFT art. Seamlessly incorporate a reliable wallet solution for smooth token submissions.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Ready to Create NFT Art Marketplace Software?
</Heading>
<Text align={'center'} letterSpacing={1}>
  AradChain Technologies empowers you to develop NFT generator software that customizes, creates, and deploys smart contracts to your chosen blockchain. Establish your generative art NFT marketplace, enabling users to mint and sell their unique collections directly from your platform.
</Text>

<Heading as='h2' size='1xl' letterSpacing={2} my={5} textAlign={'center'} mt={7} mb={10}>
<Link to="/contact" target="_blank">
<Button colorScheme="blue" size="lg">HIRE US !</Button>
</Link>
</Heading>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Advantages of NFT Generator Software for Your Business
</Heading>
<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Authenticity & Indivisibility.</strong>
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
  Generate NFT art that preserves its authenticity, as each piece remains indivisible and is secured by copyright. Information verification ensures 100% authenticity, and NFT generative software development supports the entire process.
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Enhanced Liquidity.</strong>
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
  Facilitate swift online trading of generated NFT art, augmenting token liquidity and broadening the pool of potential buyers for these assets.
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Diverse Trading Opportunities</strong>
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
  Empower artists to transform their work into distinctive NFTs, surpassing other forms of digital currencies. NFT generative art leverages advanced trading systems.
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Establishing Scarcity</strong>
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
  Reinvent ownership and exclusivity by exclusively minting NFT generative art on your marketplace. Control information flow and sell digital assets as premium commodities.
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
<strong>Interoperable Excellence</strong>
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
  Generated NFTs retain their uniqueness, making them irreplicable digital assets. Artists can earn revenue on a generative crypto art marketplace that ensures accuracy and authenticity.
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
  Enhanced Programmability
</Text>
<Text align={'center'} letterSpacing={1} mt={5}>
  Similar to other digital collectibles, generated NFT art tokens are fully programmable, opening endless creative possibilities within the design space on the generative NFT art marketplace.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
<strong>Explore Generative Art Today!</strong>
</Heading>
<Text align={'center'} letterSpacing={1} mt={5}>
  Consult AradChain Technologies for NFT generator software or generative art NFT marketplace development and unlock the potential of your business concept.
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Frequently Asked Questions
</Heading>
<Text align={'center'} letterSpacing={1} mt={6}>
  Looking for more information about NFT programs? Find answers below or chat with our support team for further guidance.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong> Where can I find a reputable NFT generative software development company near me?</strong>
</Text>


<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>What is the cost of NFT generator software?</strong>
</Text>


<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>How long does it take to develop customized NFT Programs?</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
 <strong> Can I access a live demo of NFT programs or NFT generator software?</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  A Glimpse of Our Blogs:
</Heading>
<Text align={'center'} letterSpacing={1}>
  Safeguarding DeFi Profits: Guide to Private Key Security
  Navigating DeFi Safely: 9 Ways to Protect Your Private Keys and Secure Your Financial Future
  The rapid growth of cryptocurrencies, blockchain, and DeFi development has brought about exciting opportunities, but it has also highlighted the critical importance of...
  READ MORE
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Blockchain Tech Expertise
</Heading>
<Text align={'center'} letterSpacing={1}>
  We're here for a friendly conversation about your business needs, with no obligations.
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