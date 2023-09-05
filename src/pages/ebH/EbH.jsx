import React from "react";
import style from "./ebH.module.css";
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
              <h2>Blockchain Solutions for Healthcare: Revolutionizing the Medical Industry</h2>
            </div>
            <div>
              <p>
              Request a Free Demo
Transforming the Medical Landscape with Blockchain Healthcare Solutions
As the healthcare industry grapples with critical issues such as data security, sharing, and interoperability, the need for cutting-edge technology solutions like Blockchain has become increasingly urgent.

At AradChain Technologies Solutions, our team of blockchain experts harnesses their technical prowess to create a highly secure platform for storing medical records and streamlining various processes within the industry.

Connect on WhatsApp
Connect on Telegram

              </p>
              <p>
              Revolutionizing Healthcare with Blockchain
From patient blood pressure readings to prescription drug information, access to health-related data for continuous monitoring is crucial. However, the current healthcare infrastructure falls short in providing consistent data availability due to reasons such as data breaches and interoperability challenges. Additionally, drug counterfeiting poses a significant problem, following traditional supply chain models. Numerous statistics underscore the deficiencies of the existing healthcare system, which hinders improved health outcomes.

30%
of medicines in parts of
Latin America,
Asia, and Africa can be counterfeit. (NCBI)

50M+
50M+ patient records were
breached
in 2021 (GlobalNewsWire)

$60B+
are lost annually due to
healthcare
fraud and abuse
(GlobalNewsWire)

Blockchain Healthcare Solutions: The Solution
Blockchain, a groundbreaking technology, offers an innovative data storage and sharing solution that prioritizes privacy and interoperability. It facilitates the secure exchange of health information for authorized use, leading to improved health outcomes. As a leading blockchain healthcare solutions development company, we unlock the true potential of this technology to enhance the efficiency of the healthcare ecosystem.

With a proficient team specializing in blockchain development for healthcare, AradChain Technologies can help you create a smarter solution that revolutionizes the existing healthcare system, making it more efficient and effective. Ultimately, this benefits both patients and providers in numerous ways.

Talk to Our Experts

Driving Impactful Change with AradChain Technologies's Blockchain Healthcare Solutions
AradChain Technologies takes the lead in addressing healthcare challenges with robust blockchain healthcare applications, offering countless benefits that drive transformation in the industry.

Drug Traceability
Prevent counterfeiting or unapproved drugs with blockchain healthcare applications.

Better Supply Chain Management
Enhance efficiency and transparency in the medical supply chain with blockchain's tracking of pharmaceuticals and medical devices' provenance.

Enhanced Data Security
Utilize blockchain for secure, decentralized medical data storage to prevent data breaches and ensure patient privacy.

Improved Interoperability
Enable secure health information exchange across the system, allowing doctors access to medical records from other institutions.

Faster Payment Processing
Blockchain's secure, transparent transactions streamline payment processing, reduce administrative costs, and ensure timely payments.

Improved Regulatory Compliance
Meet regulatory requirements with blockchain's secure data storage and exchange platform for sensitive information.

Connect on WhatsApp
Connect on Telegram

Key Features of Our Blockchain Healthcare Applications
Our blockchain healthcare solutions come equipped with advanced features to streamline operations for healthcare providers and drive transformative change in the industry.

Custom EMR or EHR
Enhance clinical productivity with Electronic Medical Records (EMR/EHR) for seamless patient data management accessible to both patients and doctors.

Hospital Management
Optimize hospital management and improve patient care quality with blockchain-powered solutions for overall hospital management.

Telemedicine Support
Enrich the patient experience with telemedicine support, facilitating contactless treatment through applications.

Emergency Response
Respond swiftly to emergencies with quick emergency response features, prioritizing prompt management of related activities.

Remote Patient Monitoring (RPM)
Leverage new opportunities with remote patient monitoring solutions, enabling doctors to remotely monitor patient health and provide primary care.

Talk to Our Experts

              </p>
              <p>Explore Blockchain Use Cases in Healthcare
As a trusted blockchain healthcare solutions development company, AradChain Technologies has served clients from the healthcare industry, fulfilling specific project requirements.

Clinical Trials & Research
Facilitate secure, transparent data sharing and collaboration in clinical trials and research to accelerate scientific discovery.

Healthcare Data Sharing
Enable secure patient health information exchange across providers and third parties like insurers, enhancing care coordination and industry efficiency.

Health Insurance and Claims Management
Streamline claims processing by eliminating errors and improving payment speed and accuracy through blockchain development for healthcare.

Identity Management
Boost security with a secure medical credential verification system, reducing fraud and ensuring professional and patient information is verified.

Drug Traceability
Conveniently trace prescription medications from manufacturing to the end customer, minimizing counterfeiting risks.

Supply Chain Management
Enhance supply chain transparency and efficiency with specialized blockchain healthcare solutions.

Medical Device Management
Simplify medical device data management, enhancing patient safety and minimizing faults with blockchain.

Personalized Medicine
Store and share genomic data securely through blockchain, enabling more personalized and efficient medical treatments.

Choose AradChain Technologies for Blockchain Development in Healthcare
Technical Expertise
Benefit from our exclusive focus on blockchain technologies and unmatched expertise.

Expert Team
Our 500+ experts refine offerings, suggest optimal tech strategies, and support community and campaign setups.

Rapid Development
Get tailored products for your audience, backed by a seamless development and deployment roadmap.

Complete Support
We extend our commitment beyond product launch, providing post-delivery services for your growth.

Meaningful Outcomes
We ensure tangible impacts that generate value from your investments.

Explore Our Blogs
Visit our blog for insights on blockchain, cryptocurrencies, NFTs, the metaverse, and related technologies.

Blockchain & AI: Top Use Cases and Barriers to AI Adoption

Explore Emerging Blockchain Use Cases in Real Estate

Blockchain Development for the Beauty Industry: A Boon or Bane?

Our Blockchain Tech Expertise
We're here for a friendly chat to discuss your business needs, obligation-free.

Count on us for technical support, inquiries, and requests.
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
