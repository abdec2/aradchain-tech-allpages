import React from "react";
import style from "./cdCD.module.css";
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
              <Heading>Crypto Coin Development Company</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
          <Text align={'center'} letterSpacing={1}>
              Tailored Development Services for Crypto Exchanges Empowering You to Create Extraordinary Success Stories The financial industry is undergoing a substantial paradigm shift, driven by factors such as liberal trade policies, customer demands, technological innovation, and macroeconomic forces. Both emerging and established businesses must embrace cryptocurrency to remain relevant as service providers. Crypto exchange software resembles traditional exchanges but is digital, more secure, and not bound by geographical limitations. AradChain Technologies, a leading cryptocurrency exchange development firm, specializes in crafting innovative solutions for progressive businesses seeking to enter the multi-billion dollar industry. Leverage AradChain Technologies's expertise in cryptocurrency exchange platform development to establish a strong foundation for success in the cryptocurrency sector. Acquire advanced yet user-friendly Bitcoin exchange software equipped with cutting-edge features, industry-leading functionalities, and robust security, all tailored to meet your specific requirements.
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
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Comprehensive Crypto Token Development Services for a Seamless Token Launch Journey
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            At AradChain Technologies, we pride ourselves on offering a comprehensive range of crypto token development services, aimed at ensuring a smooth and successful journey for your token launch. Drawing from our extensive experience in the field, we excel at expediting the launch of your cryptocurrency with utmost ease. Our team comprises well-trained and highly experienced professionals who are dedicated to providing end-to-end solutions. From the initial consultation and meticulous proof-of-concept crafting to the actual creation of your cryptocurrency and its subsequent marketing, we offer a complete package to meet your specific needs.Our token development solutions are not just comprehensive; they are also meticulously designed to substantially enhance your business's Return on Investment (ROI). We understand that every project is unique, and that's why we encourage you to engage with our team of experts. By discussing your project requirements with us, you can rest assured that you will receive services and solutions that are not only tailored to your goals but also guarantee successful outcomes.
            </Text>
            <Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
            Explore Our Extensive Range of Token Development Services  
            </Heading>
            <Text align={'center'} letterSpacing={1}>
            At AradChain Technologies, we take pride in offering an extensive and diverse range of crypto token development services, all under one roof. Our commitment is to provide businesses with a complete solution that encompasses every aspect of token development. Here's a glimpse of what we have to offer:
            </Text>

<SimpleGrid minChildWidth='200px' spacing='20px' mt={10}>
  <Card>
    <CardBody>
      <Text>ICO Consulting Services</Text>
      <Text>Our top-notch ICO consulting and advisory services offer valuable insights to clients entering the world of cryptocurrency.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>Crypto Coin Development</Text>
      <Text>We specialize in creating custom crypto coins tailored to your specific needs and requirements.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>Smart Contract Development</Text>
      <Text>Our token development services include the flawless creation of smart contracts on various platforms, ensuring seamless business proceedings.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>ICO/STO/UTO Development</Text>
      <Text>Our experienced team can assist you in creating security tokens, utility tokens, and equity tokens, simplifying the capital-raising process.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>Altcoin Development Service</Text>
      <Text>Our skilled crypto development team is proficient in crafting feature-rich altcoins, ensuring secure and reliable exchange.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>Crypto Token Mining</Text>
      <Text>We extend our crypto development services to crypto mining, where we verify transactions before they are added to the public ledger.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>STO/UTO/ETO Development</Text>
      <Text>Specializing in security tokens, utility tokens, and equity tokens, we streamline the capital-raising process.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>Asset-Backed Token Development</Text>
      <Text>We have the expertise to construct tokens backed by real-world assets like real estate, enabling fractional investment opportunities.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>Telegram Bot Token Development</Text>
      <Text>Our token development services also include creating telegram bot tokens for seamless trading purposes.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>Non-Fungible Token Development</Text>
      <Text>Partner with our crypto development company to build sophisticated non-fungible tokens suitable for a wide array of collectibles.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>DeFi Token Development</Text>
      <Text>We are proficient in designing high-quality DeFi tokens that simplify financial activities such as borrowing, lending, and investments.</Text>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <Text>Metaverse Token Development</Text>
      <Text>Our specialized token development services cover the entire spectrum, from designing and developing to deploying virtual metaverse tokens on popular networks.</Text>
    </CardBody>
  </Card>
</SimpleGrid>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>Specialized Crypto Token Standards and Preferred Blockchains</Heading>
<Text align={'center'} letterSpacing={1}>
Our crypto token development company excels in various token standards, including but not limited to BEP 20, BEP 721, BEP 1155, TRC 10, TRC 20, TRC 721, ERC 10, ERC 20, ERC 223, ERC 777, ERC 827, ERC 998, ERC 1155, ERC 1400, and ERC 720/721. This wide range of expertise ensures that we can cater to a diverse array of crypto development needs, all while adhering to the highest industry standards.

Moreover, our team of experts offers end-to-end token development on preferred blockchain networks, tailored to your specific needs. We understand that different projects may require different blockchain infrastructures, and we are fully equipped to accommodate these preferences. Whether it's the Ethereum blockchain, Binance Smart Chain, Tron blockchain, or any other, we have the knowledge and experience to guide you in making the right choice for your project.

If you're ready to embark on a successful crypto token development journey, don't hesitate to reach out to us. Our team is always available for a friendly chat to discuss your business needs, with absolutely no obligation on your part. We look forward to helping you turn your crypto aspirations into reality.
</ Text>
<Text align={'center'} letterSpacing={1}>
<strong>If you have any more questions or need further information, feel free to ask.</strong>
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