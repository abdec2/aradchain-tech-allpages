import React from "react";
import style from "./cCB.module.css";
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
import { Box, Text, ListItem,List ,Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card ,Button,Stack} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Crypto Friendly Banking Solutions</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Cryptocurrency Banking Solutions: Advancing Financial Services with the surging popularity of cryptocurrencies and contactless payments, the interest in establishing crypto banks for broader accessibility is on the rise. Whether you're a bank, financial institution, startup, or established enterprise aiming to venture into the market with your own crypto bank, we take immense pride in offering our comprehensive cryptocurrency banking solutions.AradChain Technologies is a trusted name renowned for its ready-to-use digital banking solution, providing a wide array of financial services, including bank accounts, credit/debit cards, trading, and user-friendly payment options. Leveraging our expertise, we can elevate your business operations and ensure a seamless onboarding experience for your users.Banking Redefined for the Digital Age.Elevate Your Digital Journey with Our White Label Digital Banking Solution
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

            <Text size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Exploring the White Label Banking Platform.Unveil the potential of our cutting-edge white label banking platform to propel your financial institution to new heights. This platform can expedite your market entry, cut costs, and offer an exceptional banking experience to your customers through a user-friendly and mobile-responsive application.
            </Text>

            <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Login</Text></CardBody></Card>
              <Card><CardBody><Text>Effortless Onboarding</Text></CardBody></Card>
              <Card><CardBody><Text>Secure and Convenient</Text></CardBody></Card>
              <Card><CardBody><Text>Streamlined Multiple Logins</Text></CardBody></Card>
              <Card><CardBody><Text>Dashboard</Text></CardBody></Card>
              <Card><CardBody><Text>Payment Processing</Text></CardBody></Card>
              <Card><CardBody><Text>Transiction Completion</Text></CardBody></Card>
              <Card><CardBody><Text>Virtual Cards</Text></CardBody></Card>
              <Card><CardBody><Text>Loan Managment</Text></CardBody></Card>
             </SimpleGrid>
             <Heading as="h2" size="lg" textAlign="center" mt={5}>
  Constructing the Foundation of Our Robust Cryptocurrency Banking App
</Heading>

<Text textAlign="center" mt={5}>
  Surpass your customers' expectations by delivering a feature-rich cryptocurrency banking app built on cutting-edge infrastructure. At AradChain Technologies, we provide a cryptocurrency banking application compatible with both Android and iOS systems, equipped with user-friendly features for both administrators and users.
</Text>

<Heading as="h3" size="lg" textAlign="center" mt={5}>
  What Does Our Cryptocurrency Digital Banking Solution Encompass?
</Heading>

<Text textAlign="center" mt={5}>
  The all-in-one solution for your digital banking requirements
</Text>

<List spacing={3} mt={5} textAlign={'center'}>
  <ListItem>
  <strong>Bank Accounts: </strong>Offer seamless and cost-efficient international transactions between global banks with SEPA IBAN and SWIFT IBAN accounts, supporting multiple currencies.
  </ListItem>
  <ListItem>
  <strong>Debit Cards: </strong>Our cryptocurrency banking solution features a fully-loaded virtual debit card, expediting payments for online and in-store merchants worldwide using cryptocurrencies.
  </ListItem>
  <ListItem>
  <strong>Credit Cards: </strong> With our virtual credit card, enjoy a convenient and secure way to make purchases both online and offline, globally accepted, fortified with robust security measures, and flexible repayment options.
  </ListItem>
  <ListItem>
  <strong>User-Controlled Wallet:</strong> Empower users with complete control over digital assets through a hassle-free wallet for secure and straightforward crypto transactions, complete with private key security.
  </ListItem>
  <ListItem>
  <strong>Remittance: </strong> Embark on swift and seamless remittance with our innovative platform, offering online accessibility, diverse payout options, and dedicated customer support for a seamless experience.
  </ListItem>
  <ListItem>
  <strong>Payments: </strong>Optimize your payment processes with our banking solution, managing invoices, tracking payment statuses, and more in a secure and user-friendly digital environment.
  </ListItem>
  <ListItem>
  <strong>Merchant Payment Gateway: </strong> Our high-performance digital banking solution facilitates various payment modes, including fiat currency, ensuring convenient and instantaneous transactions worldwide.
  </ListItem>
  <ListItem>
  <strong>Cryptocurrency Trading Desk: </strong> Our scalable solution presents advanced trading tools, real-time market data, and secure infrastructure to execute trades and seize market opportunities with confidence.
  </ListItem>
  <ListItem>
  <strong>P2P Transfers: </strong> Our cryptocurrency banking solution simplifies financial interactions, allowing customers to send funds to anyone, anywhere, anytime, with just a few clicks on our user-friendly platform.
  </ListItem>
  <ListItem>
  <strong>Crypto Loans: </strong>With our banking platform, effortlessly use digital assets as collateral to secure loans with customizable and transparent loan terms, coupled with competitive interest rates.
  </ListItem>
  <ListItem>
  <strong>Scan & Pay: </strong>Leverage the ease and speed of scan & pay for contactless payments by scanning QR codes using your smartphone, ensuring convenient and hygienic transactions.
  </ListItem>
  <ListItem>
  <strong>Bill Pay: </strong>Streamline bill payments with the bill pay functionality in our cryptocurrency banking solution, enabling hassle-free electronic crypto payments, complete with real-time payment updates and automated reminders.
  </ListItem>
</List>

<Heading as="h3" size="lg" textAlign="center" mt={5}>
  Elevate Your Banking with the White Label Neo Banking Platform
</Heading>

<Text textAlign="center" mt={5}>
  Bringing your neobank to life is quick and easy with AradChain Technologies's premium white label neo banking platform. Harness the potential of our pre-designed white label neo banking solution, customizable to offer your customers a comprehensive suite of digital financial services tailored to their lifestyles, transforming the way they bank.
</Text>

<Text textAlign="center" mt={5}>
  Bid farewell to lengthy waiting times! Accelerate your banking operations with instant transactions using our neo-banking solution.
</Text>


<Heading as="h3" size="lg" textAlign="center" mt={5}>
  Our Crypto-Friendly Bank Development Roadmap
</Heading>

<Text textAlign="center" mt={5}>
  At AradChain Technologies, we adhere to a comprehensive roadmap that empowers you to stay ahead of the curve and offer advanced financial services to customers in the digital era.
</Text>


<List textAlign={'center'} spacing={3} mt={5}>
  <ListItem>
  <strong>Gather and Analyze Requirements: </strong> Initially, our crypto banking experts grasp your business needs and conduct a thorough analysis of your requirements to offer the optimal solution.
  </ListItem>
  <ListItem>
  <strong>Develop a Roadmap:</strong>Following a meticulous analysis of your business model, our team outlines the entire process and strategy to align with your needs effectively.
  </ListItem>
  <ListItem>
  <strong>Prototype Design:</strong> We commence by creating a prototype that showcases a demo of our concepts through immersive UI/UX designs.
  </ListItem>
  <ListItem>
  <strong>Prototype Approval: </strong>
 Upon completing the prototype, we seek your approval and feedback to finalize our development strategies.
  </ListItem>
  <ListItem>
  <strong>Post-Deployment Services: </strong> Even post-deployment, AradChain Technologies provides top-notch maintenance services, freeing you from concerns about updates and modifications.
  </ListItem>
  <ListItem>
  <strong>Deployment: </strong>After our solution passes quality tests and audits, it is finally deployed as per the committed delivery timeline.
  </ListItem>
  <ListItem>
  <strong>Quality Assurance: </strong>Quality is our priority, and our testing team ensures product security, keeping it free from bugs.
  </ListItem>
  <ListItem>
  <strong>Development: </strong>Once you grant approval, we proceed with execution, leveraging advanced technologies and proficient techniques.
  </ListItem>
</List>

<Heading as="h3" size="lg" textAlign="center" mt={5}>
  Why Choose Us for Cryptocurrency Banking Solutions?
</Heading>

<Text textAlign="center" mt={5}>
  By partnering with AradChain Technologies, you entrust your project to a team of seasoned finance and technical experts with real-world experience in crafting numerous successful cryptocurrency banking ventures.
</Text>


<List textAlign={'center'} spacing={3} mt={5}>
  <ListItem>
    Technical Expertise
  </ListItem>
  <ListItem>
    Experienced Team
  </ListItem>
  <ListItem>
    Swift Development
  </ListItem>
  <ListItem>
    Comprehensive Support
  </ListItem>
  <ListItem>
    Meaningful Results
  </ListItem>
  <ListItem>
    Regulatory Compliance
  </ListItem>
</List>

<Heading as="h3" size="lg" textAlign="center" mt={5}>
  Frequently Asked Questions
</Heading>

<List spacing={3} mt={5} textAlign={'center'}>
  <ListItem>
    What exactly is a crypto bank?
  </ListItem>
  <ListItem>
    What does a white label crypto bank solution entail?
  </ListItem>
  <ListItem>
    What defines neo-banking?
  </ListItem>
  <ListItem>
    Why are modern businesses investing in cryptocurrency banking solutions?
  </ListItem>
  <ListItem>
    How much does your digital banking solution cost?
  </ListItem>
  <ListItem>
    What licensing requirements apply to establishing a banking institution?
  </ListItem>
</List>

<Heading textAlign="center" mt={5}>
  Insightful Blogs at a Glance
</Heading>


<List spacing={3} mt={5} textAlign={'center'}>
  <ListItem>
    White Label Crypto Bank
  </ListItem>
  <ListItem>
    Crypto-Friendly Banking Payment Services
  </ListItem>
  <ListItem>
    Metaverse Digital Banking
  </ListItem>
  <ListItem>
    Our Expertise in Blockchain Technology
  </ListItem>
</List>


            
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