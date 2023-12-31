import React from "react";
import style from "./sSTO.module.css";
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
              <Heading>STO</Heading>
            </div>
          </div>
          
        </div>
      </div>

      <div className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className="content">
            <Text align={'center'} letterSpacing={1}>
              Tailored Development Services for Crypto Exchanges Empowering You to Create Extraordinary Success Stories The financial industry is undergoing a substantial paradigm shift, driven by factors such as liberal trade policies, customer demands, technological innovation, and macroeconomic forces. Both emerging and established businesses must embrace cryptocurrency to remain relevant as service providers. Crypto exchange software resembles traditional exchanges but is digital, more secure, and not bound by geographical limitations. AradChain Technologies, a leading cryptocurrency exchange development firm, specializes in crafting innovative solutions for progressive businesses seeking to enter the multi-billion dollar industry. Leverage AradChain Technologies's expertise in cryptocurrency exchange platform development to establish a strong foundation for success in the cryptocurrency sector. Acquire advanced yet user-friendly Bitcoin exchange software equipped with cutting-edge features, industry-leading functionalities, and robust security, all tailored to meet your specific requirements. CONNECT VIA WHATSAPP CONNECT VIA TELEGRAM
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
              Features of Cryptocurrency Exchange Software Development Basic
              Level
            </Heading>

            <Text align={'center'} letterSpacing={1}>
            th-art-min
Art
Tokenize artworks and scale your capabilities to align with your business strategies and needs.

th-venture-capital-min
Venture Capital Funds
Tokenize venture capital funds to unlock enhanced fundraising prospects.

th-exclusive-goods-min
Exclusive Goods
Enhance your tokens' value by backing them with collectible cars, coins, jewelry, and more.

th-illiquid-asset-min
Illiquid Assets
Convert illiquid assets into cash without compromising their value through tokenization.

            </Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Security Token Development
</Heading>

<Text align={'center'} letterSpacing={1} mt={4}>
 <strong> Empowering the Future of Fundraising</strong>
</Text>

<Text align={'center'} mt={6}>
  Elevate your project funding to new heights with the revolutionary approach of security token offerings.
</Text>


<Text align={'center'} mt={6}>
  AradChain Technologies is at the forefront of shaping the future of legal fundraising through strategic consulting and innovative security token development services. Your budding concept is transformed into a tailor-made solution that fosters market penetration and engagement with potential investors. Our technology-driven, mission-oriented approach guarantees meaningful business outcomes, nurturing your growth.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={5} textAlign={'center'} mt={10} mb={10}>
  Diverse Services in STO Development
</Heading>

<Text align={'center'} mt={6}>
  <strong>
  STO
  Equity Tokens
  </strong>
</Text>

<Text align={'center'}>
  Harness optimal fundraising opportunities with our design thinking-based equity token creation approach.
</Text>

<Text align={'center'} mt={6}>
  <strong>
  STO
  Asset Tokens
  </strong>
</Text>

<Text align={'center'}>
  Ride the wave of STO (Security Token Offering) market growth with asset tokenization, seizing relevant market openings.
</Text>

<Text align={'center'}>
  <strong>
  STO
  Debt Tokens
  </strong>
</Text>

<Text align={'center'}>
  Leverage our peer-oriented, result-focused strategy to tokenize debt instruments and attract a broader investor base.
</Text>

<Heading as='h3' size='lg' letterSpacing={1} my={5} textAlign={'center'} mt={10} mb={10}>
  Asset Tokenization Varieties
</Heading>

<Text align={'center'} mt={6}>
  <strong>
  STO
  Real Estate
  </strong>
</Text>

<Text align={'center'}>
  Nurture business growth by digitizing real estate assets, granting global and digital accessibility to potential investors.
</Text>

<Text align={'center'} mt={6}>
  <strong>
  Th-art-min
  Art
  </strong>
</Text>

<Text align={'center'}>
  Tokenize artworks and scale your capabilities to align with your business strategies and needs.
</Text>

<Text align={'center'} mt={6}>
  <strong>
  Th-venture-capital-min
  Venture Capital Funds
  </strong>
</Text>

<Text align={'center'}>
  Tokenize venture capital funds to unlock enhanced fundraising prospects.
</Text>

<Text align={'center'} mt={6}>
  <strong>
  Th-exclusive-goods-min
  Exclusive Goods
  </strong>
</Text>

<Text align={'center'} >
  Enhance your tokens' value by backing them with collectible cars, coins, jewelry, and more.
</Text>

<Text align={'center'} mt={6}>
  <strong>
  Th-illiquid-asset-min
  Illiquid Assets
  </strong>
</Text>

<Text align={'center'}>
  Convert illiquid assets into cash without compromising their value through tokenization.
</Text>
<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Frequently Asked Questions
</Heading>

<Text align={'center'} mt={6}>
  How is your Security Token Offering Regulated?
</Text>

<Text align={'center'} mt={6}>
  Participation in STO involves AML and KYC checks, similar to opening a bank account or stock exchange account. Our due diligence checks adhere to Swiss law, FAFT, and EU AML regulations, ensuring the highest safety standards and regulatory compliance.
</Text>

<Text align={'center'} mt={6}>
  How long does it take to launch an STO?
</Text>

<Text align={'center'} mt={6}>
  What factors influence the cost of STO development?
</Text>

<Text align={'center'} mt={6}>
  Does STO development follow the same process as ICO?
</Text>

<Text align={'center'} mt={6}>
  How is STO development advantageous for businesses?
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Insights from Our Blog
</Heading>

<Text align={'center'} mt={6}>
  <strong>
  Asset Tokenization Disrupting the Financial Industry: Why Should Businesses Embrace it?
  </strong>
</Text>

<Text align={'center'} mt={6}>
  Explore how tokenizing assets, from real estate to commodities, is reshaping asset investment strategies.
</Text>

<Text align={'center'} mt={6}>
  <strong>How to Bring Liquidity to Security Tokens</strong>
</Text>

<Text align={'center'} mt={6}>
  Discover how ICOs and STOs are modernizing fundraising tools and paving the way for liquidity in the cryptocurrency world.
</Text>

<Text align={'center'} mt={6}>
  <strong>Security Token Exchange Development: Gaining Worldwide Acceptance</strong>
</Text>

<Text align={'center'}  mt={6}>
  Learn how investors and property owners are embracing blockchain crowdfunding for effective fundraising.
</Text>

<Heading as='h2' size='2xl' letterSpacing={2} my={5} textAlign={'center'} mt={10} mb={10}>
  Our Blockchain Tech Expertise
</Heading>

<Text align={'center'}>
  We're here for a friendly chat to discuss your business needs.
</Text>

<Text align={'center'}>
  Feel free to reach out for technical support or inquiries!
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