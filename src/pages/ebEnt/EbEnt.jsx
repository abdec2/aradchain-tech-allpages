import React from "react";
import style from "./ebEnt.module.css";
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
              <Heading>Blockchain Solutions for the Media and Entertainment Industry</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Combat Content Piracy and Enhance Visibility in Content Creation and Distribution.Blockchain in Media and Entertainment: Embracing a New Era.The media and entertainment sector is grappling with the commoditization of content and rampant piracy of intellectual property (IP). Today, consumers often access digital content freely, showing reluctance to subscribe to premium services. Moreover, copyright violations further exacerbate the challenges. The rise of new consumption models and streaming subscriptions has only partially addressed revenue leakage. These inefficiencies present a compelling case for blockchain adoption within the industry. Blockchain in media and entertainment can help curtail IP infringement, provide transparency on content ownership, and enable monetization of copyrighted assets through smart contracts.
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
            Impact of Blockchain in the Media Landscape 
            </Heading>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Transforming Media and Entertainment with Blockchain</Heading>

<Text align={'center'} letterSpacing={1}>
    The integration of blockchain in media and entertainment can yield significant transformations by enabling the following:
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Empower Copyright Owners</strong><br/>
    Blockchain minimizes reliance on platform providers, content aggregators, and royalty collection associations, empowering copyright owners.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Decentralize Payments</strong><br/>
    Blockchain decentralizes payment collection and advertising revenues, resulting in cost-efficient transactions and automated revenue distribution through smart contracts.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Enhance Transparency</strong><br/>
    The decentralized nature of blockchain enhances transparency by tracing the provenance and lifecycle of assets.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    Harness the potential of blockchain for the entertainment sector and reap the rewards.
</Text>


<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Blockchain Use Cases in the Entertainment Industry
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Blockchain in Media</strong><br/>
    Revolutionize Content Pricing<br/>
    Blockchain streamlines the distribution and monetization of bite-sized content, empowering copyright owners to monitor material usage and receive fair profits accurately.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Blockchain for Media</strong><br/>
    Direct-to-Fan Sales<br/>
    Artists can directly sell digital music or videos to fans, bypassing intermediaries like record labels. Revenues from music streaming, whether from ads or paid content, can be distributed more equitably.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Blockchain Development for Media and Entertainment</strong><br/>
    Efficient Royalty Distribution<br/>
    Blockchain optimizes royalty distribution, offering a music directory with digital music files linked to content creators' identities. Smart contracts define artist compensation and sales proceeds distribution.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Blockchain in Media & Entertainment</strong><br/>
    Consumer-to-Consumer Sales<br/>
    Blockchain's transparency facilitates peer-to-peer content distribution, creating new business models like consumer-to-consumer content marketing. Legally sharing paid content generates extra revenue for copyright holders.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Blockchain for the Entertainment Industry</strong><br/>
    Seamless Content Consumption<br/>
    Blockchain streamlines DRM (Digital Rights Management) systems, tracking transactions and consumption on the blockchain and automatically initiating payments as per smart contract terms.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>What's Your Business Use Case?</strong><br/>
    Connect with our subject matter experts to transform your use case into a remarkable product.
</Text>


<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Why Choose Us for Blockchain Development in Media and Entertainment
</Heading>

<Text align={'center'} letterSpacing={1} mt={4}>
    Partnering with AradChain Technologies guarantees access to a team of technical experts with hands-on experience in delivering comprehensive blockchain solutions.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Technical Prowess</strong><br/>
    We are exclusively dedicated to blockchain technologies, excelling in this field.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Expert Team</strong><br/>
    Our team of 500+ experts refines your offerings, recommends optimal tech strategies, and supports community and campaign setups.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Rapid Development</strong><br/>
    Tailored products for your target audience. A coherent roadmap ensures smooth and accelerated development and deployment.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Complete Support</strong><br/>
    Our commitment extends beyond product launch. We offer extensive post-delivery services to allow you to concentrate on growth.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Meaningful Outcomes</strong><br/>
    We create tangible impacts, ensuring value generation from your investments.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Explore Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1} mt={4}>
    Delve into our blog for insights into blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
    <strong>Blockchain & AI: Top Use Cases and Barriers to AI Adoption</strong><br/>
    Explore emerging blockchain use cases in real estate.
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
    <strong>Explore Emerging Blockchain Use Cases in Real Estate</strong><br/>
    Learn about blockchain development for the beauty industry and its potential impact.
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
    <strong>Blockchain Development for the Beauty Industry: A Boon or Bane?</strong><br/>
    Explore blockchain & AI: top use cases and barriers to AI adoption.
    <br/><strong>READ MORE</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Blockchain Tech Expertise
</Heading>

<Text align={'center'} letterSpacing={1}>
    We're here for a friendly chat to discuss your business needs, obligation-free.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Count on us for technical support, inquiries, and requests.</strong>
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