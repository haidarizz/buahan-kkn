import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Deskripsikegiatan(props){
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
      return (
        <div className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px]">
          <div className="flex justify-center items-center" data-aos="fade-down">
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
              Deskripsi
            </h1>
            <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
              Kegiatan
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-center mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-6 lg:mt-10"
            data-aos="fade-right"
          >
            <div className="bg-white m-[5px]">
              <div className="px-[16px] pt-[16px] pb-[22px] flex flex-col items-center">
                <p className="font-opensans text-md lg:text-xl text-justify">
                  {props.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Deskripsikegiatan