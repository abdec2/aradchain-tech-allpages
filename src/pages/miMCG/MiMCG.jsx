import React from "react";
import style from "./miMCG.module.css";
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
              <Heading>Metaverse Casino Game</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Metaverse Casino Gaming Solutions Crafting engaging casino games that offer lifelike experiences in a virtual setting.VIEW LIVE DEMO REQUEST A FREE DEMO
            Metaverse Casino Game Development: A Lucrative Opportunity.The online gambling industry is on a staggering growth trajectory. According to Global Market Insights, the market was valued at over USD 90 million and is projected to reach USD 370 billion by 2032. Concurrently, the metaverse is revolutionizing multiple sectors. The convergence of online gambling and the metaverse has prompted enterprises to invest in metaverse casino game development. At AradChain Technologies, we offer purpose-driven metaverse casino development services, aiding businesses in capturing substantial market shares. Our collaborative team of imaginative designers, 3D modeling experts, and blockchain engineers work cohesively to craft highly immersive gaming platforms for an unparalleled experience.
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


            <Heading as='h3' size='xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
              Key Attributes of Our Metaverse Casino Games
            </Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Progressive Jackpot</strong><br />
  Metaverse casino games integrate dynamic progressive jackpots, where the prize pool grows with each play that doesn't yield a win. This creates an exhilarating opportunity for a lucky player to claim a substantial jackpot, ensuring an engaging and suspenseful gameplay.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Multi-Screen Plots</strong><br />
  Our metaverse casino games elevate player immersion by offering multiple screen plots. This enables players to simultaneously view various aspects of the game, fostering a deeper connection with the virtual world and enhancing the overall gaming experience.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Multilingual Support</strong><br />
  Our multilingual support caters to a global player base, enabling participants from diverse regions to enjoy the game in their preferred language. This ensures a more accessible and enjoyable gaming experience for all.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>3D Video Games</strong><br />
  Each metaverse casino game we design replicates a lifelike three-dimensional environment, captivating players and providing them with a highly immersive experience akin to a physical casino setting.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Secure Payment Gateways</strong><br />
  A secure payment gateway is of paramount importance in casino gaming. Consequently, our metaverse casino games come equipped with reliable and secure payment gateways, ensuring users' deposits and withdrawals are completely safeguarded.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Achievement Goals</strong><br />
  Our metaverse games offer players the opportunity to pursue daily or weekly goals, infusing gamification into the gameplay. This feature fosters a sense of accomplishment and motivation, encouraging players to engage in more captivating and rewarding experiences.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  Connect with our domain experts to discuss your business requirements.
</Text>
<Heading as='h2' size='xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>

  <strong>Business Advantages of Metaverse Casino Game Development</strong>
</Heading>

<Text align={'center'} letterSpacing={1} >
  <strong>Expanding User Base</strong><br />
  The metaverse casino endeavors to cater to a diverse audience by ensuring compatibility across all platforms. This strategy aims to attract players from various demographics, while the inclusion of rewards and bonuses further ignites interest in these games.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Escalating Demand</strong><br />
  By prioritizing players' expectations and providing a gaming platform that upholds transparency, security, and privacy, the demand for this versatile virtual gaming experience has witnessed a significant upswing.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Strategic Business Goals</strong><br />
  The incorporation of casino games within the metaverse has emerged as an astute business proposition, resulting in enhanced return on investment and fostering genuine growth in the virtual economy.
</Text>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Embracing Decentralization</strong><br />
  Decentralized casino gaming facilitates virtual exchanges through encrypted tokens on a blockchain network. Transactions are recorded on each blockchain node, enabling gamers to conduct cryptocurrency-based transactions, facilitated by the decentralized nature of the system.
</Text>

<Heading as='h2' size='xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Why Select Us for Metaverse Casino Game Development
</Heading>

<Text align={'center'} letterSpacing={1}  mt={6}>
  By choosing AradChain Technologies as your metaverse casino game development partner, you gain access to a team of technical experts with practical experience delivering end-to-end consulting services.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>Technical Excellence</strong><br />
  We specialize exclusively in Blockchain Technologies, mastering one domain with unparalleled expertise.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>Expert Team</strong><br />
  Our team of over 600 experts assists in refining your offerings, suggesting optimal tech approaches, and even aiding in community and campaign setups.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>Agile Development</strong><br />
  We offer tailor-made blockchain solutions to deliver outstanding products tailored to your target audience. A clear roadmap ensures smooth and accelerated development and deployment.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>Comprehensive Support</strong><br />
  Our commitment doesn't conclude with consulting and product launch. We extend extensive post-delivery services, allowing you to focus on your growth.
</Text>




<Heading as='h3' size='xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Frequently Asked Questions
</Heading>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>What technologies are commonly employed in metaverse casino game development?</strong><br />
  Metaverse casino game development often incorporates technologies like virtual reality (VR) or augmented reality (AR) to elevate the immersive gaming experience. Additionally, blockchain ensures secure ownership and trading of in-game assets and cryptocurrencies for betting purposes.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>How critical is cross-platform compatibility in metaverse casino games?</strong>
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>How can player engagement be heightened in metaverse casino games?</strong>
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>What security aspects must be considered in metaverse casino game development?</strong>
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>How does blockchain integration benefit metaverse casino games?</strong>
</Text>

<Heading as='h3' size='xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  A Glimpse into Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>Metaverse in the Manufacturing Industry: Role and Future Prospects</strong><br />
  The term “Metaverse” requires no introduction, as it has already woven itself into the fabric of our lives. The unending surge in […]
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>Breathing Life into the Metaverse: How AI Empowers NPCs? </strong><br />
  Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies have brought a big change in […]
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  <strong>How is Metaverse Casino Development Changing the Future of Gambling? </strong><br />
  The Casino- a game of luck that lifted some to great success while leaving others in disappointment as known by many. It […]
</Text>

<Heading as='h3' size='xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Blockchain Tech Expertise
</Heading>

<Text align={'center'} letterSpacing={1}  mt={6}>
  We're available for a friendly chat to discuss your business needs, obligation-free.
</Text>

<Text align={'center'} letterSpacing={1}  mt={6}>
  We're committed to offering technical support and addressing inquiries or requests.
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