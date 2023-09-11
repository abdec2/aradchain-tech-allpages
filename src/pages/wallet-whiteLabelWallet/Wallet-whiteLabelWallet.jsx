import React from "react";
import style from "./wallet-whiteLabelWallet.module.css";
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
              <Heading>White Label Cryptocurrency Wallet</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            GET IN THE KNOW!
Did you realize that nearly 4 billion individuals are currently utilizing digital wallets, and by 2024, this market's size is projected to surge by an additional 3.6 billion?

Unveil the Potentials of Our Premium White Label Cryptocurrency Wallet
The development of a White Label cryptocurrency wallet follows a step-by-step process, from ideation to deployment. Tailored for blockchain projects, crypto exchanges, DEXs, and investment platforms, these solutions can be launched as desktop wallets, web wallets, and web browser extensions.

Enterprises are on the lookout for avenues to expand their crypto operations and secure a competitive edge. Simultaneously, they seek to save time and effort on wallet development. Investing in a pre-built White Label cryptocurrency wallet is the ideal strategy. With our extensive experience, we excel in crafting custodial solutions, deploying them on trending blockchains. Rigorous testing is conducted to identify vulnerabilities and enhance the wallet's ability to manage diverse cryptocurrencies.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

            </Text>
            <Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    What Sets White Label Cryptocurrency Wallet Development Apart?
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Multi-Signature Crypto Wallet Development
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Enhance wallet security by requiring multiple signatures to authorize transactions, thwarting fraudulent activities and money laundering.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Blockchain Wallet Development
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Our certified developers employ cutting-edge tools to craft integrated wallets deployed on your chosen blockchain. The strong security mechanisms ensure the content remains secure and immutable.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Custom Crypto Wallet Development
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    We specialize in offering bespoke crypto wallet solutions, swiftly developing white-label Bitcoin wallets and more to meet your specific requirements.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Centralized Wallet Development
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Managed by a third party, a White Label centralized wallet enables users to focus on vital business tasks. The platform facilitates transaction authentication and address whitelisting.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Decentralized Wallet Development
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Bestowed with complete asset control, decentralized wallets empower users to manage digital assets independently, free from third-party involvement.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Web3 Wallet Development
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Our top-tier Web3 wallet development services grant access to various currencies like cryptocurrencies, NFTs, tokens, and more. Seamlessly access prominent decentralized applications and engage in token swaps.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    CONSULT OUR EXPERTS
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Unsure about the best wallet solution for your business? Let our consultation guide you!
</Text>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    White Label Wallet Clone Script
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Here are the white-label wallet clones meticulously tailored to meet client needs.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Trust Wallet Clone
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Similar to Trust Wallet, this clone offers secure storage, sending, and receiving of cryptocurrencies, tokens, stablecoins, and NFTs.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Metamask Wallet Clone
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Our clone solution mirrors Metamask's interaction with Ethereum-based blockchain apps, facilitating faster transactions on both web and mobile platforms.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    TRON Link Wallet Clone
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    The TRON link wallet clone simplifies access to TRON blockchain, installable as browser extensions or Android and iOS apps for asset transfers.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Exodus Wallet Clone
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Perform secure crypto storage, exchange, and trading with the Exodus wallet clone. Our platform-compatible clones are customizable to your needs.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Electrum Wallet Clone
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Replicating the Electrum wallet, our solution safeguards Bitcoins with password protection. Users retain private key control and recover wallets via seed phrases.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Launch a Robust, Scalable White Label Clone Script Solution!
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    REQUEST A FREE DEMO
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Advanced Features Integrated into the White Label Crypto Wallet Platform
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Cross-Chain Crypto Swap
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Exchange cryptocurrencies across different blockchains without relying on external exchanges.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Multichain Wallets
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Manage various blockchain networks in one place, enabling seamless crypto management.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Multi-Wallet Support
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Create and manage multiple wallets from a single application, each designated for specific purposes.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    On-Chain Crypto Swap
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Exchange cryptocurrencies directly on the blockchain with the built-in wallet functionality.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Fiat On/Off Ramp
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Transition between cryptocurrencies and fiat seamlessly with the fiat on/off ramp feature.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Multichain DApp Browser
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Explore decentralized applications on different blockchains using the DApp browser.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Real-Time Trading Insights
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Access real-time market data, price charts, and trading analysis for informed decisions.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    NFT Collectibles
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Support NFTs to signify asset or physical item ownership.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Prepaid Cards
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Facilitate payments and top-ups with crypto-loaded prepaid debit cards.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Over-the-Counter Trading
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Engage in trading and profit enhancement without intermediaries.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Wallet Connect
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Enable secure communication between web DApps and mobile crypto wallets.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Chrome Wallet Extension
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Add wallet functionality to web browsers through the Chrome Wallet Extension.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Ledger Wallet Integration
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Integrate with Ledger Hardware wallets for added security.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Peer-to-Peer Trading (P2P)
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Directly trade cryptocurrencies with peers using an Escrow system.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Watch-Only Wallet
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Monitor crypto balance and transactions without private keys via this feature.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Group Transfer/Airdrop
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Simplify sending cryptocurrencies to multiple recipients with the Airdrop feature.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Add Custom Token
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Manually manage tokens not automatically supported by the wallet.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Address Book
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Organize frequently used crypto addresses with the address book feature.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Native Fiat Currency Selection
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Choose native fiat currency and value for conversions.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Referral
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Earn rewards by inviting users through the integrated referral feature.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Security Features Integrated into the Crypto Wallet White Label Solution
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Biometric Authentication
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Double up security with two-factor authentication to thwart hacks and breaches.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Multi-Signature
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Enhance wallet security by requiring multiple signatures for access.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Passcode-PIN Protection
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Protect wallets with a passcode, chosen from private keys or PIN.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Automatic Session Logout
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Ensure security with automatic session logouts during inactivity.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Credit Card Enabled Transactions
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Conduct secure credit card transactions with low latency.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Multi-Coin & Multi-Asset Support
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Support stable coins, cryptocurrencies, ERC-20 tokens, altcoins, and more.
</Text>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    How to Access the White Label Cryptocurrency Wallet for Fund Transfer?
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Accessing a white-label wallet solution is straightforward, following these steps:
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    1. Create an Account
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Select and sign up on your chosen crypto wallet. This generates public (wallet addresses) and private keys (PIN).
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    2. Send Funds
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Enter the recipient's wallet address, specify the cryptos, and input private keys.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    3. Receive Funds
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    Share your wallet's public key or address with senders to receive funds.
</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>
AradChain Technologies is the preferred choice for white-label crypto wallet development, supported by compelling reasons. With nearly a decade of industry experience, we offer more than our competitors:
</Text>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Secure Solutions</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Our solutions prioritize security.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Scalability</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>We ensure scalability.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>No Hidden Costs</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Transparent pricing with no hidden charges.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Constant Communication</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>We maintain consistent communication.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Support and Maintenance</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>We provide ongoing support and maintenance.</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Marketing Campaigns</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>We can assist with marketing campaigns.</Text>
    </CardBody>
</Card>

</SimpleGrid>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Frequently Asked Questions
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>1. What Advantages Does White Label Cryptocurrency Wallet Development Offer?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Crafting a wallet from scratch demands significant effort and time. Conversely, a White Label solution offers a pre-built code, database, and infrastructure. Customize the interface and branding, and you're ready to launch the application under your own name.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>2. What Is the Cost of Developing a White Label Wallet Solution?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    The cost of developing a White Label wallet solution can vary based on your specific requirements and customization needs.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>3. How Long Does Deploying a White Label Wallet Take?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    The deployment timeline for a White Label wallet can vary depending on the complexity of the project and customization requirements.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>4. Do You Implement Security Measures in White Label Wallet Solutions?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Yes, we implement security measures in White Label wallet solutions to ensure the safety of users' assets and data.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}> 
Explore More in Our Blogs
White Label Crypto Wallet
Exploring the Cost of Developing a White Label Crypto Wallet
Table of Contents Introduction Understanding the Essence of White-Label Crypto Wallets In-Depth Market Overview Benefits of a White-Label Crypto Wallet Solution […]

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
        phoneNumber="447778222221"
        accountName="Jennie"
        allowEsc
        allowClickAway
        notification
        notificationSound
        buttonStyle={{
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