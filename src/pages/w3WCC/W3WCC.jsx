import React from "react";
import style from "./w3WCC.module.css";
// import image from '../../assets/aboutInfo2.png'
import crypto1 from "../../assets/crypto1.png";
import crypto2 from "../../assets/crypto2.png";
import data from "../../database/data";
import Whyus from "../../components/whyUs/Whyus";
import Heading from "../../components/heading/Heading";
import AboutStats from "../../components/aboutStats/AboutStats";
import Team from "../../components/team/Team";
import { Link } from "react-router-dom";
import Footer1 from "../../components/footer1/Footer1";
import Needsolution from "../../components/needSolution/Needsolution";
import map from "../../assets/map-pattern-1.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const About = () => {
  // console.log(data.aboutStatsData)
  return (
    <div className={style.aboutMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <Heading heading="About" />
          <div className={style.mainSectionContent}>
            <div>
              <img src={map} alt="" />
              <h2>Web 3 Consulting Company</h2>
            </div>
            <div>
              <p>
              Web 3 Advisory Company
Leverage the Expertise of Our Premier Web 3 Advisors to Propel Your Business Ahead in Today's Competitive Landscape


TALK TO OUR EXPERTS

DID YOU KNOW!
Bankless Times' report indicates that the global web 3 market was valued at $3.2 billion in 2021, with the current market cap soaring to $27.5 billion.

              </p>
              <p>
              Top-tier Web 3 Advisors at Your Service
Web 3 has garnered significant attention, leaving many curious about its essence. In simple terms, web 3 merges today's internet with blockchain-based infrastructure, offering the benefits of blockchain technology.

Web 3 opens a realm of opportunities across industries. Enter AradChain Technologies, a leading web 3 advisory firm, offering guidance to businesses in efficiently exploring and harnessing opportunities for growth.

Web 3 Advisory Services for Your Business
Our web 3 advisory services extract the best from emerging technology, fostering business benefits.

Crafting Web 3 Strategy and Roadmap
As a trusted web 3 advisory firm, we unleash the true potential of web 3. We assist businesses in creating strategies and roadmaps for a seamless transition into the web 3 domain.
Web 2 to Web 3 Migration
Our web 3 advisory and consultation services facilitate effortless migration from web 2 to web 3, ensuring a smooth transition without interruptions.
Integrating Web 3 Solutions
Engage our expert web 3 consultants to explore how integrating web 3 technology can unlock new avenues, preparing businesses for the future.
Web 3 Game Consultation
Utilize our team's domain knowledge and expertise in web 3 game development to harness the right web 3 technologies for your gaming projects.
Developing Web 3 Business Apps
Our web 3 advisory services empower businesses to develop result-oriented applications, expanding their market reach and boosting profitability.
Web 3 Compliance Solutions
AradChain Technologies, a premium web 3 advisory firm, offers compliance services, enabling businesses to navigate the web 3 space and develop superior solutions.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM
DID YOU KNOW!
A surprising 46% of finance apps are built on web 3 technology.

Benefits of Web 3 Advisory
Discover the advantages of our web 3 advisory services.

Streamlined Operations
Web 3 streamlines business transactions and automates processes, enhancing operational efficiency.
Reduced Dependency
Web 3's blockchain foundation eliminates third-party dependency, saving time, effort, and money.
Effective Data Management
Web 3 enhances data management, facilitating efficient sharing and collaboration across borders.
Enhanced Security
Web 3's decentralization ensures secure transactions, reducing the risk of hacks and cyber attacks.
Transparency and Trust
Web 3's integration enhances transparency and trust through blockchain technology's inherent features.
Interoperability
Web 3 enables seamless product and system interoperability across platforms.

TALK TO OUR EXPERTS

Our Web 3 Advisory Process
Explore our comprehensive Web 3 advisory and development process.

Writing Web 3 Project Proposal
We initiate our services by understanding problem statements and prioritizing project components for feasibility.
Discovery Phase
In this phase, we delve into your goals, conduct brainstorming sessions, and formulate a plan for achieving objectives.
Requirements Gathering
Gathering project requirements, conducting market analysis, and creating a roadmap pave the way for the development process.
Solution and Strategy Design
Based on project requirements, we craft solutions and strategize designs to achieve goals efficiently.

Maintenance and Support
Post-launch, we offer support and maintenance, ensuring smooth operations and addressing any glitches.
Deployment Phase
After approval by our QA team, the web project is launched, prioritizing client satisfaction and concluding the deployment phase.
Testing and Quality Analysis
Thorough testing and quality analysis are conducted post-development by our dedicated QA team.
Development Phase
Based on approved designs and strategies, core technical development ensures the project is ready for deployment.
Why Choose AradChain Technologies as Your Web 3 Advisory Firm?
AradChain Technologies, a premium web 3 advisory firm, caters to diverse business needs for effective web 3 technology implementation.

Explore the key benefits of choosing us as your web 3 consulting partner:

Expert Web 3 Consultants
Strategic Web 3 Advisory Services
Effective Solutions for Efficiency
Delivering Valuable Results

Ready to Embrace Web 3 for Your Business?

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Our Partners
Our Clients

              </p>
              <p>Frequently Asked Questions

1What is Web 3 Consulting?
Web 3 consulting refers to a professional service that guides businesses, organizations, and individuals in implementing and integrating web 3 into their operations. It involves analyzing project requirements and developing a strategic plan for seamless implementation.
2What Role Does a Web 3 Consultant Play?
3What Transformations Does Web 3 Bring to Industries?
4Why is Web 3 Gaining Traction?
5Do You Offer Web 3 Consulting for Various Industries?

Blogs at a Glance

Metaverse in Manufacturing: Role and Future Prospects
The concept of the Metaverse is pervasive, shaping our lives. The rise of blockchain, metaverse, and AI has revolutionized industries, including finance.
READ MORE

AI Empowering NPCs: Breathing Life into the Metaverse
The 21st century's innovative trio – blockchain, metaverse, and AI – have ushered in transformative changes across industries. Explore the shift.
READ MORE
White Label Crypto Bank
How to Launch a White Label Crypto Banking Platform?
Opportunities knock, and we seek swift leverage. The dynamic crypto industry beckons, offering a quick and efficient white label solution.
READ MORE
Our Blockchain Tech Expertise
We're here to discuss your business requirements in a friendly chat, with no obligations.

Count on us for technical support and to address your inquiries effectively!
</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className={style.infoSection}>
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
      </div>

      {/* Crypto Section */}
      {/* <div className={style.cryptoSection}>
        <div className={style.cryptoContainer}>
          <img src={crypto1} alt="crypto1" />
          <img src={crypto2} alt="crypto2" />
        </div>
    </div> */}

      {/* Our Team */}
      <div className={style.ourTeamSection}>
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
      </div>
      <TelegramFloatingBtn />
      <FloatingWhatsApp
        phoneNumber="447778222221"
        accountName="Jennie"
        allowEsc
        allowClickAway
        notification
        notificationSound
        buttonStyle={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
        }}
      />

      {/* Need Solution */}
      <Needsolution />

      {/* Footer Section */}
      <Footer1 />
    </div>
  );
};

export default About;
