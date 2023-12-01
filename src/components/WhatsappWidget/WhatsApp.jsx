import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
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
        bottom: "3rem",
        left: "2rem",
        width: '45px',
        height: '45px'
      }}
      statusMessage="Typically Replies With in 5 minutes"
      chatboxHeight={450}
      chatboxStyle={{
        position: "fixed",
        bottom: "2rem",
        left: "2rem",
      }}
    />
  );
};

export default WhatsApp;
