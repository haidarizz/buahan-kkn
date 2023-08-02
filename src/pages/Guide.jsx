import React from "react";
import nature from "../image/nature.jpg";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import Guidebook from "../components/Guidebook";
import Footer from "../components/Footer";

const Guide = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${nature}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <Navbar />
      <Upper backgroundImageStyle={backgroundImageStyle} title="Manual Book" />
      <Guidebook />
      <Footer />
    </div>
  );
};

export default Guide;
