import React from "react";
import nature from "../image/piuning/5.jpg";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import Deskripsi from "../components/Deskripsi";
import Video from "../components/Video";
import Visi from "../components/Visi";
import Misi from "../components/Misi";
import Banjar from "../components/Banjar";
import Footer from "../components/Footer";

const Profil = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${nature}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <Navbar />
      <Upper backgroundImageStyle={backgroundImageStyle} title="Profil" />
      <Deskripsi />
      <Video />
      <Visi />
      <Misi />
      <Banjar />
      <Footer />
    </div>
  );
};

export default Profil;
