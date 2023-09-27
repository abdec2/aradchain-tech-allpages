import React from "react";
import style from "./solutionExchangeCryptocurrencyExchange.module.css";
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
              <Heading>Cryptocurrency Exchange Development Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
              Tailored Development Services for Crypto Exchanges Empowering You to Create Extraordinary Success Stories The financial industry is undergoing a substantial paradigm shift, driven by factors such as liberal trade policies, customer demands, technological innovation, and macroeconomic forces. Both emerging and established businesses must embrace cryptocurrency to remain relevant as service providers. Crypto exchange software resembles traditional exchanges but is digital, more secure, and not bound by geographical limitations. AradChain Technologies, a leading cryptocurrency exchange development firm, specializes in crafting innovative solutions for progressive businesses seeking to enter the multi-billion dollar industry. Leverage AradChain Technologies's expertise in cryptocurrency exchange platform development to establish a strong foundation for success in the cryptocurrency sector. Acquire advanced yet user-friendly Bitcoin exchange software equipped with cutting-edge features, industry-leading functionalities, and robust security, all tailored to meet your specific requirements. CONNECT VIA WHATSAPP CONNECT VIA TELEGRAM
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
              Features of Cryptocurrency Exchange Software Development Basic
              Level
            </Heading>

            <Text align={'center'} letterSpacing={1}>
              Our forward-looking cryptocurrency exchange development services ensure that your exchange software thrives in the competitive landscape. Whether you're a large fintech institution, a digital currency startup, or a tech investor, we provide comprehensive services tailored to your venture's size. Over 7 Years of Expertise in Blockchain Thorough Testing & Effective Error Handling Technology-Agnostic, First-Rate Deliverables Full Transparency During Development Modern Coding Techniques & Agile Methods In-House Design and Development Proficiency Exceptional Post-Development Support Driven by Mission, Delivering Quality & Customization AradChain Technologies utilizes its wealth of experience and knowledge to provide futuristic solutions that offer a unique customer experience, surpassing expectations. Our team, comprising experienced fintech consultants, certified engineers, and cryptocurrency experts, grasps your business goals to formulate a distinctive blueprint for achieving success. Seize the Growing Trend of Digital Currency with a Crypto Exchange Clone. We assist companies in scaling their operations by offering on-demand exchange software development services and market-ready cryptocurrency exchange clone script solutions. Our diverse portfolio enables us to deliver exchange scripts that exceed market standards. Cut down the time and cost required to launch a crypto exchange using our cryptocurrency trading script solutions. With our experience in building cutting-edge exchanges, we enable you to replicate popular trading platforms, leveraging our enterprise-class scripts. 
              <a href="#" style={{ fontSize: "20px" }}>
                &nbsp;SCHEDULE A FREE DEMO
              </a>
              , Gain a competitive advantage in the industry and swiftly
              establish a revenue stream using our cryptocurrency exchange
              script solutions. CONNECT VIA WHATSAPP CONNECT VIA TELEGRAM
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
              Cryptocurrency Exchange Software Development Process
            </Heading>
            <Text align={'center'} letterSpacing={1}>
              Creating on-demand crypto exchange software requires time and investment. However, the wait is worthwhile when the platform demands high-level customization and integration of complex use cases. The step-by-step transformation from concept to functional exchange software involves:
            </Text>

            <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Spot Trading Module</Text></CardBody></Card>
              <Card><CardBody><Text>Various Advanced Order Types</Text></CardBody></Card>
              <Card><CardBody><Text>Automated Third-Party KYC</Text></CardBody></Card>
              <Card><CardBody><Text>Multichain USDT Integration</Text></CardBody></Card>
              <Card><CardBody><Text>Crypto Swapping</Text></CardBody></Card>
              <Card><CardBody><Text>Referral and Rewards Programs</Text></CardBody></Card>
              <Card><CardBody><Text>Mobile Applications</Text></CardBody></Card>
              <Card><CardBody><Text>News and Announcements Section</Text></CardBody></Card>
              <Card><CardBody><Text>Admin Panel</Text></CardBody></Card>
              <Card><CardBody><Text>Intermediate Level</Text></CardBody></Card>

              <Card><CardBody><Text>Native/Utility Token Integration</Text></CardBody></Card>
              <Card><CardBody><Text>Fiat On/Off Ramp</Text></CardBody></Card>
              <Card><CardBody><Text>External Liquidity Module</Text></CardBody></Card>
              <Card><CardBody><Text>Automated Market Making Bot</Text></CardBody></Card>
              <Card><CardBody><Text>Fiat Payment Gateway</Text></CardBody></Card>
              <Card><CardBody><Text>Airdrop Functionality</Text></CardBody></Card>
              <Card><CardBody><Text>Multi-Lingual Platform</Text></CardBody></Card>
              <Card><CardBody><Text>Admin Support Chat</Text></CardBody></Card>
              <Card><CardBody><Text>Multi-Role Access</Text></CardBody></Card>
              <Card><CardBody><Text>Advanced Level</Text></CardBody></Card>

              <Card><CardBody><Text>Peer-to-Peer Trading Capability</Text></CardBody></Card>
              <Card><CardBody><Text>Staking Module</Text></CardBody></Card>
              <Card><CardBody><Text>Prepaid Cards Support</Text></CardBody></Card>
              <Card><CardBody><Text>Over-The-Counter (OTC) Trading</Text></CardBody></Card>
              <Card><CardBody><Text>Merchant Payment Gateway</Text></CardBody></Card>
              <Card><CardBody><Text>NFT Marketplace Collectibles</Text></CardBody></Card>
              <Card><CardBody><Text>Launchpad Functionality</Text></CardBody></Card>
              <Card><CardBody><Text>Crypto Loans Services</Text></CardBody></Card>
              <Card><CardBody><Text>Copy Trading Feature</Text></CardBody></Card>
              <Card><CardBody><Text>Crypto Betting Module</Text></CardBody></Card>

              <Card><CardBody><Text>User Chat Feature</Text></CardBody></Card>
              <Card><CardBody><Text>Price Alerts</Text></CardBody></Card>
              <Card><CardBody><Text>VIP Account Options</Text></CardBody></Card>
              <Card><CardBody><Text>Lending and Borrowing Support</Text></CardBody></Card>
              <Card><CardBody><Text>Grid Trading Capability</Text></CardBody></Card>
              <Card><CardBody><Text>Margin Spot Trading Module</Text></CardBody></Card>
              <Card><CardBody><Text>Crypto Arbitrage Bot</Text></CardBody></Card>
              <Card><CardBody><Text>Derivatives and Perpetual Futures Trading</Text></CardBody></Card>
              <Card><CardBody><Text>Cryptocurrency Exchange Development</Text></CardBody></Card>
              <Card><CardBody><Text>Participate in the Next-Generation Financial Paradigm</Text></CardBody></Card>

            </SimpleGrid>
            
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