import React, {useEffect} from "react";
import Carousel from "./Carousel";
import nature from "../image/nature.jpg";
import dummy1 from "../image/dummy1.jpg";
import dummy2 from "../image/dummy2.jpg";
import dummy3 from "../image/dummy3.jpg";
import dummy4 from "../image/dummy4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [dummy1, dummy2, dummy3, dummy4];

const Kegiatan = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[180px] xl:px-[240px] border-y-8 bg-darkgreen border-t-green border-b-green">
      <div className="flex justify-center items-center" data-aos='fade-down'>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-yellow">
          Kegiatan Desa
        </h1>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-orange">
          Buahan
        </h1>
      </div>
      <div className="flex flex-col-reverse justify-center items-center pb:7 lg:pb-10 pt-7 lg:pt-10">
        <div className="flex flex-col justify-center px-[32px] xl:px-0" data-aos='fade-down'>
          <p className="font-opensans text-md lg:text-xl text-justify mb-7 pt-6 lg:pt-10 text-white">
            Desa Buahan, sebagai destinasi di dataran tinggi, memiliki potensi
            utama yang dapat menarik minat para pengunjung. Pemandangan sawah
            yang menghampar luas, menawarkan pesona alam yang menakjubkan dan
            memikat mata. Selain itu,
            kesejukan udara pegunungan memberikan sensasi menyegarkan bagi para
            wisatawan yang mencari ketenangan dari hiruk-pikuk kota. Desa ini
            menyimpan beragam tempat tersembunyi yang menawarkan keindahan yang
            jarang ditemui di tempat lain. Semua potensi ini membuat Desa Buahan
            berpeluang besar untuk dikembangkan sebagai tujuan wisata yang
            memikat. Desa Buahan
            menawarkan beberapa tempat menarik yang berpotensi menjadi
            daya tarik wisata, seperti hutan hijau yang
            rimbun dan kearifan lokal yang unik. Dengan upaya pengembangan yang
            tepat, Desa Buahan dapat menarik lebih banyak wisatawan dan
            memberikan manfaat ekonomi bagi masyarakat setempat.
          </p>
          <a
            target="_blank"
            href="https://buahan-gianyar.desa.id/"
            className="text-center ml-0 text-sm lg:text-md px-7 py-1.5 border-y-4 border-y-transparent bg-yellow bg-opacity-70 hover:bg-yellow hover:bg-opacity-100 hover:font-extrabold hover:text-darkgreen border-transparent hover:border-b-brown w-[150px] font-opensans font-medium mx-auto text-darkgreen"
          >
            Selengkapnya
          </a>
        </div>
        <div className="px-[32px] xl:px-0 xl:w-2/3 h-fit w-fit lg:h-fit lg:w-[640px] flex items-center" data-aos='fade'>
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
  )
}

export default Kegiatan