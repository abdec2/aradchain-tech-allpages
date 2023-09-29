import React from "react";
import style from "./miMITH.module.css";
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

import { Box, Text, Heading, UnorderedList, Grid, GridItem, SimpleGrid, CardBody, Card ,Button,Stack, textDecoration} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";

const About = () => {
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <div className={style.mainSectionContent}>
            <div>
              <Heading>Metaverse Applications in Healthcare</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Exploring Metaverse Applications in Healthcare
Embark on a journey into the healthcare metaverse to uncover its boundless potential and the myriad possibilities it holds.

           </Text>
<Text align={'center'} letterSpacing={1} mt={4}>
     
<strong>DID YOU KNOW? </strong>
According to research by Statista, the global metaverse market size was $38.85 billion in 2021, rose to $47.48 billion in 2022, and is projected to reach an astounding $678.8 billion by 2030.
</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
<strong>Leverage AradChain Technologies's Expertise </strong> to Harness the Power of Metaverse in Healthcare
The rapid evolution of the metaverse, with its automation and digitalization, has played a pivotal role in propelling the healthcare sector forward. This transformative impact has paved the way for innovative healthcare solutions and services that cater to a wide range of needs, all while reducing costs.

By skillfully integrating various digital technologies, the metaverse offers personalized and closely-knit patient care. The incorporation of metaverse in healthcare facilitates intelligent and adaptive solutions, effectively blurring the lines between patients and healthcare providers.

The adoption of metaverse in healthcare has the potential to reshape the industry. AradChain Technologies's proficient team of metaverse experts can seamlessly integrate this transformative technology into your healthcare business, keeping you ahead of the competition in today's dynamic market landscape.

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

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={8} mb={4}>
  DID YOU KNOW?
</Heading>

<Text align={'center'} letterSpacing={1}>
A study by Insight Ace Analytic projects that the global metaverse market in healthcare was valued at $6.57 billion in 2022 and is anticipated to reach $71.6 billion by 2030, exhibiting a compounded annual growth rate of 35.4% during the period 2023-2031.

</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Unveiling the Potential of Metaverse in Empowering Healthcare

</Heading>

<Text align={'center'} letterSpacing={1}>
AradChain Technologies extends a comprehensive suite of services that empower healthcare enterprises to establish a strong presence and deliver enhanced services and solutions. Let's delve into some key metaverse applications in healthcare where AradChain Technologies's expertise shines.

</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Immersive Training and Skill Development
  </Heading>

<Text align={'center'} letterSpacing={1}>
AradChain Technologies's expert team crafts immersive training and skill development using metaverse tools like 360 videos, 3D visuals, and haptics. This enables real-life, cost-effective medical staff training, onboarding, and upskilling, fostering efficiency without the limitations of time and location.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Simulated Operating Rooms

</Heading>

<Text align={'center'} letterSpacing={1}>
Metaverse can create simulated operating rooms, allowing medical students to safely practice procedures. Doctors can use digital organ replicas for simulated surgeries, assessing potential outcomes without jeopardizing patient safety.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Revolutionizing Clinical Trials

</Heading>

<Text align={'center'} letterSpacing={1}>
AradChain Technologies's metaverse healthcare development can revolutionize decentralized clinical trials, eradicating geographical and physical barriers. Trials can now occur at patients' homes instead of sites, with remote monitoring and management.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Digital Diagnostics
</Heading>

<Text align={'center'} letterSpacing={1}>
Metaverse introduces movement, interaction, and spatial analysis for digital diagnoses. For instance, healthcare providers can track eye movements to identify conditions like glaucoma or specific neurological markers.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Immersive Virtual Therapies

</Heading>

<Text align={'center'} letterSpacing={1}>
AradChain Technologies's metaverse solutions enable immersive training and skill development using 360 videos, 3D visuals, and haptics. This leads to real-life, cost-effective medical staff training, onboarding, and upskilling, improving efficiency regardless of time or location.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Virtual Hospitals

</Heading>

<Text align={'center'} letterSpacing={1}>
Metaverse creates enhanced virtual environments that enhance error-free triage. Healthcare providers can study patients in 3D photorealism, facilitating better communication and understanding.

</Text>


<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Launching Virtual Fitness Programs

</Heading>

<Text align={'center'} letterSpacing={1}>
AradChain Technologies assists medical institutions in launching diverse fitness programs for patients via the metaverse. This real-time environment maximizes the benefits of fitness programs for patients' well-being.

</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Medical Tourism

</Heading>

<Text align={'center'} letterSpacing={1}>
Healthcare metaverse enables users to explore affiliated health facilities with integrated insurance. Users experience a virtual journey using 3D VR technology, introducing them to various facilities.

</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Virtual Health Conferences

</Heading>

<Text align={'center'} letterSpacing={1}>
Metaverse plays a pivotal role in organizing virtual health conferences, enabling global experts to participate and share knowledge without geographical constraints.

</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
DID YOU KNOW?

</Heading>

<Text align={'center'} letterSpacing={1}>
A prominent telehealth provider employs augmented reality for live audio and video consultations with remote healthcare providers in real-time.

</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}  style={{ textDecoration: 'underline' }} >
Our Development Process

</Heading>

<Text align={'center'} letterSpacing={1}>
We follow a meticulous development process to ensure the highest quality metaverse healthcare services.

</Text>

<Text letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  <strong>Consultation Phase</strong>
  </Text>

<Text align={'center'} letterSpacing={1}>
We initiate with metaverse consultation services tailored for newcomers aiming to seamlessly implement metaverse in their healthcare ventures, unlocking its potential.

</Text>

<Text letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  <strong>Discovery Phase</strong>
  </Text>

<Text align={'center'} letterSpacing={1}>
This phase involves understanding your goals and conducting brainstorming sessions to outline a detailed plan for achieving your objectives.

</Text>
<Text letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  <strong>Requirements Gathering</strong>
  </Text>


<Text align={'center'} letterSpacing={1}>
We collect all project requirements, conduct thorough analysis, and create a roadmap before proceeding with metaverse healthcare development.

</Text>
<Text letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  <strong>Solution and Strategy Design</strong>
  </Text>

<Text align={'center'} letterSpacing={1}>
Crafting tailored solutions and strategic designs aligning with your project's needs is pivotal to our metaverse healthcare development process.

</Text>
<Text letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  <strong>Development Phase</strong>
  </Text>


<Text align={'center'} letterSpacing={1}>
Core development takes place based on approved designs and strategies, shaping our metaverse healthcare services for deployment.

</Text>

<Text letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  <strong>Testing and Quality Analysis</strong>
  </Text>

<Text align={'center'} letterSpacing={1}>
We carry out rigorous testing and quality analysis to ensure the final product is market-ready, free from any issues.

</Text>

<Text letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  <strong>Maintenance and Support</strong>
  </Text>

<Text align={'center'} letterSpacing={1}>
After a successful launch, we provide comprehensive maintenance and support services to ensure uninterrupted operation.

</Text>

<Heading as='h2' size='2xm' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Why Choose AradChain Technologies for Your Metaverse Healthcare Project?

</Heading>

<Text align={'center'} letterSpacing={1}>
AradChain Technologies stands as a trusted provider of metaverse healthcare development services and solutions, offering several benefits for your project.

</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  Expert Metaverse Professionals
</Heading>

<Text align={'center'} letterSpacing={1}>
Our metaverse experts are trained and equipped to deliver optimal results.

</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
Experienced Team

</Heading>

<Text align={'center'} letterSpacing={1}>
Our team boasts extensive experience in the field we adhere to deadlines and ensure efficient project execution.Our support extends beyond launch, addressing technical issues if they arise.
</Text>

<Text  size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
  <strong>Ready to Discuss Your Metaverse Healthcare Project?</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={10} mb={4}>
Frequently Asked Questions
</Heading>
<Text align={'center'} letterSpacing={1} mt={4}>
How Can I Implement Metaverse in Healthcare?
</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
Implementing metaverse in healthcare involves blending various enabling technologies such as AR, VR, AI, quantum computing, and more to explore new approaches to healthcare services.
</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
I Need Consultation for Metaverse Healthcare. How Can You Help?

</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
What is the Estimated Cost of Metaverse Implementation in Healthcare?

</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
Can You Provide Customized Metaverse Healthcare Services?

</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
How Long Does Metaverse Healthcare Development Take?
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={4} textAlign={'center'} mt={4} mb={4}>
A Glimpse of Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>Metaverse in Manufacturing: </strong>
   The term "Metaverse" needs no introduction. Its impact is profound, and its potential is limitless. The surge in metaverse adoption across industries […]
[READ MORE ...]
</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>The Marriage of AI and NPCs in the Metaverse: </strong>
  The 21st century has brought us innovations that redefine the way we live, work, and interact. Blockchain, metaverse, and artificial intelligence (AI) […]
   [READ MORE ...]
</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
  <strong>White Label Crypto Bank: </strong>
  When opportunity knocks, everyone seeks a swift and efficient way to seize it. Launching a white label crypto banking platform is a […]
   [READ MORE ...]
</Text>
<Text align={'center'} letterSpacing={1} mt={4}>
We're here to assist with your business needs through friendly conversations – <strong>no obligations! </strong>
 We're committed to providing technical support and responding to inquiries or requests.

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