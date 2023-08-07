import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import pesrak1 from "../image/pesrak/1.JPG";
import pesrak2 from "../image/pesrak/2.JPG";
import pesrak3 from "../image/pesrak/3.JPG";
import pesrak4 from "../image/pesrak/4.JPG";
import pesrak5 from "../image/pesrak/5.JPG";
import pesrak6 from "../image/pesrak/6.JPG";
import pesrak7 from "../image/pesrak/7.JPG";
import pesrak8 from "../image/pesrak/8.JPG";
import pesrak9 from "../image/pesrak/9.JPG";
import pesrak10 from "../image/pesrak/10.JPG";
import pesrak11 from "../image/pesrak/11.JPG";
import pesrak12 from "../image/pesrak/12.JPG";
import pesrak13 from "../image/pesrak/13.JPG";
import pesrak14 from "../image/pesrak/14.JPG";
import pesrak15 from "../image/pesrak/15.JPG";
import pesrak16 from "../image/pesrak/16.JPG";
import Carousel from "../components/Carousel";
import AOS from "aos";
import Footer from "../components/Footer";
import Deskripsikegiatan from "../components/Deskripsikegiatan";

const slides = [pesrak1, pesrak2, pesrak3, pesrak4, pesrak5, pesrak6, pesrak7, pesrak8, pesrak9, pesrak10, pesrak11, pesrak12, pesrak13, pesrak14, pesrak15, pesrak16];

const Pesrak = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${pesrak15}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Upper backgroundImageStyle={backgroundImageStyle} title="Pesta Rakyat" />
      <Deskripsikegiatan
        text="Bergabunglah dalam pesta rakyat tak terlupakan di Desa Buahan, saat kami merayakan akhir dari Program Kuliah Kerja Nyata (KKN) UGM yang penuh makna. Setelah berbulan-bulan penuh kerja keras dan dedikasi, saatnya untuk merayakan hasil jerih payah kami bersama-sama dengan masyarakat setempat.

            Pesta ini menjadi momen khusus untuk mengenang kenangan indah yang terjalin, pengalaman berharga, dan dampak positif yang kami bawa selama berada di desa ini. Bersama-sama dengan masyarakat, kami berbagi kegembiraan, tarian, musik, dan sajian lezat yang mencerminkan keanekaragaman budaya lokal.
            
            Tidak hanya sekadar agenda penutupan, pesta rakyat ini juga menjadi wujud terima kasih kami kepada masyarakat Desa Buahan yang telah menerima kami dengan tangan terbuka dan memberi kami pengalaman hidup yang tak terlupakan. Kami percaya bahwa hubungan yang terjalin selama KKN akan terus tumbuh dan menjadi fondasi dalam membangun masa depan yang lebih baik bersama.
            
            Bergabunglah dalam keceriaan dan semangat persahabatan kami dalam pesta rakyat di Desa Buahan, saat kami merayakan pencapaian, mengenang momen-momen istimewa, dan mengirimkan pesan perpisahan penuh harapan untuk masa depan."
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

export default Pesrak;
