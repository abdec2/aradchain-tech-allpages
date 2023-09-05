import React from "react";
import style from "./ebEdu.module.css";
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
              <h2>Blockchain Solutions for Education: Shaping the Future of Learning</h2>
            </div>
            <div>
              <p>
              Request a Free Demo
Revolutionizing Education with Blockchain
Blockchain technology has the potential to revolutionize the education sector, bringing improvements in accessibility, credibility, and transparency. By offering secure, decentralized, and transparent records of learning, blockchain holds the promise to transform the way we approach education. At AradChain Technologies, we empower educational institutions with blockchain solutions for education, enhancing their systems and processes with transparency, efficiency, and accessibility. Our team of blockchain experts understands your needs and crafts a cohesive roadmap to drive and expedite your journey. If you have a business use case, connect with our subject matter experts to transform it into a market-disrupting product.

              </p>
              <p>
              Talk to Our Experts

Addressing Challenges in Education with Blockchain
The current education system grapples with inefficiencies that blockchain can address effectively.

Inefficient Record Keeping
Paper-based methods for managing academic records, certificates, and credentials lead to risks of impersonation and fraud.

Challenging Learner Performance Tracking
Tracking student progress through paperwork-intensive techniques is time-consuming and disrupts information flow.

Ineffective Identity Management
Manual identity management processes make it difficult for students to track their qualifications, certifications, and increase the risk of forgery.

Accountability Issues
Balancing attention to all students is challenging for teachers, leading to uneven regulatory compliance.

Transcript Availability
Acquiring academic records from institutions is challenging due to manual methods.

Connect with our experts to transition from inefficient educational processes to an efficient blockchain-powered educational paradigm.

Connect on WhatsApp
Connect on Telegram

Blockchain Applications in Education: Use Cases
These blockchain in education use cases highlight the promising potential of technology in the sector.

Digital Identity and Credentials Verification
Blockchain solutions for education offer secure and tamper-proof methods of verifying and storing educational credentials, aiding employers and educational institutions in confirming degree authenticity.

E-Learning Platforms and Content Distribution
Blockchain applications in education can verify digital educational resource ownership, ensuring proper compensation for creators and providing students with access to high-quality learning materials.

Supply Chain Management of Educational Resources
Blockchain technology enhances transparency and efficiency in distributing educational resources, from e-learning content to laboratory equipment.

Secure Student Data Management
Blockchain solutions for education securely manage sensitive student information, including grades, attendance records, and disciplinary history.

Decentralized Student Record Management
By adopting blockchain application in education, institutions can establish a decentralized system for storing and sharing student records, reducing data breach risks and enhancing student information accessibility.

Efficient Degree and Accreditation Verification
Blockchain solutions streamline degree and accreditation verification, reducing fraudulent activities and improving verification efficiency.

Experience the Benefits of Blockchain in Education
Enhanced Security
Blockchain solutions for education ensure tamper-proof records, safeguarding student data from alterations or deletions.

Improved Accessibility
Blockchain technology enables easy access to educational records for students, teachers, and institutions globally.

Enhanced Credibility
Blockchain-certified degrees and educational qualifications provide verifiable learning records trusted by employers.

Increased Transparency
Blockchain transparency ensures education systems are accountable and transparent, fostering public confidence in the education sector.

Harness these benefits. Collaborate with our experts.

Connect on WhatsApp
Connect on Telegram

Why Choose Us for Blockchain Education Solutions
By partnering with AradChain Technologies, you gain access to a team of technical experts with hands-on experience delivering comprehensive blockchain services.

Technical Prowess
Our focus solely on blockchain technologies ensures unmatched expertise.

Expert Team
Our 500+ experts refine offerings, suggest optimal tech strategies, and support community and campaign setups.

Rapid Development
Customized products tailored for your target audience, backed by a coherent roadmap for smooth development and deployment.

Complete Support
Our commitment extends beyond product launch, providing comprehensive post-delivery services for your growth.

Meaningful Outcomes
We deliver tangible impacts, ensuring value generation from your investments.

Explore Our Blogs
Visit our blog for insights on blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.

Blockchain & AI: Top Use Cases and Barriers to AI Adoption

Explore Emerging Blockchain Use Cases in Real Estate

Blockchain Development for the Beauty Industry: A Boon or Bane?

Our Blockchain Tech Expertise
We're here for a friendly chat to discuss your business needs, obligation-free.

Rely on us for technical support, inquiries, and requests.

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
