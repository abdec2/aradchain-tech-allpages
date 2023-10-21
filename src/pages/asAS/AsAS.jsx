import React from "react";
import style from "./asAS.module.css";
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
              <Heading>Asset Tokenization</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            AradChain Technologies specializes in empowering asset tokenization platforms with security and resilience. We unveil the potential of digital asset tokenization, which involves converting the value and ownership of assets into digital tokens on a blockchain. These tokens represent fractional or entire ownership of the asset, enabling seamless transfer, trading, and ownership distribution. Asset tokenization transcends geographic barriers, reduces transaction costs, and enhances transparency, offering advantages to asset owners and investors. In today's digital era, it revolutionizes traditional asset interactions, boosting liquidity, accessibility, and efficiency across global markets, spanning real estate, artwork, commodities, and securities. AradChain Technologies, as a pioneering asset tokenization company, leverages its expertise to provide unmatched solutions for diverse clients. Request a free demo and discover the potential of digital asset tokenization.
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
            Empowering Digital Asset Tokenization
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            Embrace the era of digital asset tokenization with AradChain Technologies. Our tailored asset tokenization development services unlock the untapped potential of your assets, facilitating capital acquisition, liquidity enhancement, and broader investor engagement. We specialize in tokenizing a diverse range of assets, including artwork, collectibles, commodities, debt instruments, intellectual property, stocks, equities, investment funds, and real estate. As the optimal asset tokenization company, we streamline the development process to ensure impeccable outcomes.
            </Text>
            
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Diverse Real-World Asset Tokenization Opportunities</Heading>
             <Text align={'center'} letterSpacing={1}>
             We facilitate the tokenization of tangible and intangible assets, opening new realms of revenue generation. Whether it's collectibles, precious metals, financial instruments, real estate, intangible assets, consumables, or more, we offer the expertise and solutions to bring these assets into the digital realm.
             </Text>
             <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
             Modules Enriching Our Asset Tokenization Ecosystem
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            Our asset tokenization ecosystem is built upon integral modules that drive success. From offering management and compliance management platforms to marketplaces, tokenization agents, transfer agents, validators networks, and more, we ensure a world-class user experience that enhances security, compliance, and transparency.
            </Text>
      
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Business Benefits of Digital Asset Tokenization
      
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            AradChain Technologies delivers an end-to-end ecosystem that empowers enterprises with untapped tokenomic potential. Asset tokenization offers augmented liquidity, global market access, operational efficiency, enhanced transparency, fractional ownership, fundraising avenues, asset interoperability, and smart contract integration.
            </Text>

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Lifecycle of a Tokenized Security</Heading>
            <Text align={'center'} letterSpacing={1}>The lifecycle of a tokenized security involves deal structuring, digitization, primary distribution, secondary trading, and post-tokenization management, all streamlined through blockchain and smart contract technologies.</Text>

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Why Choose AradChain Technologies for Digital Asset Tokenization Service?</Heading>
            <Text align={'center'} letterSpacing={1}>With technical expertise, an experienced team, swift development, and full support, AradChain Technologies is your trusted partner for digital asset tokenization. We bring meaningful results to the table and offer comprehensive blockchain solutions.</Text>
            
            
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Insights from Our Blog</Heading>
            <Text align={'center'} letterSpacing={1}>Explore our blog for insights on asset tokenization platforms, the economic empowerment it brings, and the evolution of asset tokenization from physical to digital.
            Get in touch with us for a friendly chat about your business needs, and we're here to offer technical support and address any inquiries.</Text>
      
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