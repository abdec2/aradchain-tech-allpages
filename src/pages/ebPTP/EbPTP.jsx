import React from "react";
import style from "./ebPTP.module.css";
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
              <h2>Procure to Pay</h2>
            </div>
            <div>
              <p>
              Revolutionize the procure to pay cycle using blockchain technology, enhancing the management of goods, services, and resources.

REQUEST A FREE DEMO

Blockchain for Procure to Pay: Streamlined Monitoring and Disbursement
Procure-to-Pay (PTP) encompasses multiple steps, connecting clients with one or more service/product providers. This process involves stakeholder identification, budgeting, invoicing, payment settlement, and more.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Challenges in the Conventional PTP Process
The procure-to-pay process is intricate, spanning systems and operations, and susceptible to inefficiencies and vulnerabilities like fraud and money laundering. As a critical business process involving substantial cash flows, it must overcome challenges related to operational processes, transactions, and supply chain visibility. Manual functions, duplicate data, and reconciliation issues plague the current process.

TALK TO OUR EXPERTS

              </p>
              <p>
              Blockchain Solution for Procure to Pay
Here are the common PTP challenges that hinder effective execution and management:

Reduced Accuracy
Manual, paper-based data entry increases the risk of errors.

Lack of Visibility
Information exchange and accessibility delays across the supply chain.

Forged Invoicing
Lack of centralized transaction history leads to forged invoices.

Delayed Transactions
Manual routing and sign-off processes slow down payments.

High Costs per Invoice
Human error resolution escalates invoice costs.

AradChain Technologies’s Approach - Blockchain for Procure to Pay
Blockchain technology can transform the PTP process, offering benefits like transparency, security, and transaction efficiency. Blockchain in procurement streamlines tasks by automating information exchange.

We utilize blockchain to create a PTP solution covering the entire spectrum of processes – from invoice processing and data management to funds management and on-time payments. Our blockchain procurement solution aims to:

Simplify User Onboarding
Utilize blockchain-driven KYC or digital identity verification for fast user onboarding and centralized document repository.

Enhance Validation and Authentication
Blockchain facilitates quick authentication distribution across the PTP chain, enhancing fraud prevention and security.

Facilitate Invoice Processing
Blockchain-powered invoice exchange grants shared database access, eliminating invoice scanning and enabling authorized parties to review transactions.

Accelerate Settlements
Transparent, real-time shared database minimizes the need for reconciliations, potentially revolutionizing settlement times.

Promote Stakeholder Trust
Shared public IDs, product quality ratings, reliable delivery, timely invoice payment, and transaction history cultivate trust.

Mitigate Money Laundering Risk
Access to tamper-free historical payment information allows real-time identification of suspicious transactions, reducing money laundering risk.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Features of Our Blockchain-Based Procure to Pay Solution
Our blockchain-based solution boasts cutting-edge features for high performance.

Procure-to-Pay on Blockchain
Multi-currency Wallet
Secure storage and transfer of various cryptocurrencies and tokens, enabling secure transactions.

Procure-to-Pay on Blockchain
Smart Contract
Manages crypto token creation and distribution for payments across the PTP chain.

Procure-to-Pay on Blockchain
Powerful Matching Engine
Quickly matches buy and sell orders, ensuring prompt order fulfillment.

Procure-to-Pay on Blockchain
Instant KYC and AML
Blockchain-driven KYC and AML processes expedite user verification.

Procure-to-Pay on Blockchain
Liquidity Options
High liquidity through secure API connections with external exchanges.

Procure-to-Pay on Blockchain
Reporting Dashboard
Access balance and transaction reports for transparency and decision-making.

Procure-to-Pay on Blockchain
Multi-layer Security
Enhanced security through two-factor authentication, encryption, and more.

Procure-to-Pay on Blockchain
Funds Management
Simplifies fund management and provides essential details.

Procure-to-Pay on Blockchain
User Management
Efficiently manages users, logins, privileges, and roles.

SCHEDULE A FREE DEMO

              </p>
              <p>Our Software Modules Include
1
Admin Panel
Real-time view of exchange and transactions
User management, profiles, funds, tokens
Transaction and revenue reports
2
Exchange
Crypto-to-fiat trading, order book, transaction history
Real-time trading prices
3
Wallet
Real-time transactions and balance management
Multiple crypto wallet management
4
Smart Contract
Manages ERC20 token creation, supply, transfers, burning

If custom modules align with your needs, our development journey will accommodate your requirements.

CONNECT ON WHATSAPP CONNECT ON TELEGRAM

Security Features of Our Blockchain Procurement Solution
Our solution is fortified with multi-layer security measures for secure PTP processes.

Blockchain PTP Security
HTTP Authentication
Secure HTTP Authentication tokens, like OAuth, ensure user authentication.

Blockchain PTP Security
Data Encryption
Data encryption safeguards confidential information during transmission.

Blockchain PTP Security
Jail Login
Prevents multiple failed login attempts for a specified time.

Blockchain PTP Security
Anti-Denial of Service (DoS)
Protects against large requests to the server.

Blockchain PTP Security
Cross-Site Request Forgery (CSRF) Protection
Safeguards against unwanted user actions.

Blockchain PTP Security
Server-Side Request Forgery (SSRF) Protection
Protects against attacks from vulnerable web applications.

Blockchain PTP Security
HTTP Parameter Pollution Protection
Guards against attacks seeking hidden information.

Blockchain PTP Security
Escrow System
Smart-contract-driven escrow system ensures secure transactions.
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
      <Needsolution />

      {/* Footer Section */}
      <Footer1 />
    </div>
  );
};

export default About;
