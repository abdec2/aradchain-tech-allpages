import React from "react";
import style from "./l1l2sP.module.css";
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
              <Heading>Polkadot Blockchain Solutions</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Connecting the Dots Across Multitudes of Networks Through Comprehensive Polkadot Blockchain Development Services Initiate a Conversation with Our Experts Polkadot Development Services.AradChain Technologies's Polkadot blockchain development harnesses the power of cross-chain network environments to achieve remarkable transaction throughput without fail. Reach out today to explore our Polkadot application development expertise, which spans public, private, open, and permission-less blockchain networks.Embracing Web 3.0 with Polkadot Blockchain Development.Polkadot's standout feature lies in its capability to seamlessly transfer diverse datasets and tokens across various blockchain networks. This capability is a boon for dApp developers, enabling them to facilitate data transfer between both public and private blockchains.However, managing data transfer between multiple blockchains can be complex without finesse. Leveraging years of experience in developing secure and scalable blockchain platforms, AradChain Technologies has honed its expertise in Polkadot development services.
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


            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Key Components of Polkadot</Heading>

<Text align={'center'} letterSpacing={1}>
    <strong>Relay Chain</strong><br/>
    Safeguarding blockchain security, consensus, and cross-chain compatibility.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Para Chains</strong><br/>
    Individual layer-1 blockchains running in parallel with the main Polkadot blockchain, each with its own sovereign functionality.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Bridges</strong><br/>
    Connecting Para Chains & Para Threads with external blockchains.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Para Threads</strong><br/>
    Para Chains with a pay-as-you-go model, resulting in a more customizable application network.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Polkadot Technology Stack
</Heading>


<Text align={'center'} letterSpacing={1} >
    Substrate, the backbone of Polkadot blockchain, is an open-source framework for rapid construction and deployment of custom blockchains across the Polkadot network.
</Text>


<Text align={'center'} letterSpacing={1} mt={6}>
    WebAssembly (WASM), a high-performance virtual environment, compiles Polkadot's state machine, making Polkadot universally accessible.
</Text>


<Text align={'center'} letterSpacing={1} mt={6}>
    Libp2p, a versatile framework, enables cross-platform peer-to-peer applications, foreseeing it as a standard for future dApps.
</Text>


<Text align={'center'} letterSpacing={1} mt={6}>
    Polkadot runtime environment is developed using Rust, C++, and Golang, enhancing adaptability for developers.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Initiate a Conversation with Our Experts
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Advantages of Polkadot Blockchain Development</strong><br/>
    While existing blockchain solutions have empowered communities, certain limitations have hindered their adoption. One significant limitation was isolated blockchain networks. Polkadot's cross-chain communication resolves this by creating a shard network of interconnected chains, unifying them into an integrated ecosystem.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    AradChain Technologies's Polkadot blockchain consulting services ensure that enterprise transactions can occur simultaneously across networks and systems. Beyond exceptional communication, this translates to faster response times compared to existing networks.
</Text>

<Text  align={'center'} letterSpacing={1} mt={6}>
    <strong>Benefits at a Glance</strong><br/>
</Text>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10} >
              <Card><CardBody><Text>Exceptional Security Mode</Text></CardBody></Card>
              <Card><CardBody><Text>Trustworthy Consensus Algorithm</Text></CardBody></Card>
              <Card><CardBody><Text>Transparent On-Chain Governance</Text></CardBody></Card>
              <Card><CardBody><Text>Heterogeneous Sharding</Text></CardBody></Card>
              <Card><CardBody><Text>Parallel Processing</Text></CardBody></Card>
              <Card><CardBody><Text>Enhanced Scalability</Text></CardBody></Card>
              <Card><CardBody><Text>Community Driven</Text></CardBody></Card>
              <Card><CardBody><Text>Cross-Chaining</Text></CardBody></Card>
</SimpleGrid>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Why Choose AradChain Technologies for Polkadot Development?
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    AradChain Technologies Solutions stands as a prominent blockchain consulting firm with an impressive clientele across various sectors. With over 100 successful blockchain implementations, Polkadot has naturally become our immediate focus. We firmly believe that Polkadot's significantly improved transaction throughput rates and smart contract functionalities will position it among the top 3 blockchain networks globally.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    As DeFi continues to grow, Polkadot emerges as a pivotal factor in network infrastructure readiness for inter-blockchain communications. This trend, pioneered by Polkadot, will likely be adopted by other blockchains in the near future.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    At AradChain Technologies, we amalgamate our blockchain expertise with hands-on experience in constructing full-scale blockchains, achieving scalable and secure Polkadot development solutions.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Polkadot Blockchain Development</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Meaningful Outcomes</strong><br/>
    We generate tangible impact, ensuring you derive value from your investments.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Rapid Development</strong><br/>
    Our customized products cater to your target audience. A cohesive roadmap ensures swift development and deployment.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Complete Support</strong><br/>
    Our commitment extends beyond product launch. We offer comprehensive post-delivery services so you can concentrate on growth.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Expert Team</strong><br/>
    Our team of 500+ experts assists in refining your offerings, suggesting optimal tech approaches, and facilitating community setup and campaigns.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    By partnering with AradChain Technologies Solutions, you can rely on a team of financial and technical experts who can assist you in rapidly launching your crypto wallet.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Engage Our Services</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Highlighted Blogs
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    Explore our blog for insights into blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Metaverse in the Manufacturing Industry: Role and Future Prospects</strong><br/>
    The concept of the Metaverse needs no introduction, as it has seamlessly woven itself into our lives. The relentless surge in its...
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>AI Empowers NPCs: Breathing Life into the Metaverse</strong><br/>
    Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies...
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Getting Started with White Label Crypto Banking Platform</strong><br/>
    When opportunity knocks, we seek quick and easy ways to leverage it. In the domain of cryptocurrencies and blockchain...
    <br/><strong>READ MORE</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Blockchain Tech Expertise
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    We are available for a friendly chat to discuss your business needs, without obligation.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Our commitment to providing technical support ensures we're here to assist with inquiries and requests.</strong>
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