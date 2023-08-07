import React from "react";
import cover from "../image/pesrak/15.JPG";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import Cardkegiatan from "../components/Cardkegiatan";
import Footer from "../components/Footer";

const Aktivitas = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${cover}")`,
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
