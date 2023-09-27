import React from "react";
import style from "./aiAlCC.module.css";
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
              <Heading>AI Consulting Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>Comprehensive AI consulting services and solutions to empower businesses with task automation and heightened overall efficiency.

REQUEST A FREE DEMO
DID YOU KNOW!
Based on the report by Future Market Insights, the global AI consulting services market is projected to reach a valuation of $525.65 billion by the end of 2023, with a compound annual growth rate of 4.3% from 2022 to 2023.
 </Text>
 <Heading textAlign="center" size="lg">
  Expert AI Consultants Ready to Serve
</Heading>

<Text textAlign="center">
  Our premium artificial intelligence consulting services are custom-tailored for businesses aiming to integrate AI and ML technology into their operational framework.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Our AI Consulting Services
</Heading>

<Text textAlign="center">
  AradChain Technologies hosts a team of skilled AI consultants, focused on delivering outcome-driven AI strategy consulting services. Our aim is to enable businesses to seamlessly incorporate the most fitting AI solutions across various processes.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Strategic AI Consulting
</Heading>

<Text textAlign="center">
  Our strategic artificial intelligence consulting services offer a profound grasp of AI technology, guiding its implementation across diverse business processes to achieve strategic goals.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Use Case Definition
</Heading>

<Text textAlign="center">
  Our experts collaboratively evaluate and define use cases that align with your industry's requirements and exhibit potential impact on your business.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  AI Infrastructure Setup
</Heading>

<Text textAlign="center">
  We establish a robust, cloud-based infrastructure that ensures smooth deployment and operation of AI systems, generating desired outcomes.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Machine Learning (ML) Model Development
</Heading>

<Text textAlign="center">
  Our proficient AI consultants provide comprehensive solutions for end-to-end ML model training and integration into enterprise AI-powered solutions.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  User Training and Support
</Heading>

<Text textAlign="center">
  Post-deployment, our AI solutions consultants offer thorough training and support, ensuring uninterrupted operational flow.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Artificial Intelligence Software Development
</Heading>

<Text textAlign="center">
  With a pool of skilled AI software developers, we manage the entire software development cycle, ensuring the software is well-featured and suited for use.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Benefits of AI Consulting
</Heading>

<Text textAlign="center">
  Implementing AI solutions under the guidance of a professional AI solutions consultant yields substantial benefits for your business. Explore the advantages:
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Opportunity Identification
</Heading>

<Text textAlign="center">
  We help identify suitable opportunities for integrating AI solutions, optimizing their impact on your business.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Guided Journey
</Heading>

<Text textAlign="center">
  Our AI consultants provide dedicated guidance, ensuring a seamless AI journey from inception to completion.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Enhanced Operational Speed
</Heading>

<Text textAlign="center">
  AI-driven automation minimizes task time, significantly enhancing overall operational speed.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Productivity Boost and Efficiency
</Heading>

<Text textAlign="center">
  Automation of tasks through AI leads to heightened productivity and efficiency by minimizing manual intervention.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  New Business Model Possibilities
</Heading>

<Text textAlign="center">
  AI-based solutions help explore new business model avenues through data-driven insights for expansion.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Data Collection and Analysis
</Heading>

<Text textAlign="center">
  We provide comprehensive support for data collection and analysis, vital for smooth AI integration.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Monitoring Ease
</Heading>

<Text textAlign="center">
  AI facilitates effortless task monitoring and tracking, minimizing manual intervention and saving time.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Accuracy and Security Enhancement
</Heading>

<Text textAlign="center">
  AI implementation elevates accuracy and security by eliminating manual errors.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Task Streamlining
</Heading>

<Text textAlign="center">
  AI-based solutions streamline repetitive tasks, making them convenient, efficient, and error-free.
</Text>

<Heading textAlign="center" size="lg">
  Frequently Asked Questions
</Heading>

<Text textAlign="center" size="md" mt={4}>
  <strong>1. What is Artificial Intelligence Consulting?</strong>
  </Text>

<Text textAlign="center">
  Artificial Intelligence consulting involves offering professional guidance to businesses and organizations keen on incorporating AI technology into their operations. This service involves analyzing project requirements to create a strategic implementation plan, ensuring business goals are met.
</Text>

<Text textAlign="center" size="md" mt={4}>
  <strong>2. What Role Does an AI Consultant Play?</strong>
  </Text>

<Text textAlign="center">
  An AI consultant plays a crucial role in guiding businesses and organizations in the integration of AI technology into their operations. They analyze project requirements and develop a strategic implementation plan to achieve business goals effectively.
</Text>

<Text textAlign="center" size="md" mt={4}>
  <strong>3. What Is Your Approach to AI Consulting Projects?</strong>
  </Text>

<Text textAlign="center">
  Our approach to AI consulting projects involves a systematic process of problem identification, goal setting, use case definition, infrastructure setup, machine learning model development, user training and support, and software development. We ensure a seamless AI journey from inception to completion.
</Text>

<Text textAlign="center" size="md" mt={4}>
  <strong>4. Do You Offer Artificial Intelligence Consulting for Different Industries?
</strong></Text>

<Text textAlign="center">
  Yes, we provide Artificial Intelligence consulting services across various industries. Our experienced consultants tailor solutions to meet industry-specific requirements, ensuring effective AI integration for diverse businesses.
</Text>

<Text textAlign="center" size="md" mt={4}>
  <strong>5. What Is the Timeframe for an AI Consulting Project?</strong>
</Text>

<Text textAlign="center">
  The timeframe for an AI consulting project can vary depending on its complexity and scope. We work closely with clients to establish project timelines and milestones, ensuring timely delivery of AI solutions.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Explore Our Blogs
</Heading>

<Heading textAlign="center" size="md" mt={4}>
  Metaverse in the Manufacturing Industry: Role and Future Prospects
</Heading>

<Text textAlign="center">
  The Metaverse's significance needs no introduction, interwoven into our daily lives. This technological amalgamation holds immense potential across industries.
</Text>

<Heading textAlign="center" size="md" mt={4}>
  Empowering NPCs: AI's Role in Breathing Life into the Metaverse
</Heading>

<Text textAlign="center">
  The 21st century introduced transformative innovations – blockchain, metaverse, and artificial intelligence. These tech marvels have revolutionized industries worldwide.
</Text>

<Heading textAlign="center" size="md" mt={4}>
  Getting Started with White Label Crypto Banking Platform
</Heading>

<Text textAlign="center">
  As opportunity knocks, swift leverage becomes crucial. The dynamic crypto landscape beckons, offering rapid white label solutions.
</Text>

<Heading textAlign="center" size="lg" mt={4}>
  Our Blockchain Tech Expertise
</Heading>

<Text textAlign="center">
  We're available for a friendly chat to discuss your business needs, without any obligations. Rely on us for technical support and to address your inquiries effectively!
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