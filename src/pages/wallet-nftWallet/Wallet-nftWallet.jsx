import React from "react";
import style from "./wallet-nftWallet.module.css";
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
import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card } from "@chakra-ui/react";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>NFT Wallet Development Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            How Secure are Our NFT Wallet Services?NFTs are renowned for their authenticity, integrity, and immutability, making them impervious to hacking and often utilized as collateral. Security is of paramount importance to our NFT wallet development professionals, who meticulously incorporate it into our solutions. As an esteemed NFT wallet development company, our blockchain experts possess a wealth of domain knowledge and technical expertise. They adeptly craft robust and scalable NFT wallets from the ground up. Moreover, our experts stay abreast of the latest advancements in the crypto sector, seamlessly integrating them into our wallet solutions. Count on us for a comprehensive range of crypto-related services, including NFT wallet development, NFT marketplace creation, NFT desktop app development, and much more. Our globally acclaimed wallet development services testify to our dedication.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
             Varieties of NFT Wallets
            </Heading>
            <Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Custodial Wallets (1)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Custodial Wallet</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Custodial NFT wallets entrust a third party with storing credentials such as assets, coins, tokens, and private keys on their servers. Users access the wallet by logging in for transactions.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Non-Custodial Wallets (1)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Non-Custodial Wallet</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Non-custodial wallets offer users complete control over their funds. Users bear the responsibility of safeguarding their keys and confidential data, without involving third parties.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Hot Wallets (1)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Hot Wallet</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Hot wallets, including desktop and mobile apps, facilitate buying, selling, and exchanging NFTs. These NFTs are accessible online, and tampering with the integrated security measures proves challenging.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Distinctive Features of Our White Label NFT Wallet
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Support Across Multiple Platforms (2)</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Multi-Platform Assistance
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Cross-Chain Functionality</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Cross-Chain Compatibility
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Compatibility Across Multiple Devices (2)</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Device Flexibility
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Enhanced Security (2)</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Heightened Security
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Integration with Crypto Exchange API (2)</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Crypto Exchange Integration
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Fiat Conversion with Credit Card (2)</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    FIAT Conversion via Credit Card
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Our NFT Wallet Development Process
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Requirement Analysis</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Thoroughly understanding and assimilating application requirements
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Assessing feature necessities and implementation criteria
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Creating a development roadmap detailing the NFT wallet creation process
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Designing</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Formulating a Smart Contract application document
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Illustrating data flow through diagrammatic representation
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Designing the technical architecture of the NFT wallet app
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Enforcing data protection and privacy compliance protocols
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Development</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Utilizing cutting-edge technology to craft applications
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Subjecting the NFT app to rigorous testing and audits
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Rectifying errors to ensure seamless app performance
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Deployment</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Launching the NFT wallet onto the main network
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Post-Deployment</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Continuously updating the application with new features
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Prioritizing backlog tasks during the updating process
</Text>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center"> Our Unique Offerings:</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Robust infrastructure</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Cost-effective solutions</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Expert development team</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Extensive domain knowledge & experience</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Transparent and reliable processes</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Customizable solutions</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Timely and quality service delivery</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Budget-friendly project options</Text>
    </CardBody>
</Card>
</SimpleGrid>
<Text align={'center'} letterSpacing={2} marginTop={4} fontWeight={800}><strong>Why Opt for Our NFT Wallet Development?</strong></Text>
<Text align={'center'} letterSpacing={2} marginTop={2}>Our NFT wallet development services are renowned for their quality and reliability. We have a team of highly skilled and experienced blockchain developers who are well-versed in the latest technologies and tools. Our experts are well-versed in the intricacies of the crypto sector, enabling them to create cutting-edge NFT wallets. We provide a wide range of services, including NFT wallet development, NFT marketplace creation, NFT desktop app development, and much more. Our NFT wallet development services are renowned for their quality and reliability. We have a team of highly skilled and experienced blockchain developers who are well-versed in the latest technologies and tools. Our experts are well-versed in the intricacies of the crypto sector, enabling them to create cutting-edge NFT wallets. We provide a wide range of services, including NFT wallet development, NFT marketplace creation, NFT desktop app development, and much more.</Text>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Frequently Asked Questions
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Is Security Ensured in NFT Wallets?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    NFT wallets enjoy heightened security due to their private key-based access, making them resilient to online attacks. Only the authorized private key owner can access the wallet.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>What's the Cost of Developing an NFT Wallet?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Cost varies based on complexity and requirements.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Can Multiple Cryptocurrencies be Stored in an NFT Wallet?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Absolutely, NFT wallets support multi-currency storage.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>How Long Does NFT Wallet Development Take?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    The timeline for NFT wallet development varies based on project specifics. Our experts can provide an estimated timeframe based on your requirements.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    A Glimpse into Our Blogs
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>White Label Crypto Wallet</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Navigating the Expenses of Constructing a White Label Crypto Wallet
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>White Label Digital Identity Wallet</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Deepening the Understanding of White Label Digital Identity Wallets
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Mobile Wallet App Development</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Elevating and Empowering User Experience through Mobile Wallet App Development Solutions
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Our Blockchain Tech Proficiency
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    We're available for a friendly conversation to discuss your business needs, no strings attached.
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