import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import ngaben1 from "../image/ngaben/1.JPG"
import ngaben2 from "../image/ngaben/2.JPG"
import ngaben3 from "../image/ngaben/3.JPG"
import ngaben4 from "../image/ngaben/4.JPG"
import ngaben5 from "../image/ngaben/5.JPG"
import ngaben7 from "../image/ngaben/7.JPG"
import ngaben8 from "../image/ngaben/8.JPG"
import ngaben9 from "../image/ngaben/9.JPG"
import Carousel from "../components/Carousel";
import AOS from "aos";
import Footer from "../components/Footer";
import Deskripsikegiatan from "../components/Deskripsikegiatan";

const slides = [ngaben1, ngaben2, ngaben3, ngaben4, ngaben5, ngaben7, ngaben8, ngaben9];

const Ngaben = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${ngaben7}")`,
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
        title="Upacara Ngaben"
      />
      <Deskripsikegiatan
        text="Ngaben, merangkul kedalaman budaya Bali, adalah upacara pemakaman yang indah dan penuh makna. Ini adalah perayaan spiritual di mana masyarakat Bali mengantar roh ke alam baka dengan penuh penghormatan dan kecintaan.

            Dalam Upacara Ngaben, api suci digunakan sebagai simbol pemurnian roh yang meninggalkan dunia fisik. Umat menghormati leluhur dan menghantar mereka ke alam roh dengan layanan yang terhormat dan penuh rasa syukur. Mereka percaya bahwa upacara ini membantu roh berpindah ke alam baka dengan damai.
            
            Setiap aspek Ngaben memiliki makna mendalam, dari persiapan penganan hingga pembakaran mayat. Semua elemen ini menggambarkan kesucian dan keterhubungan antara manusia dan alam roh. Ngaben juga mencerminkan sikap rendah hati dan kerendahan hati dalam menghadapi siklus kehidupan dan kematian.
            
            Sebagai peristiwa budaya yang sangat berarti, Ngaben juga menjadi waktu di mana keluarga berkumpul dan komunitas bersatu. Ini bukan hanya sebuah upacara, tetapi juga ajang untuk menghargai akar budaya dan mengambil inspirasi dari ketekunan, ketabahan, dan kebijaksanaan para leluhur.
            
            Ngaben adalah suatu kisah penuh cinta dan penghormatan terhadap siklus kehidupan dan kematian. Ini adalah perayaan spiritual yang mengajarkan pentingnya menghargai dan memperingati leluhur, sambil merayakan keabadian roh dan kehidupan yang lebih tinggi."
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

export default Ngaben;
