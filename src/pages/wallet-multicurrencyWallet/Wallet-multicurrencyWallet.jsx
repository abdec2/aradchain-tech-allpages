import React from "react";
import style from "./wallet-multicurrencyWallet.module.css";
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
              <Heading>Multicurrency Wallet Development Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Collaborate with Global Leaders for Multi-Currency Wallet Development
AradChain Technologies boasts an exceptionally skilled team specializing in cryptocurrency wallet development. We offer secure and scalable solutions for multi-currency wallets, deployable on your preferred platform. Our approach encompasses diverse industry requirements and project scopes, leveraging top-notch blockchain technology. Each application we create is both secure and scalable, propelling your business objectives. Our integration of captivating designs, coupled with agile development techniques, aims to enhance the user's wallet experience.


            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Security Features of Whitelabel Multi-Currency Wallet
             </Heading>

             <Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Dual-Factor Authentication (1)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Enhanced Two-Factor Authentication</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Employing the safest verification method, dual-factor authentication adds an additional security layer, safeguarding users' personal and financial data. Combining a secure PIN or password with fingerprint or facial recognition grants access to wallet features.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Automated Session Logout (2)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Effortless Automated Session Logout</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    To prevent misuse, users can toggle the session logout feature based on their preferences. In cases of inactivity, the mobile wallet sends notifications to users before initiating session logout.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Comprehensive Threat Protection (1)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Holistic Threat Protection</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Our wallet actively monitors data flow to swiftly detect and address vulnerabilities. Robust security measures are implemented to shield wallets from potential threats.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Wallet Backup (1)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Secure Wallet Backup</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    In the event of technical glitches or failures, digital assets are safeguarded through the wallet backup feature. Users generate a backup phrase, crucial for a seamless backup process.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Email-Based Authentication (1)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Email-Driven Authentication</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Among other security mechanisms, we incorporate email authentication in wallet solutions. After a user generates a withdrawal request, an authorization email is dispatched. Transactions proceed post-approval.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Explore Our Inclusive Multi-Currency Wallet Development Services
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    The digital economy heavily features multi-currency wallets, a segment introducing innovative concepts like multi-currency apps for secure online transactions. As an expanding crypto wallet development company, we stand as your trusted technology ally, armed with extensive experience in the IT domain.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    1 Multi-Currency Wallet Consultation
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Being a well-established firm in multi-currency wallet development, we extend feasible solutions to streamline business processes for enterprises.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    2 Multi-Currency Wallet Development
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    We craft solutions for multi-cryptocurrency wallets, ensuring secure storage and facilitating future transactions in a safe environment. Our experts harness advanced technologies in wallet development.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    3 Deployment
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Beyond employing cutting-edge tools and technologies, we ensure seamless interoperability with various blockchain networks.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Token Encryption & Mining
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    We offer token mining support and store tokens in decentralized databases. Our developers implement robust encryption techniques to thwart hacking attempts.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Connect with AradChain Technologies now and engage in discussions with our Multi-Currency Wallet experts TODAY!
</Heading>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Outstanding Attributes of Our Multi-Currency Wallet
</Heading>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    OTC Assistance (3)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Optimal OTC Support</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    A standout feature of our wallet is OTC trading support. This ensures highly secure transactions with minimal latency for traders.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Support for Multiple Currencies (2)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Versatile Multi-Currency Support</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Our dependable multi-currency wallet solutions cater to Bitcoins and other popular Altcoins. Wallets are tailored to business needs, offering trading facilities as per client requirements.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Push Alerts (2)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Real-time Push Notifications</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Users can activate or deactivate push notifications, receiving transaction-related alerts at their convenience. Notifications cover signals, prices, and marketing activities.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    QR Code Scanner (2)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Efficient QR Code Scanning</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    The integrated QR code scanner expedites instant payments. Users can swiftly make payments at PoS terminals or through online services.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Risk Oversight (2)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Effective Risk Management</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Our wallets offer risk management, detecting illicit wallet addresses and preventing duplicate payments.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Multi-Signature Support (3)
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Enhanced Multi-Signature Feature</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Activate the Multi-Signature function, enabling users to view transactions, authorize them, and access individual recovery options.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Our Multi-Currency Wallet Development Process
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Requirement Analysis</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Thoroughly understanding application requirements
    Assessing features and implementation conditions
    Creating a development roadmap for multi-currency wallets.
</Text>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">Design Phase</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Developing a design prototype, subject to client review</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Incorporating client feedback to refine the design</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Laying out the technical architecture of the application</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Ensuring data protection and privacy compliance.</Text>
    </CardBody>
</Card>
</SimpleGrid>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">Development Stage</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Creating applications using cutting-edge technology</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Subjecting the multi-currency wallet app to rigorous testing and audits</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Rectifying errors to ensure smooth app performance.</Text>
    </CardBody>
</Card>

</SimpleGrid>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">Development Stage</Heading>         
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Creating applications using cutting-edge technology</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Subjecting the multi-currency wallet app to rigorous testing and audits</Text>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <Text>Rectifying errors to ensure smooth app performance.</Text>
    </CardBody>
</Card>

</SimpleGrid>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">Deployment</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>Post-Deployment Phase</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Prioritizing backlogs during updates.</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Continuously updating the app with new features</Text>
    </CardBody>
</Card>

</SimpleGrid>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">Our Unique Offerings:</Heading>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
<Card>
    <CardBody>
        <Text>password (2)</Text>
    </CardBody>
</Card>
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
        <Text>password (2)-2</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Extensive domain knowledge & experience</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>password (2)-3</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Transparent and reliable processes</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>password (2)-4</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>Customizable solutions</Text>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <Text>password (2)-5</Text>
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
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">Why Choose Us for Multi-Currency Wallet Development?</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>
AradChain Technologies stands as a trustworthy IT partner, providing futuristic and enterprise-grade solutions for multi-currency wallet development. Our unparalleled accessibility and support empower businesses in achieving their goals.
</Text>
<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Frequently Asked Questions
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>1. What's the Cost of Multi-Currency Wallet Development?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    The cost of developing a multi-currency wallet is a significant consideration. It hinges on app features and complexity. We tailor the cost estimate to these aspects and offer customization options.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>2. How Long Does Multi-Currency Wallet Development Take?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    The timeline for multi-currency wallet development varies based on project specifics. Our experts can provide an estimated timeframe based on your requirements.
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>3. Do You Prioritize Security in Multi-Currency Wallet Development?</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Security is a paramount concern in our multi-currency wallet development. We implement robust measures to ensure user data and assets are safeguarded.
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    A Peek into Our Blogs
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>White Label Crypto Wallet</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Exploring the Costs of White Label Crypto Wallet Development
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>White Label Digital Identity Wallet</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    A Deeper Dive into White Label Digital Identity Wallets
</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    <strong>Mobile Wallet App Development</strong>
</Text>

<Text align={'center'} letterSpacing={2} marginTop={2}>
    Elevating User Experience through Mobile Wallet App Development Solutions
</Text>

<Heading as="h4" size="lg" letterSpacing={1} my={3} mt={5} mb={3} align="center">
    Our Expertise in Blockchain Technology
</Heading>

<Text align={'center'} letterSpacing={2} marginTop={4}>
    We're ready for a friendly conversation to discuss your business needs, no strings attached.
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