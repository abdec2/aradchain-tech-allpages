import React from "react";
import style from "./ebEdu.module.css";
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
              <Heading>Blockchain Solutions for Education,Shaping the Future of Learning</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Revolutionizing Education with Blockchain technology has the potential to revolutionize the education sector, bringing improvements in accessibility, credibility, and transparency. By offering secure, decentralized, and transparent records of learning, blockchain holds the promise to transform the way we approach education. At AradChain Technologies, we empower educational institutions with blockchain solutions for education, enhancing their systems and processes with transparency, efficiency, and accessibility. Our team of blockchain experts understands your needs and crafts a cohesive roadmap to drive and expedite your journey. If you have a business use case, connect with our subject matter experts to transform it into a market-disrupting product.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Addressing Challenges in Education with Blockchain
</Heading>

<Text align={'center'} letterSpacing={1}>
    The current education system grapples with inefficiencies that blockchain can address effectively.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Inefficient Record Keeping</strong><br/>
    Paper-based methods for managing academic records, certificates, and credentials lead to risks of impersonation and fraud.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Challenging Learner Performance Tracking</strong><br/>
    Tracking student progress through paperwork-intensive techniques is time-consuming and disrupts information flow.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Ineffective Identity Management</strong><br/>
    Manual identity management processes make it difficult for students to track their qualifications, certifications, and increase the risk of forgery.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Accountability Issues</strong><br/>
    Balancing attention to all students is challenging for teachers, leading to uneven regulatory compliance.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Transcript Availability</strong><br/>
    Acquiring academic records from institutions is challenging due to manual methods.
</Text>

<Text align={'center'} letterSpacing={1}>
    <a href="#" style={{ color: 'blue' }}>Connect with our experts</a> to transition from inefficient educational processes to an efficient blockchain-powered educational paradigm.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Blockchain Applications in Education: Use Cases
</Heading>

<Text align={'center'} letterSpacing={1}>
    These blockchain in education use cases highlight the promising potential of technology in the sector.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Digital Identity and Credentials Verification</strong><br/>
    Blockchain solutions for education offer secure and tamper-proof methods of verifying and storing educational credentials, aiding employers and educational institutions in confirming degree authenticity.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>E-Learning Platforms and Content Distribution</strong><br/>
    Blockchain applications in education can verify digital educational resource ownership, ensuring proper compensation for creators and providing students with access to high-quality learning materials.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Supply Chain Management of Educational Resources</strong><br/>
    Blockchain technology enhances transparency and efficiency in distributing educational resources, from e-learning content to laboratory equipment.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Secure Student Data Management</strong><br/>
    Blockchain solutions for education securely manage sensitive student information, including grades, attendance records, and disciplinary history.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Decentralized Student Record Management</strong><br/>
    By adopting blockchain application in education, institutions can establish a decentralized system for storing and sharing student records, reducing data breach risks and enhancing student information accessibility.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Efficient Degree and Accreditation Verification</strong><br/>
    Blockchain solutions streamline degree and accreditation verification, reducing fraudulent activities and improving verification efficiency.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Experience the Benefits of Blockchain in Education</strong><br/>
    <strong>Enhanced Security</strong>: Blockchain solutions for education ensure tamper-proof records, safeguarding student data from alterations or deletions.<br/>
    <strong>Improved Accessibility</strong>: Blockchain technology enables easy access to educational records for students, teachers, and institutions globally.<br/>
    <strong>Enhanced Credibility</strong>: Blockchain-certified degrees and educational qualifications provide verifiable learning records trusted by employers.<br/>
    <strong>Increased Transparency</strong>: Blockchain transparency ensures education systems are accountable and transparent, fostering public confidence in the education sector.<br/>
    <a href="#" style={{ color: 'blue' }}>Harness these benefits. Collaborate with our experts.</a>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Why Choose Us for Blockchain Education Solutions
</Heading>

<Text align={'center'} letterSpacing={1}>
    By partnering with AradChain Technologies, you gain access to a team of technical experts with hands-on experience delivering comprehensive blockchain services.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Technical Prowess</strong><br/>
    Our focus solely on blockchain technologies ensures unmatched expertise.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Expert Team</strong><br/>
    Our 500+ experts refine offerings, suggest optimal tech strategies, and support community and campaign setups.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Rapid Development</strong><br/>
    Customized products tailored for your target audience, backed by a coherent roadmap for smooth development and deployment.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Complete Support</strong><br/>
    Our commitment extends beyond product launch, providing comprehensive post-delivery services for your growth.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Meaningful Outcomes</strong><br/>
    We deliver tangible impacts, ensuring value generation from your investments.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Explore Our Blogs
</Heading>

<Text align={'center'} letterSpacing={1}>
    Visit our blog for insights on blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Blockchain & AI: Top Use Cases and Barriers to AI Adoption</strong><br/>
    Explore emerging blockchain use cases in real estate.
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Explore Emerging Blockchain Use Cases in Real Estate</strong><br/>
    Learn about blockchain development for the beauty industry and its potential impact.
    <br/><strong>READ MORE</strong>
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Blockchain Development for the Beauty Industry: A Boon or Bane?</strong><br/>
    Explore blockchain & AI: top use cases and barriers to AI adoption.
    <br/><strong>READ MORE</strong>
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
    Our Blockchain Tech Expertise
</Heading>

<Text align={'center'} letterSpacing={1}>
    We're here for a friendly chat to discuss your business needs, obligation-free.
</Text>

<Text align={'center'} letterSpacing={1}>
    <strong>Rely on us for technical support, inquiries, and requests.</strong>
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