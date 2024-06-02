import React from "react";
import Icon from "../Assets/Icon.svg";

const Box = ({ heading, text }) => {
  return (
    <>
      <div className="w-[360px] h-[215px] Laptop:w-[520px] Laptop:h-[320px] Laptop:rounded-xl rounded-lg border border-[#CCCCCC] bg-[#111111] box-border px-6 p-4 Laptop:px-8 Laptop:pt-5">
        <div className="pb-2">
          <div className="mx-auto w-[50px] h-[50px] Laptop:w-[70px] Laptop:h-[70px] flex items-center justify-center rounded-full bg-[#FFD500]">
            <img src={Icon} alt="" />
          </div>
        </div>
        <div className="text-white flex flex-col items-center">
          <h1 className="font-bold text-md Laptop:text-[24px] mb-2">
            {heading}
          </h1>
          <p className="text-[11.5px] text-center leading-[18px] Laptop:text-[17px] Laptop:leading-[28px]">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Box;
