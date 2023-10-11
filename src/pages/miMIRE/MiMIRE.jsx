import React from "react";
import style from "./miMIRE.module.css";
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
              <Heading>Metaverse In Real Estate</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Metaverse Real Estate Solutions: Building Virtual Realty Markets Crafting transparent virtual real estate marketplaces for seamless virtual property transactions - buy, sell, and trade within the metaverse.VIEW LIVE DEMO REQUEST A FREE DEMOPioneering Metaverse Real Estate Development: Shaping the Virtual Property Landscape.The virtual real estate sector has witnessed exponential growth recently. A Precedence Research report states that the global virtual reality market reached USD 23.92 billion in 2022 and is expected to surge to around USD 187.28 billion by 2032. As the metaverse draws more participants and the demand for virtual experiences increases, the metaverse real estate market is poised for further expansion.At AradChain Technologies, we extend our mission-driven services to empower businesses in establishing their metaverse real estate platforms. Our team of web 3.0 developers and domain experts collaborates to craft immersive platforms fortified with top-tier security and transparency.
            <strong>TALK TO OUR EXPERT</strong>
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
            Highlights of our Metaverse Real Estate Platform

            </Heading>

            <Text align={'center'} letterSpacing={1}>
            Every metaverse real estate platform we create is enriched with features that facilitate virtual property transactions and interactions within the digital realm.

Virtual Property Ownership
Users enjoy the capacity to buy, possess, and manage virtual properties within the metaverse. These properties range from land and structures to homes and various virtual assets.

Real Estate Marketplace
A secure and transparent virtual reality marketplace enables users to buy, sell, and trade virtual properties and assets with fellow users. This fosters a dynamic economic ecosystem within the metaverse.

Social Interaction
Participants can connect and interact with peers within the metaverse, fostering social engagement and community building. Features such as chat, voice communication, and virtual gatherings facilitate meaningful interactions.

Events and Auctions
Metaverse real estate platforms often host a spectrum of events, including auctions, exhibitions, and other activities. Users can participate in these events, enhancing their social and cultural experiences.

Virtual Currencies
Metaverse real estate transactions commonly involve virtual currencies specific to the metaverse platform. These currencies function as mediums of exchange for buying, selling, and trading virtual properties within the metaverse.

Smart Contracts
Secure smart contract integration within metaverse real estate enables transparent, secure, and automated execution of various processes like ownership transfer, rent and lease agreements, and royalty distribution.

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Metaverse Real Estate Platform Development</Heading>
 <Text align={'center'} letterSpacing={1}>
Investment Opportunities
By establishing your metaverse real estate platform, you offer users various investment prospects:

Buy and Hold
An uncomplicated investment approach involves acquiring virtual real estate with the aim of long-term ownership. Similar to physical real estate investment, investors can anticipate appreciation of their virtual assets over time.

Real Estate Development
Participants can buy metaverse land and develop it into virtual properties such as malls, theme parks, or hotels. These properties can be monetized through virtual goods, admission fees, and other revenue streams.

Trading
Investors can engage in trading virtual real estate within the metaverse, akin to trading stocks and financial assets. Digital marketplaces facilitate buying, selling, and trading virtual properties.

Tokenization
Virtual real estate can be tokenized, allowing ownership to be divided into smaller shares that investors can buy and sell. This process enhances market liquidity and empowers investors to diversify portfolios more effectively.

Connect with our domain experts to discuss your business use case.
<strong>TALK TO OUR EXPERTS. </strong>
By partnering with AradChain Technologies, you tap into a team of technical experts with practical experience in delivering end-to-end consulting services.

We exclusively specialize in blockchain technologies. Our focus ensures mastery in one domain.

Our 500+ experts assist in refining your offering, suggesting optimal tech approaches, and even aiding in setting up communities and campaigns.

We deliver tailored products aligned with your target audience. A well-structured roadmap ensures seamless and swift development and deployment.

Our commitment extends beyond product launch. We offer extensive post-delivery services, enabling you to concentrate on growth.
</Text>
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Highlights of our Metaverse Real Estate Platform
            </Heading>
            <Text align={'center'} letterSpacing={1}>
            Every metaverse real estate platform we create is enriched with features that facilitate virtual property transactions and interactions within the digital realm.

Users enjoy the capacity to buy, possess, and manage virtual properties within the metaverse. These properties range from land and structures to homes and various virtual assets.

A secure and transparent virtual reality marketplace enables users to buy, sell, and trade virtual properties and assets with fellow users. This fosters a dynamic economic ecosystem within the metaverse.

Participants can connect and interact with peers within the metaverse, fostering social engagement and community building. Features such as chat, voice communication, and virtual gatherings facilitate meaningful interactions.

Metaverse real estate platforms often host a spectrum of events, including auctions, exhibitions, and other activities. Users can participate in these events, enhancing their social and cultural experiences.

Metaverse real estate transactions commonly involve virtual currencies specific to the metaverse platform. These currencies function as mediums of exchange for buying, selling, and trading virtual properties within the metaverse.
Secure smart contract integration within metaverse real estate enables transparent, secure, and automated execution of various processes like ownership transfer, rent and lease agreements, and royalty distribution.

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Real Estate Development</Heading>

<Text align={'center'} letterSpacing={1} mt={4}>
Participants can buy metaverse land and develop it into virtual properties such as malls, theme parks, or hotels. These properties can be monetized through virtual goods, admission fees, and other revenue streams.
Trading
Investors can engage in trading virtual real estate within the metaverse, akin to trading stocks and financial assets. Digital marketplaces facilitate buying, selling, and trading virtual properties.
Tokenization
Virtual real estate can be tokenized, allowing ownership to be divided into smaller shares that investors can buy and sell. This process enhances market liquidity and empowers investors to diversify portfolios more effectively.
Connect with our domain experts to discuss your business use case.
By partnering with AradChain Technologies, you tap into a team of technical experts with practical experience in delivering end-to-end consulting services.
We exclusively specialize in blockchain technologies. Our focus ensures mastery in one domain.
We deliver tailored products aligned with your target audience. A well-structured roadmap ensures seamless and swift development and deployment.
Our commitment extends beyond product launch. We offer extensive post-delivery services, enabling you to concentrate on growth.

</Text>
    </Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Frequently Asked Questions
</Heading>

<Text align={'center'} letterSpacing={1} mt={5}>
  <strong>How does metaverse real estate ownership function? </strong><br />
  Metaverse real estate ownership relies on blockchain technology for secure and verifiable ownership rights. Users purchase virtual properties using cryptocurrency or digital tokens, with ownership recorded on the blockchain. This ensures transparent and immutable proof of ownership within the metaverse.
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
  <strong>Are there regulations governing metaverse real estate development?</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
  <strong>Can I replicate a real-world city in the metaverse?</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
  <strong>How scalable is a metaverse real estate platform?</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  A Glance at Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Metaverse in the Manufacturing Industry: Role and Future Prospects </strong><br />
  The term “Metaverse” requires no introduction, as it has already woven itself into the fabric of our lives. The unending surge in […]
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Breathing Life into the Metaverse: How AI Empowers NPCs </strong><br />
  Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies have brought a big change in […]
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>How is Metaverse Casino Development Changing the Future of Gambling? </strong><br />
  The Casino- a game of luck that lifted some to great success while leaving others in disappointment as known by many. It […]
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Blockchain Tech Expertise
</Heading>

<Text align={'center'} letterSpacing={1} >
  We're available for a friendly chat to discuss your business needs, obligation-free.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  Our aim is to provide technical support and respond to inquiries or requests.
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