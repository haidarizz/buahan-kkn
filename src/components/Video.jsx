import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Video = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
      return (
        <div
        className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px] bg-darkgreen border-y-8 border-green"
        >
          <div className="flex justify-center items-center" data-aos="fade-down">
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-yellow">
              Video Profil
            </h1>
            <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-orange">
              Buahan
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mx-[32px] xl:mx-0 mt-6 lg:mt-10">
            <div
              className="aspect-video h-fit w-full"
              data-aos="flip-left"
            >
              <iframe
                src="https://www.youtube.com/embed/4bHUsy74Fss"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="w-full h-full shadow-md shadow-yellow"
              ></iframe>
            </div>
          </div>
        </div>
      );
}

export default Video