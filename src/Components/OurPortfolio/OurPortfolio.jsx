import React, { useState } from "react";
import MockUp from "./MockUp";

const OurPortfolio = () => {
  const [MockArray, setMockArray] = useState([
    { color: "#63C1AC" },
    { color: "#FFD485" },
    { color: "#BA75CC" },
    { color: "#A170ED" },
  ]);
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const handleColor = () => {
    if (toggle == true && toggle1 == false) {
      setToggle(false);
      setToggle1(true);
    }
    if (toggle == true && toggle1 == true) {
      setToggle1(true);
      setToggle(false);
      setToggle2(true);
    }
    setMockArray([
      { color: "#63C1AC" },
      { color: "#FFD485" },
      { color: "#BA75CC" },
      { color: "#A170ED" },
    ]);
  };
  const handleColor1 = () => {
    if (toggle == false && toggle1 == true) {
      setToggle1(false);
      setToggle(true);
    }
    if (toggle == true && toggle1 == true) {
      setToggle1(false);
      setToggle(true);
      setToggle2(true);
    }
    setMockArray([
      { color: "#BA75CC" },
      { color: "#63C1AC" },
      { color: "#FFD485" },
      { color: "#A170ED" },
    ]);
  };
  const handleColor2 = () => {
    if (toggle == false && toggle1 == true && toggle2 == true) {
      setToggle1(true);
      setToggle(true);
      setToggle2(false);
    }
    if (toggle == true && toggle1 == false && toggle2 == true) {
      setToggle1(true);
      setToggle(true);
      setToggle2(false);
    }
    setMockArray([
      { color: "#FFD485" },

      { color: "#63C1AC" },
      { color: "#A170ED" },
      { color: "#BA75CC" },
    ]);
  };
  return (
    <>
      <div id="PORTFOLIO" className="w-full">
        <div className="font-bold text-[20px] lg:md:text-[26px] Laptop:text-[38px] text-center mx-auto pt-16 w-72 Laptop:w-80">
          <div className="relative">
            {"our portfolio".toUpperCase()}
            <div className="absolute -bottom-2 w-full">
              <i className="block h-[3px] w-[35%] lg:w-[42%] Laptop:w-[60%] Laptop:h-[4px] mx-auto bg-[#FCBB17]"></i>
            </div>
          </div>
        </div>
        <div className="w-[300px] md:w-[365px] lg:w-[365px] Laptop:w-[650px] h-[30px] md:h-[34px] lg:h-[35px] Laptop:h-[55px] md:text-[14px] lg:text-[15px]  mx-auto my-12 Laptop:my-16 flex isolate">
          <button
            className={`w-[90px] text-[14px] md:text-[16px] md:w-[110px] Laptop:w-[180px] Laptop:text-[24px] h-[inherit] rounded ${toggle ? "bg-[#ffeab5]" : "bg-[#FCBB17]"
              } mx-auto font-[Inter]`}
            onClick={handleColor}
          >
            All
          </button>
          <button
            className={`w-[90px] text-[14px] md:text-[16px] md:w-[110px] Laptop:w-[180px] Laptop:text-[24px] h-[inherit] rounded ${toggle1 ? "bg-[#ffeab5]" : "bg-[#FCBB17]"
              } mx-auto font-[Inter]`}
            onClick={handleColor1}
          >
            <span>Mobile Apps</span>
          </button>
          <button
            className={`w-[90px] text-[14px] md:text-[16px] md:w-[110px] Laptop:w-[180px] Laptop:text-[24px] h-[inherit] rounded ${toggle2 ? "bg-[#ffeab5]" : "bg-[#FCBB17]"
              } mx-auto font-[Inter]`}
            onClick={handleColor2}
          >
            <span>Web Apps</span>
          </button>
        </div>
        <div className="flex Laptop:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 Laptop:gap-12 Laptop:gap-x-2 mx-auto md:w-[200] lg:w-[750px] Laptop:w-[1000px] pb-12">
            {MockArray.map((value, index) => (
              <MockUp key={index} color={value.color} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPortfolio;
