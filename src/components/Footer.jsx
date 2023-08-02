import React from "react";
import footerimg from "../image/footer2.png";

const Footer = () => {
  return (
    <div className="z-0">
      <div className="mt-[-45px] md:mt-[-90px] lg:mt-[-180px] xl:mt-[-240px]">
        <img alt="img" src={footerimg} />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-darkgreen mt-[-3px] pb-[32px] px-[32px] sm:pb-[70px] md:pb-[100px] sm:px-[70px] md:px-[120px] lg:px-[180px] xl:px-[240px]">
        <div className="text-center md:text-left">
          <div className="">
            <p className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl md:py-6 font-dmserif text-yellow">
              Kembara Payangan
            </p>
          </div>
          <div className="pt-3 md:pt-0">
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold font-dancingscript text-orange">
              Buahan, Payangan, Gianyar, Bali
            </p>
            <p className="font-opensans text-md lg:text-lg pt-4 lg:pt-6 text-white">
              KKN PPM UGM Periode 2 Tahun 2023
            </p>
          </div>
        </div>
        <div className="pt-7 md:pt-0">
          <a target='_blank' href="https://www.instagram.com/kembarapayangan/">
            <i className="text-white hover:text-yellow text-3xl lg:text-5xl fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
