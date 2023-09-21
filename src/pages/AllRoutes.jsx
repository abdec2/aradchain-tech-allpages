import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Services from "./services/Services";
import About from "./about/About";
import Contact from "./contact/Contact";
import Blogs from "./blogs/Blogs";
import Projects from "./projects/Projects";
import Servicespage from "./servicesPage/Servicespage";
import Projectpage from "./projectPage/Projectpage";
import Article from "./article/Article";
import PartnerWithUs from "./partner/Partner";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import SolutionExchangeCryptocurrencyExchange from "./solutionExchangeCryptocurencyExchange/SolutionExchangeCryptocurrencyExchange";
import ExchangeWhiteLabelExchange from "./exchangeWhiteLabelExchange/ExchangeWhiteLabelExchange";
import ExchangeHybridExchange from "./exchange-hybridExchange/Exchange-hybridExchange";
import ExchangeMarginTradingExchange from "./exchange-marginTradingExchange/Exchange-marginTradingExchange";
import ExchangeSecurityExchange from "./exchange-securityExchange/Exchange-securityExchange";
import ExchangeP2pExchange from "./exchange-p2pExchange/Exchange-p2pExchange";
import ExchangeMarketMakingServices from "./exchange-marketMakingServices/Exchange-marketMakingServices";
import ExchangeDerivativesExchange from "./exchange-derivativesExchange/Exchange-derivativesExchange";
import ExchangeDecentralizedExchange from "./exchange-decentralizedExchange/Exchange-decentralizedExchange";
import WalletCryptocurrencyWallet from "./wallet-cryptocurrencyWallet/Wallet-cryptocurrencyWallet";
import WalletWeb3Wallet from "./wallet-web3Wallet/Wallet-web3Wallet"
import WalletWhiteLabelWallet from "./wallet-whiteLabelWallet/Wallet-whiteLabelWallet"
import WalletMultiCurrencyWallet from "./wallet-multicurrencyWallet/Wallet-multicurrencyWallet";
import WalletnftWallet from "./wallet-nftWallet/Wallet-nftWallet"
import WallettronWallet from './wallet-tronWallet/Wallet-tronWallet'
import WalletbitcoinWallet from './wallet-bitcoinWallet/Wallet-bitcoinWallet'
import WalletmobileWallet  from './wallet-mobileWalletApp/Wallet-mobileWalletApp'
import WalletdefiWallet from './wallet-defiWallet/Wallet-defiWallet'

import NftNftDevelopment from "./nft-nftDevelopment/Nft-nftDevelopment";
import NftWhiteLabelNftMarketplace from "./nft-whiteLabelNftMarketplace/Nft-whiteLabelNftMarketplace";
import NftMusic from "./nftMusic/NftMusic";
import NftM from "./nftM/NftM";
import NftL from "./nftL/NftL";
import NftSFT from "./nftSFT/NftSFT";
import NftG from "./nftG/NftG";
import NftAR from "./nftAR/NftAR";
import NftGA from "./nftGA/NftGA";

import DeFiDD from "./deFiDD/DeFiDD";
import DeFiDYF from "./deFiDYF/DeFiDYF";
import DeFiDS from "./deFiDS/DeFiDS";
import DeFiDLAB from "./deFiDLAB/DeFiDLAB";
import DeFiDL from "./deFiDL/DeFiDL";
import DeFiDAOB from "./deFiDAOB/DeFiDAOB";
import DeFiODaoD from "./deFiODaoD/DeFiODaoD";
import DeFiDDC from "./deFiDDC/DeFiDDC";


import W3W3D from "./w3W3D/W3W3D";
import W3GD from "./w3GD/W3GD";
import WhiteWPD from "./whiteWPD/WhiteWPD";
import CCB from "./cCB/CCB";
import CCPG from "./cCPG/CCPG";
import CdCD from "./cdCD/CdCD";
import CdCLD from "./cdCLD/CdCLD";
import CdIdoD from "./cdIdoD/CdIdoD";
import CdIcoD from "./cdIcoD/CdIcoD";
import CdSD from "./cdSD/CdSD";

import BdBGD from "./bd-BGD/Bd-BGD";
import BdBD from "./bdBD/BdBD";

import BfS from "./bfS/BfS";
import BfC from "./bfC/BfC";
import BfAB from "./bfAB/BfAB";
import BfPE from "./bfPE/BfPE";
import BfT from "./bfT/BfT";
import BfPBl from './bfPBl/BfPBl'

import L1l2sBSC from "./l1l2sBSC/L1l2sBSC";
import L1l2sS from "./l1l2sS/L1l2sS";
import L1l2sL1S from "./l1l2sL1S/L1l2sL1S";
import L1l2sC from "./l1l2sC/L1l2sC";
import L1l2sE from "./l1l2sE/L1l2sE";
import L1l2sP from "./l1l2sP/L1l2sP";


import EbSC from "./ebSC/EbSC";
import EbTAL from "./ebTAL/EbTAL";
import EbEnt from "./ebEnt/EbEnt";
import EbEdu from "./ebEdu/EbEdu";
import EbF from "./ebF/EbF";
import EbH from "./ebH/EbH";
import EbRE from "./ebRE/EbRE";
import EbPTP from "./ebPTP/EbPTP";
import EbCC from "./ebCC/EbCC";

import ScSCD from "./scSCD/ScSCD";
import ScSCA from "./scSCA/ScSCA";
import AsAS from "./asAS/AsAS";
import AsCAM from "./asCAM/AsCAM";
import SSTO from "./sSTO/SSTO";
import P2pPL from "./p2pPL/P2pPL";

import BBCC from "./bBCC/BBCC";
import W3WCC from "./w3WCC/W3WCC";
import MMCC from "./mMCC/MMCC";
import AiAlCC from "./aiAlCC/AiAlCC";
import DefiDCS from "./defiDCS/DefiDCS";
import DaoDCS from "./daoDCS/DaoDCS";
import MsMAAS from "./msMAAS/MsMAAS";

import MMD from "./mMD/MMD";
import MMAD from "./mMAD/MMAD";
import MiMFE from "./miMFE/MiMFE";
import MME from "./mME/MME";
import MMG from "./mMG/MMG";
import MiMITH from "./miMITH/MiMITH";

import MiMITM from "./miMITM/MiMITM";
import MiMIE from "./miMIE/MiMIE";
import MiMIRE from "./miMIRE/MiMIRE";
import MiMCG from "./miMCG/MiMCG";
import MiMAD from "./miMAD/MiMAD";

import GG2C from "./gG2C/GG2C";
import GDI from "./gDI/GDI";
import GGDS from "./gGDS/GGDS";
import GEVS from "./gEVS/GEVS";
import GGRS from "./gGRS/GGRS";
import BfsiCDBC from "./bfsiCDBC/BfsiCDBC";
import BfsiKA from "./bfsiKA/BfsiKA";
import BfsiTF from "./bfsiTF/BfsiTF";
import BfsiI from "./bfsiI/BfsiI";

import AAU from "./aAU/AAU";
import AcP from "./acP/AcP";
import AcCU from "./acCU/AcCU";
import AcLAA from "./acLAA/AcLAA";
import AcOBS from "./acOBS/AcOBS";
import AcAW from "./acAW/AcAW";
import MPR from "./mPR/MPR";
import CC from "./cC/CC";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partner-with-us" element={<PartnerWithUs />} />
      <Route path="/services/:slug" element={<Servicespage />} />
      <Route path="/projects/:slug" element={<Projectpage />} />
      <Route path="/article/:slug" element={<Article />} />

      <Route path="/solutionExchangeCryptocurrencyExchange" element={<SolutionExchangeCryptocurrencyExchange />} />
      <Route path="/exchangeWhiteLabelExchange" element={<ExchangeWhiteLabelExchange />} />
      <Route path="/exchange-hybridExchange" element={<ExchangeHybridExchange />} />
      <Route path="/exchange-marginTradingExchange" element={<ExchangeMarginTradingExchange />} />
      <Route path="/exchange-securityExchange" element={<ExchangeSecurityExchange />} />
      <Route path="/exchange-p2pExchange" element={<ExchangeP2pExchange />} />
      <Route path="/exchange-marketMakingServices" element={<ExchangeMarketMakingServices />} />
      <Route path="/exchange-derivativesExchange" element={<ExchangeDerivativesExchange />} />
      <Route path="/exchange-decentralizedExchange" element={<ExchangeDecentralizedExchange />} />
      <Route path="/wallet-cryptocurrencyWallet" element={<WalletCryptocurrencyWallet />} />
      <Route path="/wallet-web3Wallet" element={<WalletWeb3Wallet />} />
      <Route path="/wallet-whiteLabelWallet" element={<WalletWhiteLabelWallet />} />
      <Route path="/wallet-multiCurrencyWallet" element={<WalletMultiCurrencyWallet />} />
      <Route path="/wallet-nftWallet" element={<WalletnftWallet />} />
      <Route path="/wallet-tronWallet" element={<WallettronWallet />} />
      <Route path="/wallet-bitcoinWallet" element={<WalletbitcoinWallet />} />
      <Route path="/wallet-mobileWalletApp" element={<WalletmobileWallet />} />
      <Route path="/wallet-defiWallet" element={<WalletdefiWallet />} />

      <Route path="/nft-nftDevelopment" element={<NftNftDevelopment />} />
      <Route path="/nft-whiteLabelNftMarketplace" element={<NftWhiteLabelNftMarketplace />} />
      <Route path="/nftMusic" element={<NftMusic />} />
      <Route path="/nftM" element={<NftM />} />
      <Route path="/nftL" element={<NftL />} />
      <Route path="/nftSFT" element={<NftSFT />} />
      <Route path="/nftG" element={<NftG />} />
      <Route path="/nftAR" element={<NftAR />} />
      <Route path="/nftGA" element={<NftGA />} />


      <Route path="/deFiDD" element={<DeFiDD />} />
      <Route path="/deFiDYF" element={<DeFiDYF />} />
      <Route path="/deFiDS" element={<DeFiDS />} />
      <Route path="/deFiDLAB" element={<DeFiDLAB />} />
      <Route path="/deFiDL" element={<DeFiDL />} />
      <Route path="/deFiDAOB" element={<DeFiDAOB />} />
      <Route path="/deFiODaoD" element={<DeFiODaoD />} />
      <Route path="/deFiDDC" element={<DeFiDDC />} />

      <Route path="/w3W3D" element={<W3W3D />} />
      <Route path="/w3GD" element={<W3GD />} />
      <Route path="/whiteWPD" element={<WhiteWPD />} />
      <Route path="/cCB" element={<CCB />} />
      <Route path="/cCPG" element={<CCPG />} />
      <Route path="/cdCD" element={<CdCD />} />
      <Route path="/cdCLD" element={<CdCLD />} />
      <Route path="/cdIdoD" element={<CdIdoD />} />
      <Route path="/cdIcoD" element={<CdIcoD />} />
      <Route path="/cdSD" element={<CdSD />} />
     

      <Route path="/bd-BGD" element={<BdBGD />} />
      <Route path="/bdBD" element={<BdBD />} />

      <Route path="/bfS" element={<BfS />} />
      <Route path="/bfC" element={<BfC />} />
      <Route path="/bfAB" element={<BfAB />} />
      <Route path="/bfPE" element={<BfPE />} />
      <Route path="/bfT" element={<BfT />} />
      <Route path="/bfPBl" element={<BfPBl />} />
      

      <Route path="/l1l2sBSC" element={<L1l2sBSC />} />
      <Route path="/l1l2sS" element={<L1l2sS />} />
      <Route path="/l1l2sL1S" element={<L1l2sL1S />} />
      <Route path="/l1l2sC" element={<L1l2sC />} />
      <Route path="/l1l2sE" element={<L1l2sE />} />
      <Route path="/l1l2sP" element={<L1l2sP />} />

      <Route path="/ebSC" element={<EbSC />} />
      <Route path="/ebTAL" element={<EbTAL />} />
      <Route path="/ebEnt" element={<EbEnt />} />
      <Route path="/ebEdu" element={<EbEdu />} />
      <Route path="/ebF" element={<EbF />} />
      <Route path="/ebH" element={<EbH />} />
      <Route path="/ebRE" element={<EbRE />} />
      <Route path="/ebPTP" element={<EbPTP />} />
      <Route path="/ebCC" element={<EbCC />} />

      <Route path="/scSCD" element={<ScSCD />} />
      <Route path="/scSCA" element={<ScSCA />} />
      <Route path="/asAS" element={<AsAS />} />
      <Route path="/asCAM" element={<AsCAM/>} />
      <Route path="/sSTO" element={<SSTO />} />
      <Route path="/p2pPL" element={<P2pPL />} />

      <Route path="/bBCC" element={<BBCC />} />
      <Route path="/w3WCC" element={<W3WCC />} />
      <Route path="/mMCC" element={<MMCC />} />
      <Route path="/aiAlCC" element={<AiAlCC />} />
      <Route path="/defiDCS" element={<DefiDCS />} />
      <Route path="/daoDCS" element={<DaoDCS />} />
      <Route path="/msMAAS" element={<MsMAAS />} />

      <Route path="/mMD" element={<MMD />} />
      <Route path="/mMAD" element={<MMAD />} />
      <Route path="/miMFE" element={<MiMFE />} />
      <Route path="/mME" element={<MME />} />
      <Route path="/mMG" element={<MMG />} />
      <Route path="/miMITH" element={<MiMITH />} />
      <Route path="/miMITM" element={<MiMITM />} />
      <Route path="/miMIE" element={<MiMIE />} />
      <Route path="/miMIRE" element={<MiMIRE />} />
      <Route path="/miMCG" element={<MiMCG />} />
      <Route path="/miMAD" element={<MiMAD />} />

      <Route path="/gG2C" element={<GG2C />} />
      <Route path="/gDI" element={<GDI />} />
      <Route path="/gGDS" element={<GGDS />} />
      <Route path="/gEVS" element={<GEVS />} />
      <Route path="/gGRS" element={<GGRS />} />
      <Route path="/bfsiCDBC" element={<BfsiCDBC />} />
      <Route path="/bfsiKA" element={<BfsiKA />} />
      <Route path="/bfsiTF" element={<BfsiTF />} />
      <Route path="/bfsiI" element={<BfsiI />} />


      <Route path="/aAU" element={<AAU />} />
      <Route path="/acP" element={<AcP />} />
      <Route path="/acCU" element={<AcCU />} />
      <Route path="/acLAA" element={<AcLAA />} />
      <Route path="/acOBS" element={<AcOBS />} />
      <Route path="/acAW" element={<AcAW />} />
      <Route path="/mPR" element={<MPR />} />
      <Route path="/cC" element={<CC />} />

    </Routes>
  );
};

export default AllRoutes;
