import React from "react";
import style from "./msMAAS.module.css";
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
              <Heading>Marketing As A Service</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mb={10}>
            Social Media Management
           </Heading>

            <Text align={'center'} letterSpacing={1}>
             Crafting Brand Identities Through Cutting-edge Web3 Marketing Solutions. Demystifying MAAS - Definition and Mechanism. Discover MAAS (Marketing as a Service), a trusted Web3 marketing agency. Our comprehensive methodology empowers businesses to achieve their goals by harnessing the capabilities of Web3 technologies. We take immense pride in offering agile and customized managed services, delivering on-demand marketing solutions, fostering community engagement, and enhancing your online presence to ensure the triumph of your project!
            </Text>
            <Text align={'center'} letterSpacing={1} mt={4}>
            MAAS serves as your dynamic ally for pioneering accomplishments. Embrace evolving trends and take the lead in the success narrative. Rest assured that your business will adeptly meet the latest requirements of the dynamic Web3 marketing services domain.At MAAS, data-driven strategies and analytical decision-making form the cornerstones, empowering your business with data-driven magic. Unleash the power of insights and witness your growth trajectory unfold like never before.Turbocharge your business journey with MAAS, the cosmic catalyst for exponential growth. Navigate market intricacies with agile precision as we conjure results in an instant, propelling you to the constellation of success<strong> !</strong> 
            </Text>  
            <Text align={'center'} mt={4} letterSpacing={1}>
            At the core of their service philosophy lies the development of growth-centric strategies. AradChain's adept blockchain marketers design meticulously planned strategies with a clear trajectory toward expansion, significantly contributing to overall business growth and progress, propelling it to new heights.Their MAAS roadmap provides a structured journey for blockchain projects, beginning with comprehensive exploration. This phase involves an in-depth understanding of project goals, mission, vision, and target audience, backed by comprehensive market analysis and competitor assessment. This culminates in the identification of a unique value proposition and brand positioning.
            </Text>
            <Text align={'center'} mt={4} letterSpacing={1}>
            The subsequent phases encompass strategizing, execution, optimization, and expansion. AradChain Technologies meticulously tracks and measures the results of marketing campaigns, leveraging data and feedback to fine-tune strategies for heightened effectiveness. In the final phase, they guide the scaling of blockchain projects, facilitating entry into new markets and segments, amplifying the business's market presence and influence.With a network of partners and a satisfied clientele, AradChain Technologies is the dependable choice for businesses seeking comprehensive blockchain marketing solutions. Their commitment to tailored strategies, scalability, and growth-centricity ensures that each client's unique needs are met with precision and excellence. Connect with AradChain Technologies now to embark on your MAAS journey and unlock the full potential of your blockchain project.</Text>
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



<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={8} mb={4}>
  Frequently Asked Questions
</Heading>

<Text align={'center'} letterSpacing={1}>
  <strong>1. How Can MAAS Contribute to My Business Success?</strong>
  <Text mt={4}>
    Here are four key reasons why MAAS could be your gateway to triumph:
    - MAAS empowers targeted investments in strategic initiatives, fostering growth
    - Effortlessly scale your marketing needs for consistent expansion
    - Adapt swiftly to evolving business requirements
    - Liberate your marketing team to concentrate on diverse avenues of company growth
  </Text>

  <Text align={'center'} letterSpacing={1} mt={4}><strong>2. Is MAAS Essential for My Business?</strong></Text>
  <Text align={'center'} letterSpacing={1} mt={4}><strong>3. What Does the Scope of MAAS Encompass?</strong></Text>
  <Text align={'center'} letterSpacing={1} mt={4}><strong>4. What Are the Costs Associated with MAAS?</strong></Text>
  <Text align={'center'} letterSpacing={1} mt={4}><strong>5. Do You Offer Customized MAAS Packages?</strong></Text>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  A Glimpse of Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Metaverse in the Manufacturing Industry: Role and Future Prospects </strong>
  <Text align={'center'} letterSpacing={1} mt={6}>

  The term "Metaverse" requires no introduction, as it has seamlessly woven itself into the fabric of our existence. The relentless surge in [...]
  READ MORE..
  </Text>
</Text>
<Text align={'center'} letterSpacing={1} mt={6}>
<Text align={'center'} letterSpacing={1} mt={6}>
  <strong>Breathing Life into the Metaverse: How AI Empowers NPCs? </strong>
  </Text>
  Blockchain, metaverse, and artificial intelligence are unarguably the most significant innovations of the 21st century. These technologies have wrought a profound transformation [...]
  READ MORE..
</Text>
<Text align={'center'} letterSpacing={1} mt={6}>

 <strong> White Label Crypto Bank:How to Kick-start Your White Label Crypto Banking Platform? </strong>
 <Text align={'center'} letterSpacing={1} mt={6}>

  When opportunity knocks, we all scramble to unlock ways to leverage it for greater gain. [...]
  READ MORE...
  </Text>
  </Text>
  <Text align={'center'} letterSpacing={1} mt={6}>

  Our Expertise in Blockchain Technology
  Feel free to engage in a friendly conversation regarding your business requisites. We're committed to extending technical support and are receptive to inquiries or requests.
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