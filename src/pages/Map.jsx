import React from "react";
import nature from "../image/sawah/6.JPG";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import Mapfull from "../components/Mapfull";
import Batas from "../components/Batas";
import Footer from "../components/Footer";

const Map = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${nature}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <Navbar />
      <Upper backgroundImageStyle={backgroundImageStyle} title="Peta" />
      <Mapfull />
      <Batas />
      <Footer />
    </div>
  );
};

export default Map;
