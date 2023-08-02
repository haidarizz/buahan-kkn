import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Batas = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
      return (
        <div className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px]">
          <div className="flex justify-center items-center" data-aos="fade-down">
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
              Batas Geografis
            </h1>
            <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
              Buahan
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-center p-[5px] mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-6 lg:mt-10"
            data-aos="fade-right"
          >
            <div className="bg-white w-full">
              <div className="p-[16px] w-full">
                <p className="font-opensans text-md lg:text-xl text-center">
                  Utara: Desa Buahan Kaja
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center p-[5px] mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-3 lg:mt-6"
            data-aos="fade-right"
          >
            <div className="bg-white w-full">
              <div className="p-[16px] w-full">
                <p className="font-opensans text-md lg:text-xl text-center">
                  Timur: Desa Puhu
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center p-[5px] mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-3 lg:mt-6"
            data-aos="fade-right"
          >
            <div className="bg-white w-full">
              <div className="p-[16px] w-full">
                <p className="font-opensans text-md lg:text-xl text-center">
                  Selatan: Desa Melinggih
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center p-[5px] mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-3 lg:mt-6"
            data-aos="fade-right"
          >
            <div className="bg-white w-full">
              <div className="p-[16px] w-full">
                <p className="font-opensans text-md lg:text-xl text-center">
                  Barat: Desa Petang dan Desa Pangsan
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Batas