import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Petunjuk = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px] border-t-8 border-t-lightgreen">
      <div className="flex justify-center items-center" data-aos="fade-down">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
          Manual Book
        </h1>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
          Website
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-6 lg:mt-10" data-aos='fade'>
          <div className="bg-white m-[5px]">
            <div className="px-[16px] pt-[16px] pb-[22px] flex flex-col items-center">
          <p className="font-opensans text-md lg:text-xl text-justify mb-6">
          Website ini juga menyediakan manual book untuk mempermudah penggunaan. Dapatkan panduan lengkap dan jelas dalam satu tempat. Simplifikasi pengalamanmu di bawah ini!
          </p>
          <a
            target="_blank"
            href="https://buahan-gianyar.desa.id/"
            className="text-sm text-center lg:text-md px-7 py-1.5 border-y-4 border-y-transparent bg-yellow bg-opacity-70 hover:bg-yellow hover:bg-opacity-100 hover:font-extrabold hover:text-darkgreen border-transparent hover:border-b-brown w-[150px] font-opensans font-medium mx-auto text-darkgreen"
          >
            Selengkapnya
          </a>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Petunjuk;
