import React from "react";

function Upper(props) {
  return (
    <>
      <div
        className="text-white w-full h-[40vh] bg-black"
        style={props.backgroundImageStyle}
      >
        <div className="max-w-[800px] w-full h-full pt-[32px] mx-auto text-center flex flex-col justify-center">
          <h1 className="md:text-6xl sm:text-5xl text-4xl md:py-6 font-bold font-dmserif text-darkgreen">
            {props.title}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Upper;
