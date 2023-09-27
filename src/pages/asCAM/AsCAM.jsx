import React from "react";
import style from "./asCAM.module.css";
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
              <Heading>We believe that technology can change the world.</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
            Unlock the potential of cryptocurrency asset management with AradChain Technologies. Our crypto wealth management experts select the most profitable crypto tokens for you, making crypto trading accessible and lucrative. As an experienced cryptocurrency asset management company, we guide investors in navigating the dynamic landscape of high-performing asset tokens across various exchanges. We understand that the intricacies and volatility of the crypto market can be daunting, especially for those accustomed to traditional trading. That's why we offer comprehensive digital asset management solutions, selecting suitable tokens, and facilitating trading on relevant exchanges. Our investment strategies focus on the most liquid crypto assets, delivering impressive returns and lower risk statistics. Explore our suite of cryptocurrency asset management products, including the AradChain Technologies Crypto Fund and AradChain Technologies Index Fund, and benefit from our advanced trading data analytics and expert guidance.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Why Choose Us
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            AradChain Technologies employs cutting-edge trading data analytics to identify tokens with growth potential, providing user-friendly crypto fund products designed for diverse portfolios. Our services offer instant liquidity, easy fiat conversion, enhanced portfolio diversification, uncompromised quality, personalized management, and partnerships with registered and authorized distributors. Invest in cryptocurrency assets with confidence and seize the opportunities in this innovative industry's long-term potential.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Insights from Our Blog
            </Heading>
            <Text align={'center'} letterSpacing={1}>
            Explore our blog to stay informed about asset tokenization platforms, the economic empowerment it brings, and the evolution of asset tokenization from physical to digital. Contact us for a friendly chat about your cryptocurrency asset management needs, and we're here to provide technical support and answer inquiries.
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