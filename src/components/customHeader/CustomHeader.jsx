import React from "react";
import style from "./customHeader.module.css"
import {
  useDisclosure,
  Box,
  chakra,
  Text,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo2.png";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Finding if the screen is mobile or not
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "4px",
          backgroundColor: "#009EE0",
        }}
      ></Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#00234F",
          height: isMobile ? "auto" : "3rem",
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        <Box
          style={{ marginLeft: "2rem", display: isMobile ? "none" : "inline" }}
        >
          <EmailIcon color="white" />
          <chakra.span
            sx={{
              color: "white",
              marginLeft: "0.5rem",
              _hover: "#B1EDEB",
              cursor: "pointer",
            }}
            fontSize=".9rem"
          >
            info@aradchain.tech
          </chakra.span>
        </Box>
        <Box
          style={{
            marginRight: "2rem",
            marginLeft: isMobile ? "1.2rem" : "none",
            display: "flex",
            gap: "1rem",
            alignItems: isMobile ? "center" : "center",
            justifyContent: isMobile ? "center" : "center",
            flexWrap: isMobile ? "wrap" : "nowrap",
            marginBottom: isMobile ? "1rem" : "0",
          }}
        >
          <chakra.span
            sx={{
              color: "white",
              marginLeft: isMobile ? "0.5rem" : "0.5rem",
              _hover: "#B1EDEB",
              cursor: "pointer",
              marginRight:"1rem"
            }}
            fontSize=".9rem"
          >
            <chakra.span fontSize="1.2rem" sx={{ marginRight: "1rem" }}>
              &#127760;
            </chakra.span>
            Our Geographical Presence :
          </chakra.span>
          <div
            id="uk"
            className="fi fi-gb"
            style={{
              marginTop: "-12px",
              width: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginRight:"2rem"
           
            }}
          >
            <Text fontSize="0.7rem" sx={{ color: "white",  marginTop: "27px"}}>
              UK
            </Text>
          </div>
          <div
            className="fi fi-bh"
            style={{
              marginTop: "-12px",
              width: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginRight:"2rem"
            }}
          >
            <Text fontSize="0.7rem" sx={{ color: "white",  marginTop: "27px"}}>
              BH
            </Text>
          </div>
          <div
            className="fi fi-um"
            style={{
              marginTop: "-12px",
              width: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginRight:"2rem"
            }}
          >
            <Text fontSize="0.7rem" sx={{ color: "white",  marginTop: "27px" }}>
              USA
            </Text>
           
          </div>
          <div
            className="fi fi-ae"
            style={{
              marginTop: "-12px",
              width: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text fontSize="0.7rem" sx={{ color: "white",  marginTop: "27px"}}>
              UAE
            </Text>
          </div>
        </Box>
        <Box
          style={{
            marginLeft: "0",
            display: isMobile ? "flex" : "none",
            alignItems: isMobile ? "center" : "center",
            width: "100%",
            justifyContent: isMobile ? "center" : "start",
          }}
        >
          <EmailIcon color="white" />
          <chakra.span
            sx={{
              color: "white",
              marginLeft: "0.5rem",
              _hover: "#B1EDEB",
              cursor: "pointer",
            }}
            fontSize=".9rem"
          >
            info@aradchain.tech
          </chakra.span>
        </Box>
      </Box>
    </>
  );
}
