import React, { useEffect } from "react";
import Carousel from "./Carousel";
import dummy1 from "../image/sawah/1.JPG";
import dummy2 from "../image/sawah/2.JPG";
import dummy3 from "../image/sawah/3.JPG";
import dummy4 from "../image/sawah/4.JPG";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [dummy1, dummy2, dummy3, dummy4];

const Potensi = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[180px] xl:px-[240px] border-y-8 border-t-green border-b-green bg-darkgreen">
      <div className="flex justify-center items-center" data-aos="fade-down">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-yellow">
          Potensi Wisata
        </h1>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-orange">
          Buahan
        </h1>
      </div>
      <div className="flex flex-col-reverse xl:flex-row justify-center items-center pb:7 lg:pb-10 pt-7 lg:pt-10">
        <div
          className="flex flex-col justify-center xl:pr-10 px-[32px] xl:pl-0 xl:w-1/2"
          data-aos="fade-down"
        >
          <p className="font-opensans text-md lg:text-xl text-justify mb-7 pt-6 lg:pt-10 xl:pt-0 text-white">
            Selamat datang di website Desa Buahan, destinasi yang menggoda
            selera petualangan dan keindahan alam!
            Dalam langkah inovatif menuju kemajuan pariwisata lokal, kami
            membuka pintu wawasan mendalam ke pesona alam Desa Buahan yang belum
            terungkap. Dari hamparan sawah yang menghijau hingga lekuk-lekuk
            bukit yang menakjubkan, informasi terperinci tentang setiap sudut
            destinasi ini dapat dengan mudah ditemukan di halaman khusus kami.
            Tidak lagi perlu bertanya-tanya tentang apa yang bisa Anda temukan
            di Desa Buahan. Dengan panduan lengkap tentang objek wisata,
            aktivitas menarik, dan kekayaan budaya lokal, kami menyajikan
            semuanya di satu tempat yang nyaman. Kami memiliki
            informasi terkini dan terpercaya untuk semua kebutuhan petualangan
            Anda. Jangan lewatkan kesempatan untuk merasakan pesona autentik
            Desa Buahan. Kami mengundang Anda untuk menjelajahi website kami dan
            merencanakan perjalanan tak terlupakan ke destinasi yang memikat
            ini. Dengan Informasi Potensi Wisata kami, mari kita bersama-sama
            mengukir kenangan luar biasa di tengah keajaiban alam Desa Buahan
            yang menanti untuk diungkapkan.
          </p>
          <a
            target="_blank"
            href="https://buahan-gianyar.desa.id/"
            className="text-center ml-0 text-sm lg:text-md px-7 py-1.5 border-y-4 border-y-transparent bg-yellow bg-opacity-70 hover:bg-yellow hover:bg-opacity-100 hover:font-extrabold border-transparent hover:border-b-brown w-[150px] font-opensans font-medium mx-auto text-darkgreen"
          >
            Selengkapnya
          </a>
        </div>
        <div
          className="px-[32px] xl:pl-10 xl:pr-0 xl:w-1/2 h-fit w-fit lg:h-[360px] lg:w-[640px] flex items-center"
          data-aos="fade-down"
        >
          <Carousel>
            {[
              ...slides.map((s) => (
                <img
                  className="top-0 bottom-0 px-0 lg:px-0 h-full w-fit"
                  src={s}
                />
              )),
            ]}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Potensi;
