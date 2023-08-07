import React from "react";
import nature from "../image/sawah/3.JPG";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import Mapwisata from "../components/Mapwisata";
import Cardwisata from "../components/Cardwisata";
import Footer from "../components/Footer";

const Wisata = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${nature}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <Navbar />
      <Upper
        backgroundImageStyle={backgroundImageStyle}
        title="Potensi Wisata"
      />
      <Mapwisata />
      <Cardwisata />
      <Footer />
    </div>
  );
};

export default Wisata;
