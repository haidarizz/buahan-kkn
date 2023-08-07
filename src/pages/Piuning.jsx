import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import piuning1 from "../image/piuning/1.jpg";
import piuning2 from "../image/piuning/2.jpg";
import piuning3 from "../image/piuning/3.jpg";
import piuning4 from "../image/piuning/4.jpg";
import piuning5 from "../image/piuning/5.jpg";
import piuning6 from "../image/piuning/6.jpg";
import piuning7 from "../image/piuning/7.jpg";
import Carousel from "../components/Carousel";
import AOS from "aos";
import Footer from "../components/Footer";
import Deskripsikegiatan from "../components/Deskripsikegiatan";

const slides = [
  piuning1,
  piuning2,
  piuning3,
  piuning4,
  piuning5,
  piuning6,
  piuning7,
];

const Piuning = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${piuning2}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Upper
        backgroundImageStyle={backgroundImageStyle}
        title="Matur Piuning"
      />
      <Deskripsikegiatan
        text="Matur Piuning, sebuah persembahan spiritual dalam budaya Bali, merangkul makna mendalam tentang keselamatan dan harmoni. Dalam ritual ini, umat Bali memohon restu dan perlindungan kepada Ida Sang Hyang Widhi Wasa (Tuhan Yang Maha Esa) serta para Batara, leluhur yang dianggap bersemayam di alam spiritual.

Melalui Matur Piuning, komunitas Bali mengungkapkan penghargaan mendalam kepada alam semesta dan keterhubungan mereka dengan alam roh. Ritual ini adalah ekspresi rasa syukur dan kerendahan hati, di mana umat berharap diberkahi dengan keselamatan dan kelimpahan dalam kehidupan mereka.

Dengan langkah penuh penghormatan, Matur Piuning melibatkan pengorbanan seperti bunga, buah, dan sesaji lainnya sebagai tanda penghormatan terhadap keberadaan spiritual. Semangat gotong royong dan kebersamaan tercermin dalam pelaksanaan ritual ini, menciptakan harmoni antara manusia, alam, dan dunia roh.

Begitu pentingnya nilai-nilai luhur dalam budaya Bali tercermin dalam Matur Piuning, sebuah perayaan spiritual yang mengajarkan tentang keseimbangan, keselarasan, dan hubungan yang mendalam antara manusia dan dimensi spiritual. Dengan penuh keyakinan, Matur Piuning mengajarkan bahwa dengan menghormati alam semesta, kita meraih kedamaian dan keberkahan dalam hidup."
      />
      <div className="py-7 px-[32px] sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px]">
        <div className="flex justify-center items-center" data-aos="fade-down">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
            Foto
          </h1>
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
            Kegiatan
          </h1>
        </div>
        <div
          className="mt-7 lg:mt-10 xl:px-0 h-fit w-fit lg:h-fit flex items-center shadow-xl shadow-darkgreen"
          data-aos="fade"
        >
          <Carousel>
            {[
              ...slides.map((s) => (
                <img
                  className="top-0 bottom-0 px-0 lg:px-0 h-full w-fit"
                  src={s}
                  alt="img"
                />
              )),
            ]}
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Piuning;
