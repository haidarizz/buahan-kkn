import React, { useEffect } from "react";
import nature from "../image/nature.jpg";
import sawah from "../image/sawah/4.JPG";
import budaya from "../image/ngaben/4.JPG";
import landscape from "../image/sawah/2.JPG";
import AOS from "aos";
import "aos/dist/aos.css";

const Cardwisata = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="pt-7 pb-5 px-[32px] sm:px-[70px] md:px-[120px] lg:px-[180px] xl:px-[240px] z-20">
      <div className="flex justify-center items-center" data-aos="fade-down">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
          Potensi Wisata
        </h1>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
          Buahan
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 lg:mb-5 pt-7 lg:pt-10">
        <div
          className="flex flex-col bg-gradient-to-tr from-darkgreen to-lightgreen w-full lg:w-1/2 mx-3 p-2 mb-4 lg:mb-0 shadow-lg shadow-green"
          data-aos="flip-left"
        >
          <div className="bg-white w-full px-4 pt-4 pb-6">
            <div className="overflow-hidden mb-4 shadow-sm">
              <img
                alt="img"
                src={sawah}
                className="w-full hover:scale-[1.2] object-cover transition-all duration-300 ease-in-out"
              ></img>
            </div>
            <h1 className="font-bold font-dmserif text-darkgreen text-xl mb-2">
              Persawahan dan Perkebunan (Agrowisata)
            </h1>
            <p className="font-opensans mb-5 text-justify">
              Persawahan di desa Buahan menawarkan pemandangan hijau yang luas
              dan menakjubkan. Hamparan tanaman padi yang menghijau saat musim
              tanam tiba, langit biru yang cerah, dan sinar matahari yang hangat
              menciptakan panorama yang memesona.
            </p>
            <a
              href="/agrowisata"
              className="text-sm text-center lg:text-md px-4 py-2 bg-yellow text-darkgreen hover:bg-darkgreen hover:bg-opacity-100 hover:font-extrabold hover:text-yellow transition-all duration-200 w-auto font-opensans font-medium"
            >
              Selengkapnya
            </a>
          </div>
        </div>
        <div
          className="flex flex-col bg-gradient-to-tr from-darkgreen to-lightgreen w-full lg:w-1/2 mx-3 p-2 shadow-lg shadow-green"
          data-aos="flip-left"
        >
          <div className="bg-white w-full px-4 pt-4 pb-6">
            <div className="overflow-hidden mb-4 shadow-sm">
              <img
                alt="img"
                src={nature}
                className="w-full hover:scale-[1.2] object-cover transition-all duration-300 ease-in-out"
              ></img>
            </div>
            <h1 className="font-bold font-dmserif text-darkgreen text-xl mb-2">
              Air Terjun
            </h1>
            <p className="font-opensans mb-5 text-justify">
              Potensi wisata air terjun di desa buahan merupakan aset alami yang
              menakjubkan dan menawarkan pengalaman wisata yang mengesankan. Air
              terjun di desa buahan menawarkan pemandangan alam yang memesona
              dengan dengungan air yang mengalir deras.
            </p>
            <a
              href="/airterjun"
              className="text-sm text-center lg:text-md px-4 py-2 bg-yellow text-darkgreen hover:bg-darkgreen hover:bg-opacity-100 hover:font-extrabold hover:text-yellow transition-all duration-200 w-auto font-opensans font-medium"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-4 lg:mb-4 mt-4 lg:mt-5">
        <div
          className="flex flex-col bg-gradient-to-tr from-darkgreen to-lightgreen w-full lg:w-1/2 mx-3 p-2 mb-4 lg:mb-0 shadow-lg shadow-green"
          data-aos="flip-left"
        >
          <div className="bg-white w-full px-4 pt-4 pb-6">
            <div className="overflow-hidden mb-4 shadow-sm">
              <img
                alt="img"
                src={budaya}
                className="w-full hover:scale-[1.2] object-cover transition-all duration-300 ease-in-out"
              ></img>
            </div>
            <h1 className="font-bold font-dmserif text-darkgreen text-xl mb-2">
              Budaya
            </h1>
            <p className="font-opensans mb-5 text-justify">
              Buahan, sebagai salah satu desa di Bali yang kaya akan budaya dan
              tradisi, menawarkan potensi wisata budaya yang menakjubkan dalam
              tradisinya. Desa buahan secara konsisten menjaga tradisi dan
              adat-istiadat mereka. Sehingga wisatawan memiliki kesempatan untuk
              menyaksikan budaya tersebut.
            </p>
            <a
              href="/budaya"
              className="text-sm text-center lg:text-md px-4 py-2 bg-yellow text-darkgreen hover:bg-darkgreen hover:bg-opacity-100 hover:font-extrabold hover:text-yellow transition-all duration-200 w-auto font-opensans font-medium"
            >
              Selengkapnya
            </a>
          </div>
        </div>
        <div
          className="flex flex-col bg-gradient-to-tr from-darkgreen to-lightgreen w-full lg:w-1/2 mx-3 p-2 shadow-lg shadow-green"
          data-aos="flip-left"
        >
          <div className="bg-white w-full px-4 pt-4 pb-6">
            <div className="overflow-hidden mb-4 shadow-sm">
              <img
                alt="img"
                src={landscape}
                className="w-full hover:scale-[1.2] object-cover transition-all duration-300 ease-in-out"
              ></img>
            </div>
            <h1 className="font-bold font-dmserif text-darkgreen text-xl mb-2">
              Landscape
            </h1>
            <p className="font-opensans mb-5 text-justify">
              Potensi wisata dari landscape desa buahan di perbukitan menawarkan
              pengalaman wisata yang menakjubkan dengan pemandangan alam yang
              indah dan suasana pedesaan yang tenang. Desa buahan yang terletak
              di perbukitan menawarkan pemandangan alam yang menakjubkan.
            </p>
            <a
              href="/landscape"
              className="text-sm text-center lg:text-md px-4 py-2 bg-yellow text-darkgreen hover:bg-darkgreen hover:bg-opacity-100 hover:font-extrabold hover:text-yellow transition-all duration-200 w-auto font-opensans font-medium"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardwisata;
