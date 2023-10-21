import React from "react";
import style from "./exchangeWhiteLabelExchange.module.css";
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
import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card ,Button,Stack} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";

const About = () => {
  // console.log(data.aboutStatsData)
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>White Label Crypto Exchange Development Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
           <strong>WORTH NOTING!</strong>  As per the "Crypto Market Sizing" report by Imarc Group, the global cryptocurrency market reached an estimated value of $2,019 billion in 2022 and is projected to grow at a CAGR of 11.7%, reaching approximately $4,008 billion by 2028.
              White Label Cryptocurrency Exchange is your Gateway to Competitive Edge in the Crypto Realm With an ever-increasing number of users globally and a consistently rising adoption rate in recent years, cryptocurrency has surpassed its status as a mere buzzword. The expanding market capitalization, influential newcomers in the crypto domain, and the limitless possibilities introduced by distributed ledger technology all contribute to its exponential popularity. This widespread acceptance of digital currency creates vast opportunities for exchange businesses.
              White label cryptocurrency exchange development provides businesses with a strategic advantage, offering a quick, straightforward, and cost-effective way to launch digital asset trading software. AradChain Technologies offers a top-notch pre-built crypto trading platform with a customizable front-end and a deployable backend. Initiate your crypto trading venture efficiently using a white label cryptocurrency exchange script, bolstered with exceptional features, an appealing user interface, and robust security.
           </Text>
           <Link to="https://t.me/aradchain" target="_blank">
              <Text textAlign={'center'} mt={4}>
                <Button
                  size={window.innerWidth <= 680 ? "xs" : "md"} // Check the window width and change button size accordingly
                  rightIcon={<MdCall />}
                  colorScheme="telegram"
                >
                  Connect on Telegram
                </Button>
                <Link to="https://wa.me/+447432284026" target="_blank">
                <Button
                  ml={5}
                  size={window.innerWidth <= 680 ? "xs" : "md"} // Check the window width and change button size accordingly
                  rightIcon={<MdCall />}
                  colorScheme="whatsapp"
                >
                  Connect on Whatsapp
                </Button>
              </Link>
            
                </Text>
              
              </Link>
             

            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            CONNECT WITH OUR EXPERTS
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            A Ready-to-Market White Label Crypto Exchange AradChain Technologies specializes in crafting market-ready white label crypto trading platforms for forward-thinking businesses aiming for success in the cryptocurrency market. White label crypto exchange development significantly reduces costs. The factors influencing the cost of white label crypto exchange solutions include
              </Text>
            

            <SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card>
                <CardBody>
                  <Text>Spot Trading Module</Text>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <Text>Various Advanced Order Types</Text>
                    </CardBody>
                </Card>

<Card>
  <CardBody>
    <Text>Automated Third-Party KYC</Text>
  </CardBody>
</Card>

<Card>
  <CardBody>
    <Text>Multichain USDT Integration</Text>
  </CardBody>
</Card>

<Card>
  <CardBody>
    <Text>Crypto Swapping</Text>
  </CardBody>
</Card>

<Card>
  <CardBody>
    <Text>Referral and Rewards Programs</Text>
  </CardBody>
</Card>

<Card>
  <CardBody>
    <Text>Mobile Applications</Text>
  </CardBody>
</Card>

<Card>
  <CardBody>
    <Text>News and Announcements Section</Text>
  </CardBody>
</Card>

<Card>
  <CardBody>
    <Text>Admin Panel</Text>
  </CardBody>
</Card>

<Card>
  <CardBody>
    <Text>Intermediate Level</Text>
  </CardBody>
</Card>

            </SimpleGrid>
            <Text align={'center'} letterSpacing={2} marginTop={4}>
            Moreover, the expertise, experience, and location of the white label cryptocurrency exchange development company also impact the cost. Contact AradChain Technologies's experts to tailor a future-proof digital asset exchange to your specific budget and timeline.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>White Label Crypto Exchange Software:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our flagship white label cryptocurrency exchange script is equipped with a variety of leading features and functionalities, including:</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>High Transaction Volume Capability:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our crypto white label exchange processes up to 100,000 transactions per second, ensuring world-class performance with high throughput.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Robust Trading Engine:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Featuring a potent trading engine, our exchanges enable seamless execution of buy/sell orders with minimal latency, supporting various order types.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>KYC and AML Integration:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Geographically-based KYC/AML processes prevent unauthorized users from accessing the platform, enhancing security and aiding large withdrawal requests.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Support for 500+ Cryptocurrencies & Fiat:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our white label exchange accommodates over 500 cryptocurrencies and supports fiat transactions, facilitating multi-currency trading on a single platform.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Automated Trading:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our dynamic bot trading module empowers users to capitalize on market opportunities round the clock, ensuring continuous trading and order book fulfillment.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Referral and Reward Programs:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our white label crypto trading platform features well-designed referral and reward programs, allowing users to earn rewards by bringing in new users.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>High Liquidity at All Times:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>With external liquidity options, our exchange ensures a robust order book, enabling seamless trade execution across various market conditions.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Staking Module:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>The staking feature lets users lock funds and earn additional incentives, enhancing liquidity and platform security.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Payment Gateway Integration:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our exchange supports multiple payment methods, facilitating instant transactions for a broader customer base.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Enterprise-Grade Multi-Cryptocurrency Wallet:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Equipped with a secure multi-currency wallet, our exchange ensures safe storage of digital assets using elliptic curve and multi-signature technology.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Advanced Admin Console:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our robust admin dashboard provides comprehensive control over the platform and funds, ensuring effective management.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Advanced Chart Tools:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our white label bitcoin exchange offers user-friendly chart tools, enabling users to devise trading strategies with ease.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Security Features of White Label Crypto Currency Exchange Script:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>We prioritize institutional-grade security in our trading platforms, incorporating features such as:</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Token-Based HTTP Authentication:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Token-based mechanisms like OAuth ensure secure user authentication through token-based HTTP authentication.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Data Encryption:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Data encryption safeguards user credentials and sensitive data from unauthorized access.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Jail Login:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>The jail login feature temporarily blocks login attempts after multiple failed tries, enhancing security against unauthorized access.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Two-Factor Authentication (2FA):</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our white label bitcoin exchange includes 2FA for added login security, minimizing unauthorized access risks.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Anti-Denial of Service (DoS) Protection:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Anti-DoS mechanisms protect the platform from a surge of requests that could disrupt its functionality.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Anti-Distributed Denial of Service (DDoS) Protection:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Anti-DDoS measures shield the platform from attacks by multiple connected devices aiming to disrupt services.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Cross-Site Request Forgery (CSRF) Security:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Token-based security mechanisms prevent unwanted actions from authenticated users.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Server-Side Request Forgery (SSRF) Protection:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>SSRF protection guards against attacks from authorized internal applications.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>HTTP Parameter Pollution Protection:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Protects the network against web attacks that manipulate HTTP requests to extract hidden data.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Accelerate the process of establishing a profitable revenue stream with our white label cryptocurrency exchange script:</Heading>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Advantages of White Label Crypto Exchange Software Script:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Leveraging our turnkey crypto exchange solutions from a reputable white label cryptocurrency exchange development company offers several benefits:</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Market-Ready Trading Software:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>A market-ready solution saves time and resources, enabling swift deployment of a fully functional cryptocurrency trading platform.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>100% Customizability:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our white label exchange is fully customizable, allowing you to tailor the platform to match your unique business requirements.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Feature-Rich and Budget-Friendly:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>The white label exchange comes with a range of essential features, making it an affordable solution compared to building a platform from scratch.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Quick-to-Market Solution:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our ready-to-deploy solution significantly reduces the time required to launch your crypto trading platform, giving you a competitive edge.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Scalable and Cost-Effective:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our white label crypto exchange software can scale with your business growth, ensuring cost-effectiveness as your user base expands.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Multi-Layered Security:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>We prioritize security, implementing multiple layers of protection to safeguard user data and platform integrity.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Modular and Resilient Architecture:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our platform features a modular architecture that allows for seamless expansion and integration of new features and modules.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Proven and Thoroughly Tested:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>Our solution has been rigorously tested to ensure its reliability, security, and performance.</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Adherence to High-Quality Standards:</Heading>
<Text align={'center'} letterSpacing={2} marginTop={4}>We uphold the highest quality standards in our white label crypto exchange solutions, ensuring a robust and efficient platform.</Text>

<Text align={'center'} letterSpacing={2} marginTop={4}>Build a Strong Brand Identity with a Cryptocurrency Exchange Clone Script</Text>
<Text align={'center'} letterSpacing={2} marginTop={4}>Embark on your cryptocurrency exchange development journey with a custom-built, secure, scalable, cost-effective, and feature-rich white label exchange software script tailored to your needs. AradChain Technologies provides top-tier white label crypto exchange software development services to help ambitious ventures effortlessly launch their high-functioning crypto trading platforms.</Text>
          
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
