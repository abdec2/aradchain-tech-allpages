import React from "react";
import style from "./daoDCS.module.css";
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
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>DAO Consulting Service</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Empowering you with knowledge, tools, and expertise, we pave the way for you to build your DAO efficiently. Whether you're just starting and want to aiming to Revolutionize the Market with Top-tier DAO Consulting Solutions, we have the answers to your queries. Irrespective of your question, be it understanding the benefits of DAO implementation for your existing business or crafting a roadmap for your DAO development journey, our solutions are comprehensive. We understand that one-size-fits-all approaches don't work, so our DAO consulting services are meticulously tailored to diverse business scenarios. Engage with our experts to transform your concept into an industry-leading product that has the potential to disrupt the market. Our Comprehensive DAO Consulting Services offer a wide array of tools to effectively launch your DAO into the market, ensuring that your journey is both smooth and successful. Consult our experts today to unlock the full potential of your DAO venture.
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

            <Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
              DAO Selection
            </Heading>

<Text align={'center'} letterSpacing={1}>
  From the myriad DAO options available, choosing the right fit can be overwhelming. Our experts do the heavy lifting to guide you toward the optimal DAO model.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Token Creation: </strong>
  Crafting tailor-made DAO tokens to align with your unique business needs, we ensure you harness their full potential, leading to optimal business outcomes. We create utility and governance tokens for your DAO model.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Governance Model: </strong>
  Selecting an appropriate governance model can be intricate. We provide expert guidance on industry standards and legal documentation, aiding you in selecting the best organizational structure.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Smart Contract Development: </strong>
  Constructing a robust DAO governance model revolves around smart contracts. Our adept services assist you in developing custom smart contracts that prioritize institutional-grade security and streamline your business processes.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Platform Creation: </strong>
  A thriving DAO platform hinges on an intuitive user interface and expert insight. Our proficient team aids you in crafting an exceptional platform that aligns seamlessly with your vision.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Community Building: </strong>
  Nurturing a vibrant community within a DAO is pivotal yet challenging. Our expert services furnish optimal strategies to help you rise above the noise and successfully cultivate your community.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  Advantages of Leveraging Our DAO Consulting Services
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong>Experience: </strong>
  Our subject matter experts boast extensive familiarity with DAO technology, trends, and industry best practices. We offer invaluable insights, advice, and guidance to inform your informed DAO decisions.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Customized Solutions: </strong>
  Our bespoke DAO solutions are tailored to meet your unique business requisites. These solutions are meticulously designed to address your distinct needs and aspirations, ensuring you attain optimal outcomes.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Cost-efficient Solutions: </strong>
  Our DAO consulting services assist you in cost-effectively devising and implementing DAO solutions, steering clear of costly errors and ensuring your project stays within budget.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Time Efficiency: </strong>
  Delegate the intricate and time-consuming aspects of your DAO project to our consulting services, saving you valuable time and enabling you to focus on other business-critical facets.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Ongoing Support: </strong>
  We offer continuous support and upkeep to ensure your DAO platform functions seamlessly. Our experts troubleshoot issues, oversee upgrades, and offer assistance whenever you require it.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Competitive Edge: </strong>
  Harnessing our expertise empowers you with a competitive edge in your industry. You can adopt cutting-edge technology and innovative solutions that set your business apart from competitors.
</Text>


<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  Embark on the Journey of Building Your DAO Platform
</Heading>

<Text align={'center'} letterSpacing={1} mt={4}>
  Our seasoned DAO experts encompass a diverse skill set, including technology assessment, product design, prototyping, project development, quality assurance, security auditing, DevOps, and deployment. With real-world experience in delivering DAO solutions to global enterprises, we've established ourselves as a reliable and dependable DAO consulting firm.
</Text>

<Text align={'center'} letterSpacing={1} mt={4}>
  Share your business use case with us. Not only will we offer end-to-end DAO consulting services, but we'll also deliver tailor-made development solutions to transform your concept into reality. Unleash the potential of DAO for your business.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={6} mb={4}>
  Why Choose Us as Your Preferred DAO Consulting Partner?
</Heading>

<Text align={'center'} letterSpacing={1} mt={5}>
  By partnering with AradChain Technologies, you're entrusting a team of technical experts armed with real-world experience in delivering comprehensive consulting services.
</Text>
<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
              <Card><CardBody><Text>Tech</Text></CardBody></Card>
              <Card><CardBody><Text>Technical Expertise</Text></CardBody></Card>
              <Card><CardBody><Text>Skilled Team</Text></CardBody></Card>
              <Card><CardBody><Text>Development</Text></CardBody></Card>
              <Card><CardBody><Text>Accelerated Development</Text></CardBody></Card>
              <Card><CardBody><Text>Assistance</Text></CardBody></Card>
              <Card><CardBody><Text>Complete Support</Text></CardBody></Card>
              <Card><CardBody><Text>Group 60171</Text></CardBody></Card>
              <Card><CardBody><Text>Meaning Full Outcomes</Text></CardBody></Card>
              <Card><CardBody><Text>Our Partners and Clients</Text></CardBody></Card>
</SimpleGrid>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  Frequently Asked Questions
</Heading>

<Text align={'center'} letterSpacing={1} mt={5}>
  <strong>What Does a DAO Consulting Service Encompass?</strong>
</Text>
  <Text mt={4} align={'center'}>
    DAO consulting services encompass answering queries related to DAO and suggesting best practices for its construction. These services include various aspects such as DAO model selection, token creation, governance model, smart contract development, community building, and ongoing support.
  </Text>
  <Text mt={4} align={'center'}>
  <strong>What Considerations Should I Weigh When Selecting a DAO Consulting Service?</strong>
  </Text>
  <Text mt={4} align={'center'}>
    <strong>How Can a DAO Consulting Service Aid in Community Building?</strong>
  </Text>
  <Text mt={4} align={'center'}>
  <strong>How Can a DAO Consulting Service Assist in Governance Modeling?</strong>
  </Text>
  <Text mt={4} align={'center'}>
  <strong>What Sort of Ongoing Maintenance and Support Do DAO Consulting Services Provide After Project Completion?</strong>
  </Text>


<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  Discover More in Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1} mt={5}>
  <strong>Metaverse in the Manufacturing Industry: Role and Future Prospects </strong>
  The term "Metaverse" needs no introduction, as it has already woven itself into the fabric of our lives. The unending surge in [...]
  READ MORE [...]
</Text>

<Text align={'center'} letterSpacing={1} mt={5}>
  <strong>Breathing Life into the Metaverse: How AI Empowers NPCs </strong>
  Blockchain, metaverse, and artificial intelligence are the most remarkable innovations of the 21st century. These technologies have brought a big change in [...]
  READ MORE [...]
  </Text>

  <Text align={'center'} letterSpacing={1} mt={5}>
  <strong>White Label Crypto Bank:How to Get Started with White Label Crypto Banking Platform? </strong>
  When opportunity knocks at the door, we all look for a quick and easy way to leverage it for a better [...]
  READ MORE [...]
  </Text>

<Text align={'center'} letterSpacing={1} mt={5}>
  Our Expertise in Blockchain Technology
  We're here to engage in a friendly chat about your business requirements. No obligations, just effective technical support. Your inquiries and requests are most welcome!
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