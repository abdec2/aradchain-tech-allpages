import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar2/Navbar2";
import AllRoutes from "./pages/AllRoutes";
import CustomNavbar from "./components/customNavbar/CustomNavbar";
import { useLocation, useParams } from "react-router-dom";

function App() {
  const location = useLocation();
  const currentPage = location.pathname;
  // console.log("check:", currentPage)

  return (
    <>
      {currentPage === "/" && <CustomNavbar />}
      {currentPage === "/services" && <CustomNavbar />}
      {currentPage?.includes("/services/") && <CustomNavbar />}
      {currentPage?.includes("/projects/") && <CustomNavbar />}
      {currentPage?.includes("/article/") && <CustomNavbar />}
      {currentPage === "/about" && <CustomNavbar />}
      {currentPage === "/contact" && <CustomNavbar />}
      {currentPage === "/projects" && <CustomNavbar />}
      {currentPage === "/blogs" && <CustomNavbar />}
      {currentPage === "/partner-with-us" && <CustomNavbar />}

      {/* Saad! below routes needs styling and layout adjustments.. right now these routes can not be accessed from website you need to enter these routes in browser address bar */}

      {currentPage === "/solutionExchangeCryptocurrencyExchange" && <CustomNavbar />}
      {currentPage === "/exchangeWhiteLabelExchange" && <CustomNavbar />}
      {currentPage === "/exchange-hybridExchange" && <CustomNavbar />}
      {currentPage === "/exchange-marginTradingExchange" && <CustomNavbar />}
      {currentPage === "/exchange-securityExchange" && <CustomNavbar />}
      {currentPage === "/exchange-p2pExchange" && <CustomNavbar />}
      {currentPage === "/exchange-marketMakingServices" && <CustomNavbar />}
      {currentPage === "/exchange-derivativesExchange" && <CustomNavbar />}
      {currentPage === "/exchange-decentralizedExchange" && <CustomNavbar />}

      {currentPage === "/wallet-cryptocurrencyWallet" && <CustomNavbar />}
      {currentPage === "/wallet-web3Wallet" && <CustomNavbar />}
      {currentPage === "/wallet-whiteLabelWallet" && <CustomNavbar />}
      {currentPage === "/wallet-multicurrencyWallet" && <CustomNavbar />}
      {currentPage === "/wallet-nftWallet" && <CustomNavbar />}
      {currentPage === "/wallet-tronWallet" && <CustomNavbar />}
      {currentPage === "/wallet-bitcoinWallet" && <CustomNavbar />}
      {currentPage === "/wallet-mobileWalletApp" && <CustomNavbar />}
      {currentPage === "/wallet-defiWallet" && <CustomNavbar />}

      {currentPage === "/nft-nftDevelopment" && <CustomNavbar />}
      {currentPage === "/nft-whiteLabelNftMarketplace" && <CustomNavbar />}
      {currentPage === "/nftM" && <CustomNavbar />}
      {currentPage === "/nftL" && <CustomNavbar />}
      {currentPage === "/nftSFT" && <CustomNavbar />}
      {currentPage === "/nftG" && <CustomNavbar />}
      {currentPage === "/nftA" && <CustomNavbar />}
      {currentPage === "/nftGA" && <CustomNavbar />}
      {currentPage === "/nftMusic" && <CustomNavbar />}

      {currentPage === "/deFiDD" && <CustomNavbar />}
      {currentPage === "/deFiDYF" && <CustomNavbar />}
      {currentPage === "/deFiDS" && <CustomNavbar />}
      {currentPage === "/deFiDLAB" && <CustomNavbar />}
      {currentPage === "/deFiDAOB" && <CustomNavbar />}
      {currentPage === "/deFiDL" && <CustomNavbar />}
      {currentPage === "/deFiODaoD" && <CustomNavbar />}
      {currentPage === "/deFiDDC" && <CustomNavbar />}


      {currentPage === "/w3W3D" && <CustomNavbar />}
      {currentPage === "/w3GD" && <CustomNavbar />}
      {currentPage === "/whiteWPD" && <CustomNavbar />}
      {currentPage === "/cCB" && <CustomNavbar />}
      {currentPage === "/cCPG" && <CustomNavbar />}
      {currentPage === "/cdCD" && <CustomNavbar />}
      {currentPage === "/cdCLD" && <CustomNavbar />}
      {currentPage === "/cdIdoD" && <CustomNavbar />}
      {currentPage === "/cdIcoD" && <CustomNavbar />}
      {currentPage === "/cdSD" && <CustomNavbar />}


      {currentPage === "/bd-BGD" && <CustomNavbar />}
      {currentPage === "/bdBD" && <CustomNavbar />}


      {currentPage === "/bfS" && <CustomNavbar />}
      {currentPage === "/bfC" && <CustomNavbar />}
      {currentPage === "/bfAB" && <CustomNavbar />}
      {currentPage === "/bfPE" && <CustomNavbar />}
      {currentPage === "/bfT" && <CustomNavbar />}
      {currentPage === "/bfPBI" && <CustomNavbar />}


      {currentPage === "/l1l2sBSC" && <CustomNavbar />}
      {currentPage === "/l1l2sS" && <CustomNavbar />}
      {currentPage === "/l1l2sL1S" && <CustomNavbar />}
      {currentPage === "/l1l2sC" && <CustomNavbar />}
      {currentPage === "/l1l2sE" && <CustomNavbar />}
      {currentPage === "/l1l2sP" && <CustomNavbar />}


      {currentPage === "/ebSC" && <CustomNavbar />}
      {currentPage === "/ebTAL" && <CustomNavbar />}
      {currentPage === "/ebEnt" && <CustomNavbar />}
      {currentPage === "/ebEdu" && <CustomNavbar />}
      {currentPage === "/ebF" && <CustomNavbar />}
      {currentPage === "/ebH" && <CustomNavbar />}
      {currentPage === "/ebRE" && <CustomNavbar />}
      {currentPage === "/ebPTP" && <CustomNavbar />}
      {currentPage === "/ebCC" && <CustomNavbar />}


      {currentPage === "/scSCD" && <CustomNavbar />}
      {currentPage === "/scSCA" && <CustomNavbar />}
      {currentPage === "/asAS" && <CustomNavbar />}
      {currentPage === "/asCAM" && <CustomNavbar />}
      {currentPage === "/sSTO" && <CustomNavbar />}
      {currentPage === "/p2pPL" && <CustomNavbar />}

      {currentPage === "/bBCC" && <CustomNavbar />}
      {currentPage === "/w3WCC" && <CustomNavbar />}
      {currentPage === "/mMCC" && <CustomNavbar />}
      {currentPage === "/aiAlCC" && <CustomNavbar />}
      {currentPage === "/defiDCS" && <CustomNavbar />}
      {currentPage === "/daoDCS" && <CustomNavbar />}
      {currentPage === "/msMAAS" && <CustomNavbar />}

      {currentPage === "/mMD" && <CustomNavbar />}
      {currentPage === "/mMAD" && <CustomNavbar />}
      {currentPage === "/miMFE" && <CustomNavbar />}
      {currentPage === "/mME" && <CustomNavbar />}
      {currentPage === "/mMG" && <CustomNavbar />}
      {currentPage === "/miMITH" && <CustomNavbar />}
      {currentPage === "/miMITM" && <CustomNavbar />}
      {currentPage === "/miMIE" && <CustomNavbar />}
      {currentPage === "/miMIRE" && <CustomNavbar />}
      {currentPage === "/miMCG" && <CustomNavbar />}
      {currentPage === "/miMAD" && <CustomNavbar />}

      {currentPage === "/gG2C" && <CustomNavbar />}
      {currentPage === "/gDI" && <CustomNavbar />}
      {currentPage === "/gGDS" && <CustomNavbar />}
      {currentPage === "/gEVS" && <CustomNavbar />}
      {currentPage === "/gGRS" && <CustomNavbar />}
      {currentPage === "/bfsiCDBC" && <CustomNavbar />}
      {currentPage === "/bfsiKA" && <CustomNavbar />}
      {currentPage === "/bfsiTF" && <CustomNavbar />}
      {currentPage === "/bfsiI" && <CustomNavbar />}

      {currentPage === "/aAU" && <CustomNavbar />}
      {currentPage === "/acP" && <CustomNavbar />}
      {currentPage === "/acCU" && <CustomNavbar />}
      {currentPage === "/acLAA" && <CustomNavbar />}
      {currentPage === "/acAW" && <CustomNavbar />}
      {currentPage === "/mPR" && <CustomNavbar />}
      {currentPage === "/acOBS" && <CustomNavbar />}
      {currentPage === "/cC" && <CustomNavbar />}


      <AllRoutes />
    </>
  );
}

export default App;
