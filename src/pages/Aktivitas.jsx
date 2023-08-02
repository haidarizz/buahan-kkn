import React from "react";
import nature from "../image/nature.jpg";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import Cardkegiatan from "../components/Cardkegiatan";
import Footer from "../components/Footer";

const Aktivitas = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${nature}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <Navbar />
      <Upper backgroundImageStyle={backgroundImageStyle} title="Kegiatan" />
      <Cardkegiatan />
      <Footer />
    </div>
  );
};

export default Aktivitas;
