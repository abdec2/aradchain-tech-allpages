import React from "react";
import style from "./l1l2sC.module.css";
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
              <Heading>Cardano Blockchain Solutions</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Empowering 3rd generation blockchain development for enhanced scalability, interoperability, and sustainable decentralization experiences.
            Cardano Development,Swift, Scalable & Eco-Friendly Dapps.Cardano, an open-source blockchain, operates on a rigorous 'peer-review' process led by researchers, scientists, and domain experts. Cardano blockchain development leverages the expertise of an aware community of academic programmers, ensuring a sustainable network.Distinctive Features of Cardano Blockchain DevelopmentCardano pioneered the Proof-of-Stake (PoS) consensus mechanism through the Ouroboros protocol. The PoS network engages validators who ensure its integrity. Cardano's blockchain development services facilitate the creation of both fungible and non-fungible tokens, offering multi-asset capabilities, scalability, interoperability, and a secure environment for token development.Unlike traditional nodes replicating individual blockchains, Cardano's blockchain optimizes node numbers by assigning transaction validation to different leaders. Consequently, the leader node transfers transactions to the primary network.Structured in 'Eras,' all Cardano development phases adhere to research-based, peer-reviewed, and evidence-backed methodologies. This robust foundation shapes the future of both the blockchain network and the Ada token.
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
    How Does Cardano Dapp Development Tackle Key Challenges?
</Heading>

<Text align={'center'} letterSpacing={1}>
    <strong>Proof-of-Stake (PoS)</strong><br/>
    Mitigating Environmental Concerns<br/>
    The Ouroboros protocol ensures network security and comprehensive decentralization, empowering users with complete ownership and exceptional security. PoS is significantly more energy-efficient than conventional alternatives.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Recursive Internetwork Architecture (RINA)</strong><br/>
    Enabling Cross-Chain Interactions<br/>
    Previously, seamless cross-chain transactions in cryptocurrencies necessitated high-fee intermediaries. Cardano's RINA addresses this challenge, marking a significant advancement.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Layered Architecture</strong><br/>
    Alleviating Network Congestion<br/>
    Conventional platforms operate on a single layer, leading to sluggish transactions, network congestion, and elevated fees. Cardano employs the CSL (Cardano settlement layer) for peer-to-peer transactions and the CCL (Cardano computational layer) to ensure security and frame network objectives.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Request a Demo on Our Cardano dApp Development.</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>GET IN TOUCH</strong><br/>
    With AradChain Technologies: Tailored & On-Demand Cardano Dapp Development<br/>
    AradChain Technologies extends comprehensive blockchain development services for effective, self-sustaining blockchain operations. We craft Cardano-compatible blockchain cloud services furnished with tools, functions, and security protocols catering to diverse enterprises.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Cardano DApp Development
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    Construct high-performing dApps on Cardano across sectors like finance, academia, supply chain, real estate, and more. This is just a glimpse of the possibilities; there's much more to explore.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Cardano Smart Contract Development (Plutus)</strong><br/>
    Proficient in Plutus, the programming interface based on Haskell and the cornerstone of Cardano's smart contract development. We offer assistance in writing contract logics for transparent policies and governance within the network.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Cardano Token Development (Native Tokens)</strong><br/>
    Full-stack ADA token development services for peer-to-peer transactions catering to various business scenarios. Our expertise expedites dApp launches.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Cardano Integration Services (Rosetta)</strong><br/>
    Seeking to integrate Cardano into existing websites, apps, or services? Our crypto specialists maximize the potential of this third-gen blockchain, offering sustainability, interoperability, and scalability.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Cardano Metaverse Development</strong><br/>
    Leverage the potential of metaverse development on Cardano to create immersive user experiences in the virtual realm.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Cardano DeFi Development</strong><br/>
    Explore Cardano DeFi development services in the Marlowe environment, focusing on modeling financial policies in contracts. We support various DeFi applications, including borrowing, lending, staking, and more.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Cardano Wallet Development (Daedalus)</strong><br/>
    Forge Cardano wallets that facilitate transactions, storage, and ADA delegation. The Daedalus wallet allows you to operate a full blockchain node, ensuring the security and transparency of your Cardano blockchain.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>NFTs & NFT Marketplaces</strong><br/>
    Harness the potential of NFT development on Cardano by launching your NFT marketplace. Our services encompass smart contract development, UI design, feature integration, auditing, client testing, and marketplace launch. Cardano's parameters make it ideal for NFT development.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Cardano Exchange Development</strong><br/>
    Construct high-throughput exchange platforms on the Cardano blockchain. Our expertise in exchange deployment empowers financial institutions to launch products seamlessly.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Request a Free Demo</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Advantages of Cardano Blockchain Development
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Swift Transactions</strong><br/>
    Offers over 250 transactions per second, contrasting Ethereum's 15.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Affordable Gas Fees</strong><br/>
    Average Cardano transaction costs approximately 0.1 ADA, in comparison to Ethereum's $15.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Decentralization Excellence</strong><br/>
    Ouroboros permits anyone to become a node validator. Currently, Cardano boasts over 1500 validator pools.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Eco-Friendly Approach</strong><br/>
    Cardano's PoS mechanism consumes 99% less electricity than other blockchains.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Cross-Chaining Capability</strong><br/>
    Cardano aims to enable cross-chain transfers through side chains, streamlining transactions.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Research-Based Foundation</strong><br/>
    All Cardano research and technical specifications are publicly accessible, ensuring transparency.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Consult Our Experts</strong><br/>
    Empowering the Cardano Development Movement with AradChain Technologies<br/>
    AradChain Technologies Solutions, a global blockchain consulting leader, boasts a diverse customer base spanning various sectors. With over 100 blockchain implementations, Cardano holds our immediate attention. We believe Cardano's enhanced transaction throughput rates and smart contract functionalities will position it among the world's top three blockchains.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Technical Excellence
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Our exclusive focus is on blockchain technologies. We excel at one thing.</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Expert Team</strong><br/>
    Our team of 500+ experts refines your offerings, recommends optimal tech approaches, and assists with community setup and campaigns.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Rapid Development</strong><br/>
    We deliver tailored products to your target audience. A coherent roadmap ensures accelerated development and deployment.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Comprehensive Support</strong><br/>
    Our commitment extends beyond product launch. We offer extensive post-delivery services, allowing you to concentrate on growth.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Meaningful Outcomes</strong><br/>
    We create tangible impacts, ensuring substantial value from your investments.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Experience our proficiency in custom blockchain app development.</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Connect on WhatsApp Connect on Telegram</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    A Glimpse of Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>White Label Crypto Wallet</strong><br/>
    Exploring the Costs of White Label Crypto Wallet Development<br/>
    Discover the essence of white-label crypto wallet development, dive into detailed market overviews, and explore the benefits of this solution.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>White Label Digital Identity Wallet</strong><br/>
    Unveiling the Realm of White Label Digital Identity Wallets<br/>
    Delve into the world of white-label digital identity wallets, explore their market significance, and learn how they benefit businesses.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>Mobile Wallet App Development</strong><br/>
    Enhancing User Experience through Mobile Wallet App Development<br/>
    Explore the significance of mobile wallet app development in enhancing user experience and empowering businesses.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Explore Our Blockchain Expertise
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>We're available for friendly chats to discuss your business needs without obligation.</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
    <strong>We're committed to assisting you with technical support, addressing inquiries, and fulfilling requests.</strong>
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