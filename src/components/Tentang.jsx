import React, { useEffect } from "react";
import paper from "../image/paper.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Tentang = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const backgroundImageStyle = {
    backgroundImage: `url("${paper}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      id="tentang"
      className="pt-7 pb-5 px-0 sm:px-[70px] md:px-[120px] lg:px-[180px] xl:px-[240px] border-y-8 border-b-lightgreen border-t-green"
    >
      <div className="flex justify-center items-center" data-aos="fade-down">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
          Tentang Desa
        </h1>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
          Buahan
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center pb:7 lg:pb-10 pt-7 lg:pt-10">
        <div
          className="px-[32px] aspect-video xl:pr-10 xl:pl-0 xl:w-1/2 h-[240px] w-full sm:w-[500px] md:w-[520px] lg:h-[360px] lg:w-[664px]"
          data-aos="fade-down"
        >
          <iframe
            src="https://www.youtube.com/embed/4bHUsy74Fss"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full h-full shadow-lg shadow-darkgreen"
          ></iframe>
        </div>
        <div
          className="flex flex-col justify-center xl:pl-10 px-[32px] xl:pr-0 xl:w-1/2"
          data-aos="fade-down"
        >
          <p className="font-opensans text-md lg:text-xl text-justify mb-7 pt-6 xl:pt-0">
            Desa Dinas Buahan: Keindahan Tropis di Pelukan Pegunungan Bali.
            Tersembunyi di Kecamatan Payangan, Kabupaten Gianyar, Bali, Desa
            Dinas Buahan adalah permata alam yang menakjubkan. Dengan iklim
            sejuk dan kadang dingin, desa ini menciptakan lingkungan ideal bagi
            pertanian dan perkebunan yang makmur. Mengajak Anda menikmati pesona
            tropis yang memukau di kaki pegunungan Bali.
          </p>
          <a
            href="/profil"
            className="text-center ml-0 text-sm lg:text-md px-7 py-1.5 border-y-4 border-y-transparent bg-yellow bg-opacity-70 hover:bg-yellow hover:bg-opacity-100 hover:font-extrabold hover:text-darkgreen border-transparent hover:border-b-brown w-[150px] font-opensans font-medium mx-auto text-darkgreen"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
