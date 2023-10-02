import React from "react";
import style from "./deFiDL.module.css";
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
              <Heading>DeFi Lottery Platform Development</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
          <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  The Imperative for DeFi Lottery System Development
</Heading>

<Text align={'center'} letterSpacing={1}>
  The worldwide lottery industry, worth billions, has been a lucrative realm for both issuers and participants since its inception. This extensive potential has garnered considerable attention globally. Evolving from offline formats to digital platforms, the lottery sector has adapted over time.
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


<Text align={'center'} letterSpacing={1} mt={5}>
  However, the traditional lottery landscape suffers from inefficiencies that erode trust between players and platform operators. Centralized in nature, the conventional lottery lacks transparency in all phases – issuance, purchase, draw, cashing, and fund usage. Further woes include:
</Text>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
  <Card>
    <CardBody>
      <Text>Immutable</Text>
    </CardBody>
  </Card>
  <Card>
    <CardBody>
      <Text>Trustworthy</Text>
    </CardBody>
  </Card>
  <Card>
    <CardBody>
      <Text>Transparent</Text>
    </CardBody>
  </Card>
  <Card>
    <CardBody>
      <Text>Democratic</Text>
    </CardBody>
  </Card>
</SimpleGrid>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Blockchain: Revolutionizing the Lottery Landscape
</Heading>

<Text align={'center'} letterSpacing={1}>
  Disruptive blockchain technology and smart contracts offer potential solutions to traditional lottery issues.
</Text>

<Text align={'center'} letterSpacing={1}>
  Blockchain's four core attributes redefine the conventional lottery model:
</Text>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
  <Card>
    <CardBody>
      <Text>Immutable</Text>
    </CardBody>
  </Card>
  <Card>
    <CardBody>
      <Text>Trustworthy</Text>
    </CardBody>
  </Card>
  <Card>
    <CardBody>
      <Text>Transparent</Text>
    </CardBody>
  </Card>
  <Card>
    <CardBody>
      <Text>Democratic</Text>
    </CardBody>
  </Card>
</SimpleGrid>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Leverage our knowledge and expertise to journey towards a decentralized lottery realm.
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong style={{ marginTop: '4rem' }}>Carefully Curated DeFi Lottery Development Services</strong>
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
  Optimize your lottery business by migrating processes – from ticket sales to prize allocation – onto the blockchain. Achieve transparency, security, and fraud prevention. At AradChain Technologies Solutions, we offer comprehensive DeFi lottery development services for startups and established firms looking to launch decentralized lottery platforms. Leveraging blockchain's decentralization and tamper-proof properties, along with smart contract automation, we create lottery platforms that enable seamless data sharing, transparent processes, real-time oversight, and trustworthy outcomes. Unlock the business potential of DeFi lottery platforms with our expertise. Expedite your development journey and take the lead.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  TALK TO OUR EXPERTS
</Heading>
<Heading as='h3' size='lg' letterSpacing={1} my={4} textAlign={'center'} mt={8} mb={8}>
  Technical Expertise
</Heading>
<Text textAlign={'center'}>
  Our sole focus is on Blockchain technologies, and we excel in it.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={4} textAlign={'center'}>
  Expert Team
</Heading>
<Text textAlign={'center'}>
  Our team of 500 experts assists in refining your offering, suggesting optimal tech approaches, and even setting up communities and campaigns.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={4} textAlign={'center'}>
  Agile Development
</Heading>
<Text textAlign={'center'}>
  Tailored products for your target audience with a structured roadmap for seamless development and deployment.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={4} textAlign={'center'}>
  Comprehensive Support
</Heading>
<Text textAlign={'center'}>
  Our commitment extends beyond product launch, providing post-delivery services to support your growth.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={4} textAlign={'center'}>
  Tangible Impact
</Heading>
<Text textAlign={'center'}>
  We ensure tangible value creation, making certain you reap the benefits of your investment.
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