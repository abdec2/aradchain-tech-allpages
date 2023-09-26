import React from "react";
import style from "./acP.module.css";
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
              <Heading>Partners</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Collaborate for a Decentralized Ecosystem, Together Our partners take precedence, and we invest in their success. Our partner-centric initiatives empower partners with the tools they need to provide exceptional services and support to customers.
            JOIN OUR PARTNER PROGRAM
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Join Forces as a Blockchain Champion!
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Let's combine efforts to co-create blockchain-centric solutions and shape a decentralized future. At AradChain Technologies, we invite organizations to become partners, enabling us to mutually gain and share business impacts and benefits. Partner with us to seek tech solutions, offer your expertise, or contribute to the technical stack for the advancement of the blockchain ecosystem.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Empowering Transformation through Technology
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  We harness the power of technology to guide and expedite our customers' digital transformation journeys. If your mission aligns with leveraging technology to accelerate the transition of business ideas into value, our partner program is the ideal fit. Together, we'll expand opportunities and diversify the range of solutions you can deliver.
  Whether you seek to expand your business capabilities or enhance your existing skill set, AradChain Technologies's partner program consistently nurtures and grows your business. Access resources, expertise, in-depth domain knowledge, and co-marketing support to seamlessly deploy and enter the market with AradChain Technologies.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Leverage technical proficiency to accelerate development efforts
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Enhance your visibility among AradChain Technologies's enterprise clientele
  Establish and expand your global presence
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Choose the Ideal Partnership
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  A partnership elevates a company's profitability and stability. Select the partnership type that aligns with your goals to create a mutually beneficial coexistence.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Become a Solution Provider
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  As a solution provider, you'll be equipped with the skills and tools needed to offer a wide spectrum of technologies, solutions, and services to your end customers. Partner with AradChain Technologies as a solution provider to amplify your technical capabilities and establish tools and processes that expedite successful solution deployment.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Become a Technical Alliance Partner
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Our network of alliances generates business value and accelerates market entry. Collaborating with partners, we boost revenue growth, extend market reach, streamline sales processes, and enrich product and service offerings. In partnership with our alliance allies, we deliver business solutions that address our clients' technological challenges.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Become a Service Provider
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  If you provide services like hosting or other services related to financial instruments, collaborate with us to leverage service provider-ready solutions, adaptable business models, and a unified go-to-market strategy. Benefit from a global market presence, expedited market entry, and remarkable business expansion.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Become a Solution Seeker
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  As a solution seeker, leverage AradChain Technologies's expertise, extensive experience, and profound domain knowledge to acquire the right solutions at the right time, guiding clients through their technical journeys. Partnering with AradChain Technologies accelerates your global presence, enhances your capabilities, and drives substantial growth.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Our Commitment
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  You'll gain unlimited earning potential.
  Receive technical support from our expert team.
  Receive necessary training for successful execution.
  Our tech resources are at your disposal.
  We're available 24/7 to address your inquiries.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Benefits of Partnership
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Technical Proficiency
  We prioritize knowledge sharing. Together, we can delve deep into the blockchain realm, utilizing our technical expertise as a driving force propelling us forward.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Revenue Opportunities
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  With an ever-expanding network of customers, we span the global market. Together, we can achieve greater revenue. Our partners enjoy limitless partnership benefits, which are always open to negotiation.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Mutually Beneficial Relationship
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Our aim is a mutually advantageous, long-term partnership. Trust, integrity, quality, fairness, and accountability form the foundation of our evolving relationship.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} style={{ textAlign: 'center' }} mt={10} mb={10}>
  Our Expertise
</Heading>

<Text style={{ textAlign: 'center' }} mt={4}>
  Equipped with experience, expertise, and resources, we provide end-to-end solutions to boost the growth of both our partners and customers.
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
        phoneNumber="447778222221"
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